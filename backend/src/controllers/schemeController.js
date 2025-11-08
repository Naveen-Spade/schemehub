const Scheme = require('../models/Scheme');
const Category = require('../models/Category');
const SavedScheme = require('../models/SavedScheme');
const User = require('../models/User');

// Get all schemes with filtering and pagination
const getAllSchemes = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search,
      category,
      state,
      min_age,
      max_age,
      sort = 'created_at',
      order = 'desc'
    } = req.query;

    // Build query
    const query = { is_active: true };

    // Search functionality
    if (search) {
      query.$text = { $search: search };
    }

    // Category filter
    if (category) {
      query.category_id = category;
    }

    // State filter
    if (state && state !== 'All India') {
      query.$or = [
        { state: 'All India' },
        { state: state }
      ];
    }

    // Age filters
    if (min_age) {
      query.$and = query.$and || [];
      query.$and.push({
        $or: [
          { min_age: null },
          { min_age: { $lte: parseInt(min_age) } }
        ]
      });
    }

    if (max_age) {
      query.$and = query.$and || [];
      query.$and.push({
        $or: [
          { max_age: null },
          { max_age: { $gte: parseInt(max_age) } }
        ]
      });
    }

    // Parse pagination
    const pageNum = parseInt(page);
    const limitNum = Math.min(parseInt(limit), 50); // Max 50 items
    const skip = (pageNum - 1) * limitNum;

    // Sort options
    const sortOptions = {};
    sortOptions[sort] = order === 'desc' ? -1 : 1;

    // Execute query with pagination
    const [schemes, totalSchemes] = await Promise.all([
      Scheme.find(query)
        .populate('category_id', 'name icon')
        .sort(sortOptions)
        .skip(skip)
        .limit(limitNum)
        .select('name description_short category_id state min_age max_age application_deadline created_at'),
      Scheme.countDocuments(query)
    ]);

    // Calculate pagination info
    const totalPages = Math.ceil(totalSchemes / limitNum);
    const has_next = pageNum < totalPages;
    const has_prev = pageNum > 1;

    res.status(200).json({
      schemes,
      pagination: {
        current_page: pageNum,
        total_pages: totalPages,
        total_schemes: totalSchemes,
        has_next,
        has_prev,
        items_per_page: limitNum
      }
    });

  } catch (error) {
    console.error('Get schemes error:', error);
    res.status(500).json({
      error: 'Failed to get schemes',
      status: 'schemes_error'
    });
  }
};

// Get scheme by ID
const getSchemeById = async (req, res) => {
  try {
    const { id } = req.params;

    const scheme = await Scheme.findOne({ _id: id, is_active: true })
      .populate('category_id', 'name icon')
      .populate('created_by', 'username')
      .select('-__v');

    if (!scheme) {
      return res.status(404).json({
        error: 'Scheme not found',
        status: 'scheme_not_found'
      });
    }

    // Check if user has saved this scheme
    let isSaved = false;
    if (req.user) {
      const savedScheme = await SavedScheme.findOne({
        user_id: req.user._id,
        scheme_id: id
      });
      isSaved = !!savedScheme;
    }

    res.status(200).json({
      scheme,
      is_saved: isSaved
    });

  } catch (error) {
    console.error('Get scheme error:', error);
    res.status(500).json({
      error: 'Failed to get scheme',
      status: 'scheme_error'
    });
  }
};

// Get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({ is_active: true })
      .populate('scheme_count')
      .select('name description icon')
      .sort('name');

    // Add scheme count for each category
    const categoriesWithCount = await Promise.all(
      categories.map(async (category) => {
        const schemeCount = await Scheme.countDocuments({
          category_id: category._id,
          is_active: true
        });
        return {
          id: category._id,
          name: category.name,
          description: category.description,
          icon: category.icon,
          scheme_count: schemeCount
        };
      })
    );

    res.status(200).json({
      categories: categoriesWithCount
    });

  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({
      error: 'Failed to get categories',
      status: 'categories_error'
    });
  }
};

// Save a scheme for user
const saveScheme = async (req, res) => {
  try {
    const { schemeId } = req.params;
    const { notes } = req.body;

    // Check if scheme exists
    const scheme = await Scheme.findOne({ _id: schemeId, is_active: true });
    if (!scheme) {
      return res.status(404).json({
        error: 'Scheme not found',
        status: 'scheme_not_found'
      });
    }

    // Check if already saved
    const existingSave = await SavedScheme.findOne({
      user_id: req.user._id,
      scheme_id: schemeId
    });

    if (existingSave) {
      return res.status(409).json({
        error: 'Scheme already saved',
        status: 'already_saved'
      });
    }

    // Create saved scheme entry
    const savedScheme = new SavedScheme({
      user_id: req.user._id,
      scheme_id: schemeId,
      notes: notes || null
    });

    await savedScheme.save();

    // Update user's saved_schemes array
    await User.findByIdAndUpdate(
      req.user._id,
      { $addToSet: { saved_schemes: schemeId } }
    );

    res.status(201).json({
      message: 'Scheme saved successfully',
      saved_scheme: {
        id: savedScheme._id,
        scheme_id: savedScheme.scheme_id,
        saved_at: savedScheme.saved_at
      }
    });

  } catch (error) {
    console.error('Save scheme error:', error);
    res.status(500).json({
      error: 'Failed to save scheme',
      status: 'save_error'
    });
  }
};

// Remove saved scheme
const removeSavedScheme = async (req, res) => {
  try {
    const { schemeId } = req.params;

    // Find and remove saved scheme
    const savedScheme = await SavedScheme.findOneAndDelete({
      user_id: req.user._id,
      scheme_id: schemeId
    });

    if (!savedScheme) {
      return res.status(404).json({
        error: 'Saved scheme not found',
        status: 'saved_scheme_not_found'
      });
    }

    // Update user's saved_schemes array
    await User.findByIdAndUpdate(
      req.user._id,
      { $pull: { saved_schemes: schemeId } }
    );

    res.status(200).json({
      message: 'Scheme removed successfully'
    });

  } catch (error) {
    console.error('Remove saved scheme error:', error);
    res.status(500).json({
      error: 'Failed to remove saved scheme',
      status: 'remove_error'
    });
  }
};

// Get user's saved schemes
const getSavedSchemes = async (req, res) => {
  try {
    const savedSchemes = await SavedScheme.find({ user_id: req.user._id })
      .populate({
        path: 'scheme_id',
        match: { is_active: true },
        populate: {
          path: 'category_id',
          select: 'name icon'
        }
      })
      .sort({ saved_at: -1 });

    // Filter out schemes that were deactivated
    const validSavedSchemes = savedSchemes.filter(
      savedScheme => savedScheme.scheme_id
    );

    res.status(200).json({
      saved_schemes: validSavedSchemes.map(savedScheme => ({
        id: savedScheme._id,
        scheme: savedScheme.scheme_id,
        saved_at: savedScheme.saved_at,
        notes: savedScheme.notes
      }))
    });

  } catch (error) {
    console.error('Get saved schemes error:', error);
    res.status(500).json({
      error: 'Failed to get saved schemes',
      status: 'saved_schemes_error'
    });
  }
};

module.exports = {
  getAllSchemes,
  getSchemeById,
  getCategories,
  saveScheme,
  removeSavedScheme,
  getSavedSchemes
};
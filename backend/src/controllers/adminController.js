const Scheme = require('../models/Scheme');
const Category = require('../models/Category');
const User = require('../models/User');
const Role = require('../models/Role');
const SavedScheme = require('../models/SavedScheme');

// Create new scheme (admin only)
const createScheme = async (req, res) => {
  try {
    const schemeData = {
      ...req.body,
      created_by: req.user._id
    };

    const newScheme = new Scheme(schemeData);
    await newScheme.save();

    const populatedScheme = await Scheme.findById(newScheme._id)
      .populate('category_id', 'name icon')
      .populate('created_by', 'username');

    res.status(201).json({
      message: 'Scheme created successfully',
      scheme: populatedScheme
    });

  } catch (error) {
    console.error('Create scheme error:', error);
    if (error.code === 11000) {
      return res.status(409).json({
        error: 'Scheme with this name already exists',
        status: 'duplicate_scheme'
      });
    }
    res.status(500).json({
      error: 'Failed to create scheme',
      status: 'create_scheme_error'
    });
  }
};

// Update scheme (admin only)
const updateScheme = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body, updated_at: new Date() };

    const updatedScheme = await Scheme.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    )
      .populate('category_id', 'name icon')
      .populate('created_by', 'username');

    if (!updatedScheme) {
      return res.status(404).json({
        error: 'Scheme not found',
        status: 'scheme_not_found'
      });
    }

    res.status(200).json({
      message: 'Scheme updated successfully',
      scheme: updatedScheme
    });

  } catch (error) {
    console.error('Update scheme error:', error);
    if (error.code === 11000) {
      return res.status(409).json({
        error: 'Scheme with this name already exists',
        status: 'duplicate_scheme'
      });
    }
    res.status(500).json({
      error: 'Failed to update scheme',
      status: 'update_scheme_error'
    });
  }
};

// Delete scheme (admin only)
const deleteScheme = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedScheme = await Scheme.findByIdAndUpdate(
      id,
      { is_active: false },
      { new: true }
    );

    if (!deletedScheme) {
      return res.status(404).json({
        error: 'Scheme not found',
        status: 'scheme_not_found'
      });
    }

    // Remove from users' saved schemes
    await SavedScheme.deleteMany({ scheme_id: id });

    res.status(200).json({
      message: 'Scheme deleted successfully'
    });

  } catch (error) {
    console.error('Delete scheme error:', error);
    res.status(500).json({
      error: 'Failed to delete scheme',
      status: 'delete_scheme_error'
    });
  }
};

// Create new category (admin only)
const createCategory = async (req, res) => {
  try {
    const { name, description, icon } = req.body;

    // Check if category already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(409).json({
        error: 'Category with this name already exists',
        status: 'duplicate_category'
      });
    }

    const newCategory = new Category({
      name,
      description,
      icon
    });

    await newCategory.save();

    res.status(201).json({
      message: 'Category created successfully',
      category: newCategory
    });

  } catch (error) {
    console.error('Create category error:', error);
    if (error.code === 11000) {
      return res.status(409).json({
        error: 'Category with this name already exists',
        status: 'duplicate_category'
      });
    }
    res.status(500).json({
      error: 'Failed to create category',
      status: 'create_category_error'
    });
  }
};

// Get all users (admin only)
const getAllUsers = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      search,
      role,
      is_active
    } = req.query;

    // Build query
    const query = {};

    // Search functionality
    if (search) {
      query.$or = [
        { username: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    // Role filter
    if (role) {
      const roleDoc = await Role.findOne({ name: role });
      if (roleDoc) {
        query.role_id = roleDoc._id;
      }
    }

    // Active status filter
    if (is_active !== undefined) {
      query.is_active = is_active === 'true';
    }

    // Parse pagination
    const pageNum = parseInt(page);
    const limitNum = Math.min(parseInt(limit), 100);
    const skip = (pageNum - 1) * limitNum;

    // Execute query
    const [users, totalUsers] = await Promise.all([
      User.find(query)
        .populate('role_id', 'name')
        .select('-password_hash')
        .sort({ created_at: -1 })
        .skip(skip)
        .limit(limitNum),
      User.countDocuments(query)
    ]);

    // Calculate pagination info
    const totalPages = Math.ceil(totalUsers / limitNum);

    res.status(200).json({
      users,
      pagination: {
        current_page: pageNum,
        total_pages: totalPages,
        total_users: totalUsers,
        items_per_page: limitNum
      }
    });

  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({
      error: 'Failed to get users',
      status: 'get_users_error'
    });
  }
};

// Update user status (admin only)
const updateUserStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { is_active } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { is_active },
      { new: true }
    )
      .populate('role_id', 'name')
      .select('-password_hash');

    if (!updatedUser) {
      return res.status(404).json({
        error: 'User not found',
        status: 'user_not_found'
      });
    }

    res.status(200).json({
      message: 'User status updated successfully',
      user: updatedUser
    });

  } catch (error) {
    console.error('Update user status error:', error);
    res.status(500).json({
      error: 'Failed to update user status',
      status: 'update_user_error'
    });
  }
};

// Get admin statistics
const getAdminStats = async (req, res) => {
  try {
    const [
      totalSchemes,
      activeSchemes,
      totalCategories,
      totalUsers,
      activeUsers,
      totalSavedSchemes
    ] = await Promise.all([
      Scheme.countDocuments(),
      Scheme.countDocuments({ is_active: true }),
      Category.countDocuments({ is_active: true }),
      User.countDocuments(),
      User.countDocuments({ is_active: true }),
      SavedScheme.countDocuments()
    ]);

    // Get schemes by category
    const schemesByCategory = await Scheme.aggregate([
      { $match: { is_active: true } },
      {
        $lookup: {
          from: 'categories',
          localField: 'category_id',
          foreignField: '_id',
          as: 'category'
        }
      },
      { $unwind: '$category' },
      {
        $group: {
          _id: '$category.name',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }
    ]);

    // Get recent activity (new schemes in last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const recentSchemes = await Scheme.countDocuments({
      created_at: { $gte: sevenDaysAgo }
    });

    const recentUsers = await User.countDocuments({
      created_at: { $gte: sevenDaysAgo }
    });

    res.status(200).json({
      overview: {
        total_schemes: totalSchemes,
        active_schemes: activeSchemes,
        total_categories: totalCategories,
        total_users: totalUsers,
        active_users: activeUsers,
        total_saved_schemes: totalSavedSchemes
      },
      schemes_by_category: schemesByCategory,
      recent_activity: {
        new_schemes_7_days: recentSchemes,
        new_users_7_days: recentUsers
      }
    });

  } catch (error) {
    console.error('Get admin stats error:', error);
    res.status(500).json({
      error: 'Failed to get admin statistics',
      status: 'stats_error'
    });
  }
};

module.exports = {
  createScheme,
  updateScheme,
  deleteScheme,
  createCategory,
  getAllUsers,
  updateUserStatus,
  getAdminStats
};
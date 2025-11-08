const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Role = require('../models/Role');
const { generateToken } = require('../utils/jwt');

// User registration
const register = async (req, res) => {
  try {
    const { username, email, password, state, date_of_birth } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(409).json({
        error: existingUser.email === email ? 'Email already exists' : 'Username already exists',
        status: 'user_exists'
      });
    }

    // Get default user role
    const userRole = await Role.findOne({ name: 'user' });
    if (!userRole) {
      return res.status(500).json({
        error: 'Default user role not found',
        status: 'role_not_found'
      });
    }

    // Hash password
    const saltRounds = 12;
    const password_hash = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = new User({
      username,
      email,
      password_hash,
      role_id: userRole._id,
      state: state || null,
      date_of_birth: date_of_birth ? new Date(date_of_birth) : null,
      saved_schemes: []
    });

    await newUser.save();

    // Generate JWT token
    const token = generateToken({ userId: newUser._id });

    // Get user without password
    const userResponse = await User.findById(newUser._id).populate('role_id', 'name');

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: userResponse._id,
        username: userResponse.username,
        email: userResponse.email,
        role: userResponse.role_id.name,
        state: userResponse.state,
        date_of_birth: userResponse.date_of_birth,
        created_at: userResponse.created_at
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      error: 'Registration failed',
      status: 'registration_error'
    });
  }
};

// User login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email }).populate('role_id', 'name permissions');
    if (!user) {
      return res.status(401).json({
        error: 'Invalid email or password',
        status: 'invalid_credentials'
      });
    }

    // Check if user is active
    if (!user.is_active) {
      return res.status(401).json({
        error: 'Account is deactivated',
        status: 'account_deactivated'
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({
        error: 'Invalid email or password',
        status: 'invalid_credentials'
      });
    }

    // Update last login
    user.last_login = new Date();
    await user.save();

    // Generate JWT token
    const token = generateToken({ userId: user._id });

    // Prepare user response
    const userResponse = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role_id.name,
      permissions: user.role_id.permissions,
      state: user.state,
      date_of_birth: user.date_of_birth,
      created_at: user.created_at,
      last_login: user.last_login
    };

    res.status(200).json({
      message: 'Login successful',
      token,
      user: userResponse
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      error: 'Login failed',
      status: 'login_error'
    });
  }
};

// User logout
const logout = async (req, res) => {
  try {
    // Since we're using JWT, logout is handled on the client side
    // We can implement token blacklisting in the future if needed
    res.status(200).json({
      message: 'Logout successful'
    });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({
      error: 'Logout failed',
      status: 'logout_error'
    });
  }
};

// Get current user profile
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate('role_id', 'name permissions')
      .populate('saved_schemes', 'name description_short category_id');

    if (!user) {
      return res.status(404).json({
        error: 'User not found',
        status: 'user_not_found'
      });
    }

    const userResponse = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role_id.name,
      permissions: user.role_id.permissions,
      state: user.state,
      date_of_birth: user.date_of_birth,
      saved_schemes: user.saved_schemes,
      created_at: user.created_at,
      last_login: user.last_login
    };

    res.status(200).json({
      user: userResponse
    });

  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      error: 'Failed to get user profile',
      status: 'profile_error'
    });
  }
};

module.exports = {
  register,
  login,
  logout,
  getMe
};
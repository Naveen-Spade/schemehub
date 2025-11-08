const { verifyToken, extractTokenFromHeader } = require('../utils/jwt');
const User = require('../models/User');
const Role = require('../models/Role');

// Middleware to authenticate user
const authenticate = async (req, res, next) => {
  try {
    const token = extractTokenFromHeader(req.headers.authorization);

    if (!token) {
      return res.status(401).json({
        error: 'Access token is required',
        status: 'auth_required'
      });
    }

    const decoded = verifyToken(token);
    const user = await User.findById(decoded.userId).populate('role_id');

    if (!user || !user.is_active) {
      return res.status(401).json({
        error: 'Invalid or inactive user',
        status: 'invalid_user'
      });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        error: 'Invalid token',
        status: 'invalid_token'
      });
    }

    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        error: 'Token expired',
        status: 'token_expired'
      });
    }

    console.error('Authentication error:', error);
    res.status(500).json({
      error: 'Authentication failed',
      status: 'auth_error'
    });
  }
};

// Middleware to check user role
const authorize = (permissions = []) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        error: 'Authentication required',
        status: 'auth_required'
      });
    }

    const userPermissions = req.user.role_id.permissions || [];
    const hasPermission = permissions.some(permission =>
      userPermissions.includes(permission)
    );

    if (!hasPermission) {
      return res.status(403).json({
        error: 'Insufficient permissions',
        status: 'permission_denied'
      });
    }

    next();
  };
};

// Admin-specific middleware
const requireAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      error: 'Authentication required',
      status: 'auth_required'
    });
  }

  if (req.user.role_id.name !== 'admin') {
    return res.status(403).json({
      error: 'Admin access required',
      status: 'admin_required'
    });
  }

  next();
};

// Optional authentication middleware (doesn't fail if no token)
const optionalAuth = async (req, res, next) => {
  try {
    const token = extractTokenFromHeader(req.headers.authorization);

    if (token) {
      const decoded = verifyToken(token);
      const user = await User.findById(decoded.userId).populate('role_id');

      if (user && user.is_active) {
        req.user = user;
      }
    }

    next();
  } catch (error) {
    // Continue without authentication on errors
    next();
  }
};

module.exports = {
  authenticate,
  authorize,
  requireAdmin,
  optionalAuth
};
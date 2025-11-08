const express = require('express');
const router = express.Router();
const { authenticate, requireAdmin } = require('../middleware/auth');
const { validateScheme, validateCategory, handleValidationErrors } = require('../utils/validation');
const {
  createScheme,
  updateScheme,
  deleteScheme,
  createCategory,
  getAllUsers,
  updateUserStatus,
  getAdminStats
} = require('../controllers/adminController');

// All admin routes require authentication and admin role
router.use(authenticate);
router.use(requireAdmin);

// Scheme management
router.post('/schemes', validateScheme, handleValidationErrors, createScheme);
router.put('/schemes/:id', validateScheme, handleValidationErrors, updateScheme);
router.delete('/schemes/:id', deleteScheme);

// Category management
router.post('/categories', validateCategory, handleValidationErrors, createCategory);

// User management
router.get('/users', getAllUsers);
router.patch('/users/:id/status', updateUserStatus);

// Statistics
router.get('/stats', getAdminStats);

module.exports = router;
const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const { validateRegistration, validateLogin, handleValidationErrors } = require('../utils/validation');
const {
  register,
  login,
  logout,
  getMe
} = require('../controllers/authController');

// Public routes
router.post('/register', validateRegistration, handleValidationErrors, register);
router.post('/login', validateLogin, handleValidationErrors, login);

// Protected routes
router.post('/logout', authenticate, logout);
router.get('/me', authenticate, getMe);

module.exports = router;
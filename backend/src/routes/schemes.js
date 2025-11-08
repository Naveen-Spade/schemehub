const express = require('express');
const router = express.Router();
const { authenticate, optionalAuth } = require('../middleware/auth');
const {
  getAllSchemes,
  getSchemeById,
  getCategories,
  saveScheme,
  removeSavedScheme,
  getSavedSchemes
} = require('../controllers/schemeController');

// Public routes
router.get('/', getAllSchemes);
router.get('/categories', getCategories);
router.get('/:id', optionalAuth, getSchemeById);

// Protected routes (require authentication)
router.post('/save-scheme/:schemeId', authenticate, saveScheme);
router.delete('/save-scheme/:schemeId', authenticate, removeSavedScheme);
router.get('/user/saved-schemes', authenticate, getSavedSchemes);

module.exports = router;
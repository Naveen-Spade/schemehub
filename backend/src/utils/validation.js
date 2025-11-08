const { body, validationResult } = require('express-validator');

// Validation rules
const validateRegistration = [
  body('username')
    .trim()
    .isLength({ min: 3, max: 30 })
    .withMessage('Username must be between 3 and 30 characters')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username can only contain letters, numbers, and underscores'),

  body('email')
    .trim()
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),

  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain at least one lowercase letter, one uppercase letter, and one number'),

  body('confirmPassword')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm password does not match');
      }
      return true;
    }),

  body('state')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('State name must be between 2 and 50 characters'),

  body('date_of_birth')
    .optional()
    .isISO8601()
    .withMessage('Please enter a valid date in YYYY-MM-DD format')
];

const validateLogin = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),

  body('password')
    .notEmpty()
    .withMessage('Password is required')
];

const validateScheme = [
  body('name')
    .trim()
    .isLength({ min: 3, max: 200 })
    .withMessage('Scheme name must be between 3 and 200 characters'),

  body('description_short')
    .trim()
    .isLength({ max: 500 })
    .withMessage('Short description cannot exceed 500 characters'),

  body('description_full')
    .trim()
    .notEmpty()
    .withMessage('Full description is required'),

  body('category_id')
    .isMongoId()
    .withMessage('Valid category ID is required'),

  body('eligibility_criteria')
    .isArray({ min: 1 })
    .withMessage('At least one eligibility criterion is required'),

  body('eligibility_criteria.*')
    .trim()
    .notEmpty()
    .withMessage('Eligibility criteria cannot be empty'),

  body('benefits')
    .isArray({ min: 1 })
    .withMessage('At least one benefit is required'),

  body('benefits.*')
    .trim()
    .notEmpty()
    .withMessage('Benefits cannot be empty'),

  body('application_steps')
    .isArray({ min: 1 })
    .withMessage('At least one application step is required'),

  body('application_steps.*')
    .trim()
    .notEmpty()
    .withMessage('Application steps cannot be empty'),

  body('official_website')
    .isURL()
    .withMessage('Please enter a valid website URL'),

  body('state')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('State name must be between 2 and 50 characters'),

  body('min_age')
    .optional()
    .isInt({ min: 0, max: 120 })
    .withMessage('Minimum age must be between 0 and 120'),

  body('max_age')
    .optional()
    .isInt({ min: 0, max: 120 })
    .withMessage('Maximum age must be between 0 and 120'),

  body('income_limit')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Income limit must be a positive number'),

  body('application_deadline')
    .optional()
    .isISO8601()
    .withMessage('Please enter a valid deadline date'),

  body('required_documents')
    .optional()
    .isArray()
    .withMessage('Required documents must be an array'),

  body('required_documents.*')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Required documents cannot contain empty strings')
];

const validateCategory = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Category name must be between 2 and 50 characters'),

  body('description')
    .trim()
    .isLength({ max: 200 })
    .withMessage('Category description cannot exceed 200 characters'),

  body('icon')
    .trim()
    .notEmpty()
    .withMessage('Category icon is required')
];

// Error handler middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors.array().map(error => ({
        field: error.path,
        message: error.msg
      }))
    });
  }
  next();
};

module.exports = {
  validateRegistration,
  validateLogin,
  validateScheme,
  validateCategory,
  handleValidationErrors
};
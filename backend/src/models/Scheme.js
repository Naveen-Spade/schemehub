const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Scheme name is required'],
    trim: true,
    minlength: [3, 'Scheme name must be at least 3 characters long'],
    maxlength: [200, 'Scheme name cannot exceed 200 characters']
  },
  description_short: {
    type: String,
    required: [true, 'Short description is required'],
    trim: true,
    maxlength: [500, 'Short description cannot exceed 500 characters']
  },
  description_full: {
    type: String,
    required: [true, 'Full description is required'],
    trim: true
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Category is required']
  },
  eligibility_criteria: [{
    type: String,
    required: [true, 'At least one eligibility criterion is required'],
    trim: true
  }],
  benefits: [{
    type: String,
    required: [true, 'At least one benefit is required'],
    trim: true
  }],
  application_steps: [{
    type: String,
    required: [true, 'At least one application step is required'],
    trim: true
  }],
  official_website: {
    type: String,
    required: [true, 'Official website is required'],
    trim: true,
    match: [/^https?:\/\/.+\..+/, 'Please enter a valid website URL']
  },
  state: {
    type: String,
    trim: true,
    default: 'All India'
  },
  min_age: {
    type: Number,
    min: 0,
    max: 120,
    default: null
  },
  max_age: {
    type: Number,
    min: 0,
    max: 120,
    default: null
  },
  income_limit: {
    type: Number,
    min: 0,
    default: null
  },
  application_deadline: {
    type: Date,
    default: null
  },
  required_documents: [{
    type: String,
    trim: true
  }],
  is_active: {
    type: Boolean,
    default: true
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for category details
schemeSchema.virtual('category', {
  ref: 'Category',
  localField: 'category_id',
  foreignField: '_id',
  justOne: true
});

// Virtual for creator details
schemeSchema.virtual('creator', {
  ref: 'User',
  localField: 'created_by',
  foreignField: '_id',
  justOne: true
});

// Indexes for better query performance
schemeSchema.index({ name: 'text', description_short: 'text' });
schemeSchema.index({ category_id: 1 });
schemeSchema.index({ state: 1 });
schemeSchema.index({ min_age: 1, max_age: 1 });
schemeSchema.index({ income_limit: 1 });
schemeSchema.index({ is_active: 1 });
schemeSchema.index({ created_at: -1 });

// Pre-save middleware to update timestamps
schemeSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

module.exports = mongoose.model('Scheme', schemeSchema);
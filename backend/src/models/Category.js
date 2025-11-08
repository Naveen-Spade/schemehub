const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required'],
    unique: true,
    trim: true,
    maxlength: [50, 'Category name cannot exceed 50 characters']
  },
  description: {
    type: String,
    required: [true, 'Category description is required'],
    trim: true,
    maxlength: [200, 'Category description cannot exceed 200 characters']
  },
  icon: {
    type: String,
    required: [true, 'Category icon is required'],
    trim: true
  },
  is_active: {
    type: Boolean,
    default: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: false },
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for scheme count
categorySchema.virtual('scheme_count', {
  ref: 'Scheme',
  localField: '_id',
  foreignField: 'category_id',
  count: true
});

// Index for better query performance
categorySchema.index({ name: 1 });
categorySchema.index({ is_active: 1 });

module.exports = mongoose.model('Category', categorySchema);
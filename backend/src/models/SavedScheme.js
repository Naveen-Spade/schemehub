const mongoose = require('mongoose');

const savedSchemeSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required']
  },
  scheme_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Scheme',
    required: [true, 'Scheme ID is required']
  },
  saved_at: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String,
    trim: true,
    maxlength: [500, 'Notes cannot exceed 500 characters'],
    default: null
  }
}, {
  timestamps: { createdAt: 'saved_at', updatedAt: false },
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for scheme details
savedSchemeSchema.virtual('scheme', {
  ref: 'Scheme',
  localField: 'scheme_id',
  foreignField: '_id',
  justOne: true
});

// Virtual for user details
savedSchemeSchema.virtual('user', {
  ref: 'User',
  localField: 'user_id',
  foreignField: '_id',
  justOne: true
});

// Compound index to ensure a user can save a scheme only once
savedSchemeSchema.index({ user_id: 1, scheme_id: 1 }, { unique: true });

// Indexes for better query performance
savedSchemeSchema.index({ user_id: 1, saved_at: -1 });
savedSchemeSchema.index({ scheme_id: 1 });

module.exports = mongoose.model('SavedScheme', savedSchemeSchema);
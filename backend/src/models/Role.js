const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Role name is required'],
    unique: true,
    trim: true,
    enum: ['user', 'admin']
  },
  description: {
    type: String,
    required: [true, 'Role description is required'],
    trim: true
  },
  permissions: [{
    type: String,
    trim: true
  }],
  created_at: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: false },
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Index for better query performance
roleSchema.index({ name: 1 });

module.exports = mongoose.model('Role', roleSchema);
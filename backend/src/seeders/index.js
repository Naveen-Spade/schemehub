const mongoose = require('mongoose');
const Category = require('../models/Category');
const Role = require('../models/Role');
const Scheme = require('../models/Scheme');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const categories = require('./categories');
const roles = require('./roles');
const schemes = require('./schemes');

const seedDatabase = async () => {
  try {
    // Clear existing data
    await Category.deleteMany({});
    await Role.deleteMany({});
    await Scheme.deleteMany({});
    await User.deleteMany({});

    console.log('Cleared existing data');

    // Insert categories
    const insertedCategories = await Category.insertMany(categories);
    console.log('Inserted categories:', insertedCategories.length);

    // Insert roles
    const insertedRoles = await Role.insertMany(roles);
    console.log('Inserted roles:', insertedRoles.length);

    // Map category names to IDs for schemes
    const categoryMap = {};
    insertedCategories.forEach(cat => {
      categoryMap[cat.name] = cat._id;
    });

    // Insert schemes with proper category references
    const schemesWithCategoryIds = schemes.map(scheme => ({
      ...scheme,
      category_id: categoryMap[scheme.category_name],
      application_deadline: scheme.application_deadline ? new Date(scheme.application_deadline) : null,
      // Remove category_name as it's not part of the schema
      category_name: undefined
    }));

    const insertedSchemes = await Scheme.insertMany(schemesWithCategoryIds);
    console.log('Inserted schemes:', insertedSchemes.length);

    // Create default admin user
    const adminRole = insertedRoles.find(role => role.name === 'admin');
    const hashedPassword = await bcrypt.hash('admin123', 12);

    // First insert a scheme to use as created_by reference
    if (insertedSchemes.length === 0) {
      throw new Error('No schemes available for admin user creation');
    }

    // Create temporary admin user to create schemes, then update created_by
    const tempAdminUser = new User({
      username: 'admin',
      email: 'admin@schemehub.com',
      password_hash: hashedPassword,
      role_id: adminRole._id,
      is_active: true
    });

    await tempAdminUser.save();

    // Update all schemes to have the admin as creator
    await Scheme.updateMany(
      {},
      { created_by: tempAdminUser._id }
    );

    console.log('Created default admin user and updated scheme creators');

    console.log('Database seeded successfully!');
    console.log('Admin credentials: admin@schemehub.com / admin123');
    process.exit(0);

  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run seeder if called directly
if (require.main === module) {
  const mongooseUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/schemehub';

  mongoose.connect(mongooseUri)
    .then(() => {
      console.log('Connected to MongoDB');
      seedDatabase();
    })
    .catch(error => {
      console.error('MongoDB connection error:', error);
      process.exit(1);
    });
}

module.exports = seedDatabase;
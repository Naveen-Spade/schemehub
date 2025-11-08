require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/database');

// Connect to database
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const server = app.listen(PORT, () => {
  console.log(`
🚀 SchemeHub API Server Started Successfully!

Server Details:
- Environment: ${NODE_ENV}
- Port: ${PORT}
- Local URL: http://localhost:${PORT}
- Health Check: http://localhost:${PORT}/api/health

API Endpoints:
- Auth: http://localhost:${PORT}/api/auth
- Schemes: http://localhost:${PORT}/api/schemes
- Admin: http://localhost:${PORT}/api/admin

Database: ${process.env.MONGODB_URI || 'mongodb://localhost:27017/schemehub'}
`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  server.close(() => {
    console.error('Server closed due to unhandled promise rejection');
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  server.close(() => {
    console.error('Server closed due to uncaught exception');
    process.exit(1);
  });
});

module.exports = server;
# SchemeHub - Government Schemes Portal

A comprehensive full-stack platform for discovering, managing, and applying for government schemes. Built with React, Node.js, Express, and MongoDB.

## 🚀 Features

- **Browse Schemes**: Search and filter through hundreds of government schemes
- **Personalized Recommendations**: Get scheme suggestions based on your profile
- **User Authentication**: Secure login/registration with JWT tokens
- **Save Schemes**: Bookmark schemes for later reference
- **Admin Dashboard**: Manage schemes, categories, and users
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Real-time Search**: Instant search results with filtering options

## 🛠 Technology Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast development server and build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Hook Form** - Form handling
- **Axios** - HTTP client
- **Lucide React** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **express-validator** - Input validation

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd schemehub
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env file with your configuration
nano .env
```

#### Environment Variables

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/schemehub

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d

# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
FRONTEND_URL=http://localhost:3000
```

#### Start MongoDB

```bash
# If using MongoDB locally
mongod
```

#### Seed Database

```bash
# Seed the database with sample data
npm run seed
```

#### Start Backend Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Admin Login**: admin@schemehub.com / admin123

## 📁 Project Structure

```
schemehub/
├── backend/
│   ├── src/
│   │   ├── controllers/     # API route handlers
│   │   ├── middleware/      # Custom middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── utils/          # Utility functions
│   │   ├── config/         # Database configuration
│   │   ├── seeders/        # Database seeders
│   │   └── app.js          # Express app setup
│   ├── package.json
│   ├── .env.example
│   └── server.js           # Server entry point
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── common/     # Shared components
│   │   │   ├── auth/       # Authentication components
│   │   │   ├── schemes/    # Scheme-related components
│   │   │   ├── admin/      # Admin components
│   │   │   └── user/       # User components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context
│   │   ├── services/       # API services
│   │   ├── hooks/          # Custom hooks
│   │   ├── utils/          # Utility functions
│   │   └── styles/         # Global styles
│   ├── public/             # Static files
│   ├── package.json
│   └── vite.config.js      # Vite configuration
├── README.md
└── .gitignore
```

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Schemes
- `GET /api/schemes` - Get all schemes with filters
- `GET /api/schemes/:id` - Get scheme details
- `GET /api/schemes/categories` - Get all categories
- `POST /api/schemes/save-scheme/:id` - Save a scheme
- `DELETE /api/schemes/save-scheme/:id` - Remove saved scheme
- `GET /api/schemes/user/saved-schemes` - Get user's saved schemes

### Admin (Protected)
- `POST /api/admin/schemes` - Create scheme
- `PUT /api/admin/schemes/:id` - Update scheme
- `DELETE /api/admin/schemes/:id` - Delete scheme
- `POST /api/admin/categories` - Create category
- `GET /api/admin/users` - Get all users
- `GET /api/admin/stats` - Get admin statistics

## 🎯 Sample Schemes Included

The database comes pre-seeded with 10+ real government schemes including:

1. **National Scholarship Portal (NSP)** - Education scholarships
2. **Ayushman Bharat (PMJAY)** - Health insurance scheme
3. **Pradhan Mantri Kaushal Vikas Yojana (PMKVY)** - Skill development
4. **Pradhan Mantri Awas Yojana (PMAY)** - Housing scheme
5. **Beti Bachao Beti Padhao** - Women empowerment
6. **PM-KISAN** - Farmer income support
7. **Atal Pension Yojana (APY)** - Pension scheme
8. **Stand Up India** - Entrepreneurship support
9. **National Rural Livelihood Mission (NRLM)** - Rural development
10. **Digital India Literacy Program** - Digital literacy

## 🧪 Testing

### Backend Testing

```bash
cd backend
npm test
```

### Frontend Testing

```bash
cd frontend
npm run lint
```

## 📊 Database Schema

### Users Collection
- username, email, password_hash, role_id
- saved_schemes, state, date_of_birth
- created_at, last_login, is_active

### Schemes Collection
- name, description_short, description_full
- category_id, eligibility_criteria, benefits
- application_steps, official_website
- state, age limits, income_limit, deadline

### Categories Collection
- name, description, icon, is_active

### Saved Schemes Collection
- user_id, scheme_id, saved_at, notes

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- Rate limiting on API endpoints
- CORS protection
- Helmet.js security headers

## 🚀 Deployment

### Backend Deployment

1. Set environment variables for production
2. Build and start the server:
```bash
NODE_ENV=production npm start
```

### Frontend Deployment

1. Build the frontend:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service

### Environment Variables for Production

- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Strong secret key
- `NODE_ENV=production`
- `FRONTEND_URL` - Production frontend URL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and queries:
- Email: support@schemehub.com
- Phone: +91 1800-123-4567

## 🙏 Acknowledgments

- Government of India for scheme information
- Open source community for tools and libraries
- React, Node.js, and MongoDB communities
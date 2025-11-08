# SchemeHub - Frontend Only Version

A comprehensive government schemes portal built with pure HTML, CSS, and JavaScript. This version works entirely in the browser with no backend required.

## 🚀 Features

- **Browse Schemes**: Explore 10+ government schemes across various categories
- **Smart Search**: Search schemes by name, description, or category
- **Advanced Filtering**: Filter by category, state, and other criteria
- **User Authentication**: Mock login/registration system with localStorage
- **Save Schemes**: Bookmark your favorite schemes for later reference
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Detailed Scheme Information**: Complete eligibility criteria, benefits, and application steps
- **Interactive UI**: Modern, user-friendly interface with smooth animations

## 🛠 Technology Stack

- **HTML5** - Semantic markup and structure
- **CSS3** - Responsive styling with flexbox and grid
- **Vanilla JavaScript (ES6+)** - Modern JavaScript with no frameworks
- **LocalStorage** - Client-side data persistence
- **Responsive Design** - Mobile-first approach

## 🎯 Included Government Schemes

The application includes 10 real government schemes:

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

## 🚀 Quick Start

### Method 1: Open Directly in Browser

1. Navigate to the project directory:
   ```bash
   cd /workspace/cmhpvm45k00mdpsim4l0xl86m/schemehub/frontend-only
   ```

2. Open `index.html` in your web browser:
   ```bash
   # For macOS
   open index.html

   # For Windows
   start index.html

   # For Linux
   xdg-open index.html
   ```

### Method 2: Using VS Code Live Server

1. Open the project in VS Code:
   ```bash
   code .
   ```

2. Install the "Live Server" extension from the marketplace

3. Right-click on `index.html` and select "Open with Live Server"

4. The application will open at `http://localhost:5500`

### Method 3: Using Python Simple Server

1. Navigate to the project directory:
   ```bash
   cd /workspace/cmhpvm45k00mdpsim4l0xl86m/schemehub/frontend-only
   ```

2. Start a simple HTTP server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000
   ```

3. Open `http://localhost:8000` in your browser

### Method 4: Using Node.js

1. Install http-server globally:
   ```bash
   npm install -g http-server
   ```

2. Navigate to the project directory and start server:
   ```bash
   cd /workspace/cmhpvm45k00mdpsim4l0xl86m/schemehub/frontend-only
   http-server -p 8000
   ```

3. Open `http://localhost:8000` in your browser

## 🔐 Demo Account

For testing the authentication features:

- **Email**: admin@schemehub.com
- **Password**: admin123

*Note: The app also accepts any email/password combination for demo purposes*

## 📁 Project Structure

```
frontend-only/
├── index.html              # Main HTML file
├── README.md              # This file
├── css/
│   └── style.css          # Complete styling
├── js/
│   └── app.js             # All JavaScript functionality
└── images/
    └── favicon.ico         # Favicon (you can add your own)
```

## 🎨 Features Overview

### Homepage
- Hero section with call-to-action buttons
- Feature highlights
- Category grid for quick navigation

### Schemes Page
- Advanced search bar
- Category and state filters
- Scheme cards with key information
- Load more functionality
- Detailed scheme modals

### Authentication
- Login form with demo credentials
- Registration form
- User session management
- Personalized welcome message

### Scheme Details
- Complete scheme information
- Eligibility criteria
- Benefits overview
- Application steps
- Official website links
- Save/bookmark functionality

## 🔧 Customization

### Adding New Schemes

1. Open `js/app.js`
2. Find the `mockSchemes` array
3. Add new scheme objects following the existing format:

```javascript
{
    id: 11, // Unique ID
    name: 'Scheme Name',
    category: 'Category Name',
    description: 'Short description',
    eligibility: ['Eligibility 1', 'Eligibility 2'],
    benefits: ['Benefit 1', 'Benefit 2'],
    applicationSteps: ['Step 1', 'Step 2'],
    officialWebsite: 'https://example.com',
    state: 'All India',
    minAge: 18,
    maxAge: 60
}
```

### Adding New Categories

1. Open `js/app.js`
2. Find the `mockCategories` array
3. Add new category objects:

```javascript
{
    id: 9, // Unique ID
    name: 'Category Name',
    icon: '🎯', // Emoji or icon
    description: 'Category description'
}
```

### Changing Colors

1. Open `css/style.css`
2. Modify the CSS variables at the top:
   - Primary color: `#3b82f6` (blue)
   - Success color: `#10b981` (green)
   - Error color: `#ef4444` (red)

## 📱 Browser Compatibility

- ✅ Chrome (v60+)
- ✅ Firefox (v55+)
- ✅ Safari (v12+)
- ✅ Edge (v79+)
- ✅ Mobile Browsers

## 🔒 Security Notes

- This is a frontend-only demo application
- Authentication is simulated using localStorage
- No real data is stored or transmitted
- For production use, implement proper backend authentication

## 🌟 Features in Detail

### Search & Filtering
- Real-time search across scheme names and descriptions
- Category-based filtering
- State-based filtering
- Combined filter support

### User Experience
- Smooth animations and transitions
- Loading states and feedback
- Mobile-responsive navigation
- Touch-friendly interface

### Data Persistence
- User sessions saved in localStorage
- Saved schemes persist across browser sessions
- No server required for basic functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is open source and available under the MIT License.

## 🆘 Support

For questions or issues:
- Create an issue in the repository
- Email: support@schemehub.com

## 🚀 Production Deployment

This frontend-only version can be easily deployed to:

- **Netlify**: Drag and drop the folder
- **Vercel**: Import as static site
- **GitHub Pages**: Use as GitHub Pages site
- **Firebase Hosting**: Deploy as static web app
- **Any static hosting service**

### Deployment Steps (Netlify Example):

1. Create a Netlify account
2. Drag the entire `frontend-only` folder to the deployment area
3. Your site will be live instantly with a random URL
4. You can customize the domain name in settings

## 🎯 Next Steps

To turn this into a full-stack application:

1. Add a backend API (Node.js/Express, Python/Django, etc.)
2. Implement real database (MongoDB, PostgreSQL, etc.)
3. Add real authentication with JWT
4. Connect to external government APIs
5. Add user dashboards and admin panels
6. Implement application tracking
7. Add email notifications

## 🙏 Acknowledgments

- Government of India for scheme information
- Open source community for inspiration
- All users who help improve this platform

---

**Note**: This is a demonstration version intended for educational purposes. For production use, implement proper backend services and security measures.
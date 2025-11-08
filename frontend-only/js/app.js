// Mock Data
const mockCategories = [
    { id: 1, name: 'Education', icon: '🎓', description: 'Scholarships and educational support' },
    { id: 2, name: 'Health', icon: '🏥', description: 'Healthcare and medical schemes' },
    { id: 3, name: 'Agriculture', icon: '🌾', description: 'Farmer support and agricultural schemes' },
    { id: 4, name: 'Employment', icon: '💼', description: 'Job creation and skill development' },
    { id: 5, name: 'Housing', icon: '🏠', description: 'Housing assistance and shelter schemes' },
    { id: 6, name: 'Women Empowerment', icon: '👩', description: 'Women welfare and empowerment' },
    { id: 7, name: 'Senior Citizens', icon: '👴', description: 'Pension and elderly care schemes' },
    { id: 8, name: 'Financial Inclusion', icon: '💰', description: 'Banking and credit facilities' }
];

const mockSchemes = [
    {
        id: 1,
        name: 'National Scholarship Portal (NSP)',
        category: 'Education',
        description: 'Centralized platform for various scholarship schemes for students from economically weaker sections.',
        eligibility: ['Must be an Indian citizen', 'Annual family income ≤ ₹8 lakhs', 'Minimum 60% marks in previous examination'],
        benefits: ['Financial assistance up to ₹20,000 per year', 'Coverage for tuition fees and maintenance allowance'],
        applicationSteps: ['Register on National Scholarship Portal', 'Fill application form with required details', 'Upload necessary documents', 'Submit application before deadline'],
        officialWebsite: 'https://scholarships.gov.in',
        state: 'All India',
        minAge: 16,
        maxAge: 35
    },
    {
        id: 2,
        name: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana',
        category: 'Health',
        description: 'Health insurance scheme providing coverage of up to ₹5 lakh per family for secondary and tertiary healthcare.',
        eligibility: ['Belong to eligible beneficiary families', 'Should not be covered by other health insurance schemes'],
        benefits: ['Health coverage of ₹5 lakh per family per year', 'Cashless hospitalization in empaneled hospitals'],
        applicationSteps: ['Check eligibility on official website', 'Visit nearest common service center', 'Submit application with required documents'],
        officialWebsite: 'https://pmjay.gov.in',
        state: 'All India',
        minAge: 0,
        maxAge: null
    },
    {
        id: 3,
        name: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY)',
        category: 'Employment',
        description: 'Skill development program to enable youth to take up industry-relevant skill training.',
        eligibility: ['Should be an Indian citizen', 'Age between 18-35 years', 'Minimum 10th pass or equivalent'],
        benefits: ['Free skill training programs', 'Monetary reward of ₹8,000 upon certification', 'Placement assistance after training'],
        applicationSteps: ['Visit nearest training center', 'Choose desired skill course', 'Submit application with documents'],
        officialWebsite: 'http://pmkvyofficial.org',
        state: 'All India',
        minAge: 18,
        maxAge: 35
    },
    {
        id: 4,
        name: 'Pradhan Mantri Awas Yojana (PMAY)',
        category: 'Housing',
        description: 'Housing for All scheme to provide affordable housing to urban poor including slum dwellers.',
        eligibility: ['Should be Indian citizen', 'Annual family income below ₹18 lakhs', 'Should not own a pucca house in India'],
        benefits: ['Interest subsidy up to ₹2.67 lakh on home loans', 'Financial assistance for house construction'],
        applicationSteps: ['Check eligibility on PMAY website', 'Apply through participating banks', 'Submit application with required documents'],
        officialWebsite: 'http://pmaymis.gov.in',
        state: 'All India',
        minAge: 21,
        maxAge: 70
    },
    {
        id: 5,
        name: 'Beti Bachao Beti Padhao',
        category: 'Women Empowerment',
        description: 'Initiative to address declining child sex ratio and empower girls through education.',
        eligibility: ['Girl child born in India', 'Parents must be Indian citizens', 'Should be enrolled in school'],
        benefits: ['Financial assistance for girl education', 'Scholarship programs for higher studies'],
        applicationSteps: ['Register girl child at local anganwadi center', 'Open bank account in girl\'s name', 'Apply for Sukanya Samriddhi Yojana'],
        officialWebsite: 'https://betibachao.betipadhao.gov.in',
        state: 'All India',
        minAge: 0,
        maxAge: 18
    },
    {
        id: 6,
        name: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
        category: 'Agriculture',
        description: 'Income support scheme for small and marginal farmers.',
        eligibility: ['Must be a small or marginal farmer', 'Should own cultivable land', 'Landholding should be less than 2 hectares'],
        benefits: ['Financial assistance of ₹6,000 per year', 'Payment in three equal installments'],
        applicationSteps: ['Register on PM-KISAN portal', 'Upload land ownership documents', 'Complete e-KYC verification'],
        officialWebsite: 'https://pmkisan.gov.in',
        state: 'All India',
        minAge: 18,
        maxAge: null
    },
    {
        id: 7,
        name: 'Atal Pension Yojana (APY)',
        category: 'Senior Citizens',
        description: 'Pension scheme for unorganized sector workers with guaranteed minimum monthly pension.',
        eligibility: ['Age between 18-40 years', 'Must have savings bank account', 'Should be unorganized sector worker'],
        benefits: ['Fixed monthly pension ranging from ₹1,000 to ₹5,000', 'Same pension for spouse after subscriber\'s death'],
        applicationSteps: ['Visit bank branch or apply online', 'Fill APY registration form', 'Choose pension amount and contribution frequency'],
        officialWebsite: 'https://npslite.nsdl.co.in',
        state: 'All India',
        minAge: 18,
        maxAge: 40
    },
    {
        id: 8,
        name: 'Stand Up India Scheme',
        category: 'Financial Inclusion',
        description: 'Loan scheme for SC/ST and women entrepreneurs for setting up greenfield enterprises.',
        eligibility: ['Must be SC/ST or woman entrepreneur', 'Age above 18 years', 'Should be first-time entrepreneur'],
        benefits: ['Loans from ₹10 lakh to ₹1 crore', 'No collateral required for loans up to ₹10 lakh'],
        applicationSteps: ['Prepare detailed business plan', 'Approach nearest scheduled commercial bank', 'Submit loan application with documents'],
        officialWebsite: 'http://standupmitra.in',
        state: 'All India',
        minAge: 18,
        maxAge: null
    },
    {
        id: 9,
        name: 'National Rural Livelihood Mission (NRLM)',
        category: 'Financial Inclusion',
        description: 'Poverty alleviation program for rural poor through Self Help Groups (SHGs).',
        eligibility: ['Rural household below poverty line', 'Willing to form or join SHG', 'Should be from marginalized community'],
        benefits: ['Financial assistance through SHGs', 'Skill development training', 'Access to credit facilities'],
        applicationSteps: ['Form or join SHG in village', 'Register with local NRLM office', 'Apply for group loans'],
        officialWebsite: 'https://aajeevika.gov.in',
        state: 'All India',
        minAge: 18,
        maxAge: 65
    },
    {
        id: 10,
        name: 'Digital India Literacy Program',
        category: 'Education',
        description: 'Digital literacy training for rural citizens to make them digitally literate.',
        eligibility: ['Age between 14-60 years', 'Rural resident', 'Should have basic education'],
        benefits: ['Free digital literacy training', 'Certificate upon completion', 'Access to digital services'],
        applicationSteps: ['Register at nearest Common Service Center', 'Attend 20 hours of training', 'Complete practical assessment'],
        officialWebsite: 'https://digitalindia.gov.in',
        state: 'All India',
        minAge: 14,
        maxAge: 60
    }
];

// Global Variables
let currentUser = null;
let currentPage = 'home';
let filteredSchemes = [...mockSchemes];
let displayedSchemes = 6;
let savedSchemes = [];

// DOM Elements
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const profileBtn = document.getElementById('profileBtn');
const logoutBtn = document.getElementById('logoutBtn');
const heroRegisterBtn = document.getElementById('heroRegisterBtn');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    loadCategories();
    loadSchemes();
    setupEventListeners();
    checkAuthentication();
});

// Setup Event Listeners
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            showPage(page);
        });
    });

    // Auth Buttons
    if (loginBtn) loginBtn.addEventListener('click', showLoginForm);
    if (registerBtn) registerBtn.addEventListener('click', showRegisterForm);
    if (heroRegisterBtn) heroRegisterBtn.addEventListener('click', showRegisterForm);
    if (profileBtn) profileBtn.addEventListener('click', showProfile);
    if (logoutBtn) logoutBtn.addEventListener('click', logout);

    // Mobile Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Modal Close Buttons
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Search Input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchSchemes();
            }
        });
    }
}

// Page Navigation
function showPage(pageName) {
    // Hide all pages
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const selectedPage = document.getElementById(pageName + 'Page');
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Update navigation
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });

    currentPage = pageName;

      // Load page-specific data
    if (pageName === 'schemes') {
        loadSchemes();
    } else if (pageName === 'admin') {
        showAdminDashboard();
    }

    // Close mobile menu
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.remove('active');
    }
}

// Authentication Functions
function checkAuthentication() {
    const storedUser = localStorage.getItem('schemehub_user');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        updateAuthUI();
    }
}

function updateAuthUI() {
    if (currentUser) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (registerBtn) registerBtn.style.display = 'none';
        if (heroRegisterBtn) heroRegisterBtn.style.display = 'none';

        if (profileBtn) {
            profileBtn.style.display = 'inline';
            profileBtn.textContent = `${currentUser.username}${currentUser.role === 'admin' ? ' (Admin)' : ''}`;
        }

        if (logoutBtn) logoutBtn.style.display = 'inline';

        // Show admin dashboard link for admin users
        if (currentUser.role === 'admin') {
            addAdminNavLink();
        }
    } else {
        if (loginBtn) loginBtn.style.display = 'inline';
        if (registerBtn) registerBtn.style.display = 'inline';
        if (heroRegisterBtn) heroRegisterBtn.style.display = 'inline';
        if (profileBtn) profileBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'none';

        removeAdminNavLink();
    }
}

function showLoginForm() {
    const modal = document.getElementById('authModal');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (modal) modal.style.display = 'block';
    if (loginForm) loginForm.style.display = 'block';
    if (registerForm) registerForm.style.display = 'none';
}

function showRegisterForm() {
    const modal = document.getElementById('authModal');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (modal) modal.style.display = 'block';
    if (loginForm) loginForm.style.display = 'none';
    if (registerForm) registerForm.style.display = 'block';
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.style.display = 'none';
}

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Mock authentication - accept demo credentials
    if (email === 'admin@schemehub.com' && password === 'admin123') {
        currentUser = {
            id: 1,
            username: 'admin',
            email: 'admin@schemehub.com',
            role: 'admin'
        };
    } else if (email && password) {
        // Mock user for any other credentials
        currentUser = {
            id: Date.now(),
            username: email.split('@')[0],
            email: email,
            role: 'user'
        };
    }

    if (currentUser) {
        localStorage.setItem('schemehub_user', JSON.stringify(currentUser));
        updateAuthUI();
        closeAuthModal();
        showNotification('Login successful!', 'success');

        // Clear form
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
    } else {
        showNotification('Invalid email or password', 'error');
    }
}

function handleRegister(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const state = document.getElementById('registerState').value;

    // Mock registration
    currentUser = {
        id: Date.now(),
        username: username,
        email: email,
        state: state,
        role: 'user'
    };

    localStorage.setItem('schemehub_user', JSON.stringify(currentUser));
    updateAuthUI();
    closeAuthModal();
    showNotification('Registration successful!', 'success');

    // Clear form
    document.getElementById('registerUsername').value = '';
    document.getElementById('registerEmail').value = '';
    document.getElementById('registerPassword').value = '';
    document.getElementById('registerState').value = '';
}

function logout() {
    currentUser = null;
    localStorage.removeItem('schemehub_user');
    savedSchemes = [];
    updateAuthUI();
    showNotification('Logged out successfully', 'info');
    showPage('home');
}

function showProfile() {
    showNotification(`Welcome ${currentUser.username}! Profile feature coming soon.`, 'info');
}

// Load Categories
function loadCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    const categoryFilter = document.getElementById('categoryFilter');

    if (categoriesGrid) {
        categoriesGrid.innerHTML = mockCategories.map(category => `
            <div class="category-card fade-in" onclick="filterByCategory('${category.name}')">
                <div class="category-icon">${category.icon}</div>
                <h3>${category.name}</h3>
                <p>${category.description}</p>
            </div>
        `).join('');
    }

    if (categoryFilter) {
        categoryFilter.innerHTML = '<option value="">All Categories</option>' +
            mockCategories.map(category => `<option value="${category.name}">${category.name}</option>`).join('');
    }
}

// Load Schemes
function loadSchemes() {
    const schemesGrid = document.getElementById('schemesGrid');
    if (schemesGrid) {
        const schemesToShow = filteredSchemes.slice(0, displayedSchemes);
        schemesGrid.innerHTML = schemesToShow.map(scheme => createSchemeCard(scheme)).join('');
    }

    // Hide load more button if all schemes are displayed
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = displayedSchemes >= filteredSchemes.length ? 'none' : 'block';
    }
}

function createSchemeCard(scheme) {
    return `
        <div class="scheme-card fade-in" onclick="showSchemeDetails(${scheme.id})">
            <div class="scheme-content">
                <span class="scheme-category">${scheme.category}</span>
                <h3 class="scheme-title">${scheme.name}</h3>
                <p class="scheme-description">${scheme.description}</p>
                <div class="scheme-meta">
                    <span>📍 ${scheme.state}</span>
                    <span>${scheme.minAge ? `Age: ${scheme.minAge}+` : 'All ages'}</span>
                </div>
            </div>
        </div>
    `;
}

// Search and Filter Functions
function searchSchemes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    if (searchTerm === '') {
        filteredSchemes = [...mockSchemes];
    } else {
        filteredSchemes = mockSchemes.filter(scheme =>
            scheme.name.toLowerCase().includes(searchTerm) ||
            scheme.description.toLowerCase().includes(searchTerm) ||
            scheme.category.toLowerCase().includes(searchTerm)
        );
    }

    displayedSchemes = 6;
    loadSchemes();
}

function filterSchemes() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const stateFilter = document.getElementById('stateFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    filteredSchemes = mockSchemes.filter(scheme => {
        let matchesCategory = !categoryFilter || scheme.category === categoryFilter;
        let matchesState = !stateFilter || scheme.state === stateFilter || scheme.state === 'All India';
        let matchesSearch = !searchTerm ||
            scheme.name.toLowerCase().includes(searchTerm) ||
            scheme.description.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesState && matchesSearch;
    });

    displayedSchemes = 6;
    loadSchemes();
}

function filterByCategory(categoryName) {
    document.getElementById('categoryFilter').value = categoryName;
    filterSchemes();
    showPage('schemes');
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('stateFilter').value = '';

    filteredSchemes = [...mockSchemes];
    displayedSchemes = 6;
    loadSchemes();
}

function loadMoreSchemes() {
    displayedSchemes += 6;
    loadSchemes();
}

// Scheme Details
function showSchemeDetails(schemeId) {
    const scheme = mockSchemes.find(s => s.id === schemeId);
    if (!scheme) return;

    const modal = document.getElementById('schemeModal');
    const modalBody = document.getElementById('modalBody');

    const isSaved = savedSchemes.includes(schemeId);

    modalBody.innerHTML = `
        <div class="scheme-details">
            <h2>${scheme.name}</h2>
            <span class="scheme-category">${scheme.category}</span>

            <div class="scheme-detail-section">
                <h3>Description</h3>
                <p>${scheme.description}</p>
            </div>

            <div class="scheme-detail-section">
                <h3>Eligibility Criteria</h3>
                <ul>
                    ${scheme.eligibility.map(criteria => `<li>${criteria}</li>`).join('')}
                </ul>
            </div>

            <div class="scheme-detail-section">
                <h3>Benefits</h3>
                <ul>
                    ${scheme.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>

            <div class="scheme-detail-section">
                <h3>Application Steps</h3>
                <ol>
                    ${scheme.applicationSteps.map((step, index) => `<li>${step}</li>`).join('')}
                </ol>
            </div>

            <div class="scheme-detail-section">
                <h3>Additional Information</h3>
                <p><strong>State:</strong> ${scheme.state}</p>
                <p><strong>Age Limit:</strong> ${scheme.minAge ? `${scheme.minAge}+ years` : 'No age limit'}</p>
                <p><strong>Official Website:</strong> <a href="${scheme.officialWebsite}" target="_blank">${scheme.officialWebsite}</a></p>
            </div>

            <div class="scheme-actions">
                <button class="btn btn-primary" onclick="window.open('${scheme.officialWebsite}', '_blank')">
                    Visit Official Website
                </button>
                ${currentUser ? `
                    <button class="btn ${isSaved ? 'btn-outline' : 'btn-primary'}" onclick="toggleSaveScheme(${scheme.id})">
                        ${isSaved ? 'Remove from Saved' : 'Save Scheme'}
                    </button>
                ` : `
                    <button class="btn btn-outline" onclick="showLoginForm()">
                        Login to Save
                    </button>
                `}
            </div>
        </div>
    `;

    modal.style.display = 'block';
}

function closeSchemeModal() {
    const modal = document.getElementById('schemeModal');
    if (modal) modal.style.display = 'none';
}

function toggleSaveScheme(schemeId) {
    if (!currentUser) {
        showLoginForm();
        return;
    }

    const index = savedSchemes.indexOf(schemeId);
    if (index > -1) {
        savedSchemes.splice(index, 1);
        showNotification('Scheme removed from saved list', 'info');
    } else {
        savedSchemes.push(schemeId);
        showNotification('Scheme saved successfully!', 'success');
    }

    // Refresh modal to update button state
    showSchemeDetails(schemeId);
}

// Utility Functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Admin Navigation Functions
function addAdminNavLink() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu && !document.getElementById('adminNavLink')) {
        const adminLink = document.createElement('a');
        adminLink.id = 'adminNavLink';
        adminLink.href = '#admin';
        adminLink.className = 'nav-link';
        adminLink.setAttribute('data-page', 'admin');
        adminLink.textContent = 'Admin';
        adminLink.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('admin');
        });

        // Insert before auth buttons
        const authButtons = navMenu.querySelector('.auth-buttons');
        if (authButtons) {
            navMenu.insertBefore(adminLink, authButtons);
        }
    }
}

function removeAdminNavLink() {
    const adminLink = document.getElementById('adminNavLink');
    if (adminLink) {
        adminLink.remove();
    }
}

// Admin Functions
function showAdminDashboard() {
    if (!currentUser || currentUser.role !== 'admin') {
        showNotification('Access denied. Admin privileges required.', 'error');
        return;
    }

    const schemesGrid = document.getElementById('schemesGrid');
    if (schemesGrid) {
        schemesGrid.innerHTML = `
            <div class="admin-dashboard">
                <div class="admin-header">
                    <h1>Admin Dashboard</h1>
                    <div class="admin-actions">
                        <button class="btn btn-primary" onclick="showAddSchemeForm()">➕ Add New Scheme</button>
                        <button class="btn btn-outline" onclick="exportSchemes()">📥 Export Schemes</button>
                    </div>
                </div>

                <div class="admin-stats">
                    <div class="stat-card">
                        <h3>${mockSchemes.length}</h3>
                        <p>Total Schemes</p>
                    </div>
                    <div class="stat-card">
                        <h3>${mockCategories.length}</h3>
                        <p>Categories</p>
                    </div>
                    <div class="stat-card">
                        <h3>${getActiveSchemesCount()}</h3>
                        <p>Active Schemes</p>
                    </div>
                </div>

                <div class="admin-schemes">
                    <h2>All Schemes</h2>
                    <div class="admin-schemes-grid" id="adminSchemesGrid">
                        ${createAdminSchemeCards()}
                    </div>
                </div>
            </div>
        `;
    }

    // Hide load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }
}

function createAdminSchemeCards() {
    return mockSchemes.map(scheme => `
        <div class="admin-scheme-card">
            <div class="admin-scheme-content">
                <h3>${scheme.name}</h3>
                <span class="scheme-category">${scheme.category}</span>
                <p>${scheme.description.substring(0, 100)}...</p>
                <div class="admin-scheme-actions">
                    <button class="btn btn-outline btn-sm" onclick="editScheme(${scheme.id})">✏️ Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteScheme(${scheme.id})">🗑️ Delete</button>
                </div>
            </div>
        </div>
    `).join('');
}

function getActiveSchemesCount() {
    return mockSchemes.length; // All schemes are considered active in this mock
}

function showAddSchemeForm() {
    const modal = document.getElementById('schemeModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="admin-form">
            <h2>Add New Scheme</h2>
            <form id="addSchemeForm" onsubmit="handleAddScheme(event)">
                <div class="form-group">
                    <label for="schemeName">Scheme Name *</label>
                    <input type="text" id="schemeName" required>
                </div>

                <div class="form-group">
                    <label for="schemeCategory">Category *</label>
                    <select id="schemeCategory" required>
                        ${mockCategories.map(cat => `<option value="${cat.name}">${cat.name}</option>`).join('')}
                    </select>
                </div>

                <div class="form-group">
                    <label for="schemeDescription">Short Description *</label>
                    <input type="text" id="schemeDescription" required>
                </div>

                <div class="form-group">
                    <label for="schemeFullDescription">Full Description *</label>
                    <textarea id="schemeFullDescription" rows="4" required></textarea>
                </div>

                <div class="form-group">
                    <label for="schemeEligibility">Eligibility Criteria (comma separated) *</label>
                    <input type="text" id="schemeEligibility" placeholder="e.g., Must be Indian citizen, Age above 18" required>
                </div>

                <div class="form-group">
                    <label for="schemeBenefits">Benefits (comma separated) *</label>
                    <input type="text" id="schemeBenefits" placeholder="e.g., Financial assistance, Training programs" required>
                </div>

                <div class="form-group">
                    <label for="schemeSteps">Application Steps (comma separated) *</label>
                    <input type="text" id="schemeSteps" placeholder="e.g., Register online, Submit documents" required>
                </div>

                <div class="form-group">
                    <label for="schemeWebsite">Official Website *</label>
                    <input type="url" id="schemeWebsite" required>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="schemeState">State</label>
                        <select id="schemeState">
                            <option value="All India">All India</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="schemeMinAge">Minimum Age</label>
                        <input type="number" id="schemeMinAge" min="0" placeholder="0 if no limit">
                    </div>

                    <div class="form-group">
                        <label for="schemeMaxAge">Maximum Age</label>
                        <input type="number" id="schemeMaxAge" min="0" placeholder="Leave empty if no limit">
                    </div>
                </div>

                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">💾 Save Scheme</button>
                    <button type="button" class="btn btn-outline" onclick="closeSchemeModal()">❌ Cancel</button>
                </div>
            </form>
        </div>
    `;

    modal.style.display = 'block';
}

function handleAddScheme(event) {
    event.preventDefault();

    const newScheme = {
        id: Math.max(...mockSchemes.map(s => s.id)) + 1,
        name: document.getElementById('schemeName').value,
        category: document.getElementById('schemeCategory').value,
        description: document.getElementById('schemeDescription').value,
        eligibility: document.getElementById('schemeEligibility').value.split(',').map(item => item.trim()),
        benefits: document.getElementById('schemeBenefits').value.split(',').map(item => item.trim()),
        applicationSteps: document.getElementById('schemeSteps').value.split(',').map(item => item.trim()),
        officialWebsite: document.getElementById('schemeWebsite').value,
        state: document.getElementById('schemeState').value,
        minAge: parseInt(document.getElementById('schemeMinAge').value) || null,
        maxAge: parseInt(document.getElementById('schemeMaxAge').value) || null
    };

    mockSchemes.push(newScheme);
    filteredSchemes = [...mockSchemes];

    showNotification('Scheme added successfully!', 'success');
    closeSchemeModal();
    showAdminDashboard();
}

function editScheme(schemeId) {
    const scheme = mockSchemes.find(s => s.id === schemeId);
    if (!scheme) return;

    const modal = document.getElementById('schemeModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="admin-form">
            <h2>Edit Scheme</h2>
            <form id="editSchemeForm" onsubmit="handleEditScheme(event, ${schemeId})">
                <div class="form-group">
                    <label for="schemeName">Scheme Name *</label>
                    <input type="text" id="schemeName" value="${scheme.name}" required>
                </div>

                <div class="form-group">
                    <label for="schemeCategory">Category *</label>
                    <select id="schemeCategory" required>
                        ${mockCategories.map(cat =>
                            `<option value="${cat.name}" ${scheme.category === cat.name ? 'selected' : ''}>${cat.name}</option>`
                        ).join('')}
                    </select>
                </div>

                <div class="form-group">
                    <label for="schemeDescription">Short Description *</label>
                    <input type="text" id="schemeDescription" value="${scheme.description}" required>
                </div>

                <div class="form-group">
                    <label for="schemeFullDescription">Full Description *</label>
                    <textarea id="schemeFullDescription" rows="4" required>${scheme.description}</textarea>
                </div>

                <div class="form-group">
                    <label for="schemeEligibility">Eligibility Criteria (comma separated) *</label>
                    <input type="text" id="schemeEligibility" value="${scheme.eligibility.join(', ')}" required>
                </div>

                <div class="form-group">
                    <label for="schemeBenefits">Benefits (comma separated) *</label>
                    <input type="text" id="schemeBenefits" value="${scheme.benefits.join(', ')}" required>
                </div>

                <div class="form-group">
                    <label for="schemeSteps">Application Steps (comma separated) *</label>
                    <input type="text" id="schemeSteps" value="${scheme.applicationSteps.join(', ')}" required>
                </div>

                <div class="form-group">
                    <label for="schemeWebsite">Official Website *</label>
                    <input type="url" id="schemeWebsite" value="${scheme.officialWebsite}" required>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="schemeState">State</label>
                        <select id="schemeState">
                            <option value="All India" ${scheme.state === 'All India' ? 'selected' : ''}>All India</option>
                            <option value="Delhi" ${scheme.state === 'Delhi' ? 'selected' : ''}>Delhi</option>
                            <option value="Maharashtra" ${scheme.state === 'Maharashtra' ? 'selected' : ''}>Maharashtra</option>
                            <option value="Karnataka" ${scheme.state === 'Karnataka' ? 'selected' : ''}>Karnataka</option>
                            <option value="Tamil Nadu" ${scheme.state === 'Tamil Nadu' ? 'selected' : ''}>Tamil Nadu</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="schemeMinAge">Minimum Age</label>
                        <input type="number" id="schemeMinAge" value="${scheme.minAge || ''}" min="0" placeholder="0 if no limit">
                    </div>

                    <div class="form-group">
                        <label for="schemeMaxAge">Maximum Age</label>
                        <input type="number" id="schemeMaxAge" value="${scheme.maxAge || ''}" min="0" placeholder="Leave empty if no limit">
                    </div>
                </div>

                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">💾 Update Scheme</button>
                    <button type="button" class="btn btn-outline" onclick="closeSchemeModal()">❌ Cancel</button>
                </div>
            </form>
        </div>
    `;

    modal.style.display = 'block';
}

function handleEditScheme(event, schemeId) {
    event.preventDefault();

    const schemeIndex = mockSchemes.findIndex(s => s.id === schemeId);
    if (schemeIndex === -1) return;

    const updatedScheme = {
        ...mockSchemes[schemeIndex],
        name: document.getElementById('schemeName').value,
        category: document.getElementById('schemeCategory').value,
        description: document.getElementById('schemeDescription').value,
        eligibility: document.getElementById('schemeEligibility').value.split(',').map(item => item.trim()),
        benefits: document.getElementById('schemeBenefits').value.split(',').map(item => item.trim()),
        applicationSteps: document.getElementById('schemeSteps').value.split(',').map(item => item.trim()),
        officialWebsite: document.getElementById('schemeWebsite').value,
        state: document.getElementById('schemeState').value,
        minAge: parseInt(document.getElementById('schemeMinAge').value) || null,
        maxAge: parseInt(document.getElementById('schemeMaxAge').value) || null
    };

    mockSchemes[schemeIndex] = updatedScheme;
    filteredSchemes = [...mockSchemes];

    showNotification('Scheme updated successfully!', 'success');
    closeSchemeModal();
    showAdminDashboard();
}

function deleteScheme(schemeId) {
    if (confirm('Are you sure you want to delete this scheme? This action cannot be undone.')) {
        const index = mockSchemes.findIndex(s => s.id === schemeId);
        if (index > -1) {
            const schemeName = mockSchemes[index].name;
            mockSchemes.splice(index, 1);
            filteredSchemes = filteredSchemes.filter(s => s.id !== schemeId);

            showNotification(`"${schemeName}" has been deleted successfully.`, 'success');
            showAdminDashboard();
        }
    }
}

function exportSchemes() {
    const dataStr = JSON.stringify(mockSchemes, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    const exportFileDefaultName = `schemes_export_${new Date().toISOString().split('T')[0]}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();

    showNotification('Schemes exported successfully!', 'success');
}

// Update the scheme details modal for admin users
const originalShowSchemeDetails = showSchemeDetails;
function showSchemeDetails(schemeId) {
    const scheme = mockSchemes.find(s => s.id === schemeId);
    if (!scheme) return;

    const modal = document.getElementById('schemeModal');
    const modalBody = document.getElementById('modalBody');

    const isSaved = savedSchemes.includes(schemeId);
    const isAdmin = currentUser && currentUser.role === 'admin';

    modalBody.innerHTML = `
        <div class="scheme-details">
            <h2>${scheme.name}</h2>
            <span class="scheme-category">${scheme.category}</span>

            <div class="scheme-detail-section">
                <h3>Description</h3>
                <p>${scheme.description}</p>
            </div>

            <div class="scheme-detail-section">
                <h3>Eligibility Criteria</h3>
                <ul>
                    ${scheme.eligibility.map(criteria => `<li>${criteria}</li>`).join('')}
                </ul>
            </div>

            <div class="scheme-detail-section">
                <h3>Benefits</h3>
                <ul>
                    ${scheme.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>

            <div class="scheme-detail-section">
                <h3>Application Steps</h3>
                <ol>
                    ${scheme.applicationSteps.map((step, index) => `<li>${step}</li>`).join('')}
                </ol>
            </div>

            <div class="scheme-detail-section">
                <h3>Additional Information</h3>
                <p><strong>State:</strong> ${scheme.state}</p>
                <p><strong>Age Limit:</strong> ${scheme.minAge ? `${scheme.minAge}+ years` : 'No age limit'}</p>
                <p><strong>Official Website:</strong> <a href="${scheme.officialWebsite}" target="_blank">${scheme.officialWebsite}</a></p>
            </div>

            <div class="scheme-actions">
                <button class="btn btn-primary" onclick="window.open('${scheme.officialWebsite}', '_blank')">
                    Visit Official Website
                </button>

                ${currentUser ? `
                    <button class="btn ${isSaved ? 'btn-outline' : 'btn-primary'}" onclick="toggleSaveScheme(${scheme.id})">
                        ${isSaved ? 'Remove from Saved' : 'Save Scheme'}
                    </button>
                ` : `
                    <button class="btn btn-outline" onclick="showLoginForm()">
                        Login to Save
                    </button>
                `}

                ${isAdmin ? `
                    <button class="btn btn-outline" onclick="editScheme(${scheme.id})">✏️ Edit</button>
                    <button class="btn btn-danger" onclick="deleteScheme(${scheme.id})">🗑️ Delete</button>
                ` : ''}
            </div>
        </div>
    `;

    modal.style.display = 'block';
}

// Add admin specific styles
const adminStyles = document.createElement('style');
adminStyles.textContent = `
    .admin-dashboard {
        max-width: 1200px;
        margin: 0 auto;
    }

    .admin-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .admin-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .admin-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-bottom: 3rem;
    }

    .stat-card {
        background: #f8f9fa;
        padding: 2rem;
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .stat-card h3 {
        font-size: 2.5rem;
        color: #3b82f6;
        margin-bottom: 0.5rem;
    }

    .stat-card p {
        color: #666;
        font-weight: 500;
    }

    .admin-schemes h2 {
        margin-bottom: 1.5rem;
        color: #333;
    }

    .admin-schemes-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 1.5rem;
    }

    .admin-scheme-card {
        background: white;
        border: 2px solid #e1e5e9;
        border-radius: 12px;
        padding: 1.5rem;
        transition: all 0.3s ease;
    }

    .admin-scheme-card:hover {
        border-color: #3b82f6;
        box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
    }

    .admin-scheme-content h3 {
        color: #333;
        margin-bottom: 0.5rem;
    }

    .admin-scheme-actions {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
        flex-wrap: wrap;
    }

    .admin-form {
        max-width: 600px;
        margin: 0 auto;
    }

    .admin-form h2 {
        text-align: center;
        margin-bottom: 2rem;
        color: #333;
    }

    .form-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
    }

    .form-group {
        margin-bottom: 1rem;
        text-align: left;
    }

    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: #333;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 12px;
        border: 2px solid #e1e5e9;
        border-radius: 8px;
        font-size: 16px;
        font-family: inherit;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #3b82f6;
    }

    .form-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
        flex-wrap: wrap;
    }

    .btn-sm {
        padding: 8px 16px;
        font-size: 14px;
    }

    .btn-danger {
        background: #ef4444;
        color: white;
    }

    .btn-danger:hover {
        background: #dc2626;
    }

    @media (max-width: 768px) {
        .admin-header {
            flex-direction: column;
            align-items: stretch;
        }

        .admin-actions {
            justify-content: center;
        }

        .admin-schemes-grid {
            grid-template-columns: 1fr;
        }

        .form-actions {
            flex-direction: column;
        }
    }
`;

document.head.appendChild(adminStyles);

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
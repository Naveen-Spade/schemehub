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
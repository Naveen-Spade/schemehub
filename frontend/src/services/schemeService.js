import api from './api';

export const schemeService = {
  // Get all schemes with optional filters
  getSchemes: async (params = {}) => {
    const queryParams = new URLSearchParams();

    // Add query parameters
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        queryParams.append(key, value);
      }
    });

    const url = queryParams.toString() ? `/schemes?${queryParams}` : '/schemes';
    const response = await api.get(url);
    return response;
  },

  // Get scheme by ID
  getSchemeById: async (id) => {
    const response = await api.get(`/schemes/${id}`);
    return response;
  },

  // Get all categories
  getCategories: async () => {
    const response = await api.get('/schemes/categories');
    return response;
  },

  // Save a scheme for user
  saveScheme: async (schemeId, notes = null) => {
    const response = await api.post(`/schemes/save-scheme/${schemeId}`, { notes });
    return response;
  },

  // Remove saved scheme
  removeSavedScheme: async (schemeId) => {
    const response = await api.delete(`/schemes/save-scheme/${schemeId}`);
    return response;
  },

  // Get user's saved schemes
  getSavedSchemes: async () => {
    const response = await api.get('/schemes/user/saved-schemes');
    return response;
  },

  // Admin functions
  admin: {
    // Create new scheme
    createScheme: async (schemeData) => {
      const response = await api.post('/admin/schemes', schemeData);
      return response;
    },

    // Update scheme
    updateScheme: async (id, schemeData) => {
      const response = await api.put(`/admin/schemes/${id}`, schemeData);
      return response;
    },

    // Delete scheme
    deleteScheme: async (id) => {
      const response = await api.delete(`/admin/schemes/${id}`);
      return response;
    },

    // Create new category
    createCategory: async (categoryData) => {
      const response = await api.post('/admin/categories', categoryData);
      return response;
    },

    // Get all users
    getUsers: async (params = {}) => {
      const queryParams = new URLSearchParams();

      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          queryParams.append(key, value);
        }
      });

      const url = queryParams.toString() ? `/admin/users?${queryParams}` : '/admin/users';
      const response = await api.get(url);
      return response;
    },

    // Update user status
    updateUserStatus: async (userId, is_active) => {
      const response = await api.patch(`/admin/users/${userId}/status`, { is_active });
      return response;
    },

    // Get admin statistics
    getStats: async () => {
      const response = await api.get('/admin/stats');
      return response;
    },
  },

  // Utility functions for filtering and searching
  buildFilters: (filters = {}) => {
    const validFilters = {};

    // Only include non-empty filters
    if (filters.search) validFilters.search = filters.search.trim();
    if (filters.category) validFilters.category = filters.category;
    if (filters.state && filters.state !== 'All India') validFilters.state = filters.state;
    if (filters.min_age) validFilters.min_age = parseInt(filters.min_age);
    if (filters.max_age) validFilters.max_age = parseInt(filters.max_age);
    if (filters.page) validFilters.page = parseInt(filters.page);
    if (filters.limit) validFilters.limit = Math.min(parseInt(filters.limit), 50); // Max 50 items
    if (filters.sort) validFilters.sort = filters.sort;
    if (filters.order) validFilters.order = filters.order;

    return validFilters;
  },

  // Format scheme data for display
  formatScheme: (scheme) => {
    return {
      ...scheme,
      eligibility_criteria: Array.isArray(scheme.eligibility_criteria)
        ? scheme.eligibility_criteria
        : [],
      benefits: Array.isArray(scheme.benefits)
        ? scheme.benefits
        : [],
      application_steps: Array.isArray(scheme.application_steps)
        ? scheme.application_steps
        : [],
      required_documents: Array.isArray(scheme.required_documents)
        ? scheme.required_documents
        : [],
    };
  },

  // Check if user is eligible for a scheme based on basic criteria
  checkEligibility: (scheme, userProfile = {}) => {
    const { age = null, state = null, income = null } = userProfile;
    const { min_age, max_age, state: schemeState, income_limit } = scheme;

    // Check age criteria
    if (age !== null) {
      if (min_age && age < min_age) return false;
      if (max_age && age > max_age) return false;
    }

    // Check state criteria
    if (state && schemeState && schemeState !== 'All India' && schemeState !== state) {
      return false;
    }

    // Check income criteria
    if (income !== null && income_limit && income > income_limit) {
      return false;
    }

    return true;
  },
};
import axios from 'axios';

// Create base API instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle common errors
    if (error.response) {
      const { status, data } = error.response;

      // Handle authentication errors
      if (status === 401) {
        // Clear local storage and redirect to login
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // Only redirect if not already on login page
        if (window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
      }

      // Handle forbidden errors
      if (status === 403) {
        const errorMessage = data?.error || 'Access denied';
        throw new Error(errorMessage);
      }

      // Handle validation errors
      if (status === 400 && data?.details) {
        const validationErrors = data.details.map(err => err.message).join(', ');
        throw new Error(validationErrors);
      }

      // Handle rate limiting
      if (status === 429) {
        throw new Error('Too many requests. Please try again later.');
      }

      // Handle server errors
      if (status >= 500) {
        throw new Error('Server error. Please try again later.');
      }

      // Handle other HTTP errors
      const errorMessage = data?.error || data?.message || `Request failed with status ${status}`;
      throw new Error(errorMessage);
    }

    // Handle network errors
    if (error.code === 'NETWORK_ERROR') {
      throw new Error('Network error. Please check your connection.');
    }

    // Handle timeout errors
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout. Please try again.');
    }

    // Handle other errors
    throw error;
  }
);

// Utility functions for API calls
const apiRequest = {
  get: (url, config = {}) => api.get(url, config),
  post: (url, data = {}, config = {}) => api.post(url, data, config),
  put: (url, data = {}, config = {}) => api.put(url, data, config),
  patch: (url, data = {}, config = {}) => api.patch(url, data, config),
  delete: (url, config = {}) => api.delete(url, config),
};

export default apiRequest;
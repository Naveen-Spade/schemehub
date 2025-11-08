import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { schemeService } from '../services/schemeService';
import toast from 'react-hot-toast';

// Initial state
const initialState = {
  schemes: [],
  categories: [],
  currentScheme: null,
  savedSchemes: [],
  searchResults: [],
  filters: {
    search: '',
    category: '',
    state: '',
    min_age: '',
    max_age: '',
    page: 1,
    limit: 10,
    sort: 'created_at',
    order: 'desc',
  },
  pagination: {
    current_page: 1,
    total_pages: 1,
    total_schemes: 0,
    has_next: false,
    has_prev: false,
    items_per_page: 10,
  },
  loading: false,
  error: null,
};

// Action types
const SCHEME_ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  SET_SCHEMES: 'SET_SCHEMES',
  SET_CURRENT_SCHEME: 'SET_CURRENT_SCHEME',
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_SAVED_SCHEMES: 'SET_SAVED_SCHEMES',
  ADD_SAVED_SCHEME: 'ADD_SAVED_SCHEME',
  REMOVE_SAVED_SCHEME: 'REMOVE_SAVED_SCHEME',
  UPDATE_FILTERS: 'UPDATE_FILTERS',
  RESET_FILTERS: 'RESET_FILTERS',
  SET_PAGINATION: 'SET_PAGINATION',
  SET_SEARCH_RESULTS: 'SET_SEARCH_RESULTS',
};

// Reducer function
const schemeReducer = (state, action) => {
  switch (action.type) {
    case SCHEME_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };

    case SCHEME_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case SCHEME_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    case SCHEME_ACTIONS.SET_SCHEMES:
      return {
        ...state,
        schemes: action.payload.schemes,
        pagination: action.payload.pagination || state.pagination,
        loading: false,
        error: null,
      };

    case SCHEME_ACTIONS.SET_CURRENT_SCHEME:
      return {
        ...state,
        currentScheme: action.payload.scheme,
        loading: false,
        error: null,
      };

    case SCHEME_ACTIONS.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
        loading: false,
      };

    case SCHEME_ACTIONS.SET_SAVED_SCHEMES:
      return {
        ...state,
        savedSchemes: action.payload.savedSchemes,
        loading: false,
        error: null,
      };

    case SCHEME_ACTIONS.ADD_SAVED_SCHEME:
      return {
        ...state,
        savedSchemes: [action.payload.savedScheme, ...state.savedSchemes],
        // Also update the scheme in the schemes array if it exists
        schemes: state.schemes.map(scheme =>
          scheme.id === action.payload.savedScheme.scheme.id
            ? { ...scheme, is_saved: true }
            : scheme
        ),
        // Update current scheme if it's the same one
        currentScheme: state.currentScheme?.id === action.payload.savedScheme.scheme.id
          ? { ...state.currentScheme, is_saved: true }
          : state.currentScheme,
      };

    case SCHEME_ACTIONS.REMOVE_SAVED_SCHEME:
      return {
        ...state,
        savedSchemes: state.savedSchemes.filter(
          savedScheme => savedScheme.scheme.id !== action.payload.schemeId
        ),
        // Update the scheme in the schemes array
        schemes: state.schemes.map(scheme =>
          scheme.id === action.payload.schemeId
            ? { ...scheme, is_saved: false }
            : scheme
        ),
        // Update current scheme if it's the same one
        currentScheme: state.currentScheme?.id === action.payload.schemeId
          ? { ...state.currentScheme, is_saved: false }
          : state.currentScheme,
      };

    case SCHEME_ACTIONS.UPDATE_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload.filters,
          // Reset to page 1 when filters change (except page itself)
          page: action.payload.filters.page || 1,
        },
      };

    case SCHEME_ACTIONS.RESET_FILTERS:
      return {
        ...state,
        filters: initialState.filters,
      };

    case SCHEME_ACTIONS.SET_PAGINATION:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          ...action.payload.pagination,
        },
      };

    case SCHEME_ACTIONS.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload.searchResults,
        loading: false,
      };

    default:
      return state;
  }
};

// Create context
const SchemeContext = createContext();

// SchemeProvider component
export const SchemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(schemeReducer, initialState);

  // Fetch schemes with filters
  const fetchSchemes = async (params = {}) => {
    dispatch({ type: SCHEME_ACTIONS.SET_LOADING, payload: { loading: true } });

    try {
      const filters = schemeService.buildFilters({ ...state.filters, ...params });
      const response = await schemeService.getSchemes(filters);

      dispatch({
        type: SCHEME_ACTIONS.SET_SCHEMES,
        payload: {
          schemes: response.schemes || [],
          pagination: response.pagination || {},
        },
      });

      return response;
    } catch (error) {
      dispatch({
        type: SCHEME_ACTIONS.SET_ERROR,
        payload: { error: error.message },
      });
      toast.error(error.message || 'Failed to fetch schemes');
      throw error;
    }
  };

  // Fetch scheme by ID
  const fetchSchemeById = async (id) => {
    dispatch({ type: SCHEME_ACTIONS.SET_LOADING, payload: { loading: true } });

    try {
      const response = await schemeService.getSchemeById(id);
      const formattedScheme = schemeService.formatScheme(response.scheme);

      dispatch({
        type: SCHEME_ACTIONS.SET_CURRENT_SCHEME,
        payload: { scheme: { ...formattedScheme, is_saved: response.is_saved } },
      });

      return response;
    } catch (error) {
      dispatch({
        type: SCHEME_ACTIONS.SET_ERROR,
        payload: { error: error.message },
      });
      toast.error(error.message || 'Failed to fetch scheme details');
      throw error;
    }
  };

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const response = await schemeService.getCategories();

      dispatch({
        type: SCHEME_ACTIONS.SET_CATEGORIES,
        payload: { categories: response.categories || [] },
      });

      return response;
    } catch (error) {
      dispatch({
        type: SCHEME_ACTIONS.SET_ERROR,
        payload: { error: error.message },
      });
      toast.error(error.message || 'Failed to fetch categories');
      throw error;
    }
  };

  // Fetch saved schemes
  const fetchSavedSchemes = async () => {
    dispatch({ type: SCHEME_ACTIONS.SET_LOADING, payload: { loading: true } });

    try {
      const response = await schemeService.getSavedSchemes();

      dispatch({
        type: SCHEME_ACTIONS.SET_SAVED_SCHEMES,
        payload: { savedSchemes: response.saved_schemes || [] },
      });

      return response;
    } catch (error) {
      dispatch({
        type: SCHEME_ACTIONS.SET_ERROR,
        payload: { error: error.message },
      });
      toast.error(error.message || 'Failed to fetch saved schemes');
      throw error;
    }
  };

  // Save a scheme
  const saveScheme = async (schemeId, notes = null) => {
    try {
      const response = await schemeService.saveScheme(schemeId, notes);

      dispatch({
        type: SCHEME_ACTIONS.ADD_SAVED_SCHEME,
        payload: {
          savedScheme: {
            id: response.saved_scheme.id,
            scheme_id: response.saved_scheme.scheme_id,
            saved_at: response.saved_scheme.saved_at,
            scheme: state.currentScheme || state.schemes.find(s => s.id === schemeId),
            notes,
          },
        },
      });

      toast.success('Scheme saved successfully!');
      return response;
    } catch (error) {
      dispatch({
        type: SCHEME_ACTIONS.SET_ERROR,
        payload: { error: error.message },
      });
      toast.error(error.message || 'Failed to save scheme');
      throw error;
    }
  };

  // Remove saved scheme
  const removeSavedScheme = async (schemeId) => {
    try {
      const response = await schemeService.removeSavedScheme(schemeId);

      dispatch({
        type: SCHEME_ACTIONS.REMOVE_SAVED_SCHEME,
        payload: { schemeId },
      });

      toast.success('Scheme removed successfully!');
      return response;
    } catch (error) {
      dispatch({
        type: SCHEME_ACTIONS.SET_ERROR,
        payload: { error: error.message },
      });
      toast.error(error.message || 'Failed to remove scheme');
      throw error;
    }
  };

  // Update filters
  const updateFilters = (filters) => {
    dispatch({
      type: SCHEME_ACTIONS.UPDATE_FILTERS,
      payload: { filters },
    });
  };

  // Reset filters
  const resetFilters = () => {
    dispatch({ type: SCHEME_ACTIONS.RESET_FILTERS });
  };

  // Search schemes
  const searchSchemes = async (searchTerm) => {
    if (!searchTerm.trim()) {
      dispatch({
        type: SCHEME_ACTIONS.SET_SEARCH_RESULTS,
        payload: { searchResults: [] },
      });
      return;
    }

    dispatch({ type: SCHEME_ACTIONS.SET_LOADING, payload: { loading: true } });

    try {
      const filters = schemeService.buildFilters({ search: searchTerm, limit: 20 });
      const response = await schemeService.getSchemes(filters);

      dispatch({
        type: SCHEME_ACTIONS.SET_SEARCH_RESULTS,
        payload: { searchResults: response.schemes || [] },
      });

      return response;
    } catch (error) {
      dispatch({
        type: SCHEME_ACTIONS.SET_ERROR,
        payload: { error: error.message },
      });
      toast.error(error.message || 'Failed to search schemes');
      throw error;
    }
  };

  // Clear error
  const clearError = () => {
    dispatch({ type: SCHEME_ACTIONS.CLEAR_ERROR });
  };

  // Initialize data on mount
  useEffect(() => {
    const initializeData = async () => {
      try {
        await Promise.all([
          fetchCategories(),
          fetchSchemes(),
        ]);
      } catch (error) {
        console.error('Failed to initialize scheme data:', error);
      }
    };

    initializeData();
  }, []);

  // Fetch schemes when filters change (debounced)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (state.filters.search || state.filters.category || state.filters.state) {
        fetchSchemes();
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(timeoutId);
  }, [state.filters.search, state.filters.category, state.filters.state, state.filters.page]);

  // Value object to be provided by the context
  const value = {
    // State
    ...state,

    // Actions
    fetchSchemes,
    fetchSchemeById,
    fetchCategories,
    fetchSavedSchemes,
    saveScheme,
    removeSavedScheme,
    updateFilters,
    resetFilters,
    searchSchemes,
    clearError,

    // Utilities
    checkEligibility: schemeService.checkEligibility,
    formatScheme: schemeService.formatScheme,
  };

  return (
    <SchemeContext.Provider value={value}>
      {children}
    </SchemeContext.Provider>
  );
};

// Custom hook to use scheme context
export const useScheme = () => {
  const context = useContext(SchemeContext);
  if (!context) {
    throw new Error('useScheme must be used within a SchemeProvider');
  }
  return context;
};

export default SchemeContext;
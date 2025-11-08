import React from 'react';
import { useScheme } from '../context/SchemeContext';
import LoadingSpinner from '../components/common/LoadingSpinner';

const SchemesPage = () => {
  const { schemes, categories, loading } = useScheme();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="xl" />
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Government Schemes
        </h1>
        <p className="text-gray-600">
          Browse and discover government schemes tailored to your needs.
        </p>
      </div>

      {/* Categories Filter */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="card p-4 text-center cursor-pointer hover:border-primary-500 transition-colors duration-200"
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <h3 className="font-medium text-gray-900">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.scheme_count} schemes</p>
            </div>
          ))}
        </div>
      </div>

      {/* Schemes Grid */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Schemes</h2>
        {schemes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No schemes found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schemes.map((scheme) => (
              <div key={scheme.id} className="card card-hover p-6">
                <div className="mb-4">
                  <span className="badge badge-primary">
                    {scheme.category?.name}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {scheme.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {scheme.description_short}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {scheme.state}
                  </span>
                  <button className="btn btn-primary btn-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SchemesPage;
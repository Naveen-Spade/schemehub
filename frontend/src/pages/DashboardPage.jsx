import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useScheme } from '../context/SchemeContext';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { User, BookOpen, Bookmark, TrendingUp } from 'lucide-react';

const DashboardPage = () => {
  const { user } = useAuth();
  const { savedSchemes, loading } = useScheme();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="xl" />
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.username}!
        </h1>
        <p className="text-gray-600">
          Here's your personalized dashboard with saved schemes and recommendations.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card p-6">
          <div className="flex items-center">
            <div className="p-3 bg-primary-100 rounded-lg">
              <Bookmark className="w-6 h-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Saved Schemes</p>
              <p className="text-2xl font-bold text-gray-900">{savedSchemes.length}</p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Applications</p>
              <p className="text-2xl font-bold text-gray-900">0</p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Profile Score</p>
              <p className="text-2xl font-bold text-gray-900">85%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Saved Schemes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Your Saved Schemes
            </h2>
            {savedSchemes.length === 0 ? (
              <div className="card p-8 text-center">
                <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No saved schemes yet
                </h3>
                <p className="text-gray-600 mb-4">
                  Start exploring and save schemes that interest you.
                </p>
                <a href="/schemes" className="btn btn-primary">
                  Browse Schemes
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                {savedSchemes.map((savedScheme) => (
                  <div key={savedScheme.id} className="card p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {savedScheme.scheme.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {savedScheme.scheme.description_short}
                        </p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <span className="badge badge-gray mr-2">
                            {savedScheme.scheme.category?.name}
                          </span>
                          <span>
                            Saved on {new Date(savedScheme.saved_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn btn-outline btn-sm">
                          View
                        </button>
                        <button className="btn btn-danger btn-sm">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Profile Sidebar */}
        <div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Profile Information
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-600">Username</p>
                <p className="text-gray-900">{user?.username}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Email</p>
                <p className="text-gray-900">{user?.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">State</p>
                <p className="text-gray-900">{user?.state || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Member Since</p>
                <p className="text-gray-900">
                  {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                </p>
              </div>
            </div>
            <button className="btn btn-primary w-full mt-6">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
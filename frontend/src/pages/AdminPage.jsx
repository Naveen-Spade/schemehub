import React from 'react';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { BarChart3, Users, BookOpen, Plus, Settings } from 'lucide-react';

const AdminPage = () => {
  const { user } = useAuth();

  // Mock admin stats - would be fetched from API
  const stats = {
    totalSchemes: 156,
    activeSchemes: 142,
    totalUsers: 2340,
    activeUsers: 1890,
    totalCategories: 8,
    totalSavedSchemes: 5420,
  };

  return (
    <div className="container-custom py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Manage schemes, users, and monitor platform performance.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Schemes</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalSchemes}</p>
              <p className="text-xs text-green-600">{stats.activeSchemes} active</p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
              <p className="text-xs text-green-600">{stats.activeUsers} active</p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Saved Schemes</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalSavedSchemes}</p>
              <p className="text-xs text-gray-500">All time</p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Settings className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Categories</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalCategories}</p>
              <p className="text-xs text-gray-500">Manage categories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Scheme Management */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Scheme Management
          </h2>
          <div className="space-y-4">
            <button className="btn btn-primary w-full flex items-center justify-center">
              <Plus className="w-4 h-4 mr-2" />
              Add New Scheme
            </button>
            <button className="btn btn-outline w-full">
              View All Schemes
            </button>
            <button className="btn btn-outline w-full">
              Manage Categories
            </button>
          </div>
        </div>

        {/* User Management */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            User Management
          </h2>
          <div className="space-y-4">
            <button className="btn btn-outline w-full">
              View All Users
            </button>
            <button className="btn btn-outline w-full">
              Manage User Roles
            </button>
            <button className="btn btn-outline w-full">
              User Activity Reports
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div>
                <p className="text-sm font-medium text-gray-900">New user registration</p>
                <p className="text-xs text-gray-500">user123 registered 2 hours ago</p>
              </div>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div>
                <p className="text-sm font-medium text-gray-900">New scheme added</p>
                <p className="text-xs text-gray-500">"Digital Literacy Program" was added</p>
              </div>
              <span className="text-xs text-gray-500">5 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-gray-900">Scheme updated</p>
                <p className="text-xs text-gray-500">"PM-KISAN" scheme was updated</p>
              </div>
              <span className="text-xs text-gray-500">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
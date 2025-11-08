import React from 'react';
import { Link } from 'react-router-dom';
import { useScheme } from '../context/SchemeContext';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { Search, BookOpen, Users, Shield, TrendingUp, Award } from 'lucide-react';

const HomePage = () => {
  const { categories, loading } = useScheme();
  const { isAuthenticated } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="xl" />
      </div>
    );
  }

  const features = [
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find schemes that match your profile and requirements with our intelligent search system.',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Database',
      description: 'Access hundreds of government schemes across various categories in one place.',
    },
    {
      icon: Users,
      title: 'Personalized Recommendations',
      description: 'Get scheme suggestions tailored to your profile, location, and eligibility.',
    },
    {
      icon: Shield,
      title: 'Trusted Information',
      description: 'All schemes are verified and regularly updated with official information.',
    },
    {
      icon: TrendingUp,
      title: 'Track Applications',
      description: 'Monitor your application status and get timely updates on your saved schemes.',
    },
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Get step-by-step guidance on application procedures and required documents.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover Government Schemes Tailored for You
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Access hundreds of government schemes across education, health, employment, and more.
              Get personalized recommendations and simplify your application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/schemes"
                className="btn bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 text-lg font-medium"
              >
                Browse Schemes
              </Link>
              {!isAuthenticated && (
                <Link
                  to="/register"
                  className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 px-6 py-3 text-lg font-medium"
                >
                  Get Started
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      {categories.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Browse by Category
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore schemes across different categories designed to support various needs and requirements.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.slice(0, 8).map((category) => (
                <Link
                  key={category.id}
                  to={`/schemes?category=${category.id}`}
                  className="card card-hover p-6 text-center group cursor-pointer"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {category.scheme_count} schemes
                  </p>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {category.description}
                  </p>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/schemes"
                className="btn btn-primary"
              >
                View All Categories
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose SchemeHub?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make it easy to discover, understand, and apply for government schemes that are right for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!isAuthenticated && (
        <section className="py-16 bg-primary-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Perfect Scheme?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Join thousands of users who have successfully found and applied for government schemes through our platform.
            </p>
            <Link
              to="/register"
              className="btn bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 text-lg font-medium"
            >
              Create Free Account
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;
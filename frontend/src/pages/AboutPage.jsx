import React from 'react';
import { BookOpen, Target, Shield, Users, Headphones, Award } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To make government schemes accessible to every citizen through technology and innovation, ensuring no one misses out on the benefits they deserve.',
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'We provide verified, up-to-date information directly from official sources to ensure accuracy and reliability.',
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Our platform is designed with the user in mind, making it easy for anyone to find and apply for relevant schemes.',
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Database',
      description: 'Access hundreds of schemes across central and state governments in one place.',
    },
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Step-by-step guidance for applications with document requirements and eligibility criteria.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Our support team is always ready to help you navigate through the application process.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About SchemeHub
            </h1>
            <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
              We are on a mission to bridge the gap between government schemes and citizens who need them most.
              Our platform makes it easy to discover, understand, and apply for government benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                SchemeHub was born from a simple observation: millions of Indians are eligible for various
                government schemes but miss out due to lack of awareness, complex application processes,
                and difficulty in finding relevant information.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2024, our platform has helped thousands of citizens discover and apply for
                schemes ranging from education scholarships to healthcare benefits, agricultural support
                to startup funding. We believe that technology can democratize access to government
                welfare programs and ensure they reach the intended beneficiaries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of dedicated professionals works tirelessly to maintain the most comprehensive
                and up-to-date database of government schemes, making SchemeHub the most trusted
                platform for government benefit discovery in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and shape our approach to serving citizens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine technology, expertise, and empathy to deliver the best experience for our users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
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

      {/* Impact Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl font-bold mb-2">50,000+</div>
                <p className="text-primary-100">Users Helped</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <p className="text-primary-100">Schemes Listed</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <p className="text-primary-100">Categories</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">28</div>
                <p className="text-primary-100">States Covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <p className="text-gray-600">support@schemehub.com</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
              <p className="text-gray-600">+91 1800-123-4567</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
              <p className="text-gray-600">Delhi, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
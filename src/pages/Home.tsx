import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Database, Shield, Heart } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="pt-20">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Identify Your Medicines
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Quick and accurate medicine identification using your camera or uploaded images.
          </p>
          <Link
            to="/scan"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Camera className="w-5 h-5 mr-2" />
            Start Scanning
          </Link>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Camera className="w-8 h-8 text-purple-500" />}
              title="Quick Scan"
              description="Instantly identify medicines using your device's camera or uploaded images."
            />
            <FeatureCard
              icon={<Database className="w-8 h-8 text-blue-500" />}
              title="Comprehensive Database"
              description="Access detailed information about various medicines, including uses and dosage."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-green-500" />}
              title="Safe & Secure"
              description="Your privacy is our priority. All scans are processed securely."
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-16 text-center">
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your Health Matters
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust MediScan for accurate medicine identification
              and information.
            </p>
            <Link
              to="/scan"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
      <div className="bg-gray-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
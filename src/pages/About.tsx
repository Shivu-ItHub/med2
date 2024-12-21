import React from 'react';
import { Users, Award, Clock, Globe } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            About MediScan
          </span>
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <p className="text-gray-600 leading-relaxed mb-6">
            MediScan is a cutting-edge medicine identification platform designed to help users quickly and accurately identify medications through image recognition technology. Our mission is to promote medication safety and provide reliable pharmaceutical information to users worldwide.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <FeatureCard
              icon={<Users className="w-8 h-8 text-purple-500" />}
              title="Expert Team"
              description="Our team consists of healthcare professionals and technology experts dedicated to providing accurate medical information."
            />
            <FeatureCard
              icon={<Award className="w-8 h-8 text-blue-500" />}
              title="Trusted Platform"
              description="We maintain high standards of accuracy and reliability in our medicine identification system."
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8 text-green-500" />}
              title="24/7 Access"
              description="Access medicine information anytime, anywhere with our easy-to-use platform."
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-indigo-500" />}
              title="Global Database"
              description="Comprehensive database of medications from around the world, regularly updated."
            />
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
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
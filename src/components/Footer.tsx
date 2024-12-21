import React from 'react';
import { Pill, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Pill className="w-6 h-6 text-purple-600" />
              <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                MediScan
              </span>
            </div>
            <p className="text-gray-600">
              Helping you identify and understand your medications safely and accurately.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-600 hover:text-purple-600">Home</Link>
              <Link to="/scan" className="block text-gray-600 hover:text-purple-600">Scan Medicine</Link>
              <Link to="/database" className="block text-gray-600 hover:text-purple-600">Medicine Database</Link>
              <Link to="/about" className="block text-gray-600 hover:text-purple-600">About Us</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:contact@mediscan.com" className="flex items-center gap-2 text-gray-600 hover:text-purple-600">
                <Mail className="w-4 h-4" />
                contact@mediscan.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-600 hover:text-purple-600">
                <Phone className="w-4 h-4" />
                (123) 456-7890
              </a>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                123 Health Street, Medical City
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-gray-600 hover:text-purple-600">Privacy Policy</Link>
              <Link to="/terms" className="block text-gray-600 hover:text-purple-600">Terms of Service</Link>
              <Link to="/disclaimer" className="block text-gray-600 hover:text-purple-600">Medical Disclaimer</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} MediScan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
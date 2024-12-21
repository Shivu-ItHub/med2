import React from 'react';
import { Search } from 'lucide-react';
import { mockMedicines } from '../data/mockMedicines';
import { Link } from 'react-router-dom';

export function DatabasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Medicine Database
          </span>
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search medicines..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockMedicines.map((medicine) => (
            <Link
              key={medicine.id}
              to={`/medicine/${medicine.id}`}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{medicine.name}</h2>
              <p className="text-gray-600 mb-4">{medicine.description}</p>
              <div className="text-sm text-gray-500">{medicine.manufacturer}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
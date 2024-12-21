import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle, Check, Info, Package } from 'lucide-react';
import { Medicine } from '../types/medicine';
import { mockMedicines } from '../data/mockMedicines';

export function MedicineDetailsPage() {
  const { id } = useParams();
  const medicine = mockMedicines.find(m => m.id === id);

  if (!medicine) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Medicine not found</h2>
          <Link
            to="/scan"
            className="text-purple-600 hover:text-purple-700 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Go back to scanner
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/scan"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to scanner
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">{medicine.name}</h1>
            <p className="text-purple-100">{medicine.manufacturer}</p>
          </div>

          <div className="p-6 space-y-8">
            <section className="grid md:grid-cols-2 gap-6">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <Package className="w-32 h-32 text-gray-400" />
              </div>
              <div>
                <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-4">
                  <Info className="w-5 h-5 text-purple-500" />
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed">{medicine.description}</p>
              </div>
            </section>

            <section>
              <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-4">
                <Check className="w-5 h-5 text-green-500" />
                Uses
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {medicine.uses.map((use, index) => (
                  <div
                    key={index}
                    className="bg-green-50 p-4 rounded-lg border border-green-100"
                  >
                    {use}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-4">
                <Info className="w-5 h-5 text-blue-500" />
                Dosage Information
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <p className="text-gray-700">{medicine.dosage}</p>
              </div>
            </section>

            <section>
              <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-4">
                <AlertCircle className="w-5 h-5 text-yellow-500" />
                Side Effects & Warnings
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Side Effects</h3>
                  <ul className="space-y-2">
                    {medicine.sideEffects.map((effect, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2" />
                        {effect}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Warnings</h3>
                  <ul className="space-y-2">
                    {medicine.warnings.map((warning, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                        {warning}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
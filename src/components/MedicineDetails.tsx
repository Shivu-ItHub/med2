import React from 'react';
import { Medicine } from '../types/medicine';
import { AlertCircle, Check, Info } from 'lucide-react';

interface MedicineDetailsProps {
  medicine: Medicine;
  confidence: number;
}

export function MedicineDetails({ medicine, confidence }: MedicineDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{medicine.name}</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Confidence:</span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            {Math.round(confidence)}%
          </span>
        </div>
      </div>

      <div className="space-y-6">
        <section>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
            <Info className="w-5 h-5 text-blue-500" />
            Description
          </h3>
          <p className="text-gray-600">{medicine.description}</p>
        </section>

        <section>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
            <Check className="w-5 h-5 text-green-500" />
            Uses
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {medicine.uses.map((use, index) => (
              <li key={index}>{use}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
            <Info className="w-5 h-5 text-blue-500" />
            Dosage
          </h3>
          <p className="text-gray-600">{medicine.dosage}</p>
        </section>

        <section>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
            <AlertCircle className="w-5 h-5 text-yellow-500" />
            Side Effects
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {medicine.sideEffects.map((effect, index) => (
              <li key={index}>{effect}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
            <AlertCircle className="w-5 h-5 text-red-500" />
            Warnings
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {medicine.warnings.map((warning, index) => (
              <li key={index}>{warning}</li>
            ))}
          </ul>
        </section>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Manufacturer: {medicine.manufacturer}
          </p>
        </div>
      </div>
    </div>
  );
}
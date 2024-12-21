import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { LegalLayout } from './LegalLayout';

export function MedicalDisclaimerPage() {
  return (
    <LegalLayout
      title="Medical Disclaimer"
      icon={<AlertTriangle className="w-12 h-12 text-purple-600" />}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Not Medical Advice</h2>
        <p className="text-gray-600 mb-4">
          The information provided by MediScan is for informational purposes only and is not
          intended as a substitute for professional medical advice, diagnosis, or treatment.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Emergency Situations</h2>
        <p className="text-gray-600 mb-4">
          In case of a medical emergency, call your doctor or emergency services immediately.
          Do not delay seeking professional medical advice because of something you have read
          on MediScan.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Accuracy of Information</h2>
        <p className="text-gray-600">
          While we strive to provide accurate and up-to-date information, we make no
          representations or warranties of any kind about the completeness, accuracy,
          reliability, or suitability of the information.
        </p>
      </section>
    </LegalLayout>
  );
}
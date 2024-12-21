import React from 'react';
import { Shield } from 'lucide-react';
import { LegalLayout } from './LegalLayout';

export function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      icon={<Shield className="w-12 h-12 text-purple-600" />}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Collection</h2>
        <p className="text-gray-600 mb-4">
          We collect information that you provide directly to us, including images of medications
          for identification purposes. We do not store these images after processing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Usage</h2>
        <p className="text-gray-600 mb-4">
          The information we collect is used solely for the purpose of identifying medications
          and providing relevant medical information. We do not share your personal data with
          third parties.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Protection</h2>
        <p className="text-gray-600">
          We implement appropriate security measures to protect your personal information
          against unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>
    </LegalLayout>
  );
}
import React from 'react';
import { FileText } from 'lucide-react';
import { LegalLayout } from './LegalLayout';

export function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      icon={<FileText className="w-12 h-12 text-purple-600" />}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acceptance of Terms</h2>
        <p className="text-gray-600 mb-4">
          By accessing and using MediScan, you agree to be bound by these Terms of Service
          and all applicable laws and regulations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Use License</h2>
        <p className="text-gray-600 mb-4">
          Permission is granted to temporarily access MediScan for personal, non-commercial use.
          This license does not include permission to modify or copy the materials.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimer</h2>
        <p className="text-gray-600">
          The materials on MediScan are provided on an 'as is' basis. We make no warranties,
          expressed or implied, and hereby disclaim all other warranties.
        </p>
      </section>
    </LegalLayout>
  );
}
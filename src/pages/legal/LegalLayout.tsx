import React from 'react';

interface LegalLayoutProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function LegalLayout({ title, icon, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          {icon}
          <h1 className="text-4xl font-bold mt-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { ScanPage } from './pages/Scan';
import { MedicineDetailsPage } from './pages/MedicineDetails';
import { AboutPage } from './pages/About';
import { DatabasePage } from './pages/Database';
import { PrivacyPolicyPage } from './pages/legal/PrivacyPolicy';
import { TermsPage } from './pages/legal/Terms';
import { MedicalDisclaimerPage } from './pages/legal/MedicalDisclaimer';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/medicine/:id" element={<MedicineDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/database" element={<DatabasePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/disclaimer" element={<MedicalDisclaimerPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
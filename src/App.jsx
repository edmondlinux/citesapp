import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BackToTop from './components/common/BackToTop';
import Home from './pages/Home';
import WhatIsCites from './pages/WhatIsCites';
import HowCitesWorks from './pages/HowCitesWorks';
import Financing from './pages/Financing';
import NewsLanding from './pages/NewsLanding';
import CitesViolationFines from './pages/CitesViolationFines';
import ReptileTransportRequirements from './pages/ReptileTransportRequirements';
import PermitApplication from './pages/PermitApplication';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main className="flex-grow bg-white dark:bg-gray-900 transition-colors">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disc/what" element={<WhatIsCites />} />
            <Route path="/disc/how" element={<HowCitesWorks />} />
            <Route path="/disc/fund" element={<Financing />} />
            <Route path="/news/landing" element={<NewsLanding />} />
            <Route path="/cites-violation-fines" element={<CitesViolationFines />} />
            <Route path="/reptile-transport-requirements" element={<ReptileTransportRequirements />} />
            <Route path="/apply-permit" element={<PermitApplication />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
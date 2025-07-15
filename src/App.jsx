import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import WhatIsCites from './pages/WhatIsCites';
import HowCitesWorks from './pages/HowCitesWorks';
import NewsLanding from './pages/NewsLanding';
import CitesViolationFines from './pages/CitesViolationFines';
import ReptileTransportRequirements from './pages/ReptileTransportRequirements';
import Financing from './pages/Financing';
import PermitApplication from './pages/PermitApplication';
import SecurePayment from './pages/SecurePayment';
import BackToTop from './components/common/BackToTop';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-is-cites" element={<WhatIsCites />} />
            <Route path="/how-cites-works" element={<HowCitesWorks />} />
            <Route path="/news" element={<NewsLanding />} />
            <Route path="/cites-violation-fines" element={<CitesViolationFines />} />
            <Route path="/reptile-transport-requirements" element={<ReptileTransportRequirements />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/apply-permit" element={<PermitApplication />} />
            <Route path="/payment" element={<SecurePayment />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
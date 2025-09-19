import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Changelog from './components/Changelog';
import FeaturesPage from './components/FeaturesPage';
import Documentation from './components/Documentation';
import UserGuide from './components/UserGuide';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import MitLicense from './components/MitLicense';
import Footer from './components/Footer';
import NavigationSidebar from './components/NavigationSidebar';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Router>
      <div className={`min-h-screen gradient-bg transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
        <NavigationSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/user-guide" element={<UserGuide />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/mit-license" element={<MitLicense />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
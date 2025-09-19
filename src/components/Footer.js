import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({behavior: 'smooth'});
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <footer className="py-16 px-6 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={`${process.env.PUBLIC_URL}/svara_logo.png`} alt="SVARA Logo" className="w-12 h-12 animate-logo-glow" />
              <span className="text-white text-3xl font-bold">SVARA</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Modern YouTube Music Player with beautiful, responsive interface. 
              Transform your music streaming experience with SVARA's powerful features and elegant design.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-gray-300 hover:text-svara-orange transition-colors duration-300">Features Guide</Link></li>
              <li><a href="#screenshots" className="text-gray-300 hover:text-svara-orange transition-colors duration-300" onClick={(e) => {e.preventDefault(); handleNavClick('screenshots');}}>Screenshots</a></li>
              <li><a href="#download" className="text-gray-300 hover:text-svara-orange transition-colors duration-300" onClick={(e) => {e.preventDefault(); handleNavClick('download');}}>Download</a></li>
              <li><Link to="/changelog" className="text-gray-300 hover:text-svara-orange transition-colors duration-300">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/documentation" className="text-gray-300 hover:text-svara-orange transition-colors duration-300">Documentation</Link></li>
              <li><a href="https://github.com/Swapnanilb/Svara/discussions" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-svara-orange transition-colors duration-300">Help Center</a></li>
              <li><a href="https://github.com/Swapnanilb/Svara/issues" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-svara-orange transition-colors duration-300">Report Bug</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2025 SVARA Music Player. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-svara-orange transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-svara-orange transition-colors duration-300">Terms of Service</Link>
              <Link to="/mit-license" className="text-gray-400 hover:text-svara-orange transition-colors duration-300">MIT License</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="glass-effect p-6 rounded-2xl">
            <p className="text-gray-300">
              🎵 Made with <span className="text-svara-orange">❤️</span> for music lovers everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
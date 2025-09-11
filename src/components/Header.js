import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 animate-float hover:scale-105 transition-transform duration-300" onClick={() => window.scrollTo(0, 0)}>
            <img src={`${process.env.PUBLIC_URL}/svara_logo.png`} alt="SVARA Logo" className="w-10 h-10 animate-logo-glow" />
            <span className="text-white text-2xl font-bold">SVARA</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-svara-orange transition-colors duration-300" onClick={(e) => {e.preventDefault(); handleNavClick('features');}}>Features</a>
            <a href="#screenshots" className="text-white hover:text-svara-orange transition-colors duration-300" onClick={(e) => {e.preventDefault(); handleNavClick('screenshots');}}>Screenshots</a>
            <a href="#download" className="text-white hover:text-svara-orange transition-colors duration-300" onClick={(e) => {e.preventDefault(); handleNavClick('download');}}>Download</a>
          </div>

          <a href="#download" className="orange-gradient px-6 py-2 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300 animate-pulse-slow" onClick={(e) => {e.preventDefault(); handleNavClick('download');}}>
            Download Now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavigationSidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navigateToPage = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const menuGroups = [
    {
      title: 'Home Sections',
      items: [
        { id: 'hero', label: 'Home', icon: '🏠', type: 'section' },
        { id: 'features', label: 'Features', icon: '✨', type: 'section' },
        { id: 'screenshots', label: 'Screenshots', icon: '📱', type: 'section' },
        { id: 'download', label: 'Download', icon: '⬇️', type: 'section' },
      ]
    },
    {
      title: 'Product Pages',
      items: [
        { path: '/features', label: 'All Features', icon: '🎵', type: 'page' },
        { path: '/changelog', label: 'Changelog', icon: '📝', type: 'page' },
      ]
    },
    {
      title: 'Documentation',
      items: [
        { path: '/documentation', label: 'Documentation', icon: '📖', type: 'page' },
        { path: '/user-guide', label: 'User Guide', icon: '📋', type: 'page' },
      ]
    },
    {
      title: 'Legal',
      items: [
        { path: '/privacy-policy', label: 'Privacy Policy', icon: '🔒', type: 'page' },
        { path: '/terms-of-service', label: 'Terms of Service', icon: '📄', type: 'page' },
        { path: '/mit-license', label: 'MIT License', icon: '⚖️', type: 'page' },
      ]
    }
  ];

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 z-40 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="glass-effect h-full p-6 backdrop-blur-xl">
          <div className="mt-20">
            <h3 className="text-svara-orange font-bold text-lg mb-6">Navigation</h3>
            <nav className="space-y-6">
              {menuGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <h4 className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-3">
                    {group.title}
                  </h4>
                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <button
                        key={item.id || item.path}
                        onClick={() => item.type === 'section' ? scrollToSection(item.id) : navigateToPage(item.path)}
                        className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-all duration-200 text-left group"
                      >
                        <span className="text-base group-hover:scale-110 transition-transform duration-200">
                          {item.icon}
                        </span>
                        <span className="text-white group-hover:text-svara-orange transition-colors duration-200 text-sm">
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default NavigationSidebar;
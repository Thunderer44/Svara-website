import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Documentation = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <div ref={headerRef} className={`text-center mb-16 ${headerVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-6xl font-bold text-white mb-6 animate-float">
              <span className="text-svara-orange">Documentation</span>
            </h1>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${headerVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`} style={{animationDelay: '0.3s'}}>
              Complete guides and resources for SVARA Music Player
            </p>
          </div>

          <div ref={contentRef} className="max-w-4xl mx-auto">
            <div className={`glass-effect p-8 rounded-2xl mb-8 ${contentVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`}>
              <h2 className="text-3xl font-bold text-white mb-6">📚 Available Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link 
                  to="/user-guide"
                  className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:animate-bounce">📖</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-svara-orange transition-colors">
                    User Guide
                  </h3>
                  <p className="text-gray-300">Complete setup and usage instructions</p>
                </Link>

                <Link 
                  to="/privacy-policy"
                  className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:animate-bounce">🔒</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-svara-orange transition-colors">
                    Privacy Policy
                  </h3>
                  <p className="text-gray-300">How we handle your data and privacy</p>
                </Link>

                <a 
                  href="https://github.com/Swapnanilb/Svara/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:animate-bounce">🐛</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-svara-orange transition-colors">
                    Report Issues
                  </h3>
                  <p className="text-gray-300">Bug reports and feature requests</p>
                </a>

                <a 
                  href="https://github.com/Swapnanilb/Svara/discussions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:animate-bounce">💬</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-svara-orange transition-colors">
                    Community
                  </h3>
                  <p className="text-gray-300">Join discussions and get help</p>
                </a>

                <Link 
                  to="/terms-of-service"
                  className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:animate-bounce">📋</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-svara-orange transition-colors">
                    Terms of Service
                  </h3>
                  <p className="text-gray-300">Usage terms and conditions</p>
                </Link>

                <Link 
                  to="/mit-license"
                  className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:animate-bounce">⚖️</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-svara-orange transition-colors">
                    MIT License
                  </h3>
                  <p className="text-gray-300">Open source license details</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
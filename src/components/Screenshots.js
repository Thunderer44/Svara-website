import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Screenshots = () => {
  const [activeTab, setActiveTab] = useState('light');
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  const screenshots = {
    light: [
      { name: 'Home View', desc: 'Clean interface for adding playlists and songs', image: `${process.env.PUBLIC_URL}/home.png` },
      { name: 'Playlist Management', desc: 'Organize and manage your music collections', image: `${process.env.PUBLIC_URL}/playlist.png` },
      { name: 'Track Listing', desc: 'Browse your music with detailed track information', image: `${process.env.PUBLIC_URL}/tracklist.png` },
      { name: 'Settings Panel', desc: 'Customize your music experience', image: `${process.env.PUBLIC_URL}/srettings.png` }
    ],
    dark: [
      { name: 'Home View (Dark)', desc: 'Elegant dark theme for comfortable listening', image: `${process.env.PUBLIC_URL}/home_dark.png` },
      { name: 'Playlist View (Dark)', desc: 'Dark mode playlist management', image: `${process.env.PUBLIC_URL}/playlist_dark.png` },
      { name: 'Track List (Dark)', desc: 'Dark theme track browsing', image: `${process.env.PUBLIC_URL}/tracklist_dark.png` },
      { name: 'Settings (Dark)', desc: 'Dark mode settings and preferences', image: `${process.env.PUBLIC_URL}/settings_dark.png` }
    ]
  };

  return (
    <section id="screenshots" className="py-20 px-6">
      <div className="container mx-auto">
        <div ref={headerRef} className={`text-center mb-16 ${headerVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-5xl font-bold text-white mb-6 animate-float">
            Beautiful <span className="text-svara-orange">Interface</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto mb-8 ${headerVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`} style={{animationDelay: '0.3s'}}>
            Experience SVARA's modern design with glassmorphism effects, smooth animations, and dual theme support
          </p>

          <div className={`flex justify-center mb-12 ${headerVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`} style={{animationDelay: '0.5s'}}>
            <div className="glass-effect p-2 rounded-full">
              <button
                onClick={() => setActiveTab('light')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'light' 
                    ? 'orange-gradient text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                ☀️ Light Theme
              </button>
              <button
                onClick={() => setActiveTab('dark')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'dark' 
                    ? 'orange-gradient text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                🌙 Dark Theme
              </button>
            </div>
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {screenshots[activeTab].map((screenshot, index) => (
            <div 
              key={index}
              className={`text-center group ${gridVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`}
              style={{ animationDelay: `${gridVisible ? index * 0.2 + 0.7 : 0}s` }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-svara-orange transition-colors duration-300">
                  {screenshot.name}
                </h3>
                <p className="text-gray-300 text-lg">
                  {screenshot.desc}
                </p>
              </div>
              
              <div className="glass-effect p-4 rounded-2xl hover:scale-[1.02] transition-all duration-300">
                <img 
                  src={screenshot.image} 
                  alt={screenshot.name}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              🎨 <span className="text-svara-orange">Glassmorphism Design</span>
            </h3>
            <p className="text-gray-300 text-lg">
              Modern glass-effect styling with smooth animations, responsive layout, 
              and interactive elements that make music management a delightful experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
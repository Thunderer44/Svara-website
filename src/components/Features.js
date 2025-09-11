import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Features = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const features = [
    {
      icon: "🎵",
      title: "YouTube Integration",
      description: "Stream music directly from YouTube playlists and individual songs. Auto-detects playlist vs song URLs with seamless integration and thumbnail support."
    },
    {
      icon: "📱",
      title: "Cross-Platform Architecture",
      description: "Modern Electron-based app with React frontend and FastAPI backend. Runs as web app, desktop app, or standalone distribution."
    },
    {
      icon: "🎨",
      title: "Glassmorphism UI Design",
      description: "Beautiful dual themes with modern glass-effect styling, smooth animations, responsive layout, and interactive hover effects."
    },
    {
      icon: "🔄",
      title: "Smart Playlist Sync",
      description: "Auto-sync with YouTube changes, duplicate detection, optimized refresh that only checks for added/deleted songs, and persistent state management."
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Real-time metrics tracking, smart caching with hit rate monitoring, loading states, and graceful error handling with user notifications."
    },
    {
      icon: "🎛️",
      title: "Advanced Playback Controls",
      description: "Full playback suite: play/pause/skip, volume control with mute, seeking, shuffle/repeat modes, and real-time progress tracking."
    },
    {
      icon: "🏗️",
      title: "Modular Architecture",
      description: "Controller-based backend with separate modules for playback, playlists, progress tracking, and YouTube integration for maintainability."
    },
    {
      icon: "🔒",
      title: "Robust Error Handling",
      description: "Comprehensive error handling, loading overlays for all operations, thread-safe progress tracking, and proper cleanup mechanisms."
    }
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        <div ref={headerRef} className={`text-center mb-16 ${headerVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-5xl font-bold text-white mb-6 animate-float">
            Powerful <span className="text-svara-orange">Features</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${headerVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`} style={{animationDelay: '0.3s'}}>
            SVARA combines modern design with powerful functionality to deliver the ultimate music streaming experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
            >
              <div className="text-6xl mb-6 group-hover:animate-bounce-slow transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-svara-orange transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/features" className="inline-block mb-8">
            <button className="orange-gradient px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-110 transition-all duration-300 animate-glow">
              📖 Learn More About Features
            </button>
          </Link>
          
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              🚀 <span className="text-svara-orange">Version 2.0.0</span> - Complete Platform Migration
            </h3>
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                <strong className="text-white">Major Architecture Overhaul:</strong> Transformed from Python-only desktop app to modern Electron-based architecture with React frontend, FastAPI backend, and cross-platform support.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="text-svara-orange font-semibold mb-2">🎨 Frontend Modernization</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Replaced tkinter with React-based interface</li>
                    <li>• Modern React hooks and functional components</li>
                    <li>• Glassmorphism design with dual themes</li>
                    <li>• Responsive three-view navigation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-svara-orange font-semibold mb-2">⚙️ Backend Enhancement</h4>
                  <ul className="text-sm space-y-1">
                    <li>• FastAPI server with modular controllers</li>
                    <li>• Performance monitoring and metrics</li>
                    <li>• Smart caching with hit rate tracking</li>
                    <li>• Thread-safe progress management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
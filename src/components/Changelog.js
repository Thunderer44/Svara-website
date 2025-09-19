import React, { useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Changelog = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const versions = [
    {
      version: "1.0.0",
      date: "2025-09-20",
      type: "major",
      sections: [
        {
          title: "🛠️ Technical Architecture Transformation",
          changes: [
            "Complete Platform Migration: Transition from Python-only desktop app to modern Electron-based architecture",
            "Frontend Modernization: Replace Python GUI (tkinter) with React-based web interface",
            "API-First Design: Convert monolithic Python app to FastAPI backend + React frontend architecture",
            "Cross-Platform Support: Enable deployment as web app, desktop app, or Electron distribution",
            "Modular Backend: Refactored with controller-based design for maintainability",
            "New API Endpoints: Added /api/mute, /api/playlist/load, /api/song/check, /api/song/add"
          ]
        },
        {
          title: "🎨 Major UI/UX Overhaul",
          changes: [
            "Modern Design System: Complete redesign with glassmorphism effects and smooth animations",
            "Dual Theme Support: Light and dark themes with persistent localStorage preference",
            "Responsive Navigation: Three-view layout (Home, Playlists, Songs, Settings) with sidebar navigation",
            "SVG Icon System: Replaced emoji icons with scalable SVG icons for better visibility",
            "Interactive Elements: Enhanced hover effects, transitions, and visual feedback"
          ]
        },
        {
          title: "🎵 Enhanced Music Features",
          changes: [
            "Volume Icon Mute: Click volume icon to toggle mute/unmute with visual state indicators",
            "Advanced Player Controls: Improved playback controls with orange progress fills",
            "Smart Playlist Loading: Click playlists to load without auto-playing, separate play buttons",
            "Advanced Progress Tracking: Threaded progress updates with smooth seeking and drag controls",
            "Smart Text Processing: Automatic song title cleaning and formatting utilities"
          ]
        },
        {
          title: "⚡ Performance & UX Enhancements",
          changes: [
            "Loading States: Comprehensive loading overlays and spinners for all async operations",
            "Performance Monitoring: Real-time tracking of playlist loads, song loads, and cache operations",
            "Cache Analytics: Detailed cache hit/miss tracking for optimization insights",
            "API Monitoring: Response time tracking with status indicators and performance analysis",
            "Memory Management: Efficient progress tracking with minimal resource usage"
          ]
        }
      ]
    },
    {
      version: "0.0.1",
      date: "2025-08-24",
      type: "major",
      sections: [
        {
          title: "Initial Release",
          changes: [
            "Basic YouTube music streaming functionality",
            "Simple playlist management",
            "VLC media player integration",
            "React frontend with Electron wrapper",
            "FastAPI backend server",
            "Basic playback controls (play, pause, skip)",
            "Volume control and seeking",
            "YouTube playlist import"
          ]
        }
      ]
    }
  ];

  const getVersionColor = (type) => {
    switch (type) {
      case 'major': return 'text-red-400 bg-red-400/20';
      case 'minor': return 'text-blue-400 bg-blue-400/20';
      case 'patch': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const handleVersionClick = (version) => {
    window.open(`https://github.com/Swapnanilb/Svara/releases/tag/v${version}`, '_blank');
  };

  return (
    <div className="min-h-screen gradient-bg">
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <div ref={headerRef} className={`text-center mb-16 ${headerVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-6xl font-bold text-white mb-6 animate-float">
              <span className="text-svara-orange">Changelog</span>
            </h1>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${headerVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`} style={{animationDelay: '0.3s'}}>
              Track the evolution of SVARA Music Player through our version history
            </p>
          </div>

          <div ref={contentRef} className="max-w-4xl mx-auto">
            {versions.map((version, index) => (
              <div 
                key={version.version}
                className={`glass-effect p-8 rounded-2xl mb-8 hover:scale-[1.02] transition-all duration-300 ${contentVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`}
                style={{animationDelay: `${contentVisible ? index * 0.2 + 0.5 : 0}s`}}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <span 
                      className={`px-4 py-2 rounded-full font-bold cursor-pointer hover:scale-105 transition-transform duration-200 ${getVersionColor(version.type)}`}
                      onClick={() => handleVersionClick(version.version)}
                      title="View release on GitHub"
                    >
                      v{version.version}
                    </span>
                    <span className="text-gray-400">{version.date}</span>
                  </div>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">
                    {version.type} release
                  </span>
                </div>

                <div className="space-y-6">
                  {version.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h4 className="text-lg font-semibold text-svara-orange mb-3">{section.title}</h4>
                      <ul className="space-y-2 ml-4">
                        {section.changes.map((change, changeIndex) => (
                          <li key={changeIndex} className="flex items-start space-x-3">
                            <span className="text-svara-orange mt-1 text-sm">•</span>
                            <span className="text-gray-300 text-sm leading-relaxed">{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                🚀 <span className="text-svara-orange">What's Next?</span>
              </h3>
              <p className="text-gray-300 text-lg">
                Stay tuned for more exciting features and improvements coming to SVARA Music Player!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Changelog;
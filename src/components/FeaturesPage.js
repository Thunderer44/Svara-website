import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const FeaturesPage = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadClick = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const featureCategories = [
    {
      title: "🎵 Core Music Features",
      icon: "🎶",
      description: "Essential music streaming and playback capabilities",
      features: [
        {
          name: "YouTube Integration",
          icon: "📺",
          description: "Stream directly from YouTube playlists and songs with seamless integration.",
          details: "Paste any YouTube playlist or song URL and SVARA automatically detects the type, imports content, fetches thumbnails, and validates URLs. Supports both public and unlisted playlists with comprehensive error handling.",
          highlights: ["Playlist Import", "Auto Thumbnails", "URL Validation"]
        },
        {
          name: "Advanced Playback",
          icon: "🎛️",
          description: "Professional-grade controls with real-time progress and smooth seeking.",
          details: "Complete playback suite with play/pause/skip controls, volume management with one-click mute, real-time progress tracking, drag-to-seek functionality, and thread-safe updates for smooth performance.",
          highlights: ["Play/Pause/Skip", "Volume Control", "Drag Seeking"]
        },
        {
          name: "Smart Playlists",
          icon: "📋",
          description: "Auto-sync with YouTube, duplicate detection, and intelligent management.",
          details: "Intelligent playlist system that auto-syncs with YouTube changes, prevents duplicates, optimizes refresh operations, and maintains persistent state across sessions with smart loading that doesn't auto-play.",
          highlights: ["Auto-Sync", "Duplicate Prevention", "Smart Loading"]
        }
      ]
    },
    {
      title: "🎨 Modern Design",
      icon: "✨",
      description: "Beautiful interface with cutting-edge design",
      features: [
        {
          name: "Glassmorphism UI",
          icon: "🪟",
          description: "Modern glass-effect styling with smooth animations and interactions.",
          details: "Cutting-edge glassmorphism design with backdrop blur effects, smooth hover animations, interactive scaling and rotation, signature orange accent colors, and responsive card-based layouts.",
          highlights: ["Glass Effects", "Hover Animations", "Orange Accents"]
        },
        {
          name: "Dual Themes",
          icon: "🌓",
          description: "Light and dark themes with persistent preference and instant switching.",
          details: "Beautiful dual theme system with clean light mode for daytime use, comfortable dark mode for night listening, persistent localStorage preferences, and instant switching without page reload.",
          highlights: ["Light Theme", "Dark Theme", "Auto Save"]
        },
        {
          name: "Responsive Layout",
          icon: "📱",
          description: "Three-view navigation system optimized for all screen sizes.",
          details: "Intuitive three-view layout with Home for adding content, Playlists for browsing collections, Songs for track listings, Settings for preferences, and responsive sidebar navigation.",
          highlights: ["Mobile Ready", "Sidebar Nav", "Clean Layout"]
        }
      ]
    },
    {
      title: "⚡ Performance",
      icon: "🚀",
      description: "High-performance architecture and optimization",
      features: [
        {
          name: "Cross-Platform",
          icon: "💻",
          description: "Modern Electron app with React frontend and FastAPI backend.",
          details: "Modern architecture with React frontend using hooks-based state management, FastAPI backend with modular controllers, Electron wrapper for desktop distribution, and web app deployment capability.",
          highlights: ["React Frontend", "FastAPI Backend", "Electron Wrapper"]
        },
        {
          name: "Real-time Monitoring",
          icon: "📊",
          description: "Performance metrics tracking and optimization analytics.",
          details: "Comprehensive performance monitoring with playlist load time tracking, song load metrics, cache hit rate analysis, API response time monitoring, and session analytics for optimization.",
          highlights: ["Load Tracking", "Cache Monitoring", "API Analytics"]
        },
        {
          name: "Smart Caching",
          icon: "💾",
          description: "Intelligent caching system with efficiency monitoring.",
          details: "Advanced caching with automatic thumbnail and metadata caching, cache efficiency metrics, smart invalidation, preload operations with success tracking, and memory-efficient resource management.",
          highlights: ["Auto Caching", "Hit Rate Tracking", "Memory Optimization"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <div ref={headerRef} className={`text-center mb-16 ${headerVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-6xl font-bold text-white mb-6 animate-float">
              <span className="text-svara-orange">Features</span> Overview
            </h1>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${headerVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`} style={{animationDelay: '0.3s'}}>
              Discover the comprehensive feature set that makes SVARA the ultimate YouTube music streaming experience
            </p>
          </div>

          <div ref={contentRef} className="max-w-6xl mx-auto">
            {featureCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className={`mb-16 ${contentVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`}
                style={{animationDelay: `${contentVisible ? categoryIndex * 0.2 + 0.5 : 0}s`}}
              >
                <div className="glass-effect p-8 rounded-3xl">
                  <div className="text-center mb-12">
                    <div className="text-8xl mb-6 animate-float">{category.icon}</div>
                    <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>
                    <p className="text-xl text-gray-300">{category.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="glass-effect p-6 rounded-2xl hover:scale-105 hover:rotate-1 transition-all duration-500 group">
                        <div className="text-center mb-4">
                          <div className="text-6xl mb-4 animate-bounce-slow group-hover:animate-pulse group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-svara-orange transition-colors duration-300">
                            {feature.name}
                          </h3>
                        </div>
                        <p className="text-gray-300 mb-3 leading-relaxed text-center text-sm">
                          {feature.description}
                        </p>
                        <p className="text-gray-400 mb-4 leading-relaxed text-xs">
                          {feature.details}
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                          {feature.highlights.map((highlight, highlightIndex) => (
                            <span key={highlightIndex} className="px-3 py-1 bg-svara-orange/20 text-svara-orange rounded-full text-sm font-medium hover:bg-svara-orange hover:text-white transition-colors duration-300 cursor-pointer">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                🚀 <span className="text-svara-orange">Ready to Experience SVARA?</span>
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                Download SVARA Music Player today and transform your YouTube music streaming experience!
              </p>
              <button onClick={handleDownloadClick} className="orange-gradient px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-110 transition-all duration-300">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
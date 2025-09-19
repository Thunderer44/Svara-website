import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <div className="animate-float">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            <span className="text-svara-orange">SVARA</span>
            <br />
            Music Player
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-pulse-slow">
          Modern YouTube Music Player with beautiful, responsive interface. 
          Stream music directly from YouTube playlists with advanced features.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="#download" className="orange-gradient px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-110 hover:rotate-1 transition-all duration-300 animate-glow hover:shadow-2xl" onClick={(e) => {e.preventDefault(); document.getElementById('download')?.scrollIntoView({behavior: 'smooth'});}}>
            🎵 Download for Windows
          </a>
          <a href="#features" className="glass-effect px-8 py-4 rounded-full text-white font-semibold hover:scale-105 hover:-rotate-1 transition-all duration-300 hover:bg-white/20" onClick={(e) => {e.preventDefault(); document.getElementById('features')?.scrollIntoView({behavior: 'smooth'});}}>
            Learn More
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform duration-300 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl mb-4 animate-rotate-slow">🎶</div>
            <h3 className="text-xl font-semibold text-white mb-2">YouTube Integration</h3>
            <p className="text-gray-300">Stream directly from YouTube playlists</p>
          </div>
          
          <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform duration-300 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="text-4xl mb-4 animate-pulse-slow">🎨</div>
            <h3 className="text-xl font-semibold text-white mb-2">Modern UI</h3>
            <p className="text-gray-300">Beautiful glassmorphism design with dual themes</p>
          </div>
          
          <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform duration-300 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <div className="text-4xl mb-4 animate-bounce-slow">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
            <p className="text-gray-300">Real-time metrics and smart caching</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
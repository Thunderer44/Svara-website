import React, { useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const UserGuide = () => {
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
              <span className="text-svara-orange">User</span> Guide
            </h1>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${headerVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`} style={{animationDelay: '0.3s'}}>
              Complete guide to using SVARA Music Player
            </p>
          </div>

          <div ref={contentRef} className="max-w-4xl mx-auto space-y-8">
            
            {/* Getting Started */}
            <div className={`glass-effect p-8 rounded-2xl ${contentVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`}>
              <h2 className="text-3xl font-bold text-svara-orange mb-6">🚀 Getting Started</h2>
              <div className="space-y-4 text-gray-300">
                <p>Welcome to SVARA Music Player! This guide will help you get the most out of your music streaming experience.</p>
                <div className="glass-effect p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-3">📍 Home Page - Adding Music</h3>
                  <p className="mb-3">The home page features a search bar where you can add YouTube content:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong>Paste YouTube URL:</strong> Copy any YouTube song or playlist URL into the search bar</li>
                    <li>• <strong>Click Add:</strong> Press the add button to load the content</li>
                    <li>• <strong>Single Songs:</strong> A popup will appear asking you to create a new playlist or select an existing one</li>
                    <li>• <strong>Playlists:</strong> YouTube playlists are loaded directly and may take time depending on the number of songs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Playlist Management */}
            <div className={`glass-effect p-8 rounded-2xl ${contentVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`} style={{animationDelay: '0.2s'}}>
              <h2 className="text-3xl font-bold text-svara-orange mb-6">📋 Playlist Management</h2>
              <div className="space-y-4 text-gray-300">
                <div className="glass-effect p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-3">🎵 Playlist View</h3>
                  <p className="mb-3">Manage your music collections with powerful playlist features:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong>Play Button:</strong> Click to start playing the entire playlist</li>
                    <li>• <strong>Three-Dot Menu:</strong> Access playlist options including:
                      <ul className="ml-4 mt-1 space-y-1">
                        <li>- Remove playlist from library</li>
                        <li>- Refresh to sync with YouTube playlist</li>
                      </ul>
                    </li>
                    <li>• <strong>Refresh All:</strong> Update all playlists at once instead of individually</li>
                    <li>• <strong>Loading Time:</strong> Playlist loading depends on the number of songs as metadata is fetched</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Song Management */}
            <div className={`glass-effect p-8 rounded-2xl ${contentVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`} style={{animationDelay: '0.4s'}}>
              <h2 className="text-3xl font-bold text-svara-orange mb-6">🎶 Song Management</h2>
              <div className="space-y-4 text-gray-300">
                <div className="glass-effect p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-3">📱 Songs View</h3>
                  <p className="mb-3">Browse and control your music with the songs interface:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong>Tracklist Display:</strong> Shows all songs from the selected playlist</li>
                    <li>• <strong>Song Selection:</strong> Click on any song to start playing from that point</li>
                    <li>• <strong>Now Playing:</strong> The currently playing song is highlighted and labeled</li>
                    <li>• <strong>Track Information:</strong> View song titles, artists, and thumbnails</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Settings & Customization */}
            <div className={`glass-effect p-8 rounded-2xl ${contentVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`} style={{animationDelay: '0.6s'}}>
              <h2 className="text-3xl font-bold text-svara-orange mb-6">⚙️ Settings & Customization</h2>
              <div className="space-y-4 text-gray-300">
                <div className="glass-effect p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-3">🎨 Settings View</h3>
                  <p className="mb-3">Customize your SVARA experience:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong>Theme Toggle:</strong> Switch between light and dark themes</li>
                    <li>• <strong>Cache Visualization:</strong> Monitor cache performance and usage</li>
                    <li>• <strong>Clear Cache:</strong> Button to clear cached data when needed</li>
                  </ul>
                </div>
                <div className="glass-effect p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-3">💾 Cache System</h3>
                  <p className="mb-3">SVARA uses two types of caches for optimal performance:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong>URL Cache:</strong> Stores streaming URLs for faster playback</li>
                    <li>• <strong>Metadata Cache:</strong> Reduces YouTube API calls for duplicate checks and song information</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Music Controls */}
            <div className={`glass-effect p-8 rounded-2xl ${contentVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`} style={{animationDelay: '0.8s'}}>
              <h2 className="text-3xl font-bold text-svara-orange mb-6">🎛️ Music Controls</h2>
              <div className="space-y-4 text-gray-300">
                <div className="glass-effect p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-3">🎵 Bottom Control Bar</h3>
                  <p className="mb-3">Full-featured music controls at the bottom of the screen:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-svara-orange font-semibold mb-2">Playback Controls</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Play/Pause button</li>
                        <li>• Previous song</li>
                        <li>• Next song</li>
                        <li>• Seek forward/backward</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-svara-orange font-semibold mb-2">Advanced Features</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Progress/seek bar</li>
                        <li>• Volume control</li>
                        <li>• Repeat modes</li>
                        <li>• Shuffle toggle</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-svara-orange font-semibold mb-2">Now Playing Display</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Current song thumbnail</li>
                      <li>• Song title and artist</li>
                      <li>• Real-time progress tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips & Tricks */}
            <div className={`glass-effect p-8 rounded-2xl ${contentVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`} style={{animationDelay: '1s'}}>
              <h2 className="text-3xl font-bold text-svara-orange mb-6">💡 Tips & Tricks</h2>
              <div className="space-y-4 text-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-effect p-4 rounded-lg">
                    <h3 className="text-lg font-bold text-white mb-2">⚡ Performance Tips</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Let playlists fully load before switching views</li>
                      <li>• Use cache clearing if experiencing issues</li>
                      <li>• Refresh playlists periodically for updates</li>
                    </ul>
                  </div>
                  <div className="glass-effect p-4 rounded-lg">
                    <h3 className="text-lg font-bold text-white mb-2">🎵 Music Management</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Organize songs into themed playlists</li>
                      <li>• Use the refresh all feature for bulk updates</li>
                      <li>• Check "Now Playing" to track current song</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGuide;
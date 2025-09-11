import React, { useState } from 'react';

const Download = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Simulate download process
    setTimeout(() => {
      setDownloading(false);
      // In a real scenario, this would trigger the actual download
      alert('Download would start here! Please check the GitHub releases page for the actual download.');
    }, 2000);
  };

  return (
    <section id="download" className="py-20 px-6">
      <div className="container mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 animate-float">
            Download <span className="text-svara-orange">SVARA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get the latest version of SVARA Music Player and start streaming your favorite YouTube music today
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-effect p-12 rounded-3xl mb-12">
            <div className="mb-8">
              <div className="text-6xl mb-6 animate-bounce-slow">🎵</div>
              <h3 className="text-3xl font-bold text-white mb-4">
                SVARA Music Player <span className="text-svara-orange">v2.0.0</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                Complete platform migration with modern React frontend, FastAPI backend, and enhanced features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">💻</div>
                <h4 className="font-semibold text-white">Platform</h4>
                <p className="text-gray-300 text-sm">Windows 10/11<br/>Cross-platform ready</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📦</div>
                <h4 className="font-semibold text-white">Size</h4>
                <p className="text-gray-300 text-sm">~50 MB<br/>Lightweight install</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-semibold text-white">Performance</h4>
                <p className="text-gray-300 text-sm">Real-time metrics<br/>Smart caching</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🆓</div>
                <h4 className="font-semibold text-white">License</h4>
                <p className="text-gray-300 text-sm">MIT License<br/>Free & Open Source</p>
              </div>
            </div>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className={`orange-gradient px-12 py-6 rounded-full text-white font-bold text-xl transition-all duration-300 ${
                downloading 
                  ? 'opacity-75 cursor-not-allowed' 
                  : 'hover:scale-110 animate-glow'
              }`}
            >
              {downloading ? (
                <span className="flex items-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                  Preparing Download...
                </span>
              ) : (
                '⬇️ Download for Windows'
              )}
            </button>

            <p className="text-gray-400 text-sm mt-4">
              By downloading, you agree to our terms of service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-white mb-4">
                🔧 System Requirements
              </h4>
              <ul className="text-gray-300 space-y-2 text-left">
                <li>• <strong>OS:</strong> Windows 10 or later</li>
                <li>• <strong>RAM:</strong> 4GB minimum, 8GB recommended</li>
                <li>• <strong>Storage:</strong> 100MB free disk space</li>
                <li>• <strong>Network:</strong> Internet connection required</li>
                <li>• <strong>Media:</strong> VLC Media Player (auto-installed)</li>
                <li>• <strong>Runtime:</strong> Python 3.8+ and Node.js (bundled)</li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-white mb-4">
                📋 What's Included
              </h4>
              <ul className="text-gray-300 space-y-2 text-left">
                <li>• <strong>Core App:</strong> SVARA Music Player</li>
                <li>• <strong>Backend:</strong> FastAPI server with controllers</li>
                <li>• <strong>Frontend:</strong> React-based modern UI</li>
                <li>• <strong>Tools:</strong> Auto-updater & desktop shortcuts</li>
                <li>• <strong>Docs:</strong> User guide & API documentation</li>
                <li>• <strong>Cleanup:</strong> Complete uninstaller included</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-gray-400 mb-4">Need help or have questions?</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-svara-orange hover:text-orange-400 transition-colors duration-300">
                📖 Documentation
              </a>
              <a href="#" className="text-svara-orange hover:text-orange-400 transition-colors duration-300">
                🐛 Report Issues
              </a>
              <a href="#" className="text-svara-orange hover:text-orange-400 transition-colors duration-300">
                💬 Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
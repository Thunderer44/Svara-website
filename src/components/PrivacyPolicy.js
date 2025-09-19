import React, { useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const PrivacyPolicy = () => {
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
              <span className="text-svara-orange">Privacy</span> Policy
            </h1>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${headerVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`} style={{animationDelay: '0.3s'}}>
              Last updated: September 2025
            </p>
          </div>

          <div ref={contentRef} className="max-w-4xl mx-auto">
            <div className={`glass-effect p-8 rounded-2xl mb-8 ${contentVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`}>
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-svara-orange mb-4">Data Collection and Usage</h2>
                <p className="text-gray-300 mb-6">
                  SVARA Music Player is designed with privacy in mind. We do not collect, store, or process any personal data from our users.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">What We Don't Collect</h3>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Personal information (names, emails, addresses)</li>
                  <li>• Usage analytics or tracking data</li>
                  <li>• Music listening history or preferences</li>
                  <li>• Device information or system data</li>
                  <li>• Cookies or local storage for tracking</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-3">Third-Party Services</h3>
                <p className="text-gray-300 mb-4">
                  SVARA uses YouTube as a media provider. When you use our application:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• YouTube's own privacy policy applies to content streaming</li>
                  <li>• We do not control or monitor YouTube's data practices</li>
                  <li>• Any data collection is handled directly by YouTube, not SVARA</li>
                  <li>• We recommend reviewing YouTube's privacy policy for their data practices</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-3">Local Data</h3>
                <p className="text-gray-300 mb-6">
                  All application data (playlists, settings, cache) is stored locally on your device and never transmitted to our servers.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">Disclaimer of Liability</h3>
                <p className="text-gray-300 mb-6">
                  SVARA Music Player acts solely as a client application for accessing YouTube content. We disclaim all liability for:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Data practices of third-party services (YouTube, etc.)</li>
                  <li>• Privacy policies of external content providers</li>
                  <li>• Any data collection by integrated services</li>
                  <li>• Security of third-party platforms</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-3">Changes to Privacy Policy</h3>
                <p className="text-gray-300 mb-6">
                  We may update this privacy policy at any time without prior notice. Continued use of SVARA constitutes acceptance of any changes.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">Contact</h3>
                <p className="text-gray-300">
                  For privacy-related questions, please visit our GitHub repository or community discussions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
import React, { useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const TermsOfService = () => {
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
              <span className="text-svara-orange">Terms</span> of Service
            </h1>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${headerVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`} style={{animationDelay: '0.3s'}}>
              Last updated: September 2025
            </p>
          </div>

          <div ref={contentRef} className="max-w-4xl mx-auto">
            <div className={`glass-effect p-8 rounded-2xl mb-8 ${contentVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`}>
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-svara-orange mb-4">Acceptance of Terms</h2>
                <p className="text-gray-300 mb-6">
                  By downloading, installing, or using SVARA Music Player, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the software.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">License and Usage</h3>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• SVARA is free-to-use software distributed under the MIT License</li>
                  <li>• You may use, modify, and distribute the software according to MIT License terms</li>
                  <li>• Commercial use is permitted under the MIT License</li>
                  <li>• No warranty or guarantee is provided with the software</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-3">Content and Media Disclaimer</h3>
                <p className="text-gray-300 mb-4">
                  SVARA Music Player uses YouTube as its media server and content provider:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• We do not own, host, or control any media content accessed through SVARA</li>
                  <li>• All content is provided by YouTube and subject to their terms and policies</li>
                  <li>• Users are responsible for ensuring their use complies with YouTube's Terms of Service</li>
                  <li>• We do not promote, encourage, or facilitate copyright infringement or piracy</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-3">User Responsibilities</h3>
                <p className="text-gray-300 mb-4">Users are solely responsible for:</p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Ensuring lawful use of the software and accessed content</li>
                  <li>• Compliance with all applicable copyright laws and regulations</li>
                  <li>• Respecting intellectual property rights of content creators</li>
                  <li>• Any unauthorized use or violation of copyrighted material</li>
                  <li>• Understanding and following YouTube's Terms of Service</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-3">Limitation of Liability</h3>
                <p className="text-gray-300 mb-4">
                  SVARA Music Player and its developers disclaim all liability for:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Any copyright infringement or unauthorized use of content by users</li>
                  <li>• Actions taken by users that violate third-party rights</li>
                  <li>• Content availability, quality, or legality on third-party platforms</li>
                  <li>• Any damages, losses, or legal consequences arising from software use</li>
                  <li>• Interruptions, errors, or security issues with the software</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-3">Third-Party Services</h3>
                <p className="text-gray-300 mb-6">
                  SVARA integrates with YouTube and other third-party services. Users must comply with the terms and policies of these services. We are not responsible for changes to third-party APIs, policies, or service availability.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">Modifications to Terms</h3>
                <p className="text-gray-300 mb-6">
                  We reserve the right to modify these Terms of Service at any time without prior notice. We may also change pricing, features, or discontinue the software without notice. Continued use after changes constitutes acceptance of new terms.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">Termination</h3>
                <p className="text-gray-300 mb-6">
                  These terms remain in effect until terminated. You may terminate by discontinuing use and deleting the software. We may terminate or restrict access at any time for any reason.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">Governing Law</h3>
                <p className="text-gray-300 mb-6">
                  These terms are governed by applicable local laws. Any disputes shall be resolved in appropriate courts of competent jurisdiction.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">Contact Information</h3>
                <p className="text-gray-300">
                  For questions about these Terms of Service, please visit our GitHub repository or community discussions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
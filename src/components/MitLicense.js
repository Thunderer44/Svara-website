import React, { useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const MitLicense = () => {
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
              <span className="text-svara-orange">MIT</span> License
            </h1>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${headerVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`} style={{animationDelay: '0.3s'}}>
              Open Source License for SVARA Music Player
            </p>
          </div>

          <div ref={contentRef} className="max-w-4xl mx-auto">
            <div className={`glass-effect p-8 rounded-2xl mb-8 ${contentVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`}>
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-svara-orange mb-6">MIT License</h2>
                
                <div className="bg-gray-900/50 p-6 rounded-lg mb-6 font-mono text-sm">
                  <p className="text-gray-300 mb-4">Copyright (c) 2025 SVARA Music Player</p>
                  
                  <p className="text-gray-300 mb-4">
                    Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the "Software"), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:
                  </p>
                  
                  <p className="text-gray-300 mb-4">
                    The above copyright notice and this permission notice shall be included in all
                    copies or substantial portions of the Software.
                  </p>
                  
                  <p className="text-gray-300">
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    SOFTWARE.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">What This Means</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="glass-effect p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-svara-orange mb-2">✅ You Can</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Use the software commercially</li>
                      <li>• Modify the source code</li>
                      <li>• Distribute copies</li>
                      <li>• Include in private projects</li>
                      <li>• Sublicense the software</li>
                    </ul>
                  </div>
                  
                  <div className="glass-effect p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-svara-orange mb-2">📋 You Must</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Include the original license</li>
                      <li>• Include the copyright notice</li>
                      <li>• Document any changes made</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">Disclaimer</h3>
                <p className="text-gray-300 mb-6">
                  The MIT License provides the software "as is" without any warranty. The authors are not liable for any damages or issues that may arise from using the software.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">Source Code</h3>
                <p className="text-gray-300 mb-4">
                  The complete source code for SVARA Music Player is available on GitHub:
                </p>
                <a 
                  href="https://github.com/Swapnanilb/Svara" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block orange-gradient px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300"
                >
                  🐙 View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MitLicense;
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  const [step, setStep] = useState(0);
  const [typedText1, setTypedText1] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const [mainText, setMainText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  
  const text1 = "whoami";
  const text2 = "echo \"Initializing portfolio...\"";
  const text3 = "WhoisDhana.";
  const typingSpeed = 100;
  const pauseBetweenLines = 800;
  const pauseAfterComplete = 2000;

  // Keyboard skip functionality
  useEffect(() => {
    const handleKeyPress = () => {
      if (!isComplete && !showPortfolio) {
        setIsComplete(true);
        setTimeout(() => {
          setShowPortfolio(true);
        }, 800);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isComplete, showPortfolio]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Main animation sequence
  useEffect(() => {
    const runSequence = async () => {
      // Wait initial delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Step 1: Show first prompt (static)
      setStep(1);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Step 2: Type "whoami"
      setStep(2);
      for (let i = 0; i <= text1.length; i++) {
        setTypedText1(text1.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, typingSpeed));
      }
      
      // Step 3: Show "developer" response
      await new Promise(resolve => setTimeout(resolve, 300));
      setStep(3);
      
      // Step 4: Show second prompt (static)
      await new Promise(resolve => setTimeout(resolve, pauseBetweenLines));
      setStep(4);
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Step 5: Type echo command
      setStep(5);
      for (let i = 0; i <= text2.length; i++) {
        setTypedText2(text2.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, typingSpeed));
      }
      
      // Step 6: Show "Initializing portfolio..." response
      await new Promise(resolve => setTimeout(resolve, 300));
      setStep(6);
      
      // Step 7: Start main typing animation
      await new Promise(resolve => setTimeout(resolve, pauseBetweenLines));
      setStep(7);
      
      // Type main text
      for (let i = 0; i <= text3.length; i++) {
        setMainText(text3.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, typingSpeed + 50));
      }
      
      // Step 8: Show loading indicator
      await new Promise(resolve => setTimeout(resolve, 500));
      setStep(8);
      
      // Step 9: Show final message
      await new Promise(resolve => setTimeout(resolve, 500));
      setStep(9);
      
      // Mark as complete and show portfolio
      await new Promise(resolve => setTimeout(resolve, pauseAfterComplete));
      setIsComplete(true);
      
      // Transition to portfolio
      setTimeout(() => {
        setShowPortfolio(true);
      }, 800);
    };

    runSequence();
  }, []);

  return (
    <div className="min-h-screen bg-black page-container">
      <AnimatePresence mode="wait">
        {!showPortfolio ? (
          // Terminal Animation
          <motion.div
            key="terminal"
            className="min-h-screen bg-black flex items-center justify-center p-4 page-transition"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 1.2,
              y: -50
            }}
            transition={{ 
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <div className="w-full max-w-4xl zoom-transition hw-accelerated">
              {/* Mac Terminal Window */}
              <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700">
                {/* Terminal Header */}
                <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-gray-400 text-sm font-medium">Terminal — bash — 80×24</span>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="bg-black p-6 font-mono text-green-400 min-h-[500px] flex flex-col">
                  {/* Last login line */}
                  <div className="text-gray-500 mb-2">
                    Last login: Aug 24 2025 on ttys000
                  </div>
                  
                  {/* First command line */}
                  {step >= 1 && (
                    <div className="mb-1">
                      <span className="text-blue-400">user@MacBook-Pro</span>
                      <span className="text-white">:</span>
                      <span className="text-yellow-400">~</span>
                      <span className="text-white">$ </span>
                      {step >= 2 && (
                        <>
                          <span className="text-gray-300">{typedText1}</span>
                          {step === 2 && showCursor && (
                            <span className="text-green-400">|</span>
                          )}
                        </>
                      )}
                    </div>
                  )}
                  
                  {/* Developer response */}
                  {step >= 3 && (
                    <div className="text-green-400 ml-4 mb-2">developer</div>
                  )}
                  
                  {/* Second command line */}
                  {step >= 4 && (
                    <div className="mb-1">
                      <span className="text-blue-400">user@MacBook-Pro</span>
                      <span className="text-white">:</span>
                      <span className="text-yellow-400">~</span>
                      <span className="text-white">$ </span>
                      {step >= 5 && (
                        <>
                          <span className="text-gray-300">{typedText2}</span>
                          {step === 5 && showCursor && (
                            <span className="text-green-400">|</span>
                          )}
                        </>
                      )}
                    </div>
                  )}
                  
                  {/* Initializing response */}
                  {step >= 6 && (
                    <div className="text-green-400 ml-4 mb-6">Initializing portfolio...</div>
                  )}
                  
                  {/* Main content area */}
                  <div className="flex-1 flex flex-col justify-center">
                    {/* Main typing animation */}
                    {step >= 7 && (
                      <div className="text-center mb-8">
                        <div className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                            {mainText}
                          </span>
                          {step === 7 && showCursor && (
                            <span className="text-green-400 ml-1">|</span>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Loading indicator */}
                    {step >= 8 && (
                      <div className="flex items-center justify-center space-x-2 text-gray-400 mb-8">
                        <div className="flex space-x-1">
                          <motion.div
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                            className="w-2 h-2 bg-cyan-400 rounded-full"
                          />
                          <motion.div
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                            className="w-2 h-2 bg-blue-400 rounded-full"
                          />
                          <motion.div
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                            className="w-2 h-2 bg-purple-400 rounded-full"
                          />
                        </div>
                        <span className="text-sm ml-3">Loading portfolio...</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Bottom message */}
                  {step >= 9 && (
                    <div className="text-gray-500 text-xs">
                      Press any key to continue or wait for automatic redirect...
                    </div>
                  )}
                </div>
              </div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: (step >= 9 && !isComplete) ? 1 : 0, 
                  y: (step >= 9 && !isComplete) ? 0 : 20 
                }}
                transition={{ duration: 0.8 }}
                className="text-center mt-8"
              >
                <p className="text-gray-400 text-lg">
                  Full-Stack Developer • AI Enthusiast • Digital Creator
                </p>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          // Portfolio Content
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, scale: 1.05, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 1.0, 
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.6, delay: 0.1 },
              scale: { duration: 0.8 },
              y: { duration: 0.8 }
            }}
            className="page-transition zoom-transition hw-accelerated min-h-screen bg-[#22313F] light:bg-[#FAFAFA]"
          >
            <Navigation />
            <main>
              <Hero />
              <About />
              <Projects />
              <Testimonials />
              <Contact />
            </main>
            
            <footer className="bg-transparent text-[#E0E0E0] light:text-[#22313F] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#3A4A5A]/30 light:border-[#D0D0D0]/30 relative footer-dark-override">
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-4 text-gradient">WhoisDhana</h3>
                    <p className="text-[#B0B0B0] light:text-[#555555] mb-4 max-w-md">
                      AI Developer × Designer × Marketing Veteran. 
                      Building intelligent tools that simplify complex processes.
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="https://github.com/whoisdhana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com/in/whoisdhana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://twitter.com/whois_dhana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      >
                        X (Twitter)
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-[#E0E0E0] light:text-[#22313F]">Services</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      <li className="hover:text-[#E0E0E0] light:hover:text-[#22313F] transition-colors cursor-pointer">AI Dashboard Development</li>
                      <li className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors cursor-pointer">Process Automation</li>
                      <li className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors cursor-pointer">Web3 Integration</li>
                      <li className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors cursor-pointer">Custom Web Applications</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-[#E0E0E0] light:text-[#22313F]">Contact</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      <li className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
                        <a href="mailto:whoisdhana@gmail.com">whoisdhana@gmail.com</a>
                      </li>
                      <li>Based in India</li>
                      <li>Available globally</li>
                      <li>24h response time</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-[#3A4A5A]/30 light:border-[#D0D0D0]/30 mt-8 pt-8 text-center text-[#888888] light:text-[#666666]">
                  <p>&copy; {new Date().getFullYear()} WhoisDhana. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
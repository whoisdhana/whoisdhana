"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function LoadingPage() {
  const [step, setStep] = useState(0);
  const [typedText1, setTypedText1] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const [typedText3, setTypedText3] = useState("");
  const [mainText, setMainText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();
  
  const text1 = "whoami";
  const text2 = "echo \"Initializing portfolio...\"";
  const text3 = "WhoisDhana.";
  const typingSpeed = 100;
  const pauseBetweenLines = 800;
  const pauseAfterComplete = 2000;

  // Keyboard skip functionality
  useEffect(() => {
    const handleKeyPress = () => {
      if (!isComplete && !isExiting) {
        setIsComplete(true);
        setTimeout(() => {
          setIsExiting(true);
        }, 50);
        setTimeout(() => {
          router.push("/home");
        }, 1000); // Wait for complete zoom-out animation
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isComplete, isExiting, router]);

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
      
      // Mark as complete and start smooth exit transition
      await new Promise(resolve => setTimeout(resolve, pauseAfterComplete));
      setIsComplete(true);
      
      // Start exit transition with optimized timing
      setTimeout(() => {
        setIsExiting(true);
      }, 50);
      
      // Wait for complete zoom-out animation before navigating
      setTimeout(() => {
        router.push("/home");
      }, 1000);
    };

    runSequence();
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 page-transition">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isExiting ? 0 : 1, 
          scale: isExiting ? 1.2 : 1,
          y: isExiting ? -50 : 0
        }}
        transition={{ 
          duration: isExiting ? 1.0 : 0.8,
          ease: isExiting ? [0.25, 0.46, 0.45, 0.94] : "easeOut"
        }}
        className="w-full max-w-4xl zoom-transition hw-accelerated"
      >
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
              Last login: {new Date().toLocaleDateString()} on ttys000
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
            opacity: (step >= 9 && !isExiting) ? 1 : 0, 
            y: (step >= 9 && !isExiting) ? 0 : 20 
          }}
          transition={{ duration: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-lg">
            Full-Stack Developer • AI Enthusiast • Digital Creator
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TerminalLogo({ isNavigation = false }: { isNavigation?: boolean }) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  
  const asciiArt = [
    "██     ██ ██   ██  ██████  ██ ███████ ██████  ██   ██  █████  ███    ██  █████  ",
    "██     ██ ██   ██ ██    ██ ██ ██      ██   ██ ██   ██ ██   ██ ████   ██ ██   ██ ",
    "██  █  ██ ███████ ██    ██ ██ ███████ ██   ██ ███████ ███████ ██ ██  ██ ███████ ",
    "██ ███ ██ ██   ██ ██    ██ ██      ██ ██   ██ ██   ██ ██   ██ ██  ██ ██ ██   ██ ",
    " ███ ███  ██   ██  ██████  ██ ███████ ██████  ██   ██ ██   ██ ██   ████ ██   ██ "
  ];

  const fullText = asciiArt.join("\n");
  const typingSpeed = isNavigation ? 1 : 2;

  useEffect(() => {
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, [fullText, typingSpeed]);

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 300);
      return () => clearInterval(cursorInterval);
    }
  }, [displayText.length, fullText.length]);

  if (isNavigation) {
    return (
      <div className="font-mono flex items-end">
        <span className="text-gray-800 dark:text-gray-200 text-xl font-mono font-bold tracking-wider">
          /WhoisDhana
        </span>
        <span className="text-green-500 animate-pulse text-xs mb-0.5">■</span>
      </div>
    );
  }

  return (
    <div className="font-mono text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative inline-block"
      >
        <pre className="text-gray-800 dark:text-gray-200 text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base leading-tight overflow-hidden">
          {displayText}
          {showCursor && (
            <span className="text-gray-600 animate-pulse">█</span>
          )}
        </pre>
      </motion.div>
    </div>
  );
}
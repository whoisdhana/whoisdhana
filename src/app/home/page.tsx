"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-black page-container">
      <motion.div
        initial={{ opacity: 0, scale: 1.05, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          duration: 1.0, 
          ease: [0.25, 0.46, 0.45, 0.94],
          opacity: { duration: 0.6, delay: 0.1 },
          scale: { duration: 0.8 },
          y: { duration: 0.8 }
        }}
        className="page-transition zoom-transition hw-accelerated min-h-screen bg-black"
      >
        <Navigation />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        
        <footer className="bg-transparent text-gray-800 dark:text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-600 relative footer-dark-override">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4 text-gradient">WhoisDhana</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
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
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Services</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors cursor-pointer">AI Dashboard Development</li>
                  <li className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors cursor-pointer">Process Automation</li>
                  <li className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors cursor-pointer">Web3 Integration</li>
                  <li className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors cursor-pointer">Custom Web Applications</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact</h4>
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
            
            <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
              <p>&copy; {new Date().getFullYear()} WhoisDhana. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
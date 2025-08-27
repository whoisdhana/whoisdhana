"use client";

import { Button } from "@/components/ui/button";

import { ChevronDown, Github, Linkedin, Mail, Code } from "lucide-react";
import { motion } from "framer-motion";


// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="X (formerly Twitter)"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden bg-[#22313F] light:bg-[#FAFAFA]">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/15 dark:from-blue-950/20 dark:to-purple-950/15 light:from-blue-100/30 light:to-purple-100/20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/5 dark:bg-blue-400/5 light:bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/5 dark:bg-purple-400/5 light:bg-purple-200/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-400/3 to-transparent dark:from-cyan-400/3 light:from-cyan-200/10 rounded-full"></div>
      </div>

      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Content Card */}
        <motion.div 
          className="relative bg-gradient-to-br from-[#1A2832]/95 via-[#192430]/90 to-[#1A2832]/95 light:from-[#FFFFFF]/95 light:via-[#F7E8D3]/90 light:to-[#FFFFFF]/95 backdrop-blur-xl border-2 border-[#3A4A5A]/60 light:border-[#D0D0D0]/60 rounded-3xl p-8 sm:p-12 mb-12 shadow-2xl shadow-blue-500/20 light:shadow-blue-300/20 overflow-hidden"
          variants={itemVariants}
        >
          {/* Card Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-transparent to-purple-600/8 light:from-blue-200/15 light:to-purple-200/15 rounded-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 light:via-blue-400/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/40 light:via-purple-400/60 to-transparent"></div>
          
          <div className="relative z-10">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-[#E0E0E0] via-[#F5F5F5] to-[#E0E0E0] light:from-[#2A3A4A] light:via-[#1A252F] light:to-[#2A3A4A] bg-clip-text text-transparent">
                I Transform Ideas Into
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Intelligent Solutions
              </span>
            </h1>

            {/* Role */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-blue-300 light:text-blue-600 mb-2">
                AI Marketing Automation Engineer
              </h2>
              <p className="text-[#B0B0B0] light:text-[#555555]">Building AI systems that power marketing & real-time engagement</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                onClick={() => scrollToSection("projects")}
              >
                <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View AI Solutions
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3 text-lg font-medium border-2 border-[#3A4A5A]/80 light:border-[#D0D0D0]/80 text-[#E0E0E0] light:text-[#2A3A4A] hover:bg-[#1A2832]/60 light:hover:bg-[#F0F0F0]/60 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                onClick={() => scrollToSection("contact")}
              >
                Discuss Your Project
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Minimal Tech Stack */}
        <motion.div variants={itemVariants}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <span className="text-sm text-[#888888] light:text-[#666666] mr-4">Specializing in:</span>
            {['AI Integration', 'Marketing Automation', 'Real-time Bots'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-[#1A2832]/60 light:bg-[#F7E8D3]/80 border border-[#3A4A5A]/60 light:border-[#D0D0D0]/60 text-[#E0E0E0] light:text-[#2A3A4A] rounded-full text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-center space-x-6 mb-12">
            {[
              { href: "https://github.com/whoisdhana", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/whoisdhana", icon: Linkedin, label: "LinkedIn" },
              { href: "https://twitter.com/whois_dhana", icon: XIcon, label: "X (Twitter)" },
              { href: "mailto:whoisdhana@gmail.com", icon: Mail, label: "Email" }
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : "_blank"}
                rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className="p-3 rounded-full bg-[#1A2832]/60 light:bg-[#F7E8D3]/80 border border-[#3A4A5A]/60 light:border-[#D0D0D0]/60 text-[#888888] light:text-[#666666] hover:text-[#E0E0E0] light:hover:text-[#2A3A4A] hover:border-blue-400/60 transition-all duration-300 hover:scale-110"
                whileHover={{ y: -2 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => scrollToSection("about")}
          className="text-[#888888] light:text-[#666666] hover:text-[#E0E0E0] light:hover:text-[#2A3A4A] transition-colors"
          variants={itemVariants}
          whileHover={{ y: 2 }}
          animate={{ 
            y: [0, 8, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs font-medium tracking-wider uppercase">Learn More</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
}
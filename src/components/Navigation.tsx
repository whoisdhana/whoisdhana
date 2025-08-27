"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import TerminalLogo from "./TerminalLogo";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {

    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      document.documentElement.style.backgroundColor = '#FAFAFA';
      document.body.style.backgroundColor = '#FAFAFA';
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      document.documentElement.style.backgroundColor = '#22313F';
      document.body.style.backgroundColor = '#22313F';
    }

    return () => {
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      document.documentElement.style.backgroundColor = '#22313F';
      document.body.style.backgroundColor = '#22313F';
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      document.documentElement.style.backgroundColor = '#FAFAFA';
      document.body.style.backgroundColor = '#FAFAFA';
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#1A2832]/80 light:bg-[#FFFFFF]/85 backdrop-blur-xl border-b border-[#3A4A5A]/30 light:border-[#D0D0D0]/30 shadow-lg supports-[backdrop-filter]:bg-[#1A2832]/70 supports-[backdrop-filter]:light:bg-[#FFFFFF]/75"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:opacity-80 transition-opacity"
            >
              <TerminalLogo isNavigation={true} />
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#B0B0B0] light:text-[#555555] hover:text-[#E0E0E0] light:hover:text-[#22313F] px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#1A2832] light:bg-[#22313F] hover:bg-[#0F1419] light:hover:bg-[#1A252F] text-[#E0E0E0] light:text-[#FAFAFA] border border-[#3A4A5A]/50 light:border-[#D0D0D0]/50"
            >
              Get In Touch
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9"
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1A2832]/85 light:bg-[#FFFFFF]/90 backdrop-blur-xl border-t border-[#3A4A5A]/30 light:border-[#D0D0D0]/30 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#B0B0B0] light:text-[#555555] hover:text-[#E0E0E0] light:hover:text-[#22313F] block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-3 py-2">
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-[#1A2832] light:bg-[#22313F] hover:bg-[#0F1419] light:hover:bg-[#1A252F] text-[#E0E0E0] light:text-[#FAFAFA] border border-[#3A4A5A]/50 light:border-[#D0D0D0]/50"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
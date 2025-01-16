"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Apply dark mode on initial render
  useEffect(() => {
    // Check localStorage for saved dark mode preference
    const savedMode = localStorage.getItem("darkMode");
    const isDark = savedMode === "true"; // Convert string to boolean
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode); // Save to localStorage
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full max-w-6xl md:px-20 md:py-4 flex justify-between items-center">
      {/* Left Section */}
      <div className="text-lg font-semibold text-bluetextdefault dark:text-bluetextdefault">
        <Link href="/">
          @afifalhauzan
        </Link>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center space-x-6">
        <div className="flex space-x-6">
          <Link href="/about" className="text-md text-bluetextdefault hover:text-gray-200">
            About
          </Link>
          <Link href="/projects" className="text-md text-bluetextdefault hover:text-gray-200">
            Projects
          </Link>
          <Link href="/contact" className="text-md text-bluetextdefault hover:text-gray-200">
            Contact
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="p-2">
          {isDarkMode ? (
            <SunIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          )}
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden z-50 p-2 dark:text-gray-200"
      >
        {isMobileMenuOpen ? (
          <XMarkIcon className="h-6 w-6 text-bluetextdefault" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-bluetextdefault" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white z-20 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-6">
          <Link
            href="/about"
            className="text-2xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-2xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-2xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="mt-6 p-3">
            {isDarkMode ? (
              <SunIcon className="h-8 w-8 text-gray-800 dark:text-white" />
            ) : (
              <MoonIcon className="h-8 w-8text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      </div>

    </nav>
  );
}

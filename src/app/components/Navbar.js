"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  // Apply dark mode on initial render
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle("dark", newMode); // Toggle dark mode
      return newMode;
    });
  };

  return (
    <nav className="w-full max-w-6xl px-20 py-4 flex justify-between items-center">
      {/* Left Section */}
      <div className="text-lg font-semibold text-bluetextdefault dark:text-bluetextdefault">
        <Link href="/">
          @afifalhauzan
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
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
    </nav>
  );
}

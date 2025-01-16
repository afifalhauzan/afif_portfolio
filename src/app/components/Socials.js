"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
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
      </div>
    </nav>
  );
}

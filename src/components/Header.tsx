"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
            Portfolio
          </Link>

          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/work" 
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Work
            </Link>
            <Link 
              href="#about" 
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}


'use client'
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white text-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 p-10">
            <Link href="/">
              <img
                src="/logo.svg" // Update the path to your logo in the public folder
                alt="World Premiere Artists"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-gray-400">Home</Link>
            <Link href="/about" className="hover:text-gray-400">About</Link>
            <Link href="/instructors" className="hover:text-gray-400">Instructors</Link>
            <Link href="/imta" className="hover:text-gray-400">IMTA</Link>
            <Link href="/faq" className="hover:text-gray-400">FAQ</Link>
            <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-black focus:outline-none focus:text-white"
              aria-label="Toggle menu"
              // You can add functionality to toggle the mobile menu here
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-black rounded-lg shadow-lg">
            <ul className="space-y-4 py-4 px-6">
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="block hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/instructors" onClick={() => setIsMenuOpen(false)} className="block hover:text-gray-400">
                  Instructors
                </Link>
              </li>
              <li>
                <Link href="/imta" onClick={() => setIsMenuOpen(false)} className="block hover:text-gray-400">
                  IMTA
                </Link>
              </li>
              <li>
                <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="block hover:text-gray-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;

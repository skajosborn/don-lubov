"use client";
import { useState } from "react";

export default function Navbar() {
  const [isBooksDropdownOpen, setIsBooksDropdownOpen] = useState(false);

  const toggleBooksDropdown = () => {
    setIsBooksDropdownOpen(!isBooksDropdownOpen);
  };

  return (
    <nav className="bg-white/70 backdrop-blur-sm shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <a href="/" className="text-xl font-bold text-gray-900 hover:text-red-700 transition-colors cursor-pointer">Don Lubov</a>
          <div className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-black hover:underline hover:text-red-700 cursor-pointer transition-colors"
            >
              Home
            </a>

            {/* Books Dropdown */}
            <div className="relative">
              <button
                onClick={toggleBooksDropdown}
                className="text-black hover:underline hover:text-red-700 cursor-pointer transition-colors flex items-center"
              >
                Books
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${isBooksDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isBooksDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {/* Inner Peace and Enlightenment */}
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Inner Peace & Enlightenment</h3>
                    <div className="space-y-1">
                      <a
                        href="/books/6step"
                        className="block text-sm text-black hover:underline hover:text-red-700 cursor-pointer px-2 py-1 rounded"
                      >
                        6 Step Path to Enlightenment
                      </a>
                      <a
                        href="/books/lifespurpose"
                        className="block text-sm text-black hover:underline hover:text-red-700 cursor-pointer px-2 py-1 rounded"
                      >
                        Life's Purpose: From Stress to Enlightenment
                      </a>
                      <a
                        href="/books/whoamI"
                        className="block text-sm text-black hover:underline hover:text-red-700 cursor-pointer px-2 py-1 rounded"
                      >
                        Who Are We and Why Are We Here?
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 my-2"></div>

                  {/* Science Fiction */}
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Science Fiction</h3>
                    <div className="space-y-1">
                      <a
                        href="/books/convoswithai"
                        className="block text-sm text-black hover:underline hover:text-red-700 cursor-pointer px-2 py-1 rounded"
                      >
                        Conversations With AI
                      </a>
                      <a
                        href="/books/tippingpoint"
                        className="block text-sm text-black hover:underline hover:text-red-700 cursor-pointer px-2 py-1 rounded"
                      >
                        The Tipping Point
                      </a>
                      <a
                        href="/books/firstbreath"
                        className="block text-sm text-black hover:underline hover:text-red-700 cursor-pointer px-2 py-1 rounded"
                      >
                        First Breath
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 my-2"></div>

                  {/* Words of Wisdom */}
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Words of Wisdom</h3>
                    <div className="space-y-1">
                      <a
                        href="/books/seniorwis"
                        className="block text-sm text-black hover:underline hover:text-red-700 cursor-pointer px-2 py-1 rounded"
                      >
                        Senior Wisdom
                      </a>
                      <a
                        href="/books/grandfather"
                        className="block text-sm text-black hover:underline hover:text-red-700 cursor-pointer px-2 py-1 rounded"
                      >
                        A Grandfather's Advice
                      </a>
                      <a
                        href="/books/lizen"
                        className="block text-sm text-black hover:underline hover:text-red-700 cursor-pointer px-2 py-1 rounded"
                      >
                        Long Island Zen
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 my-2"></div>

                  {/* Miscellaneous */}
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Miscellaneous</h3>
                    <div className="space-y-1">
                      <a
                        href="/books/illustrated"
                        className="block text-sm text-black hover:underline hover:text-red-700 cursor-pointer px-2 py-1 rounded"
                      >
                        Illustrated Book of Consciousness
                      </a>
                      <a
                        href="/books/memoirs"
                        className="block text-sm text-black hover:underline hover:text-red-700 cursor-pointer px-2 py-1 rounded"
                      >
                        Memoirs of a Boomer
                      </a>
                      <a
                        href="/books/sidejob"
                        className="block text-sm text-black hover:underline hover:text-red-700 cursor-pointer px-2 py-1 rounded"
                      >
                        The Side Job
                      </a>
                      <a
                        href="/books/promptsprose"
                        className="block text-sm text-black hover:underline hover:text-red-700 cursor-pointer px-2 py-1 rounded"
                      >
                        Prompts in Prose and Poetry
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#about"
              className="text-black hover:underline hover:text-red-700 cursor-pointer transition-colors"
            >
              About
            </a>
            <a
              href="#footer"
              className="text-black hover:underline hover:text-red-700 cursor-pointer transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isBooksDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsBooksDropdownOpen(false)}
        />
      )}
    </nav>
  );
} 
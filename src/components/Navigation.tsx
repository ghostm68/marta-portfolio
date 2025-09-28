"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-black">
            МК
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-neutral-700 hover:text-black transition-colors font-medium">
              {t('nav.about')}
            </a>
            <a href="#projects" className="text-neutral-700 hover:text-black transition-colors font-medium">
              {t('nav.projects')}
            </a>
            <a href="#contact" className="text-neutral-700 hover:text-black transition-colors font-medium">
              {t('nav.contact')}
            </a>

            {/* Language Toggle */}
            <div className="flex items-center space-x-2 ml-4 border-l border-neutral-300 pl-4">
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 text-sm font-medium transition-colors ${
                  language === 'ru'
                    ? 'text-black bg-neutral-200 rounded'
                    : 'text-neutral-500 hover:text-black'
                }`}
              >
                RU
              </button>
              <span className="text-neutral-300">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'text-black bg-neutral-200 rounded'
                    : 'text-neutral-500 hover:text-black'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Inverse Color Scheme */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-black/95 backdrop-blur-lg -mx-6 px-6 py-6 rounded-lg border border-white/10">
            <div className="space-y-4">
              <a
                href="#about"
                className="block text-white hover:text-neutral-300 transition-colors font-medium py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </a>
              <a
                href="#projects"
                className="block text-white hover:text-neutral-300 transition-colors font-medium py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.projects')}
              </a>
              <a
                href="#contact"
                className="block text-white hover:text-neutral-300 transition-colors font-medium py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </a>

              {/* Mobile Language Toggle */}
              <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                <span className="text-white/60 text-sm">Language:</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setLanguage('ru')}
                    className={`px-3 py-1 text-sm font-medium transition-colors rounded ${
                      language === 'ru'
                        ? 'text-black bg-white'
                        : 'text-white/80 bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    RU
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 text-sm font-medium transition-colors rounded ${
                      language === 'en'
                        ? 'text-black bg-white'
                        : 'text-white/80 bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

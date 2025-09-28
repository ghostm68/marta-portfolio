"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

export function RussianLettersHero() {
  const [mounted, setMounted] = useState(false);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const { t } = useLanguage();

  const russianLetters = ['М', 'А', 'Р', 'Т', 'А', 'К', 'Е', 'С', 'С', 'Л', 'Е', 'Р'];
  const floatingLetters = ['Ж', 'Ф', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentLetterIndex((prev) => (prev + 1) % russianLetters.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [russianLetters.length]);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* Floating Background Letters */}
      <div className="absolute inset-0">
        {floatingLetters.map((letter, index) => (
          <div
            key={index}
            className="absolute text-neutral-200 text-6xl md:text-8xl font-bold animate-pulse opacity-20"
            style={{
              left: `${(index * 17 + 10) % 90}%`,
              top: `${(index * 23 + 15) % 80}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            {letter}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        {/* Animated Main Letter */}
        <div className="mb-8">
          <div className="text-8xl md:text-[12rem] lg:text-[16rem] font-bold text-black transition-all duration-1000 transform hover:scale-110">
            {russianLetters[currentLetterIndex]}
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            {t('hero.name')}
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            {t('hero.title')}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Geometric Accent */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-black transform rotate-45 opacity-10 hidden lg:block"></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-black rounded-full opacity-10 hidden lg:block"></div>
    </section>
  );
}

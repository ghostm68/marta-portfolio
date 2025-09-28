"use client";

import { useState, useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const russianLetters = ['М', 'А', 'Р', 'Т', 'А'];
  const name = "КЕССЛЕР";

  useEffect(() => {
    const letterInterval = setInterval(() => {
      setCurrentLetterIndex((prev) => {
        if (prev < russianLetters.length - 1) {
          return prev + 1;
        }
        clearInterval(letterInterval);
        // Start fade out after showing all letters
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onComplete, 800); // Complete after fade animation
        }, 500);
        return prev;
      });
    }, 600);

    return () => clearInterval(letterInterval);
  }, [russianLetters.length, onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-800 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-white/5 text-6xl md:text-8xl font-bold animate-pulse"
            style={{
              left: `${(i * 23) % 100}%`,
              top: `${(i * 17) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '3s',
            }}
          >
            {russianLetters[i % russianLetters.length]}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Large animated letter */}
        <div className="mb-8">
          <div
            className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-white transition-all duration-1000 transform"
            style={{
              transform: `scale(${currentLetterIndex === russianLetters.length - 1 ? 1.2 : 1})`,
              textShadow: '0 0 40px rgba(255,255,255,0.3)',
            }}
          >
            {russianLetters[currentLetterIndex] || 'М'}
          </div>
        </div>

        {/* Name reveal */}
        <div className="space-y-4">
          <div className="flex justify-center space-x-2 md:space-x-4">
            {russianLetters.map((letter, index) => (
              <span
                key={index}
                className={`text-2xl md:text-4xl font-bold transition-all duration-500 ${
                  index <= currentLetterIndex
                    ? 'text-white opacity-100 transform translate-y-0'
                    : 'text-white/30 opacity-0 transform translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Last name appears after all letters */}
          {currentLetterIndex >= russianLetters.length - 1 && (
            <div className="animate-fade-in-up">
              <div className="text-xl md:text-3xl text-white/80 font-light tracking-wider">
                {name}
              </div>
            </div>
          )}
        </div>

        {/* Loading indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{
                width: `${((currentLetterIndex + 1) / russianLetters.length) * 100}%`
              }}
            />
          </div>
        </div>

        {/* Geometric accent */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/20 transform rotate-45 hidden lg:block" />
        <div className="absolute bottom-32 left-20 w-20 h-20 border border-white/20 rounded-full hidden lg:block" />
      </div>
    </div>
  );
}

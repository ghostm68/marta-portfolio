"use client";

import { useState, useEffect } from "react";
import { SplashScreen } from "@/components/SplashScreen";
import { Navigation } from "@/components/Navigation";
import { RussianLettersHero } from "@/components/RussianLettersHero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageContext";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000); // Show splash for 4 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <LanguageProvider>
      <main className="min-h-screen bg-neutral-50">
        <Navigation />
        <RussianLettersHero />
        <AboutSection />
        <ProjectsSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
}

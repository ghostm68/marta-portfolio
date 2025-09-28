"use client";

import { useLanguage } from "./LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {t('footer.title')}
            </h3>
            <p className="text-lg text-neutral-300 leading-relaxed max-w-md">
              {t('footer.subtitle')}
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:inkrealm@wordstar.nexus" className="text-neutral-300 hover:text-white transition-colors">
                  inkrealm@wordstar.nexus
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-neutral-300">{t('footer.location')}</span>
              </div>
            </div>
          </div>

          {/* Social Links & Quick Navigation */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold mb-4">{t('footer.social')}</h4>
              <div className="flex space-x-6">
                <a
                  href="https://www.instagram.com/miss.kessler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297L3.74 16.988H.084l2.735-2.735c-.807-.878-1.297-2.029-1.297-3.326s.49-2.448 1.297-3.326L.084 4.866h3.656l1.383 1.297c.878-.807 2.029-1.297 3.326-1.297s2.448.49 3.326 1.297l1.383-1.297h3.656l-2.735 2.735c.807.878 1.297 2.029 1.297 3.326s-.49 2.448-1.297 3.326l2.735 2.735h-3.656l-1.383-1.297c-.878.807-2.029 1.297-3.326 1.297z"/>
                  </svg>
                </a>

                <a
                  href="https://m.imdb.com/name/nm7814433/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <span className="text-sm font-bold">IMDb</span>
                </a>

                <a
                  href="https://wordstar.nexus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <span className="text-sm font-bold">WordStar</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">{t('footer.navigation')}</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-neutral-400 hover:text-white transition-colors">
                  {t('nav.about')}
                </a>
                <a href="#projects" className="block text-neutral-400 hover:text-white transition-colors">
                  {t('nav.projects')}
                </a>
                <a href="#contact" className="block text-neutral-400 hover:text-white transition-colors">
                  {t('nav.contact')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-2xl font-bold">МК</div>

            <div className="flex items-center space-x-8 text-sm text-neutral-400">
              <span>© 2025 Marta Kessler</span>
              <span>{t('footer.rights')}</span>
            </div>
          </div>
        </div>

        {/* Floating Russian Letter */}
        <div className="absolute bottom-8 right-8 text-6xl text-neutral-800 font-bold opacity-20 pointer-events-none hidden lg:block">
          М
        </div>
      </div>
    </footer>
  );
}

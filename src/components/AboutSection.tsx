"use client";

import { useLanguage } from "./LanguageContext";
import { PhotoLightbox } from "./PhotoLightbox";

export function AboutSection() {
  const { t } = useLanguage();

  const photoGallery = [
    {
      src: "https://ext.same-assets.com/467221494/4072590286.jpeg",
      alt: "Marta Kessler Portrait 1",
      caption: "Behind the scenes"
    },
    {
      src: "https://ext.same-assets.com/467221494/2691428049.jpeg",
      alt: "Marta Kessler Portrait 2",
      caption: "Professional shoot"
    },
    {
      src: "https://ext.same-assets.com/467221494/1566849973.jpeg",
      alt: "Marta Kessler Portrait 3",
      caption: "Creative session"
    },
    {
      src: "https://ext.same-assets.com/467221494/271328626.jpeg",
      alt: "Marta Kessler Portrait 4",
      caption: "Artistic portrait"
    },
    {
      src: "https://ext.same-assets.com/467221494/1022268777.jpeg",
      alt: "Marta Kessler Portrait 5",
      caption: "Main portfolio image"
    },
    {
      src: "https://ext.same-assets.com/467221494/2913110329.jpeg",
      alt: "Marta Kessler Portrait 6",
      caption: "Film still"
    },
    {
      src: "https://ext.same-assets.com/467221494/1787040292.jpeg",
      alt: "Marta Kessler Portrait 7",
      caption: "Professional headshot"
    },
    {
      src: "https://ext.same-assets.com/467221494/476892679.jpeg",
      alt: "Marta Kessler Portrait 8",
      caption: "Character study"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                {t('about.creative.title')}
              </h3>
              <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                {t('about.creative.text1')}
              </p>
              <p className="text-neutral-700 text-lg leading-relaxed">
                {t('about.creative.text2')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">15+</div>
                <div className="text-sm text-neutral-600 uppercase tracking-wide">{t('about.stats.projects')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">5</div>
                <div className="text-sm text-neutral-600 uppercase tracking-wide">{t('about.stats.experience')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">3</div>
                <div className="text-sm text-neutral-600 uppercase tracking-wide">{t('about.stats.countries')}</div>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-neutral-200 rounded-lg overflow-hidden">
              <img
                src="https://ext.same-assets.com/467221494/1022268777.jpeg"
                alt="Marta Kessler Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-black rounded-full opacity-10"></div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Видео контент
            </h3>
            <p className="text-neutral-600 text-lg">
              Творческие проекты и видеоработы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="aspect-video bg-neutral-200 rounded-lg overflow-hidden relative group">
              <video
                src="https://ext.same-assets.com/467221494/1793453122.bin"
                poster="https://ext.same-assets.com/467221494/1022268777.jpeg"
                controls
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                  Creative Series
                </div>
              </div>
            </div>

            {/* Video 2 */}
            <div className="aspect-video bg-neutral-200 rounded-lg overflow-hidden relative group">
              <video
                src="https://ext.same-assets.com/467221494/123471202.bin"
                poster="https://ext.same-assets.com/467221494/2691428049.jpeg"
                controls
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                  Behind The Scenes
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Series Section with Lightbox */}
        <div className="border-t border-neutral-200 pt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {t('about.photoseries.title')}
            </h3>
            <p className="text-neutral-600 text-lg">
              {t('about.photoseries.subtitle')}
            </p>
          </div>

          {/* Photo Gallery with Lightbox */}
          <PhotoLightbox photos={photoGallery} />
        </div>
      </div>
    </section>
  );
}

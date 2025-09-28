"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    // Navigation
    'nav.about': 'О себе',
    'nav.projects': 'Проекты',
    'nav.contact': 'Контакт',

    // Hero
    'hero.name': 'Марта Кесслер',
    'hero.title': 'Актриса · Модель · Креативный директор',

    // About
    'about.title': 'О творчестве',
    'about.subtitle': 'Создание социальных пространств через искусство кино и фотографии. Исследование человеческих эмоций в современном мире.',
    'about.creative.title': 'Творческий путь',
    'about.creative.text1': 'Родилась 8 августа 2009 года в Москве. С раннего возраста проявляла интерес к актерскому мастерству и визуальному искусству. Известна по ролям в международных проектах, включая "The Mysterious Benedict Society" и российские фильмы.',
    'about.creative.text2': 'Создает пространства для социального взаимодействия через свое искусство, объединяя коммерческую сообразительность с творческой инновацией.',
    'about.stats.projects': 'Проектов',
    'about.stats.experience': 'Лет опыта',
    'about.stats.countries': 'Страны',
    'about.photoseries.title': 'Фотосерии',
    'about.photoseries.subtitle': 'Инициированные проекты и творческие исследования',

    // Projects
    'projects.title': 'Фильмография',
    'projects.subtitle': 'Избранные роли в кино и телевидении. От международных проектов до российских постановок.',
    'projects.featured': 'Главная роль',
    'projects.imdb.link': 'Полная фильмография на IMDb',

    // Footer
    'footer.title': 'Давайте работать вместе',
    'footer.subtitle': 'Открыта для новых проектов в кино, телевидении и творческих коллабораций.',
    'footer.social': 'Социальные сети',
    'footer.navigation': 'Навигация',
    'footer.location': 'Москва, Россия',
    'footer.rights': 'Все права защищены',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.name': 'Marta Kessler',
    'hero.title': 'Actress · Model · Creative Director',

    // About
    'about.title': 'About the Art',
    'about.subtitle': 'Creating social spaces through the art of cinema and photography. Exploring human emotions in the modern world.',
    'about.creative.title': 'Creative Journey',
    'about.creative.text1': 'Born August 8, 2009 in Moscow. From an early age, she showed interest in acting and visual arts. Known for roles in international projects, including "The Mysterious Benedict Society" and Russian films.',
    'about.creative.text2': 'Creates spaces for social interaction through her art, combining commercial savvy with creative innovation.',
    'about.stats.projects': 'Projects',
    'about.stats.experience': 'Years Experience',
    'about.stats.countries': 'Countries',
    'about.photoseries.title': 'Photo Series',
    'about.photoseries.subtitle': 'Initiated projects and creative research',

    // Projects
    'projects.title': 'Filmography',
    'projects.subtitle': 'Selected roles in film and television. From international projects to Russian productions.',
    'projects.featured': 'Leading Role',
    'projects.imdb.link': 'Full filmography on IMDb',

    // Footer
    'footer.title': "Let's Work Together",
    'footer.subtitle': 'Open to new projects in film, television and creative collaborations.',
    'footer.social': 'Social Media',
    'footer.navigation': 'Navigation',
    'footer.location': 'Moscow, Russia',
    'footer.rights': 'All rights reserved',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

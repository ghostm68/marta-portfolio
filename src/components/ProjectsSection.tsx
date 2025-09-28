"use client";

import { useLanguage } from "./LanguageContext";

interface Project {
  title: string;
  year: string;
  role: string;
  type: string;
  rating?: string;
  image: string;
  description: string;
}

export function ProjectsSection() {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: "The Mysterious Benedict Society",
      year: "2021-2022",
      role: "Constance Contraire",
      type: "TV Series",
      rating: "7.6",
      image: "https://ext.same-assets.com/2784977362/3234773272.jpeg",
      description: "Талантливые сироты объединяются для выполнения секретной миссии от эксцентричного благотворителя."
    },
    {
      title: "The Santa Clauses",
      year: "2023",
      role: "Olga",
      type: "TV Series",
      rating: "6.4",
      image: "https://ext.same-assets.com/2784977362/378978037.jpeg",
      description: "Продолжение истории о Санта-Клаусе и его семье в современном мире."
    },
    {
      title: "Cosmoball",
      year: "2020",
      role: "Девочка с респиратором",
      type: "Film",
      rating: "4.7",
      image: "https://ext.same-assets.com/2784977362/1959617723.jpeg",
      description: "Фантастический спортивный фильм о будущем человечества."
    },
    {
      title: "Survive",
      year: "2022",
      role: "Young Jane",
      type: "Film",
      rating: "4.7",
      image: "https://ext.same-assets.com/2784977362/2221195134.jpeg",
      description: "Драма о выживании и человеческой стойкости."
    },
    {
      title: "Rusalki",
      year: "2022",
      role: "Yulya",
      type: "TV Series",
      rating: "5.5",
      image: "https://ext.same-assets.com/2784977362/2261466431.jpeg",
      description: "Мистическая драма о современных русалках."
    },
    {
      title: "The Method",
      year: "2020",
      role: "Tasya",
      type: "TV Series",
      rating: "7.3",
      image: "https://ext.same-assets.com/2784977362/4055834711.jpeg",
      description: "Криминальная драма о психологическом профилировании."
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            {t('projects.title')}
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-black text-white text-sm font-medium rounded-full">
                    {t('projects.featured')}
                  </span>
                  <span className="text-neutral-500">{projects[0].year}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-black">
                  {projects[0].title}
                </h3>
                <p className="text-xl text-neutral-600">
                  {projects[0].role} • {projects[0].type}
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {projects[0].description}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium">{projects[0].rating}</span>
                  </div>
                  <span className="text-neutral-500">IMDb</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[3/4] bg-neutral-200 rounded-lg overflow-hidden">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(1).map((project, index) => (
            <div key={index} className="group">
              <div className="aspect-[3/4] bg-neutral-200 rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-black group-hover:text-neutral-600 transition-colors">
                    {project.title}
                  </h4>
                  <span className="text-sm text-neutral-500">{project.year}</span>
                </div>
                <p className="text-neutral-600">{project.role}</p>
                <div className="flex items-center space-x-2">
                  {project.rating && (
                    <>
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-medium">{project.rating}</span>
                    </>
                  )}
                  <span className="text-sm text-neutral-500">{project.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Link */}
        <div className="text-center mt-16">
          <a
            href="https://m.imdb.com/name/nm7814433/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-black hover:text-neutral-600 transition-colors font-medium"
          >
            <span>{t('projects.imdb.link')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

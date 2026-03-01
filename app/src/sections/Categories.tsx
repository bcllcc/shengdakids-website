import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Categories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      name: t.categoriesSection.items.baby.name,
      description: t.categoriesSection.items.baby.desc,
      image: '/images/category-baby.jpg',
      count: t.categoriesSection.items.baby.count,
    },
    {
      name: t.categoriesSection.items.sports.name,
      description: t.categoriesSection.items.sports.desc,
      image: '/images/category-sports.jpg',
      count: t.categoriesSection.items.sports.count,
    },
    {
      name: t.categoriesSection.items.sandals.name,
      description: t.categoriesSection.items.sandals.desc,
      image: '/images/category-sandals.jpg',
      count: t.categoriesSection.items.sandals.count,
    },
    {
      name: t.categoriesSection.items.boots.name,
      description: t.categoriesSection.items.boots.desc,
      image: '/images/category-boots.jpg',
      count: t.categoriesSection.items.boots.count,
    },
    {
      name: t.categoriesSection.items.formal.name,
      description: t.categoriesSection.items.formal.desc,
      image: '/images/category-formal.jpg',
      count: t.categoriesSection.items.formal.count,
    },
    {
      name: t.categoriesSection.items.slippers.name,
      description: t.categoriesSection.items.slippers.desc,
      image: '/images/category-slippers.jpg',
      count: t.categoriesSection.items.slippers.count,
    },
  ];

  return (
    <section
      id="categories"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-brand-gray relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(254,92,38,0.05)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(254,92,38,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="section-subtitle">{t.categoriesSection.subtitle}</span>
          <h2 className="section-title mt-4">
            {t.categoriesSection.title1}
            <span className="text-brand-orange">{t.categoriesSection.title2}</span>
          </h2>
          <p className="mt-4 text-brand-text/70">
            {t.categoriesSection.desc}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="text-xs text-white/70 mb-1">{category.count}{language === 'zh' ? '款' : ''}</p>
                <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                <p className="text-sm text-white/80">{category.description}</p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

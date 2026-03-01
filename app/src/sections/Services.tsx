import { useEffect, useRef, useState } from 'react';
import { Truck, RefreshCw, ShieldCheck, Headphones, Package, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

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

  const services = [
    {
      icon: Package,
      title: t.servicesSection.items.supply.title,
      description: t.servicesSection.items.supply.desc,
    },
    {
      icon: Truck,
      title: t.servicesSection.items.delivery.title,
      description: t.servicesSection.items.delivery.desc,
    },
    {
      icon: ShieldCheck,
      title: t.servicesSection.items.quality.title,
      description: t.servicesSection.items.quality.desc,
    },
    {
      icon: Headphones,
      title: t.servicesSection.items.service.title,
      description: t.servicesSection.items.service.desc,
    },
    {
      icon: RefreshCw,
      title: t.servicesSection.items.return.title,
      description: t.servicesSection.items.return.desc,
    },
    {
      icon: Zap,
      title: t.servicesSection.items.new.title,
      description: t.servicesSection.items.new.desc,
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="section-subtitle mb-3 block">{t.servicesSection.subtitle}</span>
          <h2 className="section-title mb-4">{t.servicesSection.title}</h2>
          <p className="text-gray-500">
            {t.servicesSection.desc}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-6 border border-gray-100 hover:border-sky-200 hover:shadow-lg transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-sky-500 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-sky-500 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sky-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

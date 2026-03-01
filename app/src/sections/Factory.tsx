import { useEffect, useRef, useState } from 'react';
import { Factory as FactoryIcon, Ruler, CheckCircle, Truck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Factory = () => {
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

  const capabilities = [
    {
      icon: Ruler,
      title: t.factory.capabilities.design.title,
      desc: t.factory.capabilities.design.desc,
    },
    {
      icon: FactoryIcon,
      title: t.factory.capabilities.manufacture.title,
      desc: t.factory.capabilities.manufacture.desc,
    },
    {
      icon: CheckCircle,
      title: t.factory.capabilities.quality.title,
      desc: t.factory.capabilities.quality.desc,
    },
    {
      icon: Truck,
      title: t.factory.capabilities.delivery.title,
      desc: t.factory.capabilities.delivery.desc,
    },
  ];

  const stats = [
    { value: '30000+', label: t.factory.stats.area },
    { value: '8', label: t.factory.stats.lines },
    { value: '500+', label: t.factory.stats.employees },
    { value: '30000', label: t.factory.stats.capacity },
  ];

  const process = [
    { step: '01', title: t.factory.process.design.title, desc: t.factory.process.design.desc },
    { step: '02', title: t.factory.process.procurement.title, desc: t.factory.process.procurement.desc },
    { step: '03', title: t.factory.process.manufacture.title, desc: t.factory.process.manufacture.desc },
    { step: '04', title: t.factory.process.quality.title, desc: t.factory.process.quality.desc },
    { step: '05', title: t.factory.process.logistics.title, desc: t.factory.process.logistics.desc },
  ];

  return (
    <section
      id="factory"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="section-subtitle mb-3 block">{t.factory.subtitle}</span>
          <h2 className="section-title mb-4">{t.factory.title}</h2>
          <p className="text-gray-500">
            {t.factory.desc}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image Gallery */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
          >
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/design-studio.jpg"
                  alt="设计研发"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/quality-control.jpg"
                  alt="品质检测"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/warehouse.jpg"
                  alt="仓储物流"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right: Capabilities */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">{t.factory.coreAdvantage}</h3>
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-sky-50 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-sky-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-sky-50 rounded-2xl p-6 text-center"
            >
              <p className="text-3xl font-bold text-sky-500 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Production Process */}
        <div
          className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <h3 className="text-xl font-bold text-gray-900 text-center mb-10">{t.factory.processTitle}</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {process.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center">
                  <div className="w-14 h-14 bg-sky-500 rounded-2xl flex items-center justify-center mb-3 mx-auto">
                    <span className="text-white font-bold text-sm">{item.step}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
                {index < process.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-gray-300 mx-3 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Factory;

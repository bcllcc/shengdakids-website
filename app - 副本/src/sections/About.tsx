import { useEffect, useRef, useState } from 'react';
import { Factory, Award, Truck, Users, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
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
      { threshold: 0.15, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Factory,
      title: t.about.features.production.title,
      desc: t.about.features.production.desc,
    },
    {
      icon: Award,
      title: t.about.features.quality.title,
      desc: t.about.features.quality.desc,
    },
    {
      icon: Truck,
      title: t.about.features.delivery.title,
      desc: t.about.features.delivery.desc,
    },
    {
      icon: Users,
      title: t.about.features.service.title,
      desc: t.about.features.service.desc,
    },
  ];

  const highlights = t.about.highlights;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区 */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-subtitle">{t.about.subtitle}</span>
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-desc mt-4">
            {t.about.desc}
          </p>
        </div>

        {/* 内容区 */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* 左侧图片 */}
          <div 
            className={`relative transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src="/images/about-new.jpg"
                alt="Shengda Footwear Factory"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* 浮动数据卡片 */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-white rounded-xl shadow-card-hover p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-1">20+</div>
              <div className="text-brand-text-secondary text-sm">{t.stats.years}</div>
            </div>
          </div>

          {/* 右侧内容 */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-brand-text mb-4">
              {t.about.heading}
            </h3>
            <p className="text-brand-text-secondary leading-relaxed mb-6">
              {t.about.content}
            </p>

            {/* 亮点列表 */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                  <span className="text-brand-text-secondary text-sm">{item}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              {t.about.cta}
            </button>
          </div>
        </div>

        {/* 核心优势 */}
        <div 
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-brand-bg-light rounded-xl p-6 hover:bg-white hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-primary transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-semibold text-brand-text mb-2">{feature.title}</h4>
              <p className="text-brand-text-secondary text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

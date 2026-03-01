import { useEffect, useRef, useState } from 'react';
import { Check, Store, Handshake } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Cooperation = () => {
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

  const wholesaleFeatures = t.cooperation.wholesale.features;

  const agentFeatures = t.cooperation.agent.features;

  return (
    <section
      id="cooperation"
      ref={sectionRef}
      className="py-24 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.3)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.3)_0%,transparent_50%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/20 text-sky-400 rounded-full text-sm font-medium mb-4">
            {t.cooperation.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.cooperation.title}</h2>
          <p className="text-gray-400">
            {t.cooperation.desc}
          </p>
        </div>

        {/* Cooperation Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Wholesale Card */}
          <div
            className={`group bg-white rounded-3xl p-8 transition-all duration-1000 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
          >
            {/* Icon */}
            <div className="w-14 h-14 bg-sky-500 rounded-2xl flex items-center justify-center mb-6">
              <Store className="w-7 h-7 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.cooperation.wholesale.title}</h3>
            <p className="text-gray-500 mb-8 text-sm">
              {t.cooperation.wholesale.desc}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {wholesaleFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-sky-500" />
                  </div>
                  <span className="text-gray-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full py-3.5 bg-sky-500 text-white rounded-full font-medium transition-all duration-300 hover:bg-sky-600 hover:shadow-lg"
            >
              {t.cooperation.wholesale.btn}
            </button>
          </div>

          {/* Agent Card */}
          <div
            className={`group bg-gray-800 rounded-3xl p-8 border border-gray-700 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
          >
            {/* Icon */}
            <div className="w-14 h-14 bg-sky-500 rounded-2xl flex items-center justify-center mb-6">
              <Handshake className="w-7 h-7 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white mb-3">{t.cooperation.agent.title}</h3>
            <p className="text-gray-400 mb-8 text-sm">
              {t.cooperation.agent.desc}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {agentFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-sky-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-sky-400" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full py-3.5 bg-sky-500 text-white rounded-full font-medium transition-all duration-300 hover:bg-sky-600 hover:shadow-lg"
            >
              {t.cooperation.agent.btn}
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          {[
            { value: '95%', label: t.cooperation.stats.satisfaction },
            { value: '30%', label: t.cooperation.stats.margin },
            { value: '48h', label: t.cooperation.stats.delivery },
            { value: '1000+', label: t.cooperation.stats.merchants },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold text-sky-400 mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cooperation;

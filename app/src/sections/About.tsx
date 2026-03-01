import { useEffect, useRef, useState } from 'react';
import { PenTool, Hammer, Megaphone } from 'lucide-react';
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
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const aboutCards = [
    {
      id: 'design',
      title: t.about.cards.design.title,
      enTitle: t.about.cards.design.enTitle,
      color: 'bg-[#FF3366]',
      icon: PenTool,
      desc: t.about.cards.design.desc
    },
    {
      id: 'manufacture',
      title: t.about.cards.manufacture.title,
      enTitle: t.about.cards.manufacture.enTitle,
      color: 'bg-[#FFD700]',
      icon: Hammer,
      desc: t.about.cards.manufacture.desc
    },
    {
      id: 'brand',
      title: t.about.cards.brand.title,
      enTitle: t.about.cards.brand.enTitle,
      color: 'bg-[#00E5FF]',
      icon: Megaphone,
      desc: t.about.cards.brand.desc
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-white relative overflow-hidden border-b-4 border-black border-t-4"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 标题区：与自有品牌矩阵呼应 */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 md:mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="inline-flex items-center justify-center gap-2 px-6 py-2 border-2 border-black rounded-full bg-black mb-6">
            <span className="text-white font-black uppercase tracking-widest text-sm md:text-base">{t.about.title}</span>
          </div>
          <h2 className="font-display font-black text-5xl md:text-7xl text-black uppercase tracking-tighter mb-6">
            {t.about.subtitle}
          </h2>
          <p className="text-xl md:text-2xl text-brand-text-secondary font-bold max-w-2xl mx-auto leading-relaxed">
            {t.about.desc}
          </p>
        </div>

        {/* 核心理念卡片网格：与 Brands 卡片阵列高度统一的语言 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {aboutCards.map((card, index) => (
            <div
              key={card.id}
              className={`group relative transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
                }`}
            >
              {/* 底层阴影色块 */}
              <div className={`absolute inset-0 ${card.color} border-4 border-black rounded-3xl translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6`}></div>

              {/* 主卡片 */}
              <div className="relative bg-white border-4 border-black rounded-3xl h-full flex flex-col overflow-hidden z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2 p-8">

                {/* 顶部序号与图标 */}
                <div className="flex justify-between items-start mb-12">
                  <div className={`w-16 h-16 ${card.color} border-4 border-black rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-300`}>
                    <card.icon className="w-8 h-8 text-black" strokeWidth={2.5} />
                  </div>
                  <span className="font-display font-black text-black/20 text-5xl tracking-tighter">0{index + 1}</span>
                </div>

                {/* 标题 */}
                <div className="mb-6">
                  <h3 className="font-black text-3xl text-black mb-2">{card.title}</h3>
                  <h4 className="font-display font-black text-xl text-black/50 uppercase tracking-widest">{card.enTitle}</h4>
                </div>

                {/* 描述段落 */}
                <p className="text-brand-text-secondary font-bold text-lg leading-relaxed mt-auto">
                  {card.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* 底部醒目标签区 */}
        <div className={`mt-20 flex justify-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-brand-bg-light border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <span className="font-display font-black text-4xl text-black">{t.about.footerText1}</span>
            <div className="w-1 h-10 bg-black"></div>
            <span className="font-black text-brand-text-secondary text-xl tracking-widest leading-none whitespace-pre-wrap">{t.about.footerText2}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

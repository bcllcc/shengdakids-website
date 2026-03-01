import { useEffect, useRef, useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Brands = () => {
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

  const ipBrands = [
    {
      id: 'feifei',
      name: t.brands.items.feifei.name,
      enName: 'MAGIC FEIFEI',
      color: 'bg-[#FF3366]',
      image: '/images/product-real-2.png', // Temporary placeholder until real IP image is provided
      desc: t.brands.items.feifei.desc
    },
    {
      id: 'gduck',
      name: t.brands.items.gduck.name,
      enName: 'TUTU DUCK',
      color: 'bg-[#FFD700]',
      image: '/images/product-real-3.png',
      desc: t.brands.items.gduck.desc
    },
    {
      id: 'migu',
      name: t.brands.items.migu.name,
      enName: 'MIGU RABBIT',
      color: 'bg-[#9B51E0]',
      image: '/images/product-real-5.png',
      desc: t.brands.items.migu.desc
    }
  ];

  return (
    <section
      id="brands"
      ref={sectionRef}
      className="py-24 md:py-32 bg-white relative overflow-hidden border-b-4 border-black"
    >
      {/* 装饰性背景文字 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 flex items-center justify-center opacity-[0.03]">
        <h2 className="font-display font-black text-[25vw] leading-none whitespace-nowrap text-black">
          OUR IP
        </h2>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 标题区 */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 md:mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="inline-flex items-center justify-center gap-2 px-6 py-2 border-2 border-black rounded-full bg-brand-primary shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
            <Sparkles className="w-5 h-5 text-black" />
            <span className="text-black font-black uppercase tracking-widest text-sm md:text-base">{t.brands.badge}</span>
          </div>
          <h2 className="font-display font-black text-5xl md:text-7xl text-black uppercase tracking-tighter mb-6">
            {t.brands.title}
          </h2>
          <p className="text-xl md:text-2xl text-brand-text-secondary font-bold">
            3
          </p>
        </div>

        {/* 品牌卡片网格 - 潮玩档案袋风格 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {ipBrands.map((brand, index) => (
            <div
              key={brand.id}
              className={`group relative transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
                }`}
            >
              {/* 底层阴影色块 */}
              <div className={`absolute inset-0 ${brand.color} border-4 border-black rounded-3xl translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6`}></div>

              {/* 主卡片 */}
              <div className="relative bg-white border-4 border-black rounded-3xl h-full flex flex-col overflow-hidden z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">

                {/* 头部品牌标签 */}
                <div className={`px-6 py-4 border-b-4 border-black flex justify-between items-center ${brand.color}`}>
                  <h3 className="font-black text-xl md:text-2xl text-black truncate pr-4">{brand.name}</h3>
                  <span className="font-display font-black text-black/50 text-xl tracking-tighter shrink-0">0{index + 1}</span>
                </div>

                {/* 潮玩角色展示区 */}
                <div className="relative h-64 md:h-80 bg-brand-bg-light border-b-4 border-black flex items-center justify-center overflow-hidden p-8">
                  {/* 背景字 */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 font-display font-black text-6xl text-center leading-none">
                    {brand.enName}
                  </div>

                  {/* 悬浮产品图/IP图 */}
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-contain relative z-10 transition-transform duration-700 ease-out group-hover:scale-125 group-hover:-rotate-3 drop-shadow-2xl"
                  />
                </div>

                {/* 底部描述 */}
                <div className="p-6 md:p-8 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <h4 className="font-display font-black text-2xl text-black mb-4 uppercase tracking-tight">{brand.enName}</h4>
                    <p className="text-brand-text-secondary font-bold text-lg leading-relaxed mb-8">
                      {brand.desc}
                    </p>
                  </div>
                  <button className="w-full flex items-center justify-between px-6 py-4 border-2 border-black rounded-xl font-black text-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors group/btn">
                    <span>{t.brands.exploreBtn}</span>
                    <ArrowRight className="w-6 h-6 transform group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Brands = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.05, rootMargin: '0px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const brands = [
        {
            id: 'feifei',
            name: t.brands.feifei.name,
            enName: 'MAGIC FEIFEI',
            concept: t.brands.feifei.concept,
            desc: t.brands.feifei.desc,
            bgColor: 'bg-[#FDF4F6]', // 极浅暖粉
            accentColor: 'text-[#E08A9A]',
            image: '/images/brand_feifei.png',
        },
        {
            id: 'gduck',
            name: t.brands.gduck.name,
            enName: 'TUTU DUCK',
            concept: t.brands.gduck.concept,
            desc: t.brands.gduck.desc,
            bgColor: 'bg-[#FEFAED]', // 极浅暖黄
            accentColor: 'text-[#DEB25C]',
            image: '/images/brand_gduck.png',
        },
        {
            id: 'migu',
            name: t.brands.migu.name,
            enName: 'MIGU RABBIT',
            concept: t.brands.migu.concept,
            desc: t.brands.migu.desc,
            bgColor: 'bg-[#F2F7F9]', // 极浅灰蓝
            accentColor: 'text-[#8AA7B8]',
            image: '/images/brand_migu.png',
        }
    ];

    return (
        <section id="brands" className="py-24 md:py-32 bg-white relative overflow-hidden" ref={sectionRef}>

            {/* Massive background typography */}
            <div className="watermark-text top-20 left-10 text-[10rem] md:text-[20rem] text-gray-50/80">
                IP
            </div>

            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-95'}`}>
                    <span className="text-brand-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">{t.brands.subtitle}</span>
                    <h2 className="section-title">{t.brands.title}</h2>
                    <p className="section-subtitle">
                        {t.brands.desc}
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-20 lg:gap-12">
                    {brands.map((brand, index) => (
                        <div
                            key={brand.id}
                            className={`relative group transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-32 scale-90'}`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            {/* Graphic Floating Container */}
                            <div className="relative mb-12 w-full aspect-square flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.05]">
                                {/* Dynamic Background Shape */}
                                <div className={`absolute inset-0 ${brand.bgColor} rounded-full scale-[0.8] transition-transform duration-500 group-hover:scale-95 group-hover:rounded-[3rem]`}></div>

                                <img
                                    src={brand.image}
                                    alt=""
                                    className="relative z-10 w-[90%] h-[90%] object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:-translate-y-6 group-hover:scale-110 opacity-0"
                                    onLoad={(e) => e.currentTarget.classList.replace('opacity-0', 'opacity-100')}
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                />

                                {/* Accent floating tag */}
                                <div className={`absolute top-10 right-0 px-4 py-2 bg-white rounded-full shadow-premium text-xs font-bold ${brand.accentColor} transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-20`}>
                                    {brand.enName}
                                </div>
                            </div>

                            <div className="text-center px-4 relative z-10">
                                <h3 className="font-sans text-3xl md:text-4xl text-brand-text mb-2 font-black tracking-tight">{brand.name}</h3>
                                <div className={`inline-block px-4 py-1.5 rounded-full ${brand.bgColor} text-sm font-bold ${brand.accentColor} mb-6 mt-2`}>
                                    {brand.concept}
                                </div>
                                <p className="text-brand-text-secondary leading-relaxed font-light text-sm md:text-base max-w-sm mx-auto">
                                    {brand.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Brands;

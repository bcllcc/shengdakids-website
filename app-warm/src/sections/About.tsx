import { useEffect, useRef, useState } from 'react';
import { PenTool, HeartHandshake, Box } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

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

    const aboutFeatures = [
        {
            id: 'design',
            title: t.about.features.production.title,
            enTitle: t.about.features.production.enTitle,
            icon: PenTool,
            desc: t.about.features.production.desc
        },
        {
            id: 'manufacture',
            title: t.about.features.quality.title,
            enTitle: t.about.features.quality.enTitle,
            icon: HeartHandshake,
            desc: t.about.features.quality.desc
        },
        {
            id: 'brand',
            title: t.about.features.brand.title,
            enTitle: t.about.features.brand.enTitle,
            icon: Box,
            desc: t.about.features.brand.desc
        }
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-24 md:py-32 bg-[#F9FAFB] relative overflow-hidden"
        >
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* 杂志排版头部区 */}
                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-95'
                    }`}>

                    <div className="flex-1 lg:max-w-2xl">
                        <span className="text-brand-secondary uppercase tracking-[0.2em] text-sm font-medium mb-6 block">{t.about.ourStory}</span>
                        <h2 className="section-title">
                            {t.about.title}<br />
                            <span className="text-3xl md:text-5xl text-brand-text-secondary mt-2 block font-sans font-light">
                                {t.about.since}
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-brand-text leading-relaxed font-light mt-8">
                            {t.about.desc}
                        </p>
                        <p className="text-brand-text-secondary leading-relaxed mt-6">
                            {t.about.content}
                        </p>
                    </div>

                    <div className="flex-1 relative">
                        <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-soft">
                            <img
                                src="/images/about-new.jpg"
                                alt="Shengda Factory History"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* 优雅装饰标 */}
                        <div className="absolute -bottom-8 -left-8 bg-brand-bg p-8 rounded-[2rem] shadow-premium hidden md:block">
                            <p className="font-sans text-5xl text-brand-primary mb-1 leading-none font-bold">20<span className="text-2xl text-brand-secondary">+</span></p>
                            <p className="text-xs uppercase tracking-widest text-brand-text-secondary font-medium mt-2">{t.about.yearsExcellence}</p>
                        </div>
                    </div>

                </div>

                {/* 核心理念柔软卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {aboutFeatures.map((feature, index) => (
                        <div
                            key={feature.id}
                            className={`card-premium p-10 lg:p-12 transition-all duration-[800ms] group delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                                }`}
                        >
                            <div className="w-14 h-14 rounded-full bg-brand-bg-light shadow-sm flex items-center justify-center mb-8 text-brand-secondary group-hover:text-brand-primary group-hover:scale-110 transition-all duration-500">
                                <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                            </div>

                            <h3 className="font-sans text-2xl text-brand-text mb-2 font-bold">{feature.title}</h3>
                            <h4 className="text-xs font-medium uppercase tracking-widest text-brand-text-secondary mb-6">{feature.enTitle}</h4>

                            <p className="text-brand-text-secondary leading-relaxed font-light mt-auto">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;

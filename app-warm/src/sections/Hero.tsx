import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center bg-[#FAFAFA] overflow-hidden pt-20">

            {/* Massive Typographical Watermark (Design Sense) */}
            <div className="watermark-text top-[15%] left-[-5%] text-[12rem] md:text-[20rem] xl:text-[30rem] font-black text-gray-100/60 leading-none pointer-events-none select-none">
                PLAY
            </div>
            <div className="watermark-text bottom-[5%] right-[-5%] text-[10rem] md:text-[18rem] xl:text-[25rem] font-black text-gray-100/40 leading-none pointer-events-none select-none">
                MORE
            </div>

            {/* Accent Shapes */}
            <div className="absolute top-[30%] right-[10%] w-32 h-32 bg-[#FDE047] rounded-full mix-blend-multiply blur-xl opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-[20%] left-[20%] w-64 h-64 bg-[#3B82F6] rounded-full mix-blend-multiply blur-3xl opacity-20 pointer-events-none"></div>

            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-10 pb-20">
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-8 items-center">

                    {/* 文案排版区 - 重高街感 */}
                    <div className="text-left animate-float-up relative z-20 xl:pr-10">
                        <div className="inline-flex items-center gap-2 mb-8">
                            <span className="w-12 h-1 bg-brand-text"></span>
                            <span className="text-brand-text-secondary uppercase tracking-widest font-bold text-sm">{t.hero.newCollection}</span>
                        </div>

                        <h1 className="font-sans text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[7.5rem] text-brand-text leading-[0.95] mb-8 tracking-tighter font-black">
                            {t.hero.mainTitle[0]}<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-text to-gray-500">
                                {t.hero.mainTitle[1]}
                            </span><br />
                            <span className="text-[#3B82F6]">{t.hero.mainTitle[2]}</span>
                        </h1>

                        <p className="text-lg md:text-xl text-brand-text-secondary leading-relaxed mb-10 max-w-xl font-light">
                            {t.hero.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <a
                                href="#products"
                                onClick={(e) => handleScroll(e, '#products')}
                                className="inline-flex items-center justify-center px-10 py-5 bg-brand-text text-white font-bold tracking-wide transition-all duration-300 hover:bg-black hover:shadow-[8px_8px_0px_#FDE047] active:translate-y-1 active:shadow-none group"
                            >
                                {t.hero.explore}
                                <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
                            </a>
                        </div>
                    </div>

                    {/* 打破网格的图片区 */}
                    <div className="relative animate-fade-in lg:-ml-12 lg:mt-10" style={{ animationDelay: '0.2s' }}>

                        {/* 绝对定位的背景色块，产生错位感 */}
                        <div className="absolute -inset-6 bg-[#F3F4F6] translate-x-8 translate-y-12 -z-10 rounded-3xl"></div>
                        <div className="absolute -inset-2 bg-gradient-to-tr from-[#FDE047] to-[#FF5A00] -translate-x-4 translate-y-6 -z-20 rounded-3xl opacity-20 blur-xl"></div>

                        <div className="relative overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[3/4] bg-gray-100 max-w-xl mx-auto lg:max-w-none shadow-premium rounded-none rounded-br-[4rem] rounded-tl-[4rem]">
                            <img
                                src="/images/hero_lifestyle_warm.jpg"
                                alt=""
                                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-all duration-[2000ms] ease-out opacity-0"
                                onLoad={(e) => {
                                    e.currentTarget.classList.remove('opacity-0');
                                    e.currentTarget.classList.add('opacity-100');
                                }}
                                onError={(e) => {
                                    e.currentTarget.src = "/images/hero-1.jpg";
                                }}
                            />
                        </div>

                        {/* 浮动标签 */}
                        <div className="absolute bottom-10 -left-6 bg-white py-3 px-6 shadow-premium rotate-[-2deg]">
                            <p className="font-sans font-black text-xl tracking-tight">STREET & SPORT</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* 底部平滑滚动提示 */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="text-brand-text-secondary hover:text-brand-primary transition-colors">
                    <ChevronDown className="w-6 h-6 opacity-60" />
                </a>
            </div>
        </section>
    );
};

export default Hero;

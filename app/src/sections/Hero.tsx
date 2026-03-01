import { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Marquee } from '../components/Marquee';

// 数字滚动动画Hook
const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();
    const startValue = 0;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutExpo);

      setCount(currentValue);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [start, end, duration]);

  return count;
};

// 统计数字组件
const StatNumber = ({
  target,
  suffix = '',
  start
}: {
  target: number;
  suffix?: string;
  start: boolean;
}) => {
  const count = useCountUp(target, 2000, start);
  return (
    <span className="text-4xl md:text-6xl font-display font-black text-black uppercase">
      {count}{suffix}
    </span>
  );
};

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatsVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // 自动轮播
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // 全屏主视觉图轮播 - 使用用户上传的炫酷Banner图
  const slides = [
    { image: '/images/slide-1.jpg' },
    { image: '/images/slide-2.jpg' },
    { image: '/images/slide-3.jpg' },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const stats = [
    { value: 20, suffix: '+', label: t.stats.years },
    { value: 3, suffix: '', label: t.stats.brands },
    { value: 1000, suffix: '万+', label: t.stats.production },
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex flex-col overflow-hidden bg-brand-bg-light"
    >
      {/* 巨大的背景标语 (Oversized Typography) */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-start pt-24 md:pt-32 pointer-events-none overflow-hidden select-none">
        <h1 className="font-display font-black text-[15vw] leading-[0.85] text-brand-primary tracking-tighter uppercase whitespace-nowrap -ml-20 opacity-90 mix-blend-multiply">
          SHENGDA
        </h1>
        <h1
          className="font-display font-black text-[15vw] leading-[0.85] text-transparent tracking-tighter uppercase whitespace-nowrap ml-20 opacity-40 mix-blend-multiply"
          style={{ WebkitTextStroke: '4px #000', color: 'transparent' }}
        >
          FOOTWEAR
        </h1>
      </div>

      {/* 轮播互动区域 */}
      <div
        className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center px-4 md:px-12 z-20"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="relative w-full max-w-6xl aspect-[4/3] md:aspect-[21/9] bg-white border-4 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_rgba(0,0,0,1)] overflow-hidden rounded-2xl md:mt-16 group">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-700 ease-out ${currentSlide === index ? 'translate-x-0 z-10' : 'translate-x-[100%] z-0'
                }`}
            >
              {/* 全屏Banner图 */}
              <div className="w-full h-full relative img-overlay">
                <img
                  src={slide.image}
                  alt="Shengda Footwear"
                  className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>
          ))}

          {/* 轮播控制按钮(潮牌粗犷风格) */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-black rounded-xl flex items-center justify-center shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-brand-primary hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 z-20 group/btn"
            aria-label="上一张"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-black group-hover/btn:-translate-x-1 transition-transform" strokeWidth={3} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-black rounded-xl flex items-center justify-center shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-brand-primary hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 z-20 group/btn"
            aria-label="下一张"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-black group-hover/btn:translate-x-1 transition-transform" strokeWidth={3} />
          </button>

          {/* 潮牌风格进度指示器 */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 md:h-4 rounded border-2 border-black transition-all duration-300 ${currentSlide === index
                    ? 'w-12 bg-brand-primary'
                    : 'w-4 bg-white hover:bg-brand-primary/50'
                  }`}
                aria-label={`切换到第${index + 1}张`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 跑马灯组件 */}
      <Marquee text="TRENDY KIDS FOOTWEAR" speed={20} />

      {/* 底部统计栏 (硬核边框设计) */}
      <div className="relative z-20 bg-white border-b-4 border-black">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-32">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group flex flex-col items-center">
                <StatNumber
                  target={stat.value}
                  suffix={stat.suffix}
                  start={statsVisible}
                />
                <div className="h-1 w-12 bg-black mt-2 mb-3 group-hover:w-20 transition-all duration-300" />
                <p className="text-black font-bold uppercase tracking-widest text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

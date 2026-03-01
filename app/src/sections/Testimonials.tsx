import { useEffect, useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const testimonials = [
    {
      name: t.testimonials.items.t1.name,
      title: t.testimonials.items.t1.title,
      avatar: '/images/avatar-1.jpg',
      content: t.testimonials.items.t1.content,
      rating: 5,
    },
    {
      name: t.testimonials.items.t2.name,
      title: t.testimonials.items.t2.title,
      avatar: '/images/avatar-2.jpg',
      content: t.testimonials.items.t2.content,
      rating: 5,
    },
    {
      name: t.testimonials.items.t3.name,
      title: t.testimonials.items.t3.title,
      avatar: '/images/avatar-3.jpg',
      content: t.testimonials.items.t3.content,
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-sky-50 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="section-subtitle mb-3 block">{t.testimonials.subtitle}</span>
          <h2 className="section-title mb-4">{t.testimonials.title}</h2>
          <p className="text-gray-500">
            {t.testimonials.desc}
          </p>
        </div>

        {/* Testimonials Slider */}
        <div
          className={`relative max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-10 relative">
            {/* Quote Icon */}
            <div className="absolute -top-5 left-8 w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center">
              <Quote className="w-5 h-5 text-white" />
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-gray-400">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index
                      ? 'bg-sky-500 w-6'
                      : 'bg-gray-300 hover:bg-sky-300'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

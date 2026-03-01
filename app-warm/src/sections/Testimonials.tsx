import { useEffect, useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      name: '张经理',
      title: '某连锁母婴店采购经理',
      avatar: '/images/avatar-1.jpg',
      content: '与盛达鞋业合作已经3年了，产品质量一直很稳定，款式更新快，客户反馈很好。最重要的是他们的售后服务非常到位，有问题都能及时解决。',
      rating: 5,
    },
    {
      name: '李女士',
      title: '电商平台店主',
      avatar: '/images/avatar-2.jpg',
      content: '作为代理商，我最喜欢他们的代发服务，零库存压力，利润空间也不错。产品图片和详情页素材都很专业，省去了我很多拍摄和制作的时间。',
      rating: 5,
    },
    {
      name: '王先生',
      title: '批发市场商户',
      avatar: '/images/avatar-3.jpg',
      content: '批发价格很有竞争力，发货速度快，一般下单后第二天就能发出。混批政策也很灵活，可以根据市场需求随时调整进货款式。',
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
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-subtitle mb-3 block">客户评价</span>
          <h2 className="section-title mb-4">合作伙伴怎么说</h2>
          <p className="text-gray-500">
            听听我们的合作伙伴如何评价我们的产品和服务
          </p>
        </div>

        {/* Testimonials Slider */}
        <div
          className={`relative max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
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
                  loading="lazy"
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
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
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

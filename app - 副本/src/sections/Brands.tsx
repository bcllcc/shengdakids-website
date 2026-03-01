import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Heart, Star, Sparkles } from 'lucide-react';

const Brands = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const brands = [
    {
      name: '神童菲菲',
      tagline: '甜美公主风',
      description: '专为小公主设计的甜美系列，粉色系为主调，融入蝴蝶结、亮片等可爱元素，让每个女孩都能成为最闪亮的小公主。',
      image: '/images/brand-shentong.jpg',
      color: 'from-pink-400 to-rose-500',
      bgColor: 'bg-pink-50',
      icon: Heart,
      target: '3-10岁女童',
      products: ['公主鞋', '凉鞋', '靴子', '运动鞋'],
    },
    {
      name: '图图小黄鸭',
      tagline: '活力运动风',
      description: '以可爱的小黄鸭为形象，主打活力运动风格。色彩明快、设计活泼，陪伴孩子快乐成长，释放无限活力。',
      image: '/images/brand-tutu.jpg',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      icon: Star,
      target: '2-12岁儿童',
      products: ['运动鞋', '板鞋', '凉鞋', '休闲鞋'],
    },
    {
      name: '咪咕兔',
      tagline: '温馨陪伴风',
      description: '以可爱的兔子形象为品牌IP，主打温馨陪伴理念。产品注重舒适性和安全性，是宝宝学步和成长的最佳伙伴。',
      image: '/images/brand-migu.jpg',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      icon: Sparkles,
      target: '0-6岁婴幼儿',
      products: ['学步鞋', '软底鞋', '棉鞋', '凉鞋'],
    },
  ];

  return (
    <section
      id="brands"
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
          <span className="section-subtitle mb-3 block">旗下品牌</span>
          <h2 className="section-title mb-4">多品牌矩阵</h2>
          <p className="text-gray-500">
            覆盖不同年龄段的儿童群体，满足多样化的市场需求
          </p>
        </div>

        {/* Brand Cards */}
        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Brand Image */}
              <div className={`relative h-48 ${brand.bgColor} overflow-hidden`}>
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Target Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-gray-600">{brand.target}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Brand Name & Tagline */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${brand.color} flex items-center justify-center`}>
                    <brand.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{brand.name}</h3>
                    <span className={`text-xs font-medium bg-gradient-to-r ${brand.color} bg-clip-text text-transparent`}>
                      {brand.tagline}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {brand.description}
                </p>

                {/* Products */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {brand.products.map((product, i) => (
                    <span
                      key={i}
                      className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                    >
                      {product}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    const element = document.querySelector('#products');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:border-sky-400 hover:text-sky-500 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  查看产品
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

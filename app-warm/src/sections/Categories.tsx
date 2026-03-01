import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Categories = () => {
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

  const categories = [
    {
      name: '婴儿鞋',
      description: '0-2岁软底学步',
      image: '/images/category-baby.jpg',
      count: '120+',
    },
    {
      name: '运动鞋',
      description: '3-12岁活力运动',
      image: '/images/category-sports.jpg',
      count: '200+',
    },
    {
      name: '凉鞋',
      description: '夏季透气舒适',
      image: '/images/category-sandals.jpg',
      count: '80+',
    },
    {
      name: '靴子',
      description: '秋冬保暖时尚',
      image: '/images/category-boots.jpg',
      count: '60+',
    },
    {
      name: '正装鞋',
      description: '校园演出必备',
      image: '/images/category-formal.jpg',
      count: '50+',
    },
    {
      name: '拖鞋',
      description: '居家舒适休闲',
      image: '/images/category-slippers.jpg',
      count: '40+',
    },
  ];

  return (
    <section
      id="categories"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-brand-gray relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(254,92,38,0.05)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(254,92,38,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-subtitle">产品分类</span>
          <h2 className="section-title mt-4">
            探索我们的
            <span className="text-brand-orange">童鞋系列</span>
          </h2>
          <p className="mt-4 text-brand-text/70">
            涵盖0-12岁全年龄段，满足不同场景需求，让每个孩子都能找到适合自己的鞋子
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="text-xs text-white/70 mb-1">{category.count}款</p>
                <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                <p className="text-sm text-white/80">{category.description}</p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

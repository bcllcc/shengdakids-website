import { useEffect, useRef, useState } from 'react';
import { Truck, RefreshCw, ShieldCheck, Headphones, Package, Zap } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: Package,
      title: '全品类供应',
      description: '婴儿鞋、学步鞋、运动鞋、凉鞋、靴子等全品类童鞋供应',
    },
    {
      icon: Truck,
      title: '快速配送',
      description: '现货24小时内发货，定制订单7天内交货',
    },
    {
      icon: ShieldCheck,
      title: '品质保证',
      description: '每双鞋都经过严格质检，符合国家儿童鞋安全标准',
    },
    {
      icon: Headphones,
      title: '专属服务',
      description: '一对一客户经理，全程跟踪服务，快速响应需求',
    },
    {
      icon: RefreshCw,
      title: '灵活退换',
      description: '质量问题包退包换，30天无忧售后保障',
    },
    {
      icon: Zap,
      title: '快速上新',
      description: '每月推出新品，紧跟市场潮流，满足多样化需求',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-subtitle mb-3 block">服务优势</span>
          <h2 className="section-title mb-4">为什么选择我们</h2>
          <p className="text-gray-500">
            专业的服务团队，完善的售后体系，让您采购无忧
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-6 border border-gray-100 hover:border-sky-200 hover:shadow-lg transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-sky-500 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-sky-500 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sky-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

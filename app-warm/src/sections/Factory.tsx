import { useEffect, useRef, useState } from 'react';
import { Factory as FactoryIcon, Ruler, CheckCircle, Truck, ArrowRight } from 'lucide-react';

const Factory = () => {
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

  const capabilities = [
    {
      icon: Ruler,
      title: '自主设计研发',
      desc: '拥有专业设计团队，每年推出数百款新品',
    },
    {
      icon: FactoryIcon,
      title: '现代化生产线',
      desc: '8条自动化生产线，日产能达3万双',
    },
    {
      icon: CheckCircle,
      title: '严格品质管控',
      desc: '从原材料到成品，全流程质量检测',
    },
    {
      icon: Truck,
      title: '高效物流配送',
      desc: '智能仓储系统，快速响应订单需求',
    },
  ];

  const stats = [
    { value: '30000+', label: '㎡厂房面积' },
    { value: '8', label: '条生产线' },
    { value: '500+', label: '名员工' },
    { value: '30000', label: '双日产能' },
  ];

  const process = [
    { step: '01', title: '设计研发', desc: '原创设计，潮流引领' },
    { step: '02', title: '原料采购', desc: '严选材料，品质保证' },
    { step: '03', title: '生产制造', desc: '精细工艺，匠心打造' },
    { step: '04', title: '品质检测', desc: '多重检验，放心出厂' },
    { step: '05', title: '仓储物流', desc: '智能管理，快速发货' },
  ];

  return (
    <section
      id="factory"
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
          <span className="section-subtitle mb-3 block">关于我们</span>
          <h2 className="section-title mb-4">现代化生产基地</h2>
          <p className="text-gray-500">
            从设计研发到生产制造，完整的产业链布局，确保每一双鞋的品质
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image Gallery */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/design-studio.jpg"
                  alt="设计研发"
                  loading="lazy"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/quality-control.jpg"
                  alt="品质检测"
                  loading="lazy"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/warehouse.jpg"
                  alt="仓储物流"
                  loading="lazy"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right: Capabilities */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">核心优势</h3>
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-sky-50 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-sky-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-sky-50 rounded-2xl p-6 text-center"
            >
              <p className="text-3xl font-bold text-sky-500 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Production Process */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h3 className="text-xl font-bold text-gray-900 text-center mb-10">生产流程</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {process.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center">
                  <div className="w-14 h-14 bg-sky-500 rounded-2xl flex items-center justify-center mb-3 mx-auto">
                    <span className="text-white font-bold text-sm">{item.step}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
                {index < process.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-gray-300 mx-3 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Factory;

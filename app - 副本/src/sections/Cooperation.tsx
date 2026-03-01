import { useEffect, useRef, useState } from 'react';
import { Check, Store, Handshake } from 'lucide-react';

const Cooperation = () => {
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

  const wholesaleFeatures = [
    '起批量低，100双起批',
    '价格优惠，利润空间大',
    '款式多样，自由搭配',
    '支持混批，降低库存',
    '定期上新，紧跟潮流',
    '专属客服，一对一服务',
  ];

  const agentFeatures = [
    '零库存压力，一件代发',
    '专属代理价，利润保障',
    '提供产品图片和资料',
    '区域保护，独家经营',
    '营销支持，培训指导',
    '售后无忧，我们承担',
  ];

  return (
    <section
      id="cooperation"
      ref={sectionRef}
      className="py-24 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.3)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.3)_0%,transparent_50%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/20 text-sky-400 rounded-full text-sm font-medium mb-4">
            商务合作
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">合作模式</h2>
          <p className="text-gray-400">
            无论您是实体店铺、电商卖家还是区域代理商，我们都能为您提供最适合的合作方案
          </p>
        </div>

        {/* Cooperation Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Wholesale Card */}
          <div
            className={`group bg-white rounded-3xl p-8 transition-all duration-1000 hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Icon */}
            <div className="w-14 h-14 bg-sky-500 rounded-2xl flex items-center justify-center mb-6">
              <Store className="w-7 h-7 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-gray-900 mb-3">批发采购</h3>
            <p className="text-gray-500 mb-8 text-sm">
              适合实体店铺、连锁店、电商平台等，享受优惠价格，获取更大利润空间
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {wholesaleFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-sky-500" />
                  </div>
                  <span className="text-gray-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full py-3.5 bg-sky-500 text-white rounded-full font-medium transition-all duration-300 hover:bg-sky-600 hover:shadow-lg"
            >
              申请批发合作
            </button>
          </div>

          {/* Agent Card */}
          <div
            className={`group bg-gray-800 rounded-3xl p-8 border border-gray-700 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Icon */}
            <div className="w-14 h-14 bg-sky-500 rounded-2xl flex items-center justify-center mb-6">
              <Handshake className="w-7 h-7 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white mb-3">代理加盟</h3>
            <p className="text-gray-400 mb-8 text-sm">
              适合有销售渠道资源的合作伙伴，零库存创业，轻松开启童鞋生意
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {agentFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-sky-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-sky-400" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full py-3.5 bg-sky-500 text-white rounded-full font-medium transition-all duration-300 hover:bg-sky-600 hover:shadow-lg"
            >
              申请代理加盟
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {[
            { value: '95%', label: '客户满意度' },
            { value: '30%', label: '平均利润率' },
            { value: '48h', label: '平均发货时间' },
            { value: '1000+', label: '合作商家' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold text-sky-400 mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cooperation;

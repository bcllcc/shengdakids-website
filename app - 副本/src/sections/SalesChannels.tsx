import { useEffect, useRef, useState } from 'react';
import { ExternalLink, MapPin, Phone } from 'lucide-react';

const SalesChannels = () => {
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

  const offlineStores = [
    {
      city: '温州',
      address: '温州市鞋都大道888号盛达鞋业展厅',
      phone: '0577-88888888',
      tag: '总部',
    },
    {
      city: '广州',
      address: '广州市白云区白云世界皮具城',
      phone: '020-88888888',
      tag: '分店',
    },
    {
      city: '义乌',
      address: '义乌国际商贸城四区',
      phone: '0579-88888888',
      tag: '分店',
    },
  ];

  return (
    <section
      id="channels"
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
          <span className="section-subtitle mb-3 block">销售渠道</span>
          <h2 className="section-title mb-4">官方商城</h2>
          <p className="text-gray-500">
            线上线下全渠道覆盖，为您提供便捷的购买体验
          </p>
        </div>

        {/* Online Stores */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h3 className="text-lg font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-1 h-5 bg-sky-400 rounded-full"></span>
            线上商城
          </h3>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {/* Taobao */}
            <a
              href="#"
              className="group flex flex-col items-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 mb-4">
                <span className="text-white font-bold text-2xl md:text-3xl">淘</span>
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">淘宝旗舰店</h4>
              <span className="text-sm text-orange-500 flex items-center gap-1">
                进店逛逛 <ExternalLink className="w-3 h-3" />
              </span>
            </a>

            {/* PDD */}
            <a
              href="#"
              className="group flex flex-col items-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-red-400 to-red-500 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 mb-4">
                <span className="text-white font-bold text-2xl md:text-3xl">拼</span>
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-1 group-hover:text-red-500 transition-colors">拼多多店铺</h4>
              <span className="text-sm text-red-500 flex items-center gap-1">
                进店逛逛 <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-16"></div>

        {/* Offline Stores */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h3 className="text-lg font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-1 h-5 bg-sky-400 rounded-full"></span>
            线下门店
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {offlineStores.map((store, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-sky-400 mx-auto mb-2" />
                    <span className="text-sky-500 text-sm">门店效果图</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                      store.tag === '总部' ? 'bg-sky-100 text-sky-600' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {store.tag}
                    </span>
                    <h4 className="text-base font-bold text-gray-900">{store.city}展厅</h4>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{store.address}</p>
                  <a href={`tel:${store.phone}`} className="flex items-center gap-2 text-sky-500 text-sm font-medium hover:text-sky-600">
                    <Phone className="w-4 h-4" />
                    {store.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesChannels;

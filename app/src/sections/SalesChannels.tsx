import { ArrowRight, ShoppingBag, Store } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SalesChannels = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-brand-primary border-b-4 border-black border-t-0 py-20 overflow-hidden relative">
      {/* 极简背景线条与标语 */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between pointer-events-none opacity-20 z-0">
        <div className="w-full h-px bg-black"></div>
        <div className="w-full h-px bg-black"></div>
        <div className="w-full h-px bg-black"></div>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">

        {/* 指路牌标题 */}
        <div className="inline-block bg-black text-brand-primary font-black uppercase tracking-widest px-8 py-3 rounded-full text-lg md:text-xl mb-12 shadow-[4px_4px_0px_rgba(255,255,255,1)] transform -rotate-1 border-2 border-white">
          {t.salesChannels.badge}
        </div>

        <h2 className="font-display font-black text-6xl md:text-8xl lg:text-[8rem] leading-none text-black text-center uppercase tracking-tighter mb-16 whitespace-pre-line">
          {t.salesChannels.title}
        </h2>

        {/* 平台入口大按钮区 */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-4xl">

          {/* 淘宝 (Taobao) */}
          <a
            href="#"
            className="flex-1 group relative block bg-[#FF5000] border-4 border-black p-8 rounded-3xl hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300"
            style={{ boxShadow: '8px 8px 0px rgba(0,0,0,1)' }}
          >
            <div className="flex flex-col h-full justify-between gap-12">
              <div className="flex justify-between items-start">
                <div className="bg-white text-black font-black uppercase tracking-widest px-4 py-2 border-2 border-black rounded-full inline-flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" /> 淘宝
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-black group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-6 h-6 text-black -rotate-45" />
                </div>
              </div>
              <div>
                <h3 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tighter mb-2">
                  TAOBAO.COM
                </h3>
                <p className="text-white/90 font-bold text-lg">{t.salesChannels.taobaoName}</p>
              </div>
            </div>
          </a>

          {/* 拼多多 (Pinduoduo) */}
          <a
            href="#"
            className="flex-1 group relative block bg-[#E02E24] border-4 border-black p-8 rounded-3xl hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300"
            style={{ boxShadow: '8px 8px 0px rgba(0,0,0,1)' }}
          >
            <div className="flex flex-col h-full justify-between gap-12">
              <div className="flex justify-between items-start">
                <div className="bg-white text-black font-black uppercase tracking-widest px-4 py-2 border-2 border-black rounded-full inline-flex items-center gap-2">
                  <Store className="w-4 h-4" /> 拼多多
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-black group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-6 h-6 text-black -rotate-45" />
                </div>
              </div>
              <div>
                <h3 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tighter mb-2">
                  PINDUODUO
                </h3>
                <p className="text-white/90 font-bold text-lg">{t.salesChannels.pddName}</p>
              </div>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};

export default SalesChannels;

import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { name: t.nav.home, href: '#hero' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.products, href: '#products' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="bg-brand-text text-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* 品牌信息 */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src="/images/logo.png" 
                  alt="Shengda Footwear" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-semibold text-lg">盛达鞋业</span>
                <span className="block text-xs text-white/60 tracking-wider">SHENGDA FOOTWEAR</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.links}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>浙江省温州市鞋都大道888号</li>
              <li>400-888-8888</li>
              <li>business@shengda.com</li>
            </ul>
            <div className="mt-4">
              <p className="text-white/50 text-xs">{t.contact.hours}</p>
              <p className="text-white/70 text-sm">周一至周日 9:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            {t.footer.copyright}
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

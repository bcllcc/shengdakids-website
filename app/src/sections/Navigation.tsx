import { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#hero' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.products, href: '#products' },
    { name: t.nav.brands, href: '#brands' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <header
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 rounded-2xl border-4 border-black border-b-[6px] ${isScrolled
        ? 'bg-white shadow-[0px_4px_0px_rgba(0,0,0,1)]'
        : 'bg-white/90 backdrop-blur-md shadow-[8px_8px_0px_rgba(0,0,0,1)]'
        }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - 使用新提供的品牌Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center group"
          >
            <div className="w-32 h-10 md:w-44 md:h-12 lg:w-52 lg:h-16 xl:w-60 xl:h-20 flex-shrink-0 transition-all duration-300">
              <img
                src="/images/shengda-logo.png"
                alt="Shengda Footwear"
                className="w-full h-full object-contain object-left"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="px-2 xl:px-3 py-1.5 xl:py-2 text-[13px] xl:text-sm font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 border-2 border-transparent hover:border-black hover:bg-brand-primary hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-xl text-black"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA, Phone & Language Switch */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            {/* Switch Site */}
            <a
              href="/"
              className="flex items-center gap-1.5 px-3 py-1.5 xl:py-2 rounded-xl border-2 border-black hover:bg-brand-primary hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all text-[13px] xl:text-sm font-black text-black uppercase"
            >
              <ArrowUpRight className="w-4 h-4 xl:w-5 xl:h-5" strokeWidth={2.5} />
              <span>{t.nav.switchSite}</span>
            </a>

            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 xl:py-2 rounded-xl border-2 border-black hover:bg-brand-primary hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all text-[13px] xl:text-sm font-black text-black uppercase"
            >
              <Globe className="w-4 h-4 xl:w-5 xl:h-5" strokeWidth={2.5} />
              <span>{language === 'zh' ? 'EN' : '中'}</span>
            </button>

            <a
              href="tel:+8613676582993"
              className="hidden xl:flex items-center gap-1.5 text-black hover:text-brand-primary transition-colors font-bold whitespace-nowrap"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              <span className="text-[13px] xl:text-sm uppercase tracking-wide whitespace-nowrap">+86 136 7658 2993</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="!px-4 !py-1.5 xl:!py-2 bg-brand-primary border-2 border-black rounded-xl font-black text-black uppercase tracking-widest hover:bg-yellow-400 hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all text-[13px] xl:text-sm whitespace-nowrap shadow-[2px_2px_0px_rgba(0,0,0,1)]"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-brand-text" />
            ) : (
              <Menu className="w-5 h-5 text-brand-text" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 mt-2 bg-white border-4 border-black border-b-[6px] rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all duration-300 ${isMobileMenuOpen
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <nav className="flex flex-col p-4 gap-1">
          {/* Mobile Language Switch */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-3 text-brand-text-secondary font-medium hover:bg-brand-bg-light hover:text-brand-primary rounded-lg transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'zh' ? 'Switch to English' : '切换到中文'}</span>
          </button>

          <div className="border-t border-brand-border my-1" />

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="px-4 py-3 text-black font-black uppercase tracking-wider hover:bg-brand-primary rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="border-t border-brand-border mt-2 pt-2">
            <a
              href="tel:+8613676582993"
              className="flex items-center gap-2 px-4 py-3 text-brand-primary font-medium"
            >
              <Phone className="w-4 h-4" />
              +86 136 7658 2993
            </a>
            <a
              href="/"
              className="flex items-center gap-2 px-4 py-3 text-black font-black uppercase tracking-wider hover:bg-brand-primary rounded-lg transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
              <span>{t.nav.switchSite}</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;

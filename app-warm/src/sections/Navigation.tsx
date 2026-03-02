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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled || isMobileMenuOpen
                ? 'py-3 bg-white/95 backdrop-blur-xl shadow-soft border-b border-gray-100'
                : 'py-5 bg-transparent border-b border-transparent'
                }`}
        >
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <a
                        href="#hero"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#hero');
                        }}
                        className="flex items-center group transition-transform duration-300 hover:opacity-80"
                    >
                        <div className={`transition-all duration-300 ${isScrolled ? 'w-36 h-12 md:w-48 md:h-16 lg:w-[14rem] lg:h-20 xl:w-[20rem] xl:h-24' : 'w-44 h-16 md:w-56 md:h-20 lg:w-[18rem] lg:h-24 xl:w-[24rem] xl:h-28'} flex-shrink-0`}>
                            <img
                                src="/images/shengda-logo.png"
                                alt=""
                                className="w-full h-full object-contain object-left opacity-0 transition-opacity duration-300"
                                onLoad={(e) => e.currentTarget.classList.replace('opacity-0', 'opacity-100')}
                            />
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                                className="px-3 xl:px-5 py-2.5 text-[0.95rem] font-medium text-brand-text-secondary hover:text-brand-primary transition-colors duration-300 relative group whitespace-nowrap"
                            >
                                {link.name}
                                {/* 优雅的下划线动画 */}
                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-primary transition-all duration-300 ease-out group-hover:w-1/2 rounded-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* CTA, Phone & Language Switch */}
                    <div className="hidden lg:flex items-center gap-4 xl:gap-6">

                        {/* Contact Info (Desktop Only) */}
                        <a href="tel:+8613676582993" className="hidden xl:flex items-center gap-2 text-brand-text-secondary hover:text-brand-primary transition-colors whitespace-nowrap">
                            <Phone className="w-4 h-4" />
                            <span className="text-sm font-medium tracking-wide whitespace-nowrap">+86 136 7658 2993</span>
                        </a>

                        <div className="w-px h-5 bg-gray-200 hidden xl:block"></div>

                        {/* Switch Site */}
                        <a
                            href="/trend/"
                            className="group flex items-center gap-1.5 text-brand-text-secondary hover:text-brand-primary transition-colors whitespace-nowrap"
                        >
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                            <span className="text-sm font-medium tracking-wider">{t.nav.switchSite}</span>
                        </a>

                        {/* Language Switch */}
                        <button
                            onClick={toggleLanguage}
                            className="group flex items-center gap-1.5 text-brand-text-secondary hover:text-brand-primary transition-colors"
                        >
                            <Globe className="w-4 h-4 transition-transform group-hover:rotate-180 duration-500" />
                            <span className="text-sm font-medium uppercase tracking-wider">{language === 'zh' ? 'EN' : '中'}</span>
                        </button>

                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('#contact');
                            }}
                            className="btn-primary text-sm shadow-soft hover:shadow-premium whitespace-nowrap"
                        >
                            {t.nav.cta}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-brand-text hover:text-brand-primary transition-colors"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" strokeWidth={1.5} />
                        ) : (
                            <Menu className="w-6 h-6" strokeWidth={1.5} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Soft Design) */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-premium border-b border-gray-100 transition-all duration-500 ease-in-out origin-top ${isMobileMenuOpen
                    ? 'opacity-100 scale-y-100'
                    : 'opacity-0 scale-y-0 pointer-events-none'
                    }`}
            >
                <nav className="flex flex-col py-6 px-4 gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(link.href);
                            }}
                            className="px-6 py-4 text-brand-text font-medium text-lg hover:bg-brand-bg hover:text-brand-primary rounded-2xl transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className="h-px bg-gray-100 my-4 mx-6"></div>

                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-3 px-6 py-4 text-brand-text-secondary font-medium hover:bg-brand-bg hover:text-brand-primary rounded-2xl transition-all duration-300"
                    >
                        <Globe className="w-5 h-5" />
                        <span>{language === 'zh' ? 'Switch to English' : '切换到中文'}</span>
                    </button>

                    <a
                        href="tel:+8613676582993"
                        className="flex items-center gap-3 px-6 py-4 text-brand-primary font-medium hover:bg-brand-primary/5 rounded-2xl transition-all duration-300"
                    >
                        <Phone className="w-5 h-5" />
                        +86 136 7658 2993
                    </a>

                    <div className="h-px bg-gray-100 my-2 mx-6"></div>

                    <a
                        href="/trend/"
                        className="flex items-center gap-3 px-6 py-4 text-brand-text font-medium hover:bg-brand-bg hover:text-brand-primary rounded-2xl transition-all duration-300"
                    >
                        <ArrowUpRight className="w-5 h-5" />
                        <span>{t.nav.switchSite}</span>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;

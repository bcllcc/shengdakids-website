import { useLanguage } from '../contexts/LanguageContext';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
    const { t, language } = useLanguage();

    const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* 品牌信息列 */}
                    <div className="lg:col-span-1">
                        <a href="#hero" onClick={handleScrollToTop} className="inline-block mb-6 transition-opacity hover:opacity-80">
                            <div className="w-64 h-16 md:w-80 md:h-20">
                                <img
                                    src="/images/shengda-logo.png"
                                    alt="Shengda Footwear"
                                    className="w-full h-full object-contain object-left"
                                />
                            </div>
                        </a>
                        <p className="text-brand-text-secondary font-medium leading-relaxed max-w-sm mb-6 text-sm">
                            {t.footer.desc}
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-bg rounded-full text-xs text-brand-text-secondary font-medium uppercase tracking-widest">
                            <span>EST. 2004</span>
                        </div>
                    </div>

                    {/* 快速链接 */}
                    <div>
                        <h4 className="font-sans text-lg text-brand-text mb-6 font-bold">{t.footer.navigation}</h4>
                        <ul className="space-y-4">
                            {['#hero', '#about', '#products', '#contact'].map((href, index) => (
                                <li key={index}>
                                    <a
                                        href={href}
                                        className="text-brand-text-secondary hover:text-brand-primary transition-colors text-sm font-medium tracking-wide"
                                    >
                                        {[t.nav.home, t.nav.about, t.nav.products, t.nav.contact][index]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 品牌矩阵 */}
                    <div>
                        <h4 className="font-sans text-lg text-brand-text mb-6 font-bold">{t.footer.brands}</h4>
                        <ul className="space-y-4">
                            <li>
                                <span className="text-brand-text-secondary text-sm font-medium tracking-wide">{language === 'zh' ? '神童菲菲 MAGIC FEIFEI' : 'MAGIC FEIFEI'}</span>
                            </li>
                            <li>
                                <span className="text-brand-text-secondary text-sm font-medium tracking-wide">{language === 'zh' ? '图图小黄鸭 TUTU DUCK' : 'TUTU DUCK'}</span>
                            </li>
                            <li>
                                <span className="text-brand-text-secondary text-sm font-medium tracking-wide">{language === 'zh' ? '咪咕兔 MIGU RABBIT' : 'MIGU RABBIT'}</span>
                            </li>
                        </ul>
                    </div>

                    {/* 联系信息简表 */}
                    <div>
                        <h4 className="font-sans text-lg text-brand-text mb-6 font-bold">{t.footer.contact}</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="tel:+8613676582993" className="text-brand-text-secondary hover:text-brand-primary transition-colors text-sm font-medium tracking-wide block">
                                    +86 136 7658 2993
                                </a>
                            </li>
                            <li>
                                <a href="mailto:wzshengdaxieye@163.com" className="text-brand-text-secondary hover:text-brand-primary transition-colors text-sm font-medium tracking-wide block">
                                    wzshengdaxieye@163.com
                                </a>
                            </li>
                            <li>
                                <span className="text-brand-text-secondary text-sm font-medium tracking-wide block">
                                    {language === 'zh' ? '浙江省温州市瓯北黎明路9号' : 'No. 9 Liming Road, Oubei, Wenzhou, Zhejiang, China'}
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* 底部版权栏 */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-brand-text-secondary/70">
                        {t.footer.copyright.replace('{year}', String(currentYear))}
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-sm text-brand-text-secondary/70 hover:text-brand-primary transition-colors">{t.footer.privacy}</a>
                        <a href="#" className="text-sm text-brand-text-secondary/70 hover:text-brand-primary transition-colors">{t.footer.terms}</a>
                        <a
                            href="#hero"
                            onClick={handleScrollToTop}
                            className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-text hover:bg-brand-primary hover:text-white transition-all duration-300 ml-4 shadow-sm"
                        >
                            <ArrowUp className="w-5 h-5" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Products = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('all');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.05, rootMargin: '0px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const categories = [
        { id: 'all', label: t.products.categories.all },
        { id: 'toddler', label: t.products.categories.toddler },
        { id: 'boys', label: t.products.categories.boys },
        { id: 'girls', label: t.products.categories.girls },
        { id: 'sports', label: t.products.categories.sports }
    ];

    const products = [
        {
            id: 1,
            name: t.products.items.cloudWalk,
            category: 'toddler',
            price: '¥299',
            image: '/images/product-real-1.png',
            tag: t.products.new,
            colors: ['bg-[#E8DCC4]', 'bg-[#8A9A86]']
        },
        {
            id: 2,
            name: t.products.items.urbanExplorer,
            category: 'boys',
            price: '¥359',
            image: '/images/product-real-2.png',
            tag: t.products.hot,
            colors: ['bg-[#2D3748]', 'bg-[#D37B65]']
        },
        {
            id: 3,
            name: t.products.items.princessBow,
            category: 'girls',
            price: '¥329',
            image: '/images/product-real-3.png',
            colors: ['bg-[#FDF4F6]', 'bg-[#E2E8F0]']
        },
        {
            id: 4,
            name: t.products.items.runningShoes,
            category: 'sports',
            price: '¥399',
            image: '/images/product-real-4.png',
            colors: ['bg-[#3182CE]', 'bg-[#ED8936]']
        },
        {
            id: 5,
            name: t.products.items.classicSchool,
            category: 'boys',
            price: '¥289',
            image: '/images/product-real-5.png',
            colors: ['bg-[#1A202C]', 'bg-[#F7FAFC]']
        },
        {
            id: 6,
            name: t.products.items.balletFlat,
            category: 'girls',
            price: '¥259',
            image: '/images/product-real-6.png',
            tag: t.products.limited,
            colors: ['bg-[#FEEBC8]', 'bg-[#E9D8FD]']
        }
    ];

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <section id="products" className="py-24 md:py-32 bg-[#FDFBF7] relative" ref={sectionRef}>
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header区 */}
                <div className={`flex flex-col md:flex-row justify-between items-end mb-16 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-95'}`}>
                    <div className="max-w-2xl">
                        <span className="text-brand-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">{t.products.subtitle}</span>
                        <h2 className="section-title mb-4">{t.products.title}</h2>
                        <p className="text-brand-text-secondary text-lg font-light whitespace-nowrap">
                            {t.products.desc}
                        </p>
                    </div>

                    <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-brand-primary font-medium hover:text-brand-primary/80 transition-colors group">
                        {t.products.viewAll}
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                {/* 分类筛选 (Elegant Tabs) */}
                <div
                    className={`flex overflow-x-auto whitespace-nowrap scrollbar-hide pb-4 gap-2 md:gap-4 mb-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
                    style={{ transitionDelay: '200ms' }}
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                                ? 'bg-brand-text text-white shadow-soft'
                                : 'bg-brand-bg text-brand-text-secondary hover:bg-gray-100'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* 商品网格 (Clean Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {filteredProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className={`group relative transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-32 scale-90'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Editoral product presentation container */}
                            <div className="relative aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-100 group-hover:bg-gray-200 transition-colors duration-500 mb-8 flex items-center justify-center p-8">
                                {/* Ultra large typography watermark behind the product */}
                                <div className="absolute -bottom-10 -right-6 text-[12rem] font-sans font-black text-white leading-none select-none tracking-tighter mix-blend-overlay">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    loading="lazy"
                                    className="w-full h-full object-contain relative z-10 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                                    // Note: Add `onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}` in real usage. For now keeping it simple.
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none'; // fallback if image doesn't exist
                                    }}
                                />

                                {/* 标签 */}
                                {product.tag && (
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-brand-text uppercase tracking-widest rounded-full shadow-sm">
                                            {product.tag}
                                        </span>
                                    </div>
                                )}

                                {/* No hover mask required, just let the shoe shine */}
                            </div>

                            <div className="px-2">
                                <p className="text-xs font-medium text-brand-text-secondary uppercase tracking-widest mb-2">{product.category}</p>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-sans text-xl text-brand-text font-bold leading-snug pr-4">{product.name}</h3>
                                    <p className="font-medium text-brand-primary">{product.price}</p>
                                </div>

                                {/* 颜色选择提示点 */}
                                <div className="flex gap-2">
                                    {product.colors.map((colorClass, i) => (
                                        <div key={i} className={`w-3.5 h-3.5 rounded-full ${colorClass} border border-gray-200 shadow-sm`}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-12 text-center md:hidden">
                    <a href="#contact" className="inline-flex items-center gap-2 text-brand-text font-medium border-b border-brand-text pb-1">
                        {t.products.viewAll} <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Products;

import { useEffect, useRef, useState } from 'react';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useProducts } from '../hooks/useProducts';

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const { t, language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', name: t.products.categories.all },
    { id: 'sports', name: t.products.categories.sports },
    { id: 'casual', name: t.products.categories.casual },
    { id: 'princess', name: t.products.categories.princess },
  ];

  // 硬编码数据作为 fallback（API 挂了照样显示）
  const fallbackProducts = [
    { id: 1, name: t.mockProducts.p1, category: 'sports', image: '/images/product-real-3.webp' },
    { id: 2, name: t.mockProducts.p2, category: 'casual', image: '/images/product-real-4.webp' },
    { id: 3, name: t.mockProducts.p3, category: 'princess', image: '/images/product-real-2.webp' },
    { id: 4, name: t.mockProducts.p4, category: 'sports', image: '/images/product-real-6.webp' },
    { id: 5, name: t.mockProducts.p5, category: 'casual', image: '/images/product-real-5.webp' },
    { id: 6, name: t.mockProducts.p6, category: 'princess', image: '/images/product-real-8.webp' },
    { id: 7, name: t.mockProducts.p7, category: 'sports', image: '/images/product-real-7.webp' },
    { id: 8, name: t.mockProducts.p8, category: 'casual', image: '/images/product-real-1.webp' },
  ];

  // 优先从 API 获取，失败自动降级到 fallback
  const products = useProducts(language, fallbackProducts);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const productsPerPage = 4;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const displayedProducts = filteredProducts.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(0);
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-20 md:py-28 bg-brand-bg-light"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区 */}
        <div
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="section-subtitle">{t.products.subtitle}</span>
          <h2 className="section-title">{t.products.title}</h2>
          <p className="section-desc mt-4">
            {t.products.desc}
          </p>
        </div>

        {/* 分类标签 */}
        <div
          className={`flex flex-wrap justify-center gap-3 md:gap-4 mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-6 py-2.5 rounded-xl border-2 border-black text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeCategory === cat.id
                ? 'bg-brand-primary text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] -translate-y-1'
                : 'bg-white text-black hover:bg-brand-primary/20 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* 产品网格 (Asymmetric Brutalism) */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {displayedProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group card flex flex-col ${index % 2 === 1 ? 'lg:mt-12' : ''}`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* 图片 */}
              <div className="relative aspect-square overflow-hidden bg-white border-b-2 border-black group-hover:bg-brand-primary transition-colors duration-500">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3"
                />
                {/* 潮酷 Hover 状态 */}
                <div className="absolute inset-x-0 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center z-10">
                  <button className="px-6 py-3 bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] font-black text-black uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-brand-primary">
                    <span className="flex items-center gap-2"><Eye className="w-5 h-5" /> {t.mockProducts.quickView}</span>
                  </button>
                </div>
              </div>

              {/* 内容 */}
              <div className="p-5 flex flex-col justify-between flex-grow bg-white">
                <div>
                  <div className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-text bg-brand-primary inline-block px-3 py-1 border-2 border-black mb-3 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    {t.products.categories[product.category as keyof typeof t.products.categories] || product.category}
                  </div>
                  <h3 className="font-display font-black text-lg md:text-xl text-black mb-1 group-hover:text-brand-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </div>
                <div className="flex items-center justify-end mt-6">
                  <button className="w-12 h-12 rounded-xl border-2 border-black flex items-center justify-center bg-white hover:bg-brand-primary hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
                    <span className="text-3xl font-black leading-none -mt-1">+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 分页 */}
        {totalPages > 1 && (
          <div
            className={`flex items-center justify-center gap-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center disabled:opacity-40 hover:bg-brand-primary hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPage === i
                    ? 'bg-brand-primary w-6'
                    : 'bg-brand-border hover:bg-brand-primary/50'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center disabled:opacity-40 hover:bg-brand-primary hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="text-brand-text-muted text-sm mb-4">{t.products.cta}</p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary"
          >
            {t.products.ctaBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;

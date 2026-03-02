import { useState, useEffect } from 'react';

interface ApiProduct {
  id: number;
  name_zh: string;
  name_en: string;
  category: string;
  image_url: string;
  tag: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
}

function mapProduct(p: ApiProduct, lang: string): Product {
  return {
    id: p.id,
    name: lang === 'zh' ? p.name_zh : (p.name_en || p.name_zh),
    category: p.category,
    image: p.image_url,
  };
}

export function useProducts(lang: string, fallback: Product[]): Product[] {
  const [products, setProducts] = useState<Product[]>(fallback);

  useEffect(() => {
    fetch('/api/products?site=trend')
      .then(res => res.json())
      .then(data => {
        if (data.products && data.products.length > 0) {
          setProducts(data.products.map((p: ApiProduct) => mapProduct(p, lang)));
        }
      })
      .catch(() => {
        // API 失败，静默使用 fallback
      });
  }, [lang]);

  return products;
}

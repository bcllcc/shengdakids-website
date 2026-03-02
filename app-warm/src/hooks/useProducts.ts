import { useState, useEffect } from 'react';

interface ApiProduct {
  id: number;
  name_zh: string;
  name_en: string;
  category: string;
  image_url: string;
  tag: string;
  colors: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  tag?: string;
  colors: string[];
}

const TAG_MAP_ZH: Record<string, string> = {
  new: '新品上市',
  hot: '热销款',
  limited: '限量款',
};

const TAG_MAP_EN: Record<string, string> = {
  new: 'New Arrival',
  hot: 'Best Seller',
  limited: 'Limited Edition',
};

function mapProduct(p: ApiProduct, lang: string): Product {
  const tagMap = lang === 'zh' ? TAG_MAP_ZH : TAG_MAP_EN;
  let colors: string[] = [];
  try { colors = JSON.parse(p.colors); } catch {}

  return {
    id: p.id,
    name: lang === 'zh' ? p.name_zh : (p.name_en || p.name_zh),
    category: p.category,
    image: p.image_url,
    tag: p.tag ? tagMap[p.tag] : undefined,
    colors,
  };
}

export function useProducts(lang: string, fallback: Product[]): Product[] {
  const [products, setProducts] = useState<Product[]>(fallback);

  useEffect(() => {
    fetch('/api/products?site=main')
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

const API_BASE = '';

export async function login(password: string): Promise<boolean> {
  const res = await fetch(`${API_BASE}/api/auth`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
    credentials: 'include',
  });
  const data = await res.json();
  return data.ok === true;
}

export async function checkAuth(): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/api/admin/products?site=all`, {
      credentials: 'include',
    });
    return res.ok;
  } catch {
    return false;
  }
}

export interface Product {
  id: number;
  name_zh: string;
  name_en: string;
  category: string;
  site: string;
  image_url: string;
  tag: string;
  colors: string;
  sort_order: number;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export async function getProducts(site?: string): Promise<Product[]> {
  const params = site ? `?site=${site}` : '?site=all';
  const res = await fetch(`${API_BASE}/api/admin/products${params}`, {
    credentials: 'include',
  });
  const data = await res.json();
  return data.products || [];
}

export async function toggleProduct(id: number, is_active: boolean): Promise<boolean> {
  const res = await fetch(`${API_BASE}/api/admin/toggle`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, is_active }),
    credentials: 'include',
  });
  const data = await res.json();
  return data.ok === true;
}

export async function createProduct(product: {
  name_zh: string;
  name_en?: string;
  category: string;
  site: string;
  image_url: string;
  tag?: string;
}): Promise<{ ok: boolean; id?: number }> {
  const res = await fetch(`${API_BASE}/api/admin/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
    credentials: 'include',
  });
  return res.json();
}

export async function updateProduct(id: number, updates: Record<string, unknown>): Promise<boolean> {
  const res = await fetch(`${API_BASE}/api/admin/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
    credentials: 'include',
  });
  const data = await res.json();
  return data.ok === true;
}

export async function deleteProduct(id: number): Promise<boolean> {
  const res = await fetch(`${API_BASE}/api/admin/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  const data = await res.json();
  return data.ok === true;
}

export async function uploadImage(file: Blob): Promise<string | null> {
  const formData = new FormData();
  formData.append('image', file, 'product.webp');
  const res = await fetch(`${API_BASE}/api/upload`, {
    method: 'POST',
    body: formData,
    credentials: 'include',
  });
  const data = await res.json();
  return data.url || null;
}

// 客户端图片压缩：缩到 800px 宽 + 转 WebP
export function compressImage(file: File, maxWidth = 800, quality = 0.8): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ratio = Math.min(maxWidth / img.width, 1);
      canvas.width = img.width * ratio;
      canvas.height = img.height * ratio;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(
        (blob) => blob ? resolve(blob) : reject(new Error('压缩失败')),
        'image/webp',
        quality
      );
    };
    img.onerror = () => reject(new Error('图片加载失败'));
    img.src = URL.createObjectURL(file);
  });
}

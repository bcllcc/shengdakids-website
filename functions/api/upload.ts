// POST /api/upload — 上传图片到 R2
interface Env {
  IMAGES: R2Bucket;
  AUTH_SECRET: string;
}

async function hmacVerify(payload: string, sig: string, secret: string): Promise<boolean> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']
  );
  const sigBytes = Uint8Array.from(atob(sig), c => c.charCodeAt(0));
  return crypto.subtle.verify('HMAC', key, sigBytes, encoder.encode(payload));
}

function getCookie(cookieHeader: string | null, name: string): string | null {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? match[1] : null;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  // 手动验证 auth（upload 不在 admin/ 路径下）
  const cookieHeader = context.request.headers.get('Cookie');
  const token = getCookie(cookieHeader, 'admin_token');

  if (!token) {
    return new Response(JSON.stringify({ error: '未登录' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const [payload, sig] = token.split('.');
  if (!payload || !sig) {
    return new Response(JSON.stringify({ error: '无效凭证' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const valid = await hmacVerify(payload, sig, context.env.AUTH_SECRET);
  if (!valid || Date.now() > parseInt(payload)) {
    return new Response(JSON.stringify({ error: '登录已过期' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 处理文件上传
  const formData = await context.request.formData();
  const file = formData.get('image') as File | null;

  if (!file) {
    return new Response(JSON.stringify({ error: '未选择图片' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 生成唯一文件名
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  const ext = file.type === 'image/webp' ? 'webp' : 'png';
  const key = `products/${timestamp}-${random}.${ext}`;

  // 上传到 R2
  await context.env.IMAGES.put(key, file.stream(), {
    httpMetadata: {
      contentType: file.type || 'image/webp',
      cacheControl: 'public, max-age=31536000',
    },
  });

  // 返回公共 URL（需在 Cloudflare R2 设置自定义域名或公共访问）
  const url = `/${key}`;

  return new Response(JSON.stringify({ ok: true, url }), {
    headers: { 'Content-Type': 'application/json' },
  });
};

// 鉴权中间件：保护 /api/admin/* 路由
interface Env {
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

export const onRequest: PagesFunction<Env> = async (context) => {
  // OPTIONS 请求直接放行（CORS 预检）
  if (context.request.method === 'OPTIONS') {
    return new Response(null, { status: 204 });
  }

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

  // 验证签名
  const valid = await hmacVerify(payload, sig, context.env.AUTH_SECRET);
  if (!valid) {
    return new Response(JSON.stringify({ error: '无效凭证' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 检查过期
  const exp = parseInt(payload);
  if (Date.now() > exp) {
    return new Response(JSON.stringify({ error: '登录已过期' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return context.next();
};

// POST /api/auth — 登录验证，设置 cookie
interface Env {
  ADMIN_PASSWORD: string;
  AUTH_SECRET: string;
}

async function hmacSign(message: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(message));
  return btoa(String.fromCharCode(...new Uint8Array(sig)));
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { password } = await context.request.json<{ password: string }>();

  if (password !== context.env.ADMIN_PASSWORD) {
    return new Response(JSON.stringify({ ok: false, error: '密码错误' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 生成 30 天有效的 token
  const exp = Date.now() + 30 * 24 * 60 * 60 * 1000;
  const payload = `${exp}`;
  const sig = await hmacSign(payload, context.env.AUTH_SECRET);
  const token = `${payload}.${sig}`;

  return new Response(JSON.stringify({ ok: true }), {
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': `admin_token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${30 * 24 * 60 * 60}`,
    },
  });
};

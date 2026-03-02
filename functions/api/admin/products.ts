// GET /api/admin/products — 获取所有商品（含下架的）
// POST /api/admin/products — 新增商品
interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  const site = url.searchParams.get('site');

  let query = 'SELECT * FROM products';
  const params: string[] = [];

  if (site && site !== 'all') {
    query += ` WHERE (site = ?1 OR site = 'both')`;
    params.push(site);
  }

  query += ' ORDER BY sort_order ASC, created_at DESC';

  const stmt = params.length > 0
    ? context.env.DB.prepare(query).bind(...params)
    : context.env.DB.prepare(query);

  const { results } = await stmt.all();

  return new Response(JSON.stringify({ products: results }), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const body = await context.request.json<{
    name_zh: string;
    name_en?: string;
    category: string;
    site: string;
    image_url: string;
    tag?: string;
    colors?: string[];
  }>();

  if (!body.name_zh || !body.category || !body.image_url) {
    return new Response(JSON.stringify({ ok: false, error: '缺少必填字段' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 获取当前最大 sort_order
  const maxResult = await context.env.DB.prepare(
    'SELECT MAX(sort_order) as max_order FROM products'
  ).first<{ max_order: number | null }>();
  const nextOrder = (maxResult?.max_order ?? 0) + 1;

  const result = await context.env.DB.prepare(
    `INSERT INTO products (name_zh, name_en, category, site, image_url, tag, colors, sort_order)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)`
  ).bind(
    body.name_zh,
    body.name_en || '',
    body.category,
    body.site || 'main',
    body.image_url,
    body.tag || '',
    JSON.stringify(body.colors || []),
    nextOrder
  ).run();

  return new Response(JSON.stringify({ ok: true, id: result.meta.last_row_id }), {
    headers: { 'Content-Type': 'application/json' },
  });
};

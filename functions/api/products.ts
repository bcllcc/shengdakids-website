// GET /api/products?site=main|trend — 公开接口，返回上架商品
interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  const site = url.searchParams.get('site') || 'main';

  const { results } = await context.env.DB.prepare(
    `SELECT * FROM products
     WHERE is_active = 1 AND (site = ?1 OR site = 'both')
     ORDER BY sort_order ASC`
  ).bind(site).all();

  return new Response(JSON.stringify({ products: results }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=60',
      'Access-Control-Allow-Origin': '*',
    },
  });
};

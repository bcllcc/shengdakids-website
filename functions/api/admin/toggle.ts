// POST /api/admin/toggle — 上架/下架切换
interface Env {
  DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { id, is_active } = await context.request.json<{
    id: number;
    is_active: boolean;
  }>();

  await context.env.DB.prepare(
    `UPDATE products SET is_active = ?1, updated_at = datetime('now') WHERE id = ?2`
  ).bind(is_active ? 1 : 0, id).run();

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
};

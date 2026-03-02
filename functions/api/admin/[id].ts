// PUT /api/admin/:id — 更新商品
// DELETE /api/admin/:id — 删除商品
interface Env {
  DB: D1Database;
  IMAGES: R2Bucket;
}

export const onRequestPut: PagesFunction<Env> = async (context) => {
  const id = context.params.id;
  const body = await context.request.json<Record<string, unknown>>();

  // 构建动态 UPDATE
  const fields: string[] = [];
  const values: unknown[] = [];
  let paramIndex = 1;

  const allowedFields = ['name_zh', 'name_en', 'category', 'site', 'image_url', 'tag', 'colors', 'sort_order', 'is_active'];

  for (const key of allowedFields) {
    if (key in body) {
      fields.push(`${key} = ?${paramIndex}`);
      values.push(key === 'colors' ? JSON.stringify(body[key]) : body[key]);
      paramIndex++;
    }
  }

  if (fields.length === 0) {
    return new Response(JSON.stringify({ ok: false, error: '无更新字段' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  fields.push(`updated_at = datetime('now')`);
  values.push(id);

  await context.env.DB.prepare(
    `UPDATE products SET ${fields.join(', ')} WHERE id = ?${paramIndex}`
  ).bind(...values).run();

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const onRequestDelete: PagesFunction<Env> = async (context) => {
  const id = context.params.id;

  // 获取商品信息，用于清理 R2 图片
  const product = await context.env.DB.prepare(
    'SELECT image_url FROM products WHERE id = ?1'
  ).bind(id).first<{ image_url: string }>();

  // 删除 R2 图片（如果是 R2 URL）
  if (product?.image_url && product.image_url.includes('products/')) {
    const key = product.image_url.split('/').pop();
    if (key) {
      try { await context.env.IMAGES.delete(`products/${key}`); } catch {}
    }
  }

  await context.env.DB.prepare('DELETE FROM products WHERE id = ?1').bind(id).run();

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
};

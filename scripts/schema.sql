-- 商品表
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name_zh TEXT NOT NULL,
  name_en TEXT DEFAULT '',
  category TEXT NOT NULL,
  site TEXT NOT NULL DEFAULT 'main',
  image_url TEXT NOT NULL,
  tag TEXT DEFAULT '',
  colors TEXT DEFAULT '[]',
  sort_order INTEGER DEFAULT 0,
  is_active INTEGER DEFAULT 1,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_products_active ON products(is_active, site);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);

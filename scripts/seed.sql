-- 主站商品 (app-warm)
INSERT INTO products (name_zh, name_en, category, site, image_url, tag, colors, sort_order, is_active)
VALUES
  ('时尚潮流阿甘系列', 'Trendy Forrest Gump Series', 'toddler', 'main', '/images/product-real-1.webp', 'new', '["bg-[#E8DCC4]","bg-[#8A9A86]"]', 1, 1),
  ('梦幻甜美公主鞋', 'Sweet Princess Shoes', 'boys', 'main', '/images/product-real-2.webp', 'hot', '["bg-[#2D3748]","bg-[#D37B65]"]', 2, 1),
  ('潮牌活力运动鞋', 'Active Sports Sneakers', 'girls', 'main', '/images/product-real-3.webp', '', '["bg-[#FDF4F6]","bg-[#E2E8F0]"]', 3, 1),
  ('潮流拼色板鞋', 'Color Block Skate Shoes', 'sports', 'main', '/images/product-real-4.webp', '', '["bg-[#3182CE]","bg-[#ED8936]"]', 4, 1),
  ('时尚潮流德训鞋', 'Trendy German Trainer', 'boys', 'main', '/images/product-real-5.webp', '', '["bg-[#1A202C]","bg-[#F7FAFC]"]', 5, 1),
  ('经典学院小白鞋', 'Classic White Sneakers', 'girls', 'main', '/images/product-real-6.webp', 'limited', '["bg-[#FEEBC8]","bg-[#E9D8FD]"]', 6, 1);

-- 潮流站商品 (app)
INSERT INTO products (name_zh, name_en, category, site, image_url, tag, colors, sort_order, is_active)
VALUES
  ('时尚运动鞋', 'Fashion Sneakers', 'sports', 'trend', '/images/product-real-3.webp', '', '[]', 1, 1),
  ('休闲板鞋', 'Casual Skate Shoes', 'casual', 'trend', '/images/product-real-4.webp', '', '[]', 2, 1),
  ('公主水晶鞋', 'Princess Crystal Shoes', 'princess', 'trend', '/images/product-real-2.webp', '', '[]', 3, 1),
  ('透气跑步鞋', 'Breathable Running Shoes', 'sports', 'trend', '/images/product-real-6.webp', '', '[]', 4, 1),
  ('百搭小白鞋', 'Versatile White Shoes', 'casual', 'trend', '/images/product-real-5.webp', '', '[]', 5, 1),
  ('闪亮公主鞋', 'Shiny Princess Shoes', 'princess', 'trend', '/images/product-real-8.webp', '', '[]', 6, 1),
  ('舒适运动鞋', 'Comfortable Sneakers', 'sports', 'trend', '/images/product-real-7.webp', '', '[]', 7, 1),
  ('时尚休闲鞋', 'Fashion Casual Shoes', 'casual', 'trend', '/images/product-real-1.webp', '', '[]', 8, 1);

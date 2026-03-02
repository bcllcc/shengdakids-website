#!/bin/bash
# 统一构建脚本：将三个站点合并到 dist/ 目录
# app-warm → / (主站 shengdakids.com)
# app      → /trend/ (潮流站 shengdakids.com/trend)
# admin    → /admin/ (后台管理 shengdakids.com/admin)

set -e

DIST_DIR="./dist"

echo "🧹 清理旧的构建输出..."
rm -rf "$DIST_DIR"
mkdir -p "$DIST_DIR"

# 1. 构建主站 (app-warm → 根目录)
echo "🏗️  构建主站 (app-warm)..."
cd app-warm
npm install
npm run build
cd ..
cp -r app-warm/dist/* "$DIST_DIR/"

# 2. 构建潮流站 (app → /trend/ 子目录)
echo "🏗️  构建潮流站 (app)..."
cd app
npm install
npm run build
cd ..
mkdir -p "$DIST_DIR/trend"
cp -r app/dist/* "$DIST_DIR/trend/"

# 3. 构建后台管理 (admin → /admin/ 子目录)
echo "🏗️  构建后台管理 (admin)..."
cd admin
npm install
npm run build
cd ..
mkdir -p "$DIST_DIR/admin"
cp -r admin/dist/* "$DIST_DIR/admin/"

# 4. 添加 CNAME
echo "shengdakids.com" > "$DIST_DIR/CNAME"

# 5. 添加 .nojekyll
touch "$DIST_DIR/.nojekyll"

# 6. 为 SPA 添加 404.html
cp "$DIST_DIR/index.html" "$DIST_DIR/404.html"
cp "$DIST_DIR/trend/index.html" "$DIST_DIR/trend/404.html"
cp "$DIST_DIR/admin/index.html" "$DIST_DIR/admin/404.html"

echo ""
echo "✅ 构建完成！输出目录: $DIST_DIR"
echo "   主站:     $DIST_DIR/index.html       → shengdakids.com"
echo "   潮流站:   $DIST_DIR/trend/index.html  → shengdakids.com/trend"
echo "   后台管理: $DIST_DIR/admin/index.html   → shengdakids.com/admin"
echo ""
echo "📁 目录结构:"
find "$DIST_DIR" -maxdepth 2 -type f | head -30

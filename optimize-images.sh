#!/bin/bash
# 批量压缩图片脚本
# JPG: 质量80, 最大宽度1920px
# PNG: 压缩质量, 最大宽度1920px

set -e

optimize_dir() {
  local dir="$1"
  echo "📁 Processing: $dir"

  # 备份原始图片
  local backup="${dir}_backup"
  if [ ! -d "$backup" ]; then
    cp -r "$dir" "$backup"
    echo "   ✅ Backup created: $backup"
  fi

  # 压缩 JPG
  for f in "$dir"/*.jpg "$dir"/*.jpeg "$dir"/*.JPG; do
    [ -f "$f" ] || continue
    local size_before=$(stat -c%s "$f" 2>/dev/null || stat -f%z "$f" 2>/dev/null)
    sharp -i "$f" -o "$f" resize 1920 --withoutEnlargement --fit inside -- --quality 75 2>/dev/null || true
    local size_after=$(stat -c%s "$f" 2>/dev/null || stat -f%z "$f" 2>/dev/null)
    local saved=$(( (size_before - size_after) / 1024 ))
    if [ "$saved" -gt 0 ]; then
      echo "   JPG: $(basename "$f") saved ${saved}KB"
    fi
  done

  # 压缩 PNG
  for f in "$dir"/*.png "$dir"/*.PNG; do
    [ -f "$f" ] || continue
    local size_before=$(stat -c%s "$f" 2>/dev/null || stat -f%z "$f" 2>/dev/null)
    sharp -i "$f" -o "$f" resize 1920 --withoutEnlargement --fit inside -- png --compressionLevel 9 --quality 80 2>/dev/null || true
    local size_after=$(stat -c%s "$f" 2>/dev/null || stat -f%z "$f" 2>/dev/null)
    local saved=$(( (size_before - size_after) / 1024 ))
    if [ "$saved" -gt 0 ]; then
      echo "   PNG: $(basename "$f") saved ${saved}KB"
    fi
  done
}

optimize_dir "app-warm/public/images"
optimize_dir "app/public/images"

echo ""
echo "=== 压缩后大小 ==="
du -sh app-warm/public/images app/public/images

import sharp from 'sharp';
import { readdirSync, statSync, renameSync, unlinkSync } from 'fs';
import { join, extname } from 'path';

const dirs = [
  'app-warm/public/images',
  'app/public/images',
];

function getSize(file) {
  return statSync(file).size;
}

function formatSize(bytes) {
  if (bytes > 1024 * 1024) return (bytes / 1024 / 1024).toFixed(1) + 'MB';
  return (bytes / 1024).toFixed(0) + 'KB';
}

async function optimizeImage(filePath, ext) {
  const tmpPath = filePath + '.optimized' + ext;

  let pipeline = sharp(filePath).resize(1920, null, {
    withoutEnlargement: true,
    fit: 'inside',
  });

  if (ext === '.png') {
    pipeline = pipeline.png({ compressionLevel: 9, quality: 80 });
  } else {
    pipeline = pipeline.jpeg({ quality: 75, mozjpeg: true });
  }

  await pipeline.toFile(tmpPath);
  return tmpPath;
}

async function main() {
  for (const dir of dirs) {
    console.log(`\n📁 Optimizing: ${dir}`);

    let files;
    try {
      files = readdirSync(dir);
    } catch {
      console.log(`  ⚠️  Directory not found, skipping.`);
      continue;
    }

    let totalSaved = 0;

    for (const file of files) {
      const filePath = join(dir, file);
      const ext = extname(file).toLowerCase();
      if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

      // Skip already tiny files
      const sizeBefore = getSize(filePath);
      if (sizeBefore < 50 * 1024) {
        console.log(`  ⏭️  ${file}: ${formatSize(sizeBefore)} (already small)`);
        continue;
      }

      try {
        const tmpPath = await optimizeImage(filePath, ext);
        const sizeAfter = getSize(tmpPath);

        if (sizeAfter < sizeBefore) {
          unlinkSync(filePath);
          renameSync(tmpPath, filePath);
          const saved = sizeBefore - sizeAfter;
          totalSaved += saved;
          console.log(`  ✅ ${file}: ${formatSize(sizeBefore)} → ${formatSize(sizeAfter)} (saved ${formatSize(saved)})`);
        } else {
          unlinkSync(tmpPath);
          console.log(`  ⏭️  ${file}: already optimal (${formatSize(sizeBefore)})`);
        }
      } catch (e) {
        try { unlinkSync(filePath + '.optimized' + ext); } catch {}
        console.log(`  ⚠️  ${file}: skipped (${e.message?.slice(0, 80)})`);
      }
    }

    console.log(`  📊 Total saved: ${formatSize(totalSaved)}`);
  }
}

main().catch(console.error);

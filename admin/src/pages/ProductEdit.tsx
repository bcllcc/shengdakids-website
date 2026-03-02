import { useState, useEffect, useRef } from 'react';
import {
  createProduct,
  updateProduct,
  getProducts,
  uploadImage,
  compressImage,
  type Product,
} from '../api';

interface Props {
  productId?: number;
  onBack: () => void;
  onSaved: () => void;
}

const CATEGORIES = [
  { id: 'toddler', label: '幼童' },
  { id: 'boys', label: '男童' },
  { id: 'girls', label: '女童' },
  { id: 'sports', label: '运动' },
  { id: 'casual', label: '休闲' },
  { id: 'princess', label: '公主' },
];

const SITES = [
  { id: 'main', label: '主站' },
  { id: 'trend', label: '潮流站' },
  { id: 'both', label: '两个都显示' },
];

const TAGS = [
  { id: '', label: '无标签' },
  { id: 'new', label: '新品' },
  { id: 'hot', label: '热销' },
  { id: 'limited', label: '限量' },
];

export default function ProductEdit({ productId, onBack, onSaved }: Props) {
  const [nameZh, setNameZh] = useState('');
  const [category, setCategory] = useState('sports');
  const [site, setSite] = useState('main');
  const [tag, setTag] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isEdit = !!productId;

  // 编辑模式：加载现有数据
  useEffect(() => {
    if (!productId) return;
    getProducts('all').then(products => {
      const p = products.find(x => x.id === productId);
      if (p) {
        setNameZh(p.name_zh);
        setCategory(p.category);
        setSite(p.site);
        setTag(p.tag || '');
        setImageUrl(p.image_url);
        setImagePreview(p.image_url);
      }
    });
  }, [productId]);

  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 立即显示预览
    setImagePreview(URL.createObjectURL(file));
    setUploading(true);
    setError('');

    try {
      // 压缩图片
      const compressed = await compressImage(file);
      // 上传到 R2
      const url = await uploadImage(compressed);
      if (url) {
        setImageUrl(url);
      } else {
        setError('图片上传失败，请重试');
        setImagePreview('');
      }
    } catch {
      setError('图片处理失败，请换一张试试');
      setImagePreview('');
    }
    setUploading(false);
  };

  const handleSave = async () => {
    if (!nameZh.trim()) { setError('请填写产品名称'); return; }
    if (!imageUrl) { setError('请上传一张产品图片'); return; }

    setSaving(true);
    setError('');

    try {
      if (isEdit) {
        await updateProduct(productId!, {
          name_zh: nameZh.trim(),
          category,
          site,
          image_url: imageUrl,
          tag,
        });
      } else {
        await createProduct({
          name_zh: nameZh.trim(),
          category,
          site,
          image_url: imageUrl,
          tag,
        });
      }
      onSaved();
    } catch {
      setError('保存失败，请重试');
    }
    setSaving(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center gap-3 sticky top-0 z-50">
        <button onClick={onBack} className="text-2xl text-gray-400 active:text-gray-600 p-1">←</button>
        <h1 className="text-lg font-bold">{isEdit ? '编辑商品' : '上架新品'}</h1>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* 图片上传 */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">产品图片</label>
          <div
            onClick={() => fileInputRef.current?.click()}
            className="w-full aspect-square max-w-[280px] mx-auto rounded-2xl border-2 border-dashed border-gray-300 bg-white flex flex-col items-center justify-center overflow-hidden active:border-primary transition-colors cursor-pointer"
          >
            {imagePreview ? (
              <div className="relative w-full h-full">
                <img src={imagePreview} alt="预览" className="w-full h-full object-cover" />
                {uploading && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-white font-bold">上传中...</div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <div className="text-5xl text-gray-300 mb-2">📷</div>
                <div className="text-gray-400 text-sm">点这里选择图片</div>
                <div className="text-gray-300 text-xs mt-1">拍照或从相册选</div>
              </>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            className="hidden"
          />
        </div>

        {/* 产品名称 */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">产品名称</label>
          <input
            type="text"
            value={nameZh}
            onChange={e => setNameZh(e.target.value)}
            placeholder="例如：时尚运动鞋"
            className="w-full py-3 px-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none"
          />
        </div>

        {/* 分类选择 */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">产品分类</label>
          <div className="grid grid-cols-3 gap-2">
            {CATEGORIES.map(c => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`py-3 rounded-xl text-sm font-medium border-2 transition-colors ${
                  category === c.id
                    ? 'border-primary bg-primary-light text-primary'
                    : 'border-gray-200 bg-white text-gray-600 active:bg-gray-50'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* 站点选择 */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">显示在哪个站</label>
          <div className="grid grid-cols-3 gap-2">
            {SITES.map(s => (
              <button
                key={s.id}
                onClick={() => setSite(s.id)}
                className={`py-3 rounded-xl text-sm font-medium border-2 transition-colors ${
                  site === s.id
                    ? 'border-primary bg-primary-light text-primary'
                    : 'border-gray-200 bg-white text-gray-600 active:bg-gray-50'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* 标签选择 */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">标签（可选）</label>
          <div className="grid grid-cols-4 gap-2">
            {TAGS.map(t => (
              <button
                key={t.id}
                onClick={() => setTag(t.id)}
                className={`py-3 rounded-xl text-sm font-medium border-2 transition-colors ${
                  tag === t.id
                    ? 'border-primary bg-primary-light text-primary'
                    : 'border-gray-200 bg-white text-gray-600 active:bg-gray-50'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* 错误提示 */}
        {error && (
          <div className="bg-red-50 text-red-500 px-4 py-3 rounded-xl text-sm text-center">
            {error}
          </div>
        )}

        {/* 保存按钮 */}
        <button
          onClick={handleSave}
          disabled={saving || uploading}
          className="w-full py-4 bg-primary text-white text-xl font-bold rounded-2xl disabled:opacity-50 active:scale-[0.98] transition-transform"
        >
          {saving ? '保存中...' : isEdit ? '保存修改' : '发布上架'}
        </button>
      </div>
    </div>
  );
}

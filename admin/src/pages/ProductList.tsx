import { useState, useEffect, useCallback } from 'react';
import { getProducts, toggleProduct, deleteProduct, type Product } from '../api';

interface Props {
  onAdd: () => void;
  onEdit: (id: number) => void;
  onLogout: () => void;
}

const SITE_TABS = [
  { id: 'all', label: '全部' },
  { id: 'main', label: '主站' },
  { id: 'trend', label: '潮流站' },
];

const CATEGORY_NAMES: Record<string, string> = {
  toddler: '幼童',
  boys: '男童',
  girls: '女童',
  sports: '运动',
  casual: '休闲',
  princess: '公主',
};

export default function ProductList({ onAdd, onEdit, onLogout }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeSite, setActiveSite] = useState('all');
  const [loading, setLoading] = useState(true);
  const [toastMsg, setToastMsg] = useState('');

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 2000);
  };

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const list = await getProducts(activeSite);
    setProducts(list);
    setLoading(false);
  }, [activeSite]);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  const handleToggle = async (product: Product) => {
    const newState = product.is_active === 1 ? false : true;
    const ok = await toggleProduct(product.id, newState);
    if (ok) {
      setProducts(prev =>
        prev.map(p => p.id === product.id ? { ...p, is_active: newState ? 1 : 0 } : p)
      );
      showToast(newState ? '已上架 ✓' : '已下架');
    }
  };

  const handleDelete = async (product: Product) => {
    const name = product.name_zh;
    if (!confirm(`确定要删除「${name}」吗？\n删除后不可恢复！`)) return;
    const ok = await deleteProduct(product.id);
    if (ok) {
      setProducts(prev => prev.filter(p => p.id !== product.id));
      showToast('已删除');
    }
  };

  const activeCount = products.filter(p => p.is_active === 1).length;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-primary text-white px-4 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">商品管理</h1>
          <button onClick={onLogout} className="text-sm opacity-80 active:opacity-60">退出</button>
        </div>
        <div className="text-sm opacity-80 mt-1">
          共 {products.length} 件商品，{activeCount} 件上架中
        </div>
      </div>

      {/* Site Tabs */}
      <div className="flex gap-2 px-4 py-3 bg-white border-b sticky top-[72px] z-40">
        {SITE_TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveSite(tab.id)}
            className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
              activeSite === tab.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 active:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="px-4 py-3 space-y-3">
        {loading ? (
          <div className="text-center text-gray-400 py-12">加载中...</div>
        ) : products.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            <div className="text-4xl mb-2">📦</div>
            还没有商品，点下面的按钮上新吧
          </div>
        ) : (
          products.map(product => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl border overflow-hidden transition-opacity ${
                product.is_active === 0 ? 'opacity-50' : ''
              }`}
            >
              <div className="flex items-center p-3 gap-3">
                {/* 缩略图 */}
                <div
                  className="w-20 h-20 rounded-xl bg-gray-100 flex-shrink-0 overflow-hidden cursor-pointer active:scale-95 transition-transform"
                  onClick={() => onEdit(product.id)}
                >
                  <img
                    src={product.image_url}
                    alt={product.name_zh}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* 信息 */}
                <div className="flex-1 min-w-0" onClick={() => onEdit(product.id)}>
                  <div className="font-bold text-gray-800 truncate">{product.name_zh}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">
                      {CATEGORY_NAMES[product.category] || product.category}
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-500 rounded-full">
                      {product.site === 'main' ? '主站' : product.site === 'trend' ? '潮流站' : '双站'}
                    </span>
                    {product.tag && (
                      <span className="text-xs px-2 py-0.5 bg-orange-50 text-orange-500 rounded-full">
                        {product.tag === 'new' ? '新品' : product.tag === 'hot' ? '热销' : '限量'}
                      </span>
                    )}
                  </div>
                </div>

                {/* 上架/下架开关 */}
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleToggle(product); }}
                    className={`w-14 h-8 rounded-full relative transition-colors ${
                      product.is_active === 1 ? 'bg-success' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform shadow ${
                      product.is_active === 1 ? 'translate-x-7' : 'translate-x-1'
                    }`} />
                  </button>
                  <span className={`text-xs ${product.is_active === 1 ? 'text-success' : 'text-gray-400'}`}>
                    {product.is_active === 1 ? '上架' : '下架'}
                  </span>
                </div>
              </div>

              {/* 删除按钮 */}
              <div className="border-t px-3 py-2 flex justify-end">
                <button
                  onClick={() => handleDelete(product)}
                  className="text-xs text-red-400 active:text-red-600 px-3 py-1"
                >
                  删除
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 浮动添加按钮 */}
      <button
        onClick={onAdd}
        className="fixed bottom-6 right-6 w-16 h-16 bg-primary text-white rounded-full shadow-lg text-3xl flex items-center justify-center active:scale-90 transition-transform z-50"
      >
        +
      </button>

      {/* Toast */}
      {toastMsg && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full text-sm font-medium z-[100] animate-bounce">
          {toastMsg}
        </div>
      )}
    </div>
  );
}

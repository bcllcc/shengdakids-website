import { useState } from 'react';
import { login } from '../api';

interface Props {
  onSuccess: () => void;
}

export default function Login({ onSuccess }: Props) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;
    setLoading(true);
    setError('');
    try {
      const ok = await login(password);
      if (ok) {
        onSuccess();
      } else {
        setError('密码不对，再试一下');
      }
    } catch {
      setError('网络出错了，检查一下网络');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">🔐</div>
          <h1 className="text-2xl font-bold text-gray-800">盛达后台管理</h1>
          <p className="text-gray-500 mt-2 text-sm">输入密码进入</p>
        </div>

        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="请输入管理密码"
          className="w-full text-center text-xl py-4 px-6 border-2 border-gray-200 rounded-2xl focus:border-primary focus:outline-none transition-colors"
          autoFocus
        />

        {error && (
          <p className="text-red-500 text-center mt-3 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading || !password.trim()}
          className="w-full mt-6 py-4 bg-primary text-white text-xl font-bold rounded-2xl disabled:opacity-50 active:scale-95 transition-transform"
        >
          {loading ? '验证中...' : '进入管理'}
        </button>
      </form>
    </div>
  );
}

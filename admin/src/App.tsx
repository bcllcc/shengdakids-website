import { useState, useEffect } from 'react';
import { checkAuth } from './api';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import ProductEdit from './pages/ProductEdit';

type Page = 'login' | 'list' | 'add' | 'edit';

function App() {
  const [page, setPage] = useState<Page>('login');
  const [editId, setEditId] = useState<number | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    checkAuth().then(ok => {
      if (ok) setPage('list');
      setChecking(false);
    });
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-400 text-lg">加载中...</div>
      </div>
    );
  }

  const goToList = () => { setPage('list'); setEditId(null); };
  const goToAdd = () => { setPage('add'); setEditId(null); };
  const goToEdit = (id: number) => { setPage('edit'); setEditId(id); };
  const goToLogin = () => setPage('login');

  switch (page) {
    case 'login':
      return <Login onSuccess={() => setPage('list')} />;
    case 'list':
      return <ProductList onAdd={goToAdd} onEdit={goToEdit} onLogout={goToLogin} />;
    case 'add':
      return <ProductEdit onBack={goToList} onSaved={goToList} />;
    case 'edit':
      return <ProductEdit productId={editId!} onBack={goToList} onSaved={goToList} />;
    default:
      return null;
  }
}

export default App;

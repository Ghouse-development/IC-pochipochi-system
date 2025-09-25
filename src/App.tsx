import { useState } from 'react';
import { Header } from './components/layout/Header';
import { CatalogWithTabs } from './components/catalog/CatalogWithTabs';
import { CartSidebarEnhanced } from './components/cart/CartSidebarEnhanced';
import { ConfirmOrderModal } from './components/catalog/ConfirmOrderModal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { HierarchyPage } from './pages/HierarchyPage';
import { ImageTestPage } from './pages/ImageTestPage';
import { useVersionStore } from './stores/useVersionStore';
import { useCartStore } from './stores/useCartStore';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showHierarchy, setShowHierarchy] = useState(false);
  const [showImageTest, setShowImageTest] = useState(false);
  const [isAdmin] = useState(true); // デモ用に管理者モードを有効化
  
  const currentVersion = useVersionStore((state) => state.currentVersion);
  const items = useCartStore((state) => state.items);
  
  const handleCartClose = () => {
    setIsCartOpen(false);
    if (items.length > 0) {
      setIsConfirmModalOpen(true);
    }
  };

  if (showAdmin) {
    return <AdminDashboard />;
  }

  if (showHierarchy) {
    return <HierarchyPage onBack={() => setShowHierarchy(false)} />;
  }

  if (showImageTest) {
    return (
      <div>
        <button
          onClick={() => setShowImageTest(false)}
          className="fixed top-4 left-4 z-50 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
        >
          ← 戻る
        </button>
        <ImageTestPage />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        onCartClick={() => setIsCartOpen(true)}
        isAdmin={isAdmin}
        onAdminClick={() => setShowAdmin(true)}
        onHierarchyClick={() => setShowHierarchy(true)}
        onImageTestClick={() => setShowImageTest(true)}
      />
      
      <main className="flex-1 overflow-hidden">
        <CatalogWithTabs />
      </main>
      
      {/* バージョン表示 */}
      <div className="fixed bottom-4 left-4 bg-white px-3 py-1 rounded-lg shadow-md text-xs text-gray-600">
        Ver. {currentVersion}
      </div>
      
      <CartSidebarEnhanced
        isOpen={isCartOpen}
        onClose={handleCartClose}
      />
      
      <ConfirmOrderModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
      />
    </div>
  );
}

export default App;

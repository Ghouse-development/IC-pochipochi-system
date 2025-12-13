import { useState } from 'react';
import { AuthProvider, DemoAuthProvider, useAuth } from './contexts/AuthContext';
import { LoginPage } from './pages/LoginPage';
import { Header } from './components/layout/Header';
import { CatalogWithTabs } from './components/catalog/CatalogWithTabs';
import { CartSidebarEnhanced } from './components/cart/CartSidebarEnhanced';
import { ConfirmOrderModal } from './components/catalog/ConfirmOrderModal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { HierarchyPage } from './pages/HierarchyPage';
import { ImageTestPage } from './pages/ImageTestPage';
import { ShareModal } from './components/common/ShareModal';
import { ProductCompareModal } from './components/catalog/ProductCompareModal';
import { useVersionStore } from './stores/useVersionStore';
import { useCartStore } from './stores/useCartStore';
import type { Product } from './types/product';

// Environment check for demo mode
const isDemoMode = import.meta.env.VITE_DEMO_MODE === 'true' || !import.meta.env.VITE_SUPABASE_URL;

function AppContent() {
  const { user, isLoading, isAdmin } = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showHierarchy, setShowHierarchy] = useState(false);
  const [showImageTest, setShowImageTest] = useState(false);
  const [useDemoMode, setUseDemoMode] = useState(isDemoMode);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [compareProducts, setCompareProducts] = useState<Product[]>([]);

  const currentVersion = useVersionStore((state) => state.currentVersion);
  const items = useCartStore((state) => state.items);

  const handleCartClose = () => {
    setIsCartOpen(false);
    if (items.length > 0) {
      setIsConfirmModalOpen(true);
    }
  };

  // Show loading while checking auth
  if (isLoading && !useDemoMode) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">読み込み中...</p>
        </div>
      </div>
    );
  }

  // Show login if not authenticated
  if (!user && !useDemoMode) {
    return <LoginPage onDemoLogin={() => setUseDemoMode(true)} />;
  }

  // Admin dashboard
  if (showAdmin) {
    return <AdminDashboard onBack={() => setShowAdmin(false)} />;
  }

  // Hierarchy page
  if (showHierarchy) {
    return <HierarchyPage onBack={() => setShowHierarchy(false)} />;
  }

  // Image test page
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
        onShareClick={() => setIsShareModalOpen(true)}
        onCompareClick={() => setIsCompareModalOpen(true)}
        compareCount={compareProducts.length}
        isAdmin={isAdmin}
        onAdminClick={() => setShowAdmin(true)}
        onHierarchyClick={() => setShowHierarchy(true)}
        onImageTestClick={() => setShowImageTest(true)}
      />

      <main className="flex-1 overflow-hidden">
        <CatalogWithTabs />
      </main>

      {/* Version display */}
      <div className="fixed bottom-4 left-4 bg-white px-3 py-1 rounded-lg shadow-md text-xs text-gray-600">
        Ver. {currentVersion}
        {useDemoMode && <span className="ml-2 text-orange-500">(Demo)</span>}
      </div>

      <CartSidebarEnhanced isOpen={isCartOpen} onClose={handleCartClose} />

      <ConfirmOrderModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
      />

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      <ProductCompareModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        products={compareProducts}
        onRemoveProduct={(productId) => setCompareProducts(prev => prev.filter(p => p.id !== productId))}
      />
    </div>
  );
}

function App() {
  const [useDemoMode, setUseDemoMode] = useState(isDemoMode);

  // Use Demo provider if in demo mode
  if (useDemoMode) {
    return (
      <DemoAuthProvider>
        <AppContent />
      </DemoAuthProvider>
    );
  }

  // Use real auth provider
  return (
    <AuthProvider>
      <AppContentWithDemoSwitch onDemoSwitch={() => setUseDemoMode(true)} />
    </AuthProvider>
  );
}

// Wrapper to pass demo switch function
function AppContentWithDemoSwitch({ onDemoSwitch }: { onDemoSwitch: () => void }) {
  const { user, isLoading, isAdmin } = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showHierarchy, setShowHierarchy] = useState(false);
  const [showImageTest, setShowImageTest] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [compareProducts, setCompareProducts] = useState<Product[]>([]);

  const currentVersion = useVersionStore((state) => state.currentVersion);
  const items = useCartStore((state) => state.items);

  const handleCartClose = () => {
    setIsCartOpen(false);
    if (items.length > 0) {
      setIsConfirmModalOpen(true);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">読み込み中...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginPage onDemoLogin={onDemoSwitch} />;
  }

  if (showAdmin) {
    return <AdminDashboard onBack={() => setShowAdmin(false)} />;
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
        onShareClick={() => setIsShareModalOpen(true)}
        onCompareClick={() => setIsCompareModalOpen(true)}
        compareCount={compareProducts.length}
        isAdmin={isAdmin}
        onAdminClick={() => setShowAdmin(true)}
        onHierarchyClick={() => setShowHierarchy(true)}
        onImageTestClick={() => setShowImageTest(true)}
      />

      <main className="flex-1 overflow-hidden">
        <CatalogWithTabs />
      </main>

      <div className="fixed bottom-4 left-4 bg-white px-3 py-1 rounded-lg shadow-md text-xs text-gray-600">
        Ver. {currentVersion}
      </div>

      <CartSidebarEnhanced isOpen={isCartOpen} onClose={handleCartClose} />

      <ConfirmOrderModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
      />

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      <ProductCompareModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        products={compareProducts}
        onRemoveProduct={(productId) => setCompareProducts(prev => prev.filter(p => p.id !== productId))}
      />
    </div>
  );
}

export default App;

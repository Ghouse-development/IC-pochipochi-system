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
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { OnboardingGuide, HelpButton, useOnboarding } from './components/common/OnboardingGuide';
import { ToastProvider } from './components/common/Toast';
import { useVersionStore } from './stores/useVersionStore';
import { useCartStore } from './stores/useCartStore';
import type { Product } from './types/product';

// Environment check for demo mode
const isDemoMode = import.meta.env.VITE_DEMO_MODE === 'true' || !import.meta.env.VITE_SUPABASE_URL;

// メインアプリケーションコンテンツ
interface MainContentProps {
  onDemoSwitch?: () => void;
  isDemoMode?: boolean;
}

function MainContent({ onDemoSwitch, isDemoMode: isDemo }: MainContentProps) {
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

  // オンボーディングガイド
  const {
    showOnboarding,
    openOnboarding,
    closeOnboarding,
    completeOnboarding,
  } = useOnboarding();

  const handleCartClose = () => {
    setIsCartOpen(false);
    if (items.length > 0) {
      setIsConfirmModalOpen(true);
    }
  };

  // Show loading while checking auth
  if (isLoading && !isDemo) {
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
  if (!user && !isDemo) {
    return <LoginPage onDemoLogin={onDemoSwitch} />;
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
        {isDemo && <span className="ml-2 text-orange-500">(Demo)</span>}
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

      {/* ヘルプボタン */}
      <HelpButton onClick={openOnboarding} />

      {/* オンボーディングガイド */}
      <OnboardingGuide
        isOpen={showOnboarding}
        onClose={closeOnboarding}
        onComplete={completeOnboarding}
      />
    </div>
  );
}

function App() {
  const [useDemoMode, setUseDemoMode] = useState(isDemoMode);

  // ErrorBoundaryでラップしたコンテンツ
  const wrappedContent = (isDemoMode: boolean, onDemoSwitch?: () => void) => (
    <ErrorBoundary
      onError={(error, errorInfo) => {
        // 本番環境ではSentryなどに送信
        console.error('App error caught:', error.message);
        console.error('Component stack:', errorInfo.componentStack);
      }}
    >
      <MainContent isDemoMode={isDemoMode} onDemoSwitch={onDemoSwitch} />
    </ErrorBoundary>
  );

  // Use Demo provider if in demo mode
  if (useDemoMode) {
    return (
      <ToastProvider>
        <DemoAuthProvider>
          {wrappedContent(true)}
        </DemoAuthProvider>
      </ToastProvider>
    );
  }

  // Use real auth provider
  return (
    <ToastProvider>
      <AuthProvider>
        {wrappedContent(false, () => setUseDemoMode(true))}
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;

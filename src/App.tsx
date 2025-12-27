import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider, DemoAuthProvider, useAuth } from './contexts/AuthContext';
import { CustomerModeProvider } from './components/customer/CustomerModeWrapper';
import { createLogger } from './lib/logger';
import { DevToolbar } from './components/dev/DevToolbar';

const logger = createLogger('App');
import { QueryProvider } from './lib/QueryProvider';
import { LoginPage } from './pages/LoginPage';
import { Header } from './components/layout/Header';
import { CatalogWithTabs } from './components/catalog/CatalogWithTabs';
import { CartSidebarEnhanced } from './components/cart/CartSidebarEnhanced';
import { ConfirmOrderModal } from './components/catalog/ConfirmOrderModal';
import { ShareModal } from './components/common/ShareModal';
import { ProductCompareModal } from './components/catalog/ProductCompareModal';
import { GlobalErrorBoundary } from './components/common/GlobalErrorHandler';
import { OnboardingGuide, HelpButton, useOnboarding } from './components/common/OnboardingGuide';
import { InteractiveTutorial, DEFAULT_TUTORIAL_STEPS } from './components/common/InteractiveTutorial';
import { useTutorialStore } from './stores/useTutorialStore';
import { ToastProvider } from './components/common/Toast';
import { AnnouncerProvider } from './components/common/ScreenReaderAnnouncer';
import { HelpProvider } from './components/common/InAppHelp';
import { NetworkStatusBanner } from './components/common/NetworkStatusBanner';
import { ShortcutHelpModal } from './components/common/ShortcutHelpModal';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { useVersionStore } from './stores/useVersionStore';
import { useCartStore } from './stores/useCartStore';
import { WorkflowGuide } from './components/common/WorkflowGuide';
import { CompletionCelebration } from './components/common/CompletionCelebration';
import type { Product } from './types/product';

// Lazy loaded components for code splitting
const AdminDashboard = lazy(() => import('./components/admin/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const HierarchyPage = lazy(() => import('./pages/HierarchyPage').then(m => ({ default: m.HierarchyPage })));
const ImageTestPage = lazy(() => import('./pages/ImageTestPage').then(m => ({ default: m.ImageTestPage })));
const StaffDashboard = lazy(() => import('./pages/StaffDashboard').then(m => ({ default: m.StaffDashboard })));
const CustomerPage = lazy(() => import('./pages/CustomerPage').then(m => ({ default: m.CustomerPage })));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-gray-600">読み込み中...</p>
    </div>
  </div>
);

// Environment check for demo mode
const isDemoMode = import.meta.env.VITE_DEMO_MODE === 'true' || !import.meta.env.VITE_SUPABASE_URL;

// メインアプリケーションコンテンツ
interface MainContentProps {
  onDemoSwitch?: () => void;
  isDemoMode?: boolean;
}

function MainContent({ onDemoSwitch, isDemoMode: isDemo }: MainContentProps) {
  const { user, isLoading, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [isShortcutHelpOpen, setIsShortcutHelpOpen] = useState(false);
  const [compareProducts, setCompareProducts] = useState<Product[]>([]);

  // ダークモード状態
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      if (newValue) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newValue;
    });
  };

  const currentVersion = useVersionStore((state) => state.currentVersion);
  const items = useCartStore((state) => state.items);

  // 現在のカタログステップを判定（ワークフローガイド用）
  const currentCatalogStep = (() => {
    const path = location.pathname;
    if (path.includes('/catalog/exterior')) return 'exterior';
    if (path.includes('/catalog/interior')) return 'interior';
    if (path.includes('/catalog/equipment')) return 'equipment';
    return null;
  })();

  // カタログページかどうか
  const isCatalogPage = location.pathname.includes('/catalog');

  // キーボードショートカットの設定
  useKeyboardShortcuts({
    onSearch: () => {
      const searchInput = document.querySelector<HTMLInputElement>('[data-search-input]');
      searchInput?.focus();
    },
    onOpenCart: () => setIsCartOpen(true),
    onEscape: () => {
      setIsCartOpen(false);
      setIsConfirmModalOpen(false);
      setIsShareModalOpen(false);
      setIsCompareModalOpen(false);
      setIsShortcutHelpOpen(false);
    },
    onHelp: () => setIsShortcutHelpOpen(true),
  });

  // オンボーディングガイド
  const {
    showOnboarding,
    closeOnboarding,
    completeOnboarding,
  } = useOnboarding();

  // インタラクティブチュートリアル
  const {
    isOpen: isTutorialOpen,
    isFirstVisit,
    hasCompletedTutorial,
    openTutorial,
    closeTutorial,
    completeTutorial,
    markAsVisited,
  } = useTutorialStore();

  // 初回訪問時に自動でチュートリアル表示
  useEffect(() => {
    if (isFirstVisit && !hasCompletedTutorial) {
      // 少し遅延させてからチュートリアルを表示
      const timer = globalThis.setTimeout(() => {
        openTutorial();
        markAsVisited();
      }, 1500);
      return () => globalThis.clearTimeout(timer);
    }
  }, [isFirstVisit, hasCompletedTutorial, openTutorial, markAsVisited]);

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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        onCartClick={() => setIsCartOpen(true)}
        onShareClick={() => setIsShareModalOpen(true)}
        onCompareClick={() => setIsCompareModalOpen(true)}
        compareCount={compareProducts.length}
        isAdmin={isAdmin}
        onAdminClick={() => navigate('/admin')}
        onHierarchyClick={() => navigate('/hierarchy')}
        onImageTestClick={() => navigate('/image-test')}
        onStaffDashboardClick={() => navigate('/staff')}
      />

      <main className="flex-1 overflow-hidden">
        <Routes>
          {/* カタログルート */}
          <Route path="/" element={<Navigate to="/catalog/exterior" replace />} />
          <Route path="/catalog" element={<Navigate to="/catalog/exterior" replace />} />
          <Route path="/catalog/:step" element={<CatalogWithTabs onCartClick={() => setIsCartOpen(true)} />} />
          <Route path="/catalog/:step/:categoryId" element={<CatalogWithTabs onCartClick={() => setIsCartOpen(true)} />} />
          <Route path="/catalog/:step/:categoryId/:productId" element={<CatalogWithTabs onCartClick={() => setIsCartOpen(true)} />} />

          {/* 管理画面 - Lazy loaded */}
          <Route path="/admin" element={
            <Suspense fallback={<PageLoader />}>
              <AdminDashboard onBack={() => window.history.back()} />
            </Suspense>
          } />
          <Route path="/hierarchy" element={
            <Suspense fallback={<PageLoader />}>
              <HierarchyPage onBack={() => window.history.back()} />
            </Suspense>
          } />
          <Route path="/image-test" element={
            <Suspense fallback={<PageLoader />}>
              <ImageTestPage />
            </Suspense>
          } />
          <Route path="/staff" element={
            <Suspense fallback={<PageLoader />}>
              <StaffDashboard onBack={() => navigate('/catalog')} />
            </Suspense>
          } />
          <Route path="/customer" element={
            <Suspense fallback={<PageLoader />}>
              <CustomerPage />
            </Suspense>
          } />
        </Routes>
      </main>

      {/* Version display */}
      <div className="fixed bottom-4 left-4 bg-white px-3 py-1 rounded-lg shadow-md text-xs text-gray-600 z-30">
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

      {/* ヘルプボタン（チュートリアル開始） */}
      <HelpButton onClick={openTutorial} />

      {/* インタラクティブチュートリアル */}
      <InteractiveTutorial
        steps={DEFAULT_TUTORIAL_STEPS}
        isOpen={isTutorialOpen}
        onClose={closeTutorial}
        onComplete={completeTutorial}
        showProgress={true}
        allowSkip={true}
      />

      {/* オンボーディングガイド（従来のスライド形式） */}
      <OnboardingGuide
        isOpen={showOnboarding}
        onClose={closeOnboarding}
        onComplete={completeOnboarding}
      />

      {/* キーボードショートカットヘルプ */}
      <ShortcutHelpModal
        isOpen={isShortcutHelpOpen}
        onClose={() => setIsShortcutHelpOpen(false)}
      />

      {/* ネットワーク状態バナー */}
      <NetworkStatusBanner />

      {/* ワークフローガイド（カタログページのみ表示） */}
      {isCatalogPage && (
        <WorkflowGuide onCartClick={() => setIsCartOpen(true)} />
      )}

      {/* カテゴリ完了時の祝福 */}
      {currentCatalogStep && (
        <CompletionCelebration
          currentCategoryId={currentCatalogStep}
          onCartClick={() => setIsCartOpen(true)}
        />
      )}

      {/* 開発用ツールバー (開発環境のみ表示) */}
      {import.meta.env.DEV && (
        <DevToolbar
          onToggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
}

function App() {
  const [useDemoMode, setUseDemoMode] = useState(isDemoMode);

  // GlobalErrorBoundaryでラップしたコンテンツ（強化版エラーハンドリング）
  const wrappedContent = (isDemoMode: boolean, onDemoSwitch?: () => void) => (
    <GlobalErrorBoundary
      onError={(error, errorInfo) => {
        logger.error('App error caught:', error.message);
        logger.error('Component stack:', errorInfo.componentStack);
      }}
    >
      <BrowserRouter>
        <CustomerModeProvider>
          <MainContent isDemoMode={isDemoMode} onDemoSwitch={onDemoSwitch} />
        </CustomerModeProvider>
      </BrowserRouter>
    </GlobalErrorBoundary>
  );

  // Use Demo provider if in demo mode
  if (useDemoMode) {
    return (
      <QueryProvider>
        <AnnouncerProvider>
          <ToastProvider>
            <HelpProvider>
              <DemoAuthProvider>
                {wrappedContent(true)}
              </DemoAuthProvider>
            </HelpProvider>
          </ToastProvider>
        </AnnouncerProvider>
      </QueryProvider>
    );
  }

  // Use real auth provider
  return (
    <QueryProvider>
      <AnnouncerProvider>
        <ToastProvider>
          <HelpProvider>
            <AuthProvider>
              {wrappedContent(false, () => setUseDemoMode(true))}
            </AuthProvider>
          </HelpProvider>
        </ToastProvider>
      </AnnouncerProvider>
    </QueryProvider>
  );
}

export default App;

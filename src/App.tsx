import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { CustomerModeProvider } from './components/customer/CustomerModeWrapper';
import { createLogger } from './lib/logger';
import { DevToolbar } from './components/dev/DevToolbar';

const logger = createLogger('App');
import { QueryProvider } from './lib/QueryProvider';
import { LoginPage } from './pages/LoginPage';
import { Header } from './components/layout/Header';
import { CartSidebarEnhanced } from './components/cart/CartSidebarEnhanced';
import { SelectedItemsBar } from './components/catalog/SelectedItemsBar';
import { ConfirmOrderModal } from './components/catalog/ConfirmOrderModal';
import { ShareModal } from './components/common/ShareModal';
import { GlobalErrorBoundary } from './components/common/GlobalErrorHandler';
import { ToastProvider } from './components/common/Toast';
import { AnnouncerProvider } from './components/common/ScreenReaderAnnouncer';
import { HelpProvider } from './components/common/InAppHelp';
import { NetworkStatusBanner } from './components/common/NetworkStatusBanner';
import { ShortcutHelpModal } from './components/common/ShortcutHelpModal';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { useVersionStore } from './stores/useVersionStore';
import { useCartStore } from './stores/useCartStore';
import { CompletionCelebration } from './components/common/CompletionCelebration';

// Lazy loaded components for code splitting
const CatalogWithTabs = lazy(() => import('./components/catalog/CatalogWithTabs').then(m => ({ default: m.CatalogWithTabs })));
const AdminDashboard = lazy(() => import('./components/admin/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const HierarchyPage = lazy(() => import('./pages/HierarchyPage').then(m => ({ default: m.HierarchyPage })));
const StaffDashboard = lazy(() => import('./pages/StaffDashboard').then(m => ({ default: m.StaffDashboard })));
const CustomerPage = lazy(() => import('./pages/CustomerPage').then(m => ({ default: m.CustomerPage })));
const CustomerLoginPage = lazy(() => import('./pages/CustomerLoginPage').then(m => ({ default: m.CustomerLoginPage })));
const ItemDetailPage = lazy(() => import('./pages/ItemDetailPage').then(m => ({ default: m.ItemDetailPage })));

// 管理者専用ルートガード - 管理者以外はログインページへリダイレクト
const AdminRouteGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAdmin, isLoading, user } = useAuth();
  const navigate = useNavigate();

  // ローディング中は待機
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">認証確認中...</p>
        </div>
      </div>
    );
  }

  // 未ログインの場合はログインページへ
  if (!user) {
    return <LoginPage />;
  }

  // 管理者でない場合は403表示
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-300 mb-4">403</h1>
          <p className="text-gray-500 mb-4">アクセス権限がありません</p>
          <button
            onClick={() => navigate('/catalog')}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            カタログに戻る
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-gray-600">読み込み中...</p>
    </div>
  </div>
);

// メインアプリケーションコンテンツ
function MainContent() {
  const { user, isLoading, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isShortcutHelpOpen, setIsShortcutHelpOpen] = useState(false);

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
    if (path.includes('/catalog/furniture')) return 'furniture';
    return null;
  })();

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
      setIsShortcutHelpOpen(false);
    },
    onHelp: () => setIsShortcutHelpOpen(true),
  });

  const handleCartClose = () => {
    setIsCartOpen(false);
    if (items.length > 0) {
      setIsConfirmModalOpen(true);
    }
  };

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">読み込み中...</p>
        </div>
      </div>
    );
  }

  // お客様ログインページは認証不要でアクセス可能
  if (location.pathname === '/customer-login') {
    return (
      <Suspense fallback={<PageLoader />}>
        <CustomerLoginPage />
      </Suspense>
    );
  }

  // スタッフログインページ
  if (location.pathname === '/login') {
    // ログイン済みの場合は管理者ページにリダイレクト
    if (user) {
      return <Navigate to="/admin" replace />;
    }
    return <LoginPage />;
  }

  // 未認証の場合はログインページを表示
  if (!user) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        onCartClick={() => setIsCartOpen(true)}
        onShareClick={() => setIsShareModalOpen(true)}
        isAdmin={isAdmin}
        onAdminClick={() => navigate('/admin')}
        onHierarchyClick={() => navigate('/hierarchy')}
        onStaffDashboardClick={() => navigate('/staff')}
      />

      <main className="flex-1 overflow-hidden">
        <Routes>
          {/* カタログルート - Lazy loaded for better initial load */}
          <Route path="/" element={<Navigate to="/catalog/exterior" replace />} />
          <Route path="/catalog" element={<Navigate to="/catalog/exterior" replace />} />
          <Route path="/catalog/:step" element={
            <Suspense fallback={<PageLoader />}>
              <CatalogWithTabs onCartClick={() => setIsCartOpen(true)} />
            </Suspense>
          } />
          <Route path="/catalog/:step/:categoryId" element={
            <Suspense fallback={<PageLoader />}>
              <CatalogWithTabs onCartClick={() => setIsCartOpen(true)} />
            </Suspense>
          } />
          <Route path="/catalog/:step/:categoryId/:productId" element={
            <Suspense fallback={<PageLoader />}>
              <CatalogWithTabs onCartClick={() => setIsCartOpen(true)} />
            </Suspense>
          } />

          {/* アイテム詳細ページ */}
          <Route path="/item/:itemId" element={
            <Suspense fallback={<PageLoader />}>
              <ItemDetailPage />
            </Suspense>
          } />

          {/* 管理画面 - Lazy loaded + AdminRouteGuard（管理者以外は403表示） */}
          <Route path="/admin/*" element={
            <AdminRouteGuard>
              <Suspense fallback={<PageLoader />}>
                <AdminDashboard onBack={() => window.history.back()} />
              </Suspense>
            </AdminRouteGuard>
          } />
          <Route path="/hierarchy" element={
            <AdminRouteGuard>
              <Suspense fallback={<PageLoader />}>
                <HierarchyPage onBack={() => window.history.back()} />
              </Suspense>
            </AdminRouteGuard>
          } />
          <Route path="/staff/*" element={
            <AdminRouteGuard>
              <Suspense fallback={<PageLoader />}>
                <StaffDashboard onBack={() => navigate('/catalog')} />
              </Suspense>
            </AdminRouteGuard>
          } />
          <Route path="/customer" element={
            <Suspense fallback={<PageLoader />}>
              <CustomerPage />
            </Suspense>
          } />

          {/* 404 キャッチオール - 存在しないパスはすべてここに */}
          <Route path="*" element={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
                <p className="text-gray-500 mb-4">ページが見つかりません</p>
                <button
                  onClick={() => navigate('/catalog')}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  カタログに戻る
                </button>
              </div>
            </div>
          } />
        </Routes>
      </main>

      {/* Version display */}
      <div className="fixed bottom-4 left-4 bg-white px-3 py-1 rounded-lg shadow-md text-xs text-gray-600 z-30">
        Ver. {currentVersion}
      </div>

      {/* 選択済みアイテムバー（クイック解除用） */}
      <SelectedItemsBar isCartOpen={isCartOpen} />

      <CartSidebarEnhanced isOpen={isCartOpen} onClose={handleCartClose} />

      <ConfirmOrderModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
      />

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      {/* キーボードショートカットヘルプ */}
      <ShortcutHelpModal
        isOpen={isShortcutHelpOpen}
        onClose={() => setIsShortcutHelpOpen(false)}
      />

      {/* ネットワーク状態バナー */}
      <NetworkStatusBanner />

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
  return (
    <QueryProvider>
      <AnnouncerProvider>
        <ToastProvider>
          <HelpProvider>
            <AuthProvider>
              <GlobalErrorBoundary
                onError={(error, errorInfo) => {
                  logger.error('App error caught:', error.message);
                  logger.error('Component stack:', errorInfo.componentStack);
                }}
              >
                <BrowserRouter>
                  <CustomerModeProvider>
                    <MainContent />
                  </CustomerModeProvider>
                </BrowserRouter>
              </GlobalErrorBoundary>
            </AuthProvider>
          </HelpProvider>
        </ToastProvider>
      </AnnouncerProvider>
    </QueryProvider>
  );
}

export default App;

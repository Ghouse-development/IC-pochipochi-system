import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ClipboardCheck, User, Settings, Menu, X, FileText, Share2, Search, LogOut, Briefcase, Home, ShieldCheck } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { formatPrice } from '../../lib/utils';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  onCartClick: () => void;
  onShareClick?: () => void;
  searchTerm?: string;
  onSearchChange?: (term: string) => void;
  isAdmin?: boolean;
  onAdminClick?: () => void;
  onHierarchyClick?: () => void;
  onStaffDashboardClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onCartClick,
  onShareClick,
  searchTerm = '',
  onSearchChange,
  isAdmin = false,
  onAdminClick,
  onHierarchyClick,
  onStaffDashboardClick,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { items, getTotalPrice } = useCartStore();
  const { user, signOut } = useAuth();
  const totalPrice = getTotalPrice();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // 現在のページが管理画面かどうかを判定
  const isAdminPage = location.pathname.startsWith('/admin') ||
    location.pathname.startsWith('/staff') ||
    location.pathname.startsWith('/hierarchy');

  // ロゴ長押しで管理画面ログインへ（3秒）
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [isLongPressing, setIsLongPressing] = useState(false);

  const handleLogoMouseDown = useCallback(() => {
    setIsLongPressing(true);
    longPressTimerRef.current = setTimeout(() => {
      navigate('/login');
    }, 3000);
  }, [navigate]);

  const handleLogoMouseUp = useCallback(() => {
    setIsLongPressing(false);
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  }, []);

  const handleLogoMouseLeave = useCallback(() => {
    setIsLongPressing(false);
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  }, []);

  // タッチデバイス用
  const handleLogoTouchStart = useCallback(() => {
    setIsLongPressing(true);
    longPressTimerRef.current = setTimeout(() => {
      navigate('/login');
    }, 3000);
  }, [navigate]);

  const handleLogoTouchEnd = useCallback(() => {
    setIsLongPressing(false);
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  }, []);

  // キーボードイベント: Escapeでメニューを閉じる
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (isUserMenuOpen) setIsUserMenuOpen(false);
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    }
  }, [isUserMenuOpen, isMobileMenuOpen]);

  useEffect(() => {
    if (isUserMenuOpen || isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isUserMenuOpen, isMobileMenuOpen, handleKeyDown]);

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-[60]">
        <div className="px-4 sm:px-6 py-2">
          <div className="flex items-center justify-between">
            {/* ロゴとメニューボタン */}
            <div className="flex items-center gap-3">
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <h1
                className={`text-xl sm:text-2xl font-bold text-gray-900 select-none cursor-default transition-opacity ${
                  isLongPressing ? 'opacity-50' : ''
                }`}
                onMouseDown={handleLogoMouseDown}
                onMouseUp={handleLogoMouseUp}
                onMouseLeave={handleLogoMouseLeave}
                onTouchStart={handleLogoTouchStart}
                onTouchEnd={handleLogoTouchEnd}
                onTouchCancel={handleLogoTouchEnd}
              >
                STYLEBOOK
              </h1>
              {/* 管理モードインジケーター */}
              {isAdmin && isAdminPage && (
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                  <ShieldCheck className="w-3 h-3" />
                  管理モード
                </span>
              )}
            </div>

            {/* 管理画面からカタログへの戻りボタン（管理画面表示時のみ） */}
            {isAdmin && isAdminPage && (
              <button
                onClick={() => navigate('/catalog')}
                className="hidden sm:flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="カタログに戻る"
              >
                <Home className="w-4 h-4" />
                <span className="text-sm font-medium">カタログへ</span>
              </button>
            )}

            {/* カタログから管理画面へのクイックアクセス（カタログ表示時のみ） */}
            {isAdmin && !isAdminPage && (
              <button
                onClick={() => navigate('/admin')}
                className="hidden sm:flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                aria-label="管理画面を開く"
              >
                <Settings className="w-4 h-4" />
                <span className="text-sm font-medium">管理</span>
              </button>
            )}

            {/* 検索バー */}
            {onSearchChange && (
              <div className="hidden sm:flex flex-1 max-w-md mx-4">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="商品を検索..."
                    className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    aria-label="商品検索"
                  />
                </div>
              </div>
            )}

            {/* 右側のアクション */}
            <div className="flex items-center gap-2">
              {/* シェアボタン */}
              {onShareClick && itemCount > 0 && (
                <button
                  onClick={onShareClick}
                  className="hidden sm:flex items-center gap-1 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="シェア"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm font-medium">シェア</span>
                </button>
              )}

              {/* 選択リストボタン */}
              <button
                onClick={onCartClick}
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                aria-label="選択した仕様を確認"
              >
                <div className="relative">
                  <ClipboardCheck className="w-5 h-5 text-gray-700" />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-xs text-gray-500">選択中<span className="ml-1 text-gray-400">{itemCount}件</span></p>
                  <p className="text-sm font-bold text-gray-900">{formatPrice(totalPrice)}</p>
                </div>
              </button>

              {/* ユーザーメニュー */}
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="hidden sm:flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                  aria-label="ユーザーメニュー"
                  aria-expanded={isUserMenuOpen}
                  aria-haspopup="menu"
                  aria-controls="user-menu"
                >
                  <User className="w-5 h-5 text-gray-700" />
                  {user && (
                    <span className="text-sm text-gray-600 max-w-[100px] truncate">
                      {user.email?.split('@')[0]}
                    </span>
                  )}
                </button>
                {isUserMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-[55]"
                      onClick={() => setIsUserMenuOpen(false)}
                      aria-hidden="true"
                    />
                    <div
                      id="user-menu"
                      role="menu"
                      aria-label="ユーザーメニュー"
                      className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-[65] py-2"
                    >
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">
                          {user?.email}
                        </p>
                        <p className="text-xs text-gray-500">
                          {isAdmin ? '管理者' : 'ユーザー'}
                        </p>
                      </div>
                      {isAdmin && (
                        <>
                          <button
                            role="menuitem"
                            onClick={() => {
                              setIsUserMenuOpen(false);
                              onStaffDashboardClick?.();
                            }}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <Briefcase className="w-4 h-4" />
                            スタッフダッシュボード
                          </button>
                          <button
                            role="menuitem"
                            onClick={() => {
                              setIsUserMenuOpen(false);
                              onHierarchyClick?.();
                            }}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <FileText className="w-4 h-4" />
                            階層表示
                          </button>
                          <button
                            role="menuitem"
                            onClick={() => {
                              setIsUserMenuOpen(false);
                              onAdminClick?.();
                            }}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <Settings className="w-4 h-4" />
                            アイテムのメンテナンス
                          </button>
                        </>
                      )}
                      <button
                        role="menuitem"
                        onClick={async () => {
                          setIsUserMenuOpen(false);
                          await signOut?.();
                          navigate('/login');
                        }}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="w-4 h-4" />
                        ログアウト
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* 管理者ボタンはユーザーメニュー内に統合済み */}
        
      </header>
      
      {/* モバイルメニュー */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} aria-hidden="true">
          <nav
            id="mobile-menu"
            role="navigation"
            aria-label="モバイルメニュー"
            className="bg-white w-64 h-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b">
              <h2 className="font-bold text-lg">メニュー</h2>
            </div>
            <div className="p-4">
              <ul className="space-y-2" role="menu">
                {/* クイックナビゲーション - カタログと管理画面の切り替え */}
                {isAdmin && (
                  <li className="mb-4" role="none">
                    {isAdminPage ? (
                      <button
                        role="menuitem"
                        onClick={() => {
                          navigate('/catalog');
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium"
                      >
                        <Home className="w-5 h-5" />
                        カタログに戻る
                      </button>
                    ) : (
                      <button
                        role="menuitem"
                        onClick={() => {
                          navigate('/admin');
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 bg-purple-600 text-white rounded-lg font-medium"
                      >
                        <Settings className="w-5 h-5" />
                        管理画面を開く
                      </button>
                    )}
                  </li>
                )}
                {isAdmin && (
                  <>
                    <li className="pt-4 border-t" role="none">
                      <button
                        role="menuitem"
                        onClick={() => {
                          if (onStaffDashboardClick) onStaffDashboardClick();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-blue-50 rounded-lg text-blue-600 font-medium"
                      >
                        スタッフダッシュボード
                      </button>
                    </li>
                    <li role="none">
                      <button
                        role="menuitem"
                        onClick={() => {
                          if (onHierarchyClick) onHierarchyClick();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-600"
                      >
                        階層表示
                      </button>
                    </li>
                    <li role="none">
                      <button
                        role="menuitem"
                        onClick={() => {
                          if (onAdminClick) onAdminClick();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-600"
                      >
                        アイテムのメンテナンス
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
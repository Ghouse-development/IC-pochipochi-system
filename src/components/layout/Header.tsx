import React, { useState, useEffect, useCallback } from 'react';
import { ClipboardCheck, User, Settings, Menu, X, FileText, Upload, Share2, Scale, Moon, Sun, LogOut, BarChart3 } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { useThemeStore } from '../../stores/useThemeStore';
import { formatPrice } from '../../lib/utils';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  onCartClick: () => void;
  onShareClick?: () => void;
  onCompareClick?: () => void;
  compareCount?: number;
  isAdmin?: boolean;
  onAdminClick?: () => void;
  onHierarchyClick?: () => void;
  onImageTestClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onCartClick,
  onShareClick,
  onCompareClick,
  compareCount = 0,
  isAdmin = false,
  onAdminClick,
  onHierarchyClick,
  onImageTestClick
}) => {
  const { items, getTotalPrice } = useCartStore();
  const { isDark, toggle: toggleTheme } = useThemeStore();
  const { user, signOut } = useAuth();
  const totalPrice = getTotalPrice();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

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
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="px-4 sm:px-6 py-3 sm:py-4">
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
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">STYLEBOOK</h1>
              <span className="hidden sm:block text-sm text-gray-500">カタログ</span>
            </div>
            
            
            {/* 右側のアクション */}
            <div className="flex items-center gap-2">
              {/* 比較ボタン */}
              {onCompareClick && (
                <button
                  onClick={onCompareClick}
                  className={`relative p-2 rounded-lg transition-colors ${
                    compareCount > 0
                      ? 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                      : 'hover:bg-gray-50 text-gray-500'
                  }`}
                  title="商品比較"
                >
                  <Scale className="w-5 h-5" />
                  {compareCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {compareCount}
                    </span>
                  )}
                </button>
              )}

              {/* シェアボタン */}
              {onShareClick && itemCount > 0 && (
                <button
                  onClick={onShareClick}
                  className="hidden sm:flex items-center gap-1 px-3 py-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
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
              
              {/* ダークモードトグル */}
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                aria-label={isDark ? 'ライトモードに切替' : 'ダークモードに切替'}
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {/* ユーザーメニュー */}
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="hidden sm:flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="ユーザーメニュー"
                  aria-expanded={isUserMenuOpen}
                  aria-haspopup="menu"
                  aria-controls="user-menu"
                >
                  <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  {user && (
                    <span className="text-sm text-gray-600 dark:text-gray-400 max-w-[100px] truncate">
                      {user.email?.split('@')[0]}
                    </span>
                  )}
                </button>
                {isUserMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsUserMenuOpen(false)}
                      aria-hidden="true"
                    />
                    <div
                      id="user-menu"
                      role="menu"
                      aria-label="ユーザーメニュー"
                      className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 py-2"
                    >
                      <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {user?.email}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {isAdmin ? '管理者' : 'ユーザー'}
                        </p>
                      </div>
                      {isAdmin && (
                        <>
                          <button
                            role="menuitem"
                            onClick={() => {
                              setIsUserMenuOpen(false);
                              onAdminClick?.();
                            }}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            <Settings className="w-4 h-4" />
                            管理画面
                          </button>
                          <button
                            role="menuitem"
                            onClick={() => {
                              setIsUserMenuOpen(false);
                              onHierarchyClick?.();
                            }}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            <BarChart3 className="w-4 h-4" />
                            進捗ダッシュボード
                          </button>
                        </>
                      )}
                      <button
                        role="menuitem"
                        onClick={() => {
                          setIsUserMenuOpen(false);
                          signOut?.();
                        }}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
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
        
        {/* 管理者ボタン */}
        {isAdmin && (
          <div className="px-4 sm:px-6 py-2 bg-gray-50 border-t border-gray-100">
            <div className="flex justify-end gap-2">
              <button
                onClick={onHierarchyClick}
                className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                <FileText className="w-3 h-3" />
                <span className="hidden sm:inline">階層表示</span>
                <span className="sm:hidden">階層</span>
              </button>
              <button
                onClick={onImageTestClick}
                className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                <Upload className="w-3 h-3" />
                <span className="hidden sm:inline">画像テスト</span>
                <span className="sm:hidden">画像</span>
              </button>
              <button
                onClick={onAdminClick}
                className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                <Settings className="w-3 h-3" />
                <span className="hidden sm:inline">アイテムのメンテナンス</span>
                <span className="sm:hidden">管理</span>
              </button>
            </div>
          </div>
        )}
        
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
                {isAdmin && (
                  <>
                    <li className="pt-4 border-t" role="none">
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
import React, { useState } from 'react';
import { ShoppingCart, User, Settings, Menu, X, FileText, Upload, Share2, Scale, Moon, Sun } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { useThemeStore } from '../../stores/useThemeStore';
import { formatPrice } from '../../lib/utils';

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
  const totalPrice = getTotalPrice();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

              {/* カートボタン */}
              <button
                onClick={onCartClick}
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="relative">
                  <ShoppingCart className="w-5 h-5 text-gray-700" />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-xs text-gray-500">合計<span className="ml-1 text-gray-400">税別</span></p>
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
              <button className="hidden sm:block p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
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
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="bg-white w-64 h-full shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b">
              <h2 className="font-bold text-lg">メニュー</h2>
            </div>
            <nav className="p-4">
              <ul className="space-y-2">
                {isAdmin && (
                  <>
                    <li className="pt-4 border-t">
                      <button
                        onClick={() => {
                          if (onHierarchyClick) onHierarchyClick();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-600"
                      >
                        階層表示
                      </button>
                    </li>
                    <li>
                      <button
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
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
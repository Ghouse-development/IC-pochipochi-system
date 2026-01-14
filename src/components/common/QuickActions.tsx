/**
 * クイックアクションメニュー
 * - Cmd/Ctrl + K で開く
 * - よく使う機能への高速アクセス
 * - キーボードナビゲーション対応
 */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {
  Search,
  ShoppingCart,
  FileText,
  Settings,
  HelpCircle,
  Home,
  BarChart3,
  Package,
  Printer,
  Moon,
  Sun,
  X,
  Command,
} from 'lucide-react';

interface QuickAction {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  shortcut?: string;
  action: () => void;
  category: 'navigation' | 'action' | 'settings';
}

interface QuickActionsProps {
  onNavigate?: (path: string) => void;
  onOpenCart?: () => void;
  onExportPDF?: () => void;
  onToggleDarkMode?: () => void;
  isDarkMode?: boolean;
}

export const QuickActions: React.FC<QuickActionsProps> = ({
  onNavigate,
  onOpenCart,
  onExportPDF,
  onToggleDarkMode,
  isDarkMode = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const actions: QuickAction[] = [
    {
      id: 'home',
      label: 'ホーム',
      description: 'カタログトップに戻る',
      icon: <Home className="w-4 h-4" />,
      shortcut: 'G H',
      action: () => onNavigate?.('/catalog'),
      category: 'navigation',
    },
    {
      id: 'cart',
      label: 'カートを開く',
      description: '選択中の商品を確認',
      icon: <ShoppingCart className="w-4 h-4" />,
      shortcut: 'G C',
      action: () => onOpenCart?.(),
      category: 'action',
    },
    {
      id: 'exterior',
      label: '外装カタログ',
      description: '外装商品を閲覧',
      icon: <Package className="w-4 h-4" />,
      action: () => onNavigate?.('/catalog/exterior'),
      category: 'navigation',
    },
    {
      id: 'interior',
      label: '内装カタログ',
      description: '内装商品を閲覧',
      icon: <Package className="w-4 h-4" />,
      action: () => onNavigate?.('/catalog/interior'),
      category: 'navigation',
    },
    {
      id: 'water',
      label: '水廻りカタログ',
      description: '水廻り商品を閲覧',
      icon: <Package className="w-4 h-4" />,
      action: () => onNavigate?.('/catalog/water'),
      category: 'navigation',
    },
    {
      id: 'export-pdf',
      label: 'PDF出力',
      description: '見積書をPDFで出力',
      icon: <FileText className="w-4 h-4" />,
      shortcut: '⌘ P',
      action: () => onExportPDF?.(),
      category: 'action',
    },
    {
      id: 'print',
      label: '印刷',
      description: '現在の画面を印刷',
      icon: <Printer className="w-4 h-4" />,
      shortcut: '⌘ ⇧ P',
      action: () => window.print(),
      category: 'action',
    },
    {
      id: 'admin',
      label: '管理画面',
      description: '管理ダッシュボードを開く',
      icon: <BarChart3 className="w-4 h-4" />,
      shortcut: 'G A',
      action: () => onNavigate?.('/admin'),
      category: 'navigation',
    },
    {
      id: 'settings',
      label: '設定',
      description: 'システム設定を開く',
      icon: <Settings className="w-4 h-4" />,
      action: () => onNavigate?.('/admin?tab=system'),
      category: 'settings',
    },
    {
      id: 'dark-mode',
      label: isDarkMode ? 'ライトモード' : 'ダークモード',
      description: '表示モードを切り替え',
      icon: isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />,
      shortcut: '⌘ D',
      action: () => onToggleDarkMode?.(),
      category: 'settings',
    },
    {
      id: 'help',
      label: 'ヘルプ',
      description: '使い方ガイドを表示',
      icon: <HelpCircle className="w-4 h-4" />,
      shortcut: '?',
      action: () => {
        // ヘルプモーダルを開く
        const event = new CustomEvent('open-help');
        window.dispatchEvent(event);
      },
      category: 'settings',
    },
  ];

  // フィルタリングされたアクション
  const filteredActions = actions.filter((action) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      action.label.toLowerCase().includes(query) ||
      action.description.toLowerCase().includes(query)
    );
  });

  // キーボードショートカット: Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // ダイアログが開いたときにフォーカス
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setSelectedIndex(0);
      // 少し遅延させてフォーカス
      globalThis.setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // キーボードナビゲーション
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredActions.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredActions[selectedIndex]) {
            filteredActions[selectedIndex].action();
            setIsOpen(false);
          }
          break;
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          break;
      }
    },
    [filteredActions, selectedIndex]
  );

  const handleActionClick = useCallback(
    (action: QuickAction) => {
      action.action();
      setIsOpen(false);
    },
    []
  );

  return (
    <>
      {/* トリガーボタン（任意） */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-500 hover:bg-gray-200:bg-gray-600 transition-colors"
        aria-label="クイックアクションを開く"
      >
        <Search className="w-4 h-4" />
        <span className="text-xs">検索...</span>
        <kbd className="hidden lg:flex items-center gap-0.5 px-1.5 py-0.5 bg-white rounded text-xs border border-gray-200">
          <Command className="w-3 h-3" />
          <span>K</span>
        </kbd>
      </button>

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm" />
          <Dialog.Content className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[95vw] max-w-xl bg-white rounded-2xl shadow-2xl z-[101] overflow-hidden">
            {/* 検索入力 */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-100">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="アクションを検索..."
                className="flex-1 bg-transparent text-gray-900 placeholder-gray-400 outline-none text-lg"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100:bg-gray-700 rounded"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* アクションリスト */}
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {filteredActions.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <Search className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>該当するアクションがありません</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {/* ナビゲーション */}
                  {filteredActions.some((a) => a.category === 'navigation') && (
                    <>
                      <div className="px-3 py-2 text-xs font-medium text-gray-400 uppercase">
                        ナビゲーション
                      </div>
                      {filteredActions
                        .filter((a) => a.category === 'navigation')
                        .map((action) => {
                          const globalIndex = filteredActions.indexOf(action);
                          return (
                            <button
                              key={action.id}
                              onClick={() => handleActionClick(action)}
                              onMouseEnter={() => setSelectedIndex(globalIndex)}
                              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                                selectedIndex === globalIndex
                                  ? 'bg-blue-50 text-blue-700'
                                  : 'text-gray-700 hover:bg-gray-50:bg-gray-700'
                              }`}
                            >
                              <div className={`p-1.5 rounded-lg ${
                                selectedIndex === globalIndex
                                  ? 'bg-blue-100 text-blue-600'
                                  : 'bg-gray-100 text-gray-500'
                              }`}>
                                {action.icon}
                              </div>
                              <div className="flex-1 text-left">
                                <div className="font-medium">{action.label}</div>
                                <div className="text-xs text-gray-500">
                                  {action.description}
                                </div>
                              </div>
                              {action.shortcut && (
                                <kbd className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-500">
                                  {action.shortcut}
                                </kbd>
                              )}
                            </button>
                          );
                        })}
                    </>
                  )}

                  {/* アクション */}
                  {filteredActions.some((a) => a.category === 'action') && (
                    <>
                      <div className="px-3 py-2 text-xs font-medium text-gray-400 uppercase mt-2">
                        アクション
                      </div>
                      {filteredActions
                        .filter((a) => a.category === 'action')
                        .map((action) => {
                          const globalIndex = filteredActions.indexOf(action);
                          return (
                            <button
                              key={action.id}
                              onClick={() => handleActionClick(action)}
                              onMouseEnter={() => setSelectedIndex(globalIndex)}
                              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                                selectedIndex === globalIndex
                                  ? 'bg-blue-50 text-blue-700'
                                  : 'text-gray-700 hover:bg-gray-50:bg-gray-700'
                              }`}
                            >
                              <div className={`p-1.5 rounded-lg ${
                                selectedIndex === globalIndex
                                  ? 'bg-blue-100 text-blue-600'
                                  : 'bg-gray-100 text-gray-500'
                              }`}>
                                {action.icon}
                              </div>
                              <div className="flex-1 text-left">
                                <div className="font-medium">{action.label}</div>
                                <div className="text-xs text-gray-500">
                                  {action.description}
                                </div>
                              </div>
                              {action.shortcut && (
                                <kbd className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-500">
                                  {action.shortcut}
                                </kbd>
                              )}
                            </button>
                          );
                        })}
                    </>
                  )}

                  {/* 設定 */}
                  {filteredActions.some((a) => a.category === 'settings') && (
                    <>
                      <div className="px-3 py-2 text-xs font-medium text-gray-400 uppercase mt-2">
                        設定
                      </div>
                      {filteredActions
                        .filter((a) => a.category === 'settings')
                        .map((action) => {
                          const globalIndex = filteredActions.indexOf(action);
                          return (
                            <button
                              key={action.id}
                              onClick={() => handleActionClick(action)}
                              onMouseEnter={() => setSelectedIndex(globalIndex)}
                              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                                selectedIndex === globalIndex
                                  ? 'bg-blue-50 text-blue-700'
                                  : 'text-gray-700 hover:bg-gray-50:bg-gray-700'
                              }`}
                            >
                              <div className={`p-1.5 rounded-lg ${
                                selectedIndex === globalIndex
                                  ? 'bg-blue-100 text-blue-600'
                                  : 'bg-gray-100 text-gray-500'
                              }`}>
                                {action.icon}
                              </div>
                              <div className="flex-1 text-left">
                                <div className="font-medium">{action.label}</div>
                                <div className="text-xs text-gray-500">
                                  {action.description}
                                </div>
                              </div>
                              {action.shortcut && (
                                <kbd className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-500">
                                  {action.shortcut}
                                </kbd>
                              )}
                            </button>
                          );
                        })}
                    </>
                  )}
                </div>
              )}
            </div>

            {/* フッター */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 bg-gray-50">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white rounded border border-gray-200">↑↓</kbd>
                  移動
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white rounded border border-gray-200">Enter</kbd>
                  選択
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white rounded border border-gray-200">Esc</kbd>
                  閉じる
                </span>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default QuickActions;

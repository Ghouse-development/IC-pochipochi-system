import { useEffect, useCallback } from 'react';

interface ShortcutConfig {
  key: string;
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  action: () => void;
  description: string;
}

// グローバルショートカット定義
export const GLOBAL_SHORTCUTS: ShortcutConfig[] = [
  { key: '/', action: () => {}, description: '検索にフォーカス' },
  { key: 'Escape', action: () => {}, description: 'モーダルを閉じる' },
  { key: 'c', ctrl: true, action: () => {}, description: 'カートを開く' },
  { key: '1', alt: true, action: () => {}, description: '外装タブ' },
  { key: '2', alt: true, action: () => {}, description: '内装タブ' },
  { key: '3', alt: true, action: () => {}, description: '設備タブ' },
  { key: 's', ctrl: true, action: () => {}, description: '選択を保存' },
  { key: 'p', ctrl: true, action: () => {}, description: 'PDF出力' },
  { key: '?', shift: true, action: () => {}, description: 'ヘルプを表示' },
];

interface UseKeyboardShortcutsOptions {
  onSearch?: () => void;
  onEscape?: () => void;
  onOpenCart?: () => void;
  onTabChange?: (tab: 'exterior' | 'interior' | 'equipment') => void;
  onSave?: () => void;
  onExportPdf?: () => void;
  onHelp?: () => void;
  enabled?: boolean;
}

export const useKeyboardShortcuts = (options: UseKeyboardShortcutsOptions) => {
  const {
    onSearch,
    onEscape,
    onOpenCart,
    onTabChange,
    onSave,
    onExportPdf,
    onHelp,
    enabled = true,
  } = options;

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!enabled) return;

    // 入力フィールドでは無視（特定のショートカットを除く）
    const isInputFocused = ['INPUT', 'TEXTAREA', 'SELECT'].includes(
      (e.target as HTMLElement).tagName
    );

    // Escapeは常に有効
    if (e.key === 'Escape') {
      e.preventDefault();
      onEscape?.();
      return;
    }

    // 入力中は他のショートカットを無効化
    if (isInputFocused && !e.ctrlKey && !e.altKey) return;

    // 検索 (/)
    if (e.key === '/' && !e.ctrlKey && !e.altKey) {
      e.preventDefault();
      onSearch?.();
      return;
    }

    // カートを開く (Ctrl+C) - ただしコピーと競合しないよう注意
    if (e.key === 'c' && e.ctrlKey && !e.shiftKey && !isInputFocused) {
      e.preventDefault();
      onOpenCart?.();
      return;
    }

    // タブ切替 (Alt+1/2/3)
    if (e.altKey && ['1', '2', '3'].includes(e.key)) {
      e.preventDefault();
      const tabs: ('exterior' | 'interior' | 'equipment')[] = ['exterior', 'interior', 'equipment'];
      onTabChange?.(tabs[parseInt(e.key) - 1]);
      return;
    }

    // 保存 (Ctrl+S)
    if (e.key === 's' && e.ctrlKey) {
      e.preventDefault();
      onSave?.();
      return;
    }

    // PDF出力 (Ctrl+P)
    if (e.key === 'p' && e.ctrlKey) {
      e.preventDefault();
      onExportPdf?.();
      return;
    }

    // ヘルプ (Shift+?)
    if (e.key === '?' && e.shiftKey) {
      e.preventDefault();
      onHelp?.();
      return;
    }
  }, [enabled, onSearch, onEscape, onOpenCart, onTabChange, onSave, onExportPdf, onHelp]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return {
    shortcuts: GLOBAL_SHORTCUTS,
  };
};

// ショートカット一覧表示コンポーネント用データ
export const getShortcutsList = (): { category: string; shortcuts: { keys: string; description: string }[] }[] => {
  return [
    {
      category: 'ナビゲーション',
      shortcuts: [
        { keys: '/', description: '検索にフォーカス' },
        { keys: 'Alt + 1', description: '外装タブに移動' },
        { keys: 'Alt + 2', description: '内装タブに移動' },
        { keys: 'Alt + 3', description: '設備タブに移動' },
        { keys: 'Esc', description: 'モーダルを閉じる' },
      ],
    },
    {
      category: 'アクション',
      shortcuts: [
        { keys: 'Ctrl + C', description: 'カートを開く' },
        { keys: 'Ctrl + S', description: '選択を保存' },
        { keys: 'Ctrl + P', description: 'PDF出力' },
      ],
    },
    {
      category: 'ヘルプ',
      shortcuts: [
        { keys: 'Shift + ?', description: 'ショートカット一覧' },
      ],
    },
  ];
};

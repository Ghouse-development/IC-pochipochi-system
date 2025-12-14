/**
 * キーボードショートカットヘルプモーダル
 */
import React from 'react';
import { X, Keyboard } from 'lucide-react';
import { getShortcutsList } from '../../hooks/useKeyboardShortcuts';

interface ShortcutHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShortcutHelpModal: React.FC<ShortcutHelpModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const shortcutCategories = getShortcutsList();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="shortcut-help-title"
    >
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h2
            id="shortcut-help-title"
            className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2"
          >
            <Keyboard className="w-5 h-5 text-blue-500" />
            キーボードショートカット
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="閉じる"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[calc(80vh-120px)]">
          <div className="space-y-6">
            {shortcutCategories.map((category) => (
              <div key={category.category}>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.shortcuts.map((shortcut) => (
                    <div
                      key={shortcut.keys}
                      className="flex items-center justify-between py-2 px-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {shortcut.description}
                      </span>
                      <kbd className="px-2 py-1 text-xs font-mono bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded shadow-sm text-gray-800 dark:text-gray-200">
                        {shortcut.keys}
                      </kbd>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">
              ヒント
            </h4>
            <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
              <li>• Mac では Ctrl の代わりに ⌘ (Command) を使用できます</li>
              <li>• 入力フィールドにフォーカス中は一部のショートカットが無効になります</li>
              <li>• Shift + ? でいつでもこのヘルプを表示できます</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};

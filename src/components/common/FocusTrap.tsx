/**
 * フォーカストラップコンポーネント
 * モーダル内でのキーボードフォーカスを制限
 */
import React, { useEffect, useRef, useCallback } from 'react';

interface FocusTrapProps {
  children: React.ReactNode;
  active?: boolean;
  returnFocus?: boolean;
  initialFocus?: React.RefObject<HTMLElement>;
  className?: string;
}

// フォーカス可能な要素のセレクター
const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable]',
].join(', ');

export const FocusTrap: React.FC<FocusTrapProps> = ({
  children,
  active = true,
  returnFocus = true,
  initialFocus,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<Element | null>(null);

  // フォーカス可能な要素を取得
  const getFocusableElements = useCallback(() => {
    if (!containerRef.current) return [];
    return Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
    ).filter((el) => {
      // 非表示要素を除外
      const style = window.getComputedStyle(el);
      return style.display !== 'none' && style.visibility !== 'hidden';
    });
  }, []);

  // 初期フォーカスの設定
  useEffect(() => {
    if (!active) return;

    // 現在のフォーカス要素を保存
    previousActiveElement.current = document.activeElement;

    // 初期フォーカスを設定
    const setInitialFocus = () => {
      if (initialFocus?.current) {
        initialFocus.current.focus();
      } else {
        const focusableElements = getFocusableElements();
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        } else {
          // フォーカス可能な要素がない場合はコンテナにフォーカス
          containerRef.current?.focus();
        }
      }
    };

    // 少し遅延させてDOMの更新を待つ
    const timeoutId = setTimeout(setInitialFocus, 10);

    return () => {
      clearTimeout(timeoutId);

      // フォーカスを元の要素に戻す
      if (returnFocus && previousActiveElement.current instanceof HTMLElement) {
        previousActiveElement.current.focus();
      }
    };
  }, [active, initialFocus, returnFocus, getFocusableElements]);

  // キーボードイベントの処理
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!active || e.key !== 'Tab') return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) {
        e.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement as HTMLElement;

      if (e.shiftKey) {
        // Shift+Tab: 最初の要素から最後へ
        if (activeElement === firstElement || !focusableElements.includes(activeElement)) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab: 最後の要素から最初へ
        if (activeElement === lastElement || !focusableElements.includes(activeElement)) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    },
    [active, getFocusableElements]
  );

  // 外部からのフォーカス移動を防ぐ
  useEffect(() => {
    if (!active) return;

    const handleFocusIn = (e: FocusEvent) => {
      if (
        containerRef.current &&
        e.target instanceof Node &&
        !containerRef.current.contains(e.target)
      ) {
        e.preventDefault();
        const focusableElements = getFocusableElements();
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    return () => document.removeEventListener('focusin', handleFocusIn);
  }, [active, getFocusableElements]);

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      className={className}
      tabIndex={-1}
    >
      {children}
    </div>
  );
};

// フォーカス管理のユーティリティフック
export function useFocusManagement() {
  const savedFocusRef = useRef<HTMLElement | null>(null);

  const saveFocus = useCallback(() => {
    savedFocusRef.current = document.activeElement as HTMLElement;
  }, []);

  const restoreFocus = useCallback(() => {
    if (savedFocusRef.current) {
      savedFocusRef.current.focus();
      savedFocusRef.current = null;
    }
  }, []);

  const moveFocusTo = useCallback((element: HTMLElement | null) => {
    if (element) {
      element.focus();
    }
  }, []);

  const moveFocusToFirst = useCallback((container: HTMLElement | null) => {
    if (!container) return;
    const focusable = container.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
    if (focusable) {
      focusable.focus();
    }
  }, []);

  return {
    saveFocus,
    restoreFocus,
    moveFocusTo,
    moveFocusToFirst,
  };
}

// スキップリンクコンポーネント
interface SkipLinkProps {
  targetId: string;
  children?: React.ReactNode;
}

export const SkipLink: React.FC<SkipLinkProps> = ({
  targetId,
  children = 'メインコンテンツへスキップ',
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.tabIndex = -1;
      target.focus();
      target.scrollIntoView();
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg"
    >
      {children}
    </a>
  );
};

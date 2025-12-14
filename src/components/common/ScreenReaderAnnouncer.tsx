/**
 * スクリーンリーダー向けアナウンスコンポーネント
 * 動的なコンテンツ変更を支援技術に通知
 */
import React, { createContext, useContext, useCallback, useState, useRef } from 'react';

type Politeness = 'polite' | 'assertive' | 'off';

interface AnnouncerContextValue {
  announce: (message: string, politeness?: Politeness) => void;
  announcePolite: (message: string) => void;
  announceAssertive: (message: string) => void;
}

const AnnouncerContext = createContext<AnnouncerContextValue | null>(null);

export function useAnnouncer(): AnnouncerContextValue {
  const context = useContext(AnnouncerContext);
  if (!context) {
    throw new Error('useAnnouncer must be used within an AnnouncerProvider');
  }
  return context;
}

interface AnnouncerProviderProps {
  children: React.ReactNode;
}

export const AnnouncerProvider: React.FC<AnnouncerProviderProps> = ({ children }) => {
  const [politeAnnouncement, setPoliteAnnouncement] = useState('');
  const [assertiveAnnouncement, setAssertiveAnnouncement] = useState('');
  const idRef = useRef(0);

  const announce = useCallback((message: string, politeness: Politeness = 'polite') => {
    const id = ++idRef.current;

    if (politeness === 'polite') {
      // 空にしてから設定することでスクリーンリーダーが再度読み上げる
      setPoliteAnnouncement('');
      setTimeout(() => setPoliteAnnouncement(message), 50);
    } else if (politeness === 'assertive') {
      setAssertiveAnnouncement('');
      setTimeout(() => setAssertiveAnnouncement(message), 50);
    }

    // メッセージをクリア（次のアナウンスのため）
    setTimeout(() => {
      if (idRef.current === id) {
        if (politeness === 'polite') {
          setPoliteAnnouncement('');
        } else if (politeness === 'assertive') {
          setAssertiveAnnouncement('');
        }
      }
    }, 1000);
  }, []);

  const announcePolite = useCallback(
    (message: string) => announce(message, 'polite'),
    [announce]
  );

  const announceAssertive = useCallback(
    (message: string) => announce(message, 'assertive'),
    [announce]
  );

  return (
    <AnnouncerContext.Provider value={{ announce, announcePolite, announceAssertive }}>
      {children}

      {/* Polite region - 現在のタスクを中断しない */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {politeAnnouncement}
      </div>

      {/* Assertive region - 即座に読み上げ */}
      <div
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        className="sr-only"
      >
        {assertiveAnnouncement}
      </div>
    </AnnouncerContext.Provider>
  );
};

// よく使うアナウンスのユーティリティフック
export function useFormAnnouncements() {
  const { announcePolite, announceAssertive } = useAnnouncer();

  return {
    announceValidationError: (fieldName: string, error: string) => {
      announceAssertive(`${fieldName}のエラー: ${error}`);
    },
    announceSuccess: (message: string) => {
      announcePolite(message);
    },
    announceLoading: (action: string) => {
      announcePolite(`${action}しています...`);
    },
    announceComplete: (action: string) => {
      announcePolite(`${action}が完了しました`);
    },
  };
}

// カート操作のアナウンス
export function useCartAnnouncements() {
  const { announcePolite } = useAnnouncer();

  return {
    announceItemAdded: (itemName: string) => {
      announcePolite(`${itemName}をカートに追加しました`);
    },
    announceItemRemoved: (itemName: string) => {
      announcePolite(`${itemName}をカートから削除しました`);
    },
    announceCartCleared: () => {
      announcePolite('カートを空にしました');
    },
    announceQuantityChanged: (itemName: string, quantity: number) => {
      announcePolite(`${itemName}の数量を${quantity}に変更しました`);
    },
  };
}

// ナビゲーションのアナウンス
export function useNavigationAnnouncements() {
  const { announcePolite } = useAnnouncer();

  return {
    announcePageChange: (pageName: string) => {
      announcePolite(`${pageName}ページに移動しました`);
    },
    announceTabChange: (tabName: string) => {
      announcePolite(`${tabName}タブを選択しました`);
    },
    announceModalOpened: (modalTitle: string) => {
      announcePolite(`${modalTitle}ダイアログが開きました`);
    },
    announceModalClosed: () => {
      announcePolite('ダイアログを閉じました');
    },
  };
}

// 検索結果のアナウンス
export function useSearchAnnouncements() {
  const { announcePolite } = useAnnouncer();

  return {
    announceResults: (count: number, query: string) => {
      if (count === 0) {
        announcePolite(`「${query}」の検索結果はありません`);
      } else {
        announcePolite(`「${query}」で${count}件見つかりました`);
      }
    },
    announceFilterApplied: (filterName: string) => {
      announcePolite(`${filterName}フィルターを適用しました`);
    },
    announceFilterCleared: () => {
      announcePolite('フィルターをクリアしました');
    },
  };
}

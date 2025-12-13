import { useMemo, useCallback } from 'react';
import { useCartStore } from '../stores/useCartStore';

// 選択情報をURLに変換
interface ShareableState {
  planId: string;
  items: Array<{
    productId: string;
    variantId: string;
    quantity: number;
  }>;
}

// 圧縮用のBase64エンコード
const encodeState = (state: ShareableState): string => {
  try {
    const json = JSON.stringify(state);
    return btoa(unescape(encodeURIComponent(json)));
  } catch {
    return '';
  }
};

// Base64デコード
const decodeState = (encoded: string): ShareableState | null => {
  try {
    const json = decodeURIComponent(escape(atob(encoded)));
    return JSON.parse(json);
  } catch {
    return null;
  }
};

export const useShareableUrl = () => {
  const { items, selectedPlanId } = useCartStore();

  // 現在の選択状態からURLを生成
  const shareableUrl = useMemo(() => {
    if (items.length === 0) return null;

    const state: ShareableState = {
      planId: selectedPlanId || 'LACIE',
      items: items.map(item => ({
        productId: item.product.id,
        variantId: item.selectedVariant?.id || '',
        quantity: item.quantity,
      })),
    };

    const encoded = encodeState(state);
    if (!encoded) return null;

    const url = new URL(window.location.href);
    url.searchParams.set('share', encoded);
    return url.toString();
  }, [items, selectedPlanId]);

  // 短縮URL用のハッシュを生成（将来のDB保存用）
  const shareHash = useMemo(() => {
    if (items.length === 0) return null;

    const state: ShareableState = {
      planId: selectedPlanId || 'LACIE',
      items: items.map(item => ({
        productId: item.product.id,
        variantId: item.selectedVariant?.id || '',
        quantity: item.quantity,
      })),
    };

    // 簡易ハッシュ生成
    const str = JSON.stringify(state);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(36).substring(0, 8);
  }, [items, selectedPlanId]);

  // URLからの状態復元
  const restoreFromUrl = useCallback(() => {
    const url = new URL(window.location.href);
    const encoded = url.searchParams.get('share');

    if (!encoded) return null;

    const state = decodeState(encoded);
    if (!state) return null;

    return state;
  }, []);

  // クリップボードにコピー
  const copyToClipboard = useCallback(async () => {
    if (!shareableUrl) return false;

    try {
      await navigator.clipboard.writeText(shareableUrl);
      return true;
    } catch {
      // フォールバック
      const textarea = document.createElement('textarea');
      textarea.value = shareableUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return true;
    }
  }, [shareableUrl]);

  // LINEでシェア
  const shareToLine = useCallback(() => {
    if (!shareableUrl) return;
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareableUrl)}`;
    window.open(lineUrl, '_blank', 'width=600,height=400');
  }, [shareableUrl]);

  // メールでシェア
  const shareByEmail = useCallback((subject: string = '住宅仕様の共有') => {
    if (!shareableUrl) return;
    const body = `以下のリンクから選択した住宅仕様をご確認いただけます。\n\n${shareableUrl}`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }, [shareableUrl]);

  // QRコード用データ（外部ライブラリで使用）
  const qrCodeData = shareableUrl;

  return {
    shareableUrl,
    shareHash,
    restoreFromUrl,
    copyToClipboard,
    shareToLine,
    shareByEmail,
    qrCodeData,
  };
};

// シェアモーダル用のコンポーネント
export const ShareButton: React.FC<{ className?: string }> = () => {
  return null; // 別ファイルで実装
};

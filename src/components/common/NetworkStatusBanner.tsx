/**
 * ネットワーク状態表示バナー
 * オフライン・再接続の通知を表示
 */
import React, { useEffect, useState } from 'react';
import { WifiOff, Wifi, RefreshCw, X } from 'lucide-react';
import { useNetworkStatus } from '../../hooks/useNetworkStatus';

interface NetworkStatusBannerProps {
  position?: 'top' | 'bottom';
  showReconnectButton?: boolean;
}

export const NetworkStatusBanner: React.FC<NetworkStatusBannerProps> = ({
  position = 'bottom',
  showReconnectButton = true,
}) => {
  const {
    isOnline,
    wasOffline,
    forceCheck,
    effectiveType,
  } = useNetworkStatus();

  const [isChecking, setIsChecking] = useState(false);
  const [showReconnected, setShowReconnected] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // 再接続時のメッセージ表示
  useEffect(() => {
    if (isOnline && wasOffline) {
      setShowReconnected(true);
      setDismissed(false);
      const timer = setTimeout(() => {
        setShowReconnected(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOnline, wasOffline]);

  // オフラインになったら dismissed をリセット
  useEffect(() => {
    if (!isOnline) {
      setDismissed(false);
    }
  }, [isOnline]);

  const handleRetry = async () => {
    setIsChecking(true);
    await forceCheck();
    setIsChecking(false);
  };

  // オンラインで特に表示するものがない場合
  if (isOnline && !showReconnected) {
    return null;
  }

  // ユーザーが閉じた場合
  if (dismissed && isOnline) {
    return null;
  }

  const positionClasses = position === 'top'
    ? 'top-0 left-0 right-0'
    : 'bottom-0 left-0 right-0';

  // 再接続メッセージ
  if (showReconnected && isOnline) {
    return (
      <div className={`fixed ${positionClasses} z-50 p-2`}>
        <div className="max-w-md mx-auto bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center justify-between animate-slide-up">
          <div className="flex items-center gap-3">
            <Wifi className="w-5 h-5" />
            <span className="font-medium">オンラインに復帰しました</span>
          </div>
          <button
            onClick={() => setShowReconnected(false)}
            className="p-1 hover:bg-green-600 rounded transition-colors"
            aria-label="閉じる"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // オフラインメッセージ
  if (!isOnline) {
    return (
      <div className={`fixed ${positionClasses} z-50 p-2`}>
        <div className="max-w-md mx-auto bg-amber-500 text-white px-4 py-3 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <WifiOff className="w-5 h-5" />
              <div>
                <span className="font-medium">オフラインです</span>
                <p className="text-xs text-amber-100 mt-0.5">
                  一部の機能が制限されています
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {showReconnectButton && (
                <button
                  onClick={handleRetry}
                  disabled={isChecking}
                  className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 rounded text-sm font-medium transition-colors disabled:opacity-50 flex items-center gap-1"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isChecking ? 'animate-spin' : ''}`} />
                  再接続
                </button>
              )}
              <button
                onClick={() => setDismissed(true)}
                className="p-1 hover:bg-amber-600 rounded transition-colors"
                aria-label="閉じる"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 接続タイプ表示（低速接続の場合） */}
          {effectiveType && ['slow-2g', '2g'].includes(effectiveType) && (
            <div className="mt-2 pt-2 border-t border-amber-400 text-xs text-amber-100">
              低速接続を検出しました。読み込みに時間がかかる場合があります。
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};

// アニメーション用スタイル（Tailwind CSSに追加するか、style属性で使用）
const style = `
  @keyframes slide-up {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .animate-slide-up {
    animation: slide-up 0.3s ease-out;
  }
`;

// スタイルを動的に追加
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = style;
  document.head.appendChild(styleElement);
}

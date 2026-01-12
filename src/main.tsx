import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initSentry } from './lib/sentry'
import { initWebVitals } from './lib/webVitals'
import { getCsrfToken } from './lib/csrf'

// キャッシュバージョン管理（破壊的変更時にインクリメント）
const CACHE_VERSION = 'v2';
const CACHE_VERSION_KEY = 'ic-cache-version';

// 古いキャッシュをクリア
const clearOldCache = () => {
  const storedVersion = localStorage.getItem(CACHE_VERSION_KEY);
  if (storedVersion !== CACHE_VERSION) {
    // 全てのアプリ関連キャッシュをクリア
    const keysToRemove = [
      'lifex-products-storage',
      'ic-cart-storage',
      'ic-pochipochi-selections',
      'ic-pochipochi-projects',
      'ic-favorites-storage',
      'ic-recently-viewed-storage',
      'floor-plan-storage',
      'ic-operation-log-storage',
    ];
    keysToRemove.forEach(key => localStorage.removeItem(key));
    localStorage.setItem(CACHE_VERSION_KEY, CACHE_VERSION);
  }
};

// アプリ起動前にキャッシュチェック
clearOldCache();

// Sentry初期化（エラー追跡）
initSentry();

// Web Vitals計測開始
initWebVitals();

// CSRFトークン初期化
getCsrfToken();

// Service Worker登録（PWA対応）
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });

      // 更新チェック
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // 新しいバージョンが利用可能
              console.log('[PWA] 新しいバージョンが利用可能です');
              // 更新通知を表示（ユーザーにリロードを促す）
              if (window.confirm('新しいバージョンが利用可能です。更新しますか？')) {
                window.location.reload();
              }
            }
          });
        }
      });

      console.log('[PWA] Service Worker登録成功:', registration.scope);

      // バックグラウンド同期サポートチェック
      if ('sync' in registration) {
        console.log('[PWA] バックグラウンド同期サポート: 有効');
      }

      // プッシュ通知サポートチェック
      if ('pushManager' in registration) {
        console.log('[PWA] プッシュ通知サポート: 有効');
      }
    } catch (error) {
      console.error('[PWA] Service Worker登録失敗:', error);
    }
  }
};

// Service Workerからのメッセージ処理
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data.type === 'OFFLINE_REQUEST_QUEUED') {
      console.log('[PWA] オフラインリクエストをキューに追加:', event.data.url);
    }
  });
}

// DOMContentLoaded後にService Worker登録
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', registerServiceWorker);
} else {
  registerServiceWorker();
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} else {
  console.error('Failed to find root element. Check index.html for element with id="root"');
}

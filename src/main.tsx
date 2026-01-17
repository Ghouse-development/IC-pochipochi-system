import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initSentry } from './lib/sentry'
import { initWebVitals } from './lib/webVitals'
import { getCsrfToken } from './lib/csrf'

// キャッシュバージョン管理（破壊的変更時にインクリメント）
const CACHE_VERSION = 'v4';  // v4: Supabase認証キャッシュクリア追加
const CACHE_VERSION_KEY = 'ic-cache-version';

// 古いキャッシュをクリア
const clearOldCache = () => {
  const storedVersion = localStorage.getItem(CACHE_VERSION_KEY);
  if (storedVersion !== CACHE_VERSION) {
    console.log('[Cache] Clearing old cache, upgrading from', storedVersion, 'to', CACHE_VERSION);

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

    // Supabase認証キャッシュもクリア（古いセッション問題の解決）
    const supabaseKeys = Object.keys(localStorage).filter(key =>
      key.startsWith('sb-') || key.includes('supabase')
    );
    supabaseKeys.forEach(key => {
      console.log('[Cache] Removing Supabase key:', key);
      localStorage.removeItem(key);
    });

    localStorage.setItem(CACHE_VERSION_KEY, CACHE_VERSION);
    console.log('[Cache] Cache cleared, version updated to', CACHE_VERSION);
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

// Service Worker削除（キャッシュ問題の根本解決）
// PWA機能は安定するまで無効化
const unregisterServiceWorkers = async () => {
  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    for (const registration of registrations) {
      await registration.unregister();
    }
    // キャッシュも全削除
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map(name => caches.delete(name)));
    }
  }
};

// 起動時にService Workerを削除
unregisterServiceWorkers();

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

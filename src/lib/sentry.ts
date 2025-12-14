/**
 * Sentry Error Tracking Configuration
 * 本番環境でのエラー追跡・監視
 */
import * as Sentry from '@sentry/react';

// Sentry DSNは環境変数から取得（本番環境で設定）
const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;

export function initSentry() {
  // DSNが設定されていない場合はスキップ（開発環境）
  if (!SENTRY_DSN) {
    console.info('[Sentry] DSN not configured, skipping initialization');
    return;
  }

  Sentry.init({
    dsn: SENTRY_DSN,
    environment: import.meta.env.MODE,

    // パフォーマンス監視
    tracesSampleRate: import.meta.env.PROD ? 0.1 : 1.0,

    // セッションリプレイ（本番のみ）
    replaysSessionSampleRate: import.meta.env.PROD ? 0.1 : 0,
    replaysOnErrorSampleRate: import.meta.env.PROD ? 1.0 : 0,

    // リリース情報
    release: `ic-pochipochi@${import.meta.env.VITE_APP_VERSION || '1.0.0'}`,

    // 無視するエラー
    ignoreErrors: [
      // ネットワークエラー
      'Network request failed',
      'Failed to fetch',
      'Load failed',
      // ブラウザ拡張機能
      'ResizeObserver loop',
      // キャンセルされたリクエスト
      'AbortError',
    ],

    // 送信前の処理
    beforeSend(event, _hint) {
      // 開発環境ではコンソールに出力のみ
      if (import.meta.env.DEV) {
        console.error('[Sentry] Would send event:', event);
        return null;
      }

      // ユーザー情報を追加（ログイン中の場合）
      const userId = localStorage.getItem('userId');
      if (userId) {
        event.user = { id: userId };
      }

      return event;
    },

    // パンくずリスト設定
    beforeBreadcrumb(breadcrumb) {
      // XHRリクエストのURLをマスク
      if (breadcrumb.category === 'xhr' && breadcrumb.data?.url) {
        const url = new URL(breadcrumb.data.url);
        if (url.searchParams.has('apikey')) {
          url.searchParams.set('apikey', '[FILTERED]');
          breadcrumb.data.url = url.toString();
        }
      }
      return breadcrumb;
    },
  });
}

// エラーキャプチャユーティリティ
export function captureError(error: Error, context?: Record<string, unknown>) {
  Sentry.captureException(error, {
    extra: context,
  });
}

// メッセージキャプチャ
export function captureMessage(message: string, level: Sentry.SeverityLevel = 'info') {
  Sentry.captureMessage(message, level);
}

// ユーザー設定
export function setUser(user: { id: string; email?: string; role?: string } | null) {
  if (user) {
    Sentry.setUser(user);
  } else {
    Sentry.setUser(null);
  }
}

// スコープにタグ追加
export function setTag(key: string, value: string) {
  Sentry.setTag(key, value);
}

// エラーバウンダリコンポーネント
export const SentryErrorBoundary = Sentry.ErrorBoundary;

export default Sentry;

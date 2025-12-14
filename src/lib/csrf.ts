/**
 * CSRF対策ユーティリティ
 *
 * Supabaseはセッションベースではなく、JWTトークンベースの認証を使用しているため
 * 従来のCSRF脆弱性リスクは低いが、追加の保護層として以下を実装:
 * - CSRFトークンの生成・検証
 * - Originヘッダーの検証
 * - 状態変更リクエストの保護
 */

// CSRFトークン格納用キー
const CSRF_TOKEN_KEY = 'csrf_token';
const CSRF_TOKEN_HEADER = 'X-CSRF-Token';

/**
 * CSRFトークンを生成
 */
export function generateCsrfToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  const token = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');

  // セッションストレージに保存（タブごとに独立）
  sessionStorage.setItem(CSRF_TOKEN_KEY, token);

  return token;
}

/**
 * 現在のCSRFトークンを取得（なければ生成）
 */
export function getCsrfToken(): string {
  let token = sessionStorage.getItem(CSRF_TOKEN_KEY);
  if (!token) {
    token = generateCsrfToken();
  }
  return token;
}

/**
 * CSRFトークンを検証
 */
export function validateCsrfToken(token: string): boolean {
  const storedToken = sessionStorage.getItem(CSRF_TOKEN_KEY);
  if (!storedToken || !token) {
    return false;
  }

  // タイミング攻撃を防ぐため、一定時間で比較
  if (token.length !== storedToken.length) {
    return false;
  }

  let result = 0;
  for (let i = 0; i < token.length; i++) {
    result |= token.charCodeAt(i) ^ storedToken.charCodeAt(i);
  }

  return result === 0;
}

/**
 * CSRFトークンをリフレッシュ
 */
export function refreshCsrfToken(): string {
  return generateCsrfToken();
}

/**
 * 許可されたオリジンのリスト
 */
const ALLOWED_ORIGINS = [
  'https://ic-pochipochi-system.vercel.app',
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
];

/**
 * Originヘッダーを検証
 */
export function validateOrigin(origin: string | null): boolean {
  if (!origin) {
    // 同一オリジンリクエストはoriginヘッダーがない場合がある
    return true;
  }

  // 本番環境の場合は厳格にチェック
  if (import.meta.env.PROD) {
    return ALLOWED_ORIGINS.includes(origin);
  }

  // 開発環境ではlocalhostを許可
  return origin.startsWith('http://localhost:') ||
         origin.startsWith('http://127.0.0.1:') ||
         ALLOWED_ORIGINS.includes(origin);
}

/**
 * CSRFヘッダーを含むfetchラッパー
 */
export async function secureFetch(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  const headers = new Headers(options.headers);

  // 状態変更リクエストにCSRFトークンを追加
  const method = options.method?.toUpperCase() || 'GET';
  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
    headers.set(CSRF_TOKEN_HEADER, getCsrfToken());
  }

  return fetch(url, {
    ...options,
    headers,
    credentials: 'same-origin', // クッキーを同一オリジンのみに制限
  });
}

/**
 * フォームにCSRFトークンを挿入するためのhidden input値
 */
export function getCsrfInputValue(): { name: string; value: string } {
  return {
    name: '_csrf',
    value: getCsrfToken(),
  };
}

/**
 * CSRFトークン検証付きフォームハンドラー
 */
export function withCsrfProtection<T extends (...args: unknown[]) => unknown>(
  handler: T,
  getTokenFromArgs: (...args: Parameters<T>) => string
): T {
  return ((...args: Parameters<T>) => {
    const token = getTokenFromArgs(...args);
    if (!validateCsrfToken(token)) {
      throw new Error('CSRF token validation failed');
    }
    return handler(...args);
  }) as T;
}

// React Hook用にexport
export const CSRF_HEADER_NAME = CSRF_TOKEN_HEADER;

export default {
  generateCsrfToken,
  getCsrfToken,
  validateCsrfToken,
  refreshCsrfToken,
  validateOrigin,
  secureFetch,
  getCsrfInputValue,
  withCsrfProtection,
  CSRF_HEADER_NAME,
};

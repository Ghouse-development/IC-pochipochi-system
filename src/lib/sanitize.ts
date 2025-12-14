/**
 * XSS対策 - 入力値サニタイズユーティリティ
 * DOMPurifyを使用してユーザー入力をサニタイズ
 */
import DOMPurify from 'dompurify';

// DOMPurify設定
const SANITIZE_CONFIG = {
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'ol', 'li', 'span'] as string[],
  ALLOWED_ATTR: ['href', 'title', 'class'] as string[],
  ALLOW_DATA_ATTR: false,
  USE_PROFILES: { html: true },
};

// 厳格モード（タグなし）
const STRICT_CONFIG = {
  ALLOWED_TAGS: [] as string[],
  ALLOWED_ATTR: [] as string[],
};

/**
 * HTMLをサニタイズ（基本的なフォーマットタグを許可）
 */
export function sanitizeHtml(dirty: string): string {
  if (!dirty || typeof dirty !== 'string') return '';
  return DOMPurify.sanitize(dirty, SANITIZE_CONFIG);
}

/**
 * プレーンテキストにサニタイズ（すべてのHTMLタグを除去）
 */
export function sanitizeText(dirty: string): string {
  if (!dirty || typeof dirty !== 'string') return '';
  return DOMPurify.sanitize(dirty, STRICT_CONFIG);
}

/**
 * ユーザー名をサニタイズ
 */
export function sanitizeUsername(dirty: string): string {
  if (!dirty || typeof dirty !== 'string') return '';
  // HTMLタグ除去 + 特殊文字制限
  const cleaned = DOMPurify.sanitize(dirty, STRICT_CONFIG);
  // 許可文字: 英数字、ひらがな、カタカナ、漢字、スペース、一部記号
  return cleaned.replace(/[^\w\s\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF\u3000-\u303F@._-]/g, '');
}

/**
 * メールアドレスをサニタイズ・検証
 */
export function sanitizeEmail(dirty: string): string {
  if (!dirty || typeof dirty !== 'string') return '';
  const cleaned = DOMPurify.sanitize(dirty, STRICT_CONFIG).trim().toLowerCase();
  // メールアドレス形式チェック
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(cleaned) ? cleaned : '';
}

/**
 * 電話番号をサニタイズ
 */
export function sanitizePhone(dirty: string): string {
  if (!dirty || typeof dirty !== 'string') return '';
  // 数字、ハイフン、括弧、プラスのみ許可
  return dirty.replace(/[^\d\-+()]/g, '');
}

/**
 * URLをサニタイズ・検証
 */
export function sanitizeUrl(dirty: string): string {
  if (!dirty || typeof dirty !== 'string') return '';
  const cleaned = DOMPurify.sanitize(dirty, STRICT_CONFIG).trim();

  // javascript:, data: スキームをブロック
  if (/^(javascript|data|vbscript):/i.test(cleaned)) {
    return '';
  }

  // 有効なURLか確認
  try {
    const url = new URL(cleaned);
    if (!['http:', 'https:', 'mailto:'].includes(url.protocol)) {
      return '';
    }
    return url.href;
  } catch {
    // 相対URLの場合
    if (cleaned.startsWith('/') || cleaned.startsWith('./')) {
      return cleaned;
    }
    return '';
  }
}

/**
 * ファイル名をサニタイズ
 */
export function sanitizeFilename(dirty: string): string {
  if (!dirty || typeof dirty !== 'string') return '';
  // パストラバーサル防止、危険な文字除去（制御文字を含む）
  return dirty
    .replace(/\.\./g, '')
    // eslint-disable-next-line no-control-regex
    .replace(/[<>:"/\\|?*\x00-\x1f]/g, '')
    .trim();
}

/**
 * 数値文字列をサニタイズ
 */
export function sanitizeNumber(dirty: string | number): number | null {
  if (dirty === null || dirty === undefined) return null;
  const str = String(dirty).replace(/[^\d.-]/g, '');
  const num = parseFloat(str);
  return isNaN(num) ? null : num;
}

/**
 * 商品説明文をサニタイズ（リッチテキスト対応）
 */
export function sanitizeProductDescription(dirty: string): string {
  if (!dirty || typeof dirty !== 'string') return '';
  return DOMPurify.sanitize(dirty, {
    ...SANITIZE_CONFIG,
    ALLOWED_TAGS: [...(SANITIZE_CONFIG.ALLOWED_TAGS || []), 'h3', 'h4', 'table', 'tr', 'td', 'th', 'thead', 'tbody'],
  });
}

/**
 * 検索クエリをサニタイズ
 */
export function sanitizeSearchQuery(dirty: string): string {
  if (!dirty || typeof dirty !== 'string') return '';
  // SQLインジェクション対策も兼ねる
  return dirty
    .replace(/[<>'"`;\\]/g, '')
    .trim()
    .slice(0, 200); // 最大200文字
}

/**
 * オブジェクトの文字列プロパティを再帰的にサニタイズ
 */
export function sanitizeObject<T extends Record<string, unknown>>(obj: T): T {
  const result = { ...obj };
  for (const key in result) {
    if (typeof result[key] === 'string') {
      (result as Record<string, unknown>)[key] = sanitizeText(result[key] as string);
    } else if (typeof result[key] === 'object' && result[key] !== null) {
      (result as Record<string, unknown>)[key] = sanitizeObject(result[key] as Record<string, unknown>);
    }
  }
  return result;
}

// デフォルトエクスポート
export default {
  sanitizeHtml,
  sanitizeText,
  sanitizeUsername,
  sanitizeEmail,
  sanitizePhone,
  sanitizeUrl,
  sanitizeFilename,
  sanitizeNumber,
  sanitizeProductDescription,
  sanitizeSearchQuery,
  sanitizeObject,
};

/**
 * 入力バリデーション・サニタイズユーティリティ
 * セキュリティとデータ品質を確保
 */
import DOMPurify from 'dompurify';

// ========================================
// サニタイズ
// ========================================

/**
 * HTML文字列をサニタイズ
 */
export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'br', 'p', 'ul', 'ol', 'li'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  });
}

/**
 * プレーンテキストとしてサニタイズ（全てのHTMLタグを除去）
 */
export function sanitizeText(text: string): string {
  return DOMPurify.sanitize(text, { ALLOWED_TAGS: [] });
}

/**
 * SQLインジェクション対策用のエスケープ
 */
export function escapeSQL(str: string): string {
  return str.replace(/['"\\\x00\n\r\x1a]/g, (char) => {
    switch (char) {
      case "'": return "''";
      case '"': return '\\"';
      case '\\': return '\\\\';
      case '\x00': return '\\0';
      case '\n': return '\\n';
      case '\r': return '\\r';
      case '\x1a': return '\\Z';
      default: return char;
    }
  });
}

/**
 * ファイル名をサニタイズ
 */
export function sanitizeFileName(fileName: string): string {
  return fileName
    .replace(/[<>:"/\\|?*\x00-\x1f]/g, '_')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.+|\.+$/g, '')
    .slice(0, 255);
}

// ========================================
// バリデーション
// ========================================

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

/**
 * メールアドレスのバリデーション
 */
export function validateEmail(email: string): ValidationResult {
  const errors: string[] = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    errors.push('メールアドレスを入力してください');
  } else if (!emailRegex.test(email)) {
    errors.push('有効なメールアドレスを入力してください');
  } else if (email.length > 254) {
    errors.push('メールアドレスが長すぎます');
  }

  return { isValid: errors.length === 0, errors };
}

/**
 * 電話番号のバリデーション（日本形式）
 */
export function validatePhone(phone: string): ValidationResult {
  const errors: string[] = [];
  const phoneRegex = /^[0-9\-+()（）\s]+$/;
  const digitsOnly = phone.replace(/[^0-9]/g, '');

  if (!phone) {
    return { isValid: true, errors: [] }; // 任意項目
  }

  if (!phoneRegex.test(phone)) {
    errors.push('電話番号に使用できない文字が含まれています');
  } else if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    errors.push('電話番号は10〜15桁で入力してください');
  }

  return { isValid: errors.length === 0, errors };
}

/**
 * 郵便番号のバリデーション（日本形式）
 */
export function validatePostalCode(postalCode: string): ValidationResult {
  const errors: string[] = [];
  const postalRegex = /^[0-9]{3}-?[0-9]{4}$/;

  if (!postalCode) {
    return { isValid: true, errors: [] }; // 任意項目
  }

  if (!postalRegex.test(postalCode)) {
    errors.push('郵便番号は「123-4567」または「1234567」の形式で入力してください');
  }

  return { isValid: errors.length === 0, errors };
}

/**
 * パスワードのバリデーション
 */
export function validatePassword(password: string, options?: {
  minLength?: number;
  requireUppercase?: boolean;
  requireLowercase?: boolean;
  requireNumber?: boolean;
  requireSpecial?: boolean;
}): ValidationResult {
  const {
    minLength = 8,
    requireUppercase = true,
    requireLowercase = true,
    requireNumber = true,
    requireSpecial = false,
  } = options || {};

  const errors: string[] = [];

  if (!password) {
    errors.push('パスワードを入力してください');
    return { isValid: false, errors };
  }

  if (password.length < minLength) {
    errors.push(`パスワードは${minLength}文字以上で入力してください`);
  }

  if (requireUppercase && !/[A-Z]/.test(password)) {
    errors.push('大文字を含めてください');
  }

  if (requireLowercase && !/[a-z]/.test(password)) {
    errors.push('小文字を含めてください');
  }

  if (requireNumber && !/[0-9]/.test(password)) {
    errors.push('数字を含めてください');
  }

  if (requireSpecial && !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    errors.push('特殊文字を含めてください');
  }

  return { isValid: errors.length === 0, errors };
}

/**
 * URLのバリデーション
 */
export function validateUrl(url: string): ValidationResult {
  const errors: string[] = [];

  if (!url) {
    return { isValid: true, errors: [] }; // 任意項目
  }

  try {
    const parsed = new URL(url);
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      errors.push('URLはhttp://またはhttps://で始める必要があります');
    }
  } catch {
    errors.push('有効なURLを入力してください');
  }

  return { isValid: errors.length === 0, errors };
}

/**
 * 数値のバリデーション
 */
export function validateNumber(
  value: string | number,
  options?: {
    min?: number;
    max?: number;
    integer?: boolean;
    positive?: boolean;
  }
): ValidationResult {
  const { min, max, integer = false, positive = false } = options || {};
  const errors: string[] = [];
  const num = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(num)) {
    errors.push('有効な数値を入力してください');
    return { isValid: false, errors };
  }

  if (integer && !Number.isInteger(num)) {
    errors.push('整数を入力してください');
  }

  if (positive && num < 0) {
    errors.push('正の数を入力してください');
  }

  if (min !== undefined && num < min) {
    errors.push(`${min}以上の値を入力してください`);
  }

  if (max !== undefined && num > max) {
    errors.push(`${max}以下の値を入力してください`);
  }

  return { isValid: errors.length === 0, errors };
}

/**
 * 組織コードのバリデーション
 */
export function validateOrganizationCode(code: string): ValidationResult {
  const errors: string[] = [];
  const codeRegex = /^[A-Z0-9]{2,10}$/;

  if (!code) {
    errors.push('組織コードを入力してください');
  } else if (!codeRegex.test(code.toUpperCase())) {
    errors.push('組織コードは2〜10文字の半角英数字で入力してください');
  }

  return { isValid: errors.length === 0, errors };
}

/**
 * 商品コードのバリデーション
 */
export function validateProductCode(code: string): ValidationResult {
  const errors: string[] = [];
  const codeRegex = /^[A-Z0-9\-_]{1,50}$/i;

  if (!code) {
    errors.push('商品コードを入力してください');
  } else if (!codeRegex.test(code)) {
    errors.push('商品コードは半角英数字とハイフン、アンダースコアのみ使用できます');
  }

  return { isValid: errors.length === 0, errors };
}

// ========================================
// フォームバリデーション
// ========================================

export interface FieldValidation<T> {
  field: keyof T;
  validate: (value: unknown, data: T) => ValidationResult;
}

export interface FormValidationResult<T> {
  isValid: boolean;
  errors: Partial<Record<keyof T, string[]>>;
  firstError: string | null;
}

/**
 * フォーム全体のバリデーション
 */
export function validateForm<T extends Record<string, unknown>>(
  data: T,
  validations: FieldValidation<T>[]
): FormValidationResult<T> {
  const errors: Partial<Record<keyof T, string[]>> = {};
  let firstError: string | null = null;

  for (const { field, validate } of validations) {
    const result = validate(data[field], data);
    if (!result.isValid) {
      errors[field] = result.errors;
      if (!firstError && result.errors.length > 0) {
        firstError = result.errors[0];
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    firstError,
  };
}

// ========================================
// 文字列正規化
// ========================================

/**
 * 全角数字を半角に変換
 */
export function normalizeFullWidthNumbers(str: string): string {
  return str.replace(/[０-９]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0xFEE0)
  );
}

/**
 * 全角英字を半角に変換
 */
export function normalizeFullWidthAlpha(str: string): string {
  return str.replace(/[Ａ-Ｚａ-ｚ]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0xFEE0)
  );
}

/**
 * 電話番号を正規化
 */
export function normalizePhone(phone: string): string {
  return normalizeFullWidthNumbers(phone)
    .replace(/[（）]/g, (char) => (char === '（' ? '(' : ')'))
    .replace(/[ー−]/g, '-')
    .replace(/\s+/g, '');
}

/**
 * 郵便番号を正規化（ハイフンなし7桁に）
 */
export function normalizePostalCode(postalCode: string): string {
  return normalizeFullWidthNumbers(postalCode).replace(/[^0-9]/g, '');
}

/**
 * 入力値をトリムしてnullに変換（空文字の場合）
 */
export function trimOrNull(value: string | null | undefined): string | null {
  if (value === null || value === undefined) return null;
  const trimmed = value.trim();
  return trimmed === '' ? null : trimmed;
}

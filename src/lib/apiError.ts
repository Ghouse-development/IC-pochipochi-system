/**
 * API Error Handling Utilities
 * 統一されたAPIエラーハンドリングを提供
 */

export class ApiError extends Error {
  api: string;
  operation: string;
  originalError?: unknown;
  statusCode?: number;

  constructor(
    api: string,
    operation: string,
    message: string,
    originalError?: unknown,
    statusCode?: number
  ) {
    super(message);
    this.name = 'ApiError';
    this.api = api;
    this.operation = operation;
    this.originalError = originalError;
    this.statusCode = statusCode;
  }

  toJSON() {
    return {
      name: this.name,
      api: this.api,
      operation: this.operation,
      message: this.message,
      statusCode: this.statusCode,
    };
  }
}

/**
 * Supabaseエラーをユーザーフレンドリーなメッセージに変換
 */
export function getErrorMessage(error: unknown): string {
  if (error instanceof ApiError) {
    return error.message;
  }

  if (error instanceof Error) {
    // Supabase specific errors
    if (error.message.includes('JWT')) {
      return 'セッションが期限切れです。再ログインしてください。';
    }
    if (error.message.includes('network')) {
      return 'ネットワークエラーが発生しました。接続を確認してください。';
    }
    if (error.message.includes('timeout')) {
      return 'リクエストがタイムアウトしました。再度お試しください。';
    }
    if (error.message.includes('duplicate')) {
      return 'データが既に存在します。';
    }
    if (error.message.includes('foreign key')) {
      return '関連データが存在するため、操作できません。';
    }
    if (error.message.includes('permission') || error.message.includes('RLS')) {
      return 'この操作を行う権限がありません。';
    }
    return error.message;
  }

  return '予期せぬエラーが発生しました。';
}

/**
 * APIコールをラップしてエラーハンドリングを統一
 */
export async function withErrorHandling<T>(
  api: string,
  operation: string,
  fn: () => Promise<T>
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    const message = getErrorMessage(error);
    throw new ApiError(api, operation, message, error);
  }
}

/**
 * リトライロジック付きAPIコール
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  options: {
    maxRetries?: number;
    delay?: number;
    backoff?: number;
    retryOn?: (error: unknown) => boolean;
  } = {}
): Promise<T> {
  const {
    maxRetries = 3,
    delay = 1000,
    backoff = 2,
    retryOn = (error) => {
      // デフォルトでは5xxエラーと特定のネットワークエラーのみリトライ
      if (error instanceof Error) {
        return (
          error.message.includes('network') ||
          error.message.includes('timeout') ||
          error.message.includes('500') ||
          error.message.includes('502') ||
          error.message.includes('503') ||
          error.message.includes('504')
        );
      }
      return false;
    },
  } = options;

  let lastError: unknown;
  let currentDelay = delay;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      if (attempt < maxRetries && retryOn(error)) {
        await new Promise((resolve) => setTimeout(resolve, currentDelay));
        currentDelay *= backoff;
      } else {
        throw error;
      }
    }
  }

  throw lastError;
}

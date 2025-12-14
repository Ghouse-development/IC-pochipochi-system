/**
 * レート制限ユーティリティ
 * API呼び出しやユーザーアクションの制限
 */

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

interface RateLimitState {
  count: number;
  resetTime: number;
}

// メモリ内のレート制限状態
const rateLimitStates = new Map<string, RateLimitState>();

/**
 * レート制限チェック
 */
export function checkRateLimit(
  key: string,
  config: RateLimitConfig
): { allowed: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const state = rateLimitStates.get(key);

  // 初回または期限切れ
  if (!state || now >= state.resetTime) {
    rateLimitStates.set(key, {
      count: 1,
      resetTime: now + config.windowMs,
    });
    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetIn: config.windowMs,
    };
  }

  // 制限内
  if (state.count < config.maxRequests) {
    state.count++;
    return {
      allowed: true,
      remaining: config.maxRequests - state.count,
      resetIn: state.resetTime - now,
    };
  }

  // 制限超過
  return {
    allowed: false,
    remaining: 0,
    resetIn: state.resetTime - now,
  };
}

/**
 * レート制限のリセット
 */
export function resetRateLimit(key: string): void {
  rateLimitStates.delete(key);
}

/**
 * 全てのレート制限をクリア
 */
export function clearAllRateLimits(): void {
  rateLimitStates.clear();
}

// プリセット設定
export const RATE_LIMIT_PRESETS = {
  // API呼び出し: 1分間に60回
  api: { maxRequests: 60, windowMs: 60000 },
  // 検索: 1秒間に5回
  search: { maxRequests: 5, windowMs: 1000 },
  // エクスポート: 1分間に10回
  export: { maxRequests: 10, windowMs: 60000 },
  // ログイン試行: 5分間に5回
  login: { maxRequests: 5, windowMs: 300000 },
  // フォーム送信: 10秒間に3回
  formSubmit: { maxRequests: 3, windowMs: 10000 },
} as const;

/**
 * レート制限付き関数を作成
 */
export function withRateLimit<T extends (...args: unknown[]) => unknown>(
  fn: T,
  key: string,
  config: RateLimitConfig,
  onLimited?: (resetIn: number) => void
): (...args: Parameters<T>) => ReturnType<T> | null {
  return (...args: Parameters<T>): ReturnType<T> | null => {
    const result = checkRateLimit(key, config);

    if (!result.allowed) {
      onLimited?.(result.resetIn);
      return null;
    }

    return fn(...args) as ReturnType<T>;
  };
}

/**
 * React フック: useRateLimit
 */
import { useCallback, useState } from 'react';

interface UseRateLimitOptions {
  key: string;
  config: RateLimitConfig;
  onLimited?: (resetIn: number) => void;
}

export function useRateLimit(options: UseRateLimitOptions) {
  const { key, config, onLimited } = options;
  const [isLimited, setIsLimited] = useState(false);
  const [remaining, setRemaining] = useState(config.maxRequests);
  const [resetIn, setResetIn] = useState(0);

  const checkLimit = useCallback(() => {
    const result = checkRateLimit(key, config);
    setIsLimited(!result.allowed);
    setRemaining(result.remaining);
    setResetIn(result.resetIn);

    if (!result.allowed) {
      onLimited?.(result.resetIn);

      // 自動リセット
      setTimeout(() => {
        setIsLimited(false);
        setRemaining(config.maxRequests);
      }, result.resetIn);
    }

    return result.allowed;
  }, [key, config, onLimited]);

  const execute = useCallback(
    <T>(fn: () => T): T | null => {
      if (checkLimit()) {
        return fn();
      }
      return null;
    },
    [checkLimit]
  );

  const reset = useCallback(() => {
    resetRateLimit(key);
    setIsLimited(false);
    setRemaining(config.maxRequests);
    setResetIn(0);
  }, [key, config.maxRequests]);

  return {
    isLimited,
    remaining,
    resetIn,
    checkLimit,
    execute,
    reset,
  };
}

/**
 * デバウンス + レート制限の組み合わせ
 */
export function debounceWithRateLimit<T extends (...args: unknown[]) => unknown>(
  fn: T,
  debounceMs: number,
  key: string,
  config: RateLimitConfig
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      const result = checkRateLimit(key, config);
      if (result.allowed) {
        fn(...args);
      }
    }, debounceMs);
  };
}

/**
 * スロットル + レート制限の組み合わせ
 */
export function throttleWithRateLimit<T extends (...args: unknown[]) => unknown>(
  fn: T,
  throttleMs: number,
  key: string,
  config: RateLimitConfig
): (...args: Parameters<T>) => void {
  let lastCallTime = 0;

  return (...args: Parameters<T>) => {
    const now = Date.now();

    if (now - lastCallTime >= throttleMs) {
      const result = checkRateLimit(key, config);
      if (result.allowed) {
        lastCallTime = now;
        fn(...args);
      }
    }
  };
}

/**
 * 指数バックオフ付きリトライ
 */
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  options: {
    maxRetries?: number;
    initialDelay?: number;
    maxDelay?: number;
    factor?: number;
    shouldRetry?: (error: unknown) => boolean;
  } = {}
): Promise<T> {
  const {
    maxRetries = 3,
    initialDelay = 1000,
    maxDelay = 30000,
    factor = 2,
    shouldRetry = () => true,
  } = options;

  let lastError: unknown;
  let delay = initialDelay;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      if (attempt === maxRetries || !shouldRetry(error)) {
        throw error;
      }

      // 待機
      await new Promise((resolve) => setTimeout(resolve, delay));

      // 次の遅延を計算（ジッターを追加）
      const jitter = Math.random() * 0.3 * delay;
      delay = Math.min(delay * factor + jitter, maxDelay);
    }
  }

  throw lastError;
}

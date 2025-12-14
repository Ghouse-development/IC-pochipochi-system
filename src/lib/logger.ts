/**
 * 環境に応じたロギングユーティリティ
 * 本番環境では重要なエラーのみ出力
 */

const isDev = import.meta.env.DEV;

interface Logger {
  debug: (...args: unknown[]) => void;
  info: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
}

/**
 * アプリケーションロガー
 * - 開発環境: 全レベルを出力
 * - 本番環境: warn, error のみ出力
 */
export const logger: Logger = {
  debug: (...args: unknown[]) => {
    if (isDev) {
      console.log('[DEBUG]', ...args);
    }
  },

  info: (...args: unknown[]) => {
    if (isDev) {
      console.info('[INFO]', ...args);
    }
  },

  warn: (...args: unknown[]) => {
    console.warn('[WARN]', ...args);
  },

  error: (...args: unknown[]) => {
    console.error('[ERROR]', ...args);
  },
};

/**
 * コンポーネント/サービス固有のロガーを作成
 * @param prefix ログプレフィックス（例: 'CatalogWithTabs', 'API'）
 */
export function createLogger(prefix: string): Logger {
  return {
    debug: (...args: unknown[]) => logger.debug(`[${prefix}]`, ...args),
    info: (...args: unknown[]) => logger.info(`[${prefix}]`, ...args),
    warn: (...args: unknown[]) => logger.warn(`[${prefix}]`, ...args),
    error: (...args: unknown[]) => logger.error(`[${prefix}]`, ...args),
  };
}

/**
 * ログユーティリティ
 * 本番環境ではログを抑制し、開発環境でのみ出力
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LoggerConfig {
  enabled: boolean;
  level: LogLevel;
  prefix: string;
}

const LOG_LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

// 開発環境判定
const isDev = import.meta.env.DEV || import.meta.env.MODE === 'development';

const config: LoggerConfig = {
  enabled: isDev,
  level: isDev ? 'debug' : 'error',
  prefix: '[IC-ぽちぽち]',
};

const shouldLog = (level: LogLevel): boolean => {
  if (!config.enabled) return level === 'error'; // エラーは常に出力
  return LOG_LEVELS[level] >= LOG_LEVELS[config.level];
};

const formatMessage = (level: LogLevel, message: string): string => {
  const timestamp = new Date().toISOString().slice(11, 23);
  return `${config.prefix} [${timestamp}] [${level.toUpperCase()}] ${message}`;
};

export const logger = {
  debug: (message: string, ...args: unknown[]) => {
    if (shouldLog('debug')) {
      console.log(formatMessage('debug', message), ...args);
    }
  },

  info: (message: string, ...args: unknown[]) => {
    if (shouldLog('info')) {
      console.info(formatMessage('info', message), ...args);
    }
  },

  warn: (message: string, ...args: unknown[]) => {
    if (shouldLog('warn')) {
      console.warn(formatMessage('warn', message), ...args);
    }
  },

  error: (message: string, ...args: unknown[]) => {
    if (shouldLog('error')) {
      console.error(formatMessage('error', message), ...args);
    }
  },

  // グループ化ログ（デバッグ用）
  group: (label: string) => {
    if (shouldLog('debug')) {
      console.group(formatMessage('debug', label));
    }
  },

  groupEnd: () => {
    if (shouldLog('debug')) {
      console.groupEnd();
    }
  },

  // 設定変更
  setLevel: (level: LogLevel) => {
    config.level = level;
  },

  enable: () => {
    config.enabled = true;
  },

  disable: () => {
    config.enabled = false;
  },
};

export default logger;

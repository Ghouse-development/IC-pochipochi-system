/**
 * リトライ機能付きエラーバウンダリ
 * エラー発生時の復帰と通知
 */
import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug, Copy, Check } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  maxRetries?: number;
  retryDelay?: number;
  showErrorDetails?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
  isRetrying: boolean;
  copied: boolean;
}

export class RetryErrorBoundary extends Component<Props, State> {
  static defaultProps = {
    maxRetries: 3,
    retryDelay: 1000,
    showErrorDetails: process.env.NODE_ENV === 'development',
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
      isRetrying: false,
      copied: false,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo });
    this.props.onError?.(error, errorInfo);

    // エラーをログに記録
    console.error('Error caught by boundary:', error, errorInfo);

    // 本番環境ではエラー追跡サービスに送信
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo);
    }
  }

  reportError = async (error: Error, errorInfo: ErrorInfo): Promise<void> => {
    try {
      // エラー追跡サービスへの送信（例: Sentry, LogRocket）
      const errorReport = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      };

      // ローカルストレージにも保存（デバッグ用）
      const existingErrors = JSON.parse(localStorage.getItem('error_reports') || '[]');
      existingErrors.push(errorReport);
      localStorage.setItem('error_reports', JSON.stringify(existingErrors.slice(-10)));
    } catch {
      // エラー報告の失敗は無視
    }
  };

  handleRetry = async (): Promise<void> => {
    const { maxRetries, retryDelay } = this.props;
    const { retryCount } = this.state;

    if (retryCount >= (maxRetries || 3)) {
      return;
    }

    this.setState({ isRetrying: true });

    await new Promise((resolve) => setTimeout(resolve, retryDelay));

    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: retryCount + 1,
      isRetrying: false,
    });
  };

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
      isRetrying: false,
    });
  };

  handleCopyError = async (): Promise<void> => {
    const { error, errorInfo } = this.state;
    const errorText = `
Error: ${error?.message}
Stack: ${error?.stack}
Component Stack: ${errorInfo?.componentStack}
URL: ${window.location.href}
Time: ${new Date().toISOString()}
    `.trim();

    try {
      await navigator.clipboard.writeText(errorText);
      this.setState({ copied: true });
      setTimeout(() => this.setState({ copied: false }), 2000);
    } catch {
      // クリップボードAPIが利用できない場合
      console.log(errorText);
    }
  };

  handleGoHome = (): void => {
    window.location.href = '/';
  };

  render(): ReactNode {
    const { hasError, error, errorInfo, retryCount, isRetrying, copied } = this.state;
    const { children, fallback, maxRetries, showErrorDetails } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

      const canRetry = retryCount < (maxRetries || 3);

      return (
        <div className="min-h-[400px] flex items-center justify-center p-8">
          <div className="max-w-lg w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-red-200 dark:border-red-800 overflow-hidden">
            {/* Header */}
            <div className="bg-red-50 dark:bg-red-900/30 px-6 py-4 border-b border-red-200 dark:border-red-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-red-900 dark:text-red-100">
                    エラーが発生しました
                  </h2>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    申し訳ありません。問題が発生しました。
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Error Message */}
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">
                  {error?.message || '予期しないエラーが発生しました'}
                </p>
              </div>

              {/* Retry Info */}
              {canRetry && (
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  リトライ回数: {retryCount} / {maxRetries}
                </div>
              )}

              {/* Error Details (Development) */}
              {showErrorDetails && errorInfo && (
                <details className="text-sm">
                  <summary className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 flex items-center gap-1">
                    <Bug className="w-4 h-4" />
                    詳細情報（開発者向け）
                  </summary>
                  <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 rounded text-xs overflow-auto max-h-40">
                    {error?.stack}
                    {'\n\nComponent Stack:'}
                    {errorInfo.componentStack}
                  </pre>
                </details>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-4">
                {canRetry && (
                  <button
                    onClick={this.handleRetry}
                    disabled={isRetrying}
                    className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <RefreshCw className={`w-4 h-4 ${isRetrying ? 'animate-spin' : ''}`} />
                    {isRetrying ? 'リトライ中...' : 'リトライ'}
                  </button>
                )}

                <button
                  onClick={this.handleGoHome}
                  className="flex-1 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  ホームに戻る
                </button>

                <button
                  onClick={this.handleCopyError}
                  className="px-4 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                  title="エラー情報をコピー"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Support Info */}
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center pt-2">
                問題が続く場合は、サポートにお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      );
    }

    return children;
  }
}

// 関数コンポーネント用のラッパー
interface ErrorBoundaryWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

export const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({
  children,
  fallback,
  onError,
}) => {
  return (
    <RetryErrorBoundary fallback={fallback} onError={onError}>
      {children}
    </RetryErrorBoundary>
  );
};

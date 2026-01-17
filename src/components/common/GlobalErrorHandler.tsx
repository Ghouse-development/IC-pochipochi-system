/**
 * グローバルエラーハンドリングシステム
 * - 全てのエラーをキャッチして適切に処理
 * - ユーザーフレンドリーなエラー表示
 * - エラーログの記録
 * - 自動リカバリー試行
 */
import React, { Component, type ReactNode, type ErrorInfo } from 'react';
import { AlertTriangle, RefreshCw, Home, Copy, Check } from 'lucide-react';

interface ErrorState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorCount: number;
  lastErrorTime: number | null;
  copied: boolean;
}

interface GlobalErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

export class GlobalErrorBoundary extends Component<GlobalErrorBoundaryProps, ErrorState> {
  private retryCount = 0;
  private maxRetries = 3;

  constructor(props: GlobalErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0,
      lastErrorTime: null,
      copied: false
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorState> {
    return {
      hasError: true,
      error,
      lastErrorTime: Date.now()
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // エラーログを記録
    console.error('GlobalErrorBoundary caught an error:', error, errorInfo);

    this.setState(prev => ({
      errorInfo,
      errorCount: prev.errorCount + 1
    }));

    // カスタムエラーハンドラーを呼び出し
    this.props.onError?.(error, errorInfo);

    // ローカルストレージにエラーログを保存
    this.saveErrorLog(error, errorInfo);
  }

  private saveErrorLog(error: Error, errorInfo: ErrorInfo): void {
    try {
      const errorLogs = JSON.parse(localStorage.getItem('app_error_logs') || '[]');
      errorLogs.push({
        timestamp: new Date().toISOString(),
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        userAgent: navigator.userAgent,
        url: window.location.href
      });
      // 最新100件のみ保持
      const recentLogs = errorLogs.slice(-100);
      localStorage.setItem('app_error_logs', JSON.stringify(recentLogs));
    } catch {
      console.warn('Failed to save error log');
    }
  }

  private handleRetry = (): void => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null
      });
    } else {
      // 最大リトライ回数を超えた場合はリロード
      window.location.reload();
    }
  };

  private handleGoHome = (): void => {
    window.location.href = '/';
  };

  private handleCopyError = (): void => {
    const { error, errorInfo } = this.state;
    const errorText = `
エラー: ${error?.message}
スタック: ${error?.stack}
コンポーネント: ${errorInfo?.componentStack}
URL: ${window.location.href}
日時: ${new Date().toISOString()}
    `.trim();

    navigator.clipboard.writeText(errorText).then(() => {
      this.setState({ copied: true });
      setTimeout(() => this.setState({ copied: false }), 2000);
    });
  };

  render(): ReactNode {
    const { hasError, error, errorInfo, errorCount, copied } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      // カスタムフォールバックがあれば使用
      if (fallback) {
        return fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* ヘッダー */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">エラーが発生しました</h1>
                  <p className="text-red-100 mt-1">申し訳ありません。問題が発生しました。</p>
                </div>
              </div>
            </div>

            {/* コンテンツ */}
            <div className="p-6 space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-red-800 font-medium mb-2">エラー詳細</p>
                <p className="text-red-600 text-sm font-mono break-all">
                  {error?.message || '不明なエラー'}
                </p>
              </div>

              {errorCount > 1 && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-amber-800 text-sm">
                    このセッションで {errorCount} 回のエラーが発生しています。
                    問題が解決しない場合は、ブラウザを再起動してください。
                  </p>
                </div>
              )}

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  お手数ですが、下記のいずれかをお試しください：
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">1</span>
                    「再試行」ボタンをクリック
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">2</span>
                    ブラウザを更新（F5キー）
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">3</span>
                    トップページに戻る
                  </li>
                </ul>
              </div>
            </div>

            {/* アクション */}
            <div className="p-6 pt-0 space-y-3">
              <div className="flex gap-3">
                <button
                  onClick={this.handleRetry}
                  className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-blue-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:from-blue-600 hover:to-blue-600 transition-all shadow-lg"
                >
                  <RefreshCw className="w-5 h-5" />
                  再試行
                </button>
                <button
                  onClick={this.handleGoHome}
                  className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-300 transition-colors"
                >
                  <Home className="w-5 h-5" />
                  トップへ
                </button>
              </div>
              <button
                onClick={this.handleCopyError}
                className="w-full py-2 text-gray-500 hover:text-gray-700 text-sm flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-blue-500" />
                    コピーしました
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    エラー情報をコピー（サポートに送信）
                  </>
                )}
              </button>
            </div>

            {/* 開発者向け情報（本番環境では非表示） */}
            {process.env.NODE_ENV === 'development' && errorInfo && (
              <div className="p-4 bg-gray-900 text-gray-300">
                <details>
                  <summary className="cursor-pointer text-sm font-medium text-gray-400 mb-2">
                    開発者向け情報
                  </summary>
                  <pre className="text-xs overflow-auto max-h-40 bg-black/30 p-3 rounded-lg">
                    {error?.stack}
                    {'\n\nComponent Stack:\n'}
                    {errorInfo.componentStack}
                  </pre>
                </details>
              </div>
            )}
          </div>
        </div>
      );
    }

    return children;
  }
}

/**
 * 非同期エラーハンドリングフック
 */
export const useErrorHandler = () => {
  const handleError = React.useCallback((error: Error, context?: string) => {
    console.error(`Error in ${context || 'unknown context'}:`, error);

    // エラーをローカルストレージに記録
    try {
      const errorLogs = JSON.parse(localStorage.getItem('app_error_logs') || '[]');
      errorLogs.push({
        timestamp: new Date().toISOString(),
        message: error.message,
        context,
        stack: error.stack
      });
      localStorage.setItem('app_error_logs', JSON.stringify(errorLogs.slice(-100)));
    } catch {
      // 無視
    }
  }, []);

  const wrapAsync = React.useCallback(<T,>(
    asyncFn: () => Promise<T>,
    context?: string
  ): Promise<T | null> => {
    return asyncFn().catch(error => {
      handleError(error, context);
      return null;
    });
  }, [handleError]);

  return { handleError, wrapAsync };
};

/**
 * ネットワークエラー検出
 */
export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);
  const [wasOffline, setWasOffline] = React.useState(false);

  React.useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      if (wasOffline) {
        // オフラインから復帰した時の処理
        setWasOffline(false);
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
      setWasOffline(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [wasOffline]);

  return { isOnline, wasOffline };
};

export default GlobalErrorBoundary;

import { Component, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ errorInfo });

    // エラーログを送信（本番環境ではSentryなどを使用）
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // カスタムエラーハンドラを呼び出し
    this.props.onError?.(error, errorInfo);

    // エラーをローカルストレージに保存（デバッグ用）
    try {
      const errorLog = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
      };
      const existingLogs = JSON.parse(localStorage.getItem('errorLogs') || '[]');
      existingLogs.push(errorLog);
      // 最新10件のみ保持
      localStorage.setItem('errorLogs', JSON.stringify(existingLogs.slice(-10)));
    } catch (e) {
      console.error('Failed to save error log:', e);
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                エラーが発生しました
              </h1>
              <p className="text-gray-600 mb-6">
                申し訳ありません。予期しないエラーが発生しました。
                <br />
                問題が解決しない場合は、管理者にお問い合わせください。
              </p>

              {/* エラー詳細（開発環境のみ表示推奨） */}
              {this.state.error && (
                <details className="text-left mb-6">
                  <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 flex items-center gap-2">
                    <Bug className="w-4 h-4" />
                    エラー詳細を表示
                  </summary>
                  <div className="mt-2 p-4 bg-gray-100 rounded-lg overflow-auto max-h-48">
                    <p className="text-sm font-mono text-red-600">
                      {this.state.error.message}
                    </p>
                    {this.state.error.stack && (
                      <pre className="text-xs text-gray-600 mt-2 whitespace-pre-wrap">
                        {this.state.error.stack}
                      </pre>
                    )}
                  </div>
                </details>
              )}

              {/* アクションボタン */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  再試行
                </button>
                <button
                  onClick={this.handleReload}
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  ページを再読み込み
                </button>
                <button
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Home className="w-4 h-4" />
                  ホームへ戻る
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// 関数コンポーネント用のエラーフォールバック
export function ErrorFallback({
  error,
  resetError,
}: {
  error: Error;
  resetError: () => void;
}) {
  return (
    <div className="p-6 bg-red-50 rounded-lg border border-red-200">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-medium text-red-800">エラーが発生しました</h3>
          <p className="text-sm text-red-600 mt-1">{error.message}</p>
          <button
            onClick={resetError}
            className="mt-3 text-sm text-red-700 hover:text-red-800 underline"
          >
            再試行
          </button>
        </div>
      </div>
    </div>
  );
}

// API エラー用のヘルパー
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error && typeof error === 'object' && 'message' in error) {
    return String((error as { message: unknown }).message);
  }
  return '予期しないエラーが発生しました';
}

// Supabase エラー用のヘルパー
export function getSupabaseErrorMessage(error: { code?: string; message?: string }): string {
  const errorMessages: Record<string, string> = {
    '23505': 'このデータは既に存在します',
    '23503': '関連するデータが見つかりません',
    '42501': 'この操作を行う権限がありません',
    'PGRST116': 'データが見つかりませんでした',
    'invalid_credentials': 'メールアドレスまたはパスワードが正しくありません',
    'email_not_confirmed': 'メールアドレスの確認が必要です',
    'user_not_found': 'ユーザーが見つかりません',
    'weak_password': 'パスワードが弱すぎます。6文字以上で設定してください',
  };

  if (error.code && errorMessages[error.code]) {
    return errorMessages[error.code];
  }

  return error.message || '操作に失敗しました';
}

export default ErrorBoundary;

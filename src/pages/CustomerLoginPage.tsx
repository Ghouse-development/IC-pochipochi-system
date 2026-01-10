/**
 * お客様用ログインページ（マジックリンク認証）
 *
 * フロー:
 * 1. メールアドレス入力
 * 2. マジックリンク送信
 * 3. メール内リンクをクリック
 * 4. 自動ログイン → お客様ページへ
 */
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Mail, ArrowRight, CheckCircle, Home, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function CustomerLoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { sendMagicLink, session, isLoading: authLoading } = useAuth();

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // URLからプロジェクトIDを取得（招待リンクから来た場合）
  const projectId = searchParams.get('project');

  // すでにログイン済みの場合はお客様ページへリダイレクト
  useEffect(() => {
    if (session && !authLoading) {
      const redirectUrl = projectId
        ? `/customer?project=${projectId}`
        : '/customer';
      navigate(redirectUrl);
    }
  }, [session, authLoading, navigate, projectId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // リダイレクト先にプロジェクトIDを含める
      const redirectTo = projectId
        ? `${window.location.origin}/customer?project=${projectId}`
        : `${window.location.origin}/customer`;

      const { error } = await sendMagicLink(email, redirectTo);

      if (error) {
        setError(error.message);
      } else {
        setIsSent(true);
      }
    } catch {
      setError('エラーが発生しました。もう一度お試しください。');
    } finally {
      setIsLoading(false);
    }
  };

  // ローディング中
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  // メール送信完了画面
  if (isSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            メールを送信しました
          </h1>

          <p className="text-gray-600 mb-6">
            <span className="font-medium text-gray-900">{email}</span> 宛に
            ログインリンクを送信しました。
            <br />
            メールをご確認ください。
          </p>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-700">
              リンクの有効期限は <strong>30分</strong> です。
              <br />
              届かない場合は迷惑メールフォルダをご確認ください。
            </p>
          </div>

          <button
            onClick={() => {
              setIsSent(false);
              setEmail('');
            }}
            className="text-blue-600 hover:text-blue-700 text-sm"
          >
            別のメールアドレスで試す
          </button>
        </div>
      </div>
    );
  }

  // ログインフォーム
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        {/* ヘッダー */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Home className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Gハウス インテリア選択
          </h1>
          <p className="text-gray-600 mt-2">
            メールアドレスでログイン
          </p>
        </div>

        {/* フォーム */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              メールアドレス
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="example@email.com"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || !email}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                送信中...
              </>
            ) : (
              <>
                ログインリンクを送信
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {/* 説明 */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            ログイン方法
          </h3>
          <ol className="text-sm text-gray-600 space-y-2">
            <li className="flex gap-2">
              <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium">1</span>
              メールアドレスを入力
            </li>
            <li className="flex gap-2">
              <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium">2</span>
              届いたメール内のリンクをクリック
            </li>
            <li className="flex gap-2">
              <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium">3</span>
              自動でログインされます
            </li>
          </ol>
        </div>

        {/* プロジェクト情報（あれば） */}
        {projectId && (
          <div className="mt-4 bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
            招待されたプロジェクトにアクセスします
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomerLoginPage;

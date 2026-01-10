/**
 * お客様招待コンポーネント（マジックリンク対応）
 * - マジックリンクによるログイン招待
 * - QRコード表示
 * - メール送信
 */
import React, { useState, useMemo, useCallback } from 'react';
import {
  Link,
  Copy,
  Check,
  Mail,
  QrCode,
  ExternalLink,
  AlertCircle,
  User,
  Loader2,
  Send,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useProjectStore } from '../../stores/useProjectStore';
import { useToast } from '../common/Toast';
import { useAuth } from '../../contexts/AuthContext';

interface CustomerInvitationProps {
  projectId?: string;
  customerEmail?: string;
  customerName?: string;
}

export const CustomerInvitation: React.FC<CustomerInvitationProps> = ({
  projectId,
  customerEmail: propEmail,
  customerName: propName,
}) => {
  const { currentProject, projects } = useProjectStore();
  const { sendMagicLink } = useAuth();
  const toast = useToast();

  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState(propEmail || '');

  // 対象プロジェクト
  const project = projectId
    ? projects.find((p) => p.id === projectId)
    : currentProject;

  // プロジェクトからメールアドレスを取得
  React.useEffect(() => {
    if (project?.customer?.email && !email) {
      setEmail(project.customer.email);
    }
    if (propEmail) {
      setEmail(propEmail);
    }
  }, [project?.customer?.email, propEmail, email]);

  // お客様ログインURL
  const loginUrl = useMemo(() => {
    const baseUrl = window.location.origin;
    if (project) {
      return `${baseUrl}/customer-login?project=${project.id}`;
    }
    return `${baseUrl}/customer-login`;
  }, [project]);

  // URLをクリップボードにコピー
  const handleCopyUrl = async () => {
    if (!loginUrl) return;
    try {
      await navigator.clipboard.writeText(loginUrl);
      setCopied(true);
      toast.success('コピー完了', 'ログインURLをクリップボードにコピーしました');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      toast.error('コピー失敗', 'URLのコピーに失敗しました');
    }
  };

  // マジックリンク送信
  const handleSendMagicLink = useCallback(async () => {
    if (!email) {
      toast.error('エラー', 'メールアドレスを入力してください');
      return;
    }

    setIsSending(true);

    try {
      // リダイレクト先にプロジェクトIDを含める
      const redirectTo = project
        ? `${window.location.origin}/customer?project=${project.id}`
        : `${window.location.origin}/customer`;

      const { error } = await sendMagicLink(email, redirectTo);

      if (error) {
        toast.error('送信失敗', error.message);
      } else {
        setEmailSent(true);
        toast.success(
          'メール送信完了',
          `${email} 宛にログインリンクを送信しました`
        );
      }
    } catch (err) {
      console.error('Failed to send magic link:', err);
      toast.error('エラー', 'メールの送信に失敗しました');
    } finally {
      setIsSending(false);
    }
  }, [email, project, sendMagicLink, toast]);

  // メールアプリで開く（手動送信用）
  const handleOpenMailClient = useCallback(() => {
    const customerName = propName || project?.customer?.name || 'お客様';
    const projectName = project?.name || 'プロジェクト';

    const subject = encodeURIComponent(
      `【Gハウス】${projectName} インテリア選択のご案内`
    );
    const body = encodeURIComponent(
      `${customerName}様\n\n` +
      `お世話になっております。\n` +
      `Gハウスのインテリアコーディネートシステムへのご招待です。\n\n` +
      `▼ 下記URLからログインしてください\n` +
      `${loginUrl}\n\n` +
      `※ ログイン時にメールアドレスを入力すると、ログイン用リンクがメールで届きます。\n` +
      `※ パスワードは不要です。\n\n` +
      `ご不明な点がございましたら、お気軽にお問い合わせください。\n\n` +
      `よろしくお願いいたします。\n` +
      `Gハウス インテリアコーディネート担当`
    );

    window.open(`mailto:${email}?subject=${subject}&body=${body}`);
    toast.success('メールアプリを開きました', '内容を確認して送信してください');
  }, [email, loginUrl, propName, project, toast]);

  return (
    <div className="space-y-6">
      {/* プロジェクト情報 */}
      {project && (
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-500" />
            招待先お客様情報
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">お客様名</p>
              <p className="font-medium">{propName || project.customer?.name || '-'}様</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">プロジェクト名</p>
              <p className="font-medium">{project.name}</p>
            </div>
          </div>
        </div>
      )}

      {/* メールアドレス入力 & マジックリンク送信 */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Mail className="w-5 h-5 text-green-500" />
          マジックリンク送信
        </h3>

        {emailSent ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">
              メールを送信しました
            </h4>
            <p className="text-gray-600 mb-4">
              <strong>{email}</strong> 宛にログインリンクを送信しました。
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
              <Clock className="w-4 h-4" />
              リンクの有効期限: 30分
            </div>
            <button
              onClick={() => setEmailSent(false)}
              className="text-blue-600 hover:text-blue-700 text-sm"
            >
              別のメールアドレスに送信
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="customer@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleSendMagicLink}
                disabled={isSending || !email}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    送信中...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    招待メール送信
                  </>
                )}
              </button>
            </div>
            <p className="text-sm text-gray-500">
              お客様のメールアドレス宛に、ログイン用のリンクが送信されます。
            </p>
          </>
        )}
      </div>

      {/* ログインURL */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Link className="w-5 h-5 text-purple-500" />
          ログインページURL
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <input
            type="text"
            value={loginUrl}
            readOnly
            className="flex-1 px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 font-mono"
          />
          <button
            onClick={handleCopyUrl}
            className={`p-2 rounded-lg transition-colors ${
              copied
                ? 'bg-green-100 text-green-600'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title="URLをコピー"
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>
        <p className="text-sm text-gray-500">
          このURLをお客様にお伝えください。メールアドレスを入力するとログインリンクが届きます。
        </p>
      </div>

      {/* アクションボタン */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button
          onClick={handleOpenMailClient}
          disabled={!email}
          className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
        >
          <Mail className="w-5 h-5" />
          メールアプリで開く
        </button>
        <button
          onClick={() => setShowQR(!showQR)}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <QrCode className="w-5 h-5" />
          QRコード{showQR ? 'を閉じる' : 'を表示'}
        </button>
        <button
          onClick={() => window.open(loginUrl, '_blank')}
          className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
          プレビュー
        </button>
      </div>

      {/* QRコード表示 */}
      {showQR && (
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
          <h3 className="font-bold text-gray-900 mb-4">QRコード</h3>
          <div className="inline-block p-4 bg-white border-2 border-gray-200 rounded-lg">
            <QRCodeSVG
              value={loginUrl}
              size={192}
              level="M"
              includeMargin={true}
              bgColor="#ffffff"
              fgColor="#1f2937"
            />
          </div>
          <p className="text-sm text-gray-500 mt-4">
            スマートフォンで読み取ると、ログインページにアクセスできます
          </p>
        </div>
      )}

      {/* マジックリンクの説明 */}
      <div className="bg-blue-50 rounded-xl border border-blue-200 p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-2">マジックリンク認証について</p>
            <ul className="list-disc list-inside space-y-1 text-blue-700">
              <li>お客様はパスワード不要でログインできます</li>
              <li>メールアドレスに届くリンクをクリックするだけ</li>
              <li>リンクの有効期限は30分、1回限り有効です</li>
              <li>ログイン後は14日間セッションが維持されます</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * お客様招待リンク生成コンポーネント
 * - 招待URLの生成
 * - QRコード表示
 * - メール送信リンク
 */
import React, { useState, useMemo } from 'react';
import {
  Link,
  Copy,
  Check,
  Mail,
  QrCode,
  ExternalLink,
  RefreshCw,
  AlertCircle,
  User,
  Key,
} from 'lucide-react';
import { useProjectStore } from '../../stores/useProjectStore';

interface CustomerInvitationProps {
  projectId?: string;
}

export const CustomerInvitation: React.FC<CustomerInvitationProps> = ({ projectId }) => {
  const { currentProject, projects } = useProjectStore();
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [accessCode, setAccessCode] = useState<string | null>(null);

  // 対象プロジェクト
  const project = projectId
    ? projects.find((p) => p.id === projectId)
    : currentProject;

  // アクセスコード生成
  const generateAccessCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setAccessCode(code);
    return code;
  };

  // 招待URL生成
  const invitationUrl = useMemo(() => {
    if (!project) return null;
    const baseUrl = window.location.origin;
    const code = accessCode || generateAccessCode();
    return `${baseUrl}/customer?project=${project.id}&code=${code}`;
  }, [project, accessCode]);

  // URLをクリップボードにコピー
  const handleCopyUrl = async () => {
    if (!invitationUrl) return;
    try {
      await navigator.clipboard.writeText(invitationUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // メール作成
  const handleSendEmail = () => {
    if (!project || !invitationUrl) return;
    const subject = encodeURIComponent(
      `【STYLEBOOK】${project.name} 仕様選択のご案内`
    );
    const body = encodeURIComponent(
      `${project.customer.name}様\n\n` +
      `お世話になっております。\n` +
      `下記URLより、住宅仕様の選択をお願いいたします。\n\n` +
      `▼ アクセスURL\n` +
      `${invitationUrl}\n\n` +
      `▼ アクセスコード\n` +
      `${accessCode}\n\n` +
      `ご不明な点がございましたら、お気軽にお問い合わせください。\n\n` +
      `よろしくお願いいたします。`
    );
    window.open(`mailto:${project.customer.email}?subject=${subject}&body=${body}`);
  };

  // アクセスコード再生成
  const handleRegenerateCode = () => {
    generateAccessCode();
  };

  if (!project) {
    return (
      <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
        <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
        <p className="text-gray-500">プロジェクトを選択してください</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* プロジェクト情報 */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-blue-500" />
          招待先お客様情報
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">お客様名</p>
            <p className="font-medium">{project.customer.name}様</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">メールアドレス</p>
            <p className="font-medium">{project.customer.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">プロジェクト名</p>
            <p className="font-medium">{project.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">プラン</p>
            <p className="font-medium">{project.building.planType}</p>
          </div>
        </div>
      </div>

      {/* アクセスコード */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900 flex items-center gap-2">
            <Key className="w-5 h-5 text-purple-500" />
            アクセスコード
          </h3>
          <button
            onClick={handleRegenerateCode}
            className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
          >
            <RefreshCw className="w-4 h-4" />
            再生成
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1 bg-gray-100 rounded-lg p-4 text-center">
            <p className="text-3xl font-mono font-bold tracking-widest text-gray-900">
              {accessCode || '------'}
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          お客様がシステムにアクセスする際に必要なコードです
        </p>
      </div>

      {/* 招待URL */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Link className="w-5 h-5 text-green-500" />
          招待URL
        </h3>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={invitationUrl || ''}
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
        {copied && (
          <p className="text-sm text-green-600 mt-2">URLをコピーしました</p>
        )}
      </div>

      {/* アクションボタン */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button
          onClick={handleSendEmail}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Mail className="w-5 h-5" />
          メールで送信
        </button>
        <button
          onClick={() => setShowQR(!showQR)}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <QrCode className="w-5 h-5" />
          QRコード{showQR ? 'を閉じる' : 'を表示'}
        </button>
        <button
          onClick={() => window.open(invitationUrl || '', '_blank')}
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
            {/* 実際のQRコード生成にはライブラリが必要 - ここではプレースホルダー */}
            <div className="w-48 h-48 bg-gray-100 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <QrCode className="w-16 h-16 mx-auto mb-2" />
                <p className="text-xs">QRコード</p>
                <p className="text-xs">(qrcode.react等で実装)</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            スマートフォンで読み取ると、招待URLにアクセスできます
          </p>
        </div>
      )}

      {/* 注意事項 */}
      <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-yellow-800">
            <p className="font-medium mb-1">ご注意</p>
            <ul className="list-disc list-inside space-y-1 text-yellow-700">
              <li>招待URLとアクセスコードはお客様のみに共有してください</li>
              <li>アクセスコードを再生成すると、以前のコードは無効になります</li>
              <li>お客様がアクセスするとログイン履歴に記録されます</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

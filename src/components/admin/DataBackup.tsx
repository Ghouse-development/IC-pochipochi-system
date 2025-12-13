import React, { useState } from 'react';
import { Download, Upload, AlertTriangle, CheckCircle, Database, RefreshCw, Trash2, HardDrive } from 'lucide-react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';

interface BackupData {
  version: string;
  createdAt: string;
  data: {
    cart: unknown;
    statistics: unknown;
    vendorOrders: unknown;
    versions: unknown;
    estimates: unknown;
  };
}

export const DataBackup: React.FC = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [lastBackup, setLastBackup] = useState<string | null>(
    localStorage.getItem('lifex-last-backup')
  );
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // 全データをエクスポート
  const handleExport = () => {
    setIsExporting(true);
    setMessage(null);

    try {
      const backupData: BackupData = {
        version: '1.0.0',
        createdAt: new Date().toISOString(),
        data: {
          cart: JSON.parse(localStorage.getItem('lifex-cart-storage') || '{}'),
          statistics: JSON.parse(localStorage.getItem('lifex-statistics-storage') || '{}'),
          vendorOrders: JSON.parse(localStorage.getItem('lifex-vendor-orders') || '{}'),
          versions: JSON.parse(localStorage.getItem('lifex-version-storage') || '{}'),
          estimates: JSON.parse(localStorage.getItem('lifex_finalized_estimates') || '[]'),
        },
      };

      const blob = new Blob([JSON.stringify(backupData, null, 2)], {
        type: 'application/json',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `lifex-backup-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      const now = new Date().toISOString();
      localStorage.setItem('lifex-last-backup', now);
      setLastBackup(now);
      setMessage({ type: 'success', text: 'バックアップが完了しました' });
    } catch (error) {
      console.error('Backup error:', error);
      setMessage({ type: 'error', text: 'バックアップに失敗しました' });
    } finally {
      setIsExporting(false);
    }
  };

  // データをインポート
  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    setMessage(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const backupData: BackupData = JSON.parse(content);

        // バージョン確認
        if (!backupData.version || !backupData.data) {
          throw new Error('無効なバックアップファイルです');
        }

        // 確認ダイアログ
        const confirm = window.confirm(
          `以下のバックアップを復元しますか？\n\n` +
          `作成日時: ${new Date(backupData.createdAt).toLocaleString('ja-JP')}\n` +
          `バージョン: ${backupData.version}\n\n` +
          `注意: 現在のデータは上書きされます。`
        );

        if (!confirm) {
          setIsImporting(false);
          return;
        }

        // データを復元
        if (backupData.data.cart) {
          localStorage.setItem('lifex-cart-storage', JSON.stringify(backupData.data.cart));
        }
        if (backupData.data.statistics) {
          localStorage.setItem('lifex-statistics-storage', JSON.stringify(backupData.data.statistics));
        }
        if (backupData.data.vendorOrders) {
          localStorage.setItem('lifex-vendor-orders', JSON.stringify(backupData.data.vendorOrders));
        }
        if (backupData.data.versions) {
          localStorage.setItem('lifex-version-storage', JSON.stringify(backupData.data.versions));
        }
        if (backupData.data.estimates) {
          localStorage.setItem('lifex_finalized_estimates', JSON.stringify(backupData.data.estimates));
        }

        setMessage({ type: 'success', text: '復元が完了しました。ページを再読み込みしてください。' });

        // 3秒後にリロード
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (error) {
        console.error('Import error:', error);
        setMessage({ type: 'error', text: 'インポートに失敗しました。ファイルを確認してください。' });
      } finally {
        setIsImporting(false);
      }
    };

    reader.onerror = () => {
      setMessage({ type: 'error', text: 'ファイルの読み込みに失敗しました' });
      setIsImporting(false);
    };

    reader.readAsText(file);
    event.target.value = ''; // リセット
  };

  // ストレージ使用量を計算
  const getStorageUsage = () => {
    let total = 0;
    for (const key in localStorage) {
      if (key.startsWith('lifex')) {
        total += localStorage.getItem(key)?.length || 0;
      }
    }
    return (total / 1024).toFixed(2);
  };

  // 全データをクリア
  const handleClearAll = () => {
    const confirm = window.confirm(
      '警告: すべてのデータを削除しますか？\n\n' +
      'この操作は取り消せません。\n' +
      '先にバックアップを取ることをお勧めします。'
    );

    if (!confirm) return;

    const confirmAgain = window.confirm(
      '本当に削除しますか？\n\nこれが最後の確認です。'
    );

    if (!confirmAgain) return;

    // LIFEX関連のデータのみ削除
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('lifex')) {
        keysToRemove.push(key);
      }
    }

    keysToRemove.forEach(key => localStorage.removeItem(key));
    localStorage.removeItem('stylebook_user');

    setMessage({ type: 'success', text: 'データを削除しました。ページを再読み込みします。' });

    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  // データ項目数を取得
  const getDataCounts = () => {
    try {
      const cart = JSON.parse(localStorage.getItem('lifex-cart-storage') || '{}');
      const stats = JSON.parse(localStorage.getItem('lifex-statistics-storage') || '{}');
      const orders = JSON.parse(localStorage.getItem('lifex-vendor-orders') || '{}');
      const estimates = JSON.parse(localStorage.getItem('lifex_finalized_estimates') || '[]');

      return {
        cartItems: cart.state?.items?.length || 0,
        productStats: stats.state?.productStats?.length || 0,
        vendorOrders: orders.state?.orders?.length || 0,
        vendors: orders.state?.vendors?.length || 0,
        estimates: Array.isArray(estimates) ? estimates.length : 0,
      };
    } catch {
      return { cartItems: 0, productStats: 0, vendorOrders: 0, vendors: 0, estimates: 0 };
    }
  };

  const dataCounts = getDataCounts();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">データバックアップ</h2>
        <p className="text-sm text-gray-600 mt-1">
          システムデータのバックアップと復元を行います
        </p>
      </div>

      {/* メッセージ */}
      {message && (
        <div className={`p-4 rounded-lg flex items-center gap-3 ${
          message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {message.type === 'success' ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <AlertTriangle className="w-5 h-5" />
          )}
          {message.text}
        </div>
      )}

      {/* ストレージ情報 */}
      <Card className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <HardDrive className="w-5 h-5 text-gray-600" />
          <h3 className="font-semibold text-gray-900">ストレージ情報</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-gray-900">{dataCounts.cartItems}</p>
            <p className="text-xs text-gray-500">カート商品</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-gray-900">{dataCounts.productStats}</p>
            <p className="text-xs text-gray-500">採用統計</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-gray-900">{dataCounts.vendorOrders}</p>
            <p className="text-xs text-gray-500">発注書</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-gray-900">{dataCounts.vendors}</p>
            <p className="text-xs text-gray-500">業者</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-gray-900">{dataCounts.estimates}</p>
            <p className="text-xs text-gray-500">確定見積</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>使用容量: {getStorageUsage()} KB</span>
          {lastBackup && (
            <span>最終バックアップ: {new Date(lastBackup).toLocaleString('ja-JP')}</span>
          )}
        </div>
      </Card>

      {/* バックアップ操作 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Download className="w-6 h-6 text-teal-600" />
            <div>
              <h3 className="font-semibold text-gray-900">データをエクスポート</h3>
              <p className="text-sm text-gray-600">全データをJSONファイルとして保存</p>
            </div>
          </div>
          <Button
            variant="primary"
            onClick={handleExport}
            disabled={isExporting}
            className="w-full"
          >
            {isExporting ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                エクスポート中...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                バックアップをダウンロード
              </>
            )}
          </Button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Upload className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold text-gray-900">データをインポート</h3>
              <p className="text-sm text-gray-600">バックアップファイルから復元</p>
            </div>
          </div>
          <label className="block">
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              disabled={isImporting}
              className="hidden"
            />
            <span
              className={`inline-flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md text-sm font-medium cursor-pointer ${
                isImporting ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {isImporting ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  インポート中...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  ファイルを選択して復元
                </>
              )}
            </span>
          </label>
        </Card>
      </div>

      {/* 危険な操作 */}
      <Card className="p-6 border-red-200 bg-red-50">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          <div>
            <h3 className="font-semibold text-red-900">危険な操作</h3>
            <p className="text-sm text-red-700">この操作は取り消せません</p>
          </div>
        </div>
        <Button
          variant="outline"
          onClick={handleClearAll}
          className="border-red-300 text-red-600 hover:bg-red-100"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          全データを削除
        </Button>
      </Card>

      {/* 注意事項 */}
      <Card className="p-4 bg-amber-50 border-amber-200">
        <div className="flex items-start gap-3">
          <Database className="w-5 h-5 text-amber-600 mt-0.5" />
          <div className="text-sm text-amber-800">
            <p className="font-medium mb-1">バックアップについて</p>
            <ul className="list-disc list-inside space-y-1 text-amber-700">
              <li>定期的なバックアップをお勧めします（週1回以上）</li>
              <li>重要な変更前には必ずバックアップを取ってください</li>
              <li>バックアップファイルは安全な場所に保管してください</li>
              <li>復元時は現在のデータが上書きされます</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

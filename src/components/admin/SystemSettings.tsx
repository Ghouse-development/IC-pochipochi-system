import { useState, useEffect } from 'react';
import { Save, RefreshCw, Building, Percent, Ruler, Mail, Bell, FileText } from 'lucide-react';
import { settingsApi } from '../../services/api';
import type { SystemSetting } from '../../types/database';
import { useTimeout } from '../../hooks/useTimeout';
import { createLogger } from '../../lib/logger';

const logger = createLogger('SystemSettings');

interface SettingValue {
  [key: string]: unknown;
}

export function SystemSettings() {
  const { setTimeout } = useTimeout();
  const [, setSettings] = useState<SystemSetting[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [editedSettings, setEditedSettings] = useState<Record<string, SettingValue>>({});

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await settingsApi.getAll();
      setSettings(data);
      // Initialize edited settings
      const edited: Record<string, SettingValue> = {};
      data.forEach((s) => {
        edited[s.setting_key] = s.setting_value as SettingValue;
      });
      setEditedSettings(edited);
    } catch (err) {
      setError('設定の読み込みに失敗しました');
      logger.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async (key: string) => {
    setIsSaving(true);
    setError(null);
    setSuccessMessage(null);
    try {
      await settingsApi.update(key, editedSettings[key]);
      setSuccessMessage('設定を保存しました');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err) {
      setError('設定の保存に失敗しました');
      logger.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  const updateSetting = (key: string, field: string, value: unknown) => {
    setEditedSettings((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: value,
      },
    }));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">システム設定</h2>
          <p className="text-gray-600 mt-1">システムの各種設定を管理します</p>
        </div>
        <button
          onClick={loadSettings}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900"
        >
          <RefreshCw className="w-4 h-4" />
          再読込
        </button>
      </div>

      {/* Messages */}
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">{error}</div>
      )}
      {successMessage && (
        <div className="bg-green-50 text-green-600 p-4 rounded-lg">{successMessage}</div>
      )}

      {/* Company Info */}
      <SettingCard
        title="会社情報"
        description="見積書・仕様書に表示される会社情報"
        icon={<Building className="w-5 h-5" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">会社名</label>
            <input
              type="text"
              value={(editedSettings.company_info?.name as string) || ''}
              onChange={(e) => updateSetting('company_info', 'name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">電話番号</label>
            <input
              type="text"
              value={(editedSettings.company_info?.phone as string) || ''}
              onChange={(e) => updateSetting('company_info', 'phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
            <input
              type="email"
              value={(editedSettings.company_info?.email as string) || ''}
              onChange={(e) => updateSetting('company_info', 'email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ロゴURL</label>
            <input
              type="text"
              value={(editedSettings.company_info?.logo_url as string) || ''}
              onChange={(e) => updateSetting('company_info', 'logo_url', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="https://..."
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">住所</label>
            <input
              type="text"
              value={(editedSettings.company_info?.address as string) || ''}
              onChange={(e) => updateSetting('company_info', 'address', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => handleSave('company_info')}
            disabled={isSaving}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            保存
          </button>
        </div>
      </SettingCard>

      {/* Tax Rate */}
      <SettingCard
        title="消費税設定"
        description="見積金額に適用する消費税率"
        icon={<Percent className="w-5 h-5" />}
      >
        <div className="max-w-xs">
          <label className="block text-sm font-medium text-gray-700 mb-1">消費税率（%）</label>
          <input
            type="number"
            value={(editedSettings.tax_rate?.rate as number) || 10}
            onChange={(e) => updateSetting('tax_rate', 'rate', Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            min="0"
            max="100"
          />
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => handleSave('tax_rate')}
            disabled={isSaving}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            保存
          </button>
        </div>
      </SettingCard>

      {/* Porch Standard Size */}
      <SettingCard
        title="標準ポーチサイズ"
        description="デフォルトのポーチサイズ設定"
        icon={<Ruler className="w-5 h-5" />}
      >
        <div className="grid grid-cols-2 gap-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">幅（m）</label>
            <input
              type="number"
              value={(editedSettings.porch_standard_size?.width as number) || 1.8}
              onChange={(e) => updateSetting('porch_standard_size', 'width', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              step="0.1"
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">奥行（m）</label>
            <input
              type="number"
              value={(editedSettings.porch_standard_size?.height as number) || 1.8}
              onChange={(e) => updateSetting('porch_standard_size', 'height', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              step="0.1"
              min="0"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => handleSave('porch_standard_size')}
            disabled={isSaving}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            保存
          </button>
        </div>
      </SettingCard>

      {/* Window Count Settings */}
      <SettingCard
        title="坪数別標準窓数"
        description="建物の坪数に応じた標準窓数の設定"
        icon={<FileText className="w-5 h-5" />}
      >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">35坪未満</label>
            <input
              type="number"
              value={(editedSettings.window_standard_count?.under_35 as number) || 10}
              onChange={(e) => updateSetting('window_standard_count', 'under_35', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">35-40坪</label>
            <input
              type="number"
              value={(editedSettings.window_standard_count?.['35_40'] as number) || 11}
              onChange={(e) => updateSetting('window_standard_count', '35_40', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">40-45坪</label>
            <input
              type="number"
              value={(editedSettings.window_standard_count?.['40_45'] as number) || 12}
              onChange={(e) => updateSetting('window_standard_count', '40_45', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">45-50坪</label>
            <input
              type="number"
              value={(editedSettings.window_standard_count?.['45_50'] as number) || 13}
              onChange={(e) => updateSetting('window_standard_count', '45_50', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">50坪以上</label>
            <input
              type="number"
              value={(editedSettings.window_standard_count?.over_50 as number) || 14}
              onChange={(e) => updateSetting('window_standard_count', 'over_50', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              min="0"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => handleSave('window_standard_count')}
            disabled={isSaving}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            保存
          </button>
        </div>
      </SettingCard>

      {/* Tutorial Settings */}
      <SettingCard
        title="チュートリアル設定"
        description="初回ログイン時のチュートリアル表示"
        icon={<Bell className="w-5 h-5" />}
      >
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="tutorial-enabled"
            checked={(editedSettings.tutorial_enabled?.enabled as boolean) ?? true}
            onChange={(e) => updateSetting('tutorial_enabled', 'enabled', e.target.checked)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="tutorial-enabled" className="text-gray-700">
            新規ユーザーにチュートリアルを表示する
          </label>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => handleSave('tutorial_enabled')}
            disabled={isSaving}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            保存
          </button>
        </div>
      </SettingCard>

      {/* Watermark Settings */}
      <SettingCard
        title="ウォーターマーク設定"
        description="確定前の資料に表示するウォーターマーク"
        icon={<FileText className="w-5 h-5" />}
      >
        <div className="max-w-xs">
          <label className="block text-sm font-medium text-gray-700 mb-1">ウォーターマーク文字</label>
          <input
            type="text"
            value={(editedSettings.watermark_text?.text as string) || 'DRAFT'}
            onChange={(e) => updateSetting('watermark_text', 'text', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="例: DRAFT, 検討中"
          />
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => handleSave('watermark_text')}
            disabled={isSaving}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            保存
          </button>
        </div>
      </SettingCard>

      {/* Email Notification Settings */}
      <SettingCard
        title="メール通知設定"
        description="メール通知機能の設定（後から有効化）"
        icon={<Mail className="w-5 h-5" />}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="email-enabled"
              checked={(editedSettings.email_notification?.enabled as boolean) ?? false}
              onChange={(e) => updateSetting('email_notification', 'enabled', e.target.checked)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="email-enabled" className="text-gray-700">
              メール通知を有効にする
            </label>
          </div>
          {(editedSettings.email_notification?.enabled as boolean) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  メールプロバイダー
                </label>
                <select
                  value={(editedSettings.email_notification?.provider as string) || ''}
                  onChange={(e) => updateSetting('email_notification', 'provider', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">選択してください</option>
                  <option value="sendgrid">SendGrid</option>
                  <option value="ses">Amazon SES</option>
                  <option value="mailgun">Mailgun</option>
                  <option value="resend">Resend</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">APIキー</label>
                <input
                  type="password"
                  value={(editedSettings.email_notification?.api_key as string) || ''}
                  onChange={(e) => updateSetting('email_notification', 'api_key', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>
            </div>
          )}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => handleSave('email_notification')}
            disabled={isSaving}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            保存
          </button>
        </div>
      </SettingCard>
    </div>
  );
}

// Setting Card Component
function SettingCard({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

import React, { useState, useEffect, useCallback } from 'react';
import { Download, Upload, AlertTriangle, CheckCircle, Database, RefreshCw, HardDrive, Cloud, FileSpreadsheet, Clock, Power, PowerOff } from 'lucide-react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { ConfirmDialog } from '../common/ConfirmDialog';
import { supabase } from '../../lib/supabase';
import { useTimeout } from '../../hooks/useTimeout';
import { ANIMATION_DURATIONS, STORAGE_KEYS } from '../../lib/constants';
import { createLogger } from '../../lib/logger';

const logger = createLogger('DataBackup');

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

// Supabaseデータ統計
interface SupabaseStats {
  items: number;
  variants: number;
  pricing: number;
  categories: number;
  projects: number;
  selections: number;
}

// 自動バックアップ設定
interface AutoBackupSettings {
  enabled: boolean;
  interval: 'daily' | 'weekly' | 'monthly';
  lastAutoBackup: string | null;
  nextScheduledBackup: string | null;
}

const AUTO_BACKUP_SETTINGS_KEY = 'lifex-auto-backup-settings';

export const DataBackup: React.FC = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [isExportingSupabase, setIsExportingSupabase] = useState(false);
  const [lastBackup, setLastBackup] = useState<string | null>(
    localStorage.getItem(STORAGE_KEYS.LAST_BACKUP)
  );
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [supabaseStats, setSupabaseStats] = useState<SupabaseStats | null>(null);
  const [loadingStats, setLoadingStats] = useState(true);
  const { setTimeout } = useTimeout();

  // 自動バックアップ設定
  const [autoBackupSettings, setAutoBackupSettings] = useState<AutoBackupSettings>(() => {
    const saved = localStorage.getItem(AUTO_BACKUP_SETTINGS_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return { enabled: false, interval: 'weekly', lastAutoBackup: null, nextScheduledBackup: null };
      }
    }
    return { enabled: false, interval: 'weekly', lastAutoBackup: null, nextScheduledBackup: null };
  });

  // Supabase統計を取得
  useEffect(() => {
    let mounted = true;

    const fetchStats = async () => {
      setLoadingStats(true);
      try {
        const [items, variants, pricing, categories, projects, selections] = await Promise.all([
          supabase.from('items').select('id', { count: 'exact', head: true }),
          supabase.from('item_variants').select('id', { count: 'exact', head: true }),
          supabase.from('item_pricing').select('id', { count: 'exact', head: true }),
          supabase.from('categories').select('id', { count: 'exact', head: true }),
          supabase.from('projects').select('id', { count: 'exact', head: true }),
          supabase.from('selections').select('id', { count: 'exact', head: true }),
        ]);

        if (mounted) {
          setSupabaseStats({
            items: items.count || 0,
            variants: variants.count || 0,
            pricing: pricing.count || 0,
            categories: categories.count || 0,
            projects: projects.count || 0,
            selections: selections.count || 0,
          });
        }
      } catch (error) {
        if (mounted) {
          logger.error('Failed to fetch Supabase stats:', error);
        }
      } finally {
        if (mounted) {
          setLoadingStats(false);
        }
      }
    };

    fetchStats();

    return () => {
      mounted = false;
    };
  }, []);

  // 次回バックアップ日時を計算
  const calculateNextBackupDate = useCallback((interval: 'daily' | 'weekly' | 'monthly', fromDate: Date = new Date()): Date => {
    const next = new Date(fromDate);
    switch (interval) {
      case 'daily':
        next.setDate(next.getDate() + 1);
        break;
      case 'weekly':
        next.setDate(next.getDate() + 7);
        break;
      case 'monthly':
        next.setMonth(next.getMonth() + 1);
        break;
    }
    next.setHours(3, 0, 0, 0); // AM 3:00に設定
    return next;
  }, []);

  // 自動バックアップ設定を保存
  const saveAutoBackupSettings = useCallback((settings: AutoBackupSettings) => {
    localStorage.setItem(AUTO_BACKUP_SETTINGS_KEY, JSON.stringify(settings));
    setAutoBackupSettings(settings);
  }, []);

  // 自動バックアップを実行（ページ読み込み時に確認）
  const executeAutoBackup = useCallback(async () => {
    if (!autoBackupSettings.enabled) return;

    const now = new Date();
    const nextScheduled = autoBackupSettings.nextScheduledBackup
      ? new Date(autoBackupSettings.nextScheduledBackup)
      : null;

    // 次回バックアップ日時を過ぎていたら実行
    if (nextScheduled && now >= nextScheduled) {
      logger.info('Auto backup triggered');

      try {
        // Supabaseの全データをバックアップ
        const [items, variants, pricing, categories, projects, selections] = await Promise.all([
          supabase.from('items').select('*'),
          supabase.from('item_variants').select('*'),
          supabase.from('item_pricing').select('*'),
          supabase.from('categories').select('*'),
          supabase.from('projects').select('*'),
          supabase.from('selections').select('*'),
        ]);

        const backupData = {
          exportedAt: now.toISOString(),
          version: '2.10.0',
          autoBackup: true,
          data: {
            items: items.data || [],
            item_variants: variants.data || [],
            item_pricing: pricing.data || [],
            categories: categories.data || [],
            projects: projects.data || [],
            selections: selections.data || [],
          }
        };

        // 自動ダウンロード
        const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `auto-backup-${now.toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        // 設定を更新
        const nextDate = calculateNextBackupDate(autoBackupSettings.interval, now);
        const updatedSettings: AutoBackupSettings = {
          ...autoBackupSettings,
          lastAutoBackup: now.toISOString(),
          nextScheduledBackup: nextDate.toISOString(),
        };
        saveAutoBackupSettings(updatedSettings);

        setMessage({ type: 'success', text: '自動バックアップが完了しました' });
        logger.info('Auto backup completed');
      } catch (error) {
        logger.error('Auto backup failed:', error);
      }
    }
  }, [autoBackupSettings, calculateNextBackupDate, saveAutoBackupSettings]);

  // 自動バックアップのトリガー確認（ページ読み込み時）
  useEffect(() => {
    if (autoBackupSettings.enabled) {
      executeAutoBackup();
    }
  }, [executeAutoBackup, autoBackupSettings.enabled]);

  // 自動バックアップの有効/無効を切り替え
  const toggleAutoBackup = useCallback(() => {
    const newEnabled = !autoBackupSettings.enabled;
    const now = new Date();
    const nextDate = newEnabled ? calculateNextBackupDate(autoBackupSettings.interval, now) : null;

    const updatedSettings: AutoBackupSettings = {
      ...autoBackupSettings,
      enabled: newEnabled,
      nextScheduledBackup: nextDate?.toISOString() || null,
    };
    saveAutoBackupSettings(updatedSettings);

    if (newEnabled) {
      setMessage({ type: 'success', text: '自動バックアップを有効にしました' });
    } else {
      setMessage({ type: 'success', text: '自動バックアップを無効にしました' });
    }
  }, [autoBackupSettings, calculateNextBackupDate, saveAutoBackupSettings]);

  // 自動バックアップの間隔を変更
  const changeAutoBackupInterval = useCallback((interval: 'daily' | 'weekly' | 'monthly') => {
    const now = new Date();
    const nextDate = autoBackupSettings.enabled ? calculateNextBackupDate(interval, now) : null;

    const updatedSettings: AutoBackupSettings = {
      ...autoBackupSettings,
      interval,
      nextScheduledBackup: nextDate?.toISOString() || null,
    };
    saveAutoBackupSettings(updatedSettings);
  }, [autoBackupSettings, calculateNextBackupDate, saveAutoBackupSettings]);

  // SupabaseデータをCSVエクスポート
  const handleExportSupabase = async (tableName: string) => {
    setIsExportingSupabase(true);
    setMessage(null);

    try {
      const { data, error } = await supabase.from(tableName).select('*');
      if (error) throw error;

      if (!data || data.length === 0) {
        setMessage({ type: 'error', text: `${tableName}にデータがありません` });
        return;
      }

      // CSVインジェクション対策: 危険な先頭文字をエスケープ
      const escapeCsvValue = (val: unknown): string => {
        if (val === null || val === undefined) return '';

        let strVal: string;
        if (typeof val === 'object') {
          strVal = JSON.stringify(val);
        } else {
          strVal = String(val);
        }

        // CSVインジェクション対策: =, +, -, @, \t, \r で始まる値は先頭にシングルクォートを追加
        if (/^[=+\-@\t\r]/.test(strVal)) {
          strVal = "'" + strVal;
        }

        // カンマ、ダブルクォート、改行を含む場合はダブルクォートで囲む
        if (strVal.includes(',') || strVal.includes('"') || strVal.includes('\n') || strVal.includes('\r')) {
          return `"${strVal.replace(/"/g, '""')}"`;
        }

        return strVal;
      };

      // CSVに変換
      const headers = Object.keys(data[0]);
      const csvContent = [
        headers.join(','),
        ...data.map(row =>
          headers.map(h => escapeCsvValue(row[h])).join(',')
        )
      ].join('\n');

      const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${tableName}-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setMessage({ type: 'success', text: `${tableName}をエクスポートしました` });
    } catch (error) {
      logger.error('Export error:', error);
      setMessage({ type: 'error', text: 'エクスポートに失敗しました' });
    } finally {
      setIsExportingSupabase(false);
    }
  };

  // Supabase全データをJSONエクスポート
  const handleExportAllSupabase = async () => {
    setIsExportingSupabase(true);
    setMessage(null);

    try {
      const [items, variants, pricing, categories] = await Promise.all([
        supabase.from('items').select('*'),
        supabase.from('item_variants').select('*'),
        supabase.from('item_pricing').select('*'),
        supabase.from('categories').select('*'),
      ]);

      const exportData = {
        exportedAt: new Date().toISOString(),
        version: '2.10.0',
        data: {
          items: items.data || [],
          item_variants: variants.data || [],
          item_pricing: pricing.data || [],
          categories: categories.data || [],
        }
      };

      const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `supabase-backup-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setMessage({ type: 'success', text: 'Supabase全データをエクスポートしました' });
    } catch (error) {
      logger.error('Export error:', error);
      setMessage({ type: 'error', text: 'エクスポートに失敗しました' });
    } finally {
      setIsExportingSupabase(false);
    }
  };

  // Confirm dialog state
  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    variant: 'danger' | 'warning' | 'info';
    onConfirm: () => void;
    confirmText?: string;
  }>({
    isOpen: false,
    title: '',
    message: '',
    variant: 'warning',
    onConfirm: () => {},
  });


  // 安全にlocalStorageからJSONをパースするヘルパー
  const safeParseLocalStorage = (key: string, defaultValue: unknown = {}): unknown => {
    try {
      const stored = localStorage.getItem(key);
      if (!stored) return defaultValue;
      return JSON.parse(stored);
    } catch (error) {
      logger.warn(`Failed to parse localStorage key "${key}":`, error);
      return defaultValue;
    }
  };

  // 全データをエクスポート
  const handleExport = () => {
    setIsExporting(true);
    setMessage(null);

    try {
      const backupData: BackupData = {
        version: '1.0.0',
        createdAt: new Date().toISOString(),
        data: {
          cart: safeParseLocalStorage('lifex-cart-storage', {}),
          statistics: safeParseLocalStorage('lifex-statistics-storage', {}),
          vendorOrders: safeParseLocalStorage('lifex-vendor-orders', {}),
          versions: safeParseLocalStorage('lifex-version-storage', {}),
          estimates: safeParseLocalStorage('lifex_finalized_estimates', []),
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
      localStorage.setItem(STORAGE_KEYS.LAST_BACKUP, now);
      setLastBackup(now);
      setMessage({ type: 'success', text: 'バックアップが完了しました' });
    } catch (error) {
      logger.error('Backup error:', error);
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

        // 確認ダイアログを表示
        setConfirmDialog({
          isOpen: true,
          title: 'バックアップを復元',
          message: `以下のバックアップを復元しますか？\n\n作成日時: ${new Date(backupData.createdAt).toLocaleString('ja-JP')}\nバージョン: ${backupData.version}\n\n注意: 現在のデータは上書きされます。`,
          variant: 'warning',
          confirmText: '復元する',
          onConfirm: () => executeImport(backupData),
        });
        setIsImporting(false);
      } catch (error) {
        logger.error('Import error:', error);
        setMessage({ type: 'error', text: 'インポートに失敗しました。ファイルを確認してください。' });
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

  const executeImport = (backupData: BackupData) => {
    // データを復元
    if (backupData.data.cart) {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(backupData.data.cart));
    }
    if (backupData.data.statistics) {
      localStorage.setItem(STORAGE_KEYS.STATISTICS, JSON.stringify(backupData.data.statistics));
    }
    if (backupData.data.vendorOrders) {
      localStorage.setItem(STORAGE_KEYS.VENDOR_ORDERS, JSON.stringify(backupData.data.vendorOrders));
    }
    if (backupData.data.versions) {
      localStorage.setItem(STORAGE_KEYS.VERSIONS, JSON.stringify(backupData.data.versions));
    }
    if (backupData.data.estimates) {
      localStorage.setItem(STORAGE_KEYS.FINALIZED_ESTIMATES, JSON.stringify(backupData.data.estimates));
    }

    setMessage({ type: 'success', text: '復元が完了しました。ページを再読み込みしてください。' });

    // リロード
    setTimeout(() => {
      window.location.reload();
    }, ANIMATION_DURATIONS.RELOAD_DELAY);
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

  // データ項目数を取得
  const getDataCounts = () => {
    const cart = safeParseLocalStorage('lifex-cart-storage', {}) as Record<string, unknown>;
    const stats = safeParseLocalStorage('lifex-statistics-storage', {}) as Record<string, unknown>;
    const orders = safeParseLocalStorage('lifex-vendor-orders', {}) as Record<string, unknown>;
    const estimates = safeParseLocalStorage('lifex_finalized_estimates', []);

    const cartState = cart.state as Record<string, unknown> | undefined;
    const statsState = stats.state as Record<string, unknown> | undefined;
    const ordersState = orders.state as Record<string, unknown> | undefined;

    return {
      cartItems: Array.isArray(cartState?.items) ? cartState.items.length : 0,
      productStats: Array.isArray(statsState?.productStats) ? statsState.productStats.length : 0,
      vendorOrders: Array.isArray(ordersState?.orders) ? ordersState.orders.length : 0,
      vendors: Array.isArray(ordersState?.vendors) ? ordersState.vendors.length : 0,
      estimates: Array.isArray(estimates) ? estimates.length : 0,
    };
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
          message.type === 'success'
            ? 'bg-blue-50 text-blue-700'
            : 'bg-red-50 text-red-700'
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

      {/* 自動バックアップ設定 */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">自動バックアップ設定</h3>
          </div>
          <button
            onClick={toggleAutoBackup}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              autoBackupSettings.enabled
                ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {autoBackupSettings.enabled ? (
              <>
                <Power className="w-4 h-4" />
                有効
              </>
            ) : (
              <>
                <PowerOff className="w-4 h-4" />
                無効
              </>
            )}
          </button>
        </div>

        <div className="space-y-4">
          {/* バックアップ間隔 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">バックアップ間隔</label>
            <div className="flex gap-2">
              {[
                { value: 'daily' as const, label: '毎日' },
                { value: 'weekly' as const, label: '毎週' },
                { value: 'monthly' as const, label: '毎月' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => changeAutoBackupInterval(option.value)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    autoBackupSettings.interval === option.value
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* バックアップ情報 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">前回の自動バックアップ</p>
              <p className="text-sm font-medium text-gray-900">
                {autoBackupSettings.lastAutoBackup
                  ? new Date(autoBackupSettings.lastAutoBackup).toLocaleString('ja-JP')
                  : '未実行'}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">次回の予定</p>
              <p className="text-sm font-medium text-gray-900">
                {autoBackupSettings.enabled && autoBackupSettings.nextScheduledBackup
                  ? new Date(autoBackupSettings.nextScheduledBackup).toLocaleString('ja-JP')
                  : autoBackupSettings.enabled ? '設定中...' : '無効'}
              </p>
            </div>
          </div>

          {/* 説明 */}
          <div className="text-sm text-gray-500">
            <p>
              自動バックアップを有効にすると、設定した間隔でSupabaseの全データがJSONファイルとして自動的にダウンロードされます。
              ブラウザを開いているときにバックアップ時刻を過ぎると自動的に実行されます。
            </p>
          </div>
        </div>
      </Card>

      {/* Supabaseデータ情報 */}
      <Card className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Cloud className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">Supabaseデータ（商品マスター）</h3>
        </div>

        {loadingStats ? (
          <div className="flex items-center justify-center py-4">
            <RefreshCw className="w-5 h-5 animate-spin text-gray-400" />
          </div>
        ) : supabaseStats ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4">
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-blue-900">{supabaseStats.items}</p>
                <p className="text-xs text-blue-600">商品</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-blue-900">{supabaseStats.variants}</p>
                <p className="text-xs text-blue-600">バリアント</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-blue-900">{supabaseStats.pricing}</p>
                <p className="text-xs text-blue-600">価格</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-blue-900">{supabaseStats.categories}</p>
                <p className="text-xs text-blue-600">カテゴリ</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-blue-900">{supabaseStats.projects}</p>
                <p className="text-xs text-blue-600">プロジェクト</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-blue-900">{supabaseStats.selections}</p>
                <p className="text-xs text-blue-600">選択履歴</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportAllSupabase}
                disabled={isExportingSupabase}
              >
                <Download className="w-4 h-4 mr-1" />
                全データJSON
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleExportSupabase('items')}
                disabled={isExportingSupabase}
              >
                <FileSpreadsheet className="w-4 h-4 mr-1" />
                商品CSV
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleExportSupabase('item_variants')}
                disabled={isExportingSupabase}
              >
                <FileSpreadsheet className="w-4 h-4 mr-1" />
                バリアントCSV
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleExportSupabase('item_pricing')}
                disabled={isExportingSupabase}
              >
                <FileSpreadsheet className="w-4 h-4 mr-1" />
                価格CSV
              </Button>
            </div>
          </>
        ) : (
          <p className="text-sm text-gray-500">データの取得に失敗しました</p>
        )}
      </Card>

      {/* ローカルバックアップ操作 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Download className="w-6 h-6 text-blue-600" />
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
              aria-label="バックアップファイルを選択"
            />
            <span
              className={`inline-flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md text-sm font-medium cursor-pointer ${
                isImporting
                  ? 'bg-gray-100 text-gray-400'
                  : 'bg-white text-gray-700 hover:bg-gray-50:bg-gray-700'
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

      {/* 確認ダイアログ */}
      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        onClose={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        onConfirm={confirmDialog.onConfirm}
        title={confirmDialog.title}
        message={confirmDialog.message}
        variant={confirmDialog.variant}
        confirmText={confirmDialog.confirmText}
      />
    </div>
  );
};

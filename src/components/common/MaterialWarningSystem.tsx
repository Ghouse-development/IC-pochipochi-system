/**
 * 部材注意点強制表示システム
 * - 商品選択時に注意点を必ず表示
 * - 確認しないと選択できない仕組み
 * - 重要度別の警告レベル
 */
import React, { useState, useCallback, useEffect } from 'react';
import { AlertTriangle, AlertCircle, Info, CheckCircle, Eye, Clock } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

export type WarningLevel = 'critical' | 'warning' | 'info';

export interface MaterialWarning {
  id: string;
  productId: string;
  level: WarningLevel;
  title: string;
  description: string;
  category?: string;
  requiredAction?: string;
  relatedProducts?: string[];
  expiresAt?: Date;
}

interface MaterialWarningModalProps {
  warnings: MaterialWarning[];
  productName: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const WARNING_STYLES = {
  critical: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: AlertTriangle,
    iconColor: 'text-red-600',
    title: 'text-red-800',
    badge: 'bg-red-500 text-white'
  },
  warning: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    icon: AlertCircle,
    iconColor: 'text-amber-600',
    title: 'text-amber-800',
    badge: 'bg-amber-500 text-white'
  },
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: Info,
    iconColor: 'text-blue-600',
    title: 'text-blue-800',
    badge: 'bg-blue-500 text-white'
  }
};

export const MaterialWarningModal: React.FC<MaterialWarningModalProps> = ({
  warnings,
  productName,
  isOpen,
  onConfirm,
  onCancel
}) => {
  const [acknowledged, setAcknowledged] = useState<Set<string>>(new Set());
  const [readTime, setReadTime] = useState(0);

  // 全ての重要警告が確認されたかチェック
  const criticalWarnings = warnings.filter(w => w.level === 'critical');
  const allCriticalAcknowledged = criticalWarnings.every(w => acknowledged.has(w.id));

  // 最低限の読了時間（重要警告の数 × 3秒）
  const minReadTime = criticalWarnings.length * 3;
  const canConfirm = allCriticalAcknowledged && readTime >= minReadTime;

  // 読了タイマー
  useEffect(() => {
    if (!isOpen) {
      setReadTime(0);
      setAcknowledged(new Set());
      return;
    }

    const timer = setInterval(() => {
      setReadTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const handleAcknowledge = useCallback((warningId: string) => {
    setAcknowledged(prev => new Set([...prev, warningId]));
  }, []);

  if (!isOpen || warnings.length === 0) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onCancel()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl w-[95vw] max-w-2xl max-h-[90vh] flex flex-col z-50">
          {/* ヘッダー */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">ご確認ください</h2>
                <p className="text-amber-100">「{productName}」に関する重要なお知らせ</p>
              </div>
            </div>
          </div>

          {/* コンテンツ */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {warnings.map((warning) => {
              const style = WARNING_STYLES[warning.level];
              const Icon = style.icon;
              const isAcknowledged = acknowledged.has(warning.id);

              return (
                <div
                  key={warning.id}
                  className={`${style.bg} ${style.border} border rounded-xl p-4 transition-all ${
                    isAcknowledged ? 'opacity-60' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className={`w-6 h-6 ${style.iconColor} flex-shrink-0 mt-0.5`} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`${style.badge} text-xs font-bold px-2 py-0.5 rounded-full`}>
                          {warning.level === 'critical' ? '重要' : warning.level === 'warning' ? '注意' : 'お知らせ'}
                        </span>
                        <h4 className={`font-bold ${style.title}`}>{warning.title}</h4>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {warning.description}
                      </p>
                      {warning.requiredAction && (
                        <div className="mt-3 p-3 bg-white/50 rounded-lg">
                          <p className="text-sm font-medium text-gray-800">
                            対応事項: {warning.requiredAction}
                          </p>
                        </div>
                      )}
                      {warning.level === 'critical' && !isAcknowledged && (
                        <button
                          onClick={() => handleAcknowledge(warning.id)}
                          className="mt-3 flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          確認しました
                        </button>
                      )}
                      {isAcknowledged && (
                        <div className="mt-3 flex items-center gap-2 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm font-medium">確認済み</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* フッター */}
          <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
            {criticalWarnings.length > 0 && !allCriticalAcknowledged && (
              <p className="text-sm text-red-600 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                全ての重要項目を確認してください（残り{criticalWarnings.length - acknowledged.size}件）
              </p>
            )}
            {allCriticalAcknowledged && readTime < minReadTime && (
              <p className="text-sm text-amber-600 mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                内容をご確認ください（あと{minReadTime - readTime}秒）
              </p>
            )}
            <div className="flex gap-3">
              <button
                onClick={onCancel}
                className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300:bg-gray-600 transition-colors"
              >
                キャンセル
              </button>
              <button
                onClick={onConfirm}
                disabled={!canConfirm}
                className={`flex-[2] py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  canConfirm
                    ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white hover:from-blue-600 hover:to-emerald-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <CheckCircle className="w-5 h-5" />
                確認して選択
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

// 警告データの取得（実際はAPIから）
export const getMaterialWarnings = (productId: string, categoryName: string): MaterialWarning[] => {
  // カテゴリベースの汎用警告
  const warnings: MaterialWarning[] = [];

  // 床材の警告
  if (categoryName.includes('床') || categoryName.includes('フローリング')) {
    warnings.push({
      id: `floor-${productId}-1`,
      productId,
      level: 'warning',
      title: '施工方法の確認',
      description: '床暖房対応品かどうかをご確認ください。床暖房非対応品を床暖房の上に施工すると、反りや隙間の原因となります。',
      requiredAction: '床暖房の有無を確認'
    });
  }

  // クロスの警告
  if (categoryName.includes('クロス') || categoryName.includes('壁紙')) {
    warnings.push({
      id: `wallpaper-${productId}-1`,
      productId,
      level: 'info',
      title: 'ロット差について',
      description: '同じ品番でも製造ロットによって若干の色差が生じる場合があります。追加注文時はご注意ください。'
    });
  }

  // 建具の警告
  if (categoryName.includes('建具') || categoryName.includes('ドア')) {
    warnings.push({
      id: `door-${productId}-1`,
      productId,
      level: 'warning',
      title: '開き方向の確認',
      description: '右開き・左開きの指定が必要です。間取り図を確認の上、正しい開き方向を選択してください。',
      requiredAction: '開き方向を確定'
    });
  }

  // キッチンの警告
  if (categoryName.includes('キッチン')) {
    warnings.push({
      id: `kitchen-${productId}-1`,
      productId,
      level: 'critical',
      title: '搬入経路の確認必須',
      description: 'システムキッチンは大型商品のため、搬入経路（廊下幅、階段幅、エレベーター）の確認が必要です。搬入不可の場合、追加費用が発生する可能性があります。',
      requiredAction: '搬入経路を現場確認'
    });
  }

  // バス・ユニットバスの警告
  if (categoryName.includes('バス') || categoryName.includes('浴室')) {
    warnings.push({
      id: `bath-${productId}-1`,
      productId,
      level: 'critical',
      title: '現場寸法の確認必須',
      description: 'ユニットバスは規格サイズでの製造となります。現場寸法との整合性を必ず確認してください。',
      requiredAction: '現場寸法を測定・確認'
    });
  }

  return warnings;
};

// 警告チェックのフック
export const useWarningCheck = () => {
  const [pendingWarnings, setPendingWarnings] = useState<{
    warnings: MaterialWarning[];
    productName: string;
    onConfirm: () => void;
  } | null>(null);

  const checkWarnings = useCallback((
    productId: string,
    productName: string,
    categoryName: string,
    onConfirm: () => void
  ) => {
    const warnings = getMaterialWarnings(productId, categoryName);

    if (warnings.length === 0) {
      // 警告がなければそのまま実行
      onConfirm();
      return;
    }

    // 警告があればモーダル表示
    setPendingWarnings({
      warnings,
      productName,
      onConfirm
    });
  }, []);

  const handleConfirm = useCallback(() => {
    if (pendingWarnings) {
      pendingWarnings.onConfirm();
      setPendingWarnings(null);
    }
  }, [pendingWarnings]);

  const handleCancel = useCallback(() => {
    setPendingWarnings(null);
  }, []);

  return {
    checkWarnings,
    warningModal: pendingWarnings && (
      <MaterialWarningModal
        warnings={pendingWarnings.warnings}
        productName={pendingWarnings.productName}
        isOpen={true}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    )
  };
};

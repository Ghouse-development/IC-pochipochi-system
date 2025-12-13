import React, { useMemo } from 'react';
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  AlertCircle,
  ChevronRight,
  Zap,
  Shield
} from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { useCartStore } from '../../stores/useCartStore';

// 必須カテゴリ定義
const REQUIRED_CATEGORIES = {
  exterior: [
    { id: 'exterior-wall', name: '外壁', critical: true },
    { id: 'roof', name: '屋根', critical: true },
    { id: 'entrance-door', name: '玄関ドア', critical: true },
    { id: 'window', name: '窓', critical: true },
    { id: 'ecocute', name: 'エコキュート', critical: true },
  ],
  interior: [
    { id: 'floor', name: '床材', critical: true },
    { id: 'interior-door', name: '室内ドア', critical: true },
    { id: 'stair', name: '階段', critical: false },
    { id: 'switch-outlet', name: 'スイッチ/コンセント', critical: true },
  ],
  equipment: [
    { id: 'kitchen', name: 'キッチン', critical: true },
    { id: 'bath', name: 'バス', critical: true },
    { id: 'toilet', name: 'トイレ', critical: true },
    { id: 'washroom', name: '洗面台', critical: true },
  ],
};

interface ValidationResult {
  isComplete: boolean;
  completionRate: number;
  criticalMissing: string[];
  optionalMissing: string[];
  warnings: string[];
  suggestions: string[];
}

interface SelectionValidatorProps {
  onNavigateToCategory?: (categoryId: string) => void;
  compact?: boolean;
}

export const SelectionValidator: React.FC<SelectionValidatorProps> = ({
  onNavigateToCategory,
  compact = false,
}) => {
  const { items } = useCartStore();

  // バリデーション実行
  const validation = useMemo<ValidationResult>(() => {
    const allRequired = [
      ...REQUIRED_CATEGORIES.exterior,
      ...REQUIRED_CATEGORIES.interior,
      ...REQUIRED_CATEGORIES.equipment,
    ];

    const criticalMissing: string[] = [];
    const optionalMissing: string[] = [];
    const warnings: string[] = [];
    const suggestions: string[] = [];

    let selectedCount = 0;

    allRequired.forEach(category => {
      // カテゴリIDの部分一致チェック（より柔軟なマッチング）
      const isSelected = items.some(item =>
        item.product.categoryId.includes(category.id) ||
        item.product.categoryName?.toLowerCase().includes(category.name.toLowerCase())
      );

      if (isSelected) {
        selectedCount++;
      } else {
        if (category.critical) {
          criticalMissing.push(category.name);
        } else {
          optionalMissing.push(category.name);
        }
      }
    });

    // 警告チェック
    const duplicateCheck = new Map<string, number>();
    items.forEach(item => {
      const key = `${item.product.categoryId}-${item.product.name}`;
      duplicateCheck.set(key, (duplicateCheck.get(key) || 0) + 1);
    });
    duplicateCheck.forEach((count, key) => {
      if (count > 1) {
        warnings.push(`「${key.split('-').pop()}」が${count}個選択されています`);
      }
    });

    // 提案
    if (items.length === 0) {
      suggestions.push('まずは外装から選択を始めましょう');
    } else if (criticalMissing.length > 0) {
      suggestions.push(`必須項目「${criticalMissing[0]}」を選択してください`);
    }

    const completionRate = Math.round((selectedCount / allRequired.length) * 100);

    return {
      isComplete: criticalMissing.length === 0,
      completionRate,
      criticalMissing,
      optionalMissing,
      warnings,
      suggestions,
    };
  }, [items]);

  // コンパクト表示
  if (compact) {
    return (
      <div className="flex items-center gap-2">
        {validation.isComplete ? (
          <div className="flex items-center gap-1 text-green-600">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">必須項目完了</span>
          </div>
        ) : (
          <div className="flex items-center gap-1 text-amber-600">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">
              未選択: {validation.criticalMissing.length}件
            </span>
          </div>
        )}
        <div className="text-xs text-gray-500">
          ({validation.completionRate}%)
        </div>
      </div>
    );
  }

  return (
    <Card className="p-4 space-y-4">
      {/* ヘッダー */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-blue-600" />
          <h3 className="font-bold text-gray-900 dark:text-gray-100">
            選択チェック
          </h3>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-bold ${
          validation.isComplete
            ? 'bg-green-100 text-green-700'
            : validation.completionRate >= 50
            ? 'bg-amber-100 text-amber-700'
            : 'bg-red-100 text-red-700'
        }`}>
          {validation.completionRate}%
        </div>
      </div>

      {/* プログレスバー */}
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-500 ${
            validation.isComplete
              ? 'bg-green-500'
              : validation.completionRate >= 50
              ? 'bg-amber-500'
              : 'bg-red-500'
          }`}
          style={{ width: `${validation.completionRate}%` }}
        />
      </div>

      {/* ステータス */}
      {validation.isComplete ? (
        <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-green-700 dark:text-green-300 font-medium">
            全ての必須項目が選択されています
          </span>
        </div>
      ) : (
        <>
          {/* 必須項目の未選択 */}
          {validation.criticalMissing.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-red-600">
                <XCircle className="w-4 h-4" />
                <span className="text-sm font-medium">
                  必須項目が未選択です
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {validation.criticalMissing.map(name => (
                  <button
                    key={name}
                    onClick={() => onNavigateToCategory?.(name)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-sm hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors"
                  >
                    <AlertCircle className="w-3 h-3" />
                    {name}
                    <ChevronRight className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* オプション項目の未選択 */}
          {validation.optionalMissing.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-600">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm font-medium">
                  推奨項目が未選択です
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {validation.optionalMissing.map(name => (
                  <button
                    key={name}
                    onClick={() => onNavigateToCategory?.(name)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-lg text-sm hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors"
                  >
                    {name}
                    <ChevronRight className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* 警告 */}
      {validation.warnings.length > 0 && (
        <div className="space-y-1 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
          {validation.warnings.map((warning, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-amber-700 dark:text-amber-300">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              {warning}
            </div>
          ))}
        </div>
      )}

      {/* 提案 */}
      {validation.suggestions.length > 0 && !validation.isComplete && (
        <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <Zap className="w-4 h-4 text-blue-600" />
          <span className="text-sm text-blue-700 dark:text-blue-300">
            {validation.suggestions[0]}
          </span>
        </div>
      )}

      {/* アクション */}
      {!validation.isComplete && validation.criticalMissing.length > 0 && (
        <Button
          variant="primary"
          className="w-full"
          onClick={() => onNavigateToCategory?.(validation.criticalMissing[0])}
        >
          未選択の項目を選択する
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      )}
    </Card>
  );
};

// 選択完了前の確認ダイアログ用フック
export const useSelectionValidation = () => {
  const { items } = useCartStore();

  const validate = (): ValidationResult => {
    const allRequired = [
      ...REQUIRED_CATEGORIES.exterior,
      ...REQUIRED_CATEGORIES.interior,
      ...REQUIRED_CATEGORIES.equipment,
    ];

    const criticalMissing: string[] = [];
    const optionalMissing: string[] = [];
    let selectedCount = 0;

    allRequired.forEach(category => {
      const isSelected = items.some(item =>
        item.product.categoryId.includes(category.id) ||
        item.product.categoryName?.toLowerCase().includes(category.name.toLowerCase())
      );

      if (isSelected) {
        selectedCount++;
      } else {
        if (category.critical) {
          criticalMissing.push(category.name);
        } else {
          optionalMissing.push(category.name);
        }
      }
    });

    return {
      isComplete: criticalMissing.length === 0,
      completionRate: Math.round((selectedCount / allRequired.length) * 100),
      criticalMissing,
      optionalMissing,
      warnings: [],
      suggestions: [],
    };
  };

  const canFinalize = (): boolean => {
    const result = validate();
    return result.isComplete;
  };

  const getMissingItems = (): string[] => {
    const result = validate();
    return result.criticalMissing;
  };

  return {
    validate,
    canFinalize,
    getMissingItems,
  };
};

/**
 * 選択サマリーコンポーネント
 * - IC打合せ用の選択内容一覧
 * - カテゴリごとの選択商品表示
 * - 部屋適用情報表示
 * - 印刷対応レイアウト
 */
import React, { useMemo } from 'react';
import {
  Package,
  Home,
  Paintbrush,
  Wrench,
  XCircle,
  Printer,
  Download,
  CheckCircle,
  MapPin,
  FileText,
} from 'lucide-react';
import { useSelectionStore, getRoomNames } from '../../stores/useSelectionStore';
import { useCartStore } from '../../stores/useCartStore';
import { useShowroomEstimateStore } from '../../stores/useShowroomEstimateStore';
import { useProjectStore } from '../../stores/useProjectStore';
import { formatPrice } from '../../lib/utils';

interface SelectionSummaryProps {
  showPrintButton?: boolean;
  showExportButton?: boolean;
  onExport?: () => void;
}

// カテゴリグループ定義
const CATEGORY_GROUPS = {
  exterior: {
    label: '外装',
    icon: Home,
    color: 'blue',
  },
  interior: {
    label: '内装',
    icon: Paintbrush,
    color: 'green',
  },
  equipment: {
    label: '設備',
    icon: Wrench,
    color: 'orange',
  },
};

// カテゴリからグループを判定
const getCategoryGroup = (categoryName: string): keyof typeof CATEGORY_GROUPS => {
  const exteriorKeywords = ['外壁', '屋根', '玄関', '窓', '軒天', '破風', '樋', 'ポーチ', '庇'];
  const interiorKeywords = ['床', 'クロス', '巾木', '建具', '階段', '収納', 'カーテン', 'ブラインド'];

  if (exteriorKeywords.some((kw) => categoryName.includes(kw))) {
    return 'exterior';
  }
  if (interiorKeywords.some((kw) => categoryName.includes(kw))) {
    return 'interior';
  }
  return 'equipment';
};

export const SelectionSummary: React.FC<SelectionSummaryProps> = ({
  showPrintButton = true,
  showExportButton = true,
  onExport,
}) => {
  const { selections, customerName, projectName } = useSelectionStore();
  const { items, getTotalPrice } = useCartStore();
  const { items: showroomEstimates, getTotalPrice: getShowroomTotal } = useShowroomEstimateStore();
  const { currentProject } = useProjectStore();

  // 選択をグループごとに整理
  const groupedSelections = useMemo(() => {
    const groups: Record<string, Array<{ category: string; selection: typeof selections[string] }>> = {
      exterior: [],
      interior: [],
      equipment: [],
    };

    Object.entries(selections).forEach(([category, selection]) => {
      if (selection.status !== 'unconfirmed') {
        const group = getCategoryGroup(category);
        groups[group].push({ category, selection });
      }
    });

    return groups;
  }, [selections]);

  // カートアイテムをグループごとに整理
  const groupedCartItems = useMemo(() => {
    const groups: Record<string, typeof items> = {
      exterior: [],
      interior: [],
      equipment: [],
    };

    items.forEach((item) => {
      const group = getCategoryGroup(item.product.categoryName);
      groups[group].push(item);
    });

    return groups;
  }, [items]);

  // 印刷
  const handlePrint = () => {
    window.print();
  };

  // 合計金額
  const cartTotal = getTotalPrice();
  const showroomTotal = getShowroomTotal();
  const grandTotal = cartTotal + showroomTotal;

  return (
    <div className="space-y-6 print:space-y-4">
      {/* ヘッダー */}
      <div className="bg-white rounded-xl shadow-sm border p-6 print:shadow-none print:border-none">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FileText className="w-6 h-6 text-blue-500" />
              選択内容サマリー
            </h2>
            <p className="text-gray-500 mt-1">
              {customerName || currentProject?.customer.name || 'お客様'}様 /
              {projectName || currentProject?.name || 'プロジェクト'}
            </p>
          </div>
          <div className="flex gap-2 print:hidden">
            {showPrintButton && (
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Printer className="w-4 h-4" />
                印刷
              </button>
            )}
            {showExportButton && onExport && (
              <button
                onClick={onExport}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                エクスポート
              </button>
            )}
          </div>
        </div>

        {/* 日付 */}
        <div className="mt-4 text-sm text-gray-500">
          作成日: {new Date().toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </div>

      {/* グループ別選択内容 */}
      {(Object.keys(CATEGORY_GROUPS) as Array<keyof typeof CATEGORY_GROUPS>).map((groupKey) => {
        const group = CATEGORY_GROUPS[groupKey];
        const Icon = group.icon;
        const groupSelections = groupedSelections[groupKey];
        const groupCartItems = groupedCartItems[groupKey];

        if (groupSelections.length === 0 && groupCartItems.length === 0) {
          return null;
        }

        return (
          <div
            key={groupKey}
            className="bg-white rounded-xl shadow-sm border overflow-hidden print:shadow-none print:break-inside-avoid"
          >
            {/* グループヘッダー */}
            <div className={`px-6 py-4 bg-${group.color}-50 border-b`}>
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Icon className={`w-5 h-5 text-${group.color}-600`} />
                {group.label}
              </h3>
            </div>

            {/* 選択内容テーブル */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-gray-700">カテゴリ</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-700">選択商品</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-700">バリアント</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-700">適用場所</th>
                    <th className="px-4 py-3 text-right font-medium text-gray-700">状態</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {/* カートアイテム */}
                  {groupCartItems.map((item, idx) => (
                    <tr key={`cart-${idx}`} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{item.product.categoryName}</td>
                      <td className="px-4 py-3">{item.product.name}</td>
                      <td className="px-4 py-3 text-gray-600">
                        {item.selectedVariant?.color || '-'}
                      </td>
                      <td className="px-4 py-3 text-gray-600">-</td>
                      <td className="px-4 py-3 text-right">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          <CheckCircle className="w-3 h-3" />
                          選択済み
                        </span>
                      </td>
                    </tr>
                  ))}

                  {/* 選択ストアからの選択（カートにないもの） */}
                  {groupSelections
                    .filter((s) => !groupCartItems.some((item) => item.product.categoryName === s.category))
                    .map(({ category, selection }, idx) => (
                      <tr key={`sel-${idx}`} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">{category}</td>
                        <td className="px-4 py-3">
                          {selection.status === 'not_needed' ? (
                            <span className="text-gray-400 italic">不要</span>
                          ) : (
                            selection.selectedProductName || '-'
                          )}
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {selection.selectedVariantName || '-'}
                        </td>
                        <td className="px-4 py-3">
                          {selection.appliedRooms && selection.appliedRooms.length > 0 ? (
                            <div className="flex flex-wrap gap-1">
                              {getRoomNames(selection.appliedRooms).map((room) => (
                                <span
                                  key={room}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded"
                                >
                                  <MapPin className="w-3 h-3" />
                                  {room}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right">
                          {selection.status === 'not_needed' ? (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              <XCircle className="w-3 h-3" />
                              不要
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                              <CheckCircle className="w-3 h-3" />
                              選択済み
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}

      {/* ショールーム見積 */}
      {showroomEstimates.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden print:shadow-none print:break-inside-avoid">
          <div className="px-6 py-4 bg-purple-50 border-b">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <Package className="w-5 h-5 text-purple-600" />
              ショールーム見積
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">カテゴリ</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">メーカー</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">商品名</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">型番</th>
                  <th className="px-4 py-3 text-right font-medium text-gray-700">金額</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {showroomEstimates.map((estimate) => (
                  <tr key={estimate.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{estimate.categoryLabel}</td>
                    <td className="px-4 py-3">{estimate.manufacturer}</td>
                    <td className="px-4 py-3">{estimate.productName}</td>
                    <td className="px-4 py-3 text-gray-600 font-mono text-xs">
                      {estimate.modelNumber}
                    </td>
                    <td className="px-4 py-3 text-right font-medium">
                      {formatPrice(estimate.totalPrice)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50 font-medium">
                <tr>
                  <td colSpan={4} className="px-4 py-3 text-right">
                    ショールーム見積 小計
                  </td>
                  <td className="px-4 py-3 text-right text-purple-600">
                    {formatPrice(showroomTotal)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}

      {/* 合計金額 */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 p-6 print:break-inside-avoid">
        <h3 className="font-bold text-gray-900 mb-4">金額サマリー</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">カタログ選択 小計</span>
            <span className="font-medium">{formatPrice(cartTotal)}</span>
          </div>
          {showroomTotal > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-600">ショールーム見積 小計</span>
              <span className="font-medium">{formatPrice(showroomTotal)}</span>
            </div>
          )}
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between text-lg">
              <span className="font-bold text-gray-900">合計</span>
              <span className="font-bold text-blue-600">{formatPrice(grandTotal)}</span>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          ※ 表示金額は概算です。最終金額は別途見積書をご確認ください。
        </p>
      </div>

      {/* 備考欄（印刷用） */}
      <div className="bg-white rounded-xl shadow-sm border p-6 print:shadow-none hidden print:block">
        <h3 className="font-bold text-gray-900 mb-4">備考</h3>
        <div className="border-b border-dashed h-24" />
      </div>

      {/* 確認欄（印刷用） */}
      <div className="bg-white rounded-xl shadow-sm border p-6 print:shadow-none hidden print:block">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">お客様確認</p>
            <div className="border-b h-12" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">担当者確認</p>
            <div className="border-b h-12" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">日付</p>
            <div className="border-b h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

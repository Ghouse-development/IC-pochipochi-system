import React, { useState, useMemo } from 'react';
import { X, FileText, FileSpreadsheet, Download, DollarSign, ClipboardList } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { formatPrice } from '../../lib/utils';
import type { CartItem } from '../../types/product';

interface ReportExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  customerName: string;
  projectName: string;
}

type ReportType = 'estimate' | 'specification';
type ExportFormat = 'pdf' | 'excel';

// 6つのカテゴリタブ定義
const REPORT_CATEGORIES = [
  { id: 'exterior', name: '外装', icon: '🏠' },
  { id: 'interior', name: '内装', icon: '🪵' },
  { id: 'water', name: '水廻り', icon: '💧' },
  { id: 'electrical', name: '電気', icon: '⚡' },
  { id: 'furniture', name: '家具・家電', icon: '🛋️' },
  { id: 'design', name: '設計', icon: '📐' },
];

// カテゴリを大分類に分類
const categorizeItem = (categoryName: string): string => {
  const exteriorKeywords = ['外壁', '屋根', '軒天', '窓', '玄関ドア', '外部設備', 'ポーチ', '庇', 'ガレージシャッター', '破風', '樋', '水切'];
  const interiorKeywords = ['床', 'クロス', '建具', '収納', '階段', '手摺', '室内窓', '造作', 'カウンター', '間仕切り'];
  const waterKeywords = ['キッチン', 'バス', '洗面', 'トイレ', 'ランドリー', '給湯器', 'エコキュート'];
  const electricalKeywords = ['照明', 'スイッチ', 'コンセント', 'インターホン', '電気', 'IoT', 'セキュリティ'];
  const furnitureKeywords = ['カーテン', 'エアコン', 'ブラインド', '家具', '家電'];
  const designKeywords = ['換気システム', '太陽光', '蓄電池', 'V2H'];

  if (exteriorKeywords.some(k => categoryName.includes(k))) return 'exterior';
  if (interiorKeywords.some(k => categoryName.includes(k))) return 'interior';
  if (waterKeywords.some(k => categoryName.includes(k))) return 'water';
  if (electricalKeywords.some(k => categoryName.includes(k))) return 'electrical';
  if (furnitureKeywords.some(k => categoryName.includes(k))) return 'furniture';
  if (designKeywords.some(k => categoryName.includes(k))) return 'design';
  return 'exterior'; // default
};

export const ReportExportModal: React.FC<ReportExportModalProps> = ({
  isOpen,
  onClose,
  customerName,
  projectName
}) => {
  const { items, selectedPlanId } = useCartStore();
  const [reportType, setReportType] = useState<ReportType>('estimate');
  const [exportFormat, setExportFormat] = useState<ExportFormat>('pdf');
  const [isExporting, setIsExporting] = useState(false);

  // フィルタリングされたアイテム（見積レポートの場合は0円除外）
  const filteredItems = useMemo(() => {
    if (reportType === 'estimate') {
      return items.filter(item => {
        const price = item.product.pricing?.find(
          p => p.planId === selectedPlanId || p.plan === selectedPlanId
        )?.price || 0;
        return price > 0;
      });
    }
    return items;
  }, [items, reportType, selectedPlanId]);

  // カテゴリ別にグループ化
  const groupedItems = useMemo(() => {
    const groups: Record<string, CartItem[]> = {};
    REPORT_CATEGORIES.forEach(cat => {
      groups[cat.id] = [];
    });

    filteredItems.forEach(item => {
      const categoryId = categorizeItem(item.product.categoryName || '');
      if (groups[categoryId]) {
        groups[categoryId].push(item);
      }
    });

    return groups;
  }, [filteredItems]);

  // 各カテゴリの合計金額
  const categoryTotals = useMemo(() => {
    const totals: Record<string, number> = {};
    Object.entries(groupedItems).forEach(([categoryId, categoryItems]) => {
      totals[categoryId] = categoryItems.reduce((sum, item) => {
        const price = item.product.pricing?.find(
          p => p.planId === selectedPlanId || p.plan === selectedPlanId
        )?.price || 0;
        return sum + price * item.quantity;
      }, 0);
    });
    return totals;
  }, [groupedItems, selectedPlanId]);

  const grandTotal = Object.values(categoryTotals).reduce((sum, v) => sum + v, 0);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      if (exportFormat === 'pdf') {
        await exportToPDF(filteredItems, groupedItems, {
          reportType,
          customerName,
          projectName,
          categoryTotals,
          grandTotal
        });
      } else {
        await exportToExcel(filteredItems, groupedItems, {
          reportType,
          customerName,
          projectName,
          categoryTotals,
          grandTotal
        });
      }
      onClose();
    } catch (error) {
      console.error('Export error:', error);
    } finally {
      setIsExporting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto">
          {/* ヘッダー */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Download className="w-6 h-6" />
                <h2 className="text-xl font-bold">レポート出力</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-white/80 mt-2">
              {customerName} 様 / {projectName}
            </p>
          </div>

          <div className="p-6 space-y-6">
            {/* レポートタイプ選択 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                レポートタイプ
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setReportType('estimate')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    reportType === 'estimate'
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-200 hover:border-teal-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      reportType === 'estimate' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">見積レポート</p>
                      <p className="text-xs text-gray-500">オプション金額のみ表示</p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => setReportType('specification')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    reportType === 'specification'
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-200 hover:border-teal-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      reportType === 'specification' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      <ClipboardList className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">仕様選択レポート</p>
                      <p className="text-xs text-gray-500">全選択アイテムを表示</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* 出力形式選択 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                出力形式
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setExportFormat('pdf')}
                  className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                    exportFormat === 'pdf'
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-red-300'
                  }`}
                >
                  <FileText className={`w-6 h-6 ${exportFormat === 'pdf' ? 'text-red-500' : 'text-gray-400'}`} />
                  <span className="font-medium">PDF</span>
                </button>
                <button
                  onClick={() => setExportFormat('excel')}
                  className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                    exportFormat === 'excel'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <FileSpreadsheet className={`w-6 h-6 ${exportFormat === 'excel' ? 'text-green-500' : 'text-gray-400'}`} />
                  <span className="font-medium">Excel</span>
                </button>
              </div>
            </div>

            {/* プレビュー情報 */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-medium text-gray-900 mb-3">
                {reportType === 'estimate' ? '見積レポート' : '仕様選択レポート'} プレビュー
              </h3>
              <div className="space-y-2">
                {REPORT_CATEGORIES.map(cat => {
                  const count = groupedItems[cat.id]?.length || 0;
                  const total = categoryTotals[cat.id] || 0;
                  if (count === 0) return null;
                  return (
                    <div key={cat.id} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2">
                        <span>{cat.icon}</span>
                        <span>{cat.name}</span>
                        <span className="text-gray-400">({count}件)</span>
                      </span>
                      <span className="font-medium">{formatPrice(total)}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200 flex items-center justify-between">
                <span className="font-medium text-gray-900">オプション合計</span>
                <span className="text-lg font-bold text-teal-600">{formatPrice(grandTotal)}</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ※ {reportType === 'estimate' ? '0円のアイテムは表示されません' : '全てのアイテムが表示されます'}
              </p>
            </div>

            {/* 出力ボタン */}
            <button
              onClick={handleExport}
              disabled={isExporting || filteredItems.length === 0}
              className="w-full py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-bold text-lg hover:from-teal-600 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isExporting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  出力中...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  {exportFormat === 'pdf' ? 'PDFを出力' : 'Excelを出力'}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// PDF出力関数
async function exportToPDF(
  items: CartItem[],
  _groupedItems: Record<string, CartItem[]>,
  options: {
    reportType: ReportType;
    customerName: string;
    projectName: string;
    categoryTotals: Record<string, number>;
    grandTotal: number;
  }
) {
  const { openSpecificationWindow } = await import('../../utils/specificationPDF');

  // 仕様書生成機能を再利用
  openSpecificationWindow({
    customerName: options.customerName,
    projectName: options.projectName,
    planName: 'LACIE',
    date: new Date().toLocaleDateString('ja-JP'),
    items,
    companyName: 'Gハウス'
  });
}

// Excel出力関数
async function exportToExcel(
  items: CartItem[],
  _groupedItems: Record<string, CartItem[]>,
  options: {
    reportType: ReportType;
    customerName: string;
    projectName: string;
    categoryTotals: Record<string, number>;
    grandTotal: number;
  }
) {
  const { exportToExcel: baseExport } = await import('../../utils/estimateExport');

  await baseExport(items, {
    customerName: options.customerName,
    projectName: options.projectName
  });
}

// 見積書出力ダイアログ
import { useState } from 'react';
import { FileDown, FileSpreadsheet, FileText, X, Loader2, Check } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import {
  downloadEstimatePDF,
  downloadEstimateExcel,
  type EstimateData,
} from '../../utils/estimateExport';
import type { PlanType } from '../../types/product';

interface EstimateExportDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const PLAN_NAMES: Record<PlanType, string> = {
  LACIE: 'LACIE',
  HOURS: 'HOURS',
  'LIFE+': 'LIFE+',
  LIFE: 'LIFE',
  LIFE_X: 'LIFE X',
};

export const EstimateExportDialog = ({ isOpen, onClose }: EstimateExportDialogProps) => {
  const { items, selectedPlanId, getTotalPrice } = useCartStore();

  const [formData, setFormData] = useState({
    customerName: '',
    projectName: '',
    projectCode: '',
    constructionAddress: '',
    floors: 2,
    floorArea: 0,
    notes: '',
  });

  const [isExporting, setIsExporting] = useState<'pdf' | 'excel' | null>(null);
  const [exportSuccess, setExportSuccess] = useState<'pdf' | 'excel' | null>(null);

  if (!isOpen) return null;

  const totalPrice = getTotalPrice();
  const planType = selectedPlanId as PlanType;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  const createEstimateData = (): EstimateData => ({
    customerName: formData.customerName || 'お客様',
    projectName: formData.projectName,
    projectCode: formData.projectCode || `EST-${Date.now()}`,
    constructionAddress: formData.constructionAddress,
    planType,
    planName: PLAN_NAMES[planType] || planType,
    floors: formData.floors,
    floorArea: formData.floorArea,
    items,
    createdAt: new Date(),
    validDays: 30,
    notes: formData.notes,
  });

  const handleExportPDF = async () => {
    setIsExporting('pdf');
    setExportSuccess(null);
    try {
      const data = createEstimateData();
      await downloadEstimatePDF(data);
      setExportSuccess('pdf');
      setTimeout(() => setExportSuccess(null), 3000);
    } catch (error) {
      console.error('PDF export error:', error);
      alert('PDFの出力に失敗しました');
    } finally {
      setIsExporting(null);
    }
  };

  const handleExportExcel = async () => {
    setIsExporting('excel');
    setExportSuccess(null);
    try {
      const data = createEstimateData();
      downloadEstimateExcel(data);
      setExportSuccess('excel');
      setTimeout(() => setExportSuccess(null), 3000);
    } catch (error) {
      console.error('Excel export error:', error);
      alert('Excelの出力に失敗しました');
    } finally {
      setIsExporting(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* オーバーレイ */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* ダイアログ */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* ヘッダー */}
        <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-blue-500 to-indigo-600">
          <div className="flex items-center gap-3 text-white">
            <FileDown className="w-6 h-6" />
            <h2 className="text-xl font-bold">見積書出力</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* コンテンツ */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          {/* サマリー */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">選択中のプラン</p>
                <p className="text-lg font-bold text-blue-600">{PLAN_NAMES[planType]}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">合計金額（税抜）</p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalPrice.toLocaleString()}
                  <span className="text-sm font-normal text-gray-500 ml-1">円</span>
                </p>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-blue-200/50">
              <p className="text-sm text-gray-600">
                選択アイテム数: <span className="font-medium">{items.length}</span>件
              </p>
            </div>
          </div>

          {/* 入力フォーム */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              顧客情報
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  お客様名
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  placeholder="例: 山田 太郎 様"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  物件コード
                </label>
                <input
                  type="text"
                  name="projectCode"
                  value={formData.projectCode}
                  onChange={handleInputChange}
                  placeholder="例: PRJ-2024-001"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                物件名
              </label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleInputChange}
                placeholder="例: 山田邸新築工事"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                建築地
              </label>
              <input
                type="text"
                name="constructionAddress"
                value={formData.constructionAddress}
                onChange={handleInputChange}
                placeholder="例: 東京都渋谷区..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  階数
                </label>
                <input
                  type="number"
                  name="floors"
                  value={formData.floors}
                  onChange={handleInputChange}
                  min={1}
                  max={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  延床面積（㎡）
                </label>
                <input
                  type="number"
                  name="floorArea"
                  value={formData.floorArea || ''}
                  onChange={handleInputChange}
                  min={0}
                  step={0.01}
                  placeholder="例: 120.5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                備考
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={3}
                placeholder="特記事項があれば入力してください"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
          </div>
        </div>

        {/* フッター */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            キャンセル
          </button>

          <button
            onClick={handleExportExcel}
            disabled={isExporting !== null || items.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isExporting === 'excel' ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : exportSuccess === 'excel' ? (
              <Check className="w-4 h-4" />
            ) : (
              <FileSpreadsheet className="w-4 h-4" />
            )}
            Excel出力
          </button>

          <button
            onClick={handleExportPDF}
            disabled={isExporting !== null || items.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isExporting === 'pdf' ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : exportSuccess === 'pdf' ? (
              <Check className="w-4 h-4" />
            ) : (
              <FileText className="w-4 h-4" />
            )}
            PDF出力
          </button>
        </div>
      </div>
    </div>
  );
};

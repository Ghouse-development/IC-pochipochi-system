/**
 * エクスポートパネル
 * - 見積書出力
 * - 仕様書出力
 * - プレゼン資料出力
 * - 一括出力
 */
import React, { useState } from 'react';
import {
  FileText,
  FileSpreadsheet,
  Presentation,
  Download,
  CheckCircle,
  AlertCircle,
  Loader2,
  Package,
  ClipboardList,
} from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { useSelectionStore } from '../../stores/useSelectionStore';
import { useShowroomEstimateStore } from '../../stores/useShowroomEstimateStore';
import { useProjectStore } from '../../stores/useProjectStore';
import { exportToExcel } from '../../utils/estimateExport';
import { generateSpecificationPDF } from '../../utils/specificationPDF';
import { generatePresentation } from '../../utils/presentationGenerator';
import { generateSimplifiedReport } from '../../utils/simplifiedReportPDF';
import { createLogger } from '../../lib/logger';

const logger = createLogger('ExportPanel');

interface ExportPanelProps {
  compact?: boolean;
}

type ExportStatus = 'idle' | 'loading' | 'success' | 'error';

interface ExportState {
  estimate: ExportStatus;
  specification: ExportStatus;
  presentation: ExportStatus;
  simplified: ExportStatus;
}

export const ExportPanel: React.FC<ExportPanelProps> = ({ compact = false }) => {
  const { items } = useCartStore();
  const { selections, customerName, projectName, projectStatus } = useSelectionStore();
  const { items: showroomEstimates, getTotalPrice: getShowroomTotal } = useShowroomEstimateStore();
  const { currentProject } = useProjectStore();

  const [exportState, setExportState] = useState<ExportState>({
    estimate: 'idle',
    specification: 'idle',
    presentation: 'idle',
    simplified: 'idle',
  });
  const [lastExported, setLastExported] = useState<string | null>(null);

  // エクスポート可能かどうか
  const canExport = items.length > 0 || Object.keys(selections).length > 0;
  const isConfirmed = projectStatus === 'confirmed' || projectStatus === 'finalized';

  // 見積書出力
  const handleExportEstimate = async () => {
    setExportState((prev) => ({ ...prev, estimate: 'loading' }));
    try {
      await exportToExcel(items, {
        customerName: customerName || currentProject?.customer.name || 'お客様',
        projectName: projectName || currentProject?.name || 'プロジェクト',
        selections,
        showroomEstimates,
      });
      setExportState((prev) => ({ ...prev, estimate: 'success' }));
      setLastExported('見積書');
      setTimeout(() => setExportState((prev) => ({ ...prev, estimate: 'idle' })), 3000);
    } catch (error) {
      logger.error('見積書出力エラー:', error);
      setExportState((prev) => ({ ...prev, estimate: 'error' }));
      setTimeout(() => setExportState((prev) => ({ ...prev, estimate: 'idle' })), 3000);
    }
  };

  // 仕様書出力
  const handleExportSpecification = async () => {
    setExportState((prev) => ({ ...prev, specification: 'loading' }));
    try {
      await generateSpecificationPDF(items, {
        customerName: customerName || currentProject?.customer.name || 'お客様',
        projectName: projectName || currentProject?.name || 'プロジェクト',
        planName: currentProject?.building.planType || 'LACIE',
        selections,
      });
      setExportState((prev) => ({ ...prev, specification: 'success' }));
      setLastExported('仕様書');
      setTimeout(() => setExportState((prev) => ({ ...prev, specification: 'idle' })), 3000);
    } catch (error) {
      logger.error('仕様書出力エラー:', error);
      setExportState((prev) => ({ ...prev, specification: 'error' }));
      setTimeout(() => setExportState((prev) => ({ ...prev, specification: 'idle' })), 3000);
    }
  };

  // プレゼン資料出力
  const handleExportPresentation = async () => {
    setExportState((prev) => ({ ...prev, presentation: 'loading' }));
    try {
      await generatePresentation(items, {
        customerName: customerName || currentProject?.customer.name || 'お客様',
        projectName: projectName || currentProject?.name || 'プロジェクト',
        selections,
      });
      setExportState((prev) => ({ ...prev, presentation: 'success' }));
      setLastExported('プレゼン資料');
      setTimeout(() => setExportState((prev) => ({ ...prev, presentation: 'idle' })), 3000);
    } catch (error) {
      logger.error('プレゼン出力エラー:', error);
      setExportState((prev) => ({ ...prev, presentation: 'error' }));
      setTimeout(() => setExportState((prev) => ({ ...prev, presentation: 'idle' })), 3000);
    }
  };

  // 確認レポート出力
  const handleExportSimplified = async () => {
    setExportState((prev) => ({ ...prev, simplified: 'loading' }));
    try {
      await generateSimplifiedReport(items, {
        customerName: customerName || currentProject?.customer.name || 'お客様',
        projectName: projectName || currentProject?.name || 'プロジェクト',
        planName: currentProject?.building.planType || 'LACIE',
        selections,
      });
      setExportState((prev) => ({ ...prev, simplified: 'success' }));
      setLastExported('確認レポート');
      setTimeout(() => setExportState((prev) => ({ ...prev, simplified: 'idle' })), 3000);
    } catch (error) {
      logger.error('確認レポート出力エラー:', error);
      setExportState((prev) => ({ ...prev, simplified: 'error' }));
      setTimeout(() => setExportState((prev) => ({ ...prev, simplified: 'idle' })), 3000);
    }
  };

  // 一括出力
  const handleExportAll = async () => {
    await handleExportEstimate();
    await handleExportSpecification();
    await handleExportPresentation();
  };

  const getStatusIcon = (status: ExportStatus) => {
    switch (status) {
      case 'loading':
        return <Loader2 className="w-5 h-5 animate-spin" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Download className="w-5 h-5" />;
    }
  };

  if (compact) {
    return (
      <div className="flex flex-wrap gap-2">
        <button
          onClick={handleExportSimplified}
          disabled={!canExport || exportState.simplified === 'loading'}
          className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          {getStatusIcon(exportState.simplified)}
          確認レポート
        </button>
        <button
          onClick={handleExportEstimate}
          disabled={!canExport || exportState.estimate === 'loading'}
          className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          {getStatusIcon(exportState.estimate)}
          見積書
        </button>
        <button
          onClick={handleExportSpecification}
          disabled={!canExport || exportState.specification === 'loading'}
          className="flex items-center gap-2 px-3 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          {getStatusIcon(exportState.specification)}
          仕様書
        </button>
        <button
          onClick={handleExportPresentation}
          disabled={!canExport || exportState.presentation === 'loading'}
          className="flex items-center gap-2 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          {getStatusIcon(exportState.presentation)}
          プレゼン
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">資料出力</h2>
          <p className="text-gray-500">見積書・仕様書・プレゼン資料を出力します</p>
        </div>
        {isConfirmed && (
          <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full flex items-center gap-1">
            <CheckCircle className="w-4 h-4" />
            確定済み
          </span>
        )}
      </div>

      {/* 出力対象情報 */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="font-bold text-gray-900 mb-4">出力対象</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">{items.length}</p>
            <p className="text-sm text-gray-500">カート商品</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">{Object.keys(selections).length}</p>
            <p className="text-sm text-gray-500">選択カテゴリ</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">{showroomEstimates.length}</p>
            <p className="text-sm text-gray-500">ショールーム見積</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">
              ¥{getShowroomTotal().toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">ショールーム合計</p>
          </div>
        </div>
      </div>

      {/* 確認レポート（メイン） */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600 rounded-lg shadow-sm">
              <ClipboardList className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">確認レポート</h3>
              <p className="text-sm text-gray-600">
                オプション費用と未決定項目を抽出したシンプルなレポート（A4 PDF対応）
              </p>
            </div>
          </div>
          <button
            onClick={handleExportSimplified}
            disabled={!canExport || exportState.simplified === 'loading'}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
          >
            {getStatusIcon(exportState.simplified)}
            {exportState.simplified === 'loading' ? '出力中...' :
             exportState.simplified === 'success' ? '完了' : '確認レポートを出力'}
          </button>
        </div>
      </div>

      {/* 出力ボタン */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 見積書 */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <FileSpreadsheet className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">見積書</h3>
              <p className="text-sm text-gray-500">Excel形式</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            選択した商品・ショールーム見積を含む見積書をExcel形式で出力します。
          </p>
          <button
            onClick={handleExportEstimate}
            disabled={!canExport || exportState.estimate === 'loading'}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {getStatusIcon(exportState.estimate)}
            {exportState.estimate === 'loading' ? '出力中...' :
             exportState.estimate === 'success' ? '完了' : '見積書を出力'}
          </button>
        </div>

        {/* 仕様書 */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">仕様書</h3>
              <p className="text-sm text-gray-500">HTML形式（印刷でPDF化可）</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            カテゴリごとの選択内容・部屋適用情報を含む仕様書を表示します。
          </p>
          <button
            onClick={handleExportSpecification}
            disabled={!canExport || exportState.specification === 'loading'}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {getStatusIcon(exportState.specification)}
            {exportState.specification === 'loading' ? '出力中...' :
             exportState.specification === 'success' ? '完了' : '仕様書を出力'}
          </button>
        </div>

        {/* プレゼン資料 */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Presentation className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">プレゼン資料</h3>
              <p className="text-sm text-gray-500">HTML形式（印刷でPDF化可）</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            お客様への提案用プレゼンテーション資料を表示します。
          </p>
          <button
            onClick={handleExportPresentation}
            disabled={!canExport || exportState.presentation === 'loading'}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {getStatusIcon(exportState.presentation)}
            {exportState.presentation === 'loading' ? '出力中...' :
             exportState.presentation === 'success' ? '完了' : 'プレゼン資料を出力'}
          </button>
        </div>
      </div>

      {/* 一括出力 */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">一括出力</h3>
              <p className="text-sm text-gray-600">
                すべての資料（見積書・仕様書・プレゼン）を一括で出力します
              </p>
            </div>
          </div>
          <button
            onClick={handleExportAll}
            disabled={!canExport}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
          >
            <Download className="w-5 h-5" />
            一括出力
          </button>
        </div>
      </div>

      {/* 出力履歴 */}
      {lastExported && (
        <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-4 py-2 rounded-lg">
          <CheckCircle className="w-4 h-4" />
          <span>{lastExported}を出力しました</span>
        </div>
      )}

      {/* 注意事項 */}
      {!isConfirmed && (
        <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-yellow-800">
              <p className="font-medium mb-1">ご注意</p>
              <p>プロジェクトが確定されていません。出力される資料は暫定版となります。</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

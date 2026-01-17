/**
 * プロジェクト一括登録コンポーネント
 * - CSV/Excelファイルからプロジェクト情報を一括インポート
 */
import React, { useState, useCallback, useRef } from 'react';
import {
  Upload,
  FileSpreadsheet,
  AlertCircle,
  CheckCircle,
  X,
  Download,
  Loader2,
} from 'lucide-react';
import { useProjectStore } from '../../stores/useProjectStore';
import { useToast } from '../common/Toast';
import * as XLSX from 'xlsx';

interface ImportRow {
  projectCode: string;
  projectName: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  landAddress: string;
  planType: 'LACIE' | 'HOURS' | 'LIFE+' | 'LIFE' | 'LIFE_X';
  floors: number;
  totalFloorArea: number;
  structure?: '木造' | '鉄骨造' | 'RC造';
  assignedIC?: string;
}

interface ImportResult {
  success: number;
  failed: number;
  errors: { row: number; message: string }[];
}

export const ProjectBulkImport: React.FC = () => {
  const { createProject, projects } = useProjectStore();
  const toast = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewData, setPreviewData] = useState<ImportRow[]>([]);
  const [result, setResult] = useState<ImportResult | null>(null);

  // ファイル読み込み
  const processFile = useCallback(async (file: File) => {
    setIsProcessing(true);
    setResult(null);

    try {
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet);

      // データ変換
      const rows: ImportRow[] = json.map((row) => ({
        projectCode: String(row['物件コード'] || row['projectCode'] || ''),
        projectName: String(row['物件名'] || row['projectName'] || ''),
        customerName: String(row['お客様名'] || row['customerName'] || ''),
        customerEmail: String(row['メール'] || row['email'] || row['customerEmail'] || ''),
        customerPhone: String(row['電話番号'] || row['phone'] || ''),
        landAddress: String(row['建築地'] || row['address'] || row['landAddress'] || ''),
        planType: (row['プラン'] || row['planType'] || 'LIFE') as ImportRow['planType'],
        floors: Number(row['階数'] || row['floors'] || 2),
        totalFloorArea: Number(row['延床面積'] || row['totalFloorArea'] || 100),
        structure: (row['構造'] || row['structure'] || '木造') as ImportRow['structure'],
        assignedIC: String(row['担当IC'] || row['assignedIC'] || ''),
      }));

      setPreviewData(rows);
      toast.success('読み込み完了', `${rows.length}件のデータを読み込みました`);
    } catch (err) {
      console.error('File processing error:', err);
      toast.error('読み込みエラー', 'ファイルの読み込みに失敗しました');
    } finally {
      setIsProcessing(false);
    }
  }, [toast]);

  // ドラッグ&ドロップ
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      processFile(file);
    }
  }, [processFile]);

  // ファイル選択
  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  }, [processFile]);

  // インポート実行
  const handleImport = useCallback(() => {
    if (previewData.length === 0) return;

    setIsProcessing(true);
    const importResult: ImportResult = { success: 0, failed: 0, errors: [] };

    previewData.forEach((row, index) => {
      try {
        // 必須項目チェック
        if (!row.projectName || !row.customerName || !row.customerEmail) {
          throw new Error('必須項目（物件名、お客様名、メール）が不足しています');
        }

        // 重複チェック
        const exists = projects.some(
          (p) => p.code === row.projectCode || p.customer.email === row.customerEmail
        );
        if (exists) {
          throw new Error('既に登録済みのプロジェクトまたはメールアドレスです');
        }

        // プロジェクト作成
        createProject({
          code: row.projectCode || `PRJ-${Date.now()}-${index}`,
          name: row.projectName,
          customer: {
            name: row.customerName,
            email: row.customerEmail,
            phone: row.customerPhone,
          },
          land: {
            address: row.landAddress,
          },
          building: {
            planType: row.planType,
            floors: row.floors,
            totalFloorArea: row.totalFloorArea,
            structure: row.structure || '木造',
          },
          assignedIC: row.assignedIC,
        });

        importResult.success++;
      } catch (err) {
        importResult.failed++;
        importResult.errors.push({
          row: index + 2, // Excel行番号（1行目はヘッダー）
          message: err instanceof Error ? err.message : '不明なエラー',
        });
      }
    });

    setResult(importResult);
    setPreviewData([]);
    setIsProcessing(false);

    if (importResult.success > 0) {
      toast.success(
        'インポート完了',
        `${importResult.success}件を登録しました${importResult.failed > 0 ? `（${importResult.failed}件失敗）` : ''}`
      );
    } else {
      toast.error('インポート失敗', 'すべてのデータの登録に失敗しました');
    }
  }, [previewData, projects, createProject, toast]);

  // テンプレートダウンロード
  const handleDownloadTemplate = useCallback(() => {
    const template = [
      {
        '物件コード': 'PRJ-001',
        '物件名': '山田邸新築工事',
        'お客様名': '山田 太郎',
        'メール': 'yamada@example.com',
        '電話番号': '090-1234-5678',
        '建築地': '東京都渋谷区...',
        'プラン': 'LIFE+',
        '階数': 2,
        '延床面積': 120.5,
        '構造': '木造',
        '担当IC': '担当者A',
      },
    ];

    const ws = XLSX.utils.json_to_sheet(template);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'プロジェクト');
    XLSX.writeFile(wb, 'プロジェクト一括登録テンプレート.xlsx');

    toast.success('ダウンロード完了', 'テンプレートをダウンロードしました');
  }, [toast]);

  // クリア
  const handleClear = useCallback(() => {
    setPreviewData([]);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <FileSpreadsheet className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">プロジェクト一括登録</h2>
            <p className="text-sm text-gray-500">Excel/CSVファイルから一括インポート</p>
          </div>
        </div>
        <button
          onClick={handleDownloadTemplate}
          className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <Download className="w-4 h-4" />
          テンプレート
        </button>
      </div>

      {/* ドロップゾーン */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
          isDragging
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={handleFileSelect}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <Upload className={`w-12 h-12 mx-auto mb-4 ${isDragging ? 'text-blue-500' : 'text-gray-400'}`} />
        <p className="text-gray-600 mb-2">
          ファイルをドラッグ&ドロップ、またはクリックして選択
        </p>
        <p className="text-sm text-gray-400">
          対応形式: Excel (.xlsx, .xls), CSV (.csv)
        </p>
      </div>

      {/* 処理中 */}
      {isProcessing && (
        <div className="flex items-center justify-center gap-2 py-8 text-gray-600">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>処理中...</span>
        </div>
      )}

      {/* プレビュー */}
      {previewData.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">
              プレビュー ({previewData.length}件)
            </h3>
            <div className="flex gap-2">
              <button
                onClick={handleClear}
                className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                キャンセル
              </button>
              <button
                onClick={handleImport}
                disabled={isProcessing}
                className="flex items-center gap-2 px-4 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                <CheckCircle className="w-4 h-4" />
                インポート実行
              </button>
            </div>
          </div>

          <div className="overflow-x-auto border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left font-medium text-gray-500">物件コード</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500">物件名</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500">お客様名</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500">メール</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500">プラン</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500">延床面積</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {previewData.slice(0, 10).map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-gray-600">{row.projectCode || '-'}</td>
                    <td className="px-4 py-2 font-medium text-gray-900">{row.projectName}</td>
                    <td className="px-4 py-2 text-gray-600">{row.customerName}</td>
                    <td className="px-4 py-2 text-gray-600">{row.customerEmail}</td>
                    <td className="px-4 py-2 text-gray-600">{row.planType}</td>
                    <td className="px-4 py-2 text-gray-600">{row.totalFloorArea}㎡</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {previewData.length > 10 && (
              <div className="px-4 py-2 bg-gray-50 text-sm text-gray-500 text-center">
                他 {previewData.length - 10} 件...
              </div>
            )}
          </div>
        </div>
      )}

      {/* 結果表示 */}
      {result && (
        <div className="mt-6 space-y-4">
          <div className={`flex items-center gap-3 p-4 rounded-lg ${
            result.failed === 0 ? 'bg-blue-50' : 'bg-yellow-50'
          }`}>
            {result.failed === 0 ? (
              <CheckCircle className="w-5 h-5 text-blue-600" />
            ) : (
              <AlertCircle className="w-5 h-5 text-yellow-600" />
            )}
            <div>
              <p className="font-medium text-gray-900">
                {result.success}件のインポートに成功
                {result.failed > 0 && `、${result.failed}件が失敗`}
              </p>
            </div>
          </div>

          {result.errors.length > 0 && (
            <div className="bg-red-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <X className="w-4 h-4 text-red-600" />
                <p className="font-medium text-red-800">エラー詳細</p>
              </div>
              <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                {result.errors.map((err, idx) => (
                  <li key={idx}>
                    行 {err.row}: {err.message}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

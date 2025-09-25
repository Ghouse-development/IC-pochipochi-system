import { useState, useRef } from 'react';
import { Upload, FileText, AlertCircle } from 'lucide-react';
import { parseCSV, buildHierarchy } from '../../utils/csvParser';
import type { CategoryNode } from '../../utils/csvParser';

interface CsvImportProps {
  onImportComplete: (hierarchy: CategoryNode[]) => void;
}

export function CsvImport({ onImportComplete }: CsvImportProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.csv')) {
      setError('CSVファイルを選択してください');
      return;
    }

    setIsUploading(true);
    setError(null);
    setFileName(file.name);

    try {
      const text = await file.text();
      const products = parseCSV(text);
      const hierarchy = buildHierarchy(products);

      onImportComplete(hierarchy);
      setError(null);
    } catch (err) {
      setError('ファイルの読み込みに失敗しました');
      console.error('CSV import error:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">CSVデータインポート</h2>

      <div
        onClick={handleClick}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="hidden"
        />

        <div className="flex flex-col items-center space-y-4">
          <Upload className="w-12 h-12 text-gray-400" />
          <div>
            <p className="text-sm text-gray-600">
              CSVファイルをドラッグ＆ドロップまたはクリックして選択
            </p>
            <p className="text-xs text-gray-500 mt-1">
              対応形式: CSV (.csv)
            </p>
          </div>

          {fileName && (
            <div className="flex items-center space-x-2 text-sm text-green-600">
              <FileText className="w-4 h-4" />
              <span>{fileName}</span>
            </div>
          )}

          {isUploading && (
            <div className="text-sm text-blue-600">
              処理中...
            </div>
          )}
        </div>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <span className="text-sm text-red-700">{error}</span>
        </div>
      )}
    </div>
  );
}
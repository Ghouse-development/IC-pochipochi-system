import React, { useState } from 'react';
import { Upload, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';

interface ExtractedProduct {
  name: string;
  category: string;
  price: number;
  description: string;
  sku?: string;
  imageUrl?: string;
}

export const PdfImport: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedProducts, setExtractedProducts] = useState<ExtractedProduct[]>([]);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
  const ALLOWED_TYPES = ['application/pdf'];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) {
      setError('ファイルを選択してください');
      return;
    }

    // ファイルタイプの検証
    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      setError('PDFファイルのみアップロード可能です');
      return;
    }

    // ファイルサイズの検証
    if (selectedFile.size > MAX_FILE_SIZE) {
      setError('ファイルサイズは50MB以下にしてください');
      return;
    }

    // ファイル名の検証（危険な文字を含まないか）
    const safeFileName = /^[a-zA-Z0-9\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF\s\-_().]+\.pdf$/i;
    if (!safeFileName.test(selectedFile.name)) {
      setError('ファイル名に不正な文字が含まれています');
      return;
    }

    setFile(selectedFile);
    setError('');
  };

  const handleParse = async () => {
    if (!file) {
      setError('ファイルを選択してください');
      return;
    }

    setIsProcessing(true);
    setError('');
    setSuccess('');

    const formData = new FormData();
    formData.append('pdf', file);

    try {
      const response = await fetch('/api/pdf/parse', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('PDFの解析に失敗しました');
      }

      const data = await response.json();
      setExtractedProducts(data.products);
      setSuccess(`${data.products.length}件の商品を抽出しました`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'エラーが発生しました');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleImport = async () => {
    if (extractedProducts.length === 0) {
      setError('インポートする商品がありません');
      return;
    }

    setIsProcessing(true);
    setError('');

    try {
      const response = await fetch('/api/products/bulk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products: extractedProducts }),
      });

      if (!response.ok) {
        throw new Error('商品のインポートに失敗しました');
      }

      const data = await response.json();
      setSuccess(`${data.count}件の商品をインポートしました`);
      setExtractedProducts([]);
      setFile(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'エラーが発生しました');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">PDFカタログから商品取り込み</h2>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              PDFファイルを選択
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileSelect}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
              />
              {file && (
                <div className="flex items-center text-sm text-gray-600">
                  <FileText className="w-4 h-4 mr-1" />
                  {file.name}
                </div>
              )}
            </div>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-800">{success}</p>
            </div>
          )}

          <div className="flex space-x-4">
            <Button
              onClick={handleParse}
              disabled={!file || isProcessing}
              className="flex items-center"
            >
              <Upload className="w-4 h-4 mr-2" />
              PDFを解析
            </Button>

            {extractedProducts.length > 0 && (
              <Button
                onClick={handleImport}
                disabled={isProcessing}
                variant="secondary"
              >
                商品をインポート ({extractedProducts.length}件)
              </Button>
            )}
          </div>
        </div>
      </Card>

      {extractedProducts.length > 0 && (
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">抽出された商品</h3>
            <div className="max-h-96 overflow-y-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      商品名
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      カテゴリ
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      価格
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SKU
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {extractedProducts.map((product, index) => (
                    <tr key={`${product.name}-${product.sku || index}`}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {product.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ¥{product.price.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.sku || '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
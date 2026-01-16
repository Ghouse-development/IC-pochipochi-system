import React from 'react';
import { FileText, AlertCircle } from 'lucide-react';
import { Card } from '../common/Card';

export const PdfImport: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">PDFカタログから商品取り込み</h2>

          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start">
            <AlertCircle className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-amber-800 font-medium">この機能は現在利用できません</p>
              <p className="text-sm text-amber-700 mt-1">
                PDFからの商品取り込みにはサーバーサイド処理が必要です。
                商品データの追加は、SQLマイグレーションファイルを作成してSupabaseに登録してください。
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">
              商品データの追加方法:
            </p>
            <ol className="text-sm text-gray-500 mt-2 text-left max-w-md mx-auto list-decimal list-inside space-y-1">
              <li>sql/migrations/ にSQLファイルを作成</li>
              <li>items, item_variants, item_pricing テーブルにデータを追加</li>
              <li>適切なtags（例: porch-tile）を設定</li>
              <li>SupabaseのSQL Editorでマイグレーションを実行</li>
            </ol>
          </div>
        </div>
      </Card>
    </div>
  );
};

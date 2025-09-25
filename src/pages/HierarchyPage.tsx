import { useState } from 'react';
import { CsvImport } from '../components/import/CsvImport';
import { HierarchyView } from '../components/hierarchy/HierarchyView';
import type { CategoryNode } from '../utils/csvParser';
import { ArrowLeft } from 'lucide-react';

interface HierarchyPageProps {
  onBack: () => void;
}

export function HierarchyPage({ onBack }: HierarchyPageProps) {
  const [hierarchyData, setHierarchyData] = useState<CategoryNode[]>([]);

  const handleImportComplete = (data: CategoryNode[]) => {
    setHierarchyData(data);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <button
              onClick={onBack}
              className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">
              Gハウス仕様書マスタ - 階層表示
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <CsvImport onImportComplete={handleImportComplete} />
          </div>

          <div className="lg:col-span-2">
            {hierarchyData.length > 0 ? (
              <HierarchyView data={hierarchyData} />
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <p className="text-gray-500">
                  CSVファイルをインポートしてデータを表示してください
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
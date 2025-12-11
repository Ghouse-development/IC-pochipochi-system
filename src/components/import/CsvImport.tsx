import { useState, useRef } from 'react';
import {
  Upload,
  FileText,
  AlertCircle,
  CheckCircle,
  Loader2,
  Download,
  X,
  Eye,
} from 'lucide-react';
import { parseCSV, buildHierarchy, type HierarchicalProduct } from '../../utils/csvParser';
import type { CategoryNode } from '../../utils/csvParser';
import { supabase } from '../../lib/supabase';

interface CsvImportProps {
  onImportComplete: (hierarchy: CategoryNode[]) => void;
  mode?: 'preview' | 'import'; // preview: 表示のみ, import: DBに保存
}

interface ImportProgress {
  total: number;
  processed: number;
  success: number;
  failed: number;
  errors: string[];
}

export function CsvImport({ onImportComplete, mode = 'preview' }: CsvImportProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [parsedData, setParsedData] = useState<HierarchicalProduct[] | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [progress, setProgress] = useState<ImportProgress | null>(null);
  const [importComplete, setImportComplete] = useState(false);
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
    setParsedData(null);
    setImportComplete(false);

    try {
      const text = await file.text();
      const products = parseCSV(text);

      if (products.length === 0) {
        setError('有効なデータが見つかりませんでした');
        return;
      }

      setParsedData(products);
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

  const handleImportToDatabase = async () => {
    if (!parsedData || parsedData.length === 0) return;

    setIsImporting(true);
    setProgress({
      total: parsedData.length,
      processed: 0,
      success: 0,
      failed: 0,
      errors: [],
    });

    try {
      // カテゴリのマッピングを作成
      const categoryMap = new Map<string, string>();

      // 1. カテゴリを取得または作成
      const uniqueCategories = new Map<string, { cat1: string; cat2: string; cat3: string }>();
      parsedData.forEach((p) => {
        const key = `${p.category1}|${p.category2}|${p.category3}`;
        if (!uniqueCategories.has(key)) {
          uniqueCategories.set(key, {
            cat1: p.category1,
            cat2: p.category2,
            cat3: p.category3,
          });
        }
      });

      // カテゴリを登録
      for (const [key, cats] of uniqueCategories) {
        // Category 1
        let cat1Id = categoryMap.get(cats.cat1);
        if (!cat1Id) {
          const { data: existing } = await supabase
            .from('categories')
            .select('id')
            .eq('name', cats.cat1)
            .is('parent_id', null)
            .single();

          if (existing) {
            cat1Id = existing.id;
          } else {
            const { data: newCat } = await supabase
              .from('categories')
              .insert({
                name: cats.cat1,
                slug: cats.cat1.toLowerCase().replace(/\s+/g, '-'),
                category_type: cats.cat1.includes('外') ? 'exterior' : 'interior',
                is_active: true,
              })
              .select('id')
              .single();
            cat1Id = newCat?.id;
          }
          if (cat1Id) categoryMap.set(cats.cat1, cat1Id);
        }

        // Category 2
        const cat2Key = `${cats.cat1}|${cats.cat2}`;
        let cat2Id = categoryMap.get(cat2Key);
        if (!cat2Id && cat1Id) {
          const { data: existing } = await supabase
            .from('categories')
            .select('id')
            .eq('name', cats.cat2)
            .eq('parent_id', cat1Id)
            .single();

          if (existing) {
            cat2Id = existing.id;
          } else {
            const { data: newCat } = await supabase
              .from('categories')
              .insert({
                name: cats.cat2,
                slug: `${cats.cat1}-${cats.cat2}`.toLowerCase().replace(/\s+/g, '-'),
                parent_id: cat1Id,
                category_type: cats.cat1.includes('外') ? 'exterior' : 'interior',
                is_active: true,
              })
              .select('id')
              .single();
            cat2Id = newCat?.id;
          }
          if (cat2Id) categoryMap.set(cat2Key, cat2Id);
        }

        // Category 3 (final category for items)
        const cat3Key = key;
        let cat3Id = categoryMap.get(cat3Key);
        if (!cat3Id && cat2Id) {
          const { data: existing } = await supabase
            .from('categories')
            .select('id')
            .eq('name', cats.cat3)
            .eq('parent_id', cat2Id)
            .single();

          if (existing) {
            cat3Id = existing.id;
          } else {
            const { data: newCat } = await supabase
              .from('categories')
              .insert({
                name: cats.cat3,
                slug: `${cats.cat1}-${cats.cat2}-${cats.cat3}`.toLowerCase().replace(/\s+/g, '-'),
                parent_id: cat2Id,
                category_type: cats.cat1.includes('外') ? 'exterior' : 'interior',
                is_active: true,
              })
              .select('id')
              .single();
            cat3Id = newCat?.id;
          }
          if (cat3Id) categoryMap.set(cat3Key, cat3Id);
        }
      }

      // 2. 商品を登録
      for (let i = 0; i < parsedData.length; i++) {
        const product = parsedData[i];
        const categoryKey = `${product.category1}|${product.category2}|${product.category3}`;
        const categoryId = categoryMap.get(categoryKey);

        try {
          // アイテムを作成または更新
          const itemCode = `${product.product}-${product.color}`.replace(/\s+/g, '-').toUpperCase();

          const { data: existingItem } = await supabase
            .from('items')
            .select('id')
            .eq('item_code', itemCode)
            .single();

          let itemId: string;

          if (existingItem) {
            // 更新
            await supabase
              .from('items')
              .update({
                name: product.product,
                category_id: categoryId,
                manufacturer: product.manufacturer,
                model_number: product.modelNumber,
                updated_at: new Date().toISOString(),
              })
              .eq('id', existingItem.id);
            itemId = existingItem.id;
          } else {
            // 新規作成
            const { data: newItem, error: itemError } = await supabase
              .from('items')
              .insert({
                item_code: itemCode,
                name: product.product,
                category_id: categoryId,
                manufacturer: product.manufacturer,
                model_number: product.modelNumber,
                is_active: true,
              })
              .select('id')
              .single();

            if (itemError) throw itemError;
            itemId = newItem.id;
          }

          // バリエーション（色）を作成
          const variantCode = `${itemCode}-${product.color}`.replace(/\s+/g, '-');
          const { data: existingVariant } = await supabase
            .from('item_variants')
            .select('id')
            .eq('variant_code', variantCode)
            .single();

          let variantId: string;

          if (existingVariant) {
            variantId = existingVariant.id;
          } else {
            const { data: newVariant } = await supabase
              .from('item_variants')
              .insert({
                item_id: itemId,
                variant_code: variantCode,
                color_name: product.color,
                is_active: true,
              })
              .select('id')
              .single();
            variantId = newVariant?.id || '';
          }

          // 価格を登録（各プラン）
          const pricingData = [
            { productCode: 'LIFE', price: product.priceLIFE },
            { productCode: 'LIFE+', price: product.priceLIFEPlus },
            { productCode: 'HOURS', price: product.priceHOURS },
            { productCode: 'LACIE', price: product.priceLACIE },
          ];

          for (const pricing of pricingData) {
            // プロダクトIDを取得
            const { data: productData } = await supabase
              .from('products')
              .select('id')
              .eq('code', pricing.productCode)
              .single();

            if (productData && pricing.price > 0) {
              await supabase
                .from('item_pricing')
                .upsert({
                  item_id: itemId,
                  variant_id: variantId || null,
                  product_id: productData.id,
                  price: pricing.price,
                  is_available: true,
                  is_standard: pricing.price === 0,
                  effective_date: new Date().toISOString().split('T')[0],
                }, {
                  onConflict: 'item_id,product_id',
                });
            }
          }

          setProgress((prev) => prev && ({
            ...prev,
            processed: prev.processed + 1,
            success: prev.success + 1,
          }));
        } catch (err) {
          console.error('Error importing product:', product, err);
          setProgress((prev) => prev && ({
            ...prev,
            processed: prev.processed + 1,
            failed: prev.failed + 1,
            errors: [...prev.errors, `${product.product} (${product.color}): インポート失敗`],
          }));
        }
      }

      setImportComplete(true);
    } catch (err) {
      console.error('Import error:', err);
      setError('インポート中にエラーが発生しました');
    } finally {
      setIsImporting(false);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleReset = () => {
    setFileName('');
    setParsedData(null);
    setError(null);
    setProgress(null);
    setImportComplete(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const downloadTemplate = () => {
    const template = `category1,category2,category3,product,color,manufacturer,modelNumber,unit,priceLIFE,priceLIFEPlus,priceHOURS,priceLACIE
外装,外壁,サイディング,ニチハ モエンサイディング,ホワイト,ニチハ,FU1234,㎡,0,5000,8000,12000
外装,外壁,サイディング,ニチハ モエンサイディング,グレー,ニチハ,FU1235,㎡,0,5000,8000,12000
内装,壁紙,ビニールクロス,サンゲツ SP,アイボリー,サンゲツ,SP-2801,㎡,0,500,800,1200`;

    const blob = new Blob([template], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'import_template.csv';
    link.click();
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">CSVデータインポート</h2>
        <button
          onClick={downloadTemplate}
          className="flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700"
        >
          <Download className="w-4 h-4" />
          テンプレートをダウンロード
        </button>
      </div>

      {!parsedData ? (
        <div
          onClick={handleClick}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-teal-400 transition-colors cursor-pointer"
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
              <p className="text-xs text-gray-500 mt-1">対応形式: CSV (.csv)</p>
            </div>

            {isUploading && (
              <div className="flex items-center gap-2 text-sm text-teal-600">
                <Loader2 className="w-4 h-4 animate-spin" />
                処理中...
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* File info */}
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-teal-600" />
              <div>
                <p className="font-medium text-gray-900">{fileName}</p>
                <p className="text-sm text-gray-500">{parsedData.length}件のデータ</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center gap-1 px-3 py-1.5 text-sm border rounded-lg hover:bg-gray-50"
              >
                <Eye className="w-4 h-4" />
                {showPreview ? '閉じる' : 'プレビュー'}
              </button>
              <button
                onClick={handleReset}
                className="p-1.5 text-gray-400 hover:text-gray-600 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Preview */}
          {showPreview && (
            <div className="border rounded-lg overflow-hidden max-h-64 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="px-3 py-2 text-left">カテゴリ</th>
                    <th className="px-3 py-2 text-left">商品名</th>
                    <th className="px-3 py-2 text-left">色</th>
                    <th className="px-3 py-2 text-left">メーカー</th>
                    <th className="px-3 py-2 text-right">LACIE価格</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {parsedData.slice(0, 20).map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-3 py-2">
                        {item.category1} &gt; {item.category2} &gt; {item.category3}
                      </td>
                      <td className="px-3 py-2">{item.product}</td>
                      <td className="px-3 py-2">{item.color}</td>
                      <td className="px-3 py-2">{item.manufacturer}</td>
                      <td className="px-3 py-2 text-right">
                        ¥{item.priceLACIE.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {parsedData.length > 20 && (
                <div className="text-center py-2 text-sm text-gray-500 bg-gray-50">
                  他 {parsedData.length - 20}件...
                </div>
              )}
            </div>
          )}

          {/* Import Progress */}
          {progress && (
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">インポート進捗</span>
                <span className="text-sm text-gray-600">
                  {progress.processed} / {progress.total}
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-teal-500 transition-all"
                  style={{ width: `${(progress.processed / progress.total) * 100}%` }}
                />
              </div>
              <div className="flex gap-4 text-sm">
                <span className="text-green-600">成功: {progress.success}</span>
                {progress.failed > 0 && (
                  <span className="text-red-600">失敗: {progress.failed}</span>
                )}
              </div>
              {progress.errors.length > 0 && (
                <div className="text-sm text-red-600 max-h-20 overflow-y-auto">
                  {progress.errors.slice(0, 5).map((err, i) => (
                    <p key={i}>{err}</p>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Import Complete */}
          {importComplete && (
            <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-green-800">インポート完了</p>
                <p className="text-sm text-green-600">
                  {progress?.success}件のデータをインポートしました
                </p>
              </div>
            </div>
          )}

          {/* Actions */}
          {mode === 'import' && !importComplete && (
            <div className="flex justify-end gap-3">
              <button
                onClick={handleReset}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                キャンセル
              </button>
              <button
                onClick={handleImportToDatabase}
                disabled={isImporting}
                className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50"
              >
                {isImporting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    インポート中...
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    データベースにインポート
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <span className="text-sm text-red-700">{error}</span>
        </div>
      )}
    </div>
  );
}

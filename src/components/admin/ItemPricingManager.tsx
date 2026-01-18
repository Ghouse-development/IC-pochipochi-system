import { useState, useEffect } from 'react';
import { Save, DollarSign, Check, X } from 'lucide-react';
import { itemPricingApi, productsApi } from '../../services/api';
import type { ItemPricing, Product } from '../../types/database';
import { useToast } from '../common/Toast';
import { createLogger } from '../../lib/logger';

const logger = createLogger('ItemPricingManager');

interface ItemPricingManagerProps {
  itemId: string;
  pricing: ItemPricing[];
  onPricingChange: () => void;
}

export function ItemPricingManager({
  itemId,
  pricing: initialPricing,
  onPricingChange,
}: ItemPricingManagerProps) {
  const toast = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [pricingData, setPricingData] = useState<Record<string, {
    is_available: boolean;
    is_standard: boolean;
    price: number;
    material_cost: number;
    installation_cost: number;
    gross_margin_rate: number;
    selling_price: number;
    existingId?: string;
  }>>({});

  // 売価を計算する関数（1000円単位切り上げ）
  const calculateSellingPrice = (materialCost: number, installationCost: number, marginRate: number): number => {
    const costPrice = materialCost + installationCost;
    if (costPrice === 0) return 0;
    const rawSellingPrice = costPrice / (1 - marginRate);
    return Math.ceil(rawSellingPrice / 1000) * 1000;
  };
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load products (plans) and initialize pricing data
  useEffect(() => {
    const loadData = async () => {
      try {
        const productsData = await productsApi.getAll();
        setProducts(productsData);

        // Initialize pricing data from existing pricing
        const initialData: typeof pricingData = {};
        productsData.forEach(product => {
          const existingPricing = initialPricing.find(p => p.product_id === product.id);
          const materialCost = existingPricing?.material_cost ?? 0;
          const installationCost = existingPricing?.installation_cost ?? 0;
          const marginRate = existingPricing?.gross_margin_rate ?? 0.30;
          initialData[product.id] = {
            is_available: existingPricing?.is_available ?? true,
            is_standard: existingPricing?.is_standard ?? false,
            price: existingPricing?.price ?? 0,
            material_cost: materialCost,
            installation_cost: installationCost,
            gross_margin_rate: marginRate,
            selling_price: existingPricing?.selling_price ?? calculateSellingPrice(materialCost, installationCost, marginRate),
            existingId: existingPricing?.id,
          };
        });
        setPricingData(initialData);
      } catch (err) {
        logger.error('Failed to load products:', err);
        toast.error('エラー', 'プラン情報の読み込みに失敗しました');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [initialPricing, toast]);

  const handlePricingChange = (
    productId: string,
    field: 'is_available' | 'is_standard' | 'price' | 'material_cost' | 'installation_cost' | 'gross_margin_rate',
    value: boolean | number
  ) => {
    setPricingData(prev => {
      const currentData = prev[productId];
      const newData = {
        ...currentData,
        [field]: value,
        // If marking as standard, set price to 0
        ...(field === 'is_standard' && value === true ? { price: 0 } : {}),
      };

      // 原価フィールドが変更されたら売価を再計算
      if (field === 'material_cost' || field === 'installation_cost' || field === 'gross_margin_rate') {
        const materialCost = field === 'material_cost' ? (value as number) : currentData.material_cost;
        const installationCost = field === 'installation_cost' ? (value as number) : currentData.installation_cost;
        const marginRate = field === 'gross_margin_rate' ? (value as number) : currentData.gross_margin_rate;
        newData.selling_price = calculateSellingPrice(materialCost, installationCost, marginRate);
      }

      return {
        ...prev,
        [productId]: newData,
      };
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      for (const [productId, data] of Object.entries(pricingData)) {
        if (data.existingId) {
          // Update existing pricing
          await itemPricingApi.update(data.existingId, {
            is_available: data.is_available,
            is_standard: data.is_standard,
            price: data.is_standard ? 0 : data.price,
            material_cost: data.material_cost,
            installation_cost: data.installation_cost,
            gross_margin_rate: data.gross_margin_rate,
          });
        } else {
          // Create new pricing
          await itemPricingApi.create({
            item_id: itemId,
            product_id: productId,
            is_available: data.is_available,
            is_standard: data.is_standard,
            price: data.is_standard ? 0 : data.price,
            material_cost: data.material_cost,
            installation_cost: data.installation_cost,
            gross_margin_rate: data.gross_margin_rate,
          });
        }
      }
      toast.success('保存完了', '価格設定を保存しました');
      onPricingChange();
    } catch (err) {
      logger.error('Failed to save pricing:', err);
      toast.error('エラー', '価格設定の保存に失敗しました');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-gray-900 flex items-center gap-2">
          <DollarSign className="w-5 h-5" />
          プランごとの価格設定
        </h4>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {isSaving ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              保存中...
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              価格を保存
            </>
          )}
        </button>
      </div>

      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">プラン</th>
              <th className="text-center px-4 py-3 text-sm font-medium text-gray-700">選択可</th>
              <th className="text-center px-4 py-3 text-sm font-medium text-gray-700">標準</th>
              <th className="text-right px-4 py-3 text-sm font-medium text-gray-700">価格（税抜）</th>
              <th className="text-right px-4 py-3 text-sm font-medium text-gray-700">材料費</th>
              <th className="text-right px-4 py-3 text-sm font-medium text-gray-700">施工費</th>
              <th className="text-right px-4 py-3 text-sm font-medium text-gray-700">粗利率</th>
              <th className="text-right px-4 py-3 text-sm font-medium text-gray-700 bg-blue-50">原価</th>
              <th className="text-right px-4 py-3 text-sm font-medium text-gray-700 bg-green-50">売価</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              const data = pricingData[product.id] || {
                is_available: true,
                is_standard: false,
                price: 0,
                material_cost: 0,
                installation_cost: 0,
                gross_margin_rate: 0.30,
                selling_price: 0,
              };
              const costPrice = (data.material_cost || 0) + (data.installation_cost || 0);

              return (
                <tr
                  key={product.id}
                  className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${!data.is_available ? 'opacity-50' : ''}`}
                >
                  <td className="px-4 py-3">
                    <div className="font-medium text-gray-900">{product.name}</div>
                    <div className="text-xs text-gray-500">{product.code}</div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handlePricingChange(product.id, 'is_available', !data.is_available)}
                      className={`p-2 rounded-lg transition-colors ${
                        data.is_available
                          ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                          : 'bg-red-100 text-red-600 hover:bg-red-200'
                      }`}
                    >
                      {data.is_available ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
                    </button>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={data.is_standard}
                        onChange={(e) => handlePricingChange(product.id, 'is_standard', e.target.checked)}
                        disabled={!data.is_available}
                        className="sr-only"
                      />
                      <div className={`w-10 h-6 rounded-full transition-colors ${
                        data.is_standard ? 'bg-blue-500' : 'bg-gray-300'
                      } ${!data.is_available ? 'opacity-50' : ''}`}>
                        <div className={`w-4 h-4 mt-1 rounded-full bg-white shadow transform transition-transform ${
                          data.is_standard ? 'translate-x-5' : 'translate-x-1'
                        }`} />
                      </div>
                    </label>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <span className="text-gray-500">¥</span>
                      <input
                        type="number"
                        value={data.is_standard ? 0 : data.price}
                        onChange={(e) => handlePricingChange(product.id, 'price', parseInt(e.target.value) || 0)}
                        disabled={!data.is_available || data.is_standard}
                        className="w-20 px-2 py-1 text-right border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400"
                      />
                    </div>
                    {data.is_standard && (
                      <div className="text-xs text-blue-600 text-right mt-1">標準</div>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <span className="text-gray-500">¥</span>
                      <input
                        type="number"
                        value={data.material_cost || 0}
                        onChange={(e) => handlePricingChange(product.id, 'material_cost', parseInt(e.target.value) || 0)}
                        disabled={!data.is_available}
                        className="w-20 px-2 py-1 text-right border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <span className="text-gray-500">¥</span>
                      <input
                        type="number"
                        value={data.installation_cost || 0}
                        onChange={(e) => handlePricingChange(product.id, 'installation_cost', parseInt(e.target.value) || 0)}
                        disabled={!data.is_available}
                        className="w-20 px-2 py-1 text-right border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="1"
                        value={data.gross_margin_rate || 0.30}
                        onChange={(e) => handlePricingChange(product.id, 'gross_margin_rate', parseFloat(e.target.value) || 0.30)}
                        disabled={!data.is_available}
                        className="w-16 px-2 py-1 text-right border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400"
                      />
                      <span className="text-xs text-gray-500">({Math.round((data.gross_margin_rate || 0.30) * 100)}%)</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 bg-blue-50">
                    <div className="text-right font-medium text-blue-800">
                      ¥{costPrice.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-4 py-3 bg-green-50">
                    <div className="text-right font-bold text-green-800">
                      ¥{(data.selling_price || 0).toLocaleString()}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
        <p className="font-medium mb-1">設定の説明：</p>
        <ul className="list-disc list-inside space-y-1 text-blue-700">
          <li><strong>選択可</strong>：このプランでこのアイテムを選択できるかどうか</li>
          <li><strong>標準</strong>：ONにすると標準仕様（0円）として扱われます</li>
          <li><strong>価格</strong>：オプション価格（税抜）。標準の場合は0円固定</li>
          <li><strong>材料費</strong>：材料の原価を入力</li>
          <li><strong>施工費</strong>：施工にかかる費用を入力</li>
          <li><strong>粗利率</strong>：粗利益率（デフォルト30%=0.30）</li>
          <li><strong>原価</strong>：材料費＋施工費（自動計算）</li>
          <li><strong>売価</strong>：原価÷(1-粗利率)を1000円単位で切り上げ（自動計算）</li>
        </ul>
      </div>
    </div>
  );
}

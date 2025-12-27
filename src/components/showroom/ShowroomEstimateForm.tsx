/**
 * ショールーム見積入力フォーム
 * - ICコーディネーターがショールームで決めた見積を入力
 */
import React, { useState, useCallback } from 'react';
import { Plus, Trash2, Save, Building2 } from 'lucide-react';
import {
  useShowroomEstimateStore,
  SHOWROOM_CATEGORIES,
  type ShowroomEstimateItem,
} from '../../stores/useShowroomEstimateStore';

interface FormData {
  category: ShowroomEstimateItem['category'];
  manufacturer: string;
  productName: string;
  modelNumber: string;
  color: string;
  options: string;
  basePrice: number;
  optionPrice: number;
  notes: string;
  visitDate: string;
}

const initialFormData: FormData = {
  category: 'kitchen',
  manufacturer: '',
  productName: '',
  modelNumber: '',
  color: '',
  options: '',
  basePrice: 0,
  optionPrice: 0,
  notes: '',
  visitDate: new Date().toISOString().split('T')[0],
};

export const ShowroomEstimateForm: React.FC = () => {
  const { items, addItem, removeItem, getTotalPrice } = useShowroomEstimateStore();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'number' ? Number(value) || 0 : value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!formData.manufacturer || !formData.productName) {
        alert('メーカー名と商品名は必須です');
        return;
      }

      addItem({
        category: formData.category,
        categoryLabel: SHOWROOM_CATEGORIES[formData.category],
        manufacturer: formData.manufacturer,
        productName: formData.productName,
        modelNumber: formData.modelNumber,
        color: formData.color || undefined,
        options: formData.options ? formData.options.split(',').map((o) => o.trim()) : [],
        basePrice: formData.basePrice,
        optionPrice: formData.optionPrice,
        totalPrice: formData.basePrice + formData.optionPrice,
        notes: formData.notes || undefined,
        visitDate: formData.visitDate || undefined,
      });

      setFormData(initialFormData);
      setIsFormOpen(false);
    },
    [formData, addItem]
  );

  const formatPrice = (price: number) => {
    return `¥${price.toLocaleString()}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      {/* ヘッダー */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Building2 className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">ショールーム見積</h2>
            <p className="text-sm text-gray-500">キッチン・バス等のショールーム決定事項</p>
          </div>
        </div>
        <button
          onClick={() => setIsFormOpen(!isFormOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          見積追加
        </button>
      </div>

      {/* 入力フォーム */}
      {isFormOpen && (
        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* カテゴリ */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                カテゴリ
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                {Object.entries(SHOWROOM_CATEGORIES).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            {/* メーカー */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                メーカー <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleInputChange}
                placeholder="例: LIXIL, Panasonic, TOTO"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* 商品名 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                商品名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                placeholder="例: リシェルSI"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* 型番 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                型番
              </label>
              <input
                type="text"
                name="modelNumber"
                value={formData.modelNumber}
                onChange={handleInputChange}
                placeholder="例: RSSI-2550"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* カラー */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                カラー・仕上げ
              </label>
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleInputChange}
                placeholder="例: ホワイト木目"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* 訪問日 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ショールーム訪問日
              </label>
              <input
                type="date"
                name="visitDate"
                value={formData.visitDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* オプション */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                オプション（カンマ区切り）
              </label>
              <input
                type="text"
                name="options"
                value={formData.options}
                onChange={handleInputChange}
                placeholder="例: 食洗機, 浄水器, タッチレス水栓"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* 本体価格 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                本体価格
              </label>
              <input
                type="number"
                name="basePrice"
                value={formData.basePrice || ''}
                onChange={handleInputChange}
                placeholder="0"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* オプション価格 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                オプション価格
              </label>
              <input
                type="number"
                name="optionPrice"
                value={formData.optionPrice || ''}
                onChange={handleInputChange}
                placeholder="0"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* 合計表示 */}
            <div className="flex items-end">
              <div className="w-full px-3 py-2 bg-purple-50 border border-purple-200 rounded-lg">
                <span className="text-sm text-gray-600">合計: </span>
                <span className="font-bold text-purple-600">
                  {formatPrice(formData.basePrice + formData.optionPrice)}
                </span>
              </div>
            </div>

            {/* 備考 */}
            <div className="md:col-span-2 lg:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                備考
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={2}
                placeholder="特記事項があれば入力"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 resize-none"
              />
            </div>
          </div>

          {/* 送信ボタン */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              <Save className="w-4 h-4" />
              保存
            </button>
          </div>
        </form>
      )}

      {/* 登録済みアイテム一覧 */}
      {items.length > 0 ? (
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 text-xs font-medium bg-purple-100 text-purple-700 rounded">
                    {item.categoryLabel}
                  </span>
                  <span className="font-medium text-gray-900">{item.productName}</span>
                </div>
                <div className="text-sm text-gray-500">
                  {item.manufacturer}
                  {item.modelNumber && ` / ${item.modelNumber}`}
                  {item.color && ` / ${item.color}`}
                </div>
                {item.options.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {item.options.map((opt, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs bg-gray-200 text-gray-600 rounded"
                      >
                        {opt}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="font-bold text-gray-900">
                    {formatPrice(item.totalPrice)}
                  </div>
                  {item.visitDate && (
                    <div className="text-xs text-gray-400">
                      訪問日: {item.visitDate}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {/* 合計 */}
          <div className="flex justify-end items-center gap-4 pt-4 border-t">
            <span className="text-gray-600">ショールーム見積合計:</span>
            <span className="text-xl font-bold text-purple-600">
              {formatPrice(getTotalPrice())}
            </span>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-400">
          <Building2 className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p>ショールーム見積がありません</p>
          <p className="text-sm">「見積追加」から登録してください</p>
        </div>
      )}
    </div>
  );
};

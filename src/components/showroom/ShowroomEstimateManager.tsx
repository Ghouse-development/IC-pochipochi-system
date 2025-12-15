/**
 * ショールーム見積追加機能
 * - ショールームで選んだ商品を追加
 * - メーカー別の見積データインポート
 * - 手入力での追加
 */
import React, { useState, useCallback } from 'react';
import { Plus, Upload, Package, Building2, X, Check } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { useToast } from '../common/Toast';
import { formatPrice } from '../../lib/utils';
import type { Product, ProductVariant } from '../../types/product';

interface ShowroomItem {
  id: string;
  manufacturer: string;
  productCode: string;
  productName: string;
  color: string;
  price: number;
  unit: string;
  quantity: number;
  category: string;
  notes?: string;
}

interface ShowroomEstimateManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MANUFACTURERS = [
  { id: 'lixil', name: 'LIXIL', color: '#E31937' },
  { id: 'toto', name: 'TOTO', color: '#00539B' },
  { id: 'panasonic', name: 'Panasonic', color: '#0068B7' },
  { id: 'takara', name: 'タカラスタンダード', color: '#009B63' },
  { id: 'toclas', name: 'トクラス', color: '#8B4513' },
  { id: 'cleanup', name: 'クリナップ', color: '#FF6600' },
  { id: 'other', name: 'その他', color: '#666666' },
];

const CATEGORIES = [
  'キッチン', 'バス', 'トイレ', '洗面', '給湯器', '床材', '建具', '照明', 'エアコン', 'その他'
];

export const ShowroomEstimateManager: React.FC<ShowroomEstimateManagerProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'manual' | 'import'>('manual');
  const [showroomItems, setShowroomItems] = useState<ShowroomItem[]>([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('');
  const [importText, setImportText] = useState('');

  // 手入力フォーム
  const [formData, setFormData] = useState<Partial<ShowroomItem>>({
    manufacturer: '',
    productCode: '',
    productName: '',
    color: '',
    price: 0,
    unit: '式',
    quantity: 1,
    category: '',
    notes: ''
  });

  const { addItem } = useCartStore();
  const toast = useToast();

  // 手入力で追加
  const handleAddManualItem = useCallback(() => {
    if (!formData.productName || !formData.manufacturer || !formData.category) {
      toast.warning('入力エラー', '商品名、メーカー、カテゴリは必須です');
      return;
    }

    const newItem: ShowroomItem = {
      id: `showroom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      manufacturer: formData.manufacturer || '',
      productCode: formData.productCode || '',
      productName: formData.productName || '',
      color: formData.color || '',
      price: formData.price || 0,
      unit: formData.unit || '式',
      quantity: formData.quantity || 1,
      category: formData.category || '',
      notes: formData.notes
    };

    setShowroomItems(prev => [...prev, newItem]);
    setFormData({
      manufacturer: formData.manufacturer,
      productCode: '',
      productName: '',
      color: '',
      price: 0,
      unit: '式',
      quantity: 1,
      category: formData.category,
      notes: ''
    });
    toast.success('追加完了', `${newItem.productName}を追加しました`);
  }, [formData, toast]);

  // CSVテキストからインポート
  const handleImportFromText = useCallback(() => {
    if (!importText.trim()) {
      toast.warning('入力エラー', 'インポートするデータを入力してください');
      return;
    }

    try {
      const lines = importText.trim().split('\n');
      const imported: ShowroomItem[] = [];

      lines.forEach((line, idx) => {
        if (idx === 0 && line.includes('商品名')) return; // ヘッダー行をスキップ

        const cols = line.split(/[,\t]/);
        if (cols.length >= 3) {
          imported.push({
            id: `import-${Date.now()}-${idx}`,
            manufacturer: cols[0]?.trim() || selectedManufacturer || 'その他',
            productCode: cols[1]?.trim() || '',
            productName: cols[2]?.trim() || '',
            color: cols[3]?.trim() || '',
            price: parseInt(cols[4]?.replace(/[^\d]/g, '') || '0', 10),
            unit: cols[5]?.trim() || '式',
            quantity: parseInt(cols[6] || '1', 10),
            category: cols[7]?.trim() || 'その他',
            notes: cols[8]?.trim()
          });
        }
      });

      if (imported.length > 0) {
        setShowroomItems(prev => [...prev, ...imported]);
        setImportText('');
        toast.success('インポート完了', `${imported.length}件の商品をインポートしました`);
      } else {
        toast.warning('インポートエラー', '有効なデータが見つかりませんでした');
      }
    } catch (error) {
      toast.error('インポートエラー', 'データの解析に失敗しました');
    }
  }, [importText, selectedManufacturer, toast]);

  // ショールーム商品をカートに追加
  const handleAddToCart = useCallback(() => {
    if (showroomItems.length === 0) {
      toast.warning('追加エラー', '追加する商品がありません');
      return;
    }

    showroomItems.forEach(item => {
      // CartItemに変換
      const product: Product = {
        id: item.id,
        categoryId: '',
        categoryName: item.category,
        subcategory: 'ショールーム',
        name: item.productName,
        manufacturer: item.manufacturer,
        modelNumber: item.productCode,
        unit: item.unit as Product['unit'],
        pricing: [{ plan: 'LACIE', planId: 'LACIE', price: item.price }],
        variants: [{
          id: `${item.id}-v1`,
          color: item.color || '標準',
          colorCode: ''
        }],
        isOption: item.price > 0,
        description: item.notes || `ショールームで選択: ${item.manufacturer}`
      };

      const variant: ProductVariant = product.variants[0];
      addItem(product, item.quantity, variant);
    });

    toast.success('カート追加完了', `${showroomItems.length}件の商品をカートに追加しました`);
    setShowroomItems([]);
    onClose();
  }, [showroomItems, addItem, toast, onClose]);

  // アイテム削除
  const handleRemoveItem = useCallback((itemId: string) => {
    setShowroomItems(prev => prev.filter(item => item.id !== itemId));
  }, []);

  if (!isOpen) return null;

  const totalPrice = showroomItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">ショールーム見積追加</h2>
                <p className="text-blue-100 text-sm">ショールームで選んだ商品を追加できます</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* タブ */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 px-6">
          <button
            onClick={() => setActiveTab('manual')}
            className={`px-6 py-3 font-medium border-b-2 transition-colors ${
              activeTab === 'manual'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400'
            }`}
          >
            手入力で追加
          </button>
          <button
            onClick={() => setActiveTab('import')}
            className={`px-6 py-3 font-medium border-b-2 transition-colors ${
              activeTab === 'import'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400'
            }`}
          >
            テキストからインポート
          </button>
        </div>

        {/* コンテンツ */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'manual' ? (
            <div className="space-y-6">
              {/* メーカー選択 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  メーカー <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {MANUFACTURERS.map(m => (
                    <button
                      key={m.id}
                      onClick={() => setFormData(prev => ({ ...prev, manufacturer: m.name }))}
                      className={`p-2 rounded-lg text-xs font-medium border-2 transition-all ${
                        formData.manufacturer === m.name
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300'
                      }`}
                      style={{ borderColor: formData.manufacturer === m.name ? m.color : undefined }}
                    >
                      {m.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 入力フォーム */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    商品名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.productName || ''}
                    onChange={e => setFormData(prev => ({ ...prev, productName: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="例: システムキッチン アレスタ"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    品番
                  </label>
                  <input
                    type="text"
                    value={formData.productCode || ''}
                    onChange={e => setFormData(prev => ({ ...prev, productCode: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="例: AS-001"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    カテゴリ <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.category || ''}
                    onChange={e => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">選択してください</option>
                    {CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    色・仕様
                  </label>
                  <input
                    type="text"
                    value={formData.color || ''}
                    onChange={e => setFormData(prev => ({ ...prev, color: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="例: ホワイト / 人大天板"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    金額（税別）
                  </label>
                  <input
                    type="number"
                    value={formData.price || ''}
                    onChange={e => setFormData(prev => ({ ...prev, price: parseInt(e.target.value) || 0 }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    数量
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.quantity || 1}
                    onChange={e => setFormData(prev => ({ ...prev, quantity: parseInt(e.target.value) || 1 }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  備考
                </label>
                <textarea
                  value={formData.notes || ''}
                  onChange={e => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  rows={2}
                  placeholder="特記事項があれば入力"
                />
              </div>

              <button
                onClick={handleAddManualItem}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:from-blue-600 hover:to-indigo-600 transition-all"
              >
                <Plus className="w-5 h-5" />
                リストに追加
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">インポート形式</h4>
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  タブまたはカンマ区切りで入力してください。<br />
                  形式: メーカー, 品番, 商品名, 色, 金額, 単位, 数量, カテゴリ, 備考
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  デフォルトメーカー
                </label>
                <select
                  value={selectedManufacturer}
                  onChange={e => setSelectedManufacturer(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">選択してください</option>
                  {MANUFACTURERS.map(m => (
                    <option key={m.id} value={m.name}>{m.name}</option>
                  ))}
                </select>
              </div>

              <textarea
                value={importText}
                onChange={e => setImportText(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white font-mono text-sm"
                rows={8}
                placeholder="ここにデータを貼り付け..."
              />

              <button
                onClick={handleImportFromText}
                className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:from-green-600 hover:to-emerald-600 transition-all"
              >
                <Upload className="w-5 h-5" />
                インポート実行
              </button>
            </div>
          )}

          {/* 追加リスト */}
          {showroomItems.length > 0 && (
            <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                <Package className="w-5 h-5" />
                追加リスト（{showroomItems.length}件）
              </h4>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {showroomItems.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 dark:text-gray-100 truncate">
                        {item.productName}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {item.manufacturer} / {item.category} {item.color && `/ ${item.color}`}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 dark:text-gray-100">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                      {item.quantity > 1 && (
                        <p className="text-xs text-gray-500">×{item.quantity}</p>
                      )}
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* フッター */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600 dark:text-gray-400">追加商品合計</span>
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {formatPrice(totalPrice)}
            </span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              キャンセル
            </button>
            <button
              onClick={handleAddToCart}
              disabled={showroomItems.length === 0}
              className="flex-[2] py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:from-blue-600 hover:to-indigo-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Check className="w-5 h-5" />
              カートに追加
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

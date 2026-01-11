import React, { useState, useMemo } from 'react';
import { Package, AlertTriangle, TrendingUp, TrendingDown, Search, Filter, Download, RefreshCw } from 'lucide-react';
import { Button } from '../common/Button';
import { formatPrice } from '../../lib/utils';

interface InventoryItem {
  id: string;
  productName: string;
  manufacturer: string;
  category: string;
  sku: string;
  currentStock: number;
  minStock: number;
  maxStock: number;
  unitPrice: number;
  lastRestocked: Date;
  status: 'in_stock' | 'low_stock' | 'out_of_stock' | 'overstocked';
}

// サンプルデータ
const SAMPLE_INVENTORY: InventoryItem[] = [
  {
    id: '1',
    productName: 'ライブナチュラルプラス オーク',
    manufacturer: '朝日ウッドテック',
    category: '床材',
    sku: 'LNP-OAK-001',
    currentStock: 150,
    minStock: 50,
    maxStock: 200,
    unitPrice: 12000,
    lastRestocked: new Date(2024, 11, 15),
    status: 'in_stock',
  },
  {
    id: '2',
    productName: 'サンゲツ壁クロス SP9501',
    manufacturer: 'サンゲツ',
    category: '壁材',
    sku: 'SG-SP9501',
    currentStock: 20,
    minStock: 30,
    maxStock: 100,
    unitPrice: 1500,
    lastRestocked: new Date(2024, 10, 20),
    status: 'low_stock',
  },
  {
    id: '3',
    productName: 'TOTO ネオレスト',
    manufacturer: 'TOTO',
    category: '水廻り',
    sku: 'TOTO-NR-001',
    currentStock: 0,
    minStock: 5,
    maxStock: 20,
    unitPrice: 350000,
    lastRestocked: new Date(2024, 9, 10),
    status: 'out_of_stock',
  },
];

export const InventoryManager: React.FC = () => {
  const [inventory, _setInventory] = useState<InventoryItem[]>(SAMPLE_INVENTORY);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  // 集計
  const stats = useMemo(() => {
    const total = inventory.length;
    const inStock = inventory.filter((i) => i.status === 'in_stock').length;
    const lowStock = inventory.filter((i) => i.status === 'low_stock').length;
    const outOfStock = inventory.filter((i) => i.status === 'out_of_stock').length;
    const totalValue = inventory.reduce((sum, i) => sum + i.currentStock * i.unitPrice, 0);

    return { total, inStock, lowStock, outOfStock, totalValue };
  }, [inventory]);

  // フィルタリング
  const filteredInventory = useMemo(() => {
    return inventory.filter((item) => {
      const matchesSearch =
        item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
      const matchesCategory = filterCategory === 'all' || item.category === filterCategory;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [inventory, searchTerm, filterStatus, filterCategory]);

  const categories = useMemo(() => {
    return Array.from(new Set(inventory.map((i) => i.category)));
  }, [inventory]);

  const getStatusBadge = (status: InventoryItem['status']) => {
    const configs = {
      in_stock: { color: 'bg-green-100 text-green-700', label: '在庫あり' },
      low_stock: { color: 'bg-yellow-100 text-yellow-700', label: '在庫少' },
      out_of_stock: { color: 'bg-red-100 text-red-700', label: '在庫切れ' },
      overstocked: { color: 'bg-blue-100 text-blue-700', label: '過剰在庫' },
    };
    const config = configs[status];
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.label}
      </span>
    );
  };

  const getStockBar = (item: InventoryItem) => {
    const percentage = Math.min((item.currentStock / item.maxStock) * 100, 100);
    const barColor =
      item.status === 'out_of_stock'
        ? 'bg-red-500'
        : item.status === 'low_stock'
        ? 'bg-yellow-500'
        : 'bg-green-500';

    return (
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className={`h-full ${barColor} transition-all`} style={{ width: `${percentage}%` }} />
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Package className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-gray-900">在庫管理</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-1" />
            同期
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-1" />
            エクスポート
          </Button>
        </div>
      </div>

      {/* 集計カード */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Package className="w-4 h-4" />
            <span className="text-sm">総商品数</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-green-600 mb-1">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">在庫あり</span>
          </div>
          <div className="text-2xl font-bold text-green-600">{stats.inStock}</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-yellow-600 mb-1">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm">在庫少</span>
          </div>
          <div className="text-2xl font-bold text-yellow-600">{stats.lowStock}</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-red-600 mb-1">
            <TrendingDown className="w-4 h-4" />
            <span className="text-sm">在庫切れ</span>
          </div>
          <div className="text-2xl font-bold text-red-600">{stats.outOfStock}</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-indigo-600 mb-1">
            <span className="text-sm">在庫総額</span>
          </div>
          <div className="text-xl font-bold text-indigo-600">{formatPrice(stats.totalValue)}</div>
        </div>
      </div>

      {/* フィルター */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="商品名、SKU、メーカーで検索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm bg-white text-gray-900"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white text-gray-900"
            >
              <option value="all">すべてのステータス</option>
              <option value="in_stock">在庫あり</option>
              <option value="low_stock">在庫少</option>
              <option value="out_of_stock">在庫切れ</option>
            </select>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white text-gray-900"
            >
              <option value="all">すべてのカテゴリ</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 在庫テーブル */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">商品</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">SKU</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">カテゴリ</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700">在庫数</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 min-w-[120px]">在庫状況</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">ステータス</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">単価</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredInventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50:bg-gray-700/50 transition-colors">
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-gray-900">{item.productName}</p>
                      <p className="text-xs text-gray-500">{item.manufacturer}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{item.sku}</td>
                  <td className="px-4 py-3 text-gray-600">{item.category}</td>
                  <td className="px-4 py-3 text-center font-semibold text-gray-900">
                    {item.currentStock}
                  </td>
                  <td className="px-4 py-3">
                    <div className="space-y-1">
                      {getStockBar(item)}
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>最小: {item.minStock}</span>
                        <span>最大: {item.maxStock}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">{getStatusBadge(item.status)}</td>
                  <td className="px-4 py-3 text-right font-medium text-gray-900">
                    {formatPrice(item.unitPrice)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

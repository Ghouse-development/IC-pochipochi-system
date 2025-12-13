import React, { useState, useMemo } from 'react';
import { Plus, Edit, Trash2, BarChart3, Package, Bell, Search, TrendingUp, FileText, Download, Upload, Settings, Users, FolderTree, Briefcase, Wrench, Truck, Database, Building2 } from 'lucide-react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { ProductFormNew } from './ProductFormNew';
import { ProductManagement } from './ProductManagement';
import { SystemSettings } from './SystemSettings';
import { ProjectManager } from './ProjectManager';
import { ItemManager } from './ItemManager';
import { CategoryManager } from './CategoryManager';
import { UserManager } from './UserManager';
import { VendorOrderManager } from './VendorOrderManager';
import { DataBackup } from './DataBackup';
import { OrganizationManager } from './OrganizationManager';
import { useVersionStore } from '../../stores/useVersionStore';
import { useOrderStore } from '../../stores/useOrderStore';
import { useProductStore } from '../../stores/useProductStore';
import { useStatisticsStore } from '../../stores/useStatisticsStore';
import { formatPrice } from '../../lib/utils';
import { exportProductsToExcel, exportProductsToCSV } from '../../utils/exportProducts';
import { PdfImport } from './PdfImport';
import type { Product } from '../../types/product';

interface AdminDashboardProps {
  onBack?: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'products' | 'management' | 'statistics' | 'adoption' | 'versions' | 'pdf' | 'settings' | 'projects' | 'items' | 'categories' | 'users' | 'vendors' | 'backup' | 'organizations'>('products');
  const [productCategory, setProductCategory] = useState<'exterior' | 'interior' | 'water'>('exterior');
  const [searchTerm, setSearchTerm] = useState('');
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();
  
  const currentVersion = useVersionStore((state) => state.currentVersion);
  const versions = useVersionStore((state) => state.versions || []);
  const orders = useOrderStore((state) => state.orders || []);
  
  const statistics = useMemo(() => {
    const confirmedOrders = orders.filter(o => 
      o.status === 'confirmed' || o.status === 'modified' || o.status === 'completed'
    );
    
    return {
      totalConfirmedOrders: confirmedOrders.length,
      yearlyTotal: confirmedOrders.reduce((sum, order) => sum + order.totalAmount, 0),
      averageOrderValue: confirmedOrders.length > 0 
        ? confirmedOrders.reduce((sum, order) => sum + order.totalAmount, 0) / confirmedOrders.length 
        : 0,
      monthlyData: Array.from({ length: 12 }, (_, i) => {
        const month = i + 1;
        const monthOrders = confirmedOrders.filter(order => 
          order.confirmedAt && new Date(order.confirmedAt).getMonth() === i
        );
        return {
          month,
          count: monthOrders.length,
          total: monthOrders.reduce((sum, order) => sum + order.totalAmount, 0)
        };
      })
    };
  }, [orders]);
  
  // 採用統計データを直接取得（セレクターを使用）
  const productStats = useStatisticsStore((state) => state.productStats || []);
  const yearlyAdoptions = useStatisticsStore((state) => state.yearlyAdoptions || []);
  const getAdoptionRates = useStatisticsStore((state) => state.getAdoptionRates);
  const getUnselectedProducts = useStatisticsStore((state) => state.getUnselectedProducts);
  const getLowAdoptionProducts = useStatisticsStore((state) => state.getLowAdoptionProducts);
  const getCategoryAdoptionRates = useStatisticsStore((state) => state.getCategoryAdoptionRates);

  // 採用率分析データ
  const adoptionRates = useMemo(() => getAdoptionRates(), [productStats, getAdoptionRates]);
  const unselectedProducts = useMemo(() => getUnselectedProducts(), [productStats, getUnselectedProducts]);
  const lowAdoptionProducts = useMemo(() => getLowAdoptionProducts(30), [productStats, getLowAdoptionProducts]);
  const categoryAdoptionRates = useMemo(() => getCategoryAdoptionRates(), [productStats, getCategoryAdoptionRates]);
  
  const topProducts = useMemo(() =>
    [...productStats]
      .sort((a, b) => b.adoptionCount - a.adoptionCount)
      .slice(0, 10)
  , [productStats]);

  const monthlyStats = yearlyAdoptions;
  
  const {
    exteriorProducts,
    interiorProducts,
    waterProducts,
    addExteriorProduct,
    updateExteriorProduct,
    deleteExteriorProduct,
    addInteriorProduct,
    updateInteriorProduct,
    deleteInteriorProduct,
    addWaterProduct,
    updateWaterProduct,
    deleteWaterProduct,
  } = useProductStore();
  
  // カテゴリに応じた商品リストを取得
  const productsByCategory = useMemo(() => {
    switch (productCategory) {
      case 'exterior':
        return exteriorProducts;
      case 'interior':
        return interiorProducts;
      case 'water':
        return waterProducts;
      default:
        return [];
    }
  }, [productCategory, exteriorProducts, interiorProducts, waterProducts]);
  
  // 検索フィルタリング
  const filteredProducts = useMemo(() => {
    return productsByCategory.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [productsByCategory, searchTerm]);
  
  // 商品の保存処理
  const handleSaveProduct = (productData: Partial<Product>) => {
    const newProduct: Product = {
      id: editingProduct?.id || `${productCategory}-${Date.now()}`,
      categoryId: productData.categoryId || '',
      categoryName: productData.categoryName || '',
      subcategory: productData.subcategory || '',
      name: productData.name || '',
      manufacturer: productData.manufacturer || 'LIFE X',
      modelNumber: productData.modelNumber || '',
      unit: productData.unit || 'piece',
      isOption: productData.isOption ?? true,
      variants: productData.variants || [],
      pricing: productData.pricing || [],
      description: productData.description
    };
    
    if (editingProduct) {
      // 更新処理
      switch (productCategory) {
        case 'exterior':
          updateExteriorProduct(editingProduct.id, newProduct);
          break;
        case 'interior':
          updateInteriorProduct(editingProduct.id, newProduct);
          break;
        case 'water':
          updateWaterProduct(editingProduct.id, newProduct);
          break;
      }
    } else {
      // 新規追加処理
      switch (productCategory) {
        case 'exterior':
          addExteriorProduct(newProduct);
          break;
        case 'interior':
          addInteriorProduct(newProduct);
          break;
        case 'water':
          addWaterProduct(newProduct);
          break;
      }
    }
    
    setShowProductForm(false);
    setEditingProduct(undefined);
  };
  
  // 商品の削除処理
  const handleDeleteProduct = (productId: string) => {
    if (confirm('この商品を削除してもよろしいですか？')) {
      switch (productCategory) {
        case 'exterior':
          deleteExteriorProduct(productId);
          break;
        case 'interior':
          deleteInteriorProduct(productId);
          break;
        case 'water':
          deleteWaterProduct(productId);
          break;
      }
    }
  };
  
  // 商品の編集開始
  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setShowProductForm(true);
  };
  
  // 新規商品追加開始
  const handleAddProduct = () => {
    setEditingProduct(undefined);
    setShowProductForm(true);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold text-gray-900">STYLEBOOK 管理ダッシュボード</h1>
            <button
              onClick={onBack || (() => window.location.reload())}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              ← カタログに戻る
            </button>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-sm text-gray-600">
              現在のバージョン: <span className="font-semibold">{currentVersion}</span>
            </span>
            <span className="text-sm text-gray-600">
              最終更新: {new Date().toLocaleDateString('ja-JP')}
            </span>
          </div>
        </div>
        
        {/* タブナビゲーション */}
        <div className="flex gap-2 sm:gap-4 mb-4 sm:mb-6 border-b border-gray-200 overflow-x-auto">
          <button
            onClick={() => setActiveTab('products')}
            className={`pb-2 px-1 border-b-2 transition-colors ${
              activeTab === 'products'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <Package className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">商品管理</span>
              <span className="sm:hidden">商品</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('management')}
            className={`pb-2 px-1 border-b-2 transition-colors ${
              activeTab === 'management'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">製品詳細管理</span>
              <span className="sm:hidden">管理</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('statistics')}
            className={`pb-2 px-1 border-b-2 transition-colors ${
              activeTab === 'statistics'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">統計ダッシュボード</span>
              <span className="sm:hidden">統計</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('adoption')}
            className={`pb-2 px-1 border-b-2 transition-colors ${
              activeTab === 'adoption'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">採用統計</span>
              <span className="sm:hidden">採用</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('versions')}
            className={`pb-2 px-1 border-b-2 transition-colors ${
              activeTab === 'versions'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">バージョン履歴</span>
              <span className="sm:hidden">履歴</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('pdf')}
            className={`pb-2 px-1 border-b-2 transition-colors ${
              activeTab === 'pdf'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">PDF取り込み</span>
              <span className="sm:hidden">PDF</span>
            </div>
          </button>

          {/* 新しい管理機能タブ */}
          <div className="border-l border-gray-300 h-6 mx-2" />

          <button
            onClick={() => setActiveTab('projects')}
            className={`pb-2 px-1 border-b-2 transition-colors ${
              activeTab === 'projects'
                ? 'border-teal-500 text-teal-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">プロジェクト</span>
              <span className="sm:hidden">案件</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('items')}
            className={`pb-2 px-1 border-b-2 transition-colors ${
              activeTab === 'items'
                ? 'border-teal-500 text-teal-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <Package className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">アイテム管理</span>
              <span className="sm:hidden">商品</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`pb-2 px-1 border-b-2 transition-colors ${
              activeTab === 'categories'
                ? 'border-teal-500 text-teal-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <FolderTree className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">カテゴリ</span>
              <span className="sm:hidden">分類</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`pb-2 px-1 border-b-2 transition-colors ${
              activeTab === 'users'
                ? 'border-teal-500 text-teal-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">ユーザー</span>
              <span className="sm:hidden">人</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('vendors')}
            className={`pb-2 px-1 border-b-2 transition-colors ${
              activeTab === 'vendors'
                ? 'border-teal-500 text-teal-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">業者発注</span>
              <span className="sm:hidden">発注</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('backup')}
            className={`pb-2 px-1 border-b-2 transition-colors ${
              activeTab === 'backup'
                ? 'border-teal-500 text-teal-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <Database className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">バックアップ</span>
              <span className="sm:hidden">保存</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`pb-2 px-1 border-b-2 transition-colors ${
              activeTab === 'settings'
                ? 'border-teal-500 text-teal-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">システム設定</span>
              <span className="sm:hidden">設定</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('organizations')}
            className={`pb-2 px-1 border-b-2 transition-colors ${
              activeTab === 'organizations'
                ? 'border-amber-500 text-amber-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">組織管理</span>
              <span className="sm:hidden">組織</span>
            </div>
          </button>
        </div>

        {/* 商品管理 */}
        {activeTab === 'products' && (
          <div>
            {/* カテゴリ選択と検索バー */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4 sm:mb-6">
              <div className="flex gap-2">
                <button
                  onClick={() => setProductCategory('exterior')}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    productCategory === 'exterior'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  エクステリア
                </button>
                <button
                  onClick={() => setProductCategory('interior')}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    productCategory === 'interior'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  インテリア
                </button>
                <button
                  onClick={() => setProductCategory('water')}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    productCategory === 'water'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  水廻り
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="商品を検索..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => exportProductsToExcel(filteredProducts, productCategory)}
                    className="w-full sm:w-auto"
                  >
                    <FileText className="w-4 h-4 mr-1" />
                    <span className="hidden sm:inline">Excel</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => exportProductsToCSV(filteredProducts, productCategory)}
                    className="w-full sm:w-auto"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    <span className="hidden sm:inline">CSV</span>
                  </Button>
                  <Button variant="primary" onClick={handleAddProduct} className="w-full sm:w-auto">
                    <Plus className="w-4 h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">新規商品追加</span>
                    <span className="sm:hidden">追加</span>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* 商品リスト */}
            <Card className="overflow-hidden">
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        商品名
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        カテゴリ
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        メーカー
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        価格 (LACIE)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        タイプ
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        操作
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredProducts.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                          商品が見つかりません
                        </td>
                      </tr>
                    ) : (
                      filteredProducts.map((product) => (
                        <tr key={product.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {product.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {product.categoryName} / {product.subcategory}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {product.manufacturer}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatPrice(product.pricing.find(p => p.planId === 'LACIE')?.price || 0)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              product.isOption 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {product.isOption ? 'オプション' : '標準'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => handleEditProduct(product)}
                              className="text-blue-600 hover:text-blue-900 mr-3"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
            
            {/* 商品数の表示 */}
            <div className="mt-4 text-sm text-gray-600">
              合計 {filteredProducts.length} 件の商品
            </div>
          </div>
        )}
        
        {/* 統計ダッシュボード */}
        {activeTab === 'statistics' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">年間確定数</h3>
                <BarChart3 className="w-5 h-5 text-blue-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {statistics.totalConfirmedOrders}
              </p>
              <p className="text-sm text-gray-600 mt-2">件の仕様が確定済み</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">年間売上</h3>
                <BarChart3 className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {formatPrice(statistics.yearlyTotal)}
              </p>
              <p className="text-sm text-gray-600 mt-2">オプション売上総額</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">平均単価</h3>
                <BarChart3 className="w-5 h-5 text-purple-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {formatPrice(statistics.averageOrderValue)}
              </p>
              <p className="text-sm text-gray-600 mt-2">1件あたりの平均</p>
            </Card>
            
            <div className="md:col-span-3">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">月別売上推移</h3>
                <div className="h-64 flex items-end justify-between gap-2">
                  {statistics.monthlyData.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-blue-500 rounded-t"
                        style={{
                          height: `${(data.total / Math.max(...statistics.monthlyData.map(d => d.total))) * 100}%`
                        }}
                      />
                      <span className="text-xs text-gray-600 mt-2">{data.month}月</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}
        
        {/* バージョン履歴 */}
        {activeTab === 'versions' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">バージョン履歴</h2>
            <div className="space-y-4">
              {versions.sort((a, b) => 
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
              ).map((version) => (
                <Card key={version.id} className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        バージョン {version.version}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{version.description}</p>
                      <p className="text-xs text-gray-500 mt-2">
                        作成者: {version.createdBy} | 
                        日時: {new Date(version.createdAt).toLocaleString('ja-JP')}
                      </p>
                    </div>
                    {version.isActive && (
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        現在のバージョン
                      </span>
                    )}
                  </div>
                  {version.changes.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm font-medium text-gray-700 mb-2">変更内容:</p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {version.changes.map((change, idx) => (
                          <li key={idx}>{change}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}
        
        {/* 採用統計 */}
        {activeTab === 'adoption' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">商品採用統計・分析</h2>

            {/* サマリーカード */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <h4 className="text-sm font-medium text-blue-800">総閲覧商品数</h4>
                <p className="text-2xl font-bold text-blue-900 mt-1">{adoptionRates.length}件</p>
              </Card>
              <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <h4 className="text-sm font-medium text-green-800">採用商品数</h4>
                <p className="text-2xl font-bold text-green-900 mt-1">{adoptionRates.filter(a => a.adoptionCount > 0).length}件</p>
              </Card>
              <Card className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
                <h4 className="text-sm font-medium text-amber-800">未採用商品数</h4>
                <p className="text-2xl font-bold text-amber-900 mt-1">{unselectedProducts.length}件</p>
              </Card>
              <Card className="p-4 bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                <h4 className="text-sm font-medium text-red-800">低採用率商品</h4>
                <p className="text-2xl font-bold text-red-900 mt-1">{lowAdoptionProducts.length}件</p>
                <p className="text-xs text-red-600 mt-0.5">（採用率30%未満）</p>
              </Card>
            </div>

            {/* カテゴリ別採用率 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">カテゴリ別採用率</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryAdoptionRates.map((cat) => (
                  <Card key={cat.category} className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{cat.category}</h4>
                      <span className={`text-lg font-bold ${
                        cat.adoptionRate >= 50 ? 'text-green-600' :
                        cat.adoptionRate >= 20 ? 'text-amber-600' : 'text-red-600'
                      }`}>
                        {cat.adoptionRate}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className={`h-2 rounded-full ${
                          cat.adoptionRate >= 50 ? 'bg-green-500' :
                          cat.adoptionRate >= 20 ? 'bg-amber-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${Math.min(cat.adoptionRate, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      閲覧: {cat.viewCount}回 → 採用: {cat.adoptionCount}回
                    </p>
                  </Card>
                ))}
                {categoryAdoptionRates.length === 0 && (
                  <Card className="p-6 col-span-full">
                    <p className="text-center text-gray-500">まだ閲覧データがありません</p>
                  </Card>
                )}
              </div>
            </div>

            {/* 未採用商品リスト */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
                閲覧されたが未採用の商品
                <span className="text-sm font-normal text-gray-500">（検討されたが選ばれなかった商品）</span>
              </h3>
              <Card className="overflow-hidden">
                <table className="w-full">
                  <thead className="bg-amber-50 border-b border-amber-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-amber-700 uppercase tracking-wider">
                        商品名
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-amber-700 uppercase tracking-wider">
                        カテゴリ
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-amber-700 uppercase tracking-wider">
                        閲覧回数
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-amber-700 uppercase tracking-wider">
                        採用率
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {unselectedProducts.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                          未採用の商品はありません
                        </td>
                      </tr>
                    ) : (
                      unselectedProducts.slice(0, 20).map((product) => (
                        <tr key={product.productId} className="hover:bg-amber-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {product.productName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {product.categoryName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {product.viewCount}回
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                              0%
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </Card>
            </div>

            {/* 低採用率商品リスト */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                採用率の低い商品
                <span className="text-sm font-normal text-gray-500">（3回以上閲覧されたが採用率30%未満）</span>
              </h3>
              <Card className="overflow-hidden">
                <table className="w-full">
                  <thead className="bg-red-50 border-b border-red-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                        商品名
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                        カテゴリ
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                        閲覧回数
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                        採用回数
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                        採用率
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {lowAdoptionProducts.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                          該当する商品はありません
                        </td>
                      </tr>
                    ) : (
                      lowAdoptionProducts.slice(0, 15).map((product) => (
                        <tr key={product.productId} className="hover:bg-red-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {product.productName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {product.categoryName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {product.viewCount}回
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {product.adoptionCount}回
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                              {product.adoptionRate}%
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </Card>
            </div>

            {/* TOP採用商品 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                人気商品TOP10
              </h3>
              <Card className="overflow-hidden">
                <table className="w-full">
                  <thead className="bg-green-50 border-b border-green-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                        順位
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                        商品名
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                        カテゴリ
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                        採用回数
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                        売上合計
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {topProducts.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                          まだ採用データがありません
                        </td>
                      </tr>
                    ) : (
                      topProducts.map((product, index) => (
                        <tr key={product.productId} className="hover:bg-green-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <span className={`${
                              index === 0 ? 'text-yellow-500' :
                              index === 1 ? 'text-gray-400' :
                              index === 2 ? 'text-amber-600' : ''
                            }`}>
                              {index + 1}位
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {product.productName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {product.categoryName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {product.adoptionCount}回
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatPrice(product.totalRevenue)}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </Card>
            </div>

            {/* 月別採用推移 */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">月別採用推移</h3>
              <div className="h-64 flex items-end justify-between gap-2">
                {monthlyStats.map((data) => (
                  <div key={data.month} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-green-500 rounded-t"
                      style={{
                        height: `${data.count > 0 ? (data.count / Math.max(...monthlyStats.map(d => d.count), 1)) * 100 : 0}%`
                      }}
                    />
                    <span className="text-xs text-gray-600 mt-2">{data.month}月</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* 製品詳細管理 */}
        {activeTab === 'management' && (
          <div className="space-y-6">
            <ProductManagement
              products={[...exteriorProducts, ...interiorProducts, ...waterProducts]}
              onProductsChange={(updatedProducts) => {
                // カテゴリごとに製品を分類して更新
                const exterior = updatedProducts.filter(p => p.categoryName === '外装材' || p.categoryName === '屋根');
                const interior = updatedProducts.filter(p => p.categoryName === '内装材' || p.categoryName === '床材');
                const water = updatedProducts.filter(p =>
                  p.categoryName === 'キッチン' ||
                  p.categoryName === 'バスルーム' ||
                  p.categoryName === 'トイレ' ||
                  p.categoryName === '洗面化粧台' ||
                  p.categoryName === '給湯器'
                );

                // 一括更新（実際の更新処理はストアの実装に依存）
                exterior.forEach(p => {
                  const existing = exteriorProducts.find(ep => ep.id === p.id);
                  if (existing) {
                    updateExteriorProduct(p.id, p);
                  } else {
                    addExteriorProduct(p);
                  }
                });

                interior.forEach(p => {
                  const existing = interiorProducts.find(ip => ip.id === p.id);
                  if (existing) {
                    updateInteriorProduct(p.id, p);
                  } else {
                    addInteriorProduct(p);
                  }
                });

                water.forEach(p => {
                  const existing = waterProducts.find(wp => wp.id === p.id);
                  if (existing) {
                    updateWaterProduct(p.id, p);
                  } else {
                    addWaterProduct(p);
                  }
                });
              }}
            />
          </div>
        )}

        {/* PDF取り込み */}
        {activeTab === 'pdf' && (
          <div className="space-y-6">
            <PdfImport />
          </div>
        )}

        {/* プロジェクト管理 */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <ProjectManager />
          </div>
        )}

        {/* アイテム管理 */}
        {activeTab === 'items' && (
          <div className="space-y-6">
            <ItemManager />
          </div>
        )}

        {/* カテゴリ管理 */}
        {activeTab === 'categories' && (
          <div className="space-y-6">
            <CategoryManager />
          </div>
        )}

        {/* ユーザー管理 */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <UserManager />
          </div>
        )}

        {/* 業者発注管理 */}
        {activeTab === 'vendors' && (
          <div className="space-y-6">
            <VendorOrderManager />
          </div>
        )}

        {/* バックアップ */}
        {activeTab === 'backup' && (
          <div className="space-y-6">
            <DataBackup />
          </div>
        )}

        {/* システム設定 */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <SystemSettings />
          </div>
        )}

        {/* 組織管理 */}
        {activeTab === 'organizations' && (
          <div className="space-y-6">
            <OrganizationManager />
          </div>
        )}
      </div>

      {/* 商品フォームモーダル */}
      {showProductForm && (
        <ProductFormNew
          product={editingProduct}
          catalogType={productCategory}
          onSave={handleSaveProduct}
          onClose={() => {
            setShowProductForm(false);
            setEditingProduct(undefined);
          }}
        />
      )}
    </div>
  );
};
import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Copy, Save, X, Search, Filter, Upload, Image as ImageIcon } from 'lucide-react';
import type { Product, ProductVariant, PlanType, UnitType } from '../../types/product';
import { ImageUpload } from './ImageUpload';
import { ImageService } from '../../services/imageService';
import type { ProductImage } from '../../lib/supabase';

interface ProductManagementProps {
  products: Product[];
  onProductsChange: (products: Product[]) => void;
}

export function ProductManagement({ products, onProductsChange }: ProductManagementProps) {
  const [localProducts, setLocalProducts] = useState<Product[]>(products);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showVariantEditor, setShowVariantEditor] = useState(false);
  const [editingVariant, setEditingVariant] = useState<ProductVariant | null>(null);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [selectedProductForImage, setSelectedProductForImage] = useState<Product | null>(null);
  const [productImages, setProductImages] = useState<{ [key: string]: ProductImage[] }>({});

  useEffect(() => {
    setLocalProducts(products);
  }, [products]);

  useEffect(() => {
    // 各商品の画像を取得
    const loadProductImages = async () => {
      const imageMap: { [key: string]: ProductImage[] } = {};
      for (const product of localProducts) {
        const images = await ImageService.getProductImages(product.modelNumber);
        if (images.length > 0) {
          imageMap[product.modelNumber] = images;
        }
      }
      setProductImages(imageMap);
    };
    loadProductImages();
  }, [localProducts]);

  const categories = Array.from(new Set(localProducts.map(p => p.categoryName)));

  const filteredProducts = localProducts.filter(product => {
    const matchesSearch = searchTerm === '' ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.modelNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || product.categoryName === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleEdit = (product: Product) => {
    setEditingProduct({ ...product });
    setIsCreating(false);
  };

  const handleCopy = (product: Product) => {
    const newProduct: Product = {
      ...product,
      id: `${product.id}-copy-${Date.now()}`,
      name: `${product.name} (コピー)`,
      modelNumber: `${product.modelNumber}-COPY`
    };
    setEditingProduct(newProduct);
    setIsCreating(true);
  };

  const handleCreate = () => {
    const newProduct: Product = {
      id: `product-${Date.now()}`,
      categoryId: 'kitchen',
      categoryName: 'キッチン',
      subcategory: 'システムキッチン',
      name: '新規製品',
      manufacturer: '',
      modelNumber: '',
      unit: 'set' as UnitType,
      isOption: false,
      variants: [],
      pricing: [
        { plan: 'LACIE' as PlanType, price: 0 },
        { plan: 'HOURS' as PlanType, price: 0 }
      ],
      description: ''
    };
    setEditingProduct(newProduct);
    setIsCreating(true);
  };

  const handleDelete = (productId: string) => {
    if (confirm('この製品を削除してもよろしいですか？')) {
      const updatedProducts = localProducts.filter(p => p.id !== productId);
      setLocalProducts(updatedProducts);
      onProductsChange(updatedProducts);
    }
  };

  const handleSave = () => {
    if (!editingProduct) return;

    let updatedProducts: Product[];
    if (isCreating) {
      updatedProducts = [...localProducts, editingProduct];
    } else {
      updatedProducts = localProducts.map(p =>
        p.id === editingProduct.id ? editingProduct : p
      );
    }

    setLocalProducts(updatedProducts);
    onProductsChange(updatedProducts);
    setEditingProduct(null);
    setIsCreating(false);
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setIsCreating(false);
    setShowVariantEditor(false);
    setEditingVariant(null);
  };

  const handleFieldChange = (field: keyof Product, value: Product[keyof Product]) => {
    if (!editingProduct) return;
    setEditingProduct({ ...editingProduct, [field]: value });
  };

  const handlePricingChange = (planType: PlanType, price: number) => {
    if (!editingProduct) return;

    const updatedPricing = editingProduct.pricing.map(p =>
      p.plan === planType ? { ...p, price } : p
    );

    // Add missing plan if not exists
    if (!updatedPricing.find(p => p.plan === planType)) {
      updatedPricing.push({ plan: planType, price });
    }

    setEditingProduct({ ...editingProduct, pricing: updatedPricing });
  };

  const handleAddVariant = () => {
    if (!editingProduct) return;

    const newVariant: ProductVariant = {
      id: `variant-${Date.now()}`,
      color: '新しいカラー',
      colorCode: '',
      images: []
    };

    setEditingProduct({
      ...editingProduct,
      variants: [...editingProduct.variants, newVariant]
    });
  };

  const handleEditVariant = (variant: ProductVariant) => {
    setEditingVariant({ ...variant });
    setShowVariantEditor(true);
  };

  const handleSaveVariant = () => {
    if (!editingProduct || !editingVariant) return;

    const updatedVariants = editingProduct.variants.map(v =>
      v.id === editingVariant.id ? editingVariant : v
    );

    setEditingProduct({ ...editingProduct, variants: updatedVariants });
    setEditingVariant(null);
    setShowVariantEditor(false);
  };

  const handleDeleteVariant = (variantId: string) => {
    if (!editingProduct) return;

    const updatedVariants = editingProduct.variants.filter(v => v.id !== variantId);
    setEditingProduct({ ...editingProduct, variants: updatedVariants });
  };

  const handleOpenImageUpload = (product: Product) => {
    setSelectedProductForImage(product);
    setShowImageUpload(true);
  };

  const handleImageUploadComplete = async (images: ProductImage[]) => {
    if (!selectedProductForImage) return;

    // 画像マップを更新
    setProductImages(prev => ({
      ...prev,
      [selectedProductForImage.modelNumber]: [
        ...(prev[selectedProductForImage.modelNumber] || []),
        ...images
      ]
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="border-b p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">製品管理</h2>
          <button
            onClick={handleCreate}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            新規製品を追加
          </button>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="製品名、型番、メーカーで検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">すべてのカテゴリ</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-3">製品名</th>
              <th className="text-left p-3">メーカー</th>
              <th className="text-left p-3">型番</th>
              <th className="text-left p-3">カテゴリ</th>
              <th className="text-left p-3">バリエーション</th>
              <th className="text-left p-3">画像</th>
              <th className="text-left p-3">価格（LACIE）</th>
              <th className="text-left p-3">操作</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.manufacturer}</td>
                <td className="p-3 text-sm text-gray-600">{product.modelNumber}</td>
                <td className="p-3">
                  <span className="px-2 py-1 bg-gray-100 rounded text-sm">
                    {product.categoryName}
                  </span>
                </td>
                <td className="p-3">
                  <span className="text-sm text-gray-600">
                    {product.variants.length} カラー
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    {productImages[product.modelNumber]?.length > 0 ? (
                      <>
                        <ImageIcon className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-600">
                          {productImages[product.modelNumber].length}枚
                        </span>
                      </>
                    ) : (
                      <span className="text-sm text-gray-400">なし</span>
                    )}
                  </div>
                </td>
                <td className="p-3">
                  ¥{(product.pricing.find(p => p.plan === 'LACIE')?.price || 0).toLocaleString()}
                </td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                      title="編集"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleOpenImageUpload(product)}
                      className="p-1 text-purple-600 hover:bg-purple-50 rounded"
                      title="画像管理"
                    >
                      <Upload className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleCopy(product)}
                      className="p-1 text-green-600 hover:bg-green-50 rounded"
                      title="コピー"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="p-1 text-red-600 hover:bg-red-50 rounded"
                      title="削除"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 編集モーダル */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                {isCreating ? '新規製品の追加' : '製品の編集'}
              </h3>
              <button onClick={handleCancel} className="p-1 hover:bg-gray-100 rounded">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* 基本情報 */}
              <div>
                <h4 className="font-medium mb-4">基本情報</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">製品名</label>
                    <input
                      type="text"
                      value={editingProduct.name}
                      onChange={(e) => handleFieldChange('name', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">メーカー</label>
                    <input
                      type="text"
                      value={editingProduct.manufacturer}
                      onChange={(e) => handleFieldChange('manufacturer', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">型番</label>
                    <input
                      type="text"
                      value={editingProduct.modelNumber}
                      onChange={(e) => handleFieldChange('modelNumber', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">カテゴリ</label>
                    <select
                      value={editingProduct.categoryName}
                      onChange={(e) => handleFieldChange('categoryName', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="キッチン">キッチン</option>
                      <option value="バスルーム">バスルーム</option>
                      <option value="トイレ">トイレ</option>
                      <option value="洗面化粧台">洗面化粧台</option>
                      <option value="給湯器">給湯器</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">サブカテゴリ</label>
                    <input
                      type="text"
                      value={editingProduct.subcategory}
                      onChange={(e) => handleFieldChange('subcategory', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">単位</label>
                    <select
                      value={editingProduct.unit}
                      onChange={(e) => handleFieldChange('unit', e.target.value as UnitType)}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="set">一式</option>
                      <option value="piece">個</option>
                      <option value="sqm">㎡</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">説明</label>
                  <textarea
                    value={editingProduct.description || ''}
                    onChange={(e) => handleFieldChange('description', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                </div>
                <div className="mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={editingProduct.isOption}
                      onChange={(e) => handleFieldChange('isOption', e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm">オプション製品</span>
                  </label>
                </div>
              </div>

              {/* 価格設定 */}
              <div>
                <h4 className="font-medium mb-4">価格設定</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">LACIE価格</label>
                    <input
                      type="number"
                      value={editingProduct.pricing.find(p => p.plan === 'LACIE')?.price || 0}
                      onChange={(e) => handlePricingChange('LACIE', Number(e.target.value))}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">HOURS価格</label>
                    <input
                      type="number"
                      value={editingProduct.pricing.find(p => p.plan === 'HOURS')?.price || 0}
                      onChange={(e) => handlePricingChange('HOURS', Number(e.target.value))}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* バリエーション */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">カラーバリエーション</h4>
                  <button
                    onClick={handleAddVariant}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    + バリエーションを追加
                  </button>
                </div>
                <div className="space-y-2">
                  {editingProduct.variants.map(variant => (
                    <div key={variant.id} className="flex items-center gap-2 p-3 border rounded-lg">
                      <div className="flex-1">
                        <span className="font-medium">{variant.color}</span>
                        {variant.colorCode && (
                          <span className="ml-2 text-sm text-gray-500">({variant.colorCode})</span>
                        )}
                      </div>
                      <button
                        onClick={() => handleEditVariant(variant)}
                        className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteVariant(variant.id)}
                        className="p-1 text-red-600 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t p-4 flex justify-end gap-3">
              <button
                onClick={handleCancel}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                キャンセル
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                保存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* バリエーション編集モーダル */}
      {showVariantEditor && editingVariant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="border-b p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">バリエーションの編集</h3>
              <button onClick={() => setShowVariantEditor(false)} className="p-1 hover:bg-gray-100 rounded">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">カラー名</label>
                <input
                  type="text"
                  value={editingVariant.color}
                  onChange={(e) => setEditingVariant({ ...editingVariant, color: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">カラーコード</label>
                <input
                  type="text"
                  value={editingVariant.colorCode || ''}
                  onChange={(e) => setEditingVariant({ ...editingVariant, colorCode: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="例: WHITE, GRAY, etc."
                />
              </div>
            </div>

            <div className="border-t p-4 flex justify-end gap-3">
              <button
                onClick={() => setShowVariantEditor(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                キャンセル
              </button>
              <button
                onClick={handleSaveVariant}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 画像アップロードモーダル */}
      {showImageUpload && selectedProductForImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                {selectedProductForImage.name} - 画像管理
              </h3>
              <button
                onClick={() => {
                  setShowImageUpload(false);
                  setSelectedProductForImage(null);
                }}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  型番: {selectedProductForImage.modelNumber}
                </p>
                <p className="text-sm text-gray-600">
                  カテゴリ: {selectedProductForImage.categoryName} / {selectedProductForImage.subcategory}
                </p>
              </div>

              <ImageUpload
                productCode={selectedProductForImage.modelNumber}
                productName={selectedProductForImage.name}
                category={selectedProductForImage.categoryName}
                subcategory={selectedProductForImage.subcategory}
                onUploadComplete={handleImageUploadComplete}
                existingImages={productImages[selectedProductForImage.modelNumber] || []}
              />
            </div>

            <div className="border-t p-4 flex justify-end">
              <button
                onClick={() => {
                  setShowImageUpload(false);
                  setSelectedProductForImage(null);
                }}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
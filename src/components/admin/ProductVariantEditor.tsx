import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Save,
  Upload,
  Palette,
  DollarSign,
  Image as ImageIcon,
  Trash2,
  Check
} from 'lucide-react';
import {
  VariantService,
  type ProductVariant,
  type VariantImage
} from '../../services/databaseService';

interface ProductVariantEditorProps {
  productId: string;
  productName: string;
  variant?: ProductVariant;
  onSave: (variant: ProductVariant) => void;
  onClose: () => void;
}

export function ProductVariantEditor({
  productId,
  productName,
  variant,
  onSave,
  onClose
}: ProductVariantEditorProps) {
  const [formData, setFormData] = useState({
    color_name: variant?.color_name || 'フローMGグレー',
    color_code: variant?.color_code || '',
    color_hex: variant?.color_hex || '#808080',
    material: variant?.material || '',
    finish: variant?.finish || '',
    is_standard: variant?.is_standard ?? true,
    stock_status: variant?.stock_status || 'in_stock'
  });

  const [pricing, setPricing] = useState<Record<string, number>>({
    LIFE: 0,
    LIFE_PLUS: 0,
    HOURS: 0,
    LACIE: 0,
    LIFE_X: 0
  });

  const [planAvailability, setPlanAvailability] = useState<Record<string, boolean>>({
    LIFE: true,
    LIFE_PLUS: true,
    HOURS: true,
    LACIE: true,
    LIFE_X: true
  });

  const [images, setImages] = useState<VariantImage[]>(variant?.images || []);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 既存の価格情報を読み込み
    if (variant?.pricing) {
      const pricingMap: Record<string, number> = {};
      variant.pricing.forEach(p => {
        pricingMap[p.plan_type] = p.price;
      });
      setPricing(pricingMap);
    }
  }, [variant]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePriceChange = (plan: string, value: string) => {
    setPricing(prev => ({
      ...prev,
      [plan]: parseFloat(value) || 0
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);

    try {
      // 一時的なバリアントIDを作成（新規の場合）
      const variantId = variant?.id || `temp_${Date.now()}`;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const isPrimary = images.length === 0 && i === 0; // 最初の画像をプライマリに

        const uploadedImage = await VariantService.uploadVariantImage(
          variantId,
          file,
          isPrimary
        );

        if (uploadedImage) {
          setImages(prev => [...prev, uploadedImage]);
        }
      }
    } catch (error) {
      console.error('Error uploading images:', error);
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDeleteImage = (imageId: string) => {
    setImages(prev => prev.filter(img => img.id !== imageId));
  };

  const handleSetPrimaryImage = (imageId: string) => {
    setImages(prev => prev.map(img => ({
      ...img,
      is_primary: img.id === imageId
    })));
  };

  const handleSave = async () => {
    setSaving(true);

    try {
      // バリアントコードを生成
      const variantCode = `${productId}_${formData.color_code || formData.color_name.replace(/\s+/g, '_')}`;

      const variantData: Partial<ProductVariant> = {
        product_id: productId,
        variant_code: variantCode,
        ...formData
      };

      // バリアントを作成または更新
      let savedVariant: ProductVariant | null;
      if (variant?.id) {
        savedVariant = await VariantService.updateVariant(variant.id, variantData);
      } else {
        savedVariant = await VariantService.createVariant(variantData);
      }

      if (savedVariant) {
        // 価格情報を保存
        for (const [planType, price] of Object.entries(pricing)) {
          if (price > 0) {
            await VariantService.upsertPricing({
              variant_id: savedVariant.id,
              plan_type: planType as any,
              price: price,
              is_active: true
            });
          }
        }

        // 画像情報を更新（必要に応じて）
        // ここでは画像は既にアップロード済みなので、関連付けのみ

        onSave(savedVariant);
      }
    } catch (error) {
      console.error('Error saving variant:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="border-b p-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              {variant ? 'バリエーション編集' : '新規バリエーション追加'}
            </h2>
            <p className="text-sm text-gray-600 mt-1">{productName}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* 色情報 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-gray-600" />
                <h3 className="font-medium">色・仕様情報</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">色名称 *</label>
                  <input
                    type="text"
                    value={formData.color_name}
                    onChange={(e) => handleInputChange('color_name', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="例: フローMGグレー"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">品番・コード</label>
                  <input
                    type="text"
                    value={formData.color_code}
                    onChange={(e) => handleInputChange('color_code', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="例: FMG-001"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">カラーコード</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={formData.color_hex}
                      onChange={(e) => handleInputChange('color_hex', e.target.value)}
                      className="w-12 h-10 border rounded cursor-pointer"
                    />
                    <input
                      type="text"
                      value={formData.color_hex}
                      onChange={(e) => handleInputChange('color_hex', e.target.value)}
                      className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="#808080"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">材質</label>
                  <input
                    type="text"
                    value={formData.material}
                    onChange={(e) => handleInputChange('material', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="例: アルミニウム"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">仕上げ</label>
                  <input
                    type="text"
                    value={formData.finish}
                    onChange={(e) => handleInputChange('finish', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="例: マット仕上げ"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">タイプ</label>
                  <select
                    value={formData.is_standard ? 'standard' : 'option'}
                    onChange={(e) => handleInputChange('is_standard', e.target.value === 'standard')}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="standard">標準</option>
                    <option value="option">オプション</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 価格設定 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-gray-600" />
                <h3 className="font-medium">価格設定</h3>
              </div>

              <div className="space-y-4">
                {/* プラン利用可能性 */}
                <div>
                  <label className="block text-sm font-medium mb-2">利用可能プラン</label>
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(planAvailability).map(([plan, isAvailable]) => (
                      <label key={plan} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isAvailable}
                          onChange={(e) => setPlanAvailability(prev => ({
                            ...prev,
                            [plan]: e.target.checked
                          }))}
                          className="rounded"
                        />
                        <span className="text-sm">{plan.replace('_', ' ')}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 価格入力 */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(pricing).map(([plan, price]) => {
                    const displayPlan = plan.replace('_PLUS', '+').replace('_X', ' X');
                    const isAvailable = planAvailability[plan];

                    return (
                      <div key={plan} className={!isAvailable ? 'opacity-50' : ''}>
                        <label className="block text-sm font-medium mb-1">
                          {displayPlan}プラン
                          {!isAvailable && <span className="text-xs text-gray-500 ml-1">(利用不可)</span>}
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">¥</span>
                          <input
                            type="number"
                            value={price}
                            onChange={(e) => handlePriceChange(plan, e.target.value)}
                            disabled={!isAvailable}
                            className="w-full pl-8 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                            placeholder="0"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 画像アップロード */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <ImageIcon className="w-5 h-5 text-gray-600" />
                <h3 className="font-medium">商品画像</h3>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-blue-500 transition-colors"
              >
                {uploading ? (
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                    <p className="mt-2 text-sm text-gray-600">アップロード中...</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                    <p className="mt-2 text-sm text-gray-600">
                      クリックまたはドラッグ＆ドロップで画像をアップロード
                    </p>
                  </div>
                )}
              </button>

              {/* アップロード済み画像 */}
              {images.length > 0 && (
                <div className="mt-4 grid grid-cols-4 gap-4">
                  {images.map(image => (
                    <div key={image.id} className="relative group">
                      <img
                        src={image.image_url}
                        alt={image.alt_text || ''}
                        className="w-full h-24 object-cover rounded-lg"
                      />

                      {image.is_primary && (
                        <div className="absolute top-1 left-1 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                          メイン
                        </div>
                      )}

                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                        {!image.is_primary && (
                          <button
                            onClick={() => handleSetPrimaryImage(image.id)}
                            className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                            title="メイン画像に設定"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteImage(image.id)}
                          className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                          title="削除"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            キャンセル
          </button>
          <button
            onClick={handleSave}
            disabled={saving || !formData.color_name}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
          >
            {saving ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                保存中...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                保存
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
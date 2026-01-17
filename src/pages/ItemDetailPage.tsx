import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Check, ExternalLink, Image as ImageIcon, Loader2 } from 'lucide-react';
import { useCartStore } from '../stores/useCartStore';
import { useToast } from '../components/common/Toast';
import { formatPrice } from '../lib/utils';
import { UNIT_SYMBOLS } from '../types/product';
import { getHexColor } from '../utils/colorMapping';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { ItemWithDetails } from '../types/database';

interface DisplayVariant {
  id: string;
  color: string;
  colorCode: string;
  imageUrl: string | null;
  thumbnailUrl: string | null;
}

interface DisplayProduct {
  id: string;
  itemCode: string;
  name: string;
  categoryName: string;
  manufacturer: string;
  unit: string;
  description: string | null;
  productUrl: string | null;
  variants: DisplayVariant[];
  price: number;
  isStandard: boolean;
}

export const ItemDetailPage: React.FC = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const navigate = useNavigate();
  const toast = useToast();

  const [product, setProduct] = useState<DisplayProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<DisplayVariant | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  // Supabaseからアイテムを取得
  useEffect(() => {
    const fetchItem = async () => {
      if (!itemId || !isSupabaseConfigured) {
        setIsLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('items')
          .select(`
            *,
            category:categories(*),
            variants:item_variants(
              *,
              images:item_variant_images(*)
            ),
            pricing:item_pricing(
              *,
              product:products(*)
            )
          `)
          .eq('id', itemId)
          .single();

        if (error || !data) {
          console.error('Error fetching item:', error);
          setIsLoading(false);
          return;
        }

        const item = data as unknown as ItemWithDetails;

        // バリアントを変換
        const variants: DisplayVariant[] = (item.variants || [])
          .filter(v => v.is_active)
          .sort((a, b) => a.display_order - b.display_order)
          .map(v => ({
            id: v.id,
            color: v.color_name,
            colorCode: v.color_code || '',
            imageUrl: v.images?.find(img => img.is_primary)?.image_url || v.images?.[0]?.image_url || null,
            thumbnailUrl: v.images?.find(img => img.is_primary)?.thumbnail_url || v.images?.[0]?.thumbnail_url || null,
          }));

        // 価格を取得（LIFE+を基準）
        const pricing = item.pricing?.find(p => p.product?.code === 'LIFE_PLUS') || item.pricing?.[0];
        const price = pricing ? Number(pricing.price) : 0;
        const isStandard = pricing?.is_standard ?? false;

        setProduct({
          id: item.id,
          itemCode: item.item_code,
          name: item.name,
          categoryName: item.category?.name || 'その他',
          manufacturer: item.manufacturer || '',
          unit: item.unit?.symbol || '式',
          description: item.note || null,
          productUrl: item.catalog_url || null,
          variants,
          price,
          isStandard,
        });

        if (variants.length > 0) {
          setSelectedVariant(variants[0]);
        }
      } catch (err) {
        console.error('Error fetching item:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItem();
  }, [itemId]);

  const { items, addItem } = useCartStore();

  // カートに同じ商品があるかチェック
  const isInCart = product ? items.some(item => item.product.id === product.id || item.product.id === product.itemCode) : false;

  const handleSelect = useCallback(() => {
    if (!product || !selectedVariant) return;

    // DisplayProduct を Product 型に変換
    const cartProduct = {
      id: product.id,
      categoryId: '', // カテゴリIDは不明なので空文字
      categoryName: product.categoryName,
      subcategory: product.categoryName,
      name: product.name,
      manufacturer: product.manufacturer,
      modelNumber: product.itemCode,
      unit: product.unit as any,
      isOption: !product.isStandard,
      variants: product.variants.map(v => ({
        id: v.id,
        color: v.color,
        colorCode: v.colorCode,
        imageUrl: v.imageUrl || undefined,
        thumbnailUrl: v.thumbnailUrl || undefined,
      })),
      pricing: [{ price: product.price }],
      description: product.description || undefined,
      productUrl: product.productUrl || undefined,
    };

    // DisplayVariant を ProductVariant 型に変換
    const cartVariant = {
      id: selectedVariant.id,
      color: selectedVariant.color,
      colorCode: selectedVariant.colorCode,
      imageUrl: selectedVariant.imageUrl || undefined,
      thumbnailUrl: selectedVariant.thumbnailUrl || undefined,
    };

    // カートに追加
    addItem(cartProduct, 1, cartVariant);

    toast.success('選択完了', `「${product.name}」の「${selectedVariant.color}」を選択しました`);
    setIsAdded(true);

    // 1秒後に戻る
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  }, [product, selectedVariant, toast, navigate, addItem]);

  // ローディング中
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500 mx-auto mb-2" />
          <p className="text-gray-500">読み込み中...</p>
        </div>
      </div>
    );
  }

  // 商品が見つからない場合
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">アイテムが見つかりません</p>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            戻る
          </button>
        </div>
      </div>
    );
  }

  const currentVariant = selectedVariant || product.variants[0];
  const imageUrl = currentVariant?.imageUrl || currentVariant?.thumbnailUrl;
  const price = product.price;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-blue-600 font-medium">{product.categoryName}</p>
            <h1 className="text-lg font-bold text-gray-900 truncate">{product.name}</h1>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* 画像エリア */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="text-center text-gray-400">
                <ImageIcon className="w-12 h-12 mx-auto mb-2" />
                <p className="text-sm">画像準備中</p>
              </div>
            )}
          </div>
        </div>

        {/* 基本情報 */}
        <div className="bg-white rounded-xl shadow-sm p-4 space-y-4">
          {/* メーカー名 */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">メーカー:</span>
            <span className="font-medium text-gray-900">{product.manufacturer}</span>
          </div>

          {/* 価格 */}
          <div className="flex items-center justify-between py-3 px-4 bg-blue-50 rounded-lg">
            <span className="text-gray-600">価格</span>
            <span className={`text-xl font-bold ${price === 0 ? 'text-blue-600' : 'text-gray-900'}`}>
              {price === 0 ? '標準' : formatPrice(price)}
              {price > 0 && product.unit && (
                <span className="text-sm font-normal text-gray-500 ml-1">
                  /{UNIT_SYMBOLS[product.unit] || product.unit}
                </span>
              )}
            </span>
          </div>
        </div>

        {/* カラー選択（画像付きカード形式） */}
        {product.variants.length > 1 && (
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-sm font-bold text-gray-800 mb-3">
              カラー選択 <span className="text-gray-400 font-normal">（{product.variants.length}色）</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {product.variants.map((v: DisplayVariant) => {
                const hexColor = getHexColor(v.colorCode) !== '#CCCCCC'
                  ? getHexColor(v.colorCode)
                  : getHexColor(v.color);
                const isSelected = selectedVariant?.id === v.id;
                const variantImageUrl = v.imageUrl || v.thumbnailUrl;

                return (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`group rounded-lg border-2 overflow-hidden transition-all ${
                      isSelected
                        ? 'border-blue-500 shadow-lg shadow-blue-200'
                        : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                    }`}
                  >
                    {/* 画像エリア（正方形） */}
                    <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                      {variantImageUrl ? (
                        <img
                          src={variantImageUrl}
                          alt={v.color}
                          loading="lazy"
                          className={`w-full h-full object-cover transition-transform duration-300 ${
                            isSelected ? 'scale-105' : 'group-hover:scale-105'
                          }`}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center">
                          <div
                            className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                            style={{ backgroundColor: hexColor }}
                          />
                        </div>
                      )}
                      {/* 選択済みマーク */}
                      {isSelected && (
                        <div className="absolute top-1 right-1 bg-blue-500 rounded-full p-1">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                    {/* カラー名（色名がない場合は商品名を表示） */}
                    <div className="p-2">
                      <span className={`text-xs font-medium block truncate ${isSelected ? 'text-blue-700' : 'text-gray-700'}`}>
                        {v.color || product.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 説明・メモ */}
        {product.description && (
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-sm font-bold text-gray-800 mb-3">説明・メモ</h2>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
              {product.description}
            </p>
          </div>
        )}

        {/* メーカー詳細ページURL */}
        {product.productUrl && (
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-sm font-bold text-gray-800 mb-3">メーカー詳細ページ</h2>
            <a
              href={product.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm underline">メーカーサイトで詳細を見る</span>
            </a>
          </div>
        )}

      </div>

      {/* フッター（固定） */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="max-w-4xl mx-auto flex gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 py-3 px-4 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-medium"
          >
            戻る
          </button>
          <button
            onClick={handleSelect}
            disabled={isAdded || isInCart}
            className={`flex-[2] py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 ${
              isAdded
                ? 'bg-blue-500 text-white'
                : isInCart
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-5 h-5" />
                選択しました
              </>
            ) : isInCart ? (
              '選択済み'
            ) : (
              <>
                <Check className="w-5 h-5" />
                {selectedVariant ? `「${selectedVariant.color}」を選択` : 'この仕様を選択'}
              </>
            )}
          </button>
        </div>
      </div>

      {/* フッターのスペース確保 */}
      <div className="h-24" />
    </div>
  );
};

export default ItemDetailPage;

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Check, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { useProductStore } from '../stores/useProductStore';
import { useCartStore } from '../stores/useCartStore';
import { useToast } from '../components/common/Toast';
import { formatPrice, getProductPrice } from '../lib/utils';
import { UNIT_SYMBOLS } from '../types/product';
import { getHexColor } from '../utils/colorMapping';
import type { ProductVariant } from '../types/product';

export const ItemDetailPage: React.FC = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const navigate = useNavigate();
  const toast = useToast();

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  // 全商品から該当アイテムを検索
  const getAllProducts = useProductStore((state) => state.getAllProducts);
  const allProducts = getAllProducts();

  const product = useMemo(() => {
    return allProducts.find(p => p.id === itemId) || null;
  }, [allProducts, itemId]);

  const { addItem, items } = useCartStore();

  // 初期バリアント設定
  useEffect(() => {
    if (product && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  // カートに同じ商品があるかチェック
  const isInCart = useMemo(() => {
    if (!product) return false;
    return items.some(item => item.product.id === product.id);
  }, [items, product]);

  const price = product ? getProductPrice(product.pricing) : 0;

  const handleSelect = useCallback(() => {
    if (!product || !selectedVariant) return;

    addItem(product, 1, selectedVariant);
    toast.success('選択完了', `「${product.name}」を選択しました`);
    setIsAdded(true);

    // 1秒後に戻る
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  }, [product, selectedVariant, addItem, toast, navigate]);

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

        {/* カラー選択 */}
        {product.variants.length > 1 && (
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-sm font-bold text-gray-800 mb-3">
              カラー選択 <span className="text-gray-400 font-normal">（{product.variants.length}色）</span>
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {product.variants.map((v: ProductVariant) => {
                const hexColor = getHexColor(v.colorCode) !== '#CCCCCC'
                  ? getHexColor(v.colorCode)
                  : getHexColor(v.color);
                const isSelected = selectedVariant?.id === v.id;

                return (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-all text-left ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div
                      className="w-6 h-6 rounded-full border border-gray-300 flex-shrink-0"
                      style={{ backgroundColor: hexColor }}
                    />
                    <span className={`text-xs truncate ${isSelected ? 'font-medium text-blue-700' : 'text-gray-700'}`}>
                      {v.color}
                    </span>
                    {isSelected && (
                      <Check className="w-3 h-3 text-blue-500 ml-auto flex-shrink-0" />
                    )}
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

        {/* メーカー施工写真 */}
        {product.installationImages && product.installationImages.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-sm font-bold text-gray-800 mb-3">メーカー施工写真</h2>
            <div className="grid grid-cols-2 gap-2">
              {product.installationImages.map((img: string, idx: number) => (
                <img
                  key={idx}
                  src={img}
                  alt={`施工写真 ${idx + 1}`}
                  className="w-full aspect-video object-cover rounded-lg"
                />
              ))}
            </div>
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
                ? 'bg-green-500 text-white'
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

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Plus, Minus, CheckCircle, Check, AlertCircle, Info, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import type { Product, ProductVariant } from '../../types/product';
import { UNIT_SYMBOLS } from '../../types/product';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { useToast } from '../common/Toast';
import { formatPrice, getProductPrice } from '../../lib/utils';
import { useCartStore } from '../../stores/useCartStore';
import { useStatisticsStore } from '../../stores/useStatisticsStore';
import { useRecentlyViewedStore } from '../../stores/useRecentlyViewedStore';
import { cn } from '../../lib/utils';
import { getCategoryRule } from '../../config/categoryRules';
import { getHexColor } from '../../utils/colorMapping';
import { useTimeout } from '../../hooks/useTimeout';
import { RecommendationPanel } from '../customer/RecommendationPanel';
import { useWarningCheck } from '../common/MaterialWarningSystem';
import { useActivityLogger } from '../../hooks/useActivityLogger';
import { isPeripheralCategory, sortColorsByRecommendation, getColorRecommendationLabel } from '../../config/colorRecommendation';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  allProducts?: Product[];
  onProductSelect?: (product: Product, variant?: ProductVariant) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  allProducts = [],
  onProductSelect,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const { addItem, items } = useCartStore();
  const recordView = useStatisticsStore((state) => state.recordView);
  const recordViewDuration = useStatisticsStore((state) => state.recordViewDuration);
  const recordAdoption = useStatisticsStore((state) => state.recordAdoption);
  const addRecentlyViewed = useRecentlyViewedStore((state) => state.addItem);
  const toast = useToast();
  const { setTimeout } = useTimeout();
  const viewStartTime = useRef<number | null>(null);
  const { checkWarnings, warningModal } = useWarningCheck();
  const { logProductView, logProductSelect } = useActivityLogger();

  // 開いた時にリセット & 閲覧記録
  useEffect(() => {
    if (isOpen && product) {
      setSelectedVariant(product.variants[0] || null);
      setQuantity(1);
      setIsAdded(false);
      setImageLoaded(false);

      // 閲覧開始時刻を記録
      viewStartTime.current = Date.now();

      // 商品閲覧を記録（統計）
      recordView(product.id, product.name, product.categoryName);
      // アクティビティログに記録
      logProductView(product.id, product.name, product.categoryName);

      // 最近閲覧した商品に追加
      const price = getProductPrice(product.pricing);
      addRecentlyViewed({
        id: product.id,
        name: product.name,
        imageUrl: product.variants[0]?.imageUrl || product.variants[0]?.thumbnailUrl,
        categoryName: product.categoryName,
        price,
      });
    } else if (!isOpen && viewStartTime.current && product) {
      // 閲覧終了時に閲覧時間を記録
      const durationSeconds = Math.round((Date.now() - viewStartTime.current) / 1000);
      if (durationSeconds > 0) {
        recordViewDuration(product.id, durationSeconds);
      }
      viewStartTime.current = null;
    }
  }, [isOpen, product, recordView, recordViewDuration, addRecentlyViewed, logProductView]);

  // バリアント変更時に画像リセット
  useEffect(() => {
    setImageLoaded(false);
  }, [selectedVariant]);

  // すべてのフックを早期リターンの前に配置（React Hooks のルール遵守）
  const variant = selectedVariant || product?.variants[0] || null;
  const price = product ? getProductPrice(product.pricing) : 0;
  const totalPrice = price * quantity;

  // カテゴリルールを取得
  const categoryRule = useMemo(
    () => getCategoryRule(product?.categoryName || ''),
    [product?.categoryName]
  );
  const isSingleSelection = categoryRule.selectionType === 'single';

  // 同じカテゴリの商品がカートにあるかチェック
  const hasSameCategoryItem = useMemo(() => {
    if (!product) return false;
    return items.some(
      item => item.product.categoryName === product.categoryName &&
             item.product.id !== product.id
    );
  }, [items, product]);

  // 同じカテゴリの商品数をカウント
  const sameCategoryCount = useMemo(() => {
    if (!product) return 0;
    return items.filter(
      item => item.product.categoryName === product.categoryName
    ).length;
  }, [items, product]);

  // 選択可能かチェック
  const canAddToCart = useMemo(() => {
    if (!product) return false;
    if (isSingleSelection && hasSameCategoryItem) {
      return false;
    }
    if (categoryRule.maxSelection && sameCategoryCount >= categoryRule.maxSelection) {
      return false;
    }
    return true;
  }, [product, isSingleSelection, hasSameCategoryItem, categoryRule.maxSelection, sameCategoryCount]);

  // カートにある商品IDのセット（レコメンド用）
  const cartProductIds = useMemo(() => {
    return new Set(items.map(item => item.product.id));
  }, [items]);

  // 床色からの色おすすめ情報を取得
  const floorColorInfo = useMemo(() => {
    // 周辺部材カテゴリかどうかをチェック
    if (!product || !isPeripheralCategory(product.categoryName, product.subcategory)) {
      return null;
    }

    // カートから床材（ベース床）を取得
    const floorItem = items.find(
      item => item.product.categoryName === 'ベース床'
    );

    if (!floorItem || !floorItem.selectedVariant?.color) {
      return null;
    }

    const floorColor = floorItem.selectedVariant.color;
    const sortedVariants = sortColorsByRecommendation(
      product.variants.map(v => ({ id: v.id, color: v.color })),
      floorColor
    );

    return {
      floorColor,
      label: getColorRecommendationLabel(floorColor),
      recommendedVariantIds: new Set(
        sortedVariants.filter(v => v.isRecommended).map(v => v.id)
      ),
      primaryVariantIds: new Set(
        sortedVariants.filter(v => v.isPrimary).map(v => v.id)
      )
    };
  }, [product, items]);

  // レコメンド商品選択ハンドラ
  const handleRecommendedProductSelect = useCallback((recProduct: Product, recVariant?: ProductVariant) => {
    if (onProductSelect) {
      onProductSelect(recProduct, recVariant);
    }
  }, [onProductSelect]);

  const imagePlaceholder = useMemo(() => {
    const productName = product?.name || '商品';
    return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(`
    <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="400" fill="#f3f4f6"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="sans-serif" font-size="20">
        ${productName}
      </text>
    </svg>
  `)))}`;
  }, [product?.name]);

  // 実際にカートに追加する処理
  const executeAddToCart = useCallback(() => {
    if (!product || !variant) return;

    addItem(product, quantity, variant);
    // 採用を記録
    recordAdoption(product.id, product.name, product.categoryName, price * quantity);
    // アクティビティログに記録
    logProductSelect(product.id, product.name, product.categoryName, variant.id);
    toast.success('選択完了', `「${product.name}」を選択しました`);

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1000);
  }, [product, variant, quantity, addItem, recordAdoption, logProductSelect, price, toast, setTimeout, onClose]);

  const handleAddToCart = useCallback(() => {
    if (!product || !variant) return;

    if (!canAddToCart) {
      if (isSingleSelection) {
        toast.warning('選択制限', `${product.categoryName}は1つのみ選択可能です。既に選択されている商品を削除してから追加してください。`);
      } else if (categoryRule.maxSelection) {
        toast.warning('選択制限', `${product.categoryName}は最大${categoryRule.maxSelection}つまで選択可能です。`);
      }
      return;
    }

    // 部材注意点があるかチェック（あれば確認モーダル表示）
    checkWarnings(
      product.id,
      product.name,
      product.categoryName,
      executeAddToCart
    );
  }, [product, variant, canAddToCart, isSingleSelection, categoryRule.maxSelection, toast, checkWarnings, executeAddToCart]);

  const handleQuantityChange = useCallback((delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 99) {
      setQuantity(newQuantity);
    }
  }, [quantity]);

  // 早期リターンはすべてのフックの後に配置
  if (!product) return null;

  return (
    <>
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl md:max-w-2xl md:w-full md:max-h-[85vh] z-50 flex flex-col overflow-hidden">
          <Dialog.Title className="sr-only">{product.name} - 商品詳細</Dialog.Title>
          {/* ヘッダー（固定） */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-teal-600 dark:text-teal-400 font-medium">{product.categoryName}</p>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 truncate">{product.name}</h2>
            </div>
            <Dialog.Close className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full ml-2 flex-shrink-0">
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </Dialog.Close>
          </div>

          {/* スクロール可能なコンテンツ */}
          <div className="flex-1 overflow-y-auto overscroll-contain">
            {/* 画像エリア */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-6">
              <div className="aspect-video max-w-md mx-auto relative rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg">
                {/* Loading Skeleton */}
                {!imageLoaded && (
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />
                )}
                <img
                  src={variant?.imageUrl || imagePlaceholder}
                  alt={product.name}
                  className={`w-full h-full object-contain transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    e.currentTarget.src = imagePlaceholder;
                    setImageLoaded(true);
                  }}
                />
              </div>
            </div>

            {/* 詳細エリア */}
            <div className="p-4 space-y-5">
              {/* メーカー・品番 */}
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="text-gray-500 dark:text-gray-400">メーカー:</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{product.manufacturer}</span>
                </div>
                {product.modelNumber && (
                  <div className="flex items-center gap-1.5">
                    <span className="text-gray-500 dark:text-gray-400">品番:</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{product.modelNumber}</span>
                  </div>
                )}
              </div>

              {/* 価格 */}
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">単価（税別）</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {price === 0 ? '標準仕様' : `${formatPrice(price)}`}
                      {price > 0 && <span className="text-sm font-normal text-gray-500 dark:text-gray-400">/{UNIT_SYMBOLS[product.unit] || product.unit}</span>}
                    </p>
                  </div>
                  {product.isOption ? (
                    <Badge variant="option">オプション</Badge>
                  ) : (
                    <Badge variant="standard">標準仕様</Badge>
                  )}
                </div>
              </div>

              {/* カラー選択 */}
              {product.variants.length > 1 && (
                <div>
                  <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">
                    カラー選択 <span className="text-gray-400 dark:text-gray-500 font-normal">（{product.variants.length}色）</span>
                  </h3>
                  {/* 床色に合わせたおすすめ表示 */}
                  {floorColorInfo && (
                    <div className="mb-3 p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg border border-amber-200 dark:border-amber-700">
                      <p className="text-sm text-amber-800 dark:text-amber-200 flex items-center gap-2">
                        <span className="text-base">💡</span>
                        <span>床色「{floorColorInfo.floorColor}」に合わせて</span>
                        <span className="font-bold">おすすめ</span>
                        <span>を表示中</span>
                      </p>
                    </div>
                  )}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-1">
                    {product.variants.map((v) => {
                      const hexColor = getHexColor(v.colorCode) !== '#CCCCCC'
                        ? getHexColor(v.colorCode)
                        : getHexColor(v.color);
                      const isSelected = variant?.id === v.id;
                      const isPrimaryRecommended = floorColorInfo?.primaryVariantIds.has(v.id);
                      const isRecommended = floorColorInfo?.recommendedVariantIds.has(v.id);
                      return (
                        <button
                          key={v.id}
                          onClick={() => setSelectedVariant(v)}
                          className={cn(
                            'flex items-center gap-2 p-3 rounded-xl border-2 transition-all text-left relative',
                            isSelected
                              ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/30 shadow-md'
                              : isPrimaryRecommended
                              ? 'border-amber-400 bg-amber-50 dark:bg-amber-900/20 hover:border-amber-500'
                              : isRecommended
                              ? 'border-amber-200 hover:border-amber-300 dark:border-amber-700 dark:hover:border-amber-600'
                              : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700'
                          )}
                        >
                          {/* おすすめバッジ */}
                          {isPrimaryRecommended && (
                            <span className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-amber-500 text-white text-[10px] font-bold rounded-full shadow">
                              おすすめ
                            </span>
                          )}
                          <div
                            className="w-8 h-8 rounded-lg border border-gray-300 shadow-inner flex-shrink-0"
                            style={{ backgroundColor: hexColor }}
                          />
                          <span className={cn(
                            'text-sm truncate',
                            isSelected ? 'font-medium text-teal-700 dark:text-teal-300' : 'text-gray-700 dark:text-gray-300'
                          )}>
                            {v.color}
                          </span>
                          {isSelected && (
                            <Check className="w-4 h-4 text-teal-500 ml-auto flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 数量選択 */}
              <div>
                <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">数量</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-xl">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-3 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-l-xl disabled:opacity-50 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>
                    <span className="px-6 py-3 min-w-[80px] text-center font-bold text-lg dark:text-gray-100">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-3 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-r-xl disabled:opacity-50 transition-colors"
                      disabled={quantity >= 99}
                    >
                      <Plus className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400">{UNIT_SYMBOLS[product.unit] || product.unit}</span>
                </div>
              </div>

              {/* 合計金額 */}
              {price > 0 && (
                <div className="bg-gray-900 text-white rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">合計金額</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold">{formatPrice(totalPrice)}</span>
                      <span className="text-xs text-gray-400 ml-1">税別</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 商品特徴・メモ欄 */}
              {product.description && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-amber-600" />
                    <h3 className="text-sm font-bold text-amber-800">商品特徴・メモ</h3>
                  </div>
                  <p className="text-sm text-amber-900 leading-relaxed whitespace-pre-wrap">{product.description}</p>
                </div>
              )}

              {/* QRコード */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                <button
                  onClick={() => setShowQR(!showQR)}
                  className="flex items-center gap-2 w-full"
                >
                  <QrCode className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200">商品QRコード</h3>
                  <span className="text-xs text-gray-500 ml-auto">{showQR ? '閉じる' : '表示'}</span>
                </button>
                {showQR && (
                  <div className="mt-4 flex flex-col items-center gap-3">
                    <div className="bg-white p-4 rounded-lg shadow-inner">
                      <QRCodeSVG
                        value={`${window.location.origin}/product/${product.id}`}
                        size={150}
                        level="M"
                        includeMargin
                      />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                      スキャンして商品ページを共有
                    </p>
                  </div>
                )}
              </div>

              {/* カテゴリルール表示 */}
              {categoryRule.description && (
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span className="text-sm text-blue-700 dark:text-blue-300">{categoryRule.description}</span>
                  </div>
                </div>
              )}

              {/* 選択制限の警告 */}
              {!canAddToCart && (
                <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-xl border border-red-100 dark:border-red-800">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-red-700 dark:text-red-300">
                      {isSingleSelection && (
                        <p>このカテゴリは1つのみ選択可能です。既に別の商品が選択されています。</p>
                      )}
                      {categoryRule.maxSelection && sameCategoryCount >= categoryRule.maxSelection && (
                        <p>このカテゴリは最大{categoryRule.maxSelection}つまで選択可能です。</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* レコメンドパネル */}
              {allProducts.length > 0 && selectedVariant && (
                <RecommendationPanel
                  selectedProduct={product}
                  selectedVariant={selectedVariant}
                  allProducts={allProducts}
                  cartProductIds={cartProductIds}
                  onProductSelect={handleRecommendedProductSelect}
                />
              )}
            </div>
          </div>

          {/* フッター（固定） */}
          <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1 py-3"
              >
                閉じる
              </Button>
              <Button
                variant="primary"
                onClick={handleAddToCart}
                className="flex-[2] py-3"
                disabled={isAdded || !canAddToCart}
              >
                {isAdded ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    選択しました
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    {variant ? `「${variant.color}」を選択` : 'この仕様を選択'}
                  </>
                )}
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>

    {/* 部材注意点警告モーダル */}
    {warningModal}
  </>
  );
};

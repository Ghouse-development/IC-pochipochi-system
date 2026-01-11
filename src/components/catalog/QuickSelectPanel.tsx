import React, { useState, useMemo, useRef, useCallback } from 'react';
import {
  Zap,
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  Sparkles,
  ChevronRight,
  Package
} from 'lucide-react';
import { Card } from '../common/Card';
import { useCartStore } from '../../stores/useCartStore';
import { formatPrice } from '../../lib/utils';
import type { Product } from '../../types/product';
import { useTimeout } from '../../hooks/useTimeout';
import { STORAGE_KEYS } from '../../lib/constants';

interface QuickSelectPanelProps {
  products: Product[];
  onProductSelect?: (product: Product) => void;
}

interface QuickSelectSet {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  products: Product[];
  savings?: number;
  popularity?: number;
}

export const QuickSelectPanel: React.FC<QuickSelectPanelProps> = ({
  products,
}) => {
  const { addItem, items } = useCartStore();
  const { setTimeout } = useTimeout();
  const [selectedSetId, setSelectedSetId] = useState<string | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // 標準品のみ抽出
  const standardProducts = useMemo(() => {
    return products.filter(p => !p.isOption);
  }, [products]);

  // 人気商品（上位5件）
  const popularProducts = useMemo(() => {
    return products.slice(0, 5);
  }, [products]);

  // クイックセット定義
  const quickSets = useMemo<QuickSelectSet[]>(() => {
    return [
      {
        id: 'standard-all',
        name: '標準セット一括選択',
        description: '全ての標準品を一括で選択',
        icon: CheckCircle,
        products: standardProducts,
        savings: 0,
      },
      {
        id: 'popular',
        name: '人気商品セット',
        description: 'お客様に人気の商品を厳選',
        icon: TrendingUp,
        products: popularProducts,
        popularity: 95,
      },
      {
        id: 'recommended',
        name: 'おすすめセット',
        description: 'コスパ最強の組み合わせ',
        icon: Star,
        products: standardProducts.slice(0, 8),
        savings: 50000,
      },
    ];
  }, [standardProducts, popularProducts]);

  // セット適用
  const applyQuickSet = useCallback(async (set: QuickSelectSet) => {
    setIsApplying(true);
    setSelectedSetId(set.id);

    // 既存選択との重複チェック
    const existingIds = new Set(items.map(i => i.product.id));

    for (const product of set.products) {
      if (!existingIds.has(product.id)) {
        // カートに追加（アニメーション付き）
        const selectedVariant = product.variants?.[0] || {
          id: `${product.id}-default`,
          color: 'デフォルト',
          colorCode: undefined,
          imageUrl: undefined,
        };
        addItem(product, 1, selectedVariant);

        // 視覚的フィードバック用の遅延
        await new Promise(resolve => globalThis.setTimeout(resolve, 100));
      }
    }

    setTimeout(() => {
      setIsApplying(false);
      setSelectedSetId(null);
    }, 500);
  }, [items, addItem, setTimeout]);

  // キーボードナビゲーション
  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number, set: QuickSelectSet) => {
    const totalButtons = quickSets.length;

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        const nextIndex = (index + 1) % totalButtons;
        setFocusedIndex(nextIndex);
        buttonRefs.current[nextIndex]?.focus();
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        const prevIndex = (index - 1 + totalButtons) % totalButtons;
        setFocusedIndex(prevIndex);
        buttonRefs.current[prevIndex]?.focus();
        break;
      }
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (!isApplying && set.products.length > 0) {
          applyQuickSet(set);
        }
        break;
      case 'Home':
        e.preventDefault();
        setFocusedIndex(0);
        buttonRefs.current[0]?.focus();
        break;
      case 'End': {
        e.preventDefault();
        const lastIndex = totalButtons - 1;
        setFocusedIndex(lastIndex);
        buttonRefs.current[lastIndex]?.focus();
        break;
      }
    }
  }, [quickSets.length, isApplying, applyQuickSet]);

  // 選択済み商品数
  const selectedCount = useMemo(() => {
    const cartIds = new Set(items.map(i => i.product.id));
    return products.filter(p => cartIds.has(p.id)).length;
  }, [products, items]);

  return (
    <Card className="p-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-200">
      {/* ヘッダー */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">
              クイックセレクト
            </h3>
            <p className="text-xs text-gray-600">
              ワンクリックで一括選択
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-indigo-600">
            {selectedCount}
          </p>
          <p className="text-xs text-gray-500">選択済み</p>
        </div>
      </div>

      {/* クイックセット */}
      <div className="space-y-3" role="listbox" aria-label="クイックセレクトオプション">
        {quickSets.map((set, index) => (
          <button
            key={set.id}
            ref={(el) => { buttonRefs.current[index] = el; }}
            onClick={() => applyQuickSet(set)}
            onKeyDown={(e) => handleKeyDown(e, index, set)}
            onFocus={() => setFocusedIndex(index)}
            disabled={isApplying || set.products.length === 0}
            role="option"
            aria-selected={selectedSetId === set.id}
            tabIndex={focusedIndex === index || (focusedIndex === -1 && index === 0) ? 0 : -1}
            className={`w-full p-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              selectedSetId === set.id
                ? 'border-indigo-500 bg-indigo-100 scale-[1.02]'
                : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-lg'
            } ${isApplying ? 'pointer-events-none' : ''}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  set.id === 'standard-all'
                    ? 'bg-green-100'
                    : set.id === 'popular'
                    ? 'bg-amber-100'
                    : 'bg-blue-100'
                }`}>
                  <set.icon className={`w-6 h-6 ${
                    set.id === 'standard-all'
                      ? 'text-green-600'
                      : set.id === 'popular'
                      ? 'text-amber-600'
                      : 'text-blue-600'
                  }`} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">
                    {set.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {set.description}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-600">
                      {set.products.length}商品
                    </span>
                    {set.popularity && (
                      <span className="text-xs px-2 py-0.5 bg-amber-100 rounded-full text-amber-700 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {set.popularity}%人気
                      </span>
                    )}
                    {set.savings && set.savings > 0 && (
                      <span className="text-xs px-2 py-0.5 bg-green-100 rounded-full text-green-700">
                        {formatPrice(set.savings)}お得
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {selectedSetId === set.id && isApplying ? (
                  <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* ヒント */}
      <div className="mt-4 p-3 bg-white/50 rounded-lg">
        <div className="flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-indigo-500 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-gray-900">
              時短のヒント
            </p>
            <p className="text-gray-600">
              標準セットを選択後、必要に応じてオプション品を追加すると効率的です
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

// 最近選択した商品のクイック再選択
export const RecentSelectionsPanel: React.FC<{
  onProductSelect?: (product: Product) => void;
}> = ({ onProductSelect }) => {
  // ローカルストレージから最近の選択を取得
  const recentSelections = useMemo(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.RECENT_SELECTIONS);
      return stored ? JSON.parse(stored).slice(0, 5) : [];
    } catch {
      return [];
    }
  }, []);

  if (recentSelections.length === 0) return null;

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-3">
        <Clock className="w-4 h-4 text-gray-500" />
        <h4 className="font-medium text-gray-900">
          最近の選択
        </h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {recentSelections.map((product: Product) => (
          <button
            key={product.id}
            onClick={() => onProductSelect?.(product)}
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg hover:bg-gray-200:bg-gray-700 transition-colors text-sm"
          >
            <Package className="w-3 h-3 text-gray-400" />
            <span className="text-gray-700">{product.name}</span>
          </button>
        ))}
      </div>
    </Card>
  );
};

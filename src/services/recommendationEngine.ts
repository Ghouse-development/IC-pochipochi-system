import type { Product } from '../types/product';

// 関連性スコアを計算するための設定
interface RecommendationConfig {
  sameCategory: number;      // 同じカテゴリ
  sameManufacturer: number;  // 同じメーカー
  similarPrice: number;      // 似た価格帯
  complementary: number;     // 補完関係
  popular: number;           // 人気商品
  recentlyViewed: number;    // 最近閲覧した商品
  trending: number;          // トレンド商品
  budgetMatch: number;       // 予算適合度
}

const DEFAULT_CONFIG: RecommendationConfig = {
  sameCategory: 0.3,
  sameManufacturer: 0.2,
  similarPrice: 0.2,
  complementary: 0.25,
  popular: 0.05,
  recentlyViewed: 0.15,
  trending: 0.1,
  budgetMatch: 0.2,
};

// 季節トレンド（月ごとの推奨カテゴリ）
const SEASONAL_CATEGORIES: { [month: number]: string[] } = {
  1: ['給湯器', '暖房', '浴室'],           // 冬
  2: ['給湯器', '暖房', '浴室'],
  3: ['外壁', '屋根', '床材'],             // 春（リフォームシーズン）
  4: ['外壁', '屋根', '庭', 'ウッドデッキ'],
  5: ['外壁', '屋根', '庭', 'ウッドデッキ'],
  6: ['雨樋', '屋根', '浴室'],              // 梅雨
  7: ['エアコン', '窓', 'シェード'],       // 夏
  8: ['エアコン', '窓', 'シェード'],
  9: ['外壁', '屋根', '床材'],              // 秋（リフォームシーズン）
  10: ['外壁', '屋根', '床材'],
  11: ['給湯器', '暖房', '窓'],             // 冬準備
  12: ['給湯器', '暖房', '窓'],
};

// 補完関係のマッピング（カテゴリ間の相性）
const COMPLEMENTARY_CATEGORIES: { [key: string]: string[] } = {
  '外壁': ['屋根', '雨樋', '軒天', 'サッシ'],
  '屋根': ['外壁', '雨樋', '太陽光パネル'],
  '玄関ドア': ['外壁', 'ポーチタイル', '玄関収納'],
  '窓': ['外壁', 'シャッター', 'カーテン'],
  'ポーチタイル': ['玄関ドア', '外壁'],
  '床材': ['巾木', '建具', '壁クロス'],
  '壁クロス': ['床材', '天井クロス', '建具'],
  '建具': ['床材', '巾木', 'ドアノブ'],
  'キッチン': ['レンジフード', '食洗機', 'カップボード'],
  '浴室': ['洗面台', '給湯器', 'タオルバー'],
  '洗面台': ['浴室', '洗濯機パン', 'ミラーキャビネット'],
  'トイレ': ['トイレ手洗い', 'ペーパーホルダー', 'タウンライト'],
};

// 人気商品のIDリスト（将来的にはDBから取得）
const POPULAR_PRODUCTS = new Set([
  'ext-wall-monavi-v',
  'ext-roof-colorbest',
  'int-floor-live-natural-mrx',
  'int-door-lixil-rasissa',
]);

/**
 * レコメンデーションエンジン
 */
export class RecommendationEngine {
  private config: RecommendationConfig;

  constructor(config: Partial<RecommendationConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  /**
   * 選択された商品に基づいてレコメンドを生成
   */
  getRecommendations(
    selectedProducts: Product[],
    allProducts: Product[],
    limit: number = 6
  ): Product[] {
    if (selectedProducts.length === 0) {
      // 選択がない場合は人気商品を返す
      return allProducts
        .filter(p => POPULAR_PRODUCTS.has(p.id))
        .slice(0, limit);
    }

    // 既に選択された商品を除外
    const selectedIds = new Set(selectedProducts.map(p => p.id));
    const candidates = allProducts.filter(p => !selectedIds.has(p.id));

    // 各候補のスコアを計算
    const scored = candidates.map(candidate => {
      let score = 0;

      // 選択された各商品との関連性を計算
      selectedProducts.forEach(selected => {
        // 同じカテゴリの場合（異なる選択肢を提案）
        if (candidate.categoryName === selected.categoryName) {
          score += this.config.sameCategory * 0.5; // 減点方向
        }

        // 同じメーカーの場合
        if (candidate.manufacturer === selected.manufacturer) {
          score += this.config.sameManufacturer;
        }

        // 似た価格帯の場合
        const candidatePrice = this.getPrice(candidate);
        const selectedPrice = this.getPrice(selected);
        if (candidatePrice > 0 && selectedPrice > 0) {
          const priceDiff = Math.abs(candidatePrice - selectedPrice) / Math.max(candidatePrice, selectedPrice);
          if (priceDiff < 0.3) {
            score += this.config.similarPrice * (1 - priceDiff);
          }
        }

        // 補完関係の場合
        const complementaryCategories = COMPLEMENTARY_CATEGORIES[selected.categoryName] || [];
        if (complementaryCategories.includes(candidate.categoryName)) {
          score += this.config.complementary;
        }
      });

      // 人気商品ボーナス
      if (POPULAR_PRODUCTS.has(candidate.id)) {
        score += this.config.popular;
      }

      return { product: candidate, score };
    });

    // スコアで降順ソートし、上位を返す
    return scored
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(s => s.product);
  }

  /**
   * 「この商品を選んだ人はこれも選んでいます」
   */
  getFrequentlyBoughtTogether(
    product: Product,
    allProducts: Product[],
    limit: number = 4
  ): Product[] {
    const complementary = COMPLEMENTARY_CATEGORIES[product.categoryName] || [];

    return allProducts
      .filter(p =>
        p.id !== product.id &&
        complementary.includes(p.categoryName)
      )
      .sort((a, b) => {
        // 同じメーカーを優先
        const aManufacturerMatch = a.manufacturer === product.manufacturer ? 1 : 0;
        const bManufacturerMatch = b.manufacturer === product.manufacturer ? 1 : 0;
        return bManufacturerMatch - aManufacturerMatch;
      })
      .slice(0, limit);
  }

  /**
   * 同カテゴリの代替商品
   */
  getAlternatives(
    product: Product,
    allProducts: Product[],
    limit: number = 4
  ): Product[] {
    const price = this.getPrice(product);

    return allProducts
      .filter(p =>
        p.id !== product.id &&
        p.categoryName === product.categoryName
      )
      .map(p => {
        const pPrice = this.getPrice(p);
        const priceDiff = price > 0 && pPrice > 0
          ? Math.abs(price - pPrice) / Math.max(price, pPrice)
          : 0.5;
        return { product: p, priceDiff };
      })
      .sort((a, b) => a.priceDiff - b.priceDiff)
      .slice(0, limit)
      .map(s => s.product);
  }

  /**
   * コーディネート提案（外観・内装セット）
   */
  getCoordinatedSet(
    style: 'modern' | 'natural' | 'classic' | 'japanese',
    allProducts: Product[]
  ): Product[] {
    // スタイルごとのキーワード
    const styleKeywords: { [key: string]: string[] } = {
      modern: ['ブラック', 'グレー', 'ホワイト', 'モダン', 'シンプル', 'スタイリッシュ'],
      natural: ['ナチュラル', 'オーク', 'ウッド', '木目', 'ベージュ', 'ブラウン'],
      classic: ['クラシック', 'アンティーク', 'エレガント', 'ダーク', 'ウォルナット'],
      japanese: ['和', '和風', '畳', '障子', '杉', 'ヒノキ'],
    };

    const keywords = styleKeywords[style] || styleKeywords.modern;

    // 各カテゴリから1つずつ、スタイルに合うものを選択
    const targetCategories = ['外壁', '屋根', '玄関ドア', '床材', '建具'];
    const result: Product[] = [];

    targetCategories.forEach(category => {
      const categoryProducts = allProducts.filter(p => p.categoryName === category);

      // キーワードマッチでスコアリング
      const scored = categoryProducts.map(p => {
        let score = 0;
        const searchText = `${p.name} ${p.description || ''} ${p.variants.map(v => v.color).join(' ')}`.toLowerCase();

        keywords.forEach(keyword => {
          if (searchText.includes(keyword.toLowerCase())) {
            score++;
          }
        });

        return { product: p, score };
      });

      const best = scored.sort((a, b) => b.score - a.score)[0];
      if (best) {
        result.push(best.product);
      }
    });

    return result;
  }

  private getPrice(product: Product): number {
    return product.pricing.find(p => p.plan === 'LACIE' || p.planId === 'LACIE')?.price || 0;
  }

  /**
   * 閲覧履歴に基づくレコメンド
   */
  getBasedOnHistory(
    viewedProductIds: string[],
    allProducts: Product[],
    limit: number = 6
  ): Product[] {
    if (viewedProductIds.length === 0) {
      return this.getTrendingProducts(allProducts, limit);
    }

    const viewedProducts = allProducts.filter(p => viewedProductIds.includes(p.id));
    const viewedCategories = [...new Set(viewedProducts.map(p => p.categoryName))];
    const viewedManufacturers = [...new Set(viewedProducts.map(p => p.manufacturer))];

    // 閲覧済みを除外
    const candidates = allProducts.filter(p => !viewedProductIds.includes(p.id));

    const scored = candidates.map(candidate => {
      let score = 0;

      // 閲覧したカテゴリの関連商品
      if (viewedCategories.includes(candidate.categoryName)) {
        score += this.config.recentlyViewed * 0.5;
      }

      // 閲覧したカテゴリの補完カテゴリ
      viewedCategories.forEach(cat => {
        const complementary = COMPLEMENTARY_CATEGORIES[cat] || [];
        if (complementary.includes(candidate.categoryName)) {
          score += this.config.complementary;
        }
      });

      // 同じメーカーの別商品
      if (viewedManufacturers.includes(candidate.manufacturer)) {
        score += this.config.sameManufacturer;
      }

      // 人気商品ボーナス
      if (POPULAR_PRODUCTS.has(candidate.id)) {
        score += this.config.popular;
      }

      return { product: candidate, score };
    });

    return scored
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(s => s.product);
  }

  /**
   * 季節・トレンドに基づくレコメンド
   */
  getTrendingProducts(
    allProducts: Product[],
    limit: number = 6
  ): Product[] {
    const currentMonth = new Date().getMonth() + 1;
    const seasonalCategories = SEASONAL_CATEGORIES[currentMonth] || [];

    // 季節カテゴリの商品を優先
    const seasonalProducts = allProducts.filter(p =>
      seasonalCategories.some(cat =>
        p.categoryName.includes(cat) || p.name.includes(cat)
      )
    );

    // 人気商品と季節商品を組み合わせ
    const popularProducts = allProducts.filter(p => POPULAR_PRODUCTS.has(p.id));

    const combined = [...new Set([...seasonalProducts, ...popularProducts])];

    if (combined.length >= limit) {
      return combined.slice(0, limit);
    }

    // 足りない分はランダムに補完
    const remaining = allProducts
      .filter(p => !combined.includes(p))
      .sort(() => Math.random() - 0.5)
      .slice(0, limit - combined.length);

    return [...combined, ...remaining];
  }

  /**
   * 予算に基づくレコメンド
   */
  getBudgetBasedRecommendations(
    budget: number,
    selectedProducts: Product[],
    allProducts: Product[],
    limit: number = 6
  ): { withinBudget: Product[]; upgradeOptions: Product[]; budgetOptions: Product[] } {
    const selectedIds = new Set(selectedProducts.map(p => p.id));
    const currentTotal = selectedProducts.reduce(
      (sum, p) => sum + this.getPrice(p),
      0
    );
    const remainingBudget = budget - currentTotal;

    const candidates = allProducts.filter(p => !selectedIds.has(p.id));

    // 予算内の商品
    const withinBudget = candidates
      .filter(p => {
        const price = this.getPrice(p);
        return price <= remainingBudget && price > 0;
      })
      .sort((a, b) => this.getPrice(b) - this.getPrice(a))
      .slice(0, limit);

    // アップグレードオプション（予算を少しオーバー）
    const upgradeOptions = candidates
      .filter(p => {
        const price = this.getPrice(p);
        return price > remainingBudget && price <= remainingBudget * 1.3;
      })
      .sort((a, b) => this.getPrice(a) - this.getPrice(b))
      .slice(0, limit);

    // コスパ重視オプション
    const budgetOptions = candidates
      .filter(p => {
        const price = this.getPrice(p);
        return price < remainingBudget * 0.7 && price > 0;
      })
      .sort(() => Math.random() - 0.5)
      .slice(0, limit);

    return { withinBudget, upgradeOptions, budgetOptions };
  }

  /**
   * 未選択カテゴリの提案（「これも検討してみては？」）
   */
  getMissingCategories(
    selectedProducts: Product[],
    allProducts: Product[],
    catalogType: 'exterior' | 'interior' | 'water',
    limit: number = 4
  ): { category: string; topProduct: Product }[] {
    const selectedCategories = new Set(selectedProducts.map(p => p.categoryName));

    // カタログタイプごとの必須カテゴリ
    const essentialCategories: { [key: string]: string[] } = {
      exterior: ['外壁', '屋根', '玄関ドア', '窓', 'ポーチタイル'],
      interior: ['床材', '壁クロス', '建具', '天井クロス', '巾木'],
      water: ['キッチン', '浴室', '洗面台', 'トイレ', '給湯器'],
    };

    const required = essentialCategories[catalogType] || [];
    const missing = required.filter(cat => !selectedCategories.has(cat));

    const result: { category: string; topProduct: Product }[] = [];

    missing.forEach(category => {
      const categoryProducts = allProducts.filter(p => p.categoryName === category);
      if (categoryProducts.length > 0) {
        // 人気または標準仕様の商品を推奨
        const topProduct = categoryProducts.find(p => !p.isOption) ||
                          categoryProducts.find(p => POPULAR_PRODUCTS.has(p.id)) ||
                          categoryProducts[0];
        result.push({ category, topProduct });
      }
    });

    return result.slice(0, limit);
  }

  /**
   * カラーコーディネート提案
   */
  getColorCoordinated(
    baseProduct: Product,
    allProducts: Product[],
    limit: number = 4
  ): Product[] {
    const baseVariant = baseProduct.variants[0];
    if (!baseVariant) return [];

    const baseColorKeywords = this.extractColorKeywords(baseVariant.color);

    const candidates = allProducts.filter(p =>
      p.id !== baseProduct.id &&
      COMPLEMENTARY_CATEGORIES[baseProduct.categoryName]?.includes(p.categoryName)
    );

    const scored = candidates.map(candidate => {
      let score = 0;

      candidate.variants.forEach(variant => {
        const variantKeywords = this.extractColorKeywords(variant.color);
        const matchCount = baseColorKeywords.filter(k =>
          variantKeywords.includes(k)
        ).length;
        score = Math.max(score, matchCount);
      });

      return { product: candidate, score };
    });

    return scored
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(s => s.product);
  }

  /**
   * 色のキーワードを抽出
   */
  private extractColorKeywords(colorName: string): string[] {
    const keywords: string[] = [];
    const colorMap: { [key: string]: string[] } = {
      'ホワイト': ['白', 'ホワイト', 'WHITE', 'アイボリー', 'クリーム'],
      'ブラック': ['黒', 'ブラック', 'BLACK', 'ダーク'],
      'グレー': ['グレー', 'グレイ', 'GRAY', 'GREY', '灰'],
      'ブラウン': ['ブラウン', '茶', 'BROWN', 'ウォールナット', 'チェリー'],
      'ベージュ': ['ベージュ', 'BEIGE', 'ナチュラル', 'オーク'],
      'ウッド': ['木目', 'ウッド', 'WOOD', '杉', 'ヒノキ', 'パイン'],
    };

    const lowerColor = colorName.toLowerCase();
    Object.entries(colorMap).forEach(([category, patterns]) => {
      if (patterns.some(p => lowerColor.includes(p.toLowerCase()))) {
        keywords.push(category);
      }
    });

    return keywords;
  }

  /**
   * スマートレコメンド（複数要素を総合判断）
   */
  getSmartRecommendations(
    context: {
      selectedProducts: Product[];
      viewedProductIds: string[];
      budget?: number;
      catalogType?: 'exterior' | 'interior' | 'water';
    },
    allProducts: Product[],
    _limit: number = 8
  ): {
    type: 'complementary' | 'alternative' | 'trending' | 'budget' | 'missing';
    reason: string;
    products: Product[];
  }[] {
    const results: {
      type: 'complementary' | 'alternative' | 'trending' | 'budget' | 'missing';
      reason: string;
      products: Product[];
    }[] = [];

    const { selectedProducts, viewedProductIds, budget, catalogType } = context;

    // 1. 補完商品
    if (selectedProducts.length > 0) {
      const complementary = this.getRecommendations(selectedProducts, allProducts, 4);
      if (complementary.length > 0) {
        results.push({
          type: 'complementary',
          reason: '選択中の商品と相性が良い商品',
          products: complementary,
        });
      }
    }

    // 2. 閲覧履歴ベース
    if (viewedProductIds.length > 0) {
      const historyBased = this.getBasedOnHistory(viewedProductIds, allProducts, 4);
      if (historyBased.length > 0) {
        results.push({
          type: 'alternative',
          reason: '閲覧履歴からおすすめ',
          products: historyBased,
        });
      }
    }

    // 3. 季節トレンド
    const trending = this.getTrendingProducts(allProducts, 4);
    results.push({
      type: 'trending',
      reason: '今シーズンのおすすめ',
      products: trending,
    });

    // 4. 予算ベース
    if (budget && budget > 0) {
      const { withinBudget } = this.getBudgetBasedRecommendations(
        budget,
        selectedProducts,
        allProducts,
        4
      );
      if (withinBudget.length > 0) {
        results.push({
          type: 'budget',
          reason: '予算内でおすすめ',
          products: withinBudget,
        });
      }
    }

    // 5. 未選択カテゴリ
    if (catalogType) {
      const missing = this.getMissingCategories(
        selectedProducts,
        allProducts,
        catalogType,
        4
      );
      if (missing.length > 0) {
        results.push({
          type: 'missing',
          reason: 'まだ選択されていないカテゴリ',
          products: missing.map(m => m.topProduct),
        });
      }
    }

    return results;
  }
}

// シングルトンインスタンス
export const recommendationEngine = new RecommendationEngine();

// React Hook用のユーティリティ
export const useRecommendations = (
  selectedProducts: Product[],
  allProducts: Product[],
  limit: number = 6
): Product[] => {
  return recommendationEngine.getRecommendations(selectedProducts, allProducts, limit);
};

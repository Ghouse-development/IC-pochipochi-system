import type { Product } from '../types/product';

// 関連性スコアを計算するための設定
interface RecommendationConfig {
  sameCategory: number;      // 同じカテゴリ
  sameManufacturer: number;  // 同じメーカー
  similarPrice: number;      // 似た価格帯
  complementary: number;     // 補完関係
  popular: number;           // 人気商品
}

const DEFAULT_CONFIG: RecommendationConfig = {
  sameCategory: 0.3,
  sameManufacturer: 0.2,
  similarPrice: 0.2,
  complementary: 0.25,
  popular: 0.05,
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

/**
 * ダイニングテーブル商品データ自動生成
 *
 * diningTableConfig.json から商品データを生成します。
 * 設定ファイルを編集するだけで商品の追加・変更が可能（ノーコードメンテナンス）
 *
 * 選択フロー:
 * ①形状: スクエアタイプ / ラウンドタイプ
 * ②脚タイプ: スクエア→(スクエア/ラウンド)、ラウンド→(クワトロ/オクタ)
 * ③サイズ: スクエア→(1500/1650/1800mm)、ラウンド→(1100/1200mm)
 * ④天板カラー: 15色から選択
 * ⑤コンセント形状: スクエアのみ(2口/1口+USB)
 * ※2台目も選択可能
 */

import type { Product } from '../../types/product';
import diningTableConfig from '../config/diningTableConfig.json';

interface TopColor {
  id: string;
  name: string;
  code: string;
  hexColor: string;
}

interface LegOption {
  id: string;
  shape: string;
  color: string;
  price: number;
}

interface SizeOption {
  id: string;
  name: string;
  displayName: string;
  price: number;
}

interface OutletOption {
  id: string;
  name: string;
  price: number;
}

// 天板カラーをバリアントに変換
const createVariants = (topColors: TopColor[]) => {
  return topColors.map((color, index) => ({
    id: `v${index + 1}`,
    color: `${color.id}${color.name}`,
    colorCode: color.hexColor,
    modelNumber: color.code,
    images: []
  }));
};

/**
 * スクエアテーブルの商品データを生成
 * 脚タイプ × サイズ × コンセント の組み合わせ
 */
export const generateSquareTableProducts = (): Product[] => {
  const config = diningTableConfig.squareTable;
  const topColors = diningTableConfig.topColors as TopColor[];
  const variants = createVariants(topColors);
  const products: Product[] = [];

  const legs = config.legOptions as LegOption[];
  const sizes = config.sizes as SizeOption[];
  const outlets = config.outletOptions as OutletOption[];

  // 各組み合わせで商品を作成
  legs.forEach((leg) => {
    sizes.forEach((size) => {
      outlets.forEach((outlet) => {
        const productId = `furn-dt-sq-${leg.id}-${size.id}-${outlet.id}`.toLowerCase();
        const totalPrice = leg.price + size.price + outlet.price;

        products.push({
          id: productId,
          categoryId: 'dining-table',
          categoryName: 'オリジナルダイニングテーブル',
          subcategory: 'スクエアテーブル',
          name: `${config.fullName} ${leg.shape}脚・${leg.color} ${size.displayName}【${outlet.name}】`,
          manufacturer: 'Gハウス',
          modelNumber: `GH-DT-SQ-${leg.id}-${size.id}-${outlet.id}`,
          unit: '台',
          isOption: true,
          description: `${config.description}\n【サイズ】H${config.specs.height}×D${config.specs.depth}×${size.name}\n【天板】${config.specs.topMaterial}\n【脚】${config.specs.legMaterial}（${leg.shape}・${leg.color}）\n【耐荷重】${config.specs.loadCapacity}\n【コンセント】${outlet.name}（テーブル端1カ所）`,
          variants: variants,
          pricing: [
            { plan: 'LACIE', price: totalPrice },
            { plan: 'HOURS', price: totalPrice },
            { plan: 'LIFE+', price: totalPrice },
            { plan: 'LIFE', price: totalPrice }
          ]
        });
      });
    });
  });

  return products;
};

/**
 * ラウンドテーブルの商品データを生成
 * 脚タイプ × サイズ の組み合わせ
 */
export const generateRoundTableProducts = (): Product[] => {
  const config = diningTableConfig.roundTable;
  const topColors = diningTableConfig.topColors as TopColor[];
  const variants = createVariants(topColors);
  const products: Product[] = [];

  const legs = config.legOptions as LegOption[];
  const sizes = config.sizes as SizeOption[];

  // 各組み合わせで商品を作成
  legs.forEach((leg) => {
    sizes.forEach((size) => {
      const productId = `furn-dt-rd-${leg.id}-${size.id}`.toLowerCase();
      const totalPrice = leg.price + size.price;

      const weightInfo = leg.shape === 'クワトロ'
        ? `クワトロ脚:${config.specs.weight.quattroLeg}`
        : `オクタ脚:${config.specs.weight.octaLeg}`;

      products.push({
        id: productId,
        categoryId: 'dining-table',
        categoryName: 'オリジナルダイニングテーブル',
        subcategory: 'ラウンドテーブル',
        name: `${config.fullName} ${leg.shape}脚・${leg.color} ${size.displayName}`,
        manufacturer: 'Gハウス',
        modelNumber: `GH-DT-RD-${leg.id}-${size.id}`,
        unit: '台',
        isOption: true,
        description: `${config.description}\n【サイズ】H${config.specs.height}×${size.name}\n【天板】${config.specs.topMaterial}\n【脚】${config.specs.legMaterial}（${leg.shape}・${leg.color}）\n【耐荷重】${config.specs.loadCapacity}\n【重量】天板:${config.specs.weight.top}, ${weightInfo}`,
        variants: variants,
        pricing: [
          { plan: 'LACIE', price: totalPrice },
          { plan: 'HOURS', price: totalPrice },
          { plan: 'LIFE+', price: totalPrice },
          { plan: 'LIFE', price: totalPrice }
        ]
      });
    });
  });

  return products;
};

/**
 * 全ダイニングテーブル商品を生成
 *
 * 生成される商品数:
 * - スクエア: 4脚 × 3サイズ × 2コンセント = 24商品
 * - ラウンド: 4脚 × 2サイズ = 8商品
 * - 合計: 32商品（各商品に15色バリアント）
 */
export const generateAllDiningTableProducts = (): Product[] => {
  return [
    ...generateSquareTableProducts(),
    ...generateRoundTableProducts()
  ];
};

// エクスポート用
export const diningTableProducts = generateAllDiningTableProducts();

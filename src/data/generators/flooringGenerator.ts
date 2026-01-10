/**
 * フローリング商品データ自動生成
 *
 * flooringConfig.json から商品データを生成します。
 * 設定ファイルを編集するだけで商品の追加・変更が可能（ノーコードメンテナンス）
 *
 * 生成される商品:
 * - フローリング9種類（各種色バリアント付き）
 * - 玄関框（標準・オプション）
 * - 床見切り
 * - CFシート
 */

import type { Product } from '../../types/product';
import flooringConfig from '../config/flooringConfig.json';

interface FlooringProduct {
  id: string;
  name: string;
  manufacturer: string;
  modelNumber: string;
  materialType: string;
  isOption: boolean;
  description: string;
  colors: string[];
  pricing: {
    LACIE: number;
    HOURS: number;
    'LIFE+': number;
    LIFE: number;
  };
}

interface EntranceFrameOption {
  id: string;
  name: string;
  manufacturer: string;
  modelNumber: string;
  description: string;
  colors: string[];
  pricing: {
    LACIE: number;
    HOURS: number;
    'LIFE+': number;
    LIFE: number;
  };
}

// 色からバリアントを生成
const createVariants = (colors: string[]) => {
  return colors.map((color, index) => ({
    id: `v${index + 1}`,
    color: color,
    images: []
  }));
};

/**
 * フローリング商品を生成
 */
export const generateFlooringProducts = (): Product[] => {
  const products: Product[] = [];
  const flooringProducts = flooringConfig.flooringProducts as FlooringProduct[];

  flooringProducts.forEach((flooring) => {
    products.push({
      id: `int-floor-${flooring.id}`,
      categoryId: 'base-floor',
      categoryName: 'ベース床',
      subcategory: 'フローリング',
      materialType: flooring.materialType,
      name: flooring.name,
      manufacturer: flooring.manufacturer,
      modelNumber: flooring.modelNumber,
      unit: 'sqm',
      isOption: flooring.isOption,
      description: flooring.description,
      variants: createVariants(flooring.colors),
      pricing: [
        { plan: 'LACIE', price: flooring.pricing.LACIE },
        { plan: 'HOURS', price: flooring.pricing.HOURS },
        { plan: 'LIFE+', price: flooring.pricing['LIFE+'] },
        { plan: 'LIFE', price: flooring.pricing.LIFE }
      ]
    });
  });

  return products;
};

/**
 * 玄関框商品を生成
 */
export const generateEntranceFrameProducts = (): Product[] => {
  const products: Product[] = [];
  const entranceFrame = flooringConfig.entranceFrame;

  // 標準玄関框
  products.push({
    id: `int-floor-${entranceFrame.standard.id}`,
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: '玄関框',
    name: entranceFrame.standard.name,
    manufacturer: entranceFrame.standard.manufacturer,
    modelNumber: entranceFrame.standard.modelNumber,
    unit: 'piece',
    isOption: entranceFrame.standard.isOption,
    description: entranceFrame.standard.description,
    variants: [{ id: 'v1', color: 'フローリング色合わせ', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  });

  // オプション玄関框
  const optionFrames = entranceFrame.option as EntranceFrameOption[];
  optionFrames.forEach((frame) => {
    products.push({
      id: `int-floor-${frame.id}`,
      categoryId: 'base-floor',
      categoryName: 'ベース床',
      subcategory: '玄関框',
      name: frame.name,
      manufacturer: frame.manufacturer,
      modelNumber: frame.modelNumber,
      unit: 'piece',
      isOption: true,
      description: frame.description,
      variants: createVariants(frame.colors),
      pricing: [
        { plan: 'LACIE', price: frame.pricing.LACIE },
        { plan: 'HOURS', price: frame.pricing.HOURS },
        { plan: 'LIFE+', price: frame.pricing['LIFE+'] },
        { plan: 'LIFE', price: frame.pricing.LIFE }
      ]
    });
  });

  return products;
};

/**
 * 床見切り商品を生成
 */
export const generateFloorTrimProduct = (): Product => {
  const floorTrim = flooringConfig.floorTrim;

  return {
    id: `int-floor-${floorTrim.id}`,
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: '床見切り',
    name: floorTrim.name,
    manufacturer: floorTrim.manufacturer,
    modelNumber: floorTrim.modelNumber,
    unit: 'piece',
    isOption: floorTrim.isOption,
    description: floorTrim.description,
    variants: createVariants(floorTrim.colors),
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  };
};

/**
 * CFシート商品を生成
 */
export const generateCFSheetProduct = (): Product => {
  const cfSheet = flooringConfig.cfSheet;

  return {
    id: `int-floor-${cfSheet.id}`,
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'CFシート',
    materialType: 'CFシート',
    name: cfSheet.name,
    manufacturer: cfSheet.manufacturer,
    modelNumber: cfSheet.modelNumber,
    unit: 'sqm',
    isOption: cfSheet.isOption,
    description: cfSheet.description,
    variants: createVariants(cfSheet.colors),
    pricing: [
      { plan: 'LACIE', price: cfSheet.pricing.LACIE },
      { plan: 'HOURS', price: cfSheet.pricing.HOURS },
      { plan: 'LIFE+', price: cfSheet.pricing['LIFE+'] },
      { plan: 'LIFE', price: cfSheet.pricing.LIFE }
    ]
  };
};

/**
 * 全床材商品を生成
 *
 * 生成される商品数:
 * - フローリング: 9商品（各商品に複数色バリアント）
 * - 玄関框: 3商品（標準1 + オプション2）
 * - 床見切り: 1商品
 * - CFシート: 1商品
 * - 合計: 14商品
 */
export const generateAllFloorProducts = (): Product[] => {
  return [
    ...generateFlooringProducts(),
    ...generateEntranceFrameProducts(),
    generateFloorTrimProduct(),
    generateCFSheetProduct()
  ];
};

// エクスポート用
export const floorProducts = generateAllFloorProducts();

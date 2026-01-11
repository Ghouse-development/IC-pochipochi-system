/**
 * ポーチタイル・目地アイテム取得フック
 * Supabaseのitemsテーブルから取得
 */
import { useState, useEffect, useCallback } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { ItemWithDetails } from '../types/database';

// タイルの色バリアント
export interface TileColorVariant {
  id: string;
  colorName: string;
  colorCode?: string;
  imageUrl?: string;
}

// タイルオプションの型（PorchTileSelector互換）
export interface TileOption {
  id: string;
  name: string;
  manufacturer: string;
  description: string;
  price: number;
  isStandard: boolean;
  isRecommended?: boolean;
  imageUrl?: string;
  displayOrder?: number;
  colorVariants?: TileColorVariant[];
}

// 目地色オプションの型（PorchTileSelector互換）
export interface GroutOption {
  id: string;
  name: string;
  colorCode: string;
  isRecommended?: boolean;
  recommendedFor?: string;
  displayOrder?: number;
}

// デフォルトのタイル設定（フォールバック用）
const DEFAULT_TILES: TileOption[] = [
  {
    id: 'mortar',
    name: 'モルタル金鏝抑え',
    manufacturer: '標準',
    description: '標準仕上げ（目地不要）',
    price: 0,
    isStandard: true,
    displayOrder: 0
  },
  {
    id: 'nature2',
    name: 'ネイチャーII',
    manufacturer: 'Nagoya mozaic',
    description: '300×300 自然な風合い',
    price: 22000,
    isStandard: false,
    isRecommended: true,
    displayOrder: 1,
    colorVariants: [
      { id: 'nature2-lg', colorName: 'ライトグレー', colorCode: '#B8B8B8' },
      { id: 'nature2-g', colorName: 'グレー', colorCode: '#808080' },
      { id: 'nature2-dg', colorName: 'ダークグレー', colorCode: '#505050' },
      { id: 'nature2-b', colorName: 'ベージュ', colorCode: '#D4C4A8' },
    ]
  },
  {
    id: 'vespa',
    name: 'ベスパ',
    manufacturer: 'LIXIL',
    description: '300×300 モダンデザイン',
    price: 22000,
    isStandard: false,
    isRecommended: true,
    displayOrder: 2,
    colorVariants: [
      { id: 'vespa-w', colorName: 'ホワイト', colorCode: '#F5F5F5' },
      { id: 'vespa-lg', colorName: 'ライトグレー', colorCode: '#C0C0C0' },
      { id: 'vespa-g', colorName: 'グレー', colorCode: '#808080' },
      { id: 'vespa-br', colorName: 'ブラウン', colorCode: '#8B7355' },
    ]
  },
  {
    id: 'memphis',
    name: 'メンフィス',
    manufacturer: 'LIXIL',
    description: '600×600 大判タイル',
    price: 27000,
    isStandard: false,
    displayOrder: 3,
    colorVariants: [
      { id: 'memphis-w', colorName: 'ホワイト', colorCode: '#FAFAFA' },
      { id: 'memphis-g', colorName: 'グレー', colorCode: '#909090' },
      { id: 'memphis-dg', colorName: 'ダークグレー', colorCode: '#4A4A4A' },
    ]
  },
  {
    id: 'landstone',
    name: 'ランドストン',
    manufacturer: 'Nagoya mozaic',
    description: '600×600 岩面',
    price: 5000,
    isStandard: false,
    displayOrder: 4,
    colorVariants: [
      { id: 'landstone-n', colorName: 'ナチュラル', colorCode: '#C8BCA0' },
      { id: 'landstone-g', colorName: 'グレー', colorCode: '#8C8C8C' },
      { id: 'landstone-dg', colorName: 'ダークグレー', colorCode: '#5A5A5A' },
    ]
  },
  {
    id: 'pietra-soni',
    name: 'ピエトラソーニ',
    manufacturer: 'Nagoya mozaic',
    description: '600×600 粗目',
    price: 5000,
    isStandard: false,
    displayOrder: 5,
    colorVariants: [
      { id: 'pietra-n', colorName: 'ナチュラル', colorCode: '#D8CDB8' },
      { id: 'pietra-g', colorName: 'グレー', colorCode: '#A0A0A0' },
      { id: 'pietra-br', colorName: 'ブラウン', colorCode: '#7A6852' },
    ]
  },
];

// デフォルトの目地色設定（フォールバック用）
const DEFAULT_GROUT_COLORS: GroutOption[] = [
  { id: 'white', name: '白', colorCode: '#FFFFFF', isRecommended: true, recommendedFor: '明るめのタイル', displayOrder: 0 },
  { id: 'dark-gray', name: '濃い灰色', colorCode: '#4A4A4A', displayOrder: 1 },
  { id: 'brown', name: 'こげ茶', colorCode: '#4A3728', displayOrder: 2 },
  { id: 'beige', name: 'ベージュ', colorCode: '#D4C4A8', displayOrder: 3 },
  { id: 'light-gray', name: '薄い灰色', colorCode: '#B8B8B8', isRecommended: true, recommendedFor: '暗めのタイル', displayOrder: 4 },
];

// ItemWithDetailsからTileOptionへ変換
function itemToTileOption(item: ItemWithDetails, selectedPlan: string): TileOption {
  // 価格を取得（選択中のプランに基づく - IDまたはコードで検索）
  const pricing = item.pricing?.find(p =>
    p.product_id === selectedPlan || p.product?.code === selectedPlan
  );
  const price = pricing?.price ?? 0;
  const isStandard = pricing?.is_standard ?? (price === 0);

  // 画像を取得（プライマリ画像 or 最初の画像）
  const primaryVariant = item.variants?.[0];
  const primaryImage = primaryVariant?.images?.find(img => img.is_primary) || primaryVariant?.images?.[0];

  // 色バリアントを変換
  const colorVariants: TileColorVariant[] = (item.variants || []).map(v => {
    const variantImage = v.images?.find(img => img.is_primary) || v.images?.[0];
    return {
      id: v.id,
      colorName: v.color_name,
      colorCode: v.color_code || undefined,
      imageUrl: variantImage?.image_url,
    };
  });

  return {
    id: item.id,
    name: item.name,
    manufacturer: item.manufacturer || '標準',
    description: item.note || '',
    price,
    isStandard,
    isRecommended: item.is_recommended ?? false,
    imageUrl: primaryImage?.image_url,
    displayOrder: item.display_order,
    colorVariants: colorVariants.length > 0 ? colorVariants : undefined,
  };
}

// ItemWithDetailsからGroutOptionへ変換
function itemToGroutOption(item: ItemWithDetails): GroutOption {
  // 色コードを取得（バリアントのcolor_code）
  const variant = item.variants?.[0];
  const colorCode = variant?.color_code || '#CCCCCC';

  return {
    id: item.id,
    name: item.name,
    colorCode,
    isRecommended: item.is_recommended ?? false,
    displayOrder: item.display_order,
  };
}

export function usePorchItems(selectedPlan: string) {
  const [tiles, setTiles] = useState<TileOption[]>(DEFAULT_TILES);
  const [groutColors, setGroutColors] = useState<GroutOption[]>(DEFAULT_GROUT_COLORS);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchItems = useCallback(async () => {
    if (!isSupabaseConfigured) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // タグでタイルアイテムを取得（tags配列に'porch-tile'を含むもの）
      const { data: tileItems, error: tileError } = await supabase
        .from('items')
        .select(`
          *,
          category:categories(*),
          unit:units(*),
          variants:item_variants(
            *,
            images:item_variant_images(*)
          ),
          pricing:item_pricing(
            *,
            product:products(*)
          )
        `)
        .filter('tags', 'cs', '{"porch-tile"}')
        .eq('is_active', true)
        .order('display_order');

      if (tileError) {
        console.error('Tile fetch error:', tileError);
        throw tileError;
      }
      console.log('Fetched tiles:', tileItems?.length, tileItems);

      if (tileItems && tileItems.length > 0) {
        const convertedTiles = (tileItems as ItemWithDetails[]).map(item =>
          itemToTileOption(item, selectedPlan)
        );
        setTiles(convertedTiles);
      }

      // タグで目地アイテムを取得（tags配列に'porch-grout'を含むもの）
      const { data: groutItems, error: groutError } = await supabase
        .from('items')
        .select(`
          *,
          category:categories(*),
          unit:units(*),
          variants:item_variants(
            *,
            images:item_variant_images(*)
          ),
          pricing:item_pricing(
            *,
            product:products(*)
          )
        `)
        .filter('tags', 'cs', '{"porch-grout"}')
        .eq('is_active', true)
        .order('display_order');

      if (groutError) {
        console.error('Grout fetch error:', groutError);
        throw groutError;
      }
      console.log('Fetched grout:', groutItems?.length, groutItems);

      if (groutItems && groutItems.length > 0) {
        const convertedGrout = (groutItems as ItemWithDetails[]).map(itemToGroutOption);
        setGroutColors(convertedGrout);
      }
    } catch (err) {
      console.warn('ポーチアイテムの取得に失敗しました。デフォルト値を使用します。', err);
      setError('データの取得に失敗しました');
    } finally {
      setIsLoading(false);
    }
  }, [selectedPlan]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return {
    tiles,
    groutColors,
    isLoading,
    error,
    refresh: fetchItems,
  };
}

export default usePorchItems;

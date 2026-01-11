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

// データはSupabaseから取得（tags: 'porch-tile', 'porch-grout'）

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
  const [tiles, setTiles] = useState<TileOption[]>([]);
  const [groutColors, setGroutColors] = useState<GroutOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchItems = useCallback(async () => {
    if (!isSupabaseConfigured) {
      console.warn('Supabaseが設定されていません');
      setError('データベースが設定されていません');
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

      const convertedTiles = (tileItems as ItemWithDetails[] || []).map(item =>
        itemToTileOption(item, selectedPlan)
      );
      setTiles(convertedTiles);

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

      const convertedGrout = (groutItems as ItemWithDetails[] || []).map(itemToGroutOption);
      setGroutColors(convertedGrout);

    } catch (err) {
      console.error('ポーチアイテムの取得に失敗しました', err);
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

/**
 * ポーチタイル設定フック
 * Supabaseから設定を取得し、フォールバックはハードコード値を使用
 */
import { useState, useEffect, useCallback } from 'react';
import { settingsApi } from '../services/api';

// タイルオプションの型
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
}

// 目地色オプションの型
export interface GroutOption {
  id: string;
  name: string;
  colorCode: string;
  isRecommended?: boolean;
  recommendedFor?: string;
  displayOrder?: number;
}

// 設定全体の型
export interface PorchTileConfig {
  tiles: TileOption[];
  groutColors: GroutOption[];
}

// デフォルトのタイル設定（フォールバック用）
const DEFAULT_TILES: TileOption[] = [
  { id: 'mortar', name: 'モルタル金鏝抑え', manufacturer: '標準', description: '標準仕上げ（目地不要）', price: 0, isStandard: true, displayOrder: 0 },
  { id: 'nature2', name: 'ネイチャーII', manufacturer: 'Nagoya mozaic', description: '300×300 自然な風合い', price: 22000, isStandard: false, isRecommended: true, displayOrder: 1 },
  { id: 'vespa', name: 'ベスパ', manufacturer: 'LIXIL', description: '300×300 モダンデザイン', price: 22000, isStandard: false, isRecommended: true, displayOrder: 2 },
  { id: 'memphis', name: 'メンフィス', manufacturer: 'LIXIL', description: '600×600 大判タイル', price: 27000, isStandard: false, displayOrder: 3 },
  { id: 'landstone', name: 'ランドストン', manufacturer: 'Nagoya mozaic', description: '600×600 岩面', price: 5000, isStandard: false, displayOrder: 4 },
  { id: 'pietra-soni', name: 'ピエトラソーニ', manufacturer: 'Nagoya mozaic', description: '600×600 粗目', price: 5000, isStandard: false, displayOrder: 5 },
];

// デフォルトの目地色設定（フォールバック用）
const DEFAULT_GROUT_COLORS: GroutOption[] = [
  { id: 'white', name: '白', colorCode: '#FFFFFF', isRecommended: true, recommendedFor: '明るめのタイル', displayOrder: 0 },
  { id: 'dark-gray', name: '濃い灰色', colorCode: '#4A4A4A', displayOrder: 1 },
  { id: 'brown', name: 'こげ茶', colorCode: '#4A3728', displayOrder: 2 },
  { id: 'beige', name: 'ベージュ', colorCode: '#D4C4A8', displayOrder: 3 },
  { id: 'light-gray', name: '薄い灰色', colorCode: '#B8B8B8', isRecommended: true, recommendedFor: '暗めのタイル', displayOrder: 4 },
];

const SETTINGS_KEY = 'porch_tile_config';

export function usePorchTileSettings() {
  const [tiles, setTiles] = useState<TileOption[]>(DEFAULT_TILES);
  const [groutColors, setGroutColors] = useState<GroutOption[]>(DEFAULT_GROUT_COLORS);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 設定を取得
  const fetchSettings = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const setting = await settingsApi.getByKey(SETTINGS_KEY);

      if (setting?.setting_value) {
        const config = setting.setting_value as unknown as PorchTileConfig;

        // タイルを並び順でソート
        if (config.tiles && Array.isArray(config.tiles)) {
          const sortedTiles = [...config.tiles].sort((a, b) =>
            (a.displayOrder ?? 999) - (b.displayOrder ?? 999)
          );
          setTiles(sortedTiles);
        }

        // 目地色を並び順でソート
        if (config.groutColors && Array.isArray(config.groutColors)) {
          const sortedGroutColors = [...config.groutColors].sort((a, b) =>
            (a.displayOrder ?? 999) - (b.displayOrder ?? 999)
          );
          setGroutColors(sortedGroutColors);
        }
      }
      // 設定が存在しない場合はデフォルト値を維持
    } catch (err) {
      console.warn('ポーチタイル設定の取得に失敗しました。デフォルト値を使用します。', err);
      // エラー時もデフォルト値で継続
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 初回読み込み
  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  // 設定を保存
  const saveSettings = useCallback(async (config: PorchTileConfig) => {
    setError(null);

    try {
      await settingsApi.update(SETTINGS_KEY, config as unknown as Record<string, unknown>);

      // ローカル状態も更新
      if (config.tiles) {
        const sortedTiles = [...config.tiles].sort((a, b) =>
          (a.displayOrder ?? 999) - (b.displayOrder ?? 999)
        );
        setTiles(sortedTiles);
      }
      if (config.groutColors) {
        const sortedGroutColors = [...config.groutColors].sort((a, b) =>
          (a.displayOrder ?? 999) - (b.displayOrder ?? 999)
        );
        setGroutColors(sortedGroutColors);
      }

      return true;
    } catch (err) {
      console.error('ポーチタイル設定の保存に失敗しました。', err);
      setError('設定の保存に失敗しました');
      return false;
    }
  }, []);

  // タイルを追加
  const addTile = useCallback(async (tile: Omit<TileOption, 'displayOrder'>) => {
    const newTile: TileOption = {
      ...tile,
      displayOrder: tiles.length,
    };
    const newTiles = [...tiles, newTile];
    return saveSettings({ tiles: newTiles, groutColors });
  }, [tiles, groutColors, saveSettings]);

  // タイルを更新
  const updateTile = useCallback(async (id: string, updates: Partial<TileOption>) => {
    const newTiles = tiles.map(t => t.id === id ? { ...t, ...updates } : t);
    return saveSettings({ tiles: newTiles, groutColors });
  }, [tiles, groutColors, saveSettings]);

  // タイルを削除
  const deleteTile = useCallback(async (id: string) => {
    const newTiles = tiles.filter(t => t.id !== id);
    // displayOrderを再計算
    const reorderedTiles = newTiles.map((t, i) => ({ ...t, displayOrder: i }));
    return saveSettings({ tiles: reorderedTiles, groutColors });
  }, [tiles, groutColors, saveSettings]);

  // 目地色を追加
  const addGroutColor = useCallback(async (grout: Omit<GroutOption, 'displayOrder'>) => {
    const newGrout: GroutOption = {
      ...grout,
      displayOrder: groutColors.length,
    };
    const newGroutColors = [...groutColors, newGrout];
    return saveSettings({ tiles, groutColors: newGroutColors });
  }, [tiles, groutColors, saveSettings]);

  // 目地色を更新
  const updateGroutColor = useCallback(async (id: string, updates: Partial<GroutOption>) => {
    const newGroutColors = groutColors.map(g => g.id === id ? { ...g, ...updates } : g);
    return saveSettings({ tiles, groutColors: newGroutColors });
  }, [tiles, groutColors, saveSettings]);

  // 目地色を削除
  const deleteGroutColor = useCallback(async (id: string) => {
    const newGroutColors = groutColors.filter(g => g.id !== id);
    // displayOrderを再計算
    const reorderedGroutColors = newGroutColors.map((g, i) => ({ ...g, displayOrder: i }));
    return saveSettings({ tiles, groutColors: reorderedGroutColors });
  }, [tiles, groutColors, saveSettings]);

  // 並び順を更新
  const reorderTiles = useCallback(async (newOrder: TileOption[]) => {
    const reorderedTiles = newOrder.map((t, i) => ({ ...t, displayOrder: i }));
    return saveSettings({ tiles: reorderedTiles, groutColors });
  }, [groutColors, saveSettings]);

  const reorderGroutColors = useCallback(async (newOrder: GroutOption[]) => {
    const reorderedGroutColors = newOrder.map((g, i) => ({ ...g, displayOrder: i }));
    return saveSettings({ tiles, groutColors: reorderedGroutColors });
  }, [tiles, saveSettings]);

  return {
    // データ
    tiles,
    groutColors,
    isLoading,
    error,

    // タイル操作
    addTile,
    updateTile,
    deleteTile,
    reorderTiles,

    // 目地色操作
    addGroutColor,
    updateGroutColor,
    deleteGroutColor,
    reorderGroutColors,

    // 再読み込み
    refresh: fetchSettings,
  };
}

export default usePorchTileSettings;

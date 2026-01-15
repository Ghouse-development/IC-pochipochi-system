/**
 * カテゴリ別セレクタ設定
 * 各カテゴリの選択UIタイプとサブカテゴリを定義
 */

// 外壁素材タイプ
export const EXTERIOR_WALL_MATERIAL_TYPES = ['窯業系サイディング', 'ガルバリウム鋼板', '塗り壁'] as const;

// 外部設備カテゴリ
export const EXTERIOR_FACILITY_TYPES = [
  { id: '電気メーター', name: '電気メーター', required: true },
  { id: 'TV視聴', name: 'TV視聴', required: true },
  { id: 'エアコンスリーブキャップ', name: 'エアコンスリーブキャップ', required: true },
  { id: '外部配管', name: '外部配管', required: true },
  { id: '外部LAN用空配管', name: '外部LAN用空配管', required: true },
  { id: '換気フード', name: '換気フード', required: true },
  { id: '換気ガラリ', name: '換気ガラリ', required: true },
  { id: '外部水栓', name: '外部水栓', required: true },
  { id: 'その他オプション', name: 'その他オプション', required: false },
] as const;

// 外部建材カテゴリ
export const EXTERIOR_MATERIAL_TYPES = [
  { id: '軒樋', name: '軒樋' },
  { id: '竪樋', name: '竪樋' },
  { id: '土台水切', name: '土台水切' },
  { id: 'パラペット笠木', name: 'パラペット笠木' },
  { id: 'バルコニー笠木', name: 'バルコニー笠木' },
  { id: '破風', name: '破風' },
] as const;

// ベース床タイプ
export const BASE_FLOOR_TYPES = [
  { id: 'フローリング', name: 'フローリング' },
  { id: 'フロアタイル', name: 'フロアタイル' },
  { id: '畳', name: '畳' },
] as const;

// 周辺部材タイプ
export const PERIPHERAL_PARTS_TYPES = [
  { id: '巾木', name: '巾木' },
  { id: '廻り縁', name: '廻り縁', optional: true },
  { id: '見切り材', name: '見切り材' },
] as const;

// ガレージシャッターオプション
export const GARAGE_SHUTTER_OPTIONS = [
  { id: 'garage-shutter-no', name: 'ガレージシャッターなし', productId: 'design-garage-shutter-no', description: 'シャッターを設置しない' },
  { id: 'garage-shutter-sunauto', name: 'スナオート', productId: 'design-garage-shutter-sunauto', description: '電動シャッター（三和シャッター）' },
  { id: 'garage-shutter-famio', name: 'ファミオ', productId: 'design-garage-shutter-famio', description: '電動シャッター（YKK AP）' },
] as const;

// 庇オプション
export const AWNING_OPTIONS = [
  { id: 'awning-no', name: '庇なし', productId: 'design-awning-no', description: '庇を設置しない' },
  { id: 'awning-ad2s', name: 'アルミ庇 AD2S', productId: 'design-awning-ad2s', description: 'LIXIL AD2Sシリーズ' },
  { id: 'awning-modern', name: 'モダンアート庇', productId: 'design-awning-modern', description: 'モダンスタイル庇' },
] as const;

// ガス乾燥機オプション
export const GAS_DRYER_OPTIONS = [
  { id: 'gas-dryer-no', name: '乾太くんなし', productId: 'design-gas-dryer-no', price: 0 },
  { id: 'gas-dryer-5kg', name: '乾太くん 5kg', productId: 'design-gas-dryer-5kg', price: 150000 },
  { id: 'gas-dryer-8kg', name: '乾太くん 8kg', productId: 'design-gas-dryer-8kg', price: 200000 },
] as const;

// ガス乾燥機アクセサリー
export const GAS_DRYER_ACCESSORIES = [
  { id: 'gas-dryer-stand', name: '専用台', productId: 'design-gas-dryer-stand', price: 25000 },
  { id: 'gas-dryer-shelf', name: '棚板セット', productId: 'design-gas-dryer-shelf', price: 15000 },
] as const;

// カテゴリ絵文字マッピング
export const CATEGORY_EMOJI_MAP: Record<string, string> = {
  '外壁': '🏠',
  '屋根': '🏠',
  '玄関ドア': '🚪',
  '窓': '🪟',
  'サッシ': '🪟',
  'ポーチ': '🧱',
  '外部建材': '🔧',
  '外部設備': '⚡',
  '軒天': '☁️',
  '床材': '🪵',
  'ベース床': '🪵',
  'フローリング': '🪵',
  'フロアタイル': '🪨',
  '畳': '🟩',
  '壁クロス': '🎨',
  '天井クロス': '☁️',
  'キッチン': '🍳',
  'バス': '🛁',
  '洗面台': '🪥',
  'トイレ': '🚽',
  'カーテン': '🪟',
  '照明': '💡',
  'エコキュート': '♨️',
  '太陽光': '☀️',
  '蓄電池': '🔋',
  '電気メーター': '⚡',
  'TV視聴': '📡',
  '給湯': '🔥',
  'ポスト': '📮',
  '表札': '🏠',
  'インターホン': '🔔',
  '散水': '💧',
  '立水栓': '🚰',
};

/**
 * カテゴリ名から絵文字を取得
 */
export const getCategoryEmoji = (categoryName: string): string => {
  // 完全一致
  if (CATEGORY_EMOJI_MAP[categoryName]) {
    return CATEGORY_EMOJI_MAP[categoryName];
  }
  // 部分一致
  for (const [key, emoji] of Object.entries(CATEGORY_EMOJI_MAP)) {
    if (categoryName.includes(key) || key.includes(categoryName)) {
      return emoji;
    }
  }
  return '📦';
};

/**
 * 素材タイプ用絵文字を取得
 */
export const getMaterialTypeEmoji = (material: string): string => {
  if (material.includes('タイル')) return '🪨';
  if (material.includes('塗り')) return '🖌️';
  if (material.includes('サイディング')) return '🏠';
  if (material.includes('フローリング')) return '🪵';
  if (material.includes('畳')) return '🟩';
  return '🧱';
};

// 専用セレクタを使用するカテゴリ
export const SPECIAL_SELECTOR_CATEGORIES = [
  '玄関ドア',
  'オリジナルダイニングテーブル',
  '階段',
  'ベース建具',
  'ポーチ',
  'カーテン',
  '家具',
] as const;

// サブカテゴリ選択が必要なカテゴリ
export const SUBCATEGORY_SELECTION_CATEGORIES = [
  '外壁',
  '外部設備',
  '外部建材',
  'ベース床',
  '周辺部材',
] as const;

// 複数色選択が必要なカテゴリ
export const MULTI_COLOR_CATEGORIES = [
  '外壁',
  '軒天',
  '壁クロス',
  '天井クロス',
] as const;

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
  { id: '軒樋', name: '軒樋', description: '横に走る樋（雨どい）' },
  { id: '竪樋', name: '竪樋', description: '縦に走る樋（雨どい）' },
  { id: '土台水切', name: '土台水切', description: '基礎と外壁の境目' },
  { id: 'パラペット笠木', name: 'パラペット笠木', description: '陸屋根の立ち上がり部分' },
  { id: 'バルコニー笠木', name: 'バルコニー笠木', description: 'バルコニー手すり上部' },
  { id: '破風', name: '破風', description: '屋根の妻側部分' },
] as const;

// ベース床タイプ
export const BASE_FLOOR_TYPES = [
  { id: 'フローリング', name: 'フローリング', description: '木目調の床材' },
  { id: 'フロアタイル', name: 'フロアタイル', description: '水回り対応' },
  { id: 'カーペットタイル', name: 'カーペットタイル', description: 'クッション性あり' },
  { id: '磁器タイル', name: '磁器タイル', description: '玄関・土間用' },
] as const;

// 周辺部材タイプ
export const PERIPHERAL_PARTS_TYPES = [
  { id: '窓台', name: '窓台', description: '窓枠部材' },
  { id: '巾木', name: '巾木', description: '床と壁の境目' },
  { id: '腰壁笠木', name: '腰壁笠木', description: '腰壁がある場合のみ', optional: true },
] as const;

// ガレージシャッターオプション
export const GARAGE_SHUTTER_OPTIONS = [
  { id: 'garage-shutter-no', name: 'なし', description: 'ガレージシャッター不要', productId: 'ext-garage-shutter-none' },
  { id: 'garage-shutter-sunauto', name: 'サンオートハイスピード', description: '静かでスピーディ（開閉約12秒）', productId: 'ext-garage-shutter-sunauto' },
  { id: 'garage-shutter-ifudo', name: '威風堂々', description: '重厚感のある木目調デザイン', productId: 'ext-garage-shutter-ifudo' },
] as const;

// 庇オプション
export const AWNING_OPTIONS = [
  { id: 'awning-no', name: 'なし', description: '庇不要', productId: 'ext-awning-none' },
  { id: 'awning-ad2s', name: 'アルフィン庇 AD2S', description: 'シンプルなアルミ庇', productId: 'ext-awning-alfin-ad2s' },
  { id: 'awning-af95', name: 'アルフィン庇 AF95', description: '木目調仕上げ', productId: 'ext-awning-alfin-af95' },
] as const;

// 太陽光オプション
export const SOLAR_OPTIONS = [
  { id: 'solar-no', name: 'なし', description: '太陽光パネルを設置しない', productId: 'ext-solar-none' },
  { id: 'solar-yes', name: 'あり', description: '太陽光パネルを設置（金額は資金計画書に記載）', productId: 'ext-solar-yes' },
] as const;

// 蓄電池オプション
export const BATTERY_OPTIONS = [
  { id: 'battery-no', name: 'なし', description: '蓄電池を設置しない', productId: 'ext-battery-none' },
  { id: 'battery-sumitomo', name: '住友電工', description: '住友電工製蓄電池', productId: 'ext-battery-sumitomo' },
  { id: 'battery-other', name: 'その他', description: 'その他メーカー蓄電池', productId: 'ext-battery-other' },
] as const;

// V2Hオプション
export const V2H_OPTIONS = [
  { id: 'v2h-no', name: 'なし', description: 'V2Hを設置しない', productId: 'ext-v2h-none' },
  { id: 'v2h-yes', name: 'あり', description: 'V2H（電気自動車充放電設備）を設置', productId: 'ext-v2h-yes' },
] as const;

// 複数色選択カテゴリ名（面積指定）
export const MULTI_COLOR_CATEGORY_NAMES: readonly string[] = [
  '外壁',           // 外装 - 素材タイプ選択後
  '軒天',           // 外装
  '壁材',           // 内装
];

// 部屋適用選択カテゴリ名
export const ROOM_BASED_CATEGORY_NAMES: readonly string[] = [
  'ベース床',             // 内装 - 素材タイプ選択後
  'ベースクロス（壁）',   // 内装
  'ベースクロス（天井）', // 内装
  '床下点検口',           // 内装 - どの部屋に設置するか
  '天井点検口',           // 内装 - どの部屋に設置するか
  '換気',                 // 内装 - どの部屋に設置するか
];

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
  if (CATEGORY_EMOJI_MAP[categoryName]) {
    return CATEGORY_EMOJI_MAP[categoryName];
  }
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

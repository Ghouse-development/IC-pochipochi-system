// カテゴリ表示順序設定
// 各カタログタイプごとにカテゴリの表示順序を定義

export interface CategoryOrderConfig {
  name: string;
  icon?: string;
  subcategoryOrder?: string[];
}

// 外装カテゴリ順序
export const EXTERIOR_CATEGORY_ORDER: CategoryOrderConfig[] = [
  {
    name: '外壁',
    icon: '🏠',
    subcategoryOrder: [
      'モナビストーンV',
      'リーガストーン調V',
      'ボルブストーン調V',
      'シャルムロックV',
      'ルボン プレミアム',
      'モエンエクセラード16 Fuge',
      'COOL イルミオ',
      '新フラット16',
      'カンターピレ',
      'アルテミュール',
      'ジョリパットネオ∞',
      'SOLIDO',
      'SPビレクト',
      'ガルスパン',
      '窯業系サイディング',
    ]
  },
  {
    name: '屋根',
    icon: '🏛️',
    subcategoryOrder: ['屋根材']
  },
  {
    name: '窓',
    icon: '🪟',
    subcategoryOrder: [
      'APW430',
      'APW330',
      '窓オプション',
      '窓追加',
    ]
  },
  {
    name: '玄関ドア',
    icon: '🚪',
    subcategoryOrder: [
      'ヴェナートD30 N08',
      'ヴェナートD30 N18',
      'ヴェナートD30 N15',
      'ヴェナートD30 C10',
      'ヴェナートD30',
      '玄関ドアオプション',
    ]
  },
  {
    name: '樋',
    icon: '💧',
    subcategoryOrder: ['横樋', '縦樋']
  },
  {
    name: '軒天',
    icon: '📐',
    subcategoryOrder: [
      'エンボス',
      'アルテザート',
      'ラフォーレソレイユ',
      'ラフォーレティンバー',
    ]
  },
  {
    name: 'ポーチ',
    icon: '🚶',
    subcategoryOrder: [
      'メンフィス',
      'モルタル',
      'ネイチャーⅡ',
      'ベスパ',
      'ランドストン',
      'ピエトラソーニ',
    ]
  },
  {
    name: '庇',
    icon: '🏗️',
    subcategoryOrder: ['アルミ庇']
  },
  {
    name: 'ガレージシャッター',
    icon: '🚗',
    subcategoryOrder: ['ガレージシャッター', 'ガレージシャッターオプション']
  },
  {
    name: '外部設備',
    icon: '🔌',
    subcategoryOrder: [
      '外部コンセント',
      '外部水栓',
      '外部配管',
      '防犯カメラ',
      'アンテナ',
      '外部設備',
    ]
  },
  {
    name: '換気システム',
    icon: '🌀',
    subcategoryOrder: ['換気ガラリ', 'DSDD給気口']
  },
  {
    name: 'エコキュート',
    icon: '♨️',
    subcategoryOrder: [
      'エコキュート',
      'おひさまエコキュート',
      'ナイアガラ出湯',
    ]
  },
  {
    name: '太陽光・蓄電池',
    icon: '☀️',
    subcategoryOrder: ['太陽光パネル', '蓄電池', '中継ポール']
  },
];

// 内装カテゴリ順序
export const INTERIOR_CATEGORY_ORDER: CategoryOrderConfig[] = [
  {
    name: '床材',
    icon: '🪵',
    subcategoryOrder: [
      'ライブナチュラルMSX',
      'ライブナチュラルプラス',
      'エクオスピュアシルク',
      'フローリング',
    ]
  },
  {
    name: '壁材',
    icon: '🧱',
    subcategoryOrder: ['クロス', 'アクセントクロス', 'タイル']
  },
  {
    name: '建具',
    icon: '🚪',
    subcategoryOrder: [
      '室内ドア',
      'クローゼットドア',
      '引き戸',
      'ドアノブ',
    ]
  },
  {
    name: '収納',
    icon: '🗄️',
    subcategoryOrder: [
      'クローゼット',
      'シューズボックス',
      '収納棚',
      '可動棚',
    ]
  },
  {
    name: '階段',
    icon: '🪜',
    subcategoryOrder: ['階段', '手すり']
  },
  {
    name: '窓装飾',
    icon: '🪞',
    subcategoryOrder: ['カーテンレール', 'ブラインド', 'ロールスクリーン']
  },
  {
    name: '家具',
    icon: '🪑',
    subcategoryOrder: ['ダイニングテーブル', 'カウンター']
  },
  {
    name: '照明',
    icon: '💡',
    subcategoryOrder: ['ダウンライト', 'シーリングライト', 'ペンダントライト']
  },
  {
    name: 'コンセント・スイッチ',
    icon: '🔌',
    subcategoryOrder: ['コンセント', 'スイッチ', 'マルチメディア']
  },
];

// 水回りカテゴリ順序
export const WATER_CATEGORY_ORDER: CategoryOrderConfig[] = [
  {
    name: 'キッチン',
    icon: '🍳',
    subcategoryOrder: [
      'システムキッチン',
      'レンジフード',
      'IHコンロ',
      '食洗機',
      '水栓',
    ]
  },
  {
    name: '浴室',
    icon: '🛁',
    subcategoryOrder: [
      'ユニットバス',
      '浴槽',
      'シャワー',
      '浴室乾燥機',
    ]
  },
  {
    name: '洗面',
    icon: '🪥',
    subcategoryOrder: [
      '洗面台',
      '洗面ボウル',
      '洗面水栓',
      '洗面ミラー',
    ]
  },
  {
    name: 'トイレ',
    icon: '🚽',
    subcategoryOrder: [
      'トイレ',
      '手洗い器',
      'トイレアクセサリー',
    ]
  },
];

/**
 * カテゴリをソートする
 */
export function sortCategories(
  categories: { name: string; subcategories: string[] }[],
  orderConfig: CategoryOrderConfig[]
): { name: string; subcategories: string[]; icon?: string }[] {
  const orderMap = new Map(orderConfig.map((c, i) => [c.name, { order: i, config: c }]));

  return categories
    .map(cat => {
      const config = orderMap.get(cat.name);
      return {
        ...cat,
        icon: config?.config.icon,
        _order: config?.order ?? 999,
        subcategories: sortSubcategories(cat.subcategories, config?.config.subcategoryOrder)
      };
    })
    .sort((a, b) => a._order - b._order)
    .map(({ _order, ...rest }) => rest);
}

/**
 * サブカテゴリをソートする
 */
function sortSubcategories(subcategories: string[], order?: string[]): string[] {
  if (!order) return subcategories.sort();

  const orderMap = new Map(order.map((s, i) => [s, i]));

  return [...subcategories].sort((a, b) => {
    const orderA = orderMap.get(a) ?? 999;
    const orderB = orderMap.get(b) ?? 999;
    if (orderA !== orderB) return orderA - orderB;
    return a.localeCompare(b, 'ja');
  });
}

/**
 * カタログタイプに応じたカテゴリ順序設定を取得
 */
export function getCategoryOrderConfig(catalogType: 'exterior' | 'interior' | 'water'): CategoryOrderConfig[] {
  switch (catalogType) {
    case 'exterior':
      return EXTERIOR_CATEGORY_ORDER;
    case 'interior':
      return INTERIOR_CATEGORY_ORDER;
    case 'water':
      return WATER_CATEGORY_ORDER;
    default:
      return [];
  }
}

/**
 * 床色に基づく周辺部材の色おすすめ設定
 *
 * 笠木、巾木、窓台、玄関框などの周辺部材は床色に合わせて選ぶと統一感が出る
 */

// 床色のカテゴリ分類
export type FloorColorTone = 'light' | 'medium' | 'dark' | 'gray';

// 床色のパターン（部分一致で判定）
const FLOOR_COLOR_PATTERNS: Record<FloorColorTone, string[]> = {
  light: [
    'ホワイト', 'アイボリー', 'シュガー', 'メイプル',
    'ドライメイプル', 'ハードメイプル', 'バーチ', 'アッシュ',
    'ナチュラル', 'ペール', 'ライト'
  ],
  medium: [
    'オーク', 'チェリー', 'エイジド', 'カーム', 'ヒッコリー',
    'ウォッシュド', 'チーク', 'アカシア', 'ナラ',
    'ブラックチェリー', 'ラスティック'
  ],
  dark: [
    'ウォールナット', 'ウォルナット', 'ブラック', 'ダーク',
    'エボニー', 'ダークブラウン', 'ソイル'
  ],
  gray: [
    'グレー', 'グレージュ', 'ミッドグレー', 'モルタル',
    'テラゾーグレー', 'ピエトラグレー', 'パール'
  ]
};

// 周辺部材の色おすすめ（床色トーン別）
const PERIPHERAL_COLOR_RECOMMENDATIONS: Record<FloorColorTone, {
  primary: string[];    // 最もおすすめ
  secondary: string[];  // 次点
}> = {
  light: {
    primary: ['ホワイト', 'しっくいホワイト', 'シルキーホワイト'],
    secondary: ['パールグレー', 'ステン', 'プラチナステン']
  },
  medium: {
    primary: ['ホワイト', 'しっくいホワイト'],  // ナチュラルな床には白が合う
    secondary: ['ブラウン', 'ファッションブラウン', 'パールグレー']
  },
  dark: {
    primary: ['ブラック', 'ソイルブラック'],
    secondary: ['プラチナステン', 'ステンカラー', 'ブラウン']
  },
  gray: {
    primary: ['パールグレー', 'ステンカラー', 'プラチナステン'],
    secondary: ['ホワイト', 'しっくいホワイト', 'ブラック']
  }
};

/**
 * 床色からトーンを判定
 */
export function getFloorColorTone(floorColor: string): FloorColorTone {
  // ダーク系を先にチェック（ブラックチェリーはmediumなのでブラックより先に）
  for (const [tone, patterns] of Object.entries(FLOOR_COLOR_PATTERNS) as [FloorColorTone, string[]][]) {
    for (const pattern of patterns) {
      if (floorColor.includes(pattern)) {
        return tone;
      }
    }
  }
  // デフォルトはmedium
  return 'medium';
}

/**
 * 床色に基づいて周辺部材の色をおすすめ順でソート
 */
export function sortColorsByRecommendation(
  variants: { id: string; color: string }[],
  floorColor: string
): { id: string; color: string; isRecommended: boolean; isPrimary: boolean }[] {
  const tone = getFloorColorTone(floorColor);
  const recommendations = PERIPHERAL_COLOR_RECOMMENDATIONS[tone];

  return variants.map(variant => {
    const isPrimary = recommendations.primary.some(rec =>
      variant.color.includes(rec) || rec.includes(variant.color)
    );
    const isSecondary = recommendations.secondary.some(rec =>
      variant.color.includes(rec) || rec.includes(variant.color)
    );

    return {
      ...variant,
      isRecommended: isPrimary || isSecondary,
      isPrimary
    };
  }).sort((a, b) => {
    // Primary > Secondary > その他
    if (a.isPrimary && !b.isPrimary) return -1;
    if (!a.isPrimary && b.isPrimary) return 1;
    if (a.isRecommended && !b.isRecommended) return -1;
    if (!a.isRecommended && b.isRecommended) return 1;
    return 0;
  });
}

/**
 * 周辺部材カテゴリかどうかを判定
 */
export function isPeripheralCategory(categoryName: string, subcategory?: string): boolean {
  const peripheralCategories = ['周辺部材', '外部建材'];
  const peripheralSubcategories = [
    '巾木', '窓台', '玄関框', '床見切り', '腰壁笠木',
    'パラペット笠木', 'バルコニー笠木', '軒樋', '竪樋', '土台水切'
  ];

  if (peripheralCategories.some(cat => categoryName.includes(cat))) {
    return true;
  }

  if (subcategory && peripheralSubcategories.some(sub => subcategory.includes(sub))) {
    return true;
  }

  return false;
}

/**
 * おすすめ色のラベルを取得
 */
export function getColorRecommendationLabel(floorColor: string): string {
  const tone = getFloorColorTone(floorColor);

  switch (tone) {
    case 'light':
      return '明るい床色に合わせて白系がおすすめ';
    case 'medium':
      return 'ナチュラルな床色に合わせて白系がおすすめ';
    case 'dark':
      return 'ダークな床色に合わせて黒系がおすすめ';
    case 'gray':
      return 'グレー系の床色に合わせてグレー系がおすすめ';
  }
}

// ========================================
// 外壁色に基づく外部設備の色おすすめ
// ========================================

// 外壁色のカテゴリ分類
export type WallColorTone = 'light' | 'medium' | 'dark' | 'gray';

// 外壁色のパターン（部分一致で判定）
const WALL_COLOR_PATTERNS: Record<WallColorTone, string[]> = {
  light: [
    'ホワイト', 'アイボリー', 'ベージュ', 'クリーム',
    'シルキーホワイト', 'ミルキーホワイト', 'ライト', 'ペール'
  ],
  medium: [
    'サンド', 'テラコッタ', 'オレンジ', 'ブラウン',
    'カーム', 'ナチュラル', 'オーク', 'トープ'
  ],
  dark: [
    'ブラック', 'ダーク', 'チャコール', 'ネイビー',
    'グレー', 'ガンメタ', 'アンスラサイト'
  ],
  gray: [
    'グレー', 'グレージュ', 'シルバー', 'プラチナ',
    'ステン', 'アルミ', 'モルタル'
  ]
};

// 外部設備の色おすすめ（外壁色トーン別）
const EXTERIOR_EQUIPMENT_COLOR_RECOMMENDATIONS: Record<WallColorTone, {
  primary: string[];    // 最もおすすめ
  secondary: string[];  // 次点
}> = {
  light: {
    primary: ['ホワイト', 'アイボリー'],
    secondary: ['ブラウン']
  },
  medium: {
    primary: ['ブラウン', 'アイボリー'],
    secondary: ['ホワイト']
  },
  dark: {
    primary: ['ブラック'],
    secondary: ['ブラウン']
  },
  gray: {
    primary: ['ブラック', 'ホワイト'],
    secondary: ['アイボリー']
  }
};

/**
 * 外壁色からトーンを判定
 */
export function getWallColorTone(wallColor: string): WallColorTone {
  for (const [tone, patterns] of Object.entries(WALL_COLOR_PATTERNS) as [WallColorTone, string[]][]) {
    for (const pattern of patterns) {
      if (wallColor.includes(pattern)) {
        return tone;
      }
    }
  }
  // デフォルトはlight（白系外壁が多い）
  return 'light';
}

/**
 * 外壁色に基づいて外部設備の色をおすすめ順でソート
 */
export function sortExteriorEquipmentColorsByRecommendation(
  variants: { id: string; color: string }[],
  wallColor: string
): { id: string; color: string; isRecommended: boolean; isPrimary: boolean }[] {
  const tone = getWallColorTone(wallColor);
  const recommendations = EXTERIOR_EQUIPMENT_COLOR_RECOMMENDATIONS[tone];

  return variants.map(variant => {
    const isPrimary = recommendations.primary.some(rec =>
      variant.color.includes(rec) || rec.includes(variant.color)
    );
    const isSecondary = recommendations.secondary.some(rec =>
      variant.color.includes(rec) || rec.includes(variant.color)
    );

    return {
      ...variant,
      isRecommended: isPrimary || isSecondary,
      isPrimary
    };
  }).sort((a, b) => {
    // Primary > Secondary > その他
    if (a.isPrimary && !b.isPrimary) return -1;
    if (!a.isPrimary && b.isPrimary) return 1;
    if (a.isRecommended && !b.isRecommended) return -1;
    if (!a.isRecommended && b.isRecommended) return 1;
    return 0;
  });
}

/**
 * 外部設備カテゴリかどうかを判定（色おすすめ対象）
 */
export function isExteriorEquipmentCategory(_categoryName: string, subcategory?: string): boolean {
  const exteriorEquipmentSubcategories = [
    '外部コンセント', 'EV用コンセント', 'エアコンスリーブキャップ',
    '換気フード', '換気ガラリ'
  ];

  if (subcategory && exteriorEquipmentSubcategories.some(sub => subcategory.includes(sub))) {
    return true;
  }

  return false;
}

/**
 * 外壁色に基づくおすすめ色のラベルを取得
 */
export function getWallColorRecommendationLabel(wallColor: string): string {
  const tone = getWallColorTone(wallColor);

  switch (tone) {
    case 'light':
      return '白系の外壁に合わせてホワイト・アイボリーがおすすめ';
    case 'medium':
      return 'ナチュラルな外壁に合わせてブラウン・アイボリーがおすすめ';
    case 'dark':
      return 'ダークな外壁に合わせてブラックがおすすめ';
    case 'gray':
      return 'グレー系の外壁に合わせてブラック・ホワイトがおすすめ';
  }
}

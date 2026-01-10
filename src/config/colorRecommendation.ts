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

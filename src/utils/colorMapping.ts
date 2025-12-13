// 色名からHEX値へのマッピング
// 日本語色名・英語色名・メーカーコードに対応

export const COLOR_MAP: Record<string, string> = {
  // === 基本色 ===
  'ホワイト': '#FFFFFF',
  'ピュアホワイト': '#FAFAFA',
  'クリアホワイト': '#F8F8FF',
  'オフホワイト': '#FAF0E6',
  'ミルクホワイト': '#FFFEF0',
  'アイボリー': '#FFFFF0',
  'クリーム': '#FFFDD0',
  'ベージュ': '#F5F5DC',
  'サンドベージュ': '#E8DCC4',

  // === グレー系 ===
  'グレー': '#808080',
  'ライトグレー': '#D3D3D3',
  'パールグレー': '#C4C4C4',
  'シルバー': '#C0C0C0',
  'プラチナステン': '#B8B8B8',
  'メタリックシルバー': '#A8A8A8',
  'メタリックグレー': '#888888',
  'チャコール': '#4A4A4A',
  'ダークグレー': '#3C3C3C',

  // === ブラック系 ===
  'ブラック': '#2C2C2C',
  'カームブラック': '#1A1A1A',
  'マットブラック': '#282828',

  // === ブラウン系 ===
  'ブラウン': '#8B4513',
  'ダークブラウン': '#5C4033',
  'ライトブラウン': '#A0522D',
  'モカ': '#6F4E37',
  'ウォールナット': '#5D432C',
  'ショコラウォールナット': '#4A3728',
  'チーク': '#B8860B',
  'キャラメルチーク': '#C68E17',
  'チェリー': '#8B0000',
  'ハニーチェリー': '#CD5C5C',
  'オーク': '#D2B48C',
  'オークブラウン': '#A67B5B',
  'ナチュラル': '#DEB887',
  'ノーチェ': '#8B7355',
  'アイスブルーノーチェ': '#7B8B9B',
  'ブロンズ': '#CD7F32',
  'シャンパンブロンズ': '#D4AF37',

  // === ブルー系 ===
  'ブルー': '#0000FF',
  'ネイビー': '#000080',
  'ネイビーブルー': '#1F2F4F',
  'ライトブルー': '#87CEEB',
  'グレイッシュグリーン': '#6B8E6B',
  'ブルーグリーン': '#008080',

  // === レッド・オレンジ系 ===
  'レッド': '#FF0000',
  'ボルドー': '#800020',
  'オレンジ': '#FFA500',
  'マスタード': '#FFDB58',
  'しんちゃ': '#8B2500',

  // === 木目・自然系 ===
  'レッドシダーナチュラル': '#B87333',
  'レッドシダーエイジング': '#8B6914',

  // === メーカーコード (YKKAP等) ===
  'YW': '#FFFFFF',      // ホワイト
  'J5': '#8B4513',      // ブラウン
  'JO': '#B8B8B8',      // プラチナステン
  '3A': '#2C2C2C',      // ブラック
  'OC': '#2C2C2C',      // ブラック
  'WM': '#FFFFFF',      // ホワイト(内観)
  'DG': '#3C3C3C',      // ダークグレー

  // === マンセル値からの変換（近似） ===
  'N9': '#E5E5E5',
  'N8': '#CCCCCC',
  'N7': '#B3B3B3',
  'N6': '#999999',
  'N5': '#808080',
  'N4': '#666666',
  'N3.5': '#595959',
  'N3': '#4D4D4D',
  'N2': '#333333',

  // === 製品固有色 ===
  // 外壁
  'フローMGグレー': '#8B8C8E',
  'フローMGブラック': '#2C2C2E',
  'フローMGクリアホワイト': '#FAFBFC',
  'フローMGホワイト': '#F5F5F3',
  'フローMGクリーム': '#FFF8DC',
  'フローMGネイビー': '#2F3E4C',
  'ランダMGプラチナ': '#C0C0C0',
  'ランダMGブラック': '#3D3D3D',
  'ランダMGトリュフ': '#8B7355',
  'ランダMGラテ': '#D4C4A8',
  'ランダMGパウダー': '#E8E8E0',
  'エアルMGスノー': '#F0F0F0',

  // 軒天
  'エンボスホワイト': '#FAFAFA',
  'エンボスブラック': '#2A2A2A',
  'エンボスグレー': '#808080',
  'エンボスベージュ': '#E8DCC4',

  // ポーチタイル
  'MMP-11': '#E8E0D8',
  'MMP-12': '#D4C8BC',
  'MMP-13': '#A89888',
  'MMP-14': '#8B7B6B',
  'MMP-15': '#4A4A4A',

  // 換気ガラリ
  'シルバーメタリック': '#A8A8A8',
  'クリア': '#E0E0E0',

  // デフォルト（マッチしない場合）
  '標準': '#CCCCCC',
  '標準色': '#CCCCCC',
};

/**
 * 色名またはコードからHEX値を取得
 * @param colorName 色名、メーカーコード、またはcolorCode値
 * @returns HEX値（見つからない場合はデフォルトグレー）
 */
export function getHexColor(colorName: string | undefined): string {
  if (!colorName) return '#CCCCCC';

  // 直接マッチ
  if (COLOR_MAP[colorName]) {
    return COLOR_MAP[colorName];
  }

  // 既にHEX値の場合はそのまま返す
  if (colorName.startsWith('#') && (colorName.length === 4 || colorName.length === 7)) {
    return colorName;
  }

  // 部分マッチを試みる（「〇〇ホワイト」→「ホワイト」）
  const partialMatches = [
    'ホワイト', 'ブラック', 'グレー', 'ブラウン', 'ベージュ',
    'ネイビー', 'ブルー', 'シルバー', 'ナチュラル', 'オーク'
  ];

  for (const match of partialMatches) {
    if (colorName.includes(match)) {
      return COLOR_MAP[match] || '#CCCCCC';
    }
  }

  // マンセル値のパターン（例: "5Y 7/1", "10YR 8/2"）
  const munsellPattern = /^[\d.]+[A-Z]+\s+[\d.]+\/[\d.]+$/;
  if (munsellPattern.test(colorName)) {
    // 明度（Y値の前の数字）から大まかなグレースケールを返す
    const parts = colorName.split(' ');
    if (parts.length >= 2) {
      const lightness = parseFloat(parts[1].split('/')[0]);
      const grayValue = Math.round(lightness * 25.5);
      const hex = grayValue.toString(16).padStart(2, '0');
      return `#${hex}${hex}${hex}`;
    }
  }

  return '#CCCCCC';
}

/**
 * 色が明るいかどうかを判定（テキスト色の決定用）
 */
export function isLightColor(hexColor: string): boolean {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
}

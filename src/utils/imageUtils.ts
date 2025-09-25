// 画像関連のユーティリティ関数

/**
 * 製品画像のプレースホルダーを生成
 */
export const generateProductPlaceholder = (productName: string, color?: string): string => {
  const svgContent = `
    <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f0f9ff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e0f2fe;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#bg)"/>
      <rect x="250" y="150" width="100" height="100" fill="#dbeafe" rx="10"/>
      <text x="50%" y="45%" text-anchor="middle" dy=".3em" fill="#64748b" font-family="system-ui" font-size="18" font-weight="500">
        ${productName}
      </text>
      ${color ? `<text x="50%" y="55%" text-anchor="middle" dy=".3em" fill="#94a3b8" font-family="system-ui" font-size="14">
        ${color}
      </text>` : ''}
    </svg>
  `;

  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgContent)))}`;
};

/**
 * サムネイル画像のプレースホルダーを生成
 */
export const generateThumbnailPlaceholder = (productName: string, colorCode?: string): string => {
  const bgColor = colorCode || '#e2e8f0';
  const textColor = isLightColor(bgColor) ? '#334155' : '#f1f5f9';

  const svgContent = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="${bgColor}"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}" font-family="system-ui" font-size="14" font-weight="500" opacity="0.7">
        ${productName.slice(0, 2).toUpperCase()}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgContent)))}`;
};

/**
 * 色の明度を判定
 */
function isLightColor(color: string): boolean {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128;
}

/**
 * 画像読み込みエラー時のハンドラー
 */
export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement>,
  fallbackSrc: string
) => {
  const img = event.currentTarget;
  if (img.src !== fallbackSrc) {
    img.src = fallbackSrc;
  }
};

/**
 * 画像URLの検証とフォールバック
 */
export const getImageUrl = (
  url: string | undefined,
  productName: string,
  color?: string
): string => {
  if (!url || url === '') {
    return generateProductPlaceholder(productName, color);
  }
  return url;
};

/**
 * サムネイルURLの検証とフォールバック
 */
export const getThumbnailUrl = (
  url: string | undefined,
  productName: string,
  colorCode?: string
): string => {
  if (!url || url === '') {
    return generateThumbnailPlaceholder(productName, colorCode);
  }
  return url;
};
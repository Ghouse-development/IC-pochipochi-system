/**
 * エクスポート共通ユーティリティ
 * CSV/Excelインジェクション対策、HTML XSS対策を含む
 */

/**
 * CSVインジェクション対策
 * Excelで数式として解釈される文字（=, +, -, @, タブ, CR）を無害化
 */
export function sanitizeForCSV(value: unknown): string {
  if (value === null || value === undefined) return '';

  const str = String(value);

  // 数式インジェクション対策: 危険な先頭文字をエスケープ
  const dangerousChars = ['=', '+', '-', '@', '\t', '\r', '\n'];
  if (dangerousChars.some(char => str.startsWith(char))) {
    return `'${str}`; // シングルクォートでプレフィックス
  }

  return str;
}

/**
 * HTMLエスケープ（XSS対策）
 */
export function escapeHtml(value: unknown): string {
  if (value === null || value === undefined) return '';

  const str = String(value);
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };

  return str.replace(/[&<>"']/g, char => htmlEscapes[char] || char);
}

/**
 * CSVセル値のフォーマット（カンマ、改行、ダブルクォート対応）
 */
export function formatCSVCell(value: unknown): string {
  const sanitized = sanitizeForCSV(value);

  // カンマ、改行、ダブルクォートを含む場合はダブルクォートで囲む
  if (sanitized.includes(',') || sanitized.includes('\n') || sanitized.includes('"')) {
    return `"${sanitized.replace(/"/g, '""')}"`;
  }

  return sanitized;
}

/**
 * CSV文字列を生成
 */
export function generateCSV(headers: string[], rows: unknown[][]): string {
  const headerLine = headers.map(formatCSVCell).join(',');
  const dataLines = rows.map(row => row.map(formatCSVCell).join(','));

  return [headerLine, ...dataLines].join('\n');
}

/**
 * ファイルダウンロード処理（共通）
 */
export function downloadFile(
  content: string | Blob,
  filename: string,
  mimeType: string = 'text/plain'
): void {
  const blob = content instanceof Blob
    ? content
    : new Blob([content], { type: mimeType });

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = filename;
  link.style.display = 'none';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // メモリリーク防止
  URL.revokeObjectURL(url);
}

/**
 * CSVファイルをダウンロード（BOM付きUTF-8）
 */
export function downloadCSV(
  headers: string[],
  rows: unknown[][],
  filename: string
): void {
  const csvContent = generateCSV(headers, rows);
  const bom = '\uFEFF'; // UTF-8 BOM（Excelの文字化け対策）

  downloadFile(
    bom + csvContent,
    filename.endsWith('.csv') ? filename : `${filename}.csv`,
    'text/csv;charset=utf-8;'
  );
}

/**
 * 日付フォーマット（日本語）
 */
export function formatDateJP(date: Date = new Date()): string {
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

/**
 * タイムスタンプ付きファイル名を生成
 */
export function generateTimestampFilename(
  baseName: string,
  extension: string
): string {
  const timestamp = new Date().getTime();
  return `${baseName}_${timestamp}.${extension}`;
}

/**
 * 価格フォーマット（エクスポート用）
 */
export function formatPriceForExport(price: number): string {
  if (price === 0) return '標準仕様';
  return `¥${price.toLocaleString()}`;
}

/**
 * カタログタイプ名を取得
 */
export function getCatalogTypeName(
  catalogType: 'exterior' | 'interior' | 'water' | string
): string {
  const names: Record<string, string> = {
    exterior: 'エクステリア',
    interior: 'インテリア',
    water: '水廻り',
  };
  return names[catalogType] || catalogType;
}

/**
 * HTMLテーブル生成（XSS対策済み）
 */
export function generateHTMLTable(
  headers: string[],
  rows: unknown[][],
  title?: string
): string {
  const headerCells = headers
    .map(h => `<th style="border:1px solid #ddd;padding:8px;background:#f5f5f5;">${escapeHtml(h)}</th>`)
    .join('');

  const bodyRows = rows
    .map(row => {
      const cells = row
        .map(cell => `<td style="border:1px solid #ddd;padding:8px;">${escapeHtml(cell)}</td>`)
        .join('');
      return `<tr>${cells}</tr>`;
    })
    .join('');

  return `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>${escapeHtml(title || 'エクスポート')}</title>
  <style>
    body { font-family: 'Hiragino Sans', 'Yu Gothic', sans-serif; padding: 20px; }
    table { border-collapse: collapse; width: 100%; }
    th, td { text-align: left; }
    h1 { font-size: 18px; margin-bottom: 10px; }
    .meta { color: #666; font-size: 12px; margin-bottom: 20px; }
  </style>
</head>
<body>
  ${title ? `<h1>${escapeHtml(title)}</h1>` : ''}
  <p class="meta">出力日: ${formatDateJP()}</p>
  <table>
    <thead><tr>${headerCells}</tr></thead>
    <tbody>${bodyRows}</tbody>
  </table>
</body>
</html>`;
}

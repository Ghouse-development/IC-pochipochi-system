import { loadXLSX } from '../lib/xlsxLoader';
import { sanitizeForCSV } from './exportUtils';
import type { Product, CartItem } from '../types/product';

export type ExportFormat = 'excel' | 'csv' | 'json' | 'pdf';

export interface ExportOptions {
  format: ExportFormat;
  includeImages?: boolean;
  includeVariants?: boolean;
  selectedOnly?: boolean;
  template?: 'default' | 'simple' | 'detailed' | 'quotation';
}

// フォーマット価格
const formatPriceForExport = (price: number): string => {
  if (price === 0) return '標準仕様';
  return `¥${price.toLocaleString()}`;
};

export const exportProductsToExcel = async (products: Product[], catalogType: string) => {
  const XLSX = await loadXLSX();
  // ワークブックの作成
  const wb = XLSX.utils.book_new();
  
  // ヘッダー情報
  const headerData = [
    [`${catalogType === 'exterior' ? 'エクステリア' : catalogType === 'interior' ? 'インテリア' : '水廻り'} 商品一覧`],
    [`出力日: ${new Date().toLocaleDateString('ja-JP')}`],
    [''],
    ['カテゴリ', '商品名', 'メーカー', '品番', '価格', '単位', 'タイプ', '色展開', '備考']
  ];

  // 商品データの整形
  const productData = products.map((product) => [
    product.categoryName,
    product.name,
    product.manufacturer,
    product.modelNumber || '',
    product.pricing.find(p => p.plan === 'LACIE' || p.planId === 'LACIE')?.price || 0,
    product.unit,
    product.isOption ? 'オプション' : '標準',
    product.variants?.map(v => v.color).filter(c => c).join(', ') || '',
    product.description || ''
  ]);

  // データを結合
  const wsData = [...headerData, ...productData];

  // ワークシートの作成
  const ws = XLSX.utils.aoa_to_sheet(wsData);

  // 列幅の設定
  ws['!cols'] = [
    { wch: 20 }, // カテゴリ
    { wch: 30 }, // 商品名
    { wch: 20 }, // メーカー
    { wch: 15 }, // 品番
    { wch: 12 }, // 価格
    { wch: 10 }, // 単位
    { wch: 12 }, // タイプ
    { wch: 30 }, // 色展開
    { wch: 40 }  // 備考
  ];

  // ワークシートをワークブックに追加
  XLSX.utils.book_append_sheet(wb, ws, '商品一覧');

  // ファイルのダウンロード
  const catalogName = catalogType === 'exterior' ? 'エクステリア' :
                      catalogType === 'interior' ? 'インテリア' : '水廻り';
  XLSX.writeFile(wb, `商品一覧_${catalogName}_${new Date().getTime()}.xlsx`);
};

export const exportProductsToCSV = (products: Product[], catalogType: string) => {
  // CSVヘッダー
  const headers = ['カテゴリ', '商品名', 'メーカー', '品番', '価格', '単位', 'タイプ', '色展開', '備考'];

  // データ行の作成（CSVインジェクション対策済み）
  const rows = products.map(product => [
    sanitizeForCSV(product.categoryName),
    sanitizeForCSV(product.name),
    sanitizeForCSV(product.manufacturer),
    sanitizeForCSV(product.modelNumber || ''),
    product.pricing.find(p => p.plan === 'LACIE' || p.planId === 'LACIE')?.price || 0,
    sanitizeForCSV(product.unit),
    product.isOption ? 'オプション' : '標準',
    sanitizeForCSV(product.variants?.map(v => v.color).filter(c => c).join(', ') || ''),
    sanitizeForCSV(product.description || '')
  ]);

  // CSV文字列の作成
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => {
      // セル内にカンマや改行がある場合はダブルクォートで囲む
      const cellStr = String(cell);
      if (cellStr.includes(',') || cellStr.includes('\n') || cellStr.includes('"')) {
        return `"${cellStr.replace(/"/g, '""')}"`;
      }
      return cellStr;
    }).join(','))
  ].join('\n');

  // BOMを付加（Excelで開いた時の文字化け対策）
  const bom = '\uFEFF';
  const blob = new Blob([bom + csvContent], { type: 'text/csv;charset=utf-8;' });
  
  // ダウンロード
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  const catalogName = catalogType === 'exterior' ? 'エクステリア' : 
                      catalogType === 'interior' ? 'インテリア' : '水廻り';
  link.setAttribute('href', url);
  link.setAttribute('download', `商品一覧_${catalogName}_${new Date().getTime()}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// JSON出力
export const exportProductsToJSON = (products: Product[], catalogType: string) => {
  const exportData = {
    exportDate: new Date().toISOString(),
    catalogType,
    catalogName: catalogType === 'exterior' ? 'エクステリア' :
                 catalogType === 'interior' ? 'インテリア' : '水廻り',
    totalProducts: products.length,
    products: products.map(product => ({
      id: product.id,
      name: product.name,
      category: product.categoryName,
      manufacturer: product.manufacturer,
      modelNumber: product.modelNumber,
      unit: product.unit,
      isOption: product.isOption,
      description: product.description,
      pricing: product.pricing,
      variants: product.variants?.map(v => ({
        id: v.id,
        color: v.color,
        colorCode: v.colorCode,
      })),
    })),
  };

  const jsonStr = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });

  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  const catalogName = catalogType === 'exterior' ? 'エクステリア' :
                      catalogType === 'interior' ? 'インテリア' : '水廻り';
  link.setAttribute('href', url);
  link.setAttribute('download', `商品一覧_${catalogName}_${new Date().getTime()}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// カート/注文データのエクスポート
export const exportCartToExcel = async (
  items: CartItem[],
  projectInfo?: {
    projectName?: string;
    customerName?: string;
    planType?: string;
  }
) => {
  const XLSX = await loadXLSX();
  const wb = XLSX.utils.book_new();

  // ヘッダー情報
  const headerData = [
    ['仕様一覧表'],
    [`プロジェクト: ${projectInfo?.projectName || '未設定'}`],
    [`お客様: ${projectInfo?.customerName || '未設定'}`],
    [`プランタイプ: ${projectInfo?.planType || 'LACIE'}`],
    [`出力日: ${new Date().toLocaleDateString('ja-JP')}`],
    [''],
    ['No.', 'カテゴリ', '商品名', 'メーカー', 'カラー', '数量', '単位', '単価', '金額', '備考']
  ];

  // 商品データ
  let totalAmount = 0;
  const productData = items.map((item, index) => {
    const price = item.product.pricing.find(
      p => p.plan === 'LACIE' || p.planId === 'LACIE'
    )?.price || 0;
    const amount = price * item.quantity;
    totalAmount += amount;

    return [
      index + 1,
      item.product.categoryName,
      item.product.name,
      item.product.manufacturer,
      item.selectedVariant?.color || '-',
      item.quantity,
      item.product.unit,
      price === 0 ? '標準仕様' : price,
      amount === 0 ? '標準仕様' : amount,
      item.product.isOption ? 'オプション' : ''
    ];
  });

  // 合計行
  const totalRow = ['', '', '', '', '', '', '', '合計', totalAmount, ''];

  // データを結合
  const wsData = [...headerData, ...productData, [], totalRow];

  const ws = XLSX.utils.aoa_to_sheet(wsData);

  // 列幅の設定
  ws['!cols'] = [
    { wch: 5 },   // No.
    { wch: 15 },  // カテゴリ
    { wch: 30 },  // 商品名
    { wch: 15 },  // メーカー
    { wch: 15 },  // カラー
    { wch: 8 },   // 数量
    { wch: 8 },   // 単位
    { wch: 12 },  // 単価
    { wch: 12 },  // 金額
    { wch: 15 }   // 備考
  ];

  XLSX.utils.book_append_sheet(wb, ws, '仕様一覧');
  XLSX.writeFile(wb, `仕様一覧_${projectInfo?.projectName || '未設定'}_${new Date().getTime()}.xlsx`);
};

// カートをCSVでエクスポート（CSVインジェクション対策済み）
export const exportCartToCSV = (
  items: CartItem[],
  projectInfo?: {
    projectName?: string;
    customerName?: string;
  }
) => {
  const headers = ['No.', 'カテゴリ', '商品名', 'メーカー', 'カラー', '数量', '単位', '単価', '金額'];

  let totalAmount = 0;
  const rows = items.map((item, index) => {
    const price = item.product.pricing.find(
      p => p.plan === 'LACIE' || p.planId === 'LACIE'
    )?.price || 0;
    const amount = price * item.quantity;
    totalAmount += amount;

    return [
      index + 1,
      sanitizeForCSV(item.product.categoryName),
      sanitizeForCSV(item.product.name),
      sanitizeForCSV(item.product.manufacturer),
      sanitizeForCSV(item.selectedVariant?.color || '-'),
      item.quantity,
      sanitizeForCSV(item.product.unit),
      formatPriceForExport(price),
      formatPriceForExport(amount)
    ];
  });

  const csvContent = [
    `プロジェクト: ${projectInfo?.projectName || '未設定'}`,
    `お客様: ${projectInfo?.customerName || '未設定'}`,
    `出力日: ${new Date().toLocaleDateString('ja-JP')}`,
    '',
    headers.join(','),
    ...rows.map(row => row.map(cell => {
      const cellStr = String(cell);
      if (cellStr.includes(',') || cellStr.includes('\n') || cellStr.includes('"')) {
        return `"${cellStr.replace(/"/g, '""')}"`;
      }
      return cellStr;
    }).join(',')),
    '',
    `合計,,,,,,,, ${formatPriceForExport(totalAmount)}`
  ].join('\n');

  const bom = '\uFEFF';
  const blob = new Blob([bom + csvContent], { type: 'text/csv;charset=utf-8;' });

  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `仕様一覧_${projectInfo?.projectName || '未設定'}_${new Date().getTime()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// PDF用のHTML生成（印刷用）
export const generatePrintableHTML = (
  items: CartItem[],
  projectInfo?: {
    projectName?: string;
    customerName?: string;
    planType?: string;
    companyName?: string;
    companyLogo?: string;
  }
): string => {
  let totalAmount = 0;
  const itemRows = items.map((item, index) => {
    const price = item.product.pricing.find(
      p => p.plan === 'LACIE' || p.planId === 'LACIE'
    )?.price || 0;
    const amount = price * item.quantity;
    totalAmount += amount;

    return `
      <tr>
        <td>${index + 1}</td>
        <td>${item.product.categoryName}</td>
        <td>${item.product.name}</td>
        <td>${item.product.manufacturer}</td>
        <td>${item.selectedVariant?.color || '-'}</td>
        <td class="text-right">${item.quantity}</td>
        <td>${item.product.unit}</td>
        <td class="text-right">${formatPriceForExport(price)}</td>
        <td class="text-right">${formatPriceForExport(amount)}</td>
      </tr>
    `;
  }).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>仕様一覧 - ${projectInfo?.projectName || '未設定'}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Hiragino Sans', 'Yu Gothic', sans-serif; padding: 20mm; font-size: 11pt; }
        .header { display: flex; justify-content: space-between; margin-bottom: 20px; }
        .company-info { text-align: right; }
        .title { font-size: 18pt; font-weight: bold; text-align: center; margin: 20px 0; }
        .info-table { margin-bottom: 20px; }
        .info-table td { padding: 4px 8px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #333; padding: 6px 8px; text-align: left; }
        th { background-color: #f0f0f0; }
        .text-right { text-align: right; }
        .total-row { font-weight: bold; background-color: #f5f5f5; }
        .footer { margin-top: 30px; text-align: center; font-size: 9pt; color: #666; }
        @media print {
          body { padding: 10mm; }
          @page { margin: 10mm; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="project-info">
          <table class="info-table">
            <tr><td>プロジェクト:</td><td><strong>${projectInfo?.projectName || '未設定'}</strong></td></tr>
            <tr><td>お客様名:</td><td>${projectInfo?.customerName || '未設定'} 様</td></tr>
            <tr><td>プランタイプ:</td><td>${projectInfo?.planType || 'LACIE'}</td></tr>
            <tr><td>出力日:</td><td>${new Date().toLocaleDateString('ja-JP')}</td></tr>
          </table>
        </div>
        <div class="company-info">
          ${projectInfo?.companyName ? `<p>${projectInfo.companyName}</p>` : ''}
        </div>
      </div>

      <h1 class="title">仕様一覧表</h1>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>カテゴリ</th>
            <th>商品名</th>
            <th>メーカー</th>
            <th>カラー</th>
            <th>数量</th>
            <th>単位</th>
            <th>単価</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          ${itemRows}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td colspan="8" class="text-right">合計</td>
            <td class="text-right">${formatPriceForExport(totalAmount)}</td>
          </tr>
        </tfoot>
      </table>

      <div class="footer">
        <p>IC-ぽちぽちシステム | 出力日時: ${new Date().toLocaleString('ja-JP')}</p>
      </div>
    </body>
    </html>
  `;
};

// 印刷用ウィンドウを開く
export const openPrintWindow = (
  items: CartItem[],
  projectInfo?: {
    projectName?: string;
    customerName?: string;
    planType?: string;
    companyName?: string;
  }
) => {
  const html = generatePrintableHTML(items, projectInfo);
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.onload = () => {
      printWindow.print();
    };
  }
};

// 統合エクスポート関数
export const exportData = async (
  data: {
    products?: Product[];
    cartItems?: CartItem[];
    catalogType?: string;
    projectInfo?: {
      projectName?: string;
      customerName?: string;
      planType?: string;
    };
  },
  options: ExportOptions
) => {
  const { products, cartItems, catalogType, projectInfo } = data;
  const { format } = options;

  // カートデータのエクスポート
  if (cartItems && cartItems.length > 0) {
    switch (format) {
      case 'excel':
        await exportCartToExcel(cartItems, projectInfo);
        break;
      case 'csv':
        exportCartToCSV(cartItems, projectInfo);
        break;
      case 'pdf':
        openPrintWindow(cartItems, projectInfo);
        break;
      case 'json': {
        const jsonData = JSON.stringify({
          exportDate: new Date().toISOString(),
          projectInfo,
          items: cartItems.map(item => ({
            productId: item.product.id,
            productName: item.product.name,
            category: item.product.categoryName,
            manufacturer: item.product.manufacturer,
            variant: item.selectedVariant,
            quantity: item.quantity,
            unit: item.product.unit,
          })),
        }, null, 2);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `仕様一覧_${projectInfo?.projectName || '未設定'}.json`;
        link.click();
        break;
      }
    }
    return;
  }

  // 商品データのエクスポート
  if (products && products.length > 0 && catalogType) {
    switch (format) {
      case 'excel':
        await exportProductsToExcel(products, catalogType);
        break;
      case 'csv':
        exportProductsToCSV(products, catalogType);
        break;
      case 'json':
        exportProductsToJSON(products, catalogType);
        break;
      case 'pdf': {
        // 商品一覧の印刷用HTML生成
        const printHtml = generateProductsPrintHTML(products, catalogType);
        const printWindow = window.open('', '_blank');
        if (printWindow) {
          printWindow.document.write(printHtml);
          printWindow.document.close();
          printWindow.onload = () => printWindow.print();
        }
        break;
      }
    }
  }
};

// 商品一覧印刷用HTML
const generateProductsPrintHTML = (products: Product[], catalogType: string): string => {
  const catalogName = catalogType === 'exterior' ? 'エクステリア' :
                      catalogType === 'interior' ? 'インテリア' : '水廻り';

  const rows = products.map((product, index) => {
    const price = product.pricing.find(p => p.plan === 'LACIE' || p.planId === 'LACIE')?.price || 0;
    return `
      <tr>
        <td>${index + 1}</td>
        <td>${product.categoryName}</td>
        <td>${product.name}</td>
        <td>${product.manufacturer}</td>
        <td>${product.modelNumber || '-'}</td>
        <td class="text-right">${formatPriceForExport(price)}</td>
        <td>${product.unit}</td>
        <td>${product.isOption ? 'オプション' : '標準'}</td>
      </tr>
    `;
  }).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>${catalogName} 商品一覧</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Hiragino Sans', 'Yu Gothic', sans-serif; padding: 15mm; font-size: 10pt; }
        .title { font-size: 16pt; font-weight: bold; text-align: center; margin-bottom: 20px; }
        .subtitle { text-align: center; color: #666; margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; font-size: 9pt; }
        th, td { border: 1px solid #333; padding: 4px 6px; text-align: left; }
        th { background-color: #f0f0f0; }
        .text-right { text-align: right; }
        @media print { @page { margin: 10mm; size: A4 landscape; } }
      </style>
    </head>
    <body>
      <h1 class="title">${catalogName} 商品一覧</h1>
      <p class="subtitle">出力日: ${new Date().toLocaleDateString('ja-JP')} | 商品数: ${products.length}件</p>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>カテゴリ</th>
            <th>商品名</th>
            <th>メーカー</th>
            <th>品番</th>
            <th>価格</th>
            <th>単位</th>
            <th>タイプ</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </body>
    </html>
  `;
};
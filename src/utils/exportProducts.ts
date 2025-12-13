import * as XLSX from 'xlsx';
import type { Product } from '../types/product';

export const exportProductsToExcel = (products: Product[], catalogType: string) => {
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

  // データ行の作成
  const rows = products.map(product => [
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
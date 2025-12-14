import { loadXLSX } from '../lib/xlsxLoader';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import type { CartItem } from '../types/product';
import { SettingsService } from '../services/settingsService';

// デフォルト設定（SettingsService取得前のフォールバック）
const DEFAULT_TAX_RATE = 0.1;
const DEFAULT_VALIDITY_DAYS = 30;

// 日本語フォント埋め込み用のBase64データ（NotoSansJP-Regular相当）
// 実際の運用では外部からフォントを読み込むか、CDNを使用
const loadJapaneseFont = async (pdf: jsPDF): Promise<void> => {
  // jsPDFでは日本語をUnicodeエスケープで対応
  // 代替として、テキストをローマ字に変換するか、画像として描画
  pdf.setFont('helvetica');
};

// 日本語テキストを安全に描画するヘルパー
const drawJapaneseText = (
  pdf: jsPDF,
  text: string,
  x: number,
  y: number,
  options?: { align?: 'left' | 'center' | 'right'; maxWidth?: number }
) => {
  // テキストを描画（フォントが対応していない場合はそのまま出力）
  if (options?.align) {
    pdf.text(text, x, y, { align: options.align });
  } else {
    pdf.text(text, x, y);
  }
};

export const exportToExcel = async (
  items: CartItem[],
  customerName: string,
  projectName: string,
  options?: {
    planId?: string;
    taxRate?: number;
    validityDays?: number;
    companyInfo?: {
      name: string;
      address: string;
      phone: string;
      email: string;
      licenses: string[];
    };
  }
) => {
  const XLSX = await loadXLSX();
  const planId = options?.planId || 'LACIE';
  // システム設定から税率を取得（オプションで上書き可能）
  const taxRate = options?.taxRate ?? await SettingsService.getTaxRate().catch(() => DEFAULT_TAX_RATE);
  const validityDays = options?.validityDays ?? await SettingsService.getEstimateValidityDays().catch(() => DEFAULT_VALIDITY_DAYS);

  // ワークブックの作成
  const wb = XLSX.utils.book_new();

  // ヘッダー情報
  const headerData = [
    ['工事御見積書'],
    [''],
    [`お客様名: ${customerName} 様`],
    [`工事名: ${projectName}`],
    [`見積作成日: ${new Date().toLocaleDateString('ja-JP')}`],
    [`有効期限: ${new Date(Date.now() + validityDays * 24 * 60 * 60 * 1000).toLocaleDateString('ja-JP')}`],
    [''],
  ];

  // 会社情報
  if (options?.companyInfo) {
    headerData.push([options.companyInfo.name]);
    headerData.push([options.companyInfo.address]);
    headerData.push([`TEL: ${options.companyInfo.phone}`]);
    options.companyInfo.licenses.forEach(license => {
      headerData.push([license]);
    });
    headerData.push(['']);
  }

  headerData.push(['区分', 'No.', '工事内容', '仕様・メーカー', '数量', '単位', '見積単価', '見積金額', '備考']);

  // 商品データの整形（カテゴリでグループ化）
  const groupedItems = items.reduce((acc, item) => {
    const category = item.product.categoryName || '外装';
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {} as Record<string, CartItem[]>);

  const productData: (string | number)[][] = [];
  let rowNum = 1;

  Object.entries(groupedItems).forEach(([category, categoryItems]) => {
    // カテゴリヘッダー
    productData.push([category, '', '', '', '', '', '', '', '']);

    categoryItems.forEach((item) => {
      const price = item.product.pricing.find(p => p.planId === planId)?.price || 0;
      const manufacturer = item.product.manufacturer || '';
      const modelNumber = item.product.modelNumber || '';
      const spec = [manufacturer, modelNumber].filter(Boolean).join(' / ');

      productData.push([
        '',
        rowNum++,
        item.product.name,
        spec,
        item.quantity,
        item.product.unit,
        price,
        price * item.quantity,
        item.product.description || ''
      ]);
    });
  });

  // 合計計算
  const subtotal = items.reduce((sum, item) => {
    const price = item.product.pricing.find(p => p.planId === planId)?.price || 0;
    return sum + (price * item.quantity);
  }, 0);

  const taxAmount = Math.floor(subtotal * taxRate);
  const totalWithTax = subtotal + taxAmount;

  const footerData = [
    [''],
    ['', '', '', '', '', '', '小計（税抜）', subtotal, ''],
    ['', '', '', '', '', '', `消費税（${taxRate * 100}%）`, taxAmount, ''],
    ['', '', '', '', '', '', '合計（税込）', totalWithTax, ''],
    [''],
    ['備考:'],
    ['・本見積書の有効期限は発行日より30日間です。'],
    ['・金額には消費税が含まれています。'],
    ['・施工範囲は別途お打ち合わせにて確定いたします。'],
  ];

  // データを結合
  const wsData = [...headerData, ...productData, ...footerData];

  // ワークシートの作成
  const ws = XLSX.utils.aoa_to_sheet(wsData);

  // 列幅の設定
  ws['!cols'] = [
    { wch: 12 }, // 区分
    { wch: 6 },  // No.
    { wch: 35 }, // 工事内容
    { wch: 25 }, // 仕様・メーカー
    { wch: 8 },  // 数量
    { wch: 8 },  // 単位
    { wch: 12 }, // 見積単価
    { wch: 14 }, // 見積金額
    { wch: 20 }  // 備考
  ];

  // セルの結合設定
  ws['!merges'] = [
    { s: { r: 0, c: 0 }, e: { r: 0, c: 8 } }, // タイトル行
  ];

  // ワークシートをワークブックに追加
  XLSX.utils.book_append_sheet(wb, ws, '見積書');

  // ファイルのダウンロード
  const fileName = `見積書_${customerName}_${new Date().toISOString().split('T')[0]}.xlsx`;
  XLSX.writeFile(wb, fileName);

  return fileName;
};

export const exportToPDF = async (
  items: CartItem[],
  customerName: string,
  projectName: string,
  options?: {
    planId?: string;
    taxRate?: number;
    companyInfo?: {
      name: string;
      address: string;
      phone: string;
      email: string;
      licenses: string[];
      logoUrl?: string;
    };
    showWatermark?: boolean;
    watermarkText?: string;
  }
) => {
  const planId = options?.planId || 'LACIE';
  const taxRate = options?.taxRate || 0.1;

  const pdf = new jsPDF('p', 'mm', 'a4');

  // 日本語フォントの設定
  await loadJapaneseFont(pdf);

  // ウォーターマーク（確定前の場合）
  if (options?.showWatermark) {
    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(60);
    pdf.text(options.watermarkText || '仮', 105, 150, {
      align: 'center',
      angle: 45,
    });
    pdf.setTextColor(0, 0, 0);
  }

  // タイトル
  pdf.setFontSize(20);
  pdf.setFont('helvetica', 'bold');
  drawJapaneseText(pdf, '工事御見積書', 105, 25, { align: 'center' });

  // 見積番号と日付
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  const estimateNo = `EST-${Date.now().toString(36).toUpperCase()}`;
  pdf.text(`見積番号: ${estimateNo}`, 150, 35);
  pdf.text(`発行日: ${new Date().toLocaleDateString('ja-JP')}`, 150, 41);
  pdf.text(`有効期限: ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('ja-JP')}`, 150, 47);

  // お客様情報
  pdf.setFontSize(12);
  pdf.text(`${customerName} 様`, 20, 45);
  pdf.setFontSize(10);
  pdf.text(`工事名: ${projectName}`, 20, 52);

  // 罫線
  pdf.setLineWidth(0.5);
  pdf.line(20, 55, 190, 55);

  // 会社情報
  let companyY = 60;
  if (options?.companyInfo) {
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text(options.companyInfo.name, 20, companyY);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    companyY += 5;
    pdf.text(options.companyInfo.address, 20, companyY);
    companyY += 4;
    pdf.text(`TEL: ${options.companyInfo.phone}`, 20, companyY);
    companyY += 4;
    options.companyInfo.licenses.forEach(license => {
      pdf.text(license, 20, companyY);
      companyY += 4;
    });
  } else {
    // デフォルトの会社情報
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text('株式会社 Gハウス', 20, companyY);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    companyY += 5;
    pdf.text('一級建築士事務所 大阪府知事（チ）第12462号', 20, companyY);
    companyY += 4;
    pdf.text('宅地建物取引業 大阪府知事（4）第53697号', 20, companyY);
    companyY += 4;
    pdf.text('建築業許可 大阪府知事免許（般-4）第129490号', 20, companyY);
    companyY += 4;
  }

  // 合計金額のサマリーボックス
  const subtotal = items.reduce((sum, item) => {
    const price = item.product.pricing.find(p => p.planId === planId)?.price || 0;
    return sum + (price * item.quantity);
  }, 0);
  const tax = Math.floor(subtotal * taxRate);
  const total = subtotal + tax;

  // 合計金額ボックス
  pdf.setFillColor(240, 240, 240);
  pdf.rect(120, 58, 70, 25, 'F');
  pdf.setFontSize(10);
  pdf.text('御見積金額（税込）', 125, 65);
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text(`¥${total.toLocaleString()}`, 155, 77, { align: 'center' });
  pdf.setFont('helvetica', 'normal');

  // テーブルデータの準備
  const tableData = items.map((item, index) => {
    const price = item.product.pricing.find(p => p.planId === planId)?.price || 0;
    const manufacturer = item.product.manufacturer || '';
    return [
      (index + 1).toString(),
      item.product.categoryName || '',
      item.product.name,
      manufacturer,
      item.quantity.toString(),
      item.product.unit,
      `¥${price.toLocaleString()}`,
      `¥${(price * item.quantity).toLocaleString()}`
    ];
  });

  // テーブルの描画
  const startY = companyY + 10;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (pdf as any).autoTable({
    startY: startY,
    head: [['No.', '区分', '工事内容', 'メーカー', '数量', '単位', '単価', '金額']],
    body: tableData,
    foot: [
      ['', '', '', '', '', '', '小計（税抜）', `¥${subtotal.toLocaleString()}`],
      ['', '', '', '', '', '', `消費税（${taxRate * 100}%）`, `¥${tax.toLocaleString()}`],
      ['', '', '', '', '', '', '合計（税込）', `¥${total.toLocaleString()}`]
    ],
    styles: {
      font: 'helvetica',
      fontSize: 9,
      cellPadding: 2,
      overflow: 'linebreak',
    },
    headStyles: {
      fillColor: [0, 128, 128], // Teal color
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      halign: 'center',
    },
    bodyStyles: {
      valign: 'middle',
    },
    footStyles: {
      fillColor: [245, 245, 245],
      textColor: [0, 0, 0],
      fontStyle: 'bold',
    },
    columnStyles: {
      0: { halign: 'center', cellWidth: 10 },
      1: { cellWidth: 20 },
      2: { cellWidth: 45 },
      3: { cellWidth: 25 },
      4: { halign: 'right', cellWidth: 15 },
      5: { halign: 'center', cellWidth: 15 },
      6: { halign: 'right', cellWidth: 25 },
      7: { halign: 'right', cellWidth: 25 },
    },
    margin: { left: 20, right: 20 },
  });

  // 備考欄
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const finalY = (pdf as any).lastAutoTable.finalY + 10;
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'bold');
  pdf.text('備考:', 20, finalY);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(9);
  pdf.text('・本見積書の有効期限は発行日より30日間です。', 20, finalY + 5);
  pdf.text('・金額には消費税が含まれています。', 20, finalY + 10);
  pdf.text('・施工範囲は別途お打ち合わせにて確定いたします。', 20, finalY + 15);
  pdf.text('・材料費・施工費を含みます。', 20, finalY + 20);

  // フッター
  pdf.setFontSize(8);
  pdf.setTextColor(128, 128, 128);
  pdf.text('本見積書は IC-pochipochi-system により作成されました', 105, 285, { align: 'center' });
  pdf.text(`Page 1 of 1`, 105, 290, { align: 'center' });

  // PDFのダウンロード
  const fileName = `見積書_${customerName}_${new Date().toISOString().split('T')[0]}.pdf`;
  pdf.save(fileName);

  return fileName;
};

// 仕様書生成（A3横 Excel形式）
export const exportSpecificationSheet = async (
  items: CartItem[],
  customerName: string,
  projectName: string,
  buildingInfo?: {
    floors: number;
    floorArea: number;
    constructionAddress: string;
    structure: string;
    fireResistance: string;
  }
) => {
  const XLSX = await loadXLSX();
  const wb = XLSX.utils.book_new();

  // ヘッダー
  const headerData = [
    ['外装・内装仕様書'],
    [''],
    [`お客様名: ${customerName} 様`, '', '', `作成日: ${new Date().toLocaleDateString('ja-JP')}`],
    [`工事名: ${projectName}`],
  ];

  // 建物情報
  if (buildingInfo) {
    headerData.push([
      `建設地: ${buildingInfo.constructionAddress}`,
      '',
      `階数: ${buildingInfo.floors}階建`,
      `延床面積: ${buildingInfo.floorArea}㎡`
    ]);
    headerData.push([
      `構造: ${buildingInfo.structure}`,
      '',
      `防火区分: ${buildingInfo.fireResistance}`
    ]);
  }

  headerData.push(['']);
  headerData.push(['カテゴリ', 'アイテム名', 'メーカー', '型番', 'カラー', '単位', '数量', '備考', '画像URL']);

  // カテゴリ別にグループ化
  const groupedItems = items.reduce((acc, item) => {
    const category = item.product.categoryName || 'その他';
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {} as Record<string, CartItem[]>);

  const productData: (string | number)[][] = [];

  Object.entries(groupedItems).forEach(([category, categoryItems]) => {
    categoryItems.forEach((item) => {
      productData.push([
        category,
        item.product.name,
        item.product.manufacturer || '',
        item.product.modelNumber || '',
        item.selectedVariant?.color || item.product.variants?.[0]?.color || '',
        item.product.unit,
        item.quantity,
        item.product.description || '',
        item.selectedVariant?.imageUrl || item.product.variants?.[0]?.imageUrl || ''
      ]);
    });
  });

  // データ結合
  const wsData = [...headerData, ...productData];

  // ワークシート作成
  const ws = XLSX.utils.aoa_to_sheet(wsData);

  // 列幅設定（A3横を想定した幅）
  ws['!cols'] = [
    { wch: 15 }, // カテゴリ
    { wch: 35 }, // アイテム名
    { wch: 20 }, // メーカー
    { wch: 20 }, // 型番
    { wch: 20 }, // カラー
    { wch: 10 }, // 単位
    { wch: 10 }, // 数量
    { wch: 30 }, // 備考
    { wch: 50 }, // 画像URL
  ];

  XLSX.utils.book_append_sheet(wb, ws, '仕様書');

  const fileName = `仕様書_${customerName}_${new Date().toISOString().split('T')[0]}.xlsx`;
  XLSX.writeFile(wb, fileName);

  return fileName;
};

// プレゼン資料用データ生成（画像付き）
export const exportPresentationData = async (
  items: CartItem[],
  customerName: string,
  projectName: string,
  options?: {
    includeLogo?: boolean;
    logoUrl?: string;
    companyName?: string;
  }
) => {
  const XLSX = await loadXLSX();
  const wb = XLSX.utils.book_new();

  // 表紙シート
  const coverData = [
    [''],
    [''],
    [''],
    [options?.companyName || '株式会社 Gハウス'],
    [''],
    ['外装・内装仕様 ご提案資料'],
    [''],
    [`${customerName} 様邸`],
    [`${projectName}`],
    [''],
    [''],
    [`作成日: ${new Date().toLocaleDateString('ja-JP')}`],
  ];

  const coverWs = XLSX.utils.aoa_to_sheet(coverData);
  coverWs['!cols'] = [{ wch: 60 }];
  XLSX.utils.book_append_sheet(wb, coverWs, '表紙');

  // カテゴリ別にシートを作成
  const groupedItems = items.reduce((acc, item) => {
    const category = item.product.categoryName || 'その他';
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {} as Record<string, CartItem[]>);

  Object.entries(groupedItems).forEach(([category, categoryItems]) => {
    const sheetData = [
      [category],
      [''],
      ['商品名', 'メーカー', 'カラー', '特徴・備考', '画像'],
    ];

    categoryItems.forEach((item) => {
      sheetData.push([
        item.product.name,
        item.product.manufacturer || '',
        item.selectedVariant?.color || item.product.variants?.[0]?.color || '',
        item.product.description || '',
        item.selectedVariant?.imageUrl || item.product.variants?.[0]?.imageUrl || '（画像準備中）'
      ]);
    });

    const ws = XLSX.utils.aoa_to_sheet(sheetData);
    ws['!cols'] = [
      { wch: 30 },
      { wch: 20 },
      { wch: 20 },
      { wch: 40 },
      { wch: 50 },
    ];

    // シート名を安全な文字に変換（31文字制限、特殊文字除去）
    const safeName = category.replace(/[\\/\\?*[\]]/g, '').slice(0, 31);
    XLSX.utils.book_append_sheet(wb, ws, safeName);
  });

  const fileName = `提案資料_${customerName}_${new Date().toISOString().split('T')[0]}.xlsx`;
  XLSX.writeFile(wb, fileName);

  return fileName;
};

// 全形式一括エクスポート
export const exportAllFormats = async (
  items: CartItem[],
  customerName: string,
  projectName: string,
  options?: {
    planId?: string;
    taxRate?: number;
    companyInfo?: {
      name: string;
      address: string;
      phone: string;
      email: string;
      licenses: string[];
      logoUrl?: string;
    };
    buildingInfo?: {
      floors: number;
      floorArea: number;
      constructionAddress: string;
      structure: string;
      fireResistance: string;
    };
  }
): Promise<{ excel: string; pdf: string; spec: string; presentation: string }> => {
  const [excelFile, pdfFile, specFile, presentationFile] = await Promise.all([
    exportToExcel(items, customerName, projectName, options),
    exportToPDF(items, customerName, projectName, options),
    exportSpecificationSheet(items, customerName, projectName, options?.buildingInfo),
    exportPresentationData(items, customerName, projectName, {
      companyName: options?.companyInfo?.name,
      logoUrl: options?.companyInfo?.logoUrl,
    }),
  ]);

  return {
    excel: excelFile,
    pdf: pdfFile,
    spec: specFile,
    presentation: presentationFile,
  };
};

// 見積書PDF/Excel出力ユーティリティ
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import type { CartItem, PlanType } from '../types/product';

// jspdf-autotable の型定義
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: AutoTableOptions) => jsPDF;
    lastAutoTable: { finalY: number };
  }
}

interface AutoTableOptions {
  head?: (string | { content: string; colSpan?: number; styles?: Record<string, unknown> })[][];
  body?: (string | number | { content: string; colSpan?: number; styles?: Record<string, unknown> })[][];
  startY?: number;
  theme?: 'striped' | 'grid' | 'plain';
  headStyles?: Record<string, unknown>;
  bodyStyles?: Record<string, unknown>;
  columnStyles?: Record<number, Record<string, unknown>>;
  margin?: { top?: number; right?: number; bottom?: number; left?: number };
  styles?: Record<string, unknown>;
  didDrawPage?: (data: { pageNumber: number }) => void;
}

export interface EstimateData {
  // 顧客情報
  customerName: string;
  projectName: string;
  projectCode?: string;
  constructionAddress?: string;

  // プラン情報
  planType: PlanType;
  planName: string;

  // 建物情報
  floors?: number;
  floorArea?: number;

  // カートアイテム
  items: CartItem[];

  // 作成日
  createdAt?: Date;

  // 有効期限（日数）
  validDays?: number;

  // 備考
  notes?: string;
}

interface EstimateItem {
  category: string;
  name: string;
  manufacturer: string;
  modelNumber: string;
  variant: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  isOption: boolean;
}

// カートアイテムを見積書用に変換
const convertToEstimateItems = (items: CartItem[], planType: PlanType): EstimateItem[] => {
  return items.map(item => {
    const pricing = item.product.pricing?.find(
      p => p.planId === planType || p.plan === planType
    );
    const unitPrice = pricing?.price || 0;

    return {
      category: item.product.categoryName || '未分類',
      name: item.product.name,
      manufacturer: item.product.manufacturer || '',
      modelNumber: item.product.modelNumber || '',
      variant: item.selectedVariant?.color || 'デフォルト',
      unit: item.product.unit || '式',
      quantity: item.quantity,
      unitPrice,
      totalPrice: unitPrice * item.quantity,
      isOption: item.product.isOption || false,
    };
  });
};

// カテゴリ別にグループ化
const groupByCategory = (items: EstimateItem[]): Map<string, EstimateItem[]> => {
  const grouped = new Map<string, EstimateItem[]>();

  items.forEach(item => {
    const category = item.category;
    if (!grouped.has(category)) {
      grouped.set(category, []);
    }
    grouped.get(category)!.push(item);
  });

  return grouped;
};

// 数値を日本円形式にフォーマット
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
    minimumFractionDigits: 0,
  }).format(value);
};

// 日付をフォーマット
const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

// ========================================
// PDF出力
// ========================================
export const generateEstimatePDF = async (data: EstimateData): Promise<Blob> => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  // 日本語フォントの設定（Base64エンコード済みフォントが必要）
  // ここでは標準フォントを使用（日本語は文字化けの可能性あり）
  // 本番環境ではNotoSansJPなどのフォントを埋め込む必要がある

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;

  const createdAt = data.createdAt || new Date();
  const validUntil = new Date(createdAt);
  validUntil.setDate(validUntil.getDate() + (data.validDays || 30));

  // 見積書アイテムの準備
  const estimateItems = convertToEstimateItems(data.items, data.planType);
  const groupedItems = groupByCategory(estimateItems);

  // 合計計算
  const standardTotal = estimateItems
    .filter(item => !item.isOption)
    .reduce((sum, item) => sum + item.totalPrice, 0);
  const optionTotal = estimateItems
    .filter(item => item.isOption)
    .reduce((sum, item) => sum + item.totalPrice, 0);
  const grandTotal = standardTotal + optionTotal;
  const taxRate = 0.1;
  const taxAmount = Math.floor(grandTotal * taxRate);
  const totalWithTax = grandTotal + taxAmount;

  // ========== ヘッダー ==========
  let yPos = 20;

  // タイトル
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('ESTIMATE', pageWidth / 2, yPos, { align: 'center' });
  yPos += 5;
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Mitsumori', pageWidth / 2, yPos, { align: 'center' });
  yPos += 15;

  // 日付
  doc.setFontSize(10);
  doc.text(`Date: ${formatDate(createdAt)}`, pageWidth - margin, yPos, { align: 'right' });
  doc.text(`Valid: ${formatDate(validUntil)}`, pageWidth - margin, yPos + 5, { align: 'right' });

  // 顧客情報
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Customer:', margin, yPos);
  yPos += 6;
  doc.setFont('helvetica', 'normal');
  doc.text(data.customerName || 'Guest', margin + 5, yPos);
  yPos += 5;
  if (data.projectName) {
    doc.text(`Project: ${data.projectName}`, margin + 5, yPos);
    yPos += 5;
  }
  if (data.projectCode) {
    doc.text(`Code: ${data.projectCode}`, margin + 5, yPos);
    yPos += 5;
  }
  if (data.constructionAddress) {
    doc.text(`Address: ${data.constructionAddress}`, margin + 5, yPos);
    yPos += 5;
  }
  yPos += 10;

  // プラン情報
  doc.setFillColor(240, 240, 240);
  doc.rect(margin, yPos, contentWidth, 15, 'F');
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text(`Plan: ${data.planName || data.planType}`, margin + 5, yPos + 10);
  yPos += 20;

  // 合計金額（サマリー）
  doc.setFillColor(59, 130, 246);
  doc.rect(margin, yPos, contentWidth, 25, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.text('Total Amount (Tax Included)', margin + 5, yPos + 8);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(formatCurrency(totalWithTax), pageWidth - margin - 5, yPos + 18, { align: 'right' });
  doc.setTextColor(0, 0, 0);
  yPos += 30;

  // 内訳
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Standard: ${formatCurrency(standardTotal)}`, margin + 5, yPos);
  doc.text(`Options: ${formatCurrency(optionTotal)}`, margin + 60, yPos);
  doc.text(`Tax (10%): ${formatCurrency(taxAmount)}`, margin + 115, yPos);
  yPos += 10;

  // ========== 明細テーブル ==========
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Item Details', margin, yPos);
  yPos += 5;

  // カテゴリ別にテーブルを作成
  groupedItems.forEach((items, category) => {
    // カテゴリヘッダー
    const categoryTotal = items.reduce((sum, item) => sum + item.totalPrice, 0);

    doc.autoTable({
      startY: yPos,
      head: [[
        { content: `${category}`, colSpan: 4, styles: { fillColor: [100, 100, 100] } },
        { content: formatCurrency(categoryTotal), colSpan: 1, styles: { fillColor: [100, 100, 100], halign: 'right' as const } },
      ]],
      body: items.map(item => [
        item.name,
        item.variant,
        item.unit,
        item.quantity.toString(),
        formatCurrency(item.totalPrice),
      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [100, 100, 100],
        textColor: [255, 255, 255],
        fontSize: 10,
        fontStyle: 'bold',
      },
      bodyStyles: {
        fontSize: 9,
      },
      columnStyles: {
        0: { cellWidth: 60 },
        1: { cellWidth: 40 },
        2: { cellWidth: 15 },
        3: { cellWidth: 15, halign: 'center' },
        4: { cellWidth: 35, halign: 'right' },
      },
      margin: { left: margin, right: margin },
    });

    yPos = doc.lastAutoTable.finalY + 5;
  });

  // ========== 備考 ==========
  if (data.notes) {
    yPos += 5;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Notes:', margin, yPos);
    yPos += 5;
    doc.setFont('helvetica', 'normal');
    const noteLines = doc.splitTextToSize(data.notes, contentWidth);
    doc.text(noteLines, margin, yPos);
    yPos += noteLines.length * 5;
  }

  // ========== フッター ==========
  const pageCount = doc.internal.pages.length - 1;
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(
      `Page ${i} of ${pageCount}`,
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: 'center' }
    );
    doc.text(
      'G House | IC Pochipochi System',
      margin,
      doc.internal.pageSize.getHeight() - 10
    );
  }

  return doc.output('blob');
};

// ========================================
// Excel出力
// ========================================
export const generateEstimateExcel = (data: EstimateData): Blob => {
  const wb = XLSX.utils.book_new();

  const createdAt = data.createdAt || new Date();
  const validUntil = new Date(createdAt);
  validUntil.setDate(validUntil.getDate() + (data.validDays || 30));

  // 見積書アイテムの準備
  const estimateItems = convertToEstimateItems(data.items, data.planType);

  // 合計計算
  const standardTotal = estimateItems
    .filter(item => !item.isOption)
    .reduce((sum, item) => sum + item.totalPrice, 0);
  const optionTotal = estimateItems
    .filter(item => item.isOption)
    .reduce((sum, item) => sum + item.totalPrice, 0);
  const grandTotal = standardTotal + optionTotal;
  const taxRate = 0.1;
  const taxAmount = Math.floor(grandTotal * taxRate);
  const totalWithTax = grandTotal + taxAmount;

  // ヘッダー行
  const headerRows: (string | number | null)[][] = [
    ['御見積書'],
    [],
    ['作成日', formatDate(createdAt)],
    ['有効期限', formatDate(validUntil)],
    [],
    ['お客様名', data.customerName || 'ゲスト様'],
    ['物件名', data.projectName || ''],
    ['物件コード', data.projectCode || ''],
    ['建築地', data.constructionAddress || ''],
    [],
    ['プラン', data.planName || data.planType],
    ['延床面積', data.floorArea ? `${data.floorArea}㎡` : ''],
    ['階数', data.floors ? `${data.floors}階建て` : ''],
    [],
    ['【合計金額（税込）】', totalWithTax],
    ['標準仕様', standardTotal],
    ['オプション', optionTotal],
    ['消費税（10%）', taxAmount],
    [],
    ['【明細】'],
    ['カテゴリ', '商品名', 'メーカー', '型番', 'バリアント', '単位', '数量', '単価', '金額', '区分'],
  ];

  // 明細行
  const detailRows = estimateItems.map(item => [
    item.category,
    item.name,
    item.manufacturer,
    item.modelNumber,
    item.variant,
    item.unit,
    item.quantity,
    item.unitPrice,
    item.totalPrice,
    item.isOption ? 'オプション' : '標準',
  ]);

  // 備考行
  const footerRows: (string | number | null)[][] = [
    [],
    ['【備考】'],
    [data.notes || ''],
    [],
    ['※本見積書の有効期限は発行日より30日間です。'],
    ['※価格は予告なく変更される場合があります。'],
  ];

  // シート作成
  const allRows = [...headerRows, ...detailRows, ...footerRows];
  const ws = XLSX.utils.aoa_to_sheet(allRows);

  // カラム幅設定
  ws['!cols'] = [
    { wch: 15 }, // カテゴリ
    { wch: 30 }, // 商品名
    { wch: 15 }, // メーカー
    { wch: 20 }, // 型番
    { wch: 15 }, // バリアント
    { wch: 8 },  // 単位
    { wch: 8 },  // 数量
    { wch: 12 }, // 単価
    { wch: 12 }, // 金額
    { wch: 10 }, // 区分
  ];

  // ブックに追加
  XLSX.utils.book_append_sheet(wb, ws, '見積書');

  // カテゴリ別サマリーシート
  const groupedItems = groupByCategory(estimateItems);
  const summaryRows: (string | number)[][] = [
    ['カテゴリ別集計'],
    [],
    ['カテゴリ', 'アイテム数', '合計金額'],
  ];

  groupedItems.forEach((items, category) => {
    const categoryTotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
    summaryRows.push([category, items.length, categoryTotal]);
  });

  summaryRows.push([]);
  summaryRows.push(['合計', estimateItems.length, grandTotal]);

  const summarySheet = XLSX.utils.aoa_to_sheet(summaryRows);
  summarySheet['!cols'] = [
    { wch: 20 },
    { wch: 12 },
    { wch: 15 },
  ];
  XLSX.utils.book_append_sheet(wb, summarySheet, 'カテゴリ別集計');

  // Blobとして出力
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  return new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
};

// ========================================
// ダウンロードヘルパー
// ========================================
export const downloadEstimatePDF = async (data: EstimateData, filename?: string): Promise<void> => {
  const blob = await generateEstimatePDF(data);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || `estimate_${data.projectCode || Date.now()}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const downloadEstimateExcel = (data: EstimateData, filename?: string): void => {
  const blob = generateEstimateExcel(data);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || `estimate_${data.projectCode || Date.now()}.xlsx`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

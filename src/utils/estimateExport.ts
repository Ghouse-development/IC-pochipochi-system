// 見積書Excel出力ユーティリティ（Gハウスフォーマット版）
import ExcelJS from 'exceljs';
import type { CartItem, PlanType } from '../types/product';
import type { CategorySelection } from '../stores/useSelectionStore';
import { getRoomNames } from '../stores/useSelectionStore';

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

  // 選択状態（「不要」選択や部屋適用情報を含む）
  selections?: Record<string, CategorySelection>;
}

interface EstimateItem {
  category: string;
  subcategory: string;
  name: string;
  manufacturer: string;
  modelNumber: string;
  variant: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  isOption: boolean;
  appliedRooms?: string[];
  note?: string;
}

// 6つの大カテゴリ定義
const MAJOR_CATEGORIES = [
  { id: 'design', name: '設計変更', keywords: ['換気システム', '太陽光', '蓄電池', 'V2H', 'インターホン個数'] },
  { id: 'design_equipment', name: '設計変更 設備', keywords: ['給湯器', 'エコキュート', 'エコジョーズ'] },
  { id: 'exterior', name: '外装工事', keywords: ['外壁', '屋根', '軒天', '窓', '玄関ドア', '外部設備', 'ポーチ', '庇', 'ガレージ', '破風', '樋', '水切', '換気ガラリ', '換気フード'] },
  { id: 'interior', name: '内装工事', keywords: ['床', 'クロス', '建具', '収納', '階段', '手摺', '室内窓', '造作', 'カウンター', '格子'] },
  { id: 'water', name: '水廻り設備', keywords: ['キッチン', 'バス', '洗面', 'トイレ', 'ランドリー'] },
  { id: 'electrical', name: '照明・エアコン・カーテン', keywords: ['照明', 'スイッチ', 'コンセント', 'インターホン', '電気', 'IoT', 'セキュリティ', 'カーテン', 'エアコン', 'ブラインド'] },
  { id: 'furniture', name: '家具', keywords: ['家具', '家電', 'テーブル', 'ソファ', 'ベッド'] },
];

// カテゴリを大分類に分類
const categorizeMajor = (categoryName: string): string => {
  for (const major of MAJOR_CATEGORIES) {
    if (major.keywords.some(k => categoryName.includes(k))) {
      return major.id;
    }
  }
  return 'exterior'; // default
};

// カートアイテムを見積書用に変換
const convertToEstimateItems = (
  items: CartItem[],
  planType: PlanType,
  selections?: Record<string, CategorySelection>
): EstimateItem[] => {
  return items.map(item => {
    const pricing = item.product.pricing?.find(
      p => p.planId === planType || p.plan === planType
    );
    const unitPrice = pricing?.price || 0;
    const categoryName = item.product.categoryName || '未分類';
    const categorySelection = selections?.[categoryName];
    const appliedRooms = categorySelection?.appliedRooms;

    return {
      category: categoryName,
      subcategory: item.product.subcategory || '',
      name: item.product.name,
      manufacturer: item.product.manufacturer || '',
      modelNumber: item.product.modelNumber || '',
      variant: item.selectedVariant?.color || '',
      unit: item.product.unit || '式',
      quantity: item.quantity,
      unitPrice,
      totalPrice: unitPrice * item.quantity,
      isOption: item.product.isOption || false,
      appliedRooms,
      note: '',
    };
  });
};

// 和暦日付フォーマット (R8.1.6 形式)
const formatJapaneseDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // 令和計算 (2019年5月1日から)
  const reiwaYear = year - 2018;
  return `R${reiwaYear}.${month}.${day}`;
};

// 通常の日付フォーマット
const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

// 大分類別にグループ化
const groupByMajorCategory = (items: EstimateItem[]): Map<string, EstimateItem[]> => {
  const grouped = new Map<string, EstimateItem[]>();

  // 初期化
  MAJOR_CATEGORIES.forEach(cat => {
    grouped.set(cat.id, []);
  });

  items.forEach(item => {
    const majorId = categorizeMajor(item.category);
    const arr = grouped.get(majorId) ?? [];
    arr.push(item);
    grouped.set(majorId, arr);
  });

  return grouped;
};

// ========================================
// Gハウス見積書フォーマット Excel出力
// ========================================
export const generateEstimateExcel = async (data: EstimateData): Promise<Blob> => {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Gハウス IC Pochipochi System';
  workbook.created = new Date();

  const createdAt = data.createdAt || new Date();
  const estimateItems = convertToEstimateItems(data.items, data.planType, data.selections);

  // 0円以外のアイテムのみ
  const filteredItems = estimateItems.filter(item => item.totalPrice > 0);
  const groupedItems = groupByMajorCategory(filteredItems);

  // 各カテゴリの合計計算
  const categoryTotals: Record<string, number> = {};
  groupedItems.forEach((items, categoryId) => {
    categoryTotals[categoryId] = items.reduce((sum, item) => sum + item.totalPrice, 0);
  });

  const grandTotal = Object.values(categoryTotals).reduce((sum, v) => sum + v, 0);
  const taxRate = 0.1;
  const taxAmount = Math.floor(grandTotal * taxRate);
  const totalWithTax = grandTotal + taxAmount;

  // ========================================
  // 表紙シート
  // ========================================
  const coverSheet = workbook.addWorksheet('表紙', {
    pageSetup: {
      paperSize: 9, // A4
      orientation: 'portrait',
      fitToPage: true,
      fitToWidth: 1,
      margins: { left: 0.7, right: 0.7, top: 0.75, bottom: 0.75, header: 0.3, footer: 0.3 }
    }
  });

  // 列幅設定（A4に最適化）
  coverSheet.columns = [
    { width: 4 },   // A
    { width: 8 },   // B
    { width: 12 },  // C
    { width: 12 },  // D
    { width: 12 },  // E
    { width: 12 },  // F
    { width: 12 },  // G
    { width: 12 },  // H
    { width: 4 },   // I
  ];

  let row = 1;

  // 余白
  coverSheet.getRow(row).height = 30;
  row++;

  // タイトル「工事御見積書」
  coverSheet.mergeCells(`B${row}:H${row}`);
  const titleCell = coverSheet.getCell(`B${row}`);
  titleCell.value = '工 事 御 見 積 書';
  titleCell.font = { name: 'ＭＳ 明朝', size: 28, bold: true };
  titleCell.alignment = { horizontal: 'center', vertical: 'middle' };
  coverSheet.getRow(row).height = 50;
  row++;

  // 余白
  row++;

  // サブタイトル「契約後打合せ変更見積」
  coverSheet.mergeCells(`B${row}:H${row}`);
  const subtitleCell = coverSheet.getCell(`B${row}`);
  subtitleCell.value = '契約後打合せ変更見積';
  subtitleCell.font = { name: 'ＭＳ ゴシック', size: 14 };
  subtitleCell.alignment = { horizontal: 'center', vertical: 'middle' };
  coverSheet.getRow(row).height = 25;
  row++;

  // 余白
  row++;

  // 顧客名
  coverSheet.mergeCells(`B${row}:H${row}`);
  const customerCell = coverSheet.getCell(`B${row}`);
  const addressPart = data.constructionAddress ? `${data.constructionAddress} ・ ` : '';
  customerCell.value = `${addressPart}${data.customerName} 邸`;
  customerCell.font = { name: 'ＭＳ ゴシック', size: 16, bold: true };
  customerCell.alignment = { horizontal: 'center', vertical: 'middle' };
  customerCell.border = { bottom: { style: 'double', color: { argb: '000000' } } };
  coverSheet.getRow(row).height = 35;
  row += 2;

  // 作成日
  coverSheet.getCell(`G${row}`).value = '見積作成日';
  coverSheet.getCell(`G${row}`).font = { name: 'ＭＳ ゴシック', size: 10 };
  coverSheet.getCell(`H${row}`).value = formatDate(createdAt);
  coverSheet.getCell(`H${row}`).font = { name: 'ＭＳ ゴシック', size: 10 };
  coverSheet.getCell(`H${row}`).alignment = { horizontal: 'right' };
  row += 2;

  // 合計金額ボックス
  coverSheet.mergeCells(`C${row}:G${row}`);
  const totalLabelCell = coverSheet.getCell(`C${row}`);
  totalLabelCell.value = '合計金額（税込）';
  totalLabelCell.font = { name: 'ＭＳ ゴシック', size: 12 };
  totalLabelCell.alignment = { horizontal: 'center', vertical: 'middle' };
  totalLabelCell.border = {
    top: { style: 'medium' },
    left: { style: 'medium' },
    right: { style: 'medium' },
  };
  totalLabelCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F0F0F0' } };
  coverSheet.getRow(row).height = 25;
  row++;

  coverSheet.mergeCells(`C${row}:G${row}`);
  const totalValueCell = coverSheet.getCell(`C${row}`);
  totalValueCell.value = `¥ ${totalWithTax.toLocaleString()} -`;
  totalValueCell.font = { name: 'ＭＳ 明朝', size: 24, bold: true };
  totalValueCell.alignment = { horizontal: 'center', vertical: 'middle' };
  totalValueCell.border = {
    bottom: { style: 'medium' },
    left: { style: 'medium' },
    right: { style: 'medium' },
  };
  coverSheet.getRow(row).height = 45;
  row++;

  // 消費税注記
  coverSheet.mergeCells(`C${row}:G${row}`);
  const taxNoteCell = coverSheet.getCell(`C${row}`);
  taxNoteCell.value = `上記金額には消費税 10％ ¥ ${taxAmount.toLocaleString()} を含みます。`;
  taxNoteCell.font = { name: 'ＭＳ ゴシック', size: 10 };
  taxNoteCell.alignment = { horizontal: 'center', vertical: 'middle' };
  row += 2;

  // カテゴリ別サマリーテーブル
  const summaryHeaders = ['カテゴリ', '金額'];

  // ヘッダー
  coverSheet.getCell(`C${row}`).value = summaryHeaders[0];
  coverSheet.getCell(`C${row}`).font = { name: 'ＭＳ ゴシック', size: 10, bold: true };
  coverSheet.getCell(`C${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'E0E0E0' } };
  coverSheet.getCell(`C${row}`).alignment = { horizontal: 'center' };
  coverSheet.getCell(`C${row}`).border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };

  coverSheet.mergeCells(`D${row}:F${row}`);
  coverSheet.getCell(`D${row}`).value = '';
  coverSheet.getCell(`D${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'E0E0E0' } };
  coverSheet.getCell(`D${row}`).border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };

  coverSheet.getCell(`G${row}`).value = summaryHeaders[1];
  coverSheet.getCell(`G${row}`).font = { name: 'ＭＳ ゴシック', size: 10, bold: true };
  coverSheet.getCell(`G${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'E0E0E0' } };
  coverSheet.getCell(`G${row}`).alignment = { horizontal: 'center' };
  coverSheet.getCell(`G${row}`).border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };
  row++;

  // カテゴリ行
  MAJOR_CATEGORIES.forEach(cat => {
    const total = categoryTotals[cat.id] || 0;
    if (total > 0) {
      coverSheet.getCell(`C${row}`).value = cat.name;
      coverSheet.getCell(`C${row}`).font = { name: 'ＭＳ ゴシック', size: 10 };
      coverSheet.getCell(`C${row}`).border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };

      coverSheet.mergeCells(`D${row}:F${row}`);
      coverSheet.getCell(`D${row}`).border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };

      coverSheet.getCell(`G${row}`).value = total;
      coverSheet.getCell(`G${row}`).numFmt = '¥#,##0';
      coverSheet.getCell(`G${row}`).font = { name: 'ＭＳ ゴシック', size: 10 };
      coverSheet.getCell(`G${row}`).alignment = { horizontal: 'right' };
      coverSheet.getCell(`G${row}`).border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };
      row++;
    }
  });

  // 工事金額合計
  coverSheet.getCell(`C${row}`).value = '工事金額';
  coverSheet.getCell(`C${row}`).font = { name: 'ＭＳ ゴシック', size: 10, bold: true };
  coverSheet.getCell(`C${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF99' } };
  coverSheet.getCell(`C${row}`).border = { top: { style: 'medium' }, bottom: { style: 'medium' }, left: { style: 'medium' }, right: { style: 'thin' } };

  coverSheet.mergeCells(`D${row}:F${row}`);
  coverSheet.getCell(`D${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF99' } };
  coverSheet.getCell(`D${row}`).border = { top: { style: 'medium' }, bottom: { style: 'medium' }, left: { style: 'thin' }, right: { style: 'thin' } };

  coverSheet.getCell(`G${row}`).value = grandTotal;
  coverSheet.getCell(`G${row}`).numFmt = '¥#,##0';
  coverSheet.getCell(`G${row}`).font = { name: 'ＭＳ ゴシック', size: 11, bold: true };
  coverSheet.getCell(`G${row}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF99' } };
  coverSheet.getCell(`G${row}`).alignment = { horizontal: 'right' };
  coverSheet.getCell(`G${row}`).border = { top: { style: 'medium' }, bottom: { style: 'medium' }, left: { style: 'thin' }, right: { style: 'medium' } };
  row += 3;

  // 会社情報
  coverSheet.mergeCells(`C${row}:G${row}`);
  coverSheet.getCell(`C${row}`).value = '株式会社 Gハウス';
  coverSheet.getCell(`C${row}`).font = { name: 'ＭＳ 明朝', size: 14, bold: true };
  coverSheet.getCell(`C${row}`).alignment = { horizontal: 'center' };
  row++;

  coverSheet.mergeCells(`C${row}:G${row}`);
  coverSheet.getCell(`C${row}`).value = '兵庫県知事許可（般-5）第117047号';
  coverSheet.getCell(`C${row}`).font = { name: 'ＭＳ ゴシック', size: 9 };
  coverSheet.getCell(`C${row}`).alignment = { horizontal: 'center' };

  // ========================================
  // 明細シート（カテゴリ別）
  // ========================================
  MAJOR_CATEGORIES.forEach(majorCat => {
    const catItems = groupedItems.get(majorCat.id) || [];
    if (catItems.length === 0) return;

    const detailSheet = workbook.addWorksheet(majorCat.name, {
      pageSetup: {
        paperSize: 9,
        orientation: 'landscape',
        fitToPage: true,
        fitToWidth: 1,
        margins: { left: 0.5, right: 0.5, top: 0.5, bottom: 0.5, header: 0.2, footer: 0.2 }
      }
    });

    // 列幅設定（Gハウスフォーマット準拠）
    detailSheet.columns = [
      { width: 8 },   // A: 区分
      { width: 5 },   // B: No.
      { width: 40 },  // C: 工事内容
      { width: 8 },   // D: 数量
      { width: 6 },   // E: 単位
      { width: 14 },  // F: 見積単価
      { width: 14 },  // G: 見積金額
      { width: 20 },  // H: 備考
    ];

    let dRow = 1;

    // ヘッダー行（LIFE + カテゴリ名 + 日付 + 顧客名）
    detailSheet.getCell(`A${dRow}`).value = 'LIFE';
    detailSheet.getCell(`A${dRow}`).font = { name: 'Arial', size: 10, bold: true, color: { argb: '000000' } };
    detailSheet.getCell(`A${dRow}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF00' } };
    detailSheet.getCell(`A${dRow}`).alignment = { horizontal: 'center', vertical: 'middle' };
    detailSheet.getCell(`A${dRow}`).border = {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
      left: { style: 'thin' },
      right: { style: 'thin' },
    };

    detailSheet.mergeCells(`B${dRow}:C${dRow}`);
    detailSheet.getCell(`B${dRow}`).value = majorCat.name;
    detailSheet.getCell(`B${dRow}`).font = { name: 'ＭＳ ゴシック', size: 14, bold: true };
    detailSheet.getCell(`B${dRow}`).alignment = { horizontal: 'left', vertical: 'middle' };

    detailSheet.getCell(`F${dRow}`).value = formatJapaneseDate(createdAt);
    detailSheet.getCell(`F${dRow}`).font = { name: 'ＭＳ ゴシック', size: 10 };
    detailSheet.getCell(`F${dRow}`).alignment = { horizontal: 'right' };

    detailSheet.mergeCells(`G${dRow}:H${dRow}`);
    detailSheet.getCell(`G${dRow}`).value = `${data.customerName} 邸`;
    detailSheet.getCell(`G${dRow}`).font = { name: 'ＭＳ ゴシック', size: 10 };
    detailSheet.getCell(`G${dRow}`).alignment = { horizontal: 'right' };

    detailSheet.getRow(dRow).height = 25;
    dRow++;

    // 列ヘッダー
    const headers = ['区分', 'No.', '工事内容', '数量', '単位', '見積単価', '見積金額', '備考'];
    headers.forEach((header, i) => {
      const cell = detailSheet.getCell(dRow, i + 1);
      cell.value = header;
      cell.font = { name: 'ＭＳ ゴシック', size: 10, bold: true };
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'D9D9D9' } };
      cell.alignment = { horizontal: 'center', vertical: 'middle' };
      cell.border = {
        top: { style: 'thin' },
        bottom: { style: 'thin' },
        left: { style: 'thin' },
        right: { style: 'thin' },
      };
    });
    detailSheet.getRow(dRow).height = 20;
    dRow++;

    // 明細行
    let itemNo = 1;
    const categoryTotal = categoryTotals[majorCat.id] || 0;

    catItems.forEach(item => {
      // 区分（サブカテゴリ）
      detailSheet.getCell(`A${dRow}`).value = item.subcategory || item.category;
      detailSheet.getCell(`A${dRow}`).font = { name: 'ＭＳ ゴシック', size: 9 };
      detailSheet.getCell(`A${dRow}`).alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
      detailSheet.getCell(`A${dRow}`).border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };

      // No.
      detailSheet.getCell(`B${dRow}`).value = itemNo;
      detailSheet.getCell(`B${dRow}`).font = { name: 'ＭＳ ゴシック', size: 9 };
      detailSheet.getCell(`B${dRow}`).alignment = { horizontal: 'center', vertical: 'middle' };
      detailSheet.getCell(`B${dRow}`).border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };

      // 工事内容（商品名 + メーカー + 型番 + カラー）
      let workContent = item.name;
      if (item.manufacturer) workContent += ` / ${item.manufacturer}`;
      if (item.modelNumber) workContent += ` ${item.modelNumber}`;
      if (item.variant) workContent += ` (${item.variant})`;

      detailSheet.getCell(`C${dRow}`).value = workContent;
      detailSheet.getCell(`C${dRow}`).font = { name: 'ＭＳ ゴシック', size: 9 };
      detailSheet.getCell(`C${dRow}`).alignment = { horizontal: 'left', vertical: 'middle', wrapText: true };
      detailSheet.getCell(`C${dRow}`).border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };

      // 数量
      detailSheet.getCell(`D${dRow}`).value = item.quantity;
      detailSheet.getCell(`D${dRow}`).font = { name: 'ＭＳ ゴシック', size: 9 };
      detailSheet.getCell(`D${dRow}`).alignment = { horizontal: 'center', vertical: 'middle' };
      detailSheet.getCell(`D${dRow}`).border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };

      // 単位
      detailSheet.getCell(`E${dRow}`).value = item.unit;
      detailSheet.getCell(`E${dRow}`).font = { name: 'ＭＳ ゴシック', size: 9 };
      detailSheet.getCell(`E${dRow}`).alignment = { horizontal: 'center', vertical: 'middle' };
      detailSheet.getCell(`E${dRow}`).border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };

      // 見積単価
      detailSheet.getCell(`F${dRow}`).value = item.unitPrice;
      detailSheet.getCell(`F${dRow}`).numFmt = '¥#,##0';
      detailSheet.getCell(`F${dRow}`).font = { name: 'ＭＳ ゴシック', size: 9 };
      detailSheet.getCell(`F${dRow}`).alignment = { horizontal: 'right', vertical: 'middle' };
      detailSheet.getCell(`F${dRow}`).border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };

      // 見積金額
      detailSheet.getCell(`G${dRow}`).value = item.totalPrice;
      detailSheet.getCell(`G${dRow}`).numFmt = '¥#,##0';
      detailSheet.getCell(`G${dRow}`).font = { name: 'ＭＳ ゴシック', size: 9 };
      detailSheet.getCell(`G${dRow}`).alignment = { horizontal: 'right', vertical: 'middle' };
      detailSheet.getCell(`G${dRow}`).border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };

      // 備考
      const roomInfo = item.appliedRooms && item.appliedRooms.length > 0
        ? getRoomNames(item.appliedRooms).join('、')
        : '';
      detailSheet.getCell(`H${dRow}`).value = roomInfo || item.note || '';
      detailSheet.getCell(`H${dRow}`).font = { name: 'ＭＳ ゴシック', size: 9 };
      detailSheet.getCell(`H${dRow}`).alignment = { horizontal: 'left', vertical: 'middle', wrapText: true };
      detailSheet.getCell(`H${dRow}`).border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };

      detailSheet.getRow(dRow).height = 22;
      itemNo++;
      dRow++;
    });

    // カテゴリ合計行
    dRow++;
    detailSheet.mergeCells(`A${dRow}:E${dRow}`);
    detailSheet.getCell(`A${dRow}`).value = `${majorCat.name} 合計`;
    detailSheet.getCell(`A${dRow}`).font = { name: 'ＭＳ ゴシック', size: 11, bold: true };
    detailSheet.getCell(`A${dRow}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF99' } };
    detailSheet.getCell(`A${dRow}`).alignment = { horizontal: 'center', vertical: 'middle' };
    detailSheet.getCell(`A${dRow}`).border = { top: { style: 'medium' }, bottom: { style: 'medium' }, left: { style: 'medium' }, right: { style: 'thin' } };

    detailSheet.getCell(`F${dRow}`).value = '';
    detailSheet.getCell(`F${dRow}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF99' } };
    detailSheet.getCell(`F${dRow}`).border = { top: { style: 'medium' }, bottom: { style: 'medium' }, left: { style: 'thin' }, right: { style: 'thin' } };

    detailSheet.getCell(`G${dRow}`).value = categoryTotal;
    detailSheet.getCell(`G${dRow}`).numFmt = '¥#,##0';
    detailSheet.getCell(`G${dRow}`).font = { name: 'ＭＳ ゴシック', size: 11, bold: true };
    detailSheet.getCell(`G${dRow}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF99' } };
    detailSheet.getCell(`G${dRow}`).alignment = { horizontal: 'right', vertical: 'middle' };
    detailSheet.getCell(`G${dRow}`).border = { top: { style: 'medium' }, bottom: { style: 'medium' }, left: { style: 'thin' }, right: { style: 'thin' } };

    detailSheet.getCell(`H${dRow}`).value = '';
    detailSheet.getCell(`H${dRow}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF99' } };
    detailSheet.getCell(`H${dRow}`).border = { top: { style: 'medium' }, bottom: { style: 'medium' }, left: { style: 'thin' }, right: { style: 'medium' } };

    detailSheet.getRow(dRow).height = 25;
  });

  // Blobとして出力
  const buffer = await workbook.xlsx.writeBuffer();
  return new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
};

// ========================================
// ダウンロードヘルパー
// ========================================
export const downloadEstimateExcel = async (data: EstimateData, filename?: string): Promise<void> => {
  const blob = await generateEstimateExcel(data);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || `見積書_${data.customerName}_${new Date().toLocaleDateString('ja-JP').replace(/\//g, '')}.xlsx`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// ========================================
// ExportPanel向けラッパー関数
// ========================================
interface ExportToExcelOptions {
  customerName: string;
  projectName: string;
  constructionAddress?: string;
  selections?: Record<string, import('../stores/useSelectionStore').CategorySelection>;
  showroomEstimates?: Array<{
    id: string;
    categoryLabel: string;
    manufacturer: string;
    productName: string;
    modelNumber: string;
    totalPrice: number;
  }>;
}

export const exportToExcel = async (
  items: CartItem[],
  options: ExportToExcelOptions
): Promise<void> => {
  const data: EstimateData = {
    customerName: options.customerName,
    projectName: options.projectName,
    constructionAddress: options.constructionAddress,
    projectCode: `PRJ-${Date.now()}`,
    planType: 'LACIE',
    planName: 'LACIE',
    items,
    selections: options.selections,
    createdAt: new Date(),
  };

  await downloadEstimateExcel(data, `【${options.customerName}様】OP見積書.xlsx`);
};

// ========================================
// PDF出力（仕様書ウィンドウを開く形式）
// ========================================
export const downloadEstimatePDF = async (data: EstimateData): Promise<void> => {
  // 仕様書生成機能を再利用してPDFとして出力
  const { openSpecificationWindow } = await import('./specificationPDF');

  openSpecificationWindow({
    customerName: data.customerName,
    projectName: data.projectName,
    planName: data.planName || data.planType,
    date: formatDate(data.createdAt || new Date()),
    items: data.items,
    selections: data.selections,
    companyName: 'Gハウス',
  });
};

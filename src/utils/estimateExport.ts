// 見積書Excel出力ユーティリティ（ExcelJS版）
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
}

interface NotNeededCategory {
  categoryName: string;
  note?: string;
}

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
      name: item.product.name,
      manufacturer: item.product.manufacturer || '',
      modelNumber: item.product.modelNumber || '',
      variant: item.selectedVariant?.color || 'デフォルト',
      unit: item.product.unit || '式',
      quantity: item.quantity,
      unitPrice,
      totalPrice: unitPrice * item.quantity,
      isOption: item.product.isOption || false,
      appliedRooms,
    };
  });
};

// 「不要」選択カテゴリを抽出
const extractNotNeededCategories = (
  selections?: Record<string, CategorySelection>
): NotNeededCategory[] => {
  if (!selections) return [];
  return Object.entries(selections)
    .filter(([, sel]) => sel.status === 'not_needed')
    .map(([categoryName, sel]) => ({ categoryName, note: sel.note }));
};

// カテゴリ別にグループ化
const groupByCategory = (items: EstimateItem[]): Map<string, EstimateItem[]> => {
  const grouped = new Map<string, EstimateItem[]>();
  items.forEach(item => {
    const category = item.category;
    const arr = grouped.get(category) ?? [];
    arr.push(item);
    grouped.set(category, arr);
  });
  return grouped;
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
// Excel出力（ExcelJS版）
// ========================================
export const generateEstimateExcel = async (data: EstimateData): Promise<Blob> => {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Gハウス IC Pochipochi System';
  workbook.created = new Date();

  const createdAt = data.createdAt || new Date();
  const validUntil = new Date(createdAt);
  validUntil.setDate(validUntil.getDate() + (data.validDays || 30));

  const estimateItems = convertToEstimateItems(data.items, data.planType, data.selections);
  const groupedItems = groupByCategory(estimateItems);
  const notNeededCategories = extractNotNeededCategories(data.selections);

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

  // ========== 見積書シート ==========
  const sheet = workbook.addWorksheet('見積書', {
    pageSetup: {
      paperSize: 9, // A4
      orientation: 'portrait',
      fitToPage: true,
      fitToWidth: 1,
      margins: { left: 0.5, right: 0.5, top: 0.75, bottom: 0.75, header: 0.3, footer: 0.3 }
    }
  });

  // カラム幅設定
  sheet.columns = [
    { width: 15 },  // A: カテゴリ
    { width: 28 },  // B: 商品名
    { width: 12 },  // C: メーカー
    { width: 15 },  // D: 型番
    { width: 12 },  // E: バリアント
    { width: 15 },  // F: 適用部屋
    { width: 6 },   // G: 単位
    { width: 6 },   // H: 数量
    { width: 12 },  // I: 単価
    { width: 12 },  // J: 金額
    { width: 8 },   // K: 区分
  ];

  let rowNum = 1;

  // ----- タイトル -----
  sheet.mergeCells(`A${rowNum}:K${rowNum}`);
  const titleCell = sheet.getCell(`A${rowNum}`);
  titleCell.value = '御 見 積 書';
  titleCell.font = { size: 24, bold: true };
  titleCell.alignment = { horizontal: 'center', vertical: 'middle' };
  sheet.getRow(rowNum).height = 40;
  rowNum += 2;

  // ----- 顧客情報 -----
  sheet.mergeCells(`A${rowNum}:D${rowNum}`);
  const customerCell = sheet.getCell(`A${rowNum}`);
  customerCell.value = `${data.customerName || 'お客様'} 様`;
  customerCell.font = { size: 16, bold: true };
  customerCell.border = { bottom: { style: 'double', color: { argb: '000000' } } };

  sheet.getCell(`J${rowNum}`).value = '作成日:';
  sheet.getCell(`K${rowNum}`).value = formatDate(createdAt);
  sheet.getCell(`K${rowNum}`).alignment = { horizontal: 'right' };
  rowNum++;

  sheet.getCell(`A${rowNum}`).value = `物件名: ${data.projectName || ''}`;
  sheet.getCell(`J${rowNum}`).value = '有効期限:';
  sheet.getCell(`K${rowNum}`).value = formatDate(validUntil);
  sheet.getCell(`K${rowNum}`).alignment = { horizontal: 'right' };
  rowNum++;

  if (data.projectCode) {
    sheet.getCell(`A${rowNum}`).value = `物件コード: ${data.projectCode}`;
    rowNum++;
  }
  if (data.constructionAddress) {
    sheet.getCell(`A${rowNum}`).value = `建築地: ${data.constructionAddress}`;
    rowNum++;
  }
  rowNum++;

  // ----- プラン情報 -----
  sheet.mergeCells(`A${rowNum}:K${rowNum}`);
  const planCell = sheet.getCell(`A${rowNum}`);
  planCell.value = `プラン: ${data.planName || data.planType}`;
  planCell.font = { size: 12, bold: true, color: { argb: 'FFFFFF' } };
  planCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '14B8A6' } };
  planCell.alignment = { horizontal: 'center', vertical: 'middle' };
  sheet.getRow(rowNum).height = 28;
  rowNum += 2;

  // ----- 合計金額ボックス -----
  sheet.mergeCells(`A${rowNum}:K${rowNum + 1}`);
  const totalBox = sheet.getCell(`A${rowNum}`);
  totalBox.value = `合計金額（税込）: ¥${totalWithTax.toLocaleString()}`;
  totalBox.font = { size: 20, bold: true, color: { argb: 'FFFFFF' } };
  totalBox.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '1E3A8A' } };
  totalBox.alignment = { horizontal: 'center', vertical: 'middle' };
  sheet.getRow(rowNum).height = 25;
  sheet.getRow(rowNum + 1).height = 25;
  rowNum += 2;

  // 内訳
  sheet.getCell(`A${rowNum}`).value = '標準仕様:';
  sheet.getCell(`B${rowNum}`).value = `¥${standardTotal.toLocaleString()}`;
  sheet.getCell(`C${rowNum}`).value = 'オプション:';
  sheet.getCell(`D${rowNum}`).value = `¥${optionTotal.toLocaleString()}`;
  sheet.getCell(`E${rowNum}`).value = '消費税(10%):';
  sheet.getCell(`F${rowNum}`).value = `¥${taxAmount.toLocaleString()}`;
  sheet.getRow(rowNum).font = { size: 10 };
  rowNum += 2;

  // ----- 明細ヘッダー -----
  const headerRow = sheet.getRow(rowNum);
  const headers = ['カテゴリ', '商品名', 'メーカー', '型番', 'カラー', '適用部屋', '単位', '数量', '単価', '金額', '区分'];
  headers.forEach((header, i) => {
    const cell = headerRow.getCell(i + 1);
    cell.value = header;
    cell.font = { bold: true, color: { argb: 'FFFFFF' }, size: 10 };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '374151' } };
    cell.alignment = { horizontal: 'center', vertical: 'middle' };
    cell.border = {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
      left: { style: 'thin' },
      right: { style: 'thin' }
    };
  });
  headerRow.height = 22;
  rowNum++;

  // ----- 明細データ -----
  groupedItems.forEach((items, category) => {
    const categoryTotal = items.reduce((sum, item) => sum + item.totalPrice, 0);

    // カテゴリヘッダー行
    sheet.mergeCells(`A${rowNum}:J${rowNum}`);
    const catCell = sheet.getCell(`A${rowNum}`);
    catCell.value = `■ ${category}`;
    catCell.font = { bold: true, size: 11 };
    catCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'E5F3F1' } };
    sheet.getCell(`K${rowNum}`).value = `¥${categoryTotal.toLocaleString()}`;
    sheet.getCell(`K${rowNum}`).font = { bold: true };
    sheet.getCell(`K${rowNum}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'E5F3F1' } };
    sheet.getCell(`K${rowNum}`).alignment = { horizontal: 'right' };
    rowNum++;

    // アイテム行
    items.forEach(item => {
      const row = sheet.getRow(rowNum);
      const roomInfo = item.appliedRooms && item.appliedRooms.length > 0
        ? getRoomNames(item.appliedRooms).join('、')
        : '';

      const rowData = [
        '',
        item.name,
        item.manufacturer,
        item.modelNumber,
        item.variant,
        roomInfo,
        item.unit,
        item.quantity,
        item.unitPrice,
        item.totalPrice,
        item.isOption ? 'OP' : '標準'
      ];

      rowData.forEach((value, i) => {
        const cell = row.getCell(i + 1);
        cell.value = value;
        cell.font = { size: 9 };
        cell.border = {
          top: { style: 'thin', color: { argb: 'E5E7EB' } },
          bottom: { style: 'thin', color: { argb: 'E5E7EB' } },
          left: { style: 'thin', color: { argb: 'E5E7EB' } },
          right: { style: 'thin', color: { argb: 'E5E7EB' } }
        };

        // 数値列の書式
        if (i === 8 || i === 9) {
          cell.numFmt = '¥#,##0';
          cell.alignment = { horizontal: 'right' };
        }
        if (i === 7) {
          cell.alignment = { horizontal: 'center' };
        }
        if (i === 10) {
          cell.alignment = { horizontal: 'center' };
          if (item.isOption) {
            cell.font = { size: 9, color: { argb: 'F97316' }, bold: true };
          } else {
            cell.font = { size: 9, color: { argb: '059669' } };
          }
        }
      });

      // オプション行の背景色
      if (item.isOption) {
        row.eachCell((cell) => {
          cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF7ED' } };
        });
      }

      rowNum++;
    });
  });

  rowNum++;

  // ----- 不要選択セクション -----
  if (notNeededCategories.length > 0) {
    sheet.mergeCells(`A${rowNum}:K${rowNum}`);
    const notNeededTitle = sheet.getCell(`A${rowNum}`);
    notNeededTitle.value = '【設置しない項目】';
    notNeededTitle.font = { bold: true, size: 11 };
    notNeededTitle.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F5F5F5' } };
    rowNum++;

    notNeededCategories.forEach(({ categoryName, note }) => {
      sheet.getCell(`A${rowNum}`).value = categoryName;
      sheet.getCell(`B${rowNum}`).value = note || '設置しない';
      sheet.getCell(`B${rowNum}`).font = { color: { argb: '888888' } };
      rowNum++;
    });
    rowNum++;
  }

  // ----- 備考 -----
  sheet.mergeCells(`A${rowNum}:K${rowNum}`);
  sheet.getCell(`A${rowNum}`).value = '【備考】';
  sheet.getCell(`A${rowNum}`).font = { bold: true };
  rowNum++;
  sheet.mergeCells(`A${rowNum}:K${rowNum}`);
  sheet.getCell(`A${rowNum}`).value = data.notes || '';
  rowNum += 2;

  // ----- 注意事項 -----
  sheet.getCell(`A${rowNum}`).value = '※本見積書の有効期限は発行日より30日間です。';
  sheet.getCell(`A${rowNum}`).font = { size: 9, color: { argb: '666666' } };
  rowNum++;
  sheet.getCell(`A${rowNum}`).value = '※価格は予告なく変更される場合があります。';
  sheet.getCell(`A${rowNum}`).font = { size: 9, color: { argb: '666666' } };

  // ========== カテゴリ別集計シート ==========
  const summarySheet = workbook.addWorksheet('カテゴリ別集計');

  summarySheet.columns = [
    { width: 25 },
    { width: 12 },
    { width: 18 },
  ];

  let sRowNum = 1;

  // タイトル
  summarySheet.mergeCells(`A${sRowNum}:C${sRowNum}`);
  const sTitleCell = summarySheet.getCell(`A${sRowNum}`);
  sTitleCell.value = 'カテゴリ別集計';
  sTitleCell.font = { size: 16, bold: true };
  sTitleCell.alignment = { horizontal: 'center' };
  sRowNum += 2;

  // ヘッダー
  const sHeaderRow = summarySheet.getRow(sRowNum);
  ['カテゴリ', 'アイテム数', '合計金額'].forEach((header, i) => {
    const cell = sHeaderRow.getCell(i + 1);
    cell.value = header;
    cell.font = { bold: true, color: { argb: 'FFFFFF' } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '374151' } };
    cell.alignment = { horizontal: 'center' };
    cell.border = {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
      left: { style: 'thin' },
      right: { style: 'thin' }
    };
  });
  sRowNum++;

  // データ
  groupedItems.forEach((items, category) => {
    const categoryTotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
    const row = summarySheet.getRow(sRowNum);
    row.getCell(1).value = category;
    row.getCell(2).value = items.length;
    row.getCell(2).alignment = { horizontal: 'center' };
    row.getCell(3).value = categoryTotal;
    row.getCell(3).numFmt = '¥#,##0';
    row.getCell(3).alignment = { horizontal: 'right' };
    row.eachCell((cell) => {
      cell.border = {
        top: { style: 'thin', color: { argb: 'E5E7EB' } },
        bottom: { style: 'thin', color: { argb: 'E5E7EB' } },
        left: { style: 'thin', color: { argb: 'E5E7EB' } },
        right: { style: 'thin', color: { argb: 'E5E7EB' } }
      };
    });
    sRowNum++;
  });

  // 合計行
  sRowNum++;
  const totalRow = summarySheet.getRow(sRowNum);
  totalRow.getCell(1).value = '合計';
  totalRow.getCell(1).font = { bold: true };
  totalRow.getCell(2).value = estimateItems.length;
  totalRow.getCell(2).alignment = { horizontal: 'center' };
  totalRow.getCell(2).font = { bold: true };
  totalRow.getCell(3).value = grandTotal;
  totalRow.getCell(3).numFmt = '¥#,##0';
  totalRow.getCell(3).alignment = { horizontal: 'right' };
  totalRow.getCell(3).font = { bold: true, color: { argb: '1E3A8A' } };
  totalRow.eachCell((cell) => {
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F3F4F6' } };
    cell.border = {
      top: { style: 'medium' },
      bottom: { style: 'medium' },
      left: { style: 'thin' },
      right: { style: 'thin' }
    };
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
  a.download = filename || `estimate_${data.projectCode || Date.now()}.xlsx`;
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
    projectCode: `PRJ-${Date.now()}`,
    planType: 'LACIE',
    planName: 'LACIE',
    items,
    selections: options.selections,
    createdAt: new Date(),
  };

  await downloadEstimateExcel(data, `見積書_${options.customerName}_${new Date().toLocaleDateString('ja-JP').replace(/\//g, '')}.xlsx`);
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

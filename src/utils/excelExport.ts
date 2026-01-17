/**
 * Excel出力ユーティリティ
 * 見積書・仕様書のExcel形式出力
 */

import * as XLSX from 'xlsx';

interface EstimateItem {
  category: string;
  subcategory?: string;
  itemName: string;
  specification?: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  totalPrice: number;
  note?: string;
}

interface ProjectInfo {
  projectCode: string;
  projectName: string;
  customerName: string;
  planType: string;
  createdAt: string;
  coordinatorName?: string;
}

interface ExportOptions {
  includeHeader?: boolean;
  includeFooter?: boolean;
  showTotalPrice?: boolean;
}

/**
 * 見積書をExcel形式でエクスポート
 */
export function exportEstimateToExcel(
  projectInfo: ProjectInfo,
  items: EstimateItem[],
  options: ExportOptions = {}
): void {
  const { includeHeader = true, showTotalPrice = true } = options;

  // ワークブックを作成
  const wb = XLSX.utils.book_new();

  // データ配列を構築
  const data: (string | number)[][] = [];

  // ヘッダー情報
  if (includeHeader) {
    data.push(['見積書']);
    data.push([]);
    data.push(['プロジェクト番号', projectInfo.projectCode]);
    data.push(['プロジェクト名', projectInfo.projectName]);
    data.push(['お客様名', projectInfo.customerName]);
    data.push(['プラン', projectInfo.planType]);
    data.push(['作成日', projectInfo.createdAt]);
    if (projectInfo.coordinatorName) {
      data.push(['担当者', projectInfo.coordinatorName]);
    }
    data.push([]);
    data.push([]);
  }

  // テーブルヘッダー
  data.push([
    'カテゴリ',
    'サブカテゴリ',
    '商品名',
    '仕様',
    '数量',
    '単位',
    '単価',
    '金額',
    '備考',
  ]);

  // アイテム行
  let totalPrice = 0;
  items.forEach((item) => {
    data.push([
      item.category,
      item.subcategory || '',
      item.itemName,
      item.specification || '',
      item.quantity,
      item.unit,
      item.unitPrice,
      item.totalPrice,
      item.note || '',
    ]);
    totalPrice += item.totalPrice;
  });

  // 合計行
  if (showTotalPrice) {
    data.push([]);
    data.push(['', '', '', '', '', '', '合計', totalPrice, '']);
  }

  // ワークシートを作成
  const ws = XLSX.utils.aoa_to_sheet(data);

  // 列幅を設定
  ws['!cols'] = [
    { wch: 15 }, // カテゴリ
    { wch: 15 }, // サブカテゴリ
    { wch: 30 }, // 商品名
    { wch: 20 }, // 仕様
    { wch: 8 },  // 数量
    { wch: 6 },  // 単位
    { wch: 12 }, // 単価
    { wch: 12 }, // 金額
    { wch: 20 }, // 備考
  ];

  // シートをブックに追加
  XLSX.utils.book_append_sheet(wb, ws, '見積書');

  // ファイル名を生成
  const fileName = `見積書_${projectInfo.projectCode}_${new Date().toISOString().split('T')[0]}.xlsx`;

  // ダウンロード
  XLSX.writeFile(wb, fileName);
}

/**
 * 仕様書をExcel形式でエクスポート
 */
export function exportSpecificationToExcel(
  projectInfo: ProjectInfo,
  specifications: Array<{
    category: string;
    items: Array<{
      name: string;
      value: string;
      note?: string;
    }>;
  }>
): void {
  const wb = XLSX.utils.book_new();
  const data: (string | number)[][] = [];

  // ヘッダー
  data.push(['仕様書']);
  data.push([]);
  data.push(['プロジェクト番号', projectInfo.projectCode]);
  data.push(['プロジェクト名', projectInfo.projectName]);
  data.push(['お客様名', projectInfo.customerName]);
  data.push(['プラン', projectInfo.planType]);
  data.push(['作成日', projectInfo.createdAt]);
  data.push([]);

  // カテゴリごとに仕様を追加
  specifications.forEach((spec) => {
    data.push([]);
    data.push([`■ ${spec.category}`]);
    data.push(['項目', '選択内容', '備考']);

    spec.items.forEach((item) => {
      data.push([item.name, item.value, item.note || '']);
    });
  });

  const ws = XLSX.utils.aoa_to_sheet(data);

  // 列幅を設定
  ws['!cols'] = [
    { wch: 20 },
    { wch: 40 },
    { wch: 30 },
  ];

  XLSX.utils.book_append_sheet(wb, ws, '仕様書');

  const fileName = `仕様書_${projectInfo.projectCode}_${new Date().toISOString().split('T')[0]}.xlsx`;
  XLSX.writeFile(wb, fileName);
}

/**
 * カートの内容をExcel形式でエクスポート
 */
export function exportCartToExcel(
  customerName: string,
  cartItems: Array<{
    category: string;
    productName: string;
    variant?: string;
    quantity: number;
    unit: string;
    price: number;
  }>
): void {
  const wb = XLSX.utils.book_new();
  const data: (string | number)[][] = [];

  // ヘッダー
  data.push(['選択内容一覧']);
  data.push([]);
  data.push(['お客様名', customerName]);
  data.push(['出力日時', new Date().toLocaleString('ja-JP')]);
  data.push([]);

  // テーブルヘッダー
  data.push(['カテゴリ', '商品名', 'バリエーション', '数量', '単位', '金額']);

  // アイテム
  let total = 0;
  cartItems.forEach((item) => {
    data.push([
      item.category,
      item.productName,
      item.variant || '-',
      item.quantity,
      item.unit,
      item.price,
    ]);
    total += item.price;
  });

  // 合計
  data.push([]);
  data.push(['', '', '', '', '合計', total]);

  const ws = XLSX.utils.aoa_to_sheet(data);

  ws['!cols'] = [
    { wch: 15 },
    { wch: 30 },
    { wch: 20 },
    { wch: 8 },
    { wch: 6 },
    { wch: 12 },
  ];

  XLSX.utils.book_append_sheet(wb, ws, '選択内容');

  const fileName = `選択内容_${customerName}_${new Date().toISOString().split('T')[0]}.xlsx`;
  XLSX.writeFile(wb, fileName);
}

/**
 * 担当者別集計をExcel形式でエクスポート
 */
export function exportCoordinatorSummaryToExcel(
  summaryData: Array<{
    coordinatorName: string;
    projectCount: number;
    totalOptionAmount: number;
    projects: Array<{
      projectName: string;
      customerName: string;
      optionAmount: number;
      status: string;
    }>;
  }>
): void {
  const wb = XLSX.utils.book_new();

  // サマリーシート
  const summaryData2D: (string | number)[][] = [];
  summaryData2D.push(['担当者別集計レポート']);
  summaryData2D.push(['出力日時', new Date().toLocaleString('ja-JP')]);
  summaryData2D.push([]);
  summaryData2D.push(['担当者名', '担当棟数', 'オプション合計金額']);

  let grandTotal = 0;
  summaryData.forEach((coordinator) => {
    summaryData2D.push([
      coordinator.coordinatorName,
      coordinator.projectCount,
      coordinator.totalOptionAmount,
    ]);
    grandTotal += coordinator.totalOptionAmount;
  });

  summaryData2D.push([]);
  summaryData2D.push(['合計', summaryData.reduce((sum, c) => sum + c.projectCount, 0), grandTotal]);

  const summaryWs = XLSX.utils.aoa_to_sheet(summaryData2D);
  summaryWs['!cols'] = [{ wch: 20 }, { wch: 12 }, { wch: 18 }];
  XLSX.utils.book_append_sheet(wb, summaryWs, 'サマリー');

  // 担当者ごとの詳細シート
  summaryData.forEach((coordinator) => {
    const detailData: (string | number)[][] = [];
    detailData.push([`${coordinator.coordinatorName} - プロジェクト詳細`]);
    detailData.push([]);
    detailData.push(['プロジェクト名', 'お客様名', 'オプション金額', 'ステータス']);

    coordinator.projects.forEach((project) => {
      detailData.push([
        project.projectName,
        project.customerName,
        project.optionAmount,
        project.status,
      ]);
    });

    detailData.push([]);
    detailData.push(['', '合計', coordinator.totalOptionAmount, '']);

    const detailWs = XLSX.utils.aoa_to_sheet(detailData);
    detailWs['!cols'] = [{ wch: 25 }, { wch: 15 }, { wch: 15 }, { wch: 12 }];

    // シート名は31文字以内に
    const sheetName = coordinator.coordinatorName.substring(0, 31);
    XLSX.utils.book_append_sheet(wb, detailWs, sheetName);
  });

  const fileName = `担当者別集計_${new Date().toISOString().split('T')[0]}.xlsx`;
  XLSX.writeFile(wb, fileName);
}

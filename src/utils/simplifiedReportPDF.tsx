/**
 * 簡素化レポートPDF出力機能
 * - オプション費用の抽出
 * - 未決定項目の抽出
 * - 白い背景＋青を基調としたシンプルなデザイン
 * - A4 PDF出力対応
 */
import type { CartItem } from '../types/product';
import type { CategorySelection } from '../stores/useSelectionStore';
import { REQUIRED_CATEGORIES } from '../components/catalog/catalogUtils';

interface SimplifiedReportData {
  customerName: string;
  projectName: string;
  planName: string;
  date: string;
  items: CartItem[];
  selections?: Record<string, CategorySelection>;
}

// オプション費用アイテムを抽出
interface OptionItem {
  categoryName: string;
  productName: string;
  manufacturer: string;
  variant: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

const extractOptionItems = (items: CartItem[]): OptionItem[] => {
  return items
    .filter(item => item.product.isOption)
    .map(item => {
      const pricing = item.product.pricing?.find(
        p => p.plan === 'LACIE' || p.planId === 'LACIE'
      );
      const unitPrice = pricing?.price || 0;
      return {
        categoryName: item.product.categoryName || '未分類',
        productName: item.product.name,
        manufacturer: item.product.manufacturer || '',
        variant: item.selectedVariant?.color || 'デフォルト',
        price: unitPrice,
        quantity: item.quantity,
        totalPrice: unitPrice * item.quantity,
      };
    })
    .filter(item => item.totalPrice > 0);
};

// 未決定カテゴリを抽出
interface UndecidedCategory {
  categoryName: string;
  isRequired: boolean;
}

const extractUndecidedCategories = (
  selections: Record<string, CategorySelection> | undefined,
  items: CartItem[]
): UndecidedCategory[] => {
  // 選択済みカテゴリを取得
  const selectedCategories = new Set<string>();

  // カート内のアイテムからカテゴリを取得
  items.forEach(item => {
    if (item.product.categoryName) {
      selectedCategories.add(item.product.categoryName);
    }
  });

  // selectionsから選択済みまたは不要のカテゴリを取得
  if (selections) {
    Object.entries(selections).forEach(([categoryName, sel]) => {
      if (sel.status === 'selected' || sel.status === 'not_needed') {
        selectedCategories.add(categoryName);
      }
    });
  }

  // 必須カテゴリで未選択のものを抽出
  const undecided: UndecidedCategory[] = [];

  REQUIRED_CATEGORIES.forEach(reqCat => {
    const isSelected = Array.from(selectedCategories).some(
      cat => cat.includes(reqCat) || reqCat.includes(cat)
    );
    if (!isSelected) {
      undecided.push({
        categoryName: reqCat,
        isRequired: true,
      });
    }
  });

  return undecided;
};

// 価格をフォーマット
const formatPrice = (price: number): string => {
  return `¥${price.toLocaleString()}`;
};

// 簡素化レポートHTMLを生成
export const generateSimplifiedReportHTML = (data: SimplifiedReportData): string => {
  const { customerName, projectName, planName, date, items, selections } = data;

  const optionItems = extractOptionItems(items);
  const undecidedCategories = extractUndecidedCategories(selections, items);

  const optionTotal = optionItems.reduce((sum, item) => sum + item.totalPrice, 0);

  // オプション一覧テーブル行
  let optionRows = '';
  if (optionItems.length > 0) {
    optionItems.forEach((item, idx) => {
      optionRows += `
        <tr>
          <td class="cell-num">${idx + 1}</td>
          <td class="cell-category">${item.categoryName}</td>
          <td class="cell-name">
            <div class="product-name">${item.productName}</div>
            <div class="product-detail">${item.manufacturer} / ${item.variant}</div>
          </td>
          <td class="cell-qty">${item.quantity}</td>
          <td class="cell-price">${formatPrice(item.price)}</td>
          <td class="cell-total">${formatPrice(item.totalPrice)}</td>
        </tr>
      `;
    });
  }

  // 未決定項目リスト
  let undecidedRows = '';
  if (undecidedCategories.length > 0) {
    undecidedCategories.forEach((cat, idx) => {
      undecidedRows += `
        <tr>
          <td class="cell-num">${idx + 1}</td>
          <td class="cell-category">${cat.categoryName}</td>
          <td class="cell-status">
            <span class="status-badge required">必須</span>
          </td>
        </tr>
      `;
    });
  }

  return `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>確認事項レポート - ${customerName}様</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    @page {
      size: A4;
      margin: 20mm;
    }

    body {
      font-family: 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif;
      font-size: 10pt;
      line-height: 1.6;
      color: #1e3a5f;
      background: #fff;
    }

    .page {
      max-width: 210mm;
      margin: 0 auto;
      padding: 24px;
    }

    /* ヘッダー */
    .header {
      text-align: center;
      margin-bottom: 32px;
      padding-bottom: 16px;
      border-bottom: 2px solid #2563eb;
    }

    .header h1 {
      font-size: 20pt;
      font-weight: 700;
      color: #1e3a5f;
      letter-spacing: 0.15em;
      margin-bottom: 8px;
    }

    .header-subtitle {
      font-size: 10pt;
      color: #64748b;
    }

    /* 顧客情報 */
    .info-section {
      display: flex;
      justify-content: space-between;
      margin-bottom: 32px;
      padding: 16px 20px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
    }

    .info-left {
      text-align: left;
    }

    .info-right {
      text-align: right;
    }

    .customer-name {
      font-size: 14pt;
      font-weight: 700;
      color: #1e3a5f;
      margin-bottom: 4px;
    }

    .project-name {
      font-size: 11pt;
      color: #475569;
    }

    .plan-badge {
      display: inline-block;
      margin-top: 8px;
      padding: 4px 12px;
      background: #2563eb;
      color: #fff;
      border-radius: 4px;
      font-size: 9pt;
      font-weight: 600;
    }

    .date-text {
      font-size: 9pt;
      color: #64748b;
    }

    /* セクションタイトル */
    .section {
      margin-bottom: 32px;
    }

    .section-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13pt;
      font-weight: 700;
      color: #1e40af;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid #dbeafe;
    }

    .section-icon {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #2563eb;
      color: #fff;
      border-radius: 50%;
      font-size: 12pt;
    }

    /* テーブル共通 */
    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 16px;
    }

    .data-table th {
      background: #1e40af;
      color: #fff;
      padding: 10px 12px;
      font-size: 9pt;
      font-weight: 600;
      text-align: left;
      border: 1px solid #1e3a8a;
    }

    .data-table th:first-child {
      border-radius: 6px 0 0 0;
    }

    .data-table th:last-child {
      border-radius: 0 6px 0 0;
    }

    .data-table td {
      padding: 10px 12px;
      font-size: 9pt;
      border: 1px solid #e2e8f0;
      background: #fff;
    }

    .data-table tr:nth-child(even) td {
      background: #f8fafc;
    }

    .data-table tr:last-child td:first-child {
      border-radius: 0 0 0 6px;
    }

    .data-table tr:last-child td:last-child {
      border-radius: 0 0 6px 0;
    }

    .cell-num {
      text-align: center;
      width: 40px;
      color: #64748b;
    }

    .cell-category {
      width: 100px;
      font-weight: 500;
      color: #334155;
    }

    .cell-name {
      min-width: 180px;
    }

    .product-name {
      font-weight: 600;
      color: #1e3a5f;
      margin-bottom: 2px;
    }

    .product-detail {
      font-size: 8pt;
      color: #94a3b8;
    }

    .cell-qty {
      text-align: center;
      width: 50px;
    }

    .cell-price,
    .cell-total {
      text-align: right;
      width: 90px;
      font-weight: 500;
    }

    .cell-total {
      color: #1e40af;
      font-weight: 700;
    }

    .cell-status {
      text-align: center;
      width: 80px;
    }

    /* ステータスバッジ */
    .status-badge {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 8pt;
      font-weight: 600;
    }

    .status-badge.required {
      background: #fee2e2;
      color: #dc2626;
    }

    /* 合計セクション */
    .total-section {
      display: flex;
      justify-content: flex-end;
      margin-top: 16px;
      padding: 16px 20px;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-radius: 8px;
    }

    .total-box {
      text-align: right;
    }

    .total-label {
      font-size: 10pt;
      color: #475569;
      margin-bottom: 4px;
    }

    .total-value {
      font-size: 18pt;
      font-weight: 700;
      color: #1e40af;
    }

    /* 空メッセージ */
    .empty-message {
      padding: 24px;
      text-align: center;
      color: #64748b;
      background: #f8fafc;
      border: 1px dashed #cbd5e1;
      border-radius: 8px;
      font-size: 10pt;
    }

    .empty-icon {
      font-size: 24pt;
      margin-bottom: 8px;
    }

    /* サマリー */
    .summary-section {
      margin-bottom: 32px;
      display: flex;
      gap: 16px;
    }

    .summary-card {
      flex: 1;
      padding: 16px;
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      text-align: center;
    }

    .summary-card.highlight {
      background: #eff6ff;
      border-color: #bfdbfe;
    }

    .summary-card.warning {
      background: #fef3c7;
      border-color: #fcd34d;
    }

    .summary-value {
      font-size: 24pt;
      font-weight: 700;
      color: #1e40af;
      margin-bottom: 4px;
    }

    .summary-card.warning .summary-value {
      color: #d97706;
    }

    .summary-label {
      font-size: 9pt;
      color: #64748b;
    }

    /* フッター */
    .footer {
      margin-top: 40px;
      padding-top: 16px;
      border-top: 1px solid #e2e8f0;
      display: flex;
      justify-content: space-between;
      font-size: 8pt;
      color: #94a3b8;
    }

    /* 印刷設定 */
    @media print {
      body {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }

      .page {
        padding: 0;
        max-width: none;
      }
    }
  </style>
</head>
<body>
  <div class="page">
    <header class="header">
      <h1>確認事項レポート</h1>
      <p class="header-subtitle">CONFIRMATION REPORT</p>
    </header>

    <section class="info-section">
      <div class="info-left">
        <p class="customer-name">${customerName} 様</p>
        <p class="project-name">${projectName}</p>
        <span class="plan-badge">${planName}</span>
      </div>
      <div class="info-right">
        <p class="date-text">作成日: ${date}</p>
      </div>
    </section>

    <section class="summary-section">
      <div class="summary-card highlight">
        <div class="summary-value">${formatPrice(optionTotal)}</div>
        <div class="summary-label">オプション追加費用</div>
      </div>
      <div class="summary-card ${undecidedCategories.length > 0 ? 'warning' : ''}">
        <div class="summary-value">${undecidedCategories.length}</div>
        <div class="summary-label">未決定項目</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">
        <span class="section-icon">1</span>
        オプション費用一覧
      </h2>

      ${optionItems.length > 0 ? `
      <table class="data-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>カテゴリ</th>
            <th>商品名 / 詳細</th>
            <th>数量</th>
            <th>単価</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          ${optionRows}
        </tbody>
      </table>

      <div class="total-section">
        <div class="total-box">
          <div class="total-label">オプション費用 合計（税別）</div>
          <div class="total-value">${formatPrice(optionTotal)}</div>
        </div>
      </div>
      ` : `
      <div class="empty-message">
        <div class="empty-icon">✓</div>
        オプション費用はありません
      </div>
      `}
    </section>

    <section class="section">
      <h2 class="section-title">
        <span class="section-icon">2</span>
        未決定項目一覧
      </h2>

      ${undecidedCategories.length > 0 ? `
      <table class="data-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>カテゴリ名</th>
            <th>ステータス</th>
          </tr>
        </thead>
        <tbody>
          ${undecidedRows}
        </tbody>
      </table>
      ` : `
      <div class="empty-message">
        <div class="empty-icon">✓</div>
        すべての必須項目が選択されています
      </div>
      `}
    </section>

    <footer class="footer">
      <div>
        <p>※本レポートは ${date} 時点の内容です</p>
      </div>
      <div>
        <p>Gハウス</p>
      </div>
    </footer>
  </div>
</body>
</html>
  `;
};

// 簡素化レポートを新しいウィンドウで表示
export const openSimplifiedReportWindow = (data: SimplifiedReportData): void => {
  const html = generateSimplifiedReportHTML(data);
  const newWindow = window.open('', '_blank', 'width=900,height=1200');

  if (newWindow) {
    newWindow.document.write(html);
    newWindow.document.close();

    // 印刷ボタンを追加
    const printButton = newWindow.document.createElement('button');
    printButton.textContent = 'PDF保存 / 印刷';
    printButton.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 24px;
      background: #2563eb;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      z-index: 1000;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
      transition: background 0.2s;
    `;
    printButton.onmouseover = () => {
      printButton.style.background = '#1d4ed8';
    };
    printButton.onmouseout = () => {
      printButton.style.background = '#2563eb';
    };
    printButton.onclick = () => newWindow.print();
    newWindow.document.body.appendChild(printButton);
  }
};

// ExportPanel向けラッパー関数
interface GenerateSimplifiedReportOptions {
  customerName: string;
  projectName: string;
  planName?: string;
  selections?: Record<string, CategorySelection>;
}

export const generateSimplifiedReport = async (
  items: CartItem[],
  options: GenerateSimplifiedReportOptions
): Promise<void> => {
  const data: SimplifiedReportData = {
    customerName: options.customerName,
    projectName: options.projectName,
    planName: options.planName || 'LACIE',
    date: new Date().toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    items,
    selections: options.selections,
  };

  openSimplifiedReportWindow(data);
};

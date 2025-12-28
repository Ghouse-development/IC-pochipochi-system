/**
 * 仕様書PDF出力機能
 * - 美しいデザインの仕様書
 * - カテゴリ別整理
 * - 部屋適用情報の表示
 * - 「不要」選択の表示
 * - 印刷最適化
 */
import type { CartItem } from '../types/product';
import type { CategorySelection } from '../stores/useSelectionStore';
import { getRoomNames } from '../stores/useSelectionStore';

interface SpecificationData {
  customerName: string;
  projectName: string;
  planName: string;
  date: string;
  items: CartItem[];
  staffName?: string;
  companyName?: string;
  // 選択状態（「不要」選択や部屋適用情報を含む）
  selections?: Record<string, CategorySelection>;
}

// カテゴリ別にアイテムをグループ化
const groupByCategory = (items: CartItem[]): Map<string, CartItem[]> => {
  const groups = new Map<string, CartItem[]>();

  items.forEach(item => {
    const category = item.product.categoryName;
    const arr = groups.get(category) ?? [];
    arr.push(item);
    groups.set(category, arr);
  });

  return groups;
};

// 仕様書HTMLを生成
export const generateSpecificationHTML = (data: SpecificationData): string => {
  const { customerName, projectName, planName, date, items, staffName, companyName, selections = {} } = data;
  const categoryGroups = groupByCategory(items);

  // 「不要」選択のカテゴリを抽出
  const notNeededCategories = Object.entries(selections)
    .filter(([, sel]) => sel.status === 'not_needed')
    .map(([categoryName, sel]) => ({ categoryName, note: sel.note }));

  const formatPrice = (price: number): string => {
    if (price === 0) return '標準';
    return `¥${price.toLocaleString()}`;
  };

  let itemRows = '';
  let categoryIndex = 0;

  categoryGroups.forEach((categoryItems, categoryName) => {
    categoryIndex++;
    const categoryTotal = categoryItems.reduce((sum, item) => {
      const price = item.product.pricing.find(p => p.plan === 'LACIE' || p.planId === 'LACIE')?.price || 0;
      return sum + (price * item.quantity);
    }, 0);

    itemRows += `
      <tr class="category-header">
        <td colspan="7">
          <div class="category-title">
            <span class="category-num">${categoryIndex}</span>
            ${categoryName}
          </div>
        </td>
      </tr>
    `;

    categoryItems.forEach((item, idx) => {
      const price = item.product.pricing.find(p => p.plan === 'LACIE' || p.planId === 'LACIE')?.price || 0;
      const totalPrice = price * item.quantity;

      // 選択状態から部屋情報を取得
      const categorySelection = selections[item.product.categoryName];
      const appliedRooms = categorySelection?.appliedRooms || [];
      const roomNamesText = appliedRooms.length > 0
        ? getRoomNames(appliedRooms).join('、')
        : '';

      itemRows += `
        <tr class="item-row ${item.product.isOption ? 'option-item' : 'standard-item'}">
          <td class="item-num">${categoryIndex}-${idx + 1}</td>
          <td class="item-name">
            <div class="product-name">${item.product.name}</div>
            <div class="product-detail">${item.product.manufacturer} ${item.product.modelNumber || ''}</div>
            ${roomNamesText ? `<div class="room-info">📍 ${roomNamesText}</div>` : ''}
          </td>
          <td class="item-color">${item.selectedVariant?.color || '標準色'}</td>
          <td class="item-type ${item.product.isOption ? 'type-option' : 'type-standard'}">
            ${item.product.isOption ? 'OP' : '標準'}
          </td>
          <td class="item-qty">${item.quantity}</td>
          <td class="item-unit">${item.product.unit}</td>
          <td class="item-price">${formatPrice(totalPrice)}</td>
        </tr>
      `;

      // 注意事項がある場合
      if (item.product.description) {
        itemRows += `
          <tr class="note-row">
            <td></td>
            <td colspan="6" class="note-content">※ ${item.product.description}</td>
          </tr>
        `;
      }
    });

    // カテゴリ小計
    itemRows += `
      <tr class="category-subtotal">
        <td colspan="6" class="subtotal-label">${categoryName} 小計</td>
        <td class="subtotal-price">${formatPrice(categoryTotal)}</td>
      </tr>
    `;
  });

  // 合計計算
  const totalOption = items
    .filter(i => i.product.isOption)
    .reduce((sum, item) => {
      const price = item.product.pricing.find(p => p.plan === 'LACIE' || p.planId === 'LACIE')?.price || 0;
      return sum + (price * item.quantity);
    }, 0);

  const totalStandard = items
    .filter(i => !i.product.isOption)
    .reduce((sum, item) => {
      const price = item.product.pricing.find(p => p.plan === 'LACIE' || p.planId === 'LACIE')?.price || 0;
      return sum + (price * item.quantity);
    }, 0);

  const grandTotal = totalOption + totalStandard;

  return `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>仕様書 - ${customerName}様 ${projectName}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    @page {
      size: A4;
      margin: 15mm;
    }

    body {
      font-family: 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif;
      font-size: 10pt;
      line-height: 1.6;
      color: #333;
      background: #fff;
    }

    .page {
      max-width: 210mm;
      margin: 0 auto;
      padding: 20px;
    }

    /* ヘッダー */
    .header {
      text-align: center;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 3px double #333;
    }

    .header h1 {
      font-size: 24pt;
      font-weight: bold;
      letter-spacing: 0.5em;
      margin-bottom: 10px;
    }

    .header-subtitle {
      font-size: 12pt;
      color: #666;
    }

    /* 顧客情報 */
    .customer-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      padding: 20px;
      background: #f8f9fa;
      border-radius: 8px;
    }

    .customer-info .left {
      text-align: left;
    }

    .customer-info .right {
      text-align: right;
    }

    .customer-name {
      font-size: 16pt;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .project-name {
      font-size: 12pt;
      color: #666;
    }

    .plan-badge {
      display: inline-block;
      padding: 4px 12px;
      background: linear-gradient(135deg, #14b8a6, #0d9488);
      color: white;
      border-radius: 20px;
      font-size: 10pt;
      font-weight: bold;
      margin-top: 10px;
    }

    .date {
      font-size: 10pt;
      color: #666;
    }

    /* テーブル */
    .spec-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 30px;
    }

    .spec-table th {
      background: #1a1a2e;
      color: white;
      padding: 12px 8px;
      font-size: 9pt;
      font-weight: bold;
      text-align: center;
      border: 1px solid #333;
    }

    .spec-table td {
      padding: 10px 8px;
      border: 1px solid #ddd;
      font-size: 9pt;
    }

    .category-header td {
      background: #e8f5f3;
      padding: 12px;
      border: none;
      border-bottom: 2px solid #14b8a6;
    }

    .category-title {
      font-weight: bold;
      font-size: 11pt;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .category-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      background: #14b8a6;
      color: white;
      border-radius: 50%;
      font-size: 10pt;
    }

    .item-row:nth-child(even) {
      background: #fafafa;
    }

    .item-num {
      text-align: center;
      color: #666;
      width: 50px;
    }

    .item-name {
      min-width: 200px;
    }

    .product-name {
      font-weight: bold;
      margin-bottom: 2px;
    }

    .product-detail {
      font-size: 8pt;
      color: #888;
    }

    .room-info {
      font-size: 8pt;
      color: #0d9488;
      margin-top: 2px;
      font-weight: 500;
    }

    .item-color {
      text-align: center;
      font-size: 8pt;
    }

    .item-type {
      text-align: center;
      font-weight: bold;
    }

    .type-standard {
      color: #14b8a6;
    }

    .type-option {
      color: #f97316;
    }

    .item-qty, .item-unit {
      text-align: center;
      width: 50px;
    }

    .item-price {
      text-align: right;
      font-weight: bold;
      width: 80px;
    }

    .option-item {
      background: #fff7ed !important;
    }

    .note-row td {
      border: none;
      padding: 4px 8px;
      background: transparent;
    }

    .note-content {
      font-size: 8pt;
      color: #e65100;
      padding-left: 60px !important;
    }

    .category-subtotal td {
      background: #f5f5f5;
      border-top: 2px solid #ddd;
    }

    .subtotal-label {
      text-align: right;
      padding-right: 20px !important;
      font-weight: bold;
      color: #666;
    }

    .subtotal-price {
      text-align: right;
      font-weight: bold;
    }

    /* 不要選択セクション */
    .not-needed-section {
      margin-top: 20px;
      margin-bottom: 20px;
      padding: 15px;
      background: #f5f5f5;
      border-radius: 8px;
      border-left: 4px solid #9e9e9e;
    }

    .not-needed-title {
      font-weight: bold;
      font-size: 11pt;
      color: #666;
      margin-bottom: 10px;
    }

    .not-needed-list {
      list-style: none;
      padding: 0;
    }

    .not-needed-item {
      display: flex;
      justify-content: space-between;
      padding: 8px 12px;
      margin-bottom: 4px;
      background: white;
      border-radius: 4px;
      border: 1px solid #e0e0e0;
    }

    .not-needed-category {
      font-weight: 500;
      color: #333;
    }

    .not-needed-note {
      font-size: 9pt;
      color: #888;
    }

    /* 合計セクション */
    .total-section {
      margin-top: 30px;
      padding: 20px;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      border-radius: 12px;
      color: white;
    }

    .total-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid rgba(255,255,255,0.2);
    }

    .total-row:last-child {
      border-bottom: none;
      padding-top: 20px;
      margin-top: 10px;
      border-top: 2px solid rgba(255,255,255,0.3);
    }

    .total-label {
      font-size: 11pt;
    }

    .total-value {
      font-size: 14pt;
      font-weight: bold;
    }

    .total-row:last-child .total-label {
      font-size: 14pt;
      font-weight: bold;
    }

    .total-row:last-child .total-value {
      font-size: 20pt;
      color: #14b8a6;
    }

    /* 注意事項 */
    .notes-section {
      margin-top: 30px;
      padding: 20px;
      background: #fff8e1;
      border-radius: 8px;
      border-left: 4px solid #ffc107;
    }

    .notes-title {
      font-weight: bold;
      margin-bottom: 10px;
      color: #f57c00;
    }

    .notes-list {
      font-size: 9pt;
      color: #666;
    }

    .notes-list li {
      margin-bottom: 5px;
    }

    /* フッター */
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      font-size: 9pt;
      color: #888;
    }

    .company-info {
      text-align: right;
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

      .total-section {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    }
  </style>
</head>
<body>
  <div class="page">
    <header class="header">
      <h1>仕 様 書</h1>
      <p class="header-subtitle">SPECIFICATION SHEET</p>
    </header>

    <section class="customer-info">
      <div class="left">
        <p class="customer-name">${customerName} 様</p>
        <p class="project-name">${projectName}</p>
        <span class="plan-badge">${planName || 'LACIE'}</span>
      </div>
      <div class="right">
        <p class="date">作成日: ${date}</p>
        ${staffName ? `<p>担当: ${staffName}</p>` : ''}
      </div>
    </section>

    <table class="spec-table">
      <thead>
        <tr>
          <th>No.</th>
          <th>商品名 / メーカー・品番</th>
          <th>色・仕様</th>
          <th>区分</th>
          <th>数量</th>
          <th>単位</th>
          <th>金額</th>
        </tr>
      </thead>
      <tbody>
        ${itemRows}
      </tbody>
    </table>

    ${notNeededCategories.length > 0 ? `
    <section class="not-needed-section">
      <h3 class="not-needed-title">設置しない項目</h3>
      <ul class="not-needed-list">
        ${notNeededCategories.map(({ categoryName, note }) => `
          <li class="not-needed-item">
            <span class="not-needed-category">${categoryName}</span>
            <span class="not-needed-note">${note || '設置しない'}</span>
          </li>
        `).join('')}
      </ul>
    </section>
    ` : ''}

    <div class="total-section">
      <div class="total-row">
        <span class="total-label">標準仕様 合計</span>
        <span class="total-value">${formatPrice(totalStandard)}</span>
      </div>
      <div class="total-row">
        <span class="total-label">オプション 合計</span>
        <span class="total-value">${formatPrice(totalOption)}</span>
      </div>
      <div class="total-row">
        <span class="total-label">総合計（税別）</span>
        <span class="total-value">${formatPrice(grandTotal)}</span>
      </div>
    </div>

    <section class="notes-section">
      <h3 class="notes-title">ご確認事項</h3>
      <ul class="notes-list">
        <li>本仕様書の内容は、ご契約時点での仕様となります。</li>
        <li>メーカー都合による仕様変更・廃番の場合は、代替品をご提案させていただきます。</li>
        <li>記載の金額は税別価格です。別途消費税がかかります。</li>
        <li>施工費・配送費は別途お見積りとなります。</li>
        <li>色味・質感は実際の商品と異なる場合があります。ショールームでのご確認をお勧めします。</li>
      </ul>
    </section>

    <footer class="footer">
      <div>
        <p>※この仕様書は ${date} 時点の内容です</p>
      </div>
      <div class="company-info">
        <p>${companyName || 'Gハウス'}</p>
      </div>
    </footer>
  </div>
</body>
</html>
  `;
};

// 仕様書を新しいウィンドウで表示
export const openSpecificationWindow = (data: SpecificationData): void => {
  const html = generateSpecificationHTML(data);
  const newWindow = window.open('', '_blank', 'width=900,height=1200');

  if (newWindow) {
    newWindow.document.write(html);
    newWindow.document.close();

    // 印刷ボタンを追加
    const printButton = newWindow.document.createElement('button');
    printButton.textContent = '印刷 / PDF保存';
    printButton.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 24px;
      background: linear-gradient(135deg, #14b8a6, #0d9488);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      z-index: 1000;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    printButton.onclick = () => newWindow.print();
    newWindow.document.body.appendChild(printButton);
  }
};

// ========================================
// ExportPanel向けラッパー関数
// ========================================
interface GenerateSpecificationPDFOptions {
  customerName: string;
  projectName: string;
  planName?: string;
  selections?: Record<string, CategorySelection>;
}

export const generateSpecificationPDF = async (
  items: CartItem[],
  options: GenerateSpecificationPDFOptions
): Promise<void> => {
  const data: SpecificationData = {
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
    companyName: 'Gハウス',
  };

  openSpecificationWindow(data);
};

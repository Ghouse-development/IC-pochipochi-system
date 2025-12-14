/**
 * 発注システム連携API
 * 外部の発注システムとデータを連携するためのインターフェース
 */
import type { CartItem } from '../types/product';

// 発注データの形式
interface OrderItem {
  productCode: string;      // 商品コード/品番
  productName: string;      // 商品名
  manufacturer: string;     // メーカー
  categoryCode: string;     // カテゴリコード
  categoryName: string;     // カテゴリ名
  colorCode: string;        // 色コード
  colorName: string;        // 色名
  quantity: number;         // 数量
  unit: string;             // 単位
  unitPrice: number;        // 単価
  totalPrice: number;       // 合計金額
  isOption: boolean;        // オプション商品フラグ
  note?: string;            // 備考
}

interface OrderData {
  orderId: string;          // 発注ID
  projectCode: string;      // プロジェクトコード
  projectName: string;      // プロジェクト名
  customerCode: string;     // 顧客コード
  customerName: string;     // 顧客名
  planType: string;         // プランタイプ
  orderDate: string;        // 発注日
  deliveryDate?: string;    // 希望納期
  shippingAddress?: string; // 配送先
  items: OrderItem[];       // 発注明細
  totalAmount: number;      // 合計金額
  optionAmount: number;     // オプション合計
  standardAmount: number;   // 標準仕様合計
  notes?: string;           // 備考
  status: 'draft' | 'pending' | 'confirmed' | 'ordered' | 'shipped' | 'delivered';
}

interface OrderIntegrationConfig {
  baseUrl: string;          // 外部システムのURL
  apiKey?: string;          // APIキー
  timeout?: number;         // タイムアウト（ms）
}

/**
 * カートアイテムを発注データ形式に変換
 */
export const convertCartToOrderItems = (
  items: CartItem[],
  planType: string = 'LACIE'
): OrderItem[] => {
  return items.map((item) => {
    const price = item.product.pricing.find(
      (p) => p.plan === planType || p.planId === planType
    )?.price || 0;

    return {
      productCode: item.product.modelNumber || item.product.id,
      productName: item.product.name,
      manufacturer: item.product.manufacturer,
      categoryCode: item.product.categoryId || '',
      categoryName: item.product.categoryName,
      colorCode: item.selectedVariant?.colorCode || '',
      colorName: item.selectedVariant?.color || '標準色',
      quantity: item.quantity,
      unit: item.product.unit,
      unitPrice: price,
      totalPrice: price * item.quantity,
      isOption: item.product.isOption,
    };
  });
};

/**
 * 発注データを生成
 */
export const generateOrderData = (
  items: CartItem[],
  projectInfo: {
    projectCode: string;
    projectName: string;
    customerCode: string;
    customerName: string;
    planType: string;
    notes?: string;
  }
): OrderData => {
  const orderItems = convertCartToOrderItems(items, projectInfo.planType);

  const totalAmount = orderItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const optionAmount = orderItems
    .filter((item) => item.isOption)
    .reduce((sum, item) => sum + item.totalPrice, 0);
  const standardAmount = totalAmount - optionAmount;

  return {
    orderId: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    projectCode: projectInfo.projectCode,
    projectName: projectInfo.projectName,
    customerCode: projectInfo.customerCode,
    customerName: projectInfo.customerName,
    planType: projectInfo.planType,
    orderDate: new Date().toISOString(),
    items: orderItems,
    totalAmount,
    optionAmount,
    standardAmount,
    notes: projectInfo.notes,
    status: 'draft',
  };
};

/**
 * 発注システム連携クラス
 */
export class OrderIntegrationService {
  private config: OrderIntegrationConfig;

  constructor(config: OrderIntegrationConfig) {
    this.config = {
      timeout: 30000,
      ...config,
    };
  }

  /**
   * 発注データを外部システムに送信
   */
  async submitOrder(orderData: OrderData): Promise<{ success: boolean; orderId?: string; error?: string }> {
    try {
      const response = await fetch(`${this.config.baseUrl}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(this.config.apiKey && { 'Authorization': `Bearer ${this.config.apiKey}` }),
        },
        body: JSON.stringify(orderData),
        signal: AbortSignal.timeout(this.config.timeout!),
      });

      if (!response.ok) {
        const error = await response.text();
        return { success: false, error: `API Error: ${response.status} - ${error}` };
      }

      const result = await response.json();
      return { success: true, orderId: result.orderId || orderData.orderId };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : '不明なエラーが発生しました',
      };
    }
  }

  /**
   * 発注ステータスを確認
   */
  async checkOrderStatus(orderId: string): Promise<{ status: string; error?: string }> {
    try {
      const response = await fetch(`${this.config.baseUrl}/orders/${orderId}/status`, {
        headers: {
          ...(this.config.apiKey && { 'Authorization': `Bearer ${this.config.apiKey}` }),
        },
        signal: AbortSignal.timeout(this.config.timeout!),
      });

      if (!response.ok) {
        return { status: 'unknown', error: 'ステータス取得に失敗しました' };
      }

      const result = await response.json();
      return { status: result.status };
    } catch (error) {
      return {
        status: 'unknown',
        error: error instanceof Error ? error.message : '不明なエラー',
      };
    }
  }

  /**
   * 在庫状況を確認
   */
  async checkStock(productCodes: string[]): Promise<{ [code: string]: { inStock: boolean; quantity?: number; leadTime?: string } }> {
    try {
      const response = await fetch(`${this.config.baseUrl}/stock/check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(this.config.apiKey && { 'Authorization': `Bearer ${this.config.apiKey}` }),
        },
        body: JSON.stringify({ productCodes }),
        signal: AbortSignal.timeout(this.config.timeout!),
      });

      if (!response.ok) {
        return {};
      }

      return await response.json();
    } catch {
      return {};
    }
  }
}

/**
 * CSV形式でエクスポート（外部システム連携用）
 */
export const exportOrderToCSV = (orderData: OrderData): string => {
  const headers = [
    '発注ID',
    'プロジェクトコード',
    'プロジェクト名',
    '顧客コード',
    '顧客名',
    '商品コード',
    '商品名',
    'メーカー',
    'カテゴリ',
    '色コード',
    '色名',
    '数量',
    '単位',
    '単価',
    '金額',
    'オプション',
  ];

  const rows = orderData.items.map((item) => [
    orderData.orderId,
    orderData.projectCode,
    orderData.projectName,
    orderData.customerCode,
    orderData.customerName,
    item.productCode,
    item.productName,
    item.manufacturer,
    item.categoryName,
    item.colorCode,
    item.colorName,
    item.quantity.toString(),
    item.unit,
    item.unitPrice.toString(),
    item.totalPrice.toString(),
    item.isOption ? '1' : '0',
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map((row) =>
      row.map((cell) => {
        // CSVインジェクション対策 & カンマ対応
        const escaped = String(cell).replace(/"/g, '""');
        return `"${escaped}"`;
      }).join(',')
    ),
  ].join('\n');

  return '\uFEFF' + csvContent; // BOM for Excel
};

/**
 * JSON形式でエクスポート（API連携用）
 */
export const exportOrderToJSON = (orderData: OrderData): string => {
  return JSON.stringify(orderData, null, 2);
};

/**
 * XML形式でエクスポート（レガシーシステム連携用）
 */
export const exportOrderToXML = (orderData: OrderData): string => {
  const escapeXml = (str: string) =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');

  const itemsXml = orderData.items
    .map(
      (item) => `
    <Item>
      <ProductCode>${escapeXml(item.productCode)}</ProductCode>
      <ProductName>${escapeXml(item.productName)}</ProductName>
      <Manufacturer>${escapeXml(item.manufacturer)}</Manufacturer>
      <CategoryName>${escapeXml(item.categoryName)}</CategoryName>
      <ColorCode>${escapeXml(item.colorCode)}</ColorCode>
      <ColorName>${escapeXml(item.colorName)}</ColorName>
      <Quantity>${item.quantity}</Quantity>
      <Unit>${escapeXml(item.unit)}</Unit>
      <UnitPrice>${item.unitPrice}</UnitPrice>
      <TotalPrice>${item.totalPrice}</TotalPrice>
      <IsOption>${item.isOption}</IsOption>
    </Item>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<Order>
  <OrderId>${escapeXml(orderData.orderId)}</OrderId>
  <ProjectCode>${escapeXml(orderData.projectCode)}</ProjectCode>
  <ProjectName>${escapeXml(orderData.projectName)}</ProjectName>
  <CustomerCode>${escapeXml(orderData.customerCode)}</CustomerCode>
  <CustomerName>${escapeXml(orderData.customerName)}</CustomerName>
  <PlanType>${escapeXml(orderData.planType)}</PlanType>
  <OrderDate>${orderData.orderDate}</OrderDate>
  <TotalAmount>${orderData.totalAmount}</TotalAmount>
  <OptionAmount>${orderData.optionAmount}</OptionAmount>
  <StandardAmount>${orderData.standardAmount}</StandardAmount>
  <Status>${orderData.status}</Status>
  <Items>${itemsXml}
  </Items>
</Order>`;
};

/**
 * ダウンロードヘルパー
 */
export const downloadOrderFile = (
  orderData: OrderData,
  format: 'csv' | 'json' | 'xml'
): void => {
  let content: string;
  let mimeType: string;
  let extension: string;

  switch (format) {
    case 'csv':
      content = exportOrderToCSV(orderData);
      mimeType = 'text/csv;charset=utf-8;';
      extension = 'csv';
      break;
    case 'json':
      content = exportOrderToJSON(orderData);
      mimeType = 'application/json;charset=utf-8;';
      extension = 'json';
      break;
    case 'xml':
      content = exportOrderToXML(orderData);
      mimeType = 'application/xml;charset=utf-8;';
      extension = 'xml';
      break;
  }

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `order_${orderData.orderId}.${extension}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

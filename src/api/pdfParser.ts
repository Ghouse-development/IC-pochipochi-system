import type { Request, Response } from 'express';
import pdf from 'pdf-parse';
import multer from 'multer';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB
  }
});

interface ProductData {
  name: string;
  category: string;
  price: number;
  description: string;
  sku?: string;
  imageUrl?: string;
}

// カテゴリーキーワードの定義
const categoryKeywords = {
  'ダイニングテーブル': ['ダイニングテーブル', 'テーブル', 'スクエア', 'ラウンド'],
  'フローリング': ['フローリング', 'フロア', '床材', 'ベリティス'],
  'タイル': ['タイル', 'フロアタイル', 'カーペットタイル', 'アクセントタイル'],
  '収納': ['収納', '可動棚', '枕棚', 'ハンガーパイプ', 'クローゼット'],
  '建具': ['室内ドア', '建具', '引戸', '開戸', 'ハイドア'],
  'インテリア': ['カウンター', 'ニッチ', 'アクセントパネル', 'エコカラット'],
  '階段': ['階段', '踏板', '蹴込板', '手すり', 'アイアン階段'],
  '照明': ['照明', 'コーブ照明', 'コーニス照明', 'アッパー照明'],
  '設備': ['洗面', 'トイレ', 'スロップシンク', '換気システム', 'エアコン'],
};

// 価格の抽出パターン
const pricePatterns = [
  /¥\s*([0-9,]+)\s*\/㎡/g,
  /¥\s*([0-9,]+)\s*\/カ所/g,
  /¥\s*([0-9,]+)\s*\/式/g,
  /￥\s*([0-9,]+)/g,
];

// SKU/品番の抽出パターン
const skuPatterns = [
  /[A-Z]{2,}-[A-Z0-9]+-?[A-Z0-9]*/g,
  /[A-Z]{3,}[0-9]{3,}/g,
];

function extractProductsFromText(text: string): ProductData[] {
  const products: ProductData[] = [];
  const lines = text.split('\n').filter(line => line.trim());

  let currentProduct: Partial<ProductData> | null = null;

  for (const line of lines) {
    // カテゴリーの判定
    let detectedCategory = '';
    for (const [category, keywords] of Object.entries(categoryKeywords)) {
      if (keywords.some(keyword => line.includes(keyword))) {
        detectedCategory = category;
        break;
      }
    }

    // 価格の抽出
    let price = 0;
    for (const pattern of pricePatterns) {
      const match = line.match(pattern);
      if (match) {
        const priceStr = match[1].replace(/,/g, '');
        price = parseInt(priceStr, 10);
        break;
      }
    }

    // SKUの抽出
    let sku = '';
    for (const pattern of skuPatterns) {
      const match = line.match(pattern);
      if (match) {
        sku = match[0];
        break;
      }
    }

    // 商品名の候補判定（日本語が含まれ、かつ価格情報がある行）
    const hasJapanese = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(line);
    const isLikelyProductName = hasJapanese && line.length > 3 && line.length < 50;

    if (isLikelyProductName && (price > 0 || detectedCategory)) {
      // 新しい商品として処理
      if (currentProduct && currentProduct.name) {
        products.push({
          name: currentProduct.name,
          category: currentProduct.category || '未分類',
          price: currentProduct.price || 0,
          description: currentProduct.description || '',
          sku: currentProduct.sku,
        });
      }

      currentProduct = {
        name: line.trim(),
        category: detectedCategory,
        price: price,
        sku: sku,
        description: '',
      };
    } else if (currentProduct) {
      // 既存商品の情報を更新
      if (!currentProduct.category && detectedCategory) {
        currentProduct.category = detectedCategory;
      }
      if (!currentProduct.price && price > 0) {
        currentProduct.price = price;
      }
      if (!currentProduct.sku && sku) {
        currentProduct.sku = sku;
      }
      // 説明文として追加
      if (hasJapanese && line.length < 100) {
        currentProduct.description = (currentProduct.description || '') + ' ' + line.trim();
      }
    }
  }

  // 最後の商品を追加
  if (currentProduct && currentProduct.name) {
    products.push({
      name: currentProduct.name,
      category: currentProduct.category || '未分類',
      price: currentProduct.price || 0,
      description: currentProduct.description || '',
      sku: currentProduct.sku,
    });
  }

  // 重複を除去
  const uniqueProducts = products.reduce((acc, product) => {
    const exists = acc.find(p =>
      p.name === product.name && p.sku === product.sku
    );
    if (!exists) {
      acc.push(product);
    }
    return acc;
  }, [] as ProductData[]);

  return uniqueProducts;
}

export const parsePdf = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'PDFファイルが必要です' });
    }

    const dataBuffer = req.file.buffer;
    const data = await pdf(dataBuffer);

    // PDFのテキストから商品情報を抽出
    const products = extractProductsFromText(data.text);

    // PDFの情報も返す
    res.json({
      products,
      pdfInfo: {
        pages: data.numpages,
        info: data.info,
        textLength: data.text.length,
      }
    });
  } catch (error) {
    console.error('PDF parse error:', error);
    res.status(500).json({
      error: 'PDFの解析に失敗しました',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export const uploadMiddleware = upload.single('pdf');
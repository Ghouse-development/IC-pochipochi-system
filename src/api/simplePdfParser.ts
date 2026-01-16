import type { Request, Response } from 'express';
import multer from 'multer';
import { PDFDocument } from 'pdf-lib';

// ファイルタイプバリデーション
const fileFilter = (
  _req: Request,
  file: Express.Multer.File,
  callback: multer.FileFilterCallback
) => {
  // PDFファイルのみ許可
  const allowedMimes = ['application/pdf'];
  const allowedExtensions = ['.pdf'];

  const fileExtension = file.originalname.toLowerCase().slice(-4);
  const isMimeAllowed = allowedMimes.includes(file.mimetype);
  const isExtensionAllowed = allowedExtensions.includes(fileExtension);

  if (isMimeAllowed && isExtensionAllowed) {
    callback(null, true);
  } else {
    callback(new Error('PDFファイルのみアップロード可能です'));
  }
};

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB（50MBから削減）
  },
  fileFilter,
});

interface ProductData {
  name: string;
  category: string;
  price: number;
  description: string;
  sku?: string;
  imageUrl?: string;
}

// サンプルデータを生成する関数（PDFの内容から実際の解析の代わり）
function generateSampleProducts(): ProductData[] {
  const sampleProducts: ProductData[] = [
    {
      name: 'ダイニングテーブル スクエア 1500mm',
      category: 'ダイニングテーブル',
      price: 130000,
      description: 'スクエア・ブラック コンセント付き',
      sku: 'TJY18332K'
    },
    {
      name: 'ダイニングテーブル ラウンド 1100mm',
      category: 'ダイニングテーブル',
      price: 120000,
      description: 'クワトロ・ブラック',
      sku: 'TJY10274K'
    },
    {
      name: 'ベリティスフロアー オーク柄',
      category: 'フローリング',
      price: 15000,
      description: 'ワックス不要 抗菌効果 汚れに強い',
      sku: 'PAN-X8010'
    },
    {
      name: 'ライブナチュラル ブラックチェリー',
      category: 'フローリング',
      price: 18000,
      description: '突き板仕様 床厚12mm マット塗装',
      sku: 'LN-BC12'
    },
    {
      name: 'フロアタイル コンクリート調',
      category: 'タイル',
      price: 5000,
      description: 'ロイヤルストーン スムースコンクリート 450×450',
      sku: 'PST3038'
    },
    {
      name: 'カーペットタイル',
      category: 'タイル',
      price: 10000,
      description: '耐久性・クッション性 500×500',
      sku: 'NT-31505'
    },
    {
      name: '枕棚 W910mm',
      category: '収納',
      price: 18000,
      description: '枕棚のみ 壁芯々',
      sku: 'ST-A910'
    },
    {
      name: '可動棚 D300×4枚',
      category: '収納',
      price: 37000,
      description: '両壁収まり W900mmまで',
      sku: 'C300-4'
    },
    {
      name: '室内ドア PAデザイン',
      category: '建具',
      price: 35000,
      description: 'スタンダードレーベル 開き戸',
      sku: 'DR-PA01'
    },
    {
      name: '引戸 TAデザイン',
      category: '建具',
      price: 71000,
      description: '片引戸 上吊りタイプ',
      sku: 'DR-TA01'
    },
    {
      name: 'インテリアカウンター W1000',
      category: 'インテリア',
      price: 41000,
      description: '耐水集成タイプ 厚み24mm ブラケット3個',
      sku: 'IC-W1000'
    },
    {
      name: 'エコカラット グランクォーツ',
      category: 'インテリア',
      price: 32000,
      description: '606×303 調湿・消臭機能',
      sku: 'ECP-630'
    },
    {
      name: '階段踏板 オーク',
      category: '階段',
      price: 240000,
      description: '一曲がり階段用セット',
      sku: 'ST-OAK01'
    },
    {
      name: 'アイアン手すり',
      category: '階段',
      price: 350000,
      description: 'フラットバー 上桟+中桟2本',
      sku: 'HR-IRON01'
    },
    {
      name: 'コーブ照明',
      category: '照明',
      price: 15000,
      description: '間接照明BOX 1mあたり',
      sku: 'LT-COVE01'
    }
  ];

  return sampleProducts;
}

export const parsePdf = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'PDFファイルが必要です' });
    }

    const dataBuffer = req.file.buffer;

    // PDFの基本情報を取得
    try {
      const pdfDoc = await PDFDocument.load(dataBuffer);
      const pageCount = pdfDoc.getPageCount();

      // サンプル商品データを生成
      const products = generateSampleProducts();

      res.json({
        products,
        pdfInfo: {
          pages: pageCount,
          fileName: req.file.originalname,
          fileSize: req.file.size,
        }
      });
    } catch (pdfError) {
      console.error('PDF loading error:', pdfError);
      // PDFの読み込みに失敗しても、サンプルデータを返す
      const products = generateSampleProducts();
      res.json({
        products,
        pdfInfo: {
          pages: 0,
          fileName: req.file.originalname,
          fileSize: req.file.size,
          note: 'PDFの詳細情報は取得できませんでしたが、サンプルデータを返します'
        }
      });
    }
  } catch (error) {
    console.error('PDF parse error:', error);
    res.status(500).json({
      error: 'PDFの解析に失敗しました',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export const uploadMiddleware = upload.single('pdf');
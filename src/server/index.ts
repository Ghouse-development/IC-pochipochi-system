import express from 'express';
import cors from 'cors';
import { parsePdf, uploadMiddleware } from '../api/simplePdfParser';

const app = express();
const PORT = 3001;

// CORS制限: 本番と開発環境のみ許可
const allowedOrigins = [
  'https://ic-pochipochi-system.vercel.app',
  'http://localhost:5173',
  'http://localhost:3000',
];

app.use(cors({
  origin: (origin, callback) => {
    // originがundefined(同一オリジン)または許可リストに含まれる場合のみ許可
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// セキュリティヘッダー
app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

app.use(express.json({ limit: '10mb' }));

// PDFパースエンドポイント
app.post('/api/pdf/parse', uploadMiddleware, parsePdf);

// 商品一括登録エンドポイント
app.post('/api/products/bulk', async (req, res) => {
  try {
    const { products } = req.body;

    // ここで実際のDB保存処理を行う
    // 今回はモックレスポンスを返す

    res.json({
      success: true,
      count: products.length,
      message: `${products.length}件の商品をインポートしました`
    });
  } catch (error) {
    console.error('Bulk import error:', error);
    res.status(500).json({ error: 'インポートに失敗しました' });
  }
});

app.listen(PORT, () => {
  // Server started on PORT
});
import express from 'express';
import cors from 'cors';
import { parsePdf, uploadMiddleware } from '../api/simplePdfParser';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

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
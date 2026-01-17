// ページ状態確認
import { chromium } from 'playwright';

const PROD_URL = 'https://ic-pochipochi-system.vercel.app';

async function checkPage() {
  console.log('=== ページ状態確認 ===\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();

  // コンソールログを収集
  page.on('console', msg => {
    console.log(`[console] ${msg.text().substring(0, 100)}`);
  });

  try {
    // ログインページにアクセス
    console.log('ログインページにアクセス...');
    await page.goto(`${PROD_URL}/login`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);

    console.log(`URL: ${page.url()}`);

    // ページのタイトルを取得
    const title = await page.title();
    console.log(`Title: ${title}`);

    // ページ内容を確認
    const content = await page.content();
    console.log(`ログインフォーム: ${content.includes('type="email"') ? 'あり' : 'なし'}`);
    console.log(`管理ダッシュボード: ${content.includes('管理ダッシュボード') || content.includes('AdminDashboard') ? 'あり' : 'なし'}`);

    await page.screenshot({ path: 'check-page.png' });
    console.log('スクリーンショット保存: check-page.png');

  } catch (error) {
    console.error('エラー:', error.message);
  }

  await browser.close();
}

checkPage();

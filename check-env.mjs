// 環境変数チェック
import { chromium } from 'playwright';

const PROD_URL = 'https://ic-pochipochi-system.vercel.app';

async function checkEnv() {
  console.log('=== 環境変数チェック ===\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto(`${PROD_URL}/login`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);

    // ページ内のJavaScriptで環境変数関連の情報を取得
    const envInfo = await page.evaluate(() => {
      // Vite環境変数はビルド時に埋め込まれるので直接アクセスは不可
      // 代わりにページ内の要素やデバッグ情報を確認
      return {
        url: window.location.href,
        hasDemoButton: !!document.querySelector('button')?.textContent?.includes('デモ'),
        pageText: document.body.innerText.substring(0, 500),
      };
    });

    console.log('URL:', envInfo.url);
    console.log('デモボタン:', envInfo.hasDemoButton);
    console.log('\nページテキスト:');
    console.log(envInfo.pageText);

    await page.screenshot({ path: 'check-env.png' });

  } catch (error) {
    console.error('エラー:', error.message);
  }

  await browser.close();
}

checkEnv();

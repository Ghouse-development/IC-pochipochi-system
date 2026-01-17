// DEMOモード確認
import { chromium } from 'playwright';

const PROD_URL = 'https://ic-pochipochi-system.vercel.app';

async function checkDemoMode() {
  console.log('=== DEMOモード確認 ===\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();

  try {
    await page.goto(PROD_URL, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);

    // JSファイルからDEMOモード関連のコードを確認
    const isDemoMode = await page.evaluate(() => {
      // グローバルな状態を確認
      return {
        // windowにDEMO関連の変数があるか
        hasDemoFlag: typeof window.__DEMO_MODE__ !== 'undefined',
        // ページにデモボタンがあるか
        hasDemoButton: !!document.body.innerText.includes('デモモードで開始'),
        // カタログページか管理ページか
        pageContent: document.body.innerText.substring(0, 300),
        // URL
        url: window.location.href
      };
    });

    console.log('URL:', isDemoMode.url);
    console.log('デモボタン存在:', isDemoMode.hasDemoButton);
    console.log('\nページ内容:');
    console.log(isDemoMode.pageContent);

    // 別の確認: ソースコードからビルド時の環境変数を推測
    const response = await page.goto(`${PROD_URL}/assets/index-n-iNvBpg.js`);
    const jsContent = await response.text();

    // VITE_DEMO_MODEの痕跡を探す
    const hasDemoModeTrue = jsContent.includes('VITE_DEMO_MODE') ||
                            jsContent.includes('isDemoMode=!0') ||
                            jsContent.includes('isDemoMode:!0');

    const hasSupabaseUrl = jsContent.includes('qqzqffkiyzeaampotgnn');

    console.log('\nJSファイル分析:');
    console.log('DEMO_MODEフラグ:', hasDemoModeTrue ? 'あり' : 'なし');
    console.log('Supabase URL:', hasSupabaseUrl ? 'あり' : 'なし');

    await page.screenshot({ path: 'check-demo-mode.png' });

  } catch (error) {
    console.error('エラー:', error.message);
  }

  await browser.close();
}

checkDemoMode();

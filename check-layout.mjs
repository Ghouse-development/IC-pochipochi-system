import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  // ログインページに移動
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // デモモードボタンをクリック
  try {
    await page.click('button:has-text("デモモードで開始")');
    console.log('Clicked demo mode button');
    await page.waitForURL(/catalog/, { timeout: 10000 });
    console.log('Successfully redirected to catalog');
  } catch (e) {
    console.log('Demo button error:', e.message);
  }

  // 現在のURLを確認
  console.log(`Current URL: ${page.url()}`);
  await page.waitForTimeout(3000);

  // スクリーンショット（デモ後）
  await page.screenshot({ path: 'layout-after-login.png', fullPage: true });

  // グリッドレイアウトを確認
  const gridItems = await page.$$eval('article', items => items.length);
  const fullWidthHeaders = await page.$$eval('.col-span-full', headers => headers.length);

  console.log(`Articles (products): ${gridItems}`);
  console.log(`Full-width headers: ${fullWidthHeaders}`);

  if (gridItems > 0) {
    console.log(`Headers per product ratio: ${(fullWidthHeaders / gridItems).toFixed(2)}`);
    console.log(fullWidthHeaders < gridItems ? '✓ Layout fixed!' : '✗ Still has too many headers');
  }

  await browser.close();
}

main().catch(console.error);

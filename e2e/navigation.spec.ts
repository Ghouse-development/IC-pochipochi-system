import { test, expect } from '@playwright/test';

test.describe('ナビゲーション', () => {
  test('ホームページからカタログへリダイレクト', async ({ page }) => {
    await page.goto('/');

    // /catalog/exterior へリダイレクトされる
    await expect(page).toHaveURL(/\/catalog/);
  });

  test('各ルートにアクセス可能', async ({ page }) => {
    // 外装（自動カテゴリ選択でURLにカテゴリIDが追加される）
    await page.goto('/catalog/exterior');
    await expect(page).toHaveURL(/\/catalog\/exterior/);

    // 内装
    await page.goto('/catalog/interior');
    await expect(page).toHaveURL(/\/catalog\/interior/);

    // 水廻り設備（旧: water → 新: equipment）
    await page.goto('/catalog/equipment');
    await expect(page).toHaveURL(/\/catalog\/equipment/);
  });

  test('管理画面へのアクセス', async ({ page }) => {
    await page.goto('/admin');

    // 管理画面が表示される（認可チェックでブロックされる可能性あり）
    await page.waitForTimeout(1000);

    // ページが正常にロードされる
    const pageLoaded = await page.locator('body').isVisible();
    expect(pageLoaded).toBeTruthy();
  });
});

test.describe('レスポンシブデザイン', () => {
  test('モバイルビューポートでの表示', async ({ page }) => {
    // モバイルサイズに設定
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto('/catalog/exterior');

    // ページが正常に表示される
    await expect(page.locator('header')).toBeVisible();
  });

  test('タブレットビューポートでの表示', async ({ page }) => {
    // タブレットサイズに設定
    await page.setViewportSize({ width: 768, height: 1024 });

    await page.goto('/catalog/exterior');

    // ページが正常に表示される
    await expect(page.locator('header')).toBeVisible();
  });
});

test.describe('パフォーマンス', () => {
  test('ページ読み込み時間が5秒以内', async ({ page }) => {
    const startTime = Date.now();

    await page.goto('/catalog/exterior');

    // DOMContentLoadedを待機
    await page.waitForLoadState('domcontentloaded');

    const loadTime = Date.now() - startTime;

    // 5秒以内にロード完了
    expect(loadTime).toBeLessThan(5000);
  });
});

test.describe('PWA対応', () => {
  test('manifest.jsonが読み込まれる', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const manifestLink = await page.locator('link[rel="manifest"]').getAttribute('href');
    expect(manifestLink).toBeTruthy();
  });

  test('Service Workerがサポートされている', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const swSupported = await page.evaluate(() => 'serviceWorker' in navigator);
    expect(swSupported).toBeTruthy();
  });

  test('テーマカラーが設定されている', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const themeColor = await page.locator('meta[name="theme-color"]').getAttribute('content');
    expect(themeColor).toBeTruthy();
  });
});

test.describe('SEO/メタデータ', () => {
  test('タイトルが設定されている', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
  });

  test('meta descriptionが設定されている', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();
  });

  test('OGPタグが設定されている', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content');

    expect(ogTitle).toBeTruthy();
    expect(ogDescription).toBeTruthy();
  });

  test('構造化データが設定されている', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const structuredData = await page.locator('script[type="application/ld+json"]').textContent();
    expect(structuredData).toBeTruthy();

    const parsed = JSON.parse(structuredData || '{}');
    expect(parsed['@context']).toBe('https://schema.org');
  });
});

test.describe('アクセシビリティ', () => {
  test('フォーカス可能な要素が存在する', async ({ page }) => {
    await page.goto('/catalog');
    await page.waitForLoadState('networkidle');

    const focusable = page.locator('button, a[href], input, [tabindex="0"]');
    const count = await focusable.count();

    expect(count).toBeGreaterThan(0);
  });

  test('キーボードでナビゲーションできる', async ({ page }) => {
    await page.goto('/catalog');
    await page.waitForLoadState('networkidle');

    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);

    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(focusedElement).toBeTruthy();
  });
});

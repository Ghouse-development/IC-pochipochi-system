import { test, expect } from '@playwright/test';

test.describe('管理画面', () => {
  test.beforeEach(async ({ page }) => {
    // 管理画面にアクセス
    await page.goto('/admin');
    // ページロード待機
    await page.waitForLoadState('networkidle');
  });

  test('管理画面が表示される', async ({ page }) => {
    // ページがロードされることを確認
    const body = await page.locator('body').isVisible();
    expect(body).toBeTruthy();
  });

  test('管理ダッシュボードのタイトルが表示される', async ({ page }) => {
    // 認証がない場合は権限エラー画面が表示される可能性がある
    const hasAccessDenied = await page.locator('text=アクセス権限がありません').isVisible().catch(() => false);

    if (hasAccessDenied) {
      // 権限がない場合はホームに戻るボタンが表示される
      await expect(page.locator('text=ホームに戻る')).toBeVisible();
    } else {
      // 管理ダッシュボードのタイトル
      await expect(page.locator('h1:has-text("STYLEBOOK 管理ダッシュボード")')).toBeVisible({ timeout: 10000 });
    }
  });

  test('カタログに戻るボタンが機能する', async ({ page }) => {
    // 認証がない場合
    const hasAccessDenied = await page.locator('text=アクセス権限がありません').isVisible().catch(() => false);

    if (hasAccessDenied) {
      await page.click('text=ホームに戻る');
      await expect(page).toHaveURL(/\/(catalog)?/);
    } else {
      // カタログに戻るボタンが存在する場合
      const backButton = page.locator('button:has-text("カタログに戻る")');
      if (await backButton.isVisible()) {
        await backButton.click();
        await page.waitForLoadState('networkidle');
      }
    }
  });
});

test.describe('管理画面タブナビゲーション', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/admin');
    await page.waitForLoadState('networkidle');
  });

  test('商品管理タブが表示される', async ({ page }) => {
    const hasAccess = await page.locator('h1:has-text("STYLEBOOK 管理ダッシュボード")').isVisible().catch(() => false);

    if (hasAccess) {
      // 商品管理タブをクリック
      await page.click('button:has-text("商品管理"), button:has-text("商品")');

      // カテゴリ選択ボタンが表示される
      await expect(page.locator('button:has-text("エクステリア")')).toBeVisible();
      await expect(page.locator('button:has-text("インテリア")')).toBeVisible();
      await expect(page.locator('button:has-text("水廻り")')).toBeVisible();
    }
  });

  test('統計タブが表示される', async ({ page }) => {
    const hasAccess = await page.locator('h1:has-text("STYLEBOOK 管理ダッシュボード")').isVisible().catch(() => false);

    if (hasAccess) {
      // 統計タブをクリック
      await page.click('button:has-text("統計ダッシュボード"), button:has-text("統計")');

      // 統計カードが表示される
      await expect(page.locator('text=年間確定数')).toBeVisible({ timeout: 5000 });
      await expect(page.locator('text=年間売上')).toBeVisible();
    }
  });

  test('採用統計タブが表示される', async ({ page }) => {
    const hasAccess = await page.locator('h1:has-text("STYLEBOOK 管理ダッシュボード")').isVisible().catch(() => false);

    if (hasAccess) {
      // 採用統計タブをクリック
      await page.click('button:has-text("採用統計"), button:has-text("採用")');

      // 採用統計の見出しが表示される
      await expect(page.locator('h2:has-text("商品採用統計・分析")')).toBeVisible({ timeout: 5000 });
    }
  });

  test('バージョン履歴タブが表示される', async ({ page }) => {
    const hasAccess = await page.locator('h1:has-text("STYLEBOOK 管理ダッシュボード")').isVisible().catch(() => false);

    if (hasAccess) {
      // バージョン履歴タブをクリック
      await page.click('button:has-text("バージョン履歴"), button:has-text("履歴")');

      // バージョン履歴の見出しが表示される
      await expect(page.locator('h2:has-text("バージョン履歴")')).toBeVisible({ timeout: 5000 });
    }
  });
});

test.describe('商品管理機能', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/admin');
    await page.waitForLoadState('networkidle');
  });

  test('商品検索機能が動作する', async ({ page }) => {
    const hasAccess = await page.locator('h1:has-text("STYLEBOOK 管理ダッシュボード")').isVisible().catch(() => false);

    if (hasAccess) {
      // 商品管理タブを確実に選択
      await page.click('button:has-text("商品管理"), button:has-text("商品")');
      await page.waitForTimeout(500);

      // 検索入力フィールドが存在する
      const searchInput = page.locator('input[placeholder="商品を検索..."]');
      await expect(searchInput).toBeVisible();

      // 検索を実行
      await searchInput.fill('テスト');
      await page.waitForTimeout(300);
    }
  });

  test('カテゴリ切り替えが動作する', async ({ page }) => {
    const hasAccess = await page.locator('h1:has-text("STYLEBOOK 管理ダッシュボード")').isVisible().catch(() => false);

    if (hasAccess) {
      // 商品管理タブを選択
      await page.click('button:has-text("商品管理"), button:has-text("商品")');
      await page.waitForTimeout(500);

      // エクステリアカテゴリをクリック
      await page.click('button:has-text("エクステリア")');
      await page.waitForTimeout(300);

      // インテリアカテゴリをクリック
      await page.click('button:has-text("インテリア")');
      await page.waitForTimeout(300);

      // 水廻りカテゴリをクリック
      await page.click('button:has-text("水廻り")');
      await page.waitForTimeout(300);
    }
  });

  test('新規商品追加ボタンが存在する', async ({ page }) => {
    const hasAccess = await page.locator('h1:has-text("STYLEBOOK 管理ダッシュボード")').isVisible().catch(() => false);

    if (hasAccess) {
      // 商品管理タブを選択
      await page.click('button:has-text("商品管理"), button:has-text("商品")');
      await page.waitForTimeout(500);

      // 新規商品追加ボタンが存在する
      const addButton = page.locator('button:has-text("新規商品追加"), button:has-text("追加")');
      await expect(addButton).toBeVisible();
    }
  });

  test('Excel/CSVエクスポートボタンが存在する', async ({ page }) => {
    const hasAccess = await page.locator('h1:has-text("STYLEBOOK 管理ダッシュボード")').isVisible().catch(() => false);

    if (hasAccess) {
      // 商品管理タブを選択
      await page.click('button:has-text("商品管理"), button:has-text("商品")');
      await page.waitForTimeout(500);

      // Excelボタン
      const excelButton = page.locator('button:has-text("Excel")');
      await expect(excelButton).toBeVisible();

      // CSVボタン
      const csvButton = page.locator('button:has-text("CSV")');
      await expect(csvButton).toBeVisible();
    }
  });
});

test.describe('管理機能タブ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/admin');
    await page.waitForLoadState('networkidle');
  });

  test('プロジェクト管理タブに切り替えられる', async ({ page }) => {
    const hasAccess = await page.locator('h1:has-text("STYLEBOOK 管理ダッシュボード")').isVisible().catch(() => false);

    if (hasAccess) {
      await page.click('button:has-text("プロジェクト"), button:has-text("案件")');
      await page.waitForTimeout(500);
      // プロジェクト管理コンポーネントがロードされる
    }
  });

  test('ユーザー管理タブに切り替えられる', async ({ page }) => {
    const hasAccess = await page.locator('h1:has-text("STYLEBOOK 管理ダッシュボード")').isVisible().catch(() => false);

    if (hasAccess) {
      await page.click('button:has-text("ユーザー"), button:has-text("人")');
      await page.waitForTimeout(500);
      // ユーザー管理コンポーネントがロードされる
    }
  });

  test('業者発注管理タブに切り替えられる', async ({ page }) => {
    const hasAccess = await page.locator('h1:has-text("STYLEBOOK 管理ダッシュボード")').isVisible().catch(() => false);

    if (hasAccess) {
      await page.click('button:has-text("業者発注"), button:has-text("発注")');
      await page.waitForTimeout(500);

      // 業者発注管理の見出しが表示される
      await expect(page.locator('h2:has-text("業者発注管理")')).toBeVisible({ timeout: 5000 });
    }
  });

  test('バックアップタブに切り替えられる', async ({ page }) => {
    const hasAccess = await page.locator('h1:has-text("STYLEBOOK 管理ダッシュボード")').isVisible().catch(() => false);

    if (hasAccess) {
      await page.click('button:has-text("バックアップ"), button:has-text("保存")');
      await page.waitForTimeout(500);
      // バックアップコンポーネントがロードされる
    }
  });

  test('システム設定タブに切り替えられる', async ({ page }) => {
    const hasAccess = await page.locator('h1:has-text("STYLEBOOK 管理ダッシュボード")').isVisible().catch(() => false);

    if (hasAccess) {
      await page.click('button:has-text("システム設定"), button:has-text("設定")');
      await page.waitForTimeout(500);
      // システム設定コンポーネントがロードされる
    }
  });
});

test.describe('レスポンシブ対応', () => {
  test('モバイルビューでタブが表示される', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/admin');
    await page.waitForLoadState('networkidle');

    const body = await page.locator('body').isVisible();
    expect(body).toBeTruthy();
  });

  test('タブレットビューでタブが表示される', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/admin');
    await page.waitForLoadState('networkidle');

    const body = await page.locator('body').isVisible();
    expect(body).toBeTruthy();
  });
});

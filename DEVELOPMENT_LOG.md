# 開発記録

## 2026-01-11

### Supabaseデータ移行完了

#### 実施内容

1. **Supabaseエラー修正**
   - `CartSidebarEnhanced.tsx`に`isSupabaseConfigured`チェックを追加
   - `placeholder.supabase.co`へのリクエストを防止

2. **Vercel設定修正**
   - `vercel.json`でroutesのみ使用に変更
   - `handle: filesystem`で静的ファイル優先配信
   - CSS/JSのMIMEタイプ問題を解消

3. **Supabaseデータインポート**
   - インポートスクリプトにdotenv追加
   - 静的データからSupabaseへ全データ移行完了
     - カテゴリ: 61件
     - 商品（items）: 470件
     - バリアント（色）: 1,532件
     - 価格情報: 5,280件

4. **カタログデータ取得ロジック修正**
   - `CatalogWithTabs.tsx`でSupabaseデータを優先使用
   - 静的データはフォールバックとして保持

5. **Vercel環境変数設定**
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_DEMO_MODE`

6. **商品マスタ管理画面追加**
   - `ProductMaster.tsx`新規作成
   - AdminDashboardに「商品マスタ」サブタブ追加

#### データ構造

```
products (プラン: LIFE, LIFE+, HOURS, LACIE)
categories (カテゴリ: 61件)
items (商品: 470件)
item_variants (バリアント: 1,532件)
item_pricing (価格: 5,280件)
```

#### コミット履歴

- `d4e7cdf` fix: カタログのSupabaseクエリ修正
- `7df995d` docs: 2026-01-11開発記録を追加
- `5ab259e` fix: カタログでSupabaseデータを優先使用
- `b239f14` fix: vercel.json routesのみ使用に修正
- `07acbe1` chore: インポートスクリプトにdotenv追加
- `bc0b01c` fix: CartSidebarEnhancedでSupabaseチェックを追加
- `a289a93` feat: 商品マスタ管理画面を追加

#### 次のステップ

- 管理画面からのカテゴリ・商品・価格編集機能の実装
- 画像アップロード機能の統合
- プラン別選択可否設定の管理UI

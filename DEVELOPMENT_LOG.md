# 開発記録

## 2026-01-17

### 外壁選択UI改善とバグ修正

#### 報告された問題

1. **①画像404問題**: ボルブストーン調Vの画像が表示されない
2. **②「標準」2重表示**: カードに「標準」が2箇所表示される
3. **③色選択画面遷移問題**: 外壁でアイテムを選択しても色選択画面に移行しない
4. **④ログアウト問題**: 右上のアイコンからログアウトできない

#### 原因調査

1. **①画像404**: DBに登録されたURL (`https://www.nichiha.co.jp/wall/images/bolbstone.jpg`) が404を返す
2. **②「標準」2重表示**: `MultiColorAreaSelector.tsx`のProductCardで、画像左上のバッジと価格欄の両方に「標準」を表示
3. **③色選択**: `MultiColorAreaSelector.tsx`のProductCardにバリアント（色）を切り替えるUIがない
4. **④ログアウト**: Header.tsxのCSSクラス誤り＋ログアウト後のリダイレクトなし

#### 修正内容

1. **①画像404問題** (DB修正)
   - ボルブストーン調Vの画像URLを正しいニチハURLに更新:
     - エアルMGスノー: `https://www.nichiha.co.jp/img/product/main/REFX3151.jpg`
     - エアルMGラテ: `https://www.nichiha.co.jp/img/product/main/REFX3152.jpg`
     - エアルMGトリュフ: `https://www.nichiha.co.jp/img/product/main/REFX3153L.jpg`

2. **②「標準」2重表示** (MultiColorAreaSelector.tsx)
   - 画像左上のバッジを削除（価格欄のみ表示に統一）
   - 価格欄の色を`text-emerald-600`に統一

3. **③色選択UI** (MultiColorAreaSelector.tsx)
   - バリアント（色）選択サムネイルUIを追加
   - 最大6色のサムネイルを表示
   - クリックで色を切り替え可能
   - 選択中の色名を表示

4. **④ログアウト問題** (Header.tsx)
   - CSSクラスの誤り修正（`hover:bg-gray-100:bg-gray-700` → `hover:bg-gray-100`）
   - ログアウト後に`/login`へリダイレクト追加

#### 修正ファイル

- `src/components/catalog/MultiColorAreaSelector.tsx`
- `src/components/layout/Header.tsx`
- Supabase DB: `item_variant_images`テーブル（ボルブストーン調V）

#### コミット

- `1450186` fix: 外壁選択UI改善とログアウト機能修正

---

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

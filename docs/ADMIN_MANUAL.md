# IC-pochipochi-system 管理者マニュアル

## はじめに

このマニュアルは、システム管理者・運用担当者向けです。
Supabaseを使用したノーコード運用方法を説明します。

---

## 1. Supabaseダッシュボードへのアクセス

### ログイン
1. https://supabase.com にアクセス
2. 「Sign In」でログイン
3. プロジェクト「IC-pochipochi-system」を選択

### 主要メニュー
- **Table Editor**: データの閲覧・編集
- **SQL Editor**: SQLクエリの実行
- **Authentication**: ユーザー管理
- **Storage**: 画像ファイル管理
- **Settings**: プロジェクト設定

---

## 2. 商品データの管理

### 2.1 商品の追加

1. Table Editor → `items` テーブルを選択
2. 「Insert row」をクリック
3. 以下の項目を入力：

| フィールド | 必須 | 説明 | 例 |
|-----------|------|------|-----|
| item_code | ◯ | 商品コード（一意） | ext-wall-new-001 |
| name | ◯ | 商品名 | 新商品サイディング |
| category_id | ◯ | カテゴリID | （ドロップダウンから選択） |
| manufacturer | | メーカー名 | ニチハ |
| model_number | | 型番 | ABC123 |
| note | | 説明・備考 | 横張のみ対応 |
| unit_id | | 単位ID | （㎡、個など） |
| is_active | ◯ | 有効フラグ | true |
| display_order | | 表示順 | 10 |

4. 「Save」をクリック

### 2.2 バリアント（色）の追加

1. Table Editor → `item_variants` テーブルを選択
2. 「Insert row」をクリック
3. 以下の項目を入力：

| フィールド | 必須 | 説明 | 例 |
|-----------|------|------|-----|
| item_id | ◯ | 商品ID | （追加した商品のID） |
| variant_code | ◯ | バリアントコード | ext-wall-new-001-white |
| color_name | ◯ | 色名 | ホワイト |
| color_code | | 色コード | WHITE |
| is_active | ◯ | 有効フラグ | true |
| display_order | | 表示順 | 1 |

4. 「Save」をクリック

### 2.3 価格の設定

1. Table Editor → `item_pricing` テーブルを選択
2. 「Insert row」をクリック
3. 以下の項目を入力：

| フィールド | 必須 | 説明 | 例 |
|-----------|------|------|-----|
| item_id | ◯ | 商品ID | |
| variant_id | ◯ | バリアントID | |
| product_id | ◯ | プランID | （LACIE/HOURS/LIFE/LIFE_PLUS） |
| price | ◯ | 価格 | 4500 |
| is_standard | ◯ | 標準品フラグ | true（0円なら）/false |
| is_available | ◯ | 利用可能フラグ | true |

4. 「Save」をクリック

### 2.4 商品の編集

1. Table Editor → `items` テーブル
2. 編集したい行をクリック
3. 値を変更
4. 「Save」をクリック

### 2.5 商品の削除（非推奨）

**注意**: 削除ではなく `is_active = false` を推奨

1. Table Editor → `items` テーブル
2. 編集したい行をクリック
3. `is_active` を `false` に変更
4. 「Save」をクリック

---

## 3. カテゴリの管理

### 3.1 カテゴリの追加

1. Table Editor → `categories` テーブル
2. 「Insert row」をクリック
3. 以下の項目を入力：

| フィールド | 必須 | 説明 | 例 |
|-----------|------|------|-----|
| name | ◯ | カテゴリ名 | 新カテゴリ |
| slug | ◯ | スラッグ（URL用） | new-category |
| category_type | ◯ | タイプ | exterior/interior/equipment |
| is_active | ◯ | 有効フラグ | true |
| display_order | | 表示順 | 10 |

4. 「Save」をクリック

---

## 4. 一括データ更新

### 4.1 SQLでの一括更新

SQL Editor を使用：

```sql
-- 例：特定メーカーの価格を一括10%アップ
UPDATE item_pricing
SET price = price * 1.1
WHERE item_id IN (
  SELECT id FROM items WHERE manufacturer = 'ニチハ'
);
```

### 4.2 CSVインポート

1. Table Editor → 対象テーブルを選択
2. 「Import data」をクリック
3. CSVファイルをアップロード
4. カラムマッピングを確認
5. 「Import」をクリック

### 4.3 CSVエクスポート

1. Table Editor → 対象テーブルを選択
2. 「Export」をクリック
3. CSV形式でダウンロード

---

## 5. 画像の管理

### 5.1 画像のアップロード

1. Storage → `product-images` バケット
2. フォルダを作成（例：variants/xxx-xxx）
3. 「Upload」で画像をアップロード
4. アップロード後、URLをコピー

### 5.2 画像URLの登録

1. Table Editor → `item_variant_images` テーブル
2. 「Insert row」をクリック
3. `variant_id` と `image_url` を入力
4. `is_primary = true`（メイン画像の場合）
5. 「Save」をクリック

---

## 6. ユーザー管理

### 6.1 ユーザー一覧

1. Authentication → Users
2. 登録ユーザー一覧が表示

### 6.2 ユーザーの招待

1. Authentication → Users
2. 「Invite user」をクリック
3. メールアドレスを入力
4. 招待メールが送信されます

### 6.3 ユーザーの削除

1. Authentication → Users
2. ユーザーを選択
3. 「Delete user」をクリック

---

## 7. バックアップ・リストア

### 7.1 自動バックアップ（Proプラン）

Supabase Proプランでは毎日自動バックアップが実行されます。

確認方法：
1. Settings → Database
2. 「Backups」セクションを確認

### 7.2 PITR（ポイントインタイムリカバリ）

Proプランの機能：
1. Settings → Database → Backups
2. 「Point in Time Recovery」を有効化
3. 任意の時点にリストア可能（最大7日間）

### 7.3 手動エクスポート

#### SQL形式
1. SQL Editor で以下を実行：
```sql
-- 全データをダンプ
pg_dump --data-only
```

#### CSV形式
1. Table Editor → 各テーブル → Export

---

## 8. 監査・ログ

### 8.1 監査ログの確認

1. Table Editor → `audit_logs` テーブル
2. 変更履歴が記録されています

| フィールド | 説明 |
|-----------|------|
| table_name | 変更されたテーブル |
| record_id | レコードID |
| action | INSERT/UPDATE/DELETE |
| old_data | 変更前データ |
| new_data | 変更後データ |
| created_at | 変更日時 |

### 8.2 閲覧ログの確認

1. Table Editor → `view_logs` テーブル
2. ユーザーの閲覧履歴を確認

---

## 9. トラブルシューティング

### データが反映されない
1. ブラウザキャッシュをクリア
2. Supabaseダッシュボードでデータを確認
3. RLSポリシーを確認

### エラーが発生する
1. Supabase → Logs でエラーログを確認
2. SQL Editorでクエリをテスト
3. 外部キー制約を確認

### パフォーマンスが遅い
1. Supabase → Performance でクエリ分析
2. インデックスを確認
3. 不要なデータを削除

---

## 10. よく使うSQLクエリ

### 商品数の確認
```sql
SELECT category_type, COUNT(*)
FROM items i
JOIN categories c ON i.category_id = c.id
WHERE i.is_active = true
GROUP BY category_type;
```

### 価格一覧
```sql
SELECT i.name, v.color_name, p.code as plan, ip.price
FROM item_pricing ip
JOIN items i ON ip.item_id = i.id
JOIN item_variants v ON ip.variant_id = v.id
JOIN products p ON ip.product_id = p.id
ORDER BY i.name, v.color_name, p.display_order;
```

### 人気商品
```sql
SELECT i.name, COUNT(*) as selection_count
FROM selections s
JOIN items i ON s.item_id = i.id
GROUP BY i.id, i.name
ORDER BY selection_count DESC
LIMIT 10;
```

---

## 11. 連絡先・サポート

- Supabase公式ドキュメント: https://supabase.com/docs
- GitHub Issues: https://github.com/Ghouse-development/IC-pochipochi-system/issues

---

最終更新: 2025-12-13

# Supabase セットアップガイド

## 概要

IC-pochipochi-system のデータベースセットアップ用統合SQLファイル

## ファイル構成

| ファイル | 説明 |
|---------|------|
| **COMPLETE_SETUP.sql** | 全テーブル・関数・初期データの統合SQL |

## セットアップ手順

### 1. Supabase SQL Editorで実行

1. Supabaseダッシュボード → SQL Editor を開く
2. `COMPLETE_SETUP.sql` の内容を貼り付け
3. 「Run」をクリック

### 2. CLIで実行する場合

```bash
# Supabase CLIがインストール済みの場合
supabase db push

# または直接PostgreSQLに接続
psql $DATABASE_URL -f sql/COMPLETE_SETUP.sql
```

## COMPLETE_SETUP.sql の内容

### 1. ENUM型定義
- category_type (外装/内装/設備)
- plan_type (LACIE/HOURS/LIFE/LIFE_PLUS)
- pricing_type (標準/オプション)
- item_status (active/discontinued/coming_soon)
- unit_type (各種単位)
- room_type (部屋タイプ)

### 2. コアテーブル
| テーブル | 説明 |
|---------|------|
| users | ユーザー情報 |
| products | プラン（LACIE/HOURS/LIFE/LIFE+） |
| categories | カテゴリ（外装/内装/設備） |
| items | 商品マスター |
| item_variants | 色・バリエーション |
| item_pricing | 価格情報（プラン別） |
| projects | 物件プロジェクト |
| selections | 選択履歴 |
| system_settings | システム設定 |

### 3. インデックス
- カテゴリ検索用
- 商品コード検索用
- 価格検索用

### 4. 初期データ
- 4プラン（LACIE/HOURS/LIFE/LIFE_PLUS）
- 単位マスター
- 部屋タイプマスター
- システム設定

### 5. RLSポリシー
- 商品データ: 匿名読み取り許可
- ユーザーデータ: 認証ユーザーのみ
- プロジェクトデータ: 所有者のみ

### 6. ユーティリティ
- `data_statistics` ビュー: データ統計表示
- `popular_items_ranking` ビュー: 人気商品ランキング
- `check_data_integrity()` 関数: データ整合性チェック
- `bulk_update_prices()` 関数: 一括価格更新

## 商品データのインポート

商品データはTypeScriptスクリプトでインポート:

```bash
npx tsx scripts/importToSupabase.ts
```

### インポート結果（2025-12-13時点）
- カテゴリ: 38件
- 商品: 196件
- バリアント: 486件
- 価格レコード: 1,268件

## 確認クエリ

```sql
-- データ統計を確認
SELECT * FROM data_statistics;

-- データ整合性チェック
SELECT * FROM check_data_integrity();

-- カテゴリ別アイテム数
SELECT
  c.category_type,
  c.name as category,
  COUNT(i.id) as item_count
FROM categories c
LEFT JOIN items i ON i.category_id = c.id
GROUP BY c.category_type, c.name
ORDER BY c.category_type, c.display_order;
```

## トラブルシューティング

### エラー: relation already exists
既存のテーブルがある場合は、先に削除するか、CREATE TABLE IF NOT EXISTSを使用

### エラー: permission denied
RLSが有効な場合、service_roleキーを使用するか、ポリシーを確認

## 連絡先

- GitHub: https://github.com/Ghouse-development/IC-pochipochi-system

---
最終更新: 2025-12-13

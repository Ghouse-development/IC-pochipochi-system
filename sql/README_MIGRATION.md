# Supabase データ移行ガイド

## 概要

静的TypeScriptファイルからSupabaseデータベースへの完全移行

### 移行データ統計

| タブ | アイテム数 | カテゴリ数 | SQLファイル |
|-----|-----------|-----------|-------------|
| **内装** | 317件 | 39件 | 009_seed_interior_complete.sql |
| **外装** | 151件 | 14件 | 010_seed_exterior_complete.sql |
| **設備** | 46件 | 7件 | 008_seed_equipment_items.sql |
| **合計** | **514件** | **60件** | - |

## 実行手順

### 1. Supabase SQL Editorで実行

Supabaseダッシュボード → SQL Editor → 以下の順序で実行:

```
0. sql/000_fix_constraints.sql (必須！制約追加)
1. sql/009_seed_interior_complete.sql (内装317件)
2. sql/010_seed_exterior_complete.sql (外装151件)
3. sql/008_seed_equipment_items.sql (設備46件) ※既存の場合はスキップ
```

**重要**: `000_fix_constraints.sql` を最初に実行してください。
これにより ON CONFLICT に必要なユニーク制約が追加されます。

### 2. CLIで実行する場合

```bash
# Supabase CLIがインストール済みの場合
supabase db push

# または直接PostgreSQLに接続
psql $DATABASE_URL -f sql/009_seed_interior_complete.sql
psql $DATABASE_URL -f sql/010_seed_exterior_complete.sql
```

## カテゴリ一覧

### 内装 (39カテゴリ)
- Gハウスオリジナル、床材、収納棚、アクセントタイル
- スイッチ/コンセント、階段、インテリアカウンター、ニッチ
- 室内ドア、インターホン、玄関靴箱、玄関手洗い
- エアコン、アクセントパネル、室内窓、壁
- 乾太くん、トイレ収納、物干し金物、天井
- 補強・下地、換気システム、格子、アクセサリー
- 間接照明、収納、小上がり、スロップシンク
- カーテンBOX、壁材、建具、天井材
- 点検口、ダウンライト施工費、畳、お風呂
- 洗濯パン、洗濯機混合水栓、ナノバブル発生装置

### 外装 (14カテゴリ)
- 外壁、窓、外部設備、エコキュート
- ポーチ、玄関ドア、軒天、電動ガレージシャッター
- 樋、ガレージシャッター、換気システム
- 屋根、庇、太陽光・蓄電池

### 設備 (7カテゴリ)
- キッチン、バス、洗面台、トイレ
- 給湯器、エアコン、照明

## 注意事項

1. **既存データの削除**: 各SQLファイルは既存の該当カテゴリのデータを削除してから挿入します
2. **トランザクション**: BEGIN/COMMITで囲まれているため、エラー時は自動ロールバック
3. **重複防止**: ON CONFLICTで重複を防止

## 確認クエリ

移行後にデータを確認:

```sql
-- カテゴリ別アイテム数
SELECT
  c.category_type,
  c.name as category,
  COUNT(i.id) as item_count
FROM categories c
LEFT JOIN items i ON i.category_id = c.id
GROUP BY c.category_type, c.name
ORDER BY c.category_type, c.display_order;

-- 合計
SELECT
  c.category_type,
  COUNT(DISTINCT c.id) as category_count,
  COUNT(i.id) as item_count
FROM categories c
LEFT JOIN items i ON i.category_id = c.id
GROUP BY c.category_type;
```

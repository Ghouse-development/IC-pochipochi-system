# IC-pochipochi-system 開発記録

## プロジェクト概要
- **システム名**: IC-pochipochi-system（ぽちぽちシステム）
- **目的**: 住宅建材・設備の選定システム
- **対象ユーザー**: インテリアコーディネーター、顧客

## バージョン履歴

### v2.10.0 (2025-12-13)
- Supabaseデータインポートスクリプト追加
- ノーコード運用対応（Supabase管理画面から商品データ編集可能）
- CatalogWithTabsのSupabase優先・静的データフォールバック方式実装
- RLSポリシー修正（匿名アクセス許可）

### v2.9.0 (2025-12-12)
- ESLintエラー修正（25件→0件）
- デプロイエラー解消
- 未使用変数削除

### v2.8.0 (2025-12-11)
- 内装スタイルブック36-45ページ対応
- 収納棚・可動棚・コンポリア価格分割

### v2.7.0 (2025-12-10)
- 100点UIリデザイン
- 100社ローンチ対応
- システム完成度96点達成

## 技術スタック

### フロントエンド
- React 19.1.1
- TypeScript 5.8.3
- Vite 7.1.4
- Tailwind CSS 3.4.1
- Zustand 5.0.8（状態管理）
- React Router 7.8.2

### バックエンド
- Supabase（PostgreSQL + Auth + Storage）
- Express 5.1.0（ローカルサーバー）

### デプロイ
- Vercel
- GitHub Actions（CI/CD）

## データベース構造

### 主要テーブル
| テーブル | 説明 |
|---------|------|
| products | プラン（LACIE, HOURS, LIFE, LIFE_PLUS） |
| categories | カテゴリ（外装/内装/設備） |
| items | 商品マスター |
| item_variants | 色・バリエーション |
| item_pricing | 価格情報（プラン別） |
| projects | 物件プロジェクト |
| selections | 選択履歴 |

### データ件数（2025-12-13時点）
- カテゴリ: 38件
- 商品: 196件
- バリアント: 486件
- 価格レコード: 1,268件

## 機能一覧

### 実装済み機能
1. **商品カタログ**
   - タブ切替（外装/内装/設備）
   - カテゴリフィルタ
   - サブカテゴリフィルタ
   - 色フィルタ
   - 検索機能
   - 標準/オプション切替

2. **商品詳細**
   - 色バリエーション選択
   - 価格表示（プラン別）
   - 画像表示

3. **カート機能**
   - 商品選択・解除
   - 数量変更
   - 合計金額計算
   - 標準品一括選択

4. **見積・PDF出力**
   - 見積書生成
   - PDF出力
   - Excel出力

5. **管理機能**
   - 商品管理（CRUD）
   - カテゴリ管理
   - バリアント管理
   - 価格管理

6. **その他**
   - お気に入り
   - 最近見た商品
   - 比較機能
   - レスポンシブデザイン

## ノーコード運用ガイド

### Supabaseでのデータ管理

#### 商品追加
1. Supabaseダッシュボード → Table Editor → items
2. 「Insert row」クリック
3. 必須項目入力:
   - item_code: 商品コード（一意）
   - name: 商品名
   - category_id: カテゴリID
   - is_active: true

#### バリアント（色）追加
1. Table Editor → item_variants
2. 「Insert row」クリック
3. 必須項目入力:
   - item_id: 商品ID
   - variant_code: バリアントコード
   - color_name: 色名

#### 価格設定
1. Table Editor → item_pricing
2. 「Insert row」クリック
3. 必須項目入力:
   - item_id: 商品ID
   - variant_id: バリアントID
   - product_id: プランID
   - price: 価格

### 一括更新
- Supabase SQL Editorでクエリ実行可能
- CSVインポート機能あり

## セキュリティ

### RLSポリシー
- 商品データ: 匿名読み取り許可
- ユーザーデータ: 認証必須
- プロジェクトデータ: 所有者のみ

### 認証
- Supabase Auth使用
- Email/Password認証

## パフォーマンス

### 最適化
- コード分割（React.lazy）
- 画像遅延読み込み
- Supabaseクエリ最適化

### ビルドサイズ
- メインバンドル: 669KB
- ベンダー: 704KB（PDF関連）

## 既知の課題

1. **バンドルサイズ**: PDF関連ライブラリが大きい
2. **画像管理**: 一部商品に画像なし
3. **LIFE+プラン**: 表記ゆれ対応済み

## 今後の拡張予定

1. リアルタイム同期（Supabase Realtime）
2. プッシュ通知
3. AI商品レコメンド
4. 在庫管理連携
5. 発注システム連携

## 連絡先

- GitHub: https://github.com/Ghouse-development/IC-pochipochi-system
- 開発担当: Claude Code

---
最終更新: 2025-12-13

# LIFE X カタログシステム 開発記録

## プロジェクト概要
- **開発期間**: 2025年9月
- **クライアント**: Gハウス
- **リポジトリ**: https://github.com/nishinocat/life-x-stylebook
- **デプロイ**: Vercel
- **ローカルパス**: `C:\claudecode\life-x-catalog`

## 技術スタック
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Zustand (状態管理)
- Radix UI (UIコンポーネント)
- xlsx (Excel出力)
- jsPDF (PDF出力)

## 実装機能一覧

### 1. カタログ機能
- 3タブ構成（エクステリア・インテリア・水廻り）
- 商品カード表示
- カテゴリフィルター（左サイドバー）
- 商品詳細モーダル
  - 数量選択（1〜99個）
  - 色バリエーション選択
  - 合計金額自動計算
  - カテゴリ別選択ルール表示

### 2. カテゴリ別選択ルール
#### 単一選択カテゴリ（1つのみ選択可能）
- エコキュート
- キッチン
- ユニットバス
- 玄関ドア
- 屋根材
- 外壁材
- 床材
- 階段
- 給湯器
- IHクッキングヒーター
- 食器洗い乾燥機

#### 複数選択カテゴリ
- 窓、シャッター（制限なし）
- 洗面化粧台（最大2つ）
- トイレ（最大3つ）
- 照明、カーテン、カーテンレール（制限なし）
- 建具、手すり、造作材、壁紙（制限なし）

### 3. カート機能
- リアルタイム金額計算
- 商品追加・削除・数量変更
- 一時保存（localStorage）
- 確定機能（変更不可）
- 見積書出力
  - Excel形式
  - PDF形式

### 4. 管理機能
- 管理ダッシュボード
  - 商品追加・編集・削除
  - カテゴリ別商品管理
  - 採用統計表示
  - 商品一覧のExcel/CSV出力
- バージョン管理
- 通知システム

### 5. データ管理
- Zustand stores:
  - `useProductStore`: 商品データ管理
  - `useCartStore`: カート状態管理
  - `useVersionStore`: バージョン管理
  - `useOrderStore`: 注文管理
  - `useStatisticsStore`: 統計データ
  - `useNotificationStore`: 通知管理

## ファイル構成
```
src/
├── components/
│   ├── admin/
│   │   ├── AdminDashboard.tsx      # 管理画面メイン
│   │   └── ProductFormNew.tsx      # 商品追加・編集フォーム
│   ├── cart/
│   │   ├── CartSidebar.tsx         # カートサイドバー（基本）
│   │   └── CartSidebarEnhanced.tsx # カートサイドバー（拡張版）
│   ├── catalog/
│   │   ├── CatalogWithTabs.tsx     # タブ付きカタログ
│   │   ├── ProductCard.tsx         # 商品カード
│   │   ├── ProductDetailModal.tsx  # 商品詳細モーダル
│   │   ├── FilterSidebar.tsx       # フィルターサイドバー
│   │   └── ConfirmOrderModal.tsx   # 注文確認モーダル
│   └── common/
│       ├── Button.tsx               # ボタンコンポーネント
│       ├── Badge.tsx                # バッジコンポーネント
│       └── Card.tsx                 # カードコンポーネント
├── config/
│   └── categoryRules.ts            # カテゴリ選択ルール設定
├── stores/
│   ├── useProductStore.ts          # 商品ストア
│   ├── useCartStore.ts             # カートストア
│   ├── useVersionStore.ts          # バージョンストア
│   ├── useOrderStore.ts            # 注文ストア
│   ├── useStatisticsStore.ts       # 統計ストア
│   └── useNotificationStore.ts     # 通知ストア
├── utils/
│   ├── exportEstimate.ts           # 見積書出力（Excel/PDF）
│   └── exportProducts.ts           # 商品リスト出力（Excel/CSV）
├── types/
│   ├── product.ts                  # 商品型定義
│   └── filter.ts                   # フィルター型定義
├── data/
│   ├── products/
│   │   ├── exteriorProducts.ts     # エクステリア商品データ
│   │   ├── interiorProducts.ts     # インテリア商品データ
│   │   └── waterProducts.ts        # 水廻り商品データ
│   └── categories.ts               # カテゴリデータ
└── lib/
    └── utils.ts                     # ユーティリティ関数
```

## 主要な開発履歴

### 初期開発フェーズ
1. React + Vite プロジェクト作成
2. 基本的なカタログ表示機能実装
3. カート機能実装
4. TypeScript型定義整備

### 機能拡張フェーズ
1. バージョン管理システム追加
2. 管理ダッシュボード実装
3. 統計機能追加
4. 通知システム実装

### UI/UX改善フェーズ
1. タブナビゲーション実装（エクステリア・インテリア・水廻り）
2. レスポンシブデザイン対応
3. 商品詳細モーダル強化
4. フィルターサイドバー改善

### 見積機能フェーズ
1. 一時保存機能実装
2. 確定機能（変更不可）実装
3. Excel出力機能追加
4. PDF出力機能追加

### カテゴリルール実装フェーズ
1. 単一選択ルール実装
2. 複数選択制限実装
3. ルール表示UI追加
4. 選択制限警告機能

### デプロイ・最適化フェーズ
1. Vercelデプロイ設定
2. ビルドエラー修正
3. TypeScriptエラー解決
4. パフォーマンス最適化

## トラブルシューティング記録

### 解決済みの問題
1. **無限ループエラー**: Maximum update depth exceeded
   - 原因: Zustand store の不適切な使用
   - 解決: セレクター使用に変更

2. **Vercelビルドエラー**
   - 原因: TypeScript型エラー、未使用変数
   - 解決: 型定義修正、不要なインポート削除

3. **日本語エンコーディング問題**
   - 原因: btoa関数での日本語処理
   - 解決: `btoa(unescape(encodeURIComponent(string)))`

## 今後の拡張可能性

### 機能追加案
1. **Kintone連携**
   - 顧客管理システム統合
   - 見積データ自動連携
   - 承認ワークフロー

2. **在庫管理**
   - リアルタイム在庫表示
   - 自動発注システム

3. **施工管理**
   - 施工写真アップロード
   - 進捗管理
   - 完了報告書生成

4. **顧客ポータル**
   - 見積履歴閲覧
   - オンライン承認
   - 施工進捗確認

## 開発環境
- Node.js: v18+
- npm: v9+
- エディタ: VS Code推奨
- ブラウザ: Chrome/Edge最新版

## コマンド一覧
```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# 型チェック
npm run type-check

# リント
npm run lint
```

## Git操作
```bash
# 変更をコミット
git add -A
git commit -m "コミットメッセージ"

# GitHubへプッシュ
git push origin main

# 状態確認
git status
git log --oneline
```

## お問い合わせ
- GitHub Issues: https://github.com/nishinocat/life-x-stylebook/issues
- 開発者: Claude AI Assistant

---
最終更新: 2025年9月9日
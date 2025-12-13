# IC-ぽちぽちシステム 開発記録

## 概要
住宅建築用商品選択システム「IC-ぽちぽちシステム」の開発記録

## 2024年12月 - 100社ローンチ対応

### v2.7.0 - UX品質向上・管理機能改善 (2024-12-13)

#### 問題修正
- **Userボタン機能なし問題**: Header.tsxのUserボタンにonClick未設定 → ユーザーメニュー実装
- **管理画面ナビゲーション未接続**: App.tsxでonAdminClick等のprops未設定 → navigate()で接続
- **管理画面アクセス方法不明瞭**: URLを直接入力する必要があった → ユーザーメニューに追加

#### ユーザーメニュー実装
- ログイン中のユーザー名表示
- 管理者/ユーザー権限表示
- 管理画面へのクイックアクセス（管理者のみ）
- 進捗ダッシュボードへのリンク（管理者のみ）
- ログアウト機能

#### ダークモード完全対応
- CatalogWithTabs.tsx全コンポーネントにdark:クラス追加
  - スケルトンカード
  - 商品カード（境界線・影・テキスト色）
  - 空状態コンポーネント
  - 検索バー・入力フィールド
  - モバイルフィルターバー
  - モバイル下部ナビゲーション
  - モバイル進捗パネル（ボトムシート）

#### 変更ファイル
```
src/
├── App.tsx                               # navigate追加、Header props接続
└── components/
    ├── layout/Header.tsx                 # ユーザーメニュー実装
    └── catalog/CatalogWithTabs.tsx       # ダークモード完全対応
```

#### システム進捗状況（3視点評価）

**開発者視点**: 88%完了
- コア機能: 100%
- 管理機能: 100%
- UI/UX: 100%
- 商品データ: 要登録

**社員視点**: 独自運用可能
- 商品CRUD: ✅
- ユーザー管理: ✅
- 発注書作成: ✅
- バックアップ: ✅

**お客様視点**: 使いやすさ向上
- 商品閲覧: ⭐⭐⭐⭐⭐
- 検索機能: ⭐⭐⭐⭐⭐
- カート操作: ⭐⭐⭐⭐⭐
- 進捗確認: ⭐⭐⭐⭐⭐

---

### v2.6.0 - デザインシステム統一・UX完全刷新 (2024-12-13)

#### デザインシステム構築
- `src/styles/designSystem.ts` - 統一カラーパレット・コンポーネントスタイル定義
- teal系をプライマリカラーに統一
- 状態色を明確化（未選択/選択済み/お気に入り/比較）

#### URLルーティング対応
- React Router DOM v7統合
- `/catalog/:step/:categoryId/:productId` 形式のURL対応
- 商品リンクの共有が可能に
- フィルター状態もURLクエリパラメータで永続化 (`?q=検索語&filter=standard`)
- ブラウザの戻る/進むボタンが正常に動作

#### UX機能追加
- **お気に入り機能**: ハートアイコンで商品をピン留め（永続化）
- **最近見た商品**: 履歴をサイドバーに表示
- **キーボードショートカット**: `/`(検索), `N`(次カテゴリ), `Q`(クイック), `Esc`(閉じる)
- **検索ハイライト**: 検索語を黄色でハイライト表示
- **標準品一括選択**: 1クリックでカテゴリ内の標準品を全選択

#### UI/デザイン改善
- ヘッダーのグラデーション廃止 → ソリッドカラーに統一
- プログレスバーをシンプル化（白バー）
- サイドバーの情報量削減・視認性向上
- ボタン配置の整理（アイコンボタン化）
- aria-label属性追加（アクセシビリティ対応）

#### 新規ファイル
```
src/
├── stores/useFavoritesStore.ts    # お気に入り・履歴永続化
└── styles/designSystem.ts         # デザインシステム定義
```

#### 変更ファイル
```
src/
├── App.tsx                        # React Router統合
└── components/catalog/
    └── CatalogWithTabs.tsx        # 大規模リファクタリング
```

---

### v2.5.0 - 全社展開対応・UX完全リファイン (2024-12-13)

#### 主要機能追加

**1. Toast通知システム統合**
- `src/components/common/Toast.tsx` - Toast通知コンポーネント
- 全コンポーネントでalert()をToast通知に置き換え
- アニメーション付きのモダンな通知UI
- success/error/warning/info の4種類のトースト

**2. データバックアップ機能**
- `src/components/admin/DataBackup.tsx` - バックアップ/復元画面
- 全LocalStorageデータのJSON形式エクスポート
- インポートによるデータ復元
- ストレージ使用量の可視化
- 全データ削除機能（二重確認付き）

**3. 発注管理システム**
- `src/stores/useVendorOrderStore.ts` - 発注状態管理（永続化）
- `src/components/admin/VendorOrderManager.tsx` - 発注書管理UI
- 業者マスタ管理（CRUD操作）
- 発注書作成・ステータス管理
- Excel形式での発注書エクスポート

**4. オンボーディングガイド**
- `src/components/common/OnboardingGuide.tsx` - 7ステップチュートリアル
- 初回訪問時に自動表示
- ヘルプボタンからいつでも再表示可能
- LocalStorageで完了状態を永続化

**5. エラーハンドリング強化**
- `src/components/common/ErrorBoundary.tsx` - エラー境界
- アプリケーションクラッシュ時の優雅な回復
- エラー情報のログ出力

#### UX改善

**1. 通知のモダン化**
- ブラウザ標準のalert()を全廃止
- スタイリッシュなToast通知に統一
- 右下に表示、自動消失

**2. カート・見積機能強化**
- 複数形式でのエクスポート対応（PDF/Excel/仕様書/提案資料）
- 一括エクスポート機能
- 見積確定フロー改善

**3. 管理画面拡充**
- 発注管理タブ追加
- バックアップタブ追加
- 統計ダッシュボード改善

#### 変更ファイル一覧

```
src/
├── App.tsx                               # ToastProvider統合
├── index.css                             # Toastアニメーション追加
├── components/
│   ├── admin/
│   │   ├── AdminDashboard.tsx           # 新タブ追加
│   │   ├── DataBackup.tsx               # 新規作成
│   │   ├── VendorOrderManager.tsx       # 永続化対応
│   │   └── RoomInteriorManager.tsx      # Toast対応
│   ├── cart/
│   │   └── CartSidebarEnhanced.tsx      # Toast対応・エクスポート強化
│   ├── catalog/
│   │   ├── ConfirmOrderModal.tsx        # Toast対応
│   │   └── ProductDetailModal.tsx       # Toast対応・メモ欄表示
│   └── common/
│       ├── ErrorBoundary.tsx            # 新規作成
│       ├── OnboardingGuide.tsx          # 新規作成
│       └── Toast.tsx                    # 新規作成
└── stores/
    └── useVendorOrderStore.ts           # 新規作成（永続化ストア）
```

---

## 過去のリリース履歴

### v2.4.0 - UI 100点化・完全リデザイン
- カテゴリ選択の改善
- 商品カードデザイン刷新
- レスポンシブ対応強化

### v2.3.0 - 内装スタイルブック対応
- 36-45ページの商品データ追加
- 収納棚・可動棚・コンポリア価格分割

### v2.2.0 - UnitType修正
- 単位表記の統一（カ所→箇所、セット→一式等）

### v2.1.0 - Supabaseデータ移行
- PostgreSQLへのデータ移行完了
- 認証システム実装

### v2.0.0 - 初期リリース
- 基本機能実装
- 商品選択・カート機能
- 見積出力機能

---

## 技術スタック

- **フロントエンド**: React 18 + TypeScript + Vite
- **UI**: TailwindCSS + Radix UI
- **状態管理**: Zustand（永続化対応）
- **バックエンド**: Supabase (PostgreSQL + Auth + Storage)
- **エクスポート**: jsPDF + xlsx

## 開発環境

```bash
# 開発サーバー起動
npm run dev

# 型チェック
npm run typecheck

# ビルド
npm run build
```

## デプロイ

本番環境: Vercel
ブランチ: main

# 📋 アプリ名変更ガイド: life-x-catalog → STYLEBOOK

## 🎯 概要
このガイドでは、`life-x-catalog`から`STYLEBOOK`へアプリ名を安全に変更する手順を説明します。
GitHub、Supabase、Vercel、ローカル環境すべてを同期させながら進めます。

## ⚠️ 重要な注意事項
- すべてのサービスが連携しているため、順番通りに実行してください
- データベースとストレージは保持されます
- 既存のデータは失われません

## 📝 変更手順

### 1. ローカル環境の準備

#### 1.1 現在の作業を保存
```bash
git add .
git commit -m "Prepare for app rename to STYLEBOOK"
git push origin extrior_image
```

#### 1.2 フォルダ名の変更
```bash
# Windows (PowerShell)
cd C:\claudecode
Rename-Item -Path "life-x-catalog" -NewName "stylebook"

# Mac/Linux
cd ~/claudecode
mv life-x-catalog stylebook
```

#### 1.3 package.jsonの更新
```json
{
  "name": "stylebook",
  "private": true,
  "version": "1.0.0",
  ...
}
```

#### 1.4 HTMLタイトルの更新
`index.html`:
```html
<title>STYLEBOOK</title>
```

### 2. GitHub リポジトリの変更

#### 2.1 GitHubでリポジトリ名を変更
1. GitHubで`life-x-stylebook`リポジトリを開く
2. Settings → General
3. Repository name を `stylebook` に変更
4. 「Rename」をクリック

#### 2.2 ローカルのGitリモートURLを更新
```bash
cd C:\claudecode\stylebook
git remote set-url origin https://github.com/nishinocat/stylebook.git
git remote -v  # 確認
```

### 3. Supabase の設定（変更不要）

Supabaseの設定は変更不要です：
- プロジェクトURL: そのまま使用
- APIキー: そのまま使用
- データベース: すべて保持
- ストレージ: すべて保持

### 4. Vercel の設定更新

#### 4.1 プロジェクト名の変更
1. Vercelダッシュボードにログイン
2. `life-x-catalog`プロジェクトを選択
3. Settings → General → Project Name
4. `stylebook` に変更して保存

#### 4.2 環境変数の確認
Settings → Environment Variables で以下を確認：
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

#### 4.3 GitHubとの再接続
1. Settings → Git
2. GitHubリポジトリが自動的に新しい名前に更新されているか確認
3. されていない場合は、再接続

### 5. アプリ内の表示更新

#### 5.1 ヘッダーコンポーネントの更新
`src/components/layout/Header.tsx`:
```tsx
<h1 className="text-xl sm:text-2xl font-bold text-gray-900">STYLEBOOK</h1>
<span className="hidden sm:block text-sm text-gray-500">カタログ</span>
```

#### 5.2 管理画面の更新
`src/components/admin/AdminDashboard.tsx`:
```tsx
<h1 className="text-2xl font-bold text-gray-900">STYLEBOOK管理ダッシュボード</h1>
```

### 6. デプロイと確認

#### 6.1 変更をコミット
```bash
git add .
git commit -m "Rename app to STYLEBOOK"
git push origin extrior_image
```

#### 6.2 mainブランチにマージ
```bash
git checkout main
git pull origin main
git merge extrior_image
git push origin main
```

#### 6.3 Vercelでの自動デプロイ確認
1. Vercelダッシュボードで自動デプロイの進行を確認
2. デプロイ完了後、新しいURLでアプリにアクセス

### 7. 最終確認チェックリスト

- [ ] ローカルでアプリが起動する（`npm run dev`）
- [ ] GitHubリポジトリ名が`stylebook`になっている
- [ ] Vercelプロジェクト名が`stylebook`になっている
- [ ] アプリのヘッダーに「STYLEBOOK」と表示される
- [ ] Supabaseのデータベース接続が正常
- [ ] 画像アップロード機能が正常に動作
- [ ] 商品管理機能が正常に動作

## 🔧 トラブルシューティング

### Vercelのビルドエラーの場合
```bash
# package-lock.jsonを再生成
rm -rf node_modules package-lock.json
npm install
git add package-lock.json
git commit -m "Fix package-lock.json"
git push
```

### Supabase接続エラーの場合
`.env`ファイルを確認：
```env
VITE_SUPABASE_URL=https://pnurwehyjmiyevwtekip.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### GitHubプッシュエラーの場合
```bash
git remote -v  # URLを確認
git remote set-url origin https://github.com/nishinocat/stylebook.git
```

## 📌 完了後の新しい情報

- **アプリ名**: STYLEBOOK
- **GitHubリポジトリ**: https://github.com/nishinocat/stylebook
- **Vercelプロジェクト**: stylebook.vercel.app
- **ローカルフォルダ**: C:\claudecode\stylebook

## ✅ 変更完了

すべての手順が完了したら、以下のコマンドで確認：
```bash
npm run dev  # ローカル確認
git status   # Git状態確認
```

おめでとうございます！アプリ名の変更が完了しました。🎉
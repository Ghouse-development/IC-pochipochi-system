import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 環境変数を読み込む
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    // Vercelビルド時にprocess.envから環境変数を読み込む
    define: {
      'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL),
      'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY),
      'import.meta.env.VITE_DEMO_MODE': JSON.stringify(env.VITE_DEMO_MODE || process.env.VITE_DEMO_MODE),
    },
  build: {
    // コード分割の最適化
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Reactコア + UI/アイコン（依存関係があるため一緒にバンドル）
          if (
            id.includes('node_modules/react') ||
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react-router') ||
            id.includes('lucide-react') ||
            id.includes('@radix-ui')
          ) {
            return 'react-vendor';
          }
          // Supabase
          if (id.includes('@supabase')) {
            return 'supabase';
          }
          // エクスポート関連
          if (id.includes('xlsx') || id.includes('jspdf')) {
            return 'export-vendor';
          }
          // 状態管理
          if (id.includes('zustand')) {
            return 'state';
          }
          // ユーティリティ
          if (id.includes('html2canvas') || id.includes('dompurify')) {
            return 'utils';
          }
          // 仮想スクロール
          if (id.includes('@tanstack/react-virtual')) {
            return 'virtual';
          }
          // QRコード
          if (id.includes('qrcode')) {
            return 'qrcode';
          }
          // 商品データ（大きなデータファイルを分離）
          if (id.includes('src/data/interiorProducts') || id.includes('src/data/exteriorProducts')) {
            return 'product-data';
          }
          // カタログセレクター（遅延読み込み）
          if (
            id.includes('src/components/catalog/AirconSelector') ||
            id.includes('src/components/catalog/EntranceDoorSelector') ||
            id.includes('src/components/catalog/DiningTableSelector') ||
            id.includes('src/components/catalog/StairSelector') ||
            id.includes('src/components/catalog/BaseBuildingSelector') ||
            id.includes('src/components/catalog/PorchTileSelector') ||
            id.includes('src/components/catalog/MultiColorAreaSelector') ||
            id.includes('src/components/catalog/RoomBasedMaterialSelector') ||
            id.includes('src/components/catalog/ICProposalSelector') ||
            id.includes('src/components/interior/RoomInteriorSelector')
          ) {
            return 'selectors';
          }
          // カタログメインコンポーネント
          if (id.includes('src/components/catalog/CatalogWithTabs')) {
            return 'catalog';
          }
          // 水回り製品データ
          if (id.includes('src/data/waterEquipmentProducts') || id.includes('src/data/furnitureProducts')) {
            return 'furniture-data';
          }
        },
      },
    },
    // チャンクサイズ警告の閾値
    chunkSizeWarningLimit: 600,
    // ソースマップを本番では無効化
    sourcemap: false,
    // minify設定（esbuild使用 - Vite内蔵）
    minify: 'esbuild',
  },
  // esbuild設定（本番ビルドでconsole.log除去）
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    pure: process.env.NODE_ENV === 'production' ? ['console.log', 'console.info', 'console.debug'] : [],
  },
  // 開発サーバー設定
  server: {
    port: 5173,
    host: true,
  },
  // プレビューサーバー設定
  preview: {
    port: 4173,
    host: true,
  },
  // 最適化設定
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@supabase/supabase-js',
      'zustand',
      'lucide-react',
    ],
  },
  }
})

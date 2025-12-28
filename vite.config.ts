import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // コード分割の最適化
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Reactコア
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router')) {
            return 'react-vendor';
          }
          // UI/アイコン
          if (id.includes('lucide-react') || id.includes('@radix-ui')) {
            return 'ui-vendor';
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
})

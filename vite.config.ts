import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // コード分割の最適化
    rollupOptions: {
      output: {
        manualChunks: {
          // Reactコア
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // UI/アイコン
          'ui-vendor': ['lucide-react', '@radix-ui/react-dialog', '@radix-ui/react-select', '@radix-ui/react-tabs'],
          // Supabase
          'supabase': ['@supabase/supabase-js'],
          // エクスポート関連
          'export-vendor': ['xlsx', 'jspdf', 'jspdf-autotable'],
          // 状態管理
          'state': ['zustand'],
          // ユーティリティ
          'utils': ['html2canvas', 'dompurify'],
          // 仮想スクロール
          'virtual': ['@tanstack/react-virtual'],
          // QRコード
          'qrcode': ['qrcode.react'],
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

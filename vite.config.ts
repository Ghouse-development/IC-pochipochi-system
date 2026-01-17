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
          // node_modulesのライブラリをvendorチャンクに統合
          // 初期化順序の問題を避けるため、細かく分割しない
          if (id.includes('node_modules')) {
            // 大きなエクスポート系ライブラリのみ分離
            if (id.includes('xlsx') || id.includes('jspdf') || id.includes('html2canvas')) {
              return 'export-vendor';
            }
            // その他のnode_modulesは1つのvendorチャンクに
            return 'vendor';
          }
          // アプリケーションコードの大きなファイルを分離
          if (id.includes('src/data/')) {
            return 'app-data';
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

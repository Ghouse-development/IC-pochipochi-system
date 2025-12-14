import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist', 'public/sw.js']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // Context/Hooks等のエクスポートを許可
      'react-refresh/only-export-components': 'off',
      // 未使用変数の警告のみ（アンダースコア接頭辞を許可）
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      // React Hooks依存関係は警告のみ
      'react-hooks/exhaustive-deps': 'warn',

      // === セキュリティルール ===
      // eval系の禁止
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',

      // 危険なプロパティアクセスの警告
      'no-script-url': 'error',

      // コードスタイル
      'prefer-const': 'warn',
      'no-var': 'error',

      // TypeScript厳格化
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
    },
  },
])

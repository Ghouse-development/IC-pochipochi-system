import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initSentry } from './lib/sentry'
import { initWebVitals } from './lib/webVitals'
import { getCsrfToken } from './lib/csrf'

// Sentry初期化（エラー追跡）
initSentry();

// Web Vitals計測開始
initWebVitals();

// CSRFトークン初期化
getCsrfToken();

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} else {
  console.error('Failed to find root element. Check index.html for element with id="root"');
}

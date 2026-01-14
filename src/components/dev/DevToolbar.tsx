import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Settings,
  User,
  Shield,
  Layout,
  Moon,
  Sun,
  ChevronUp,
  ChevronDown,
  Monitor,
  Smartphone,
  Tablet,
  Eye,
  EyeOff,
} from 'lucide-react';

interface DevToolbarProps {
  onToggleDarkMode?: () => void;
  isDarkMode?: boolean;
}

export const DevToolbar: React.FC<DevToolbarProps> = ({
  onToggleDarkMode,
  isDarkMode = false,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  // 現在のページを判定
  const isAdminPage = location.pathname.startsWith('/admin');
  const isUserPage = location.pathname.startsWith('/catalog') || location.pathname === '/';

  // ビューポートサイズシミュレーション
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile' | 'responsive'>('responsive');

  const handleViewportChange = (mode: 'desktop' | 'tablet' | 'mobile' | 'responsive') => {
    setViewportMode(mode);
    const root = document.getElementById('root');
    if (!root) return;

    // リセット
    root.style.maxWidth = '';
    root.style.margin = '';
    root.style.boxShadow = '';
    root.style.border = '';

    switch (mode) {
      case 'mobile':
        root.style.maxWidth = '375px';
        root.style.margin = '0 auto';
        root.style.boxShadow = '0 0 20px rgba(0,0,0,0.2)';
        root.style.border = '1px solid #e5e7eb';
        break;
      case 'tablet':
        root.style.maxWidth = '768px';
        root.style.margin = '0 auto';
        root.style.boxShadow = '0 0 20px rgba(0,0,0,0.2)';
        root.style.border = '1px solid #e5e7eb';
        break;
      case 'desktop':
        root.style.maxWidth = '1280px';
        root.style.margin = '0 auto';
        root.style.boxShadow = '0 0 20px rgba(0,0,0,0.2)';
        root.style.border = '1px solid #e5e7eb';
        break;
      default:
        // responsive - no constraints
        break;
    }
  };

  if (isHidden) {
    return (
      <button
        onClick={() => setIsHidden(false)}
        className="fixed bottom-4 right-4 z-[9999] p-2 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        title="開発ツールバーを表示"
      >
        <Eye className="w-4 h-4" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-gray-900 text-white shadow-2xl">
      {/* トグルボタン */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -top-8 left-1/2 -translate-x-1/2 px-4 py-1 bg-gray-900 rounded-t-lg text-xs flex items-center gap-1 hover:bg-gray-800"
      >
        <Settings className="w-3 h-3" />
        DEV
        {isExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
      </button>

      {isExpanded && (
        <div className="flex items-center justify-between px-4 py-2 gap-4 overflow-x-auto">
          {/* 画面切り替え */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs text-gray-400 font-medium">画面:</span>
            <div className="flex bg-gray-800 rounded-lg p-0.5">
              <button
                onClick={() => navigate('/catalog/exterior')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  isUserPage
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                ユーザー
              </button>
              <button
                onClick={() => navigate('/admin')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  isAdminPage
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                管理者
              </button>
            </div>
          </div>

          {/* 現在のパス */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs text-gray-400 font-medium">パス:</span>
            <code className="text-xs bg-gray-800 px-2 py-1 rounded font-mono text-green-400">
              {location.pathname}
            </code>
          </div>

          {/* ビューポート切り替え */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs text-gray-400 font-medium">表示:</span>
            <div className="flex bg-gray-800 rounded-lg p-0.5">
              <button
                onClick={() => handleViewportChange('responsive')}
                className={`p-1.5 rounded-md transition-all ${
                  viewportMode === 'responsive'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
                title="レスポンシブ"
              >
                <Layout className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleViewportChange('desktop')}
                className={`p-1.5 rounded-md transition-all ${
                  viewportMode === 'desktop'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
                title="デスクトップ (1280px)"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleViewportChange('tablet')}
                className={`p-1.5 rounded-md transition-all ${
                  viewportMode === 'tablet'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
                title="タブレット (768px)"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleViewportChange('mobile')}
                className={`p-1.5 rounded-md transition-all ${
                  viewportMode === 'mobile'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
                title="モバイル (375px)"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ダークモード */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={onToggleDarkMode}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 rounded-lg text-xs font-medium hover:bg-gray-700 transition-colors"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-yellow-400" />
                  ライト
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-blue-400" />
                  ダーク
                </>
              )}
            </button>
          </div>

          {/* クイックリンク */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <button
              onClick={() => navigate('/catalog/exterior')}
              className="px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
            >
              外装
            </button>
            <button
              onClick={() => navigate('/catalog/interior')}
              className="px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
            >
              内装
            </button>
            <button
              onClick={() => navigate('/catalog/equipment')}
              className="px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
            >
              設備
            </button>
          </div>

          {/* 非表示ボタン */}
          <button
            onClick={() => setIsHidden(true)}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors flex-shrink-0"
            title="ツールバーを非表示"
          >
            <EyeOff className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

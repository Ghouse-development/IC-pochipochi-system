import { useState } from 'react';
import { ExternalLink, RefreshCw, Eye, EyeOff, Maximize2, Minimize2 } from 'lucide-react';

interface LivePreviewProps {
  /** プレビューするパス（例: /catalog/exterior/siding） */
  previewPath?: string;
  /** プレビュー対象の名前（表示用） */
  targetName?: string;
}

export function LivePreview({ previewPath = '/catalog/exterior', targetName }: LivePreviewProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // プレビューURL
  const previewUrl = previewPath;

  const fullUrl = `${window.location.origin}${previewUrl}`;

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  const handleOpenInNewTab = () => {
    window.open(fullUrl, '_blank');
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 flex items-center gap-2 z-50"
      >
        <Eye className="w-4 h-4" />
        プレビューを表示
      </button>
    );
  }

  return (
    <div
      className={`fixed bg-white rounded-lg shadow-2xl border border-gray-200 z-50 transition-all ${
        isExpanded
          ? 'inset-4'
          : 'bottom-4 right-4 w-96 h-64'
      }`}
    >
      {/* ヘッダー */}
      <div className="flex items-center justify-between px-3 py-2 border-b bg-gray-50 rounded-t-lg">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium">
            {targetName ? `プレビュー: ${targetName}` : 'ユーザー画面プレビュー'}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handleRefresh}
            className="p-1.5 hover:bg-gray-200 rounded"
            title="更新"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={handleOpenInNewTab}
            className="p-1.5 hover:bg-gray-200 rounded"
            title="新しいタブで開く"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 hover:bg-gray-200 rounded"
            title={isExpanded ? '縮小' : '拡大'}
          >
            {isExpanded ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1.5 hover:bg-gray-200 rounded"
            title="非表示"
          >
            <EyeOff className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* プレビューiframe */}
      <div className="h-[calc(100%-40px)] overflow-hidden rounded-b-lg">
        <iframe
          key={refreshKey}
          src={previewUrl}
          className="w-full h-full border-0"
          title="カタログプレビュー"
          sandbox="allow-same-origin allow-scripts"
        />
      </div>
    </div>
  );
}

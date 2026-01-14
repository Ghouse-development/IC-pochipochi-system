import React, { useState, useRef, useEffect } from 'react';
import { Box, RotateCcw, ZoomIn, ZoomOut, Maximize2, Eye, Palette, Move3D, Camera } from 'lucide-react';
import { Button } from '../common/Button';

/**
 * カラー値のバリデーション（CSS Injection対策）
 * 有効なHEX、RGB、RGBA、HSL、または色名のみ許可
 */
const isValidColor = (color: string): boolean => {
  if (!color || typeof color !== 'string') return false;

  // HEX color (#RGB, #RRGGBB, #RRGGBBAA)
  if (/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(color)) return true;

  // RGB/RGBA
  if (/^rgba?\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*(,\s*(0|1|0?\.\d+))?\s*\)$/.test(color)) return true;

  // HSL/HSLA
  if (/^hsla?\(\s*\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*(,\s*(0|1|0?\.\d+))?\s*\)$/.test(color)) return true;

  // Named colors (common ones)
  const namedColors = ['white', 'black', 'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'grey', 'transparent'];
  if (namedColors.includes(color.toLowerCase())) return true;

  return false;
};

/**
 * 安全なカラー値を返す（無効な場合はフォールバック）
 */
const getSafeColor = (color: string | undefined, fallback: string): string => {
  if (color && isValidColor(color)) return color;
  return fallback;
};

interface Preview3DProps {
  roomType: 'living' | 'bedroom' | 'kitchen' | 'bathroom';
  selections: {
    flooring?: { name: string; color: string; imageUrl?: string };
    wall?: { name: string; color: string; imageUrl?: string };
    ceiling?: { name: string; color: string };
    door?: { name: string; color: string };
    lighting?: { name: string; color: string };
  };
  onClose?: () => void;
}

/**
 * 3Dプレビューコンポーネント
 *
 * 注意: 完全な3D実装にはThree.jsやReact Three Fiberが必要です。
 * このコンポーネントは2.5Dの疑似プレビューを提供します。
 *
 * 将来的な実装ポイント:
 * 1. npm install three @react-three/fiber @react-three/drei
 * 2. GLTFモデルの読み込み
 * 3. マテリアルの動的変更
 * 4. カメラコントロール（OrbitControls）
 */
export const Preview3D: React.FC<Preview3DProps> = ({
  roomType,
  selections,
  onClose,
}) => {
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [viewAngle, setViewAngle] = useState<'front' | 'corner' | 'top'>('corner');
  const containerRef = useRef<HTMLDivElement>(null);

  const roomLabels = {
    living: 'リビング',
    bedroom: '寝室',
    kitchen: 'キッチン',
    bathroom: '浴室',
  };

  const viewAngles = [
    { id: 'front', label: '正面', icon: '⬜' },
    { id: 'corner', label: '斜め', icon: '◇' },
    { id: 'top', label: '俯瞰', icon: '⬡' },
  ];

  // マウスドラッグで回転
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDragging = false;
    let startX = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.clientX;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      setRotation((prev) => prev + deltaX * 0.5);
      startX = e.clientX;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const getFloorStyle = () => ({
    backgroundColor: getSafeColor(selections.flooring?.color, '#d4a373'),
    backgroundImage: selections.flooring?.imageUrl
      ? `url(${encodeURI(selections.flooring.imageUrl)})`
      : 'linear-gradient(45deg, #c8a67b 25%, #d4a373 25%, #d4a373 50%, #c8a67b 50%, #c8a67b 75%, #d4a373 75%)',
    backgroundSize: '40px 40px',
  });

  const getWallStyle = () => ({
    backgroundColor: getSafeColor(selections.wall?.color, '#f5f0e6'),
    backgroundImage: selections.wall?.imageUrl
      ? `url(${encodeURI(selections.wall.imageUrl)})`
      : undefined,
    backgroundSize: 'cover',
  });

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden">
      {/* ヘッダー */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Box className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">
            3Dプレビュー - {roomLabels[roomType]}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setZoom((z) => Math.max(0.5, z - 0.1))}>
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-white text-sm">{Math.round(zoom * 100)}%</span>
          <Button variant="outline" size="sm" onClick={() => setZoom((z) => Math.min(2, z + 0.1))}>
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={() => setRotation(0)}>
            <RotateCcw className="w-4 h-4" />
          </Button>
          {onClose && (
            <Button variant="outline" size="sm" onClick={onClose}>
              <Maximize2 className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* ビューアングル選択 */}
      <div className="flex items-center gap-2 p-3 bg-gray-800">
        <Eye className="w-4 h-4 text-gray-400" />
        <span className="text-sm text-gray-400">視点:</span>
        {viewAngles.map((angle) => (
          <button
            key={angle.id}
            onClick={() => setViewAngle(angle.id as typeof viewAngle)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              viewAngle === angle.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {angle.icon} {angle.label}
          </button>
        ))}
      </div>

      {/* 3Dビュー（2.5D疑似表現） */}
      <div
        ref={containerRef}
        className="relative h-[400px] overflow-hidden cursor-grab active:cursor-grabbing bg-gradient-to-b from-gray-800 to-gray-900"
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `scale(${zoom}) rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
            perspective: '1000px',
            transition: 'transform 0.1s ease-out',
          }}
        >
          {/* 部屋のボックス（2.5D表現） */}
          <div
            className="relative w-[300px] h-[200px]"
            style={{
              transform:
                viewAngle === 'corner'
                  ? 'rotateX(-10deg) rotateY(-30deg)'
                  : viewAngle === 'top'
                  ? 'rotateX(-60deg) rotateY(0deg)'
                  : 'rotateX(0deg) rotateY(0deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* 床 */}
            <div
              className="absolute w-full h-full origin-bottom"
              style={{
                ...getFloorStyle(),
                transform: 'rotateX(90deg) translateZ(100px)',
              }}
            />

            {/* 後壁 */}
            <div
              className="absolute w-full h-full"
              style={{
                ...getWallStyle(),
                transform: 'translateZ(-150px)',
              }}
            >
              {/* 窓 */}
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-sky-200 border-4 border-gray-300 rounded-sm">
                <div className="w-full h-full bg-gradient-to-b from-sky-300 to-sky-100 opacity-50" />
                <div className="absolute inset-0 border border-gray-400 grid grid-cols-2 grid-rows-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="border border-gray-300" />
                  ))}
                </div>
              </div>
            </div>

            {/* 左壁 */}
            <div
              className="absolute w-[300px] h-full origin-left"
              style={{
                ...getWallStyle(),
                transform: 'rotateY(90deg) translateX(-150px)',
              }}
            >
              {/* ドア */}
              {selections.door && (
                <div
                  className="absolute right-4 bottom-0 w-16 h-32 rounded-t-lg border-2 border-gray-400"
                  style={{ backgroundColor: getSafeColor(selections.door.color, '#8b5a2b') }}
                >
                  <div className="absolute right-2 top-1/2 w-2 h-4 bg-yellow-600 rounded" />
                </div>
              )}
            </div>

            {/* 右壁 */}
            <div
              className="absolute w-[300px] h-full origin-right"
              style={{
                ...getWallStyle(),
                transform: 'rotateY(-90deg) translateX(150px)',
                opacity: 0.5,
              }}
            />

            {/* 天井 */}
            <div
              className="absolute w-full h-[300px] origin-top"
              style={{
                backgroundColor: getSafeColor(selections.ceiling?.color, '#ffffff'),
                transform: 'rotateX(-90deg) translateZ(-100px)',
                opacity: 0.8,
              }}
            >
              {/* 照明 */}
              {selections.lighting && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-yellow-200 shadow-lg shadow-yellow-200/50" />
              )}
            </div>
          </div>
        </div>

        {/* 操作ガイド */}
        <div className="absolute bottom-4 left-4 text-xs text-gray-500 flex items-center gap-2">
          <Move3D className="w-4 h-4" />
          ドラッグで回転
        </div>
      </div>

      {/* 選択中の素材一覧 */}
      <div className="p-4 bg-gray-800 border-t border-gray-700">
        <div className="flex items-center gap-2 mb-3">
          <Palette className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400">適用中の素材</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {selections.flooring && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 rounded-lg">
              <div
                className="w-6 h-6 rounded border border-gray-500"
                style={{ backgroundColor: getSafeColor(selections.flooring.color, '#d4a373') }}
              />
              <span className="text-sm text-white">床: {selections.flooring.name}</span>
            </div>
          )}
          {selections.wall && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 rounded-lg">
              <div
                className="w-6 h-6 rounded border border-gray-500"
                style={{ backgroundColor: getSafeColor(selections.wall.color, '#f5f0e6') }}
              />
              <span className="text-sm text-white">壁: {selections.wall.name}</span>
            </div>
          )}
          {selections.door && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 rounded-lg">
              <div
                className="w-6 h-6 rounded border border-gray-500"
                style={{ backgroundColor: getSafeColor(selections.door.color, '#8b5a2b') }}
              />
              <span className="text-sm text-white">ドア: {selections.door.name}</span>
            </div>
          )}
        </div>
      </div>

      {/* 注意書き */}
      <div className="p-3 bg-gray-800/50 text-center">
        <p className="text-xs text-gray-500">
          <Camera className="w-3 h-3 inline mr-1" />
          ※ これは簡易プレビューです。実際の見え方とは異なる場合があります。
        </p>
      </div>
    </div>
  );
};

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Camera, X, RotateCcw, Maximize2, Minimize2, AlertCircle, Smartphone, Download } from 'lucide-react';
import { Button } from '../common/Button';
import { createLogger } from '../../lib/logger';

const logger = createLogger('ARPreview');

interface ARPreviewProps {
  productImage: string;
  productName: string;
  onClose: () => void;
}

/**
 * AR（拡張現実）プレビューコンポーネント
 *
 * カメラを使用して商品を実際の空間に重ねて表示します。
 * WebRTC APIを使用してカメラにアクセスします。
 *
 * 注意: 完全なARには専用のライブラリ（AR.js、8th Wall等）が必要です。
 * このコンポーネントは簡易的なカメラオーバーレイを提供します。
 */
export const ARPreview: React.FC<ARPreviewProps> = ({
  productImage,
  productName,
  onClose,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [productPosition, setProductPosition] = useState({ x: 50, y: 50 });
  const [productScale, setProductScale] = useState(0.5);
  const [productRotation, setProductRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [cameraFacing, setCameraFacing] = useState<'user' | 'environment'>('environment');

  // カメラを開始
  const startCamera = useCallback(async () => {
    try {
      // 既存のストリームを停止
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: cameraFacing,
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
      });

      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setError(null);
    } catch (err) {
      logger.error('Camera access error:', err);
      if (err instanceof Error) {
        if (err.name === 'NotAllowedError') {
          setError('カメラへのアクセスが拒否されました。ブラウザの設定を確認してください。');
        } else if (err.name === 'NotFoundError') {
          setError('カメラが見つかりません。デバイスにカメラが接続されているか確認してください。');
        } else {
          setError(`カメラエラー: ${err.message}`);
        }
      } else {
        setError('カメラにアクセスできませんでした。');
      }
    }
  }, [cameraFacing, stream]);

  // カメラ切り替え
  const toggleCamera = useCallback(() => {
    setCameraFacing(prev => prev === 'user' ? 'environment' : 'user');
  }, []);

  // クリーンアップ
  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  // カメラ切り替え時に再起動
  useEffect(() => {
    if (stream) {
      startCamera();
    }
  }, [cameraFacing]);

  // ドラッグ操作
  const handleMouseDown = useCallback((_e: React.MouseEvent) => {
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setProductPosition({ x: Math.max(10, Math.min(90, x)), y: Math.max(10, Math.min(90, y)) });
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // タッチ操作（モバイル対応）
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    const y = ((touch.clientY - rect.top) / rect.height) * 100;
    setProductPosition({ x: Math.max(10, Math.min(90, x)), y: Math.max(10, Math.min(90, y)) });
  }, []);

  // スクリーンショット保存
  const captureScreenshot = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // ビデオフレームを描画
    ctx.drawImage(video, 0, 0);

    // 商品画像を描画
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const imgWidth = canvas.width * productScale;
      const imgHeight = (img.height / img.width) * imgWidth;
      const imgX = (canvas.width * productPosition.x) / 100 - imgWidth / 2;
      const imgY = (canvas.height * productPosition.y) / 100 - imgHeight / 2;

      ctx.save();
      ctx.translate(imgX + imgWidth / 2, imgY + imgHeight / 2);
      ctx.rotate((productRotation * Math.PI) / 180);
      ctx.drawImage(img, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);
      ctx.restore();

      // ダウンロード
      const link = document.createElement('a');
      link.download = `AR_${productName}_${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
    img.src = productImage;
  }, [productImage, productName, productScale, productPosition, productRotation]);

  // フルスクリーン切り替え
  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev);
  }, []);

  return (
    <div className={`fixed inset-0 bg-black z-50 flex flex-col ${isFullscreen ? '' : 'p-4'}`}>
      {/* ヘッダー */}
      <div className={`flex items-center justify-between ${isFullscreen ? 'absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent z-10' : 'mb-4'}`}>
        <div className="flex items-center gap-2 text-white">
          <Camera className="w-5 h-5" />
          <span className="font-medium">ARプレビュー</span>
          <span className="text-sm text-gray-300">- {productName}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={toggleFullscreen} className="text-white border-white/50">
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </Button>
          <Button variant="outline" size="sm" onClick={onClose} className="text-white border-white/50">
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* メインエリア */}
      <div className={`flex-1 relative ${isFullscreen ? '' : 'rounded-xl overflow-hidden'}`}>
        {error ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white p-8">
            <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
            <p className="text-center mb-4">{error}</p>
            <Button onClick={startCamera}>
              再試行
            </Button>
            <p className="text-sm text-gray-400 mt-4 text-center">
              ヒント: カメラがない場合は、画像を背景として使用できます。
            </p>
          </div>
        ) : !stream ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white">
            <Camera className="w-20 h-20 text-teal-400 mb-6" />
            <h3 className="text-xl font-bold mb-2">ARプレビューを開始</h3>
            <p className="text-gray-400 mb-6 text-center max-w-md">
              カメラを使って、商品を実際の空間に配置してみましょう。
            </p>
            <Button onClick={startCamera} variant="primary" className="px-8 py-3">
              <Camera className="w-5 h-5 mr-2" />
              カメラを起動
            </Button>
            <p className="text-xs text-gray-500 mt-4">
              ※ ブラウザがカメラへのアクセス許可を求める場合があります
            </p>
          </div>
        ) : (
          <>
            {/* カメラ映像 */}
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* 商品オーバーレイ */}
            <div
              className="absolute inset-0 cursor-move"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
            >
              <div
                className="absolute transition-transform duration-75"
                style={{
                  left: `${productPosition.x}%`,
                  top: `${productPosition.y}%`,
                  transform: `translate(-50%, -50%) scale(${productScale}) rotate(${productRotation}deg)`,
                }}
              >
                <img
                  src={productImage}
                  alt={productName}
                  className="max-w-[300px] max-h-[300px] drop-shadow-2xl pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>

            {/* 操作パネル */}
            <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent ${isFullscreen ? '' : 'rounded-b-xl'}`}>
              <div className="flex flex-wrap items-center justify-center gap-4 text-white">
                {/* サイズ調整 */}
                <div className="flex items-center gap-2">
                  <span className="text-xs">サイズ</span>
                  <input
                    type="range"
                    min="0.2"
                    max="1.5"
                    step="0.1"
                    value={productScale}
                    onChange={(e) => setProductScale(parseFloat(e.target.value))}
                    className="w-24"
                  />
                </div>

                {/* 回転 */}
                <div className="flex items-center gap-2">
                  <span className="text-xs">回転</span>
                  <input
                    type="range"
                    min="-180"
                    max="180"
                    step="5"
                    value={productRotation}
                    onChange={(e) => setProductRotation(parseInt(e.target.value))}
                    className="w-24"
                  />
                </div>

                {/* ボタン類 */}
                <button
                  onClick={() => {
                    setProductScale(0.5);
                    setProductRotation(0);
                    setProductPosition({ x: 50, y: 50 });
                  }}
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30"
                  title="リセット"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>

                <button
                  onClick={toggleCamera}
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30"
                  title="カメラ切替"
                >
                  <Smartphone className="w-5 h-5" />
                </button>

                <button
                  onClick={captureScreenshot}
                  className="p-2 bg-teal-500 rounded-full hover:bg-teal-600"
                  title="スクリーンショット保存"
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>

              <p className="text-center text-xs text-gray-400 mt-2">
                画面をドラッグして商品を移動
              </p>
            </div>
          </>
        )}
      </div>

      {/* 非表示のキャンバス（スクリーンショット用） */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

/**
 * AR対応チェック
 */
export const isARSupported = (): boolean => {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
};

/**
 * ARプレビューボタンコンポーネント
 */
export const ARPreviewButton: React.FC<{
  productImage: string;
  productName: string;
  disabled?: boolean;
}> = ({ productImage, productName, disabled }) => {
  const [showAR, setShowAR] = useState(false);
  const supported = isARSupported();

  if (!supported) {
    return (
      <button
        disabled
        className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed"
        title="お使いのブラウザはARに対応していません"
      >
        <Camera className="w-4 h-4" />
        AR非対応
      </button>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowAR(true)}
        disabled={disabled}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-colors disabled:opacity-50"
      >
        <Camera className="w-4 h-4" />
        ARで見る
      </button>

      {showAR && (
        <ARPreview
          productImage={productImage}
          productName={productName}
          onClose={() => setShowAR(false)}
        />
      )}
    </>
  );
};

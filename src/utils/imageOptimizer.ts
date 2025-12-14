/**
 * 画像最適化ユーティリティ
 * - WebP変換
 * - サイズ最適化
 * - 遅延読み込み用プレースホルダー生成
 */

interface OptimizeOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
}

/**
 * 画像をWebP形式に変換
 */
export const convertToWebP = async (
  file: File,
  options: OptimizeOptions = {}
): Promise<Blob> => {
  const { maxWidth = 1200, maxHeight = 1200, quality = 0.8 } = options;

  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      // メモリリーク防止: オブジェクトURLを解放
      URL.revokeObjectURL(objectUrl);

      // アスペクト比を維持してリサイズ
      let { width, height } = img;
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      if (height > maxHeight) {
        width = (width * maxHeight) / height;
        height = maxHeight;
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Canvas context not available'));
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to convert image'));
          }
        },
        'image/webp',
        quality
      );
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error('Failed to load image'));
    };
    img.src = objectUrl;
  });
};

/**
 * 画像をリサイズ
 */
export const resizeImage = async (
  file: File,
  options: OptimizeOptions = {}
): Promise<Blob> => {
  const { maxWidth = 800, maxHeight = 800, quality = 0.85, format = 'jpeg' } = options;

  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      // メモリリーク防止: オブジェクトURLを解放
      URL.revokeObjectURL(objectUrl);

      let { width, height } = img;

      // アスペクト比を維持
      const ratio = Math.min(maxWidth / width, maxHeight / height);
      if (ratio < 1) {
        width *= ratio;
        height *= ratio;
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Canvas context not available'));
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);

      const mimeType = format === 'webp' ? 'image/webp' : format === 'png' ? 'image/png' : 'image/jpeg';
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to resize image'));
          }
        },
        mimeType,
        quality
      );
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error('Failed to load image'));
    };
    img.src = objectUrl;
  });
};

/**
 * 低品質プレースホルダー(LQIP)を生成
 */
export const generateLQIP = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      // メモリリーク防止: オブジェクトURLを解放
      URL.revokeObjectURL(objectUrl);

      // 超小さいサイズにリサイズ
      const canvas = document.createElement('canvas');
      canvas.width = 20;
      canvas.height = 20;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Canvas context not available'));
        return;
      }

      ctx.drawImage(img, 0, 0, 20, 20);

      // ぼかし効果を追加
      ctx.filter = 'blur(2px)';
      ctx.drawImage(canvas, 0, 0);

      resolve(canvas.toDataURL('image/jpeg', 0.1));
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error('Failed to load image'));
    };
    img.src = objectUrl;
  });
};

/**
 * 画像のドミナントカラーを取得
 */
export const getDominantColor = async (imageUrl: string): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve('#cccccc');
        return;
      }

      ctx.drawImage(img, 0, 0, 1, 1);
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
      resolve(`rgb(${r}, ${g}, ${b})`);
    };
    img.onerror = () => resolve('#cccccc');
    img.src = imageUrl;
  });
};

/**
 * WebP対応チェック
 */
export const isWebPSupported = (): boolean => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

/**
 * 最適な画像URLを取得（WebP対応ブラウザならWebP、そうでなければ元の形式）
 */
export const getOptimalImageUrl = (url: string): string => {
  if (!url) return '';

  // 既にWebPの場合はそのまま返す
  if (url.endsWith('.webp')) return url;

  // WebP対応ブラウザの場合、.webp拡張子を試す
  if (isWebPSupported()) {
    // Supabase Storage URLの場合は変換をスキップ（サーバー側で対応が必要）
    if (url.includes('supabase')) return url;

    // ローカル画像の場合は.webpバージョンを試す
    const webpUrl = url.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    return webpUrl;
  }

  return url;
};

/**
 * 画像のファイルサイズを人間が読める形式に変換
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
};

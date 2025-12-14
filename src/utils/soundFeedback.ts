/**
 * 音声フィードバックユーティリティ
 * - 操作完了時の確認音
 * - エラー時の警告音
 * - ユーザー設定による有効/無効切り替え
 */

// 音声設定をローカルストレージから取得
const getSoundEnabled = (): boolean => {
  try {
    const stored = localStorage.getItem('ic_sound_enabled');
    return stored === null ? true : stored === 'true';
  } catch {
    return true;
  }
};

// AudioContext を使用した音声生成
let audioContext: AudioContext | null = null;

const getAudioContext = (): AudioContext => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  }
  return audioContext;
};

// ビープ音を生成
const playTone = (frequency: number, duration: number, volume: number = 0.3): void => {
  if (!getSoundEnabled()) return;

  try {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(volume, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  } catch {
    // 音声再生に失敗しても処理を続行
  }
};

// 成功音（高めの音）
export const playSuccessSound = (): void => {
  playTone(880, 0.15);
  globalThis.setTimeout(() => playTone(1100, 0.2), 100);
};

// エラー音（低めの音）
export const playErrorSound = (): void => {
  playTone(300, 0.2);
  globalThis.setTimeout(() => playTone(200, 0.3), 150);
};

// 警告音（中間の音）
export const playWarningSound = (): void => {
  playTone(500, 0.15);
  globalThis.setTimeout(() => playTone(500, 0.15), 200);
};

// 追加音（軽い音）
export const playAddSound = (): void => {
  playTone(600, 0.1);
};

// 削除音（下がる音）
export const playRemoveSound = (): void => {
  playTone(400, 0.15);
  globalThis.setTimeout(() => playTone(300, 0.1), 100);
};

// クリック音（非常に短い音）
export const playClickSound = (): void => {
  playTone(700, 0.05, 0.1);
};

// 通知音
export const playNotificationSound = (): void => {
  playTone(800, 0.1);
  globalThis.setTimeout(() => playTone(1000, 0.15), 150);
  globalThis.setTimeout(() => playTone(800, 0.1), 350);
};

// 音声設定の切り替え
export const setSoundEnabled = (enabled: boolean): void => {
  try {
    localStorage.setItem('ic_sound_enabled', String(enabled));
  } catch {
    // ストレージエラーは無視
  }
};

// 音声設定の取得
export const isSoundEnabled = (): boolean => {
  return getSoundEnabled();
};

// バイブレーション（モバイル用）
export const vibrate = (pattern: number | number[] = 50): void => {
  try {
    if ('vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  } catch {
    // バイブレーションに失敗しても処理を続行
  }
};

// 成功時のフィードバック（音+バイブレーション）
export const successFeedback = (): void => {
  playSuccessSound();
  vibrate(50);
};

// エラー時のフィードバック
export const errorFeedback = (): void => {
  playErrorSound();
  vibrate([100, 50, 100]);
};

// 警告時のフィードバック
export const warningFeedback = (): void => {
  playWarningSound();
  vibrate([50, 30, 50]);
};

// アイテム追加時のフィードバック
export const addItemFeedback = (): void => {
  playAddSound();
  vibrate(30);
};

// アイテム削除時のフィードバック
export const removeItemFeedback = (): void => {
  playRemoveSound();
  vibrate(40);
};

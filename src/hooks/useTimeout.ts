import { useEffect, useRef, useCallback, useState } from 'react';

/**
 * 安全なsetTimeoutを提供するカスタムフック
 * コンポーネントのアンマウント時に自動でクリーンアップされる
 *
 * @example
 * const { setTimeout, clearTimeout } = useTimeout();
 *
 * const handleClick = () => {
 *   setTimeout(() => {
 *     setIsVisible(false);
 *   }, 2000);
 * };
 */
export function useTimeout() {
  const timeoutIds = useRef<Set<ReturnType<typeof globalThis.setTimeout>>>(new Set());

  // コンポーネントアンマウント時に全タイマーをクリア
  useEffect(() => {
    const ids = timeoutIds.current;
    return () => {
      ids.forEach((id) => {
        globalThis.clearTimeout(id);
      });
      ids.clear();
    };
  }, []);

  const setSafeTimeout = useCallback((callback: () => void, delay: number) => {
    const id = globalThis.setTimeout(() => {
      callback();
      timeoutIds.current.delete(id);
    }, delay);
    timeoutIds.current.add(id);
    return id;
  }, []);

  const clearSafeTimeout = useCallback((id: ReturnType<typeof globalThis.setTimeout>) => {
    globalThis.clearTimeout(id);
    timeoutIds.current.delete(id);
  }, []);

  return { setTimeout: setSafeTimeout, clearTimeout: clearSafeTimeout };
}

/**
 * 一定時間後に状態をリセットするフック
 * 成功メッセージの表示後に自動で非表示にする等に使用
 *
 * @example
 * const [isSuccess, setIsSuccess] = useAutoReset(false, 2000);
 *
 * const handleSave = () => {
 *   setIsSuccess(true); // 2秒後に自動でfalseに戻る
 * };
 */
export function useAutoReset<T>(initialValue: T, resetDelay: number): [T, (value: T) => void] {
  const [value, setValue] = useState(initialValue);
  const { setTimeout } = useTimeout();

  const setValueWithReset = useCallback((newValue: T) => {
    setValue(newValue);
    if (newValue !== initialValue) {
      setTimeout(() => {
        setValue(initialValue);
      }, resetDelay);
    }
  }, [initialValue, resetDelay, setTimeout]);

  return [value, setValueWithReset];
}

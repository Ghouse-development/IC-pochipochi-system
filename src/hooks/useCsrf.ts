/**
 * CSRF保護用React Hook
 */
import { useEffect, useState, useCallback } from 'react';
import {
  getCsrfToken,
  refreshCsrfToken,
  validateCsrfToken,
  getCsrfInputValue,
} from '../lib/csrf';

/**
 * CSRFトークン管理Hook
 */
export function useCsrf() {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    // コンポーネントマウント時にトークンを取得/生成
    setToken(getCsrfToken());
  }, []);

  const refresh = useCallback(() => {
    const newToken = refreshCsrfToken();
    setToken(newToken);
    return newToken;
  }, []);

  const validate = useCallback((inputToken: string) => {
    return validateCsrfToken(inputToken);
  }, []);

  const getHiddenInput = useCallback(() => {
    return getCsrfInputValue();
  }, []);

  return {
    token,
    refresh,
    validate,
    getHiddenInput,
  };
}

/**
 * CSRFトークン付きフォームsubmitハンドラー
 */
export function useCsrfForm<T>(
  onSubmit: (data: T) => Promise<void> | void
) {
  const { token, refresh, validate } = useCsrf();

  const handleSubmit = useCallback(async (data: T & { _csrf?: string }) => {
    // フォームからCSRFトークンを取得して検証
    const formToken = data._csrf;
    if (formToken && !validate(formToken)) {
      throw new Error('セキュリティトークンが無効です。ページを再読み込みしてください。');
    }

    try {
      await onSubmit(data);
    } finally {
      // 送信後にトークンをリフレッシュ
      refresh();
    }
  }, [onSubmit, validate, refresh]);

  return {
    token,
    handleSubmit,
  };
}

export default useCsrf;

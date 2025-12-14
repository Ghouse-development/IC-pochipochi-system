import { describe, it, expect, beforeEach } from 'vitest';
import {
  generateCsrfToken,
  getCsrfToken,
  validateCsrfToken,
  refreshCsrfToken,
  validateOrigin,
} from './csrf';

describe('CSRF utilities', () => {
  beforeEach(() => {
    // sessionStorageをクリア
    sessionStorage.clear();
  });

  describe('generateCsrfToken', () => {
    it('should generate a 64-character hex token', () => {
      const token = generateCsrfToken();
      expect(token).toHaveLength(64);
      expect(/^[0-9a-f]+$/.test(token)).toBe(true);
    });

    it('should generate unique tokens', () => {
      const tokens = new Set<string>();
      for (let i = 0; i < 100; i++) {
        tokens.add(generateCsrfToken());
      }
      // すべて一意であることを確認
      expect(tokens.size).toBe(100);
    });

    it('should store token in sessionStorage', () => {
      const token = generateCsrfToken();
      expect(sessionStorage.getItem('csrf_token')).toBe(token);
    });
  });

  describe('getCsrfToken', () => {
    it('should return existing token', () => {
      const original = generateCsrfToken();
      const retrieved = getCsrfToken();
      expect(retrieved).toBe(original);
    });

    it('should generate new token if none exists', () => {
      const token = getCsrfToken();
      expect(token).toHaveLength(64);
    });
  });

  describe('validateCsrfToken', () => {
    it('should return true for valid token', () => {
      const token = generateCsrfToken();
      expect(validateCsrfToken(token)).toBe(true);
    });

    it('should return false for invalid token', () => {
      generateCsrfToken();
      expect(validateCsrfToken('wrong-token')).toBe(false);
    });

    it('should return false for empty token', () => {
      generateCsrfToken();
      expect(validateCsrfToken('')).toBe(false);
    });

    it('should return false when no stored token exists', () => {
      expect(validateCsrfToken('any-token')).toBe(false);
    });

    it('should be timing-safe (different length)', () => {
      generateCsrfToken();
      expect(validateCsrfToken('short')).toBe(false);
    });
  });

  describe('refreshCsrfToken', () => {
    it('should generate new token', () => {
      const original = generateCsrfToken();
      const refreshed = refreshCsrfToken();
      expect(refreshed).not.toBe(original);
      expect(refreshed).toHaveLength(64);
    });
  });

  describe('validateOrigin', () => {
    it('should return true for null origin (same-origin)', () => {
      expect(validateOrigin(null)).toBe(true);
    });

    it('should return true for allowed origins', () => {
      expect(validateOrigin('https://ic-pochipochi-system.vercel.app')).toBe(true);
      expect(validateOrigin('http://localhost:5173')).toBe(true);
    });

    it('should return true for localhost in development', () => {
      // 開発環境ではlocalhostを許可
      expect(validateOrigin('http://localhost:8080')).toBe(true);
      expect(validateOrigin('http://127.0.0.1:3000')).toBe(true);
    });
  });
});

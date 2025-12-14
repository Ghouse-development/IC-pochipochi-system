import { describe, it, expect } from 'vitest';
import {
  sanitizeHtml,
  sanitizeText,
  sanitizeUsername,
  sanitizeEmail,
  sanitizePhone,
  sanitizeUrl,
  sanitizeFilename,
  sanitizeNumber,
  sanitizeSearchQuery,
  sanitizeObject,
} from './sanitize';

describe('sanitize utilities', () => {
  describe('sanitizeHtml', () => {
    it('should allow basic formatting tags', () => {
      const input = '<b>bold</b> and <i>italic</i>';
      const result = sanitizeHtml(input);
      expect(result).toContain('<b>bold</b>');
      expect(result).toContain('<i>italic</i>');
    });

    it('should remove script tags', () => {
      const input = '<script>alert("xss")</script>';
      const result = sanitizeHtml(input);
      expect(result).not.toContain('script');
      expect(result).not.toContain('alert');
    });

    it('should remove onclick handlers', () => {
      const input = '<div onclick="alert(1)">text</div>';
      const result = sanitizeHtml(input);
      expect(result).not.toContain('onclick');
    });

    it('should handle empty input', () => {
      expect(sanitizeHtml('')).toBe('');
      expect(sanitizeHtml(null as unknown as string)).toBe('');
      expect(sanitizeHtml(undefined as unknown as string)).toBe('');
    });
  });

  describe('sanitizeText', () => {
    it('should remove all HTML tags', () => {
      const input = '<b>bold</b> and <script>alert(1)</script>';
      const result = sanitizeText(input);
      expect(result).toBe('bold and ');
    });

    it('should handle plain text', () => {
      const input = 'Hello World';
      expect(sanitizeText(input)).toBe('Hello World');
    });
  });

  describe('sanitizeUsername', () => {
    it('should allow alphanumeric and Japanese characters', () => {
      const input = 'ユーザー123';
      expect(sanitizeUsername(input)).toBe('ユーザー123');
    });

    it('should remove script tags', () => {
      const input = '<script>alert(1)</script>ユーザー';
      const result = sanitizeUsername(input);
      expect(result).not.toContain('script');
    });

    it('should remove dangerous characters', () => {
      const input = 'user<>name';
      // DOMPurifyは<>を&lt;&gt;にエンコードし、その後regex処理でltgtが残る
      const result = sanitizeUsername(input);
      expect(result).not.toContain('<');
      expect(result).not.toContain('>');
    });
  });

  describe('sanitizeEmail', () => {
    it('should accept valid email', () => {
      expect(sanitizeEmail('test@example.com')).toBe('test@example.com');
    });

    it('should convert to lowercase', () => {
      expect(sanitizeEmail('Test@Example.COM')).toBe('test@example.com');
    });

    it('should reject invalid email', () => {
      expect(sanitizeEmail('not-an-email')).toBe('');
      expect(sanitizeEmail('missing@domain')).toBe('');
    });

    it('should remove HTML from email', () => {
      const input = '<script>test@example.com</script>';
      expect(sanitizeEmail(input)).toBe('');
    });
  });

  describe('sanitizePhone', () => {
    it('should allow valid phone characters', () => {
      expect(sanitizePhone('090-1234-5678')).toBe('090-1234-5678');
      expect(sanitizePhone('+81-90-1234-5678')).toBe('+81-90-1234-5678');
      expect(sanitizePhone('(03) 1234-5678')).toBe('(03)1234-5678');
    });

    it('should remove invalid characters', () => {
      expect(sanitizePhone('090abcd1234')).toBe('0901234');
    });
  });

  describe('sanitizeUrl', () => {
    it('should allow valid HTTP URLs', () => {
      expect(sanitizeUrl('https://example.com')).toBe('https://example.com/');
      expect(sanitizeUrl('http://localhost:3000')).toBe('http://localhost:3000/');
    });

    it('should block javascript: URLs', () => {
      // eslint-disable-next-line no-script-url
      expect(sanitizeUrl('javascript:alert(1)')).toBe('');
    });

    it('should block data: URLs', () => {
      expect(sanitizeUrl('data:text/html,<script>alert(1)</script>')).toBe('');
    });

    it('should allow relative URLs', () => {
      expect(sanitizeUrl('/path/to/page')).toBe('/path/to/page');
      expect(sanitizeUrl('./relative')).toBe('./relative');
    });

    it('should allow mailto: URLs', () => {
      expect(sanitizeUrl('mailto:test@example.com')).toBe('mailto:test@example.com');
    });
  });

  describe('sanitizeFilename', () => {
    it('should remove path traversal attempts', () => {
      expect(sanitizeFilename('../../../etc/passwd')).toBe('etcpasswd');
      expect(sanitizeFilename('..\\..\\windows\\system32')).toBe('windowssystem32');
    });

    it('should remove dangerous characters', () => {
      expect(sanitizeFilename('file<name>.txt')).toBe('filename.txt');
      expect(sanitizeFilename('file:name.txt')).toBe('filename.txt');
    });

    it('should allow valid filenames', () => {
      expect(sanitizeFilename('my-file_name.pdf')).toBe('my-file_name.pdf');
    });
  });

  describe('sanitizeNumber', () => {
    it('should parse valid numbers', () => {
      expect(sanitizeNumber('123')).toBe(123);
      expect(sanitizeNumber('123.45')).toBe(123.45);
      expect(sanitizeNumber('-123')).toBe(-123);
    });

    it('should handle number input', () => {
      expect(sanitizeNumber(123)).toBe(123);
    });

    it('should return null for invalid input', () => {
      expect(sanitizeNumber('not a number')).toBe(null);
      expect(sanitizeNumber(null as unknown as string)).toBe(null);
      expect(sanitizeNumber(undefined as unknown as string)).toBe(null);
    });

    it('should extract numbers from mixed input', () => {
      expect(sanitizeNumber('¥1,234')).toBe(1234);
    });
  });

  describe('sanitizeSearchQuery', () => {
    it('should allow normal search terms', () => {
      expect(sanitizeSearchQuery('サイディング')).toBe('サイディング');
      expect(sanitizeSearchQuery('product name')).toBe('product name');
    });

    it('should remove dangerous characters', () => {
      // 'と;が除去される
      const result1 = sanitizeSearchQuery("'; DROP TABLE users--");
      expect(result1).not.toContain("'");
      expect(result1).not.toContain(";");
      // <>が除去される
      const result2 = sanitizeSearchQuery('<script>alert(1)</script>');
      expect(result2).not.toContain('<');
      expect(result2).not.toContain('>');
    });

    it('should limit length to 200 characters', () => {
      const longInput = 'a'.repeat(300);
      expect(sanitizeSearchQuery(longInput).length).toBe(200);
    });
  });

  describe('sanitizeObject', () => {
    it('should sanitize all string properties', () => {
      const input = {
        name: '<script>alert(1)</script>',
        count: 123,
        nested: {
          value: '<b>test</b>',
        },
      };
      const result = sanitizeObject(input);
      expect(result.name).not.toContain('script');
      expect(result.count).toBe(123);
      expect((result.nested as { value: string }).value).not.toContain('<b>');
    });
  });
});

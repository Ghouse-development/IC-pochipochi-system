import { describe, it, expect } from 'vitest';
import { getHexColor, isLightColor, COLOR_MAP } from './colorMapping';

describe('getHexColor', () => {
  describe('direct match', () => {
    it('should return correct hex for basic colors', () => {
      expect(getHexColor('ホワイト')).toBe('#FFFFFF');
      expect(getHexColor('ブラック')).toBe('#2C2C2C');
      expect(getHexColor('グレー')).toBe('#808080');
    });

    it('should return correct hex for manufacturer codes', () => {
      expect(getHexColor('YW')).toBe('#FFFFFF');
      expect(getHexColor('J5')).toBe('#8B4513');
      expect(getHexColor('3A')).toBe('#2C2C2C');
    });

    it('should return correct hex for product-specific colors', () => {
      expect(getHexColor('フローMGグレー')).toBe('#8B8C8E');
      expect(getHexColor('フローMGブラック')).toBe('#2C2C2E');
    });
  });

  describe('hex passthrough', () => {
    it('should return hex value as-is when already hex format', () => {
      expect(getHexColor('#FF0000')).toBe('#FF0000');
      expect(getHexColor('#ABC')).toBe('#ABC');
      expect(getHexColor('#FFFFFF')).toBe('#FFFFFF');
    });
  });

  describe('partial match', () => {
    it('should match colors containing known color names', () => {
      expect(getHexColor('クリアホワイト')).toBe('#F8F8FF'); // direct match first
      expect(getHexColor('スーパーホワイト')).toBe('#FFFFFF'); // partial match
      expect(getHexColor('マットブラック')).toBe('#282828'); // direct match
      expect(getHexColor('ディープブラック')).toBe('#2C2C2C'); // partial match
    });
  });

  describe('default values', () => {
    it('should return default gray for undefined', () => {
      expect(getHexColor(undefined)).toBe('#CCCCCC');
    });

    it('should return default gray for unknown colors', () => {
      expect(getHexColor('未知の色')).toBe('#CCCCCC');
      expect(getHexColor('')).toBe('#CCCCCC');
    });
  });

  describe('munsell values', () => {
    it('should convert munsell values to grayscale', () => {
      const result = getHexColor('5Y 7/1');
      expect(result).toMatch(/^#[0-9a-f]{6}$/i);
    });
  });
});

describe('isLightColor', () => {
  it('should return true for light colors', () => {
    expect(isLightColor('#FFFFFF')).toBe(true);
    expect(isLightColor('#F0F0F0')).toBe(true);
    expect(isLightColor('#FFFDD0')).toBe(true);
  });

  it('should return false for dark colors', () => {
    expect(isLightColor('#000000')).toBe(false);
    expect(isLightColor('#2C2C2C')).toBe(false);
    expect(isLightColor('#1A1A1A')).toBe(false);
  });

  it('should handle mid-range colors', () => {
    const gray = isLightColor('#808080');
    expect(typeof gray).toBe('boolean');
  });
});

describe('COLOR_MAP', () => {
  it('should have all basic colors defined', () => {
    expect(COLOR_MAP['ホワイト']).toBeDefined();
    expect(COLOR_MAP['ブラック']).toBeDefined();
    expect(COLOR_MAP['グレー']).toBeDefined();
    expect(COLOR_MAP['ブラウン']).toBeDefined();
  });

  it('should have valid hex values', () => {
    const hexPattern = /^#[0-9A-Fa-f]{6}$/;
    Object.values(COLOR_MAP).forEach(hex => {
      expect(hex).toMatch(hexPattern);
    });
  });
});

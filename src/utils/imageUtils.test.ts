import { describe, it, expect } from 'vitest';
import {
  generateProductPlaceholder,
  generateThumbnailPlaceholder,
  getImageUrl,
  getThumbnailUrl,
} from './imageUtils';

describe('generateProductPlaceholder', () => {
  it('should generate a valid data URI', () => {
    const result = generateProductPlaceholder('Test Product');
    expect(result).toMatch(/^data:image\/svg\+xml;base64,/);
  });

  it('should generate SVG with proper structure', () => {
    const result = generateProductPlaceholder('Test');
    expect(result.startsWith('data:image/svg+xml;base64,')).toBe(true);
    expect(result.length).toBeGreaterThan(100);
  });

  it('should generate different outputs for different products', () => {
    const result1 = generateProductPlaceholder('Product A');
    const result2 = generateProductPlaceholder('Product B');
    expect(result1).not.toBe(result2);
  });

  it('should generate different outputs with color', () => {
    const withColor = generateProductPlaceholder('Test', 'White');
    const withoutColor = generateProductPlaceholder('Test');
    expect(withColor).not.toBe(withoutColor);
  });
});

describe('generateThumbnailPlaceholder', () => {
  it('should generate a valid data URI', () => {
    const result = generateThumbnailPlaceholder('Test');
    expect(result).toMatch(/^data:image\/svg\+xml;base64,/);
  });

  it('should generate proper base64 encoded SVG', () => {
    const result = generateThumbnailPlaceholder('AB');
    expect(result.startsWith('data:image/svg+xml;base64,')).toBe(true);
  });

  it('should include color code in output when provided', () => {
    const result = generateThumbnailPlaceholder('Test', '#FF0000');
    // Decode and check for color
    const base64Part = result.split(',')[1];
    const decoded = decodeURIComponent(escape(atob(base64Part)));
    expect(decoded).toContain('#FF0000');
  });

  it('should use default color when not provided', () => {
    const result = generateThumbnailPlaceholder('Test');
    const base64Part = result.split(',')[1];
    const decoded = decodeURIComponent(escape(atob(base64Part)));
    expect(decoded).toContain('#e2e8f0');
  });
});

describe('getImageUrl', () => {
  it('should return provided URL when valid', () => {
    const url = 'https://example.com/image.jpg';
    expect(getImageUrl(url, 'Product')).toBe(url);
  });

  it('should return placeholder when URL is undefined', () => {
    const result = getImageUrl(undefined, 'Product');
    expect(result).toMatch(/^data:image\/svg\+xml;base64,/);
  });

  it('should return placeholder when URL is empty string', () => {
    const result = getImageUrl('', 'Product');
    expect(result).toMatch(/^data:image\/svg\+xml;base64,/);
  });

  it('should generate placeholder with color when provided', () => {
    const withColor = getImageUrl(undefined, 'Product', 'Blue');
    const withoutColor = getImageUrl(undefined, 'Product');
    expect(withColor).not.toBe(withoutColor);
  });
});

describe('getThumbnailUrl', () => {
  it('should return provided URL when valid', () => {
    const url = 'https://example.com/thumb.jpg';
    expect(getThumbnailUrl(url, 'Product')).toBe(url);
  });

  it('should return placeholder when URL is undefined', () => {
    const result = getThumbnailUrl(undefined, 'Product');
    expect(result).toMatch(/^data:image\/svg\+xml;base64,/);
  });

  it('should return placeholder when URL is empty string', () => {
    const result = getThumbnailUrl('', 'Product');
    expect(result).toMatch(/^data:image\/svg\+xml;base64,/);
  });

  it('should use color code for placeholder background', () => {
    const result = getThumbnailUrl(undefined, 'Product', '#00FF00');
    const base64Part = result.split(',')[1];
    const decoded = decodeURIComponent(escape(atob(base64Part)));
    expect(decoded).toContain('#00FF00');
  });
});

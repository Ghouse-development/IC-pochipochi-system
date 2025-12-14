import { describe, it, expect, beforeEach } from 'vitest';
import { useThemeStore } from './useThemeStore';

describe('useThemeStore', () => {
  beforeEach(() => {
    // ストアをリセット
    useThemeStore.setState({ isDark: false });
    // DOMをクリア
    document.documentElement.classList.remove('dark');
  });

  it('should have default isDark as false', () => {
    const state = useThemeStore.getState();
    expect(state.isDark).toBe(false);
  });

  it('should toggle theme from light to dark', () => {
    const store = useThemeStore.getState();
    store.toggle();

    expect(useThemeStore.getState().isDark).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should toggle theme from dark to light', () => {
    useThemeStore.setState({ isDark: true });
    document.documentElement.classList.add('dark');

    const store = useThemeStore.getState();
    store.toggle();

    expect(useThemeStore.getState().isDark).toBe(false);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should set dark mode directly', () => {
    const store = useThemeStore.getState();
    store.setDark(true);

    expect(useThemeStore.getState().isDark).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should set light mode directly', () => {
    useThemeStore.setState({ isDark: true });
    document.documentElement.classList.add('dark');

    const store = useThemeStore.getState();
    store.setDark(false);

    expect(useThemeStore.getState().isDark).toBe(false);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should toggle multiple times correctly', () => {
    const store = useThemeStore.getState();

    store.toggle();
    expect(useThemeStore.getState().isDark).toBe(true);

    store.toggle();
    expect(useThemeStore.getState().isDark).toBe(false);

    store.toggle();
    expect(useThemeStore.getState().isDark).toBe(true);
  });
});

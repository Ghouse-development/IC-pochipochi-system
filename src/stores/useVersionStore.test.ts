import { describe, it, expect, beforeEach } from 'vitest';
import { useVersionStore } from './useVersionStore';

describe('useVersionStore', () => {
  beforeEach(() => {
    useVersionStore.setState({
      currentVersion: '1.0.0',
      versions: [
        {
          id: '1',
          version: '1.0.0',
          createdAt: new Date(),
          createdBy: 'システム',
          description: '初期バージョン',
          changes: [],
          isActive: true,
        },
      ],
      pendingChanges: [],
    });
  });

  describe('addChange', () => {
    it('should add a pending change', () => {
      const store = useVersionStore.getState();
      store.addChange('外壁材を変更');

      const state = useVersionStore.getState();
      expect(state.pendingChanges).toHaveLength(1);
      expect(state.pendingChanges[0]).toBe('外壁材を変更');
    });

    it('should accumulate multiple changes', () => {
      const store = useVersionStore.getState();
      store.addChange('外壁材を変更');
      store.addChange('屋根材を追加');
      store.addChange('サッシ色を変更');

      const state = useVersionStore.getState();
      expect(state.pendingChanges).toHaveLength(3);
    });
  });

  describe('createNewVersion', () => {
    it('should create a new version', () => {
      const store = useVersionStore.getState();
      store.addChange('外壁材を変更');
      store.createNewVersion('仕様変更', '田中太郎');

      const state = useVersionStore.getState();
      expect(state.currentVersion).toBe('1.0.1');
      expect(state.versions).toHaveLength(2);
    });

    it('should increment version number correctly', () => {
      const store = useVersionStore.getState();
      store.createNewVersion('v1.0.1', '田中');
      store.createNewVersion('v1.0.2', '田中');

      const state = useVersionStore.getState();
      expect(state.currentVersion).toBe('1.0.2');
    });

    it('should include pending changes in new version', () => {
      const store = useVersionStore.getState();
      store.addChange('変更1');
      store.addChange('変更2');
      store.createNewVersion('仕様変更', '田中');

      const state = useVersionStore.getState();
      const newVersion = state.versions.find(v => v.version === '1.0.1');
      expect(newVersion?.changes).toEqual(['変更1', '変更2']);
    });

    it('should clear pending changes after creating version', () => {
      const store = useVersionStore.getState();
      store.addChange('変更');
      store.createNewVersion('仕様変更', '田中');

      const state = useVersionStore.getState();
      expect(state.pendingChanges).toHaveLength(0);
    });

    it('should deactivate previous versions', () => {
      const store = useVersionStore.getState();
      store.createNewVersion('新バージョン', '田中');

      const state = useVersionStore.getState();
      const oldVersion = state.versions.find(v => v.version === '1.0.0');
      const newVersion = state.versions.find(v => v.version === '1.0.1');
      expect(oldVersion?.isActive).toBe(false);
      expect(newVersion?.isActive).toBe(true);
    });
  });

  describe('getCurrentVersion', () => {
    it('should return the active version', () => {
      const store = useVersionStore.getState();
      const current = store.getCurrentVersion();

      expect(current?.version).toBe('1.0.0');
      expect(current?.isActive).toBe(true);
    });

    it('should return new version after creation', () => {
      const store = useVersionStore.getState();
      store.createNewVersion('更新', '田中');
      const current = store.getCurrentVersion();

      expect(current?.version).toBe('1.0.1');
    });
  });

  describe('getVersionHistory', () => {
    it('should return versions sorted by date descending', () => {
      // 明示的に異なる日付を設定してテスト
      const date1 = new Date('2024-01-01');
      const date2 = new Date('2024-02-01');
      const date3 = new Date('2024-03-01');

      useVersionStore.setState({
        currentVersion: '1.0.2',
        versions: [
          { id: '1', version: '1.0.0', createdAt: date1, createdBy: 'システム', description: '初期', changes: [], isActive: false },
          { id: '2', version: '1.0.1', createdAt: date2, createdBy: '田中', description: '更新1', changes: [], isActive: false },
          { id: '3', version: '1.0.2', createdAt: date3, createdBy: '田中', description: '更新2', changes: [], isActive: true },
        ],
        pendingChanges: [],
      });

      const store = useVersionStore.getState();
      const history = store.getVersionHistory();
      expect(history).toHaveLength(3);
      expect(history[0].version).toBe('1.0.2');
    });

    it('should include all versions', () => {
      const store = useVersionStore.getState();
      store.createNewVersion('v1.0.1', '田中');

      const history = store.getVersionHistory();
      expect(history.some(v => v.version === '1.0.0')).toBe(true);
      expect(history.some(v => v.version === '1.0.1')).toBe(true);
    });
  });
});

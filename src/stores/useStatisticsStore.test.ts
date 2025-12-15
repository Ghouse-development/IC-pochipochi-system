import { describe, it, expect, beforeEach } from 'vitest';
import { useStatisticsStore } from './useStatisticsStore';

describe('useStatisticsStore', () => {
  beforeEach(() => {
    useStatisticsStore.setState({
      productStats: [],
      yearlyAdoptions: Array.from({ length: 12 }, (_, i) => ({
        month: i + 1,
        count: 0,
        revenue: 0,
      })),
    });
  });

  describe('recordView', () => {
    it('should record a product view', () => {
      const store = useStatisticsStore.getState();
      store.recordView('p1', 'テスト商品', '外壁');

      const state = useStatisticsStore.getState();
      expect(state.productStats).toHaveLength(1);
      expect(state.productStats[0].viewCount).toBe(1);
    });

    it('should increment view count for existing product', () => {
      const store = useStatisticsStore.getState();
      store.recordView('p1', 'テスト商品', '外壁');
      store.recordView('p1', 'テスト商品', '外壁');

      const state = useStatisticsStore.getState();
      expect(state.productStats).toHaveLength(1);
      expect(state.productStats[0].viewCount).toBe(2);
    });

    it('should set lastViewed timestamp', () => {
      const store = useStatisticsStore.getState();
      store.recordView('p1', 'テスト商品', '外壁');

      const state = useStatisticsStore.getState();
      expect(state.productStats[0].lastViewed).toBeInstanceOf(Date);
    });

    it('should initialize adoption count as 0', () => {
      const store = useStatisticsStore.getState();
      store.recordView('p1', 'テスト商品', '外壁');

      const state = useStatisticsStore.getState();
      expect(state.productStats[0].adoptionCount).toBe(0);
    });
  });

  describe('recordAdoption', () => {
    it('should record a product adoption', () => {
      const store = useStatisticsStore.getState();
      store.recordAdoption('p1', 'テスト商品', '外壁', 10000);

      const state = useStatisticsStore.getState();
      expect(state.productStats).toHaveLength(1);
      expect(state.productStats[0].adoptionCount).toBe(1);
    });

    it('should accumulate total revenue', () => {
      const store = useStatisticsStore.getState();
      store.recordAdoption('p1', 'テスト商品', '外壁', 10000);
      store.recordAdoption('p1', 'テスト商品', '外壁', 15000);

      const state = useStatisticsStore.getState();
      expect(state.productStats[0].totalRevenue).toBe(25000);
    });

    it('should update monthly statistics', () => {
      const currentMonth = new Date().getMonth();
      const store = useStatisticsStore.getState();
      store.recordAdoption('p1', 'テスト商品', '外壁', 10000);

      const state = useStatisticsStore.getState();
      expect(state.yearlyAdoptions[currentMonth].count).toBe(1);
      expect(state.yearlyAdoptions[currentMonth].revenue).toBe(10000);
    });

    it('should set lastAdopted timestamp', () => {
      const store = useStatisticsStore.getState();
      store.recordAdoption('p1', 'テスト商品', '外壁', 10000);

      const state = useStatisticsStore.getState();
      expect(state.productStats[0].lastAdopted).toBeInstanceOf(Date);
    });
  });

  describe('getProductStats', () => {
    it('should return stats sorted by adoption count', () => {
      useStatisticsStore.setState({
        productStats: [
          { productId: 'p1', productName: '商品1', categoryName: '外壁', adoptionCount: 5, viewCount: 10, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
          { productId: 'p2', productName: '商品2', categoryName: '屋根', adoptionCount: 10, viewCount: 15, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
          { productId: 'p3', productName: '商品3', categoryName: '内装', adoptionCount: 3, viewCount: 5, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
        ],
        yearlyAdoptions: [],
      });

      const store = useStatisticsStore.getState();
      const stats = store.getProductStats();

      expect(stats[0].adoptionCount).toBe(10);
      expect(stats[1].adoptionCount).toBe(5);
      expect(stats[2].adoptionCount).toBe(3);
    });
  });

  describe('getTopProducts', () => {
    it('should return limited top products', () => {
      useStatisticsStore.setState({
        productStats: Array.from({ length: 20 }, (_, i) => ({
          productId: `p${i}`,
          productName: `商品${i}`,
          categoryName: '外壁',
          adoptionCount: i,
          viewCount: i * 2,
          lastAdopted: null,
          lastViewed: null,
          totalRevenue: 0,
          totalViewDuration: 0,
          avgViewDuration: 0,
        })),
        yearlyAdoptions: [],
      });

      const store = useStatisticsStore.getState();
      const top = store.getTopProducts(5);

      expect(top).toHaveLength(5);
      expect(top[0].adoptionCount).toBe(19);
    });

    it('should default to 10 products', () => {
      useStatisticsStore.setState({
        productStats: Array.from({ length: 20 }, (_, i) => ({
          productId: `p${i}`,
          productName: `商品${i}`,
          categoryName: '外壁',
          adoptionCount: i,
          viewCount: i * 2,
          lastAdopted: null,
          lastViewed: null,
          totalRevenue: 0,
          totalViewDuration: 0,
          avgViewDuration: 0,
        })),
        yearlyAdoptions: [],
      });

      const store = useStatisticsStore.getState();
      const top = store.getTopProducts();

      expect(top).toHaveLength(10);
    });
  });

  describe('getMonthlyStats', () => {
    it('should return yearly adoption data', () => {
      const store = useStatisticsStore.getState();
      const monthly = store.getMonthlyStats();

      expect(monthly).toHaveLength(12);
      expect(monthly[0].month).toBe(1);
      expect(monthly[11].month).toBe(12);
    });
  });

  describe('getCategoryStats', () => {
    it('should aggregate stats by category', () => {
      useStatisticsStore.setState({
        productStats: [
          { productId: 'p1', productName: '商品1', categoryName: '外壁', adoptionCount: 5, viewCount: 10, lastAdopted: null, lastViewed: null, totalRevenue: 10000, totalViewDuration: 0, avgViewDuration: 0 },
          { productId: 'p2', productName: '商品2', categoryName: '外壁', adoptionCount: 3, viewCount: 8, lastAdopted: null, lastViewed: null, totalRevenue: 8000, totalViewDuration: 0, avgViewDuration: 0 },
          { productId: 'p3', productName: '商品3', categoryName: '屋根', adoptionCount: 2, viewCount: 5, lastAdopted: null, lastViewed: null, totalRevenue: 5000, totalViewDuration: 0, avgViewDuration: 0 },
        ],
        yearlyAdoptions: [],
      });

      const store = useStatisticsStore.getState();
      const categoryStats = store.getCategoryStats();

      const exteriorStats = categoryStats.find(c => c.category === '外壁');
      expect(exteriorStats?.count).toBe(8);
      expect(exteriorStats?.revenue).toBe(18000);
    });
  });

  describe('getAdoptionRates', () => {
    it('should calculate adoption rates', () => {
      useStatisticsStore.setState({
        productStats: [
          { productId: 'p1', productName: '商品1', categoryName: '外壁', adoptionCount: 5, viewCount: 10, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
          { productId: 'p2', productName: '商品2', categoryName: '屋根', adoptionCount: 8, viewCount: 10, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
        ],
        yearlyAdoptions: [],
      });

      const store = useStatisticsStore.getState();
      const rates = store.getAdoptionRates();

      expect(rates.find(r => r.productId === 'p1')?.adoptionRate).toBe(50);
      expect(rates.find(r => r.productId === 'p2')?.adoptionRate).toBe(80);
    });

    it('should sort by adoption rate descending', () => {
      useStatisticsStore.setState({
        productStats: [
          { productId: 'p1', productName: '商品1', categoryName: '外壁', adoptionCount: 2, viewCount: 10, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
          { productId: 'p2', productName: '商品2', categoryName: '屋根', adoptionCount: 8, viewCount: 10, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
        ],
        yearlyAdoptions: [],
      });

      const store = useStatisticsStore.getState();
      const rates = store.getAdoptionRates();

      expect(rates[0].adoptionRate).toBe(80);
    });
  });

  describe('getUnselectedProducts', () => {
    it('should return products with views but no adoptions', () => {
      useStatisticsStore.setState({
        productStats: [
          { productId: 'p1', productName: '商品1', categoryName: '外壁', adoptionCount: 0, viewCount: 10, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
          { productId: 'p2', productName: '商品2', categoryName: '屋根', adoptionCount: 5, viewCount: 10, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
          { productId: 'p3', productName: '商品3', categoryName: '内装', adoptionCount: 0, viewCount: 5, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
        ],
        yearlyAdoptions: [],
      });

      const store = useStatisticsStore.getState();
      const unselected = store.getUnselectedProducts();

      expect(unselected).toHaveLength(2);
      expect(unselected.every(p => p.adoptionCount === 0)).toBe(true);
    });

    it('should sort by view count descending', () => {
      useStatisticsStore.setState({
        productStats: [
          { productId: 'p1', productName: '商品1', categoryName: '外壁', adoptionCount: 0, viewCount: 5, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
          { productId: 'p2', productName: '商品2', categoryName: '屋根', adoptionCount: 0, viewCount: 15, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
        ],
        yearlyAdoptions: [],
      });

      const store = useStatisticsStore.getState();
      const unselected = store.getUnselectedProducts();

      expect(unselected[0].viewCount).toBe(15);
    });
  });

  describe('getLowAdoptionProducts', () => {
    it('should return products below threshold', () => {
      useStatisticsStore.setState({
        productStats: [
          { productId: 'p1', productName: '商品1', categoryName: '外壁', adoptionCount: 1, viewCount: 10, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 }, // 10%
          { productId: 'p2', productName: '商品2', categoryName: '屋根', adoptionCount: 5, viewCount: 10, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 }, // 50%
          { productId: 'p3', productName: '商品3', categoryName: '内装', adoptionCount: 1, viewCount: 5, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 }, // 20%
        ],
        yearlyAdoptions: [],
      });

      const store = useStatisticsStore.getState();
      const low = store.getLowAdoptionProducts(25);

      // p1 (10%) と p3 (20%) が25%未満
      expect(low).toHaveLength(2);
      expect(low[0].productId).toBe('p1'); // 10% が最初
      expect(low[1].productId).toBe('p3'); // 20% が次
    });

    it('should exclude products with less than 3 views', () => {
      useStatisticsStore.setState({
        productStats: [
          { productId: 'p1', productName: '商品1', categoryName: '外壁', adoptionCount: 0, viewCount: 2, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
          { productId: 'p2', productName: '商品2', categoryName: '屋根', adoptionCount: 1, viewCount: 5, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
        ],
        yearlyAdoptions: [],
      });

      const store = useStatisticsStore.getState();
      const low = store.getLowAdoptionProducts();

      expect(low.every(p => p.productId !== 'p1')).toBe(true);
    });
  });

  describe('getCategoryAdoptionRates', () => {
    it('should calculate adoption rates by category', () => {
      useStatisticsStore.setState({
        productStats: [
          { productId: 'p1', productName: '商品1', categoryName: '外壁', adoptionCount: 5, viewCount: 10, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
          { productId: 'p2', productName: '商品2', categoryName: '外壁', adoptionCount: 5, viewCount: 10, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
          { productId: 'p3', productName: '商品3', categoryName: '屋根', adoptionCount: 2, viewCount: 10, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
        ],
        yearlyAdoptions: [],
      });

      const store = useStatisticsStore.getState();
      const rates = store.getCategoryAdoptionRates();

      const exteriorRate = rates.find(r => r.category === '外壁');
      expect(exteriorRate?.viewCount).toBe(20);
      expect(exteriorRate?.adoptionCount).toBe(10);
      expect(exteriorRate?.adoptionRate).toBe(50);
    });

    it('should sort by adoption rate descending', () => {
      useStatisticsStore.setState({
        productStats: [
          { productId: 'p1', productName: '商品1', categoryName: '外壁', adoptionCount: 2, viewCount: 10, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
          { productId: 'p2', productName: '商品2', categoryName: '屋根', adoptionCount: 8, viewCount: 10, lastAdopted: null, lastViewed: null, totalRevenue: 0, totalViewDuration: 0, avgViewDuration: 0 },
        ],
        yearlyAdoptions: [],
      });

      const store = useStatisticsStore.getState();
      const rates = store.getCategoryAdoptionRates();

      expect(rates[0].category).toBe('屋根');
    });
  });
});

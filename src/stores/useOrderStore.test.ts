import { describe, it, expect, beforeEach } from 'vitest';
import { useOrderStore } from './useOrderStore';

describe('useOrderStore', () => {
  beforeEach(() => {
    useOrderStore.setState({
      orders: [],
      currentOrder: null,
    });
  });

  describe('createOrder', () => {
    it('should create a new order', () => {
      const store = useOrderStore.getState();
      store.createOrder('c1', '山田太郎');

      const state = useOrderStore.getState();
      expect(state.orders).toHaveLength(1);
      expect(state.orders[0].customerName).toBe('山田太郎');
    });

    it('should set currentOrder', () => {
      const store = useOrderStore.getState();
      store.createOrder('c1', '山田太郎');

      const state = useOrderStore.getState();
      expect(state.currentOrder).not.toBeNull();
      expect(state.currentOrder?.customerId).toBe('c1');
    });

    it('should set initial status as draft', () => {
      const store = useOrderStore.getState();
      store.createOrder('c1', '山田太郎');

      const state = useOrderStore.getState();
      expect(state.orders[0].status).toBe('draft');
    });

    it('should set initial totalAmount as 0', () => {
      const store = useOrderStore.getState();
      store.createOrder('c1', '山田太郎');

      const state = useOrderStore.getState();
      expect(state.orders[0].totalAmount).toBe(0);
    });
  });

  describe('confirmOrder', () => {
    it('should confirm an order', () => {
      useOrderStore.setState({
        orders: [
          {
            id: 'order-1',
            customerId: 'c1',
            customerName: '山田太郎',
            items: [],
            totalAmount: 100000,
            status: 'draft',
            createdAt: new Date(),
            version: '1.0.0',
          },
        ],
        currentOrder: null,
      });

      const store = useOrderStore.getState();
      store.confirmOrder('order-1');

      const state = useOrderStore.getState();
      expect(state.orders[0].status).toBe('confirmed');
    });

    it('should set confirmedAt timestamp', () => {
      useOrderStore.setState({
        orders: [
          {
            id: 'order-1',
            customerId: 'c1',
            customerName: '山田太郎',
            items: [],
            totalAmount: 100000,
            status: 'draft',
            createdAt: new Date(),
            version: '1.0.0',
          },
        ],
        currentOrder: null,
      });

      const store = useOrderStore.getState();
      store.confirmOrder('order-1');

      const state = useOrderStore.getState();
      expect(state.orders[0].confirmedAt).toBeInstanceOf(Date);
    });

    it('should not affect other orders', () => {
      useOrderStore.setState({
        orders: [
          {
            id: 'order-1',
            customerId: 'c1',
            customerName: '山田太郎',
            items: [],
            totalAmount: 100000,
            status: 'draft',
            createdAt: new Date(),
            version: '1.0.0',
          },
          {
            id: 'order-2',
            customerId: 'c2',
            customerName: '佐藤花子',
            items: [],
            totalAmount: 200000,
            status: 'draft',
            createdAt: new Date(),
            version: '1.0.0',
          },
        ],
        currentOrder: null,
      });

      const store = useOrderStore.getState();
      store.confirmOrder('order-1');

      const state = useOrderStore.getState();
      expect(state.orders.find(o => o.id === 'order-2')?.status).toBe('draft');
    });
  });

  describe('modifyOrder', () => {
    it('should modify an order', () => {
      useOrderStore.setState({
        orders: [
          {
            id: 'order-1',
            customerId: 'c1',
            customerName: '山田太郎',
            items: [],
            totalAmount: 100000,
            status: 'confirmed',
            createdAt: new Date(),
            confirmedAt: new Date(),
            version: '1.0.0',
          },
        ],
        currentOrder: null,
      });

      const store = useOrderStore.getState();
      store.modifyOrder('order-1', '田中修正者');

      const state = useOrderStore.getState();
      expect(state.orders[0].status).toBe('modified');
      expect(state.orders[0].modifiedBy).toBe('田中修正者');
    });

    it('should set modifiedAt timestamp', () => {
      useOrderStore.setState({
        orders: [
          {
            id: 'order-1',
            customerId: 'c1',
            customerName: '山田太郎',
            items: [],
            totalAmount: 100000,
            status: 'confirmed',
            createdAt: new Date(),
            version: '1.0.0',
          },
        ],
        currentOrder: null,
      });

      const store = useOrderStore.getState();
      store.modifyOrder('order-1', '田中');

      const state = useOrderStore.getState();
      expect(state.orders[0].modifiedAt).toBeInstanceOf(Date);
    });
  });

  describe('getStatistics', () => {
    it('should return statistics object', () => {
      const store = useOrderStore.getState();
      const stats = store.getStatistics();

      expect(stats).toHaveProperty('totalConfirmedOrders');
      expect(stats).toHaveProperty('yearlyTotal');
      expect(stats).toHaveProperty('monthlyAverage');
      expect(stats).toHaveProperty('averageOrderValue');
      expect(stats).toHaveProperty('monthlyData');
    });

    it('should count confirmed orders', () => {
      useOrderStore.setState({
        orders: [
          {
            id: 'order-1',
            customerId: 'c1',
            customerName: '山田太郎',
            items: [],
            totalAmount: 100000,
            status: 'confirmed',
            createdAt: new Date(),
            confirmedAt: new Date(),
            version: '1.0.0',
          },
          {
            id: 'order-2',
            customerId: 'c2',
            customerName: '佐藤花子',
            items: [],
            totalAmount: 200000,
            status: 'draft',
            createdAt: new Date(),
            version: '1.0.0',
          },
        ],
        currentOrder: null,
      });

      const store = useOrderStore.getState();
      const stats = store.getStatistics();

      expect(stats.totalConfirmedOrders).toBe(1);
    });

    it('should return 12 months of monthly data', () => {
      const store = useOrderStore.getState();
      const stats = store.getStatistics();

      expect(stats.monthlyData).toHaveLength(12);
      expect(stats.monthlyData[0].month).toBe(1);
      expect(stats.monthlyData[11].month).toBe(12);
    });
  });
});

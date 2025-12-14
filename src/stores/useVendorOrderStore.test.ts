import { describe, it, expect, beforeEach } from 'vitest';
import { useVendorOrderStore, type VendorOrder } from './useVendorOrderStore';

const mockOrderData: Omit<VendorOrder, 'id' | 'createdAt'> = {
  vendorId: 'v1',
  vendorName: 'ニチハ株式会社',
  items: [
    {
      productId: 'p1',
      productName: 'テスト商品',
      manufacturer: 'ニチハ',
      modelNumber: 'NH-001',
      color: 'ホワイト',
      quantity: 10,
      unit: '枚',
      price: 5000,
    },
  ],
  totalAmount: 50000,
  status: 'draft',
  projectName: 'テストプロジェクト',
  customerName: '山田太郎',
  notes: 'テストノート',
};

describe('useVendorOrderStore', () => {
  beforeEach(() => {
    useVendorOrderStore.setState({
      orders: [],
      vendors: [
        { id: 'v1', name: 'ニチハ株式会社', category: '外壁材', contact: '営業部', email: 'sales@nichiha.co.jp', phone: '03-1234-5678', address: '東京都千代田区', isActive: true },
        { id: 'v2', name: 'ケイミュー株式会社', category: '屋根材', contact: '販売課', email: 'order@kmew.co.jp', phone: '06-9876-5432', address: '大阪府大阪市', isActive: true },
      ],
    });
  });

  describe('addOrder', () => {
    it('should add an order and return id', () => {
      const store = useVendorOrderStore.getState();
      const id = store.addOrder(mockOrderData);

      expect(id).toMatch(/^VO-/);
      const state = useVendorOrderStore.getState();
      expect(state.orders).toHaveLength(1);
    });

    it('should set createdAt automatically', () => {
      const store = useVendorOrderStore.getState();
      store.addOrder(mockOrderData);

      const state = useVendorOrderStore.getState();
      expect(state.orders[0].createdAt).toBeDefined();
    });

    it('should preserve order data', () => {
      const store = useVendorOrderStore.getState();
      store.addOrder(mockOrderData);

      const state = useVendorOrderStore.getState();
      expect(state.orders[0].vendorName).toBe('ニチハ株式会社');
      expect(state.orders[0].totalAmount).toBe(50000);
    });
  });

  describe('updateOrderStatus', () => {
    it('should update order status', () => {
      useVendorOrderStore.setState({
        orders: [{ ...mockOrderData, id: 'order-1', createdAt: new Date().toISOString() }],
        vendors: [],
      });

      const store = useVendorOrderStore.getState();
      store.updateOrderStatus('order-1', 'sent');

      const state = useVendorOrderStore.getState();
      expect(state.orders[0].status).toBe('sent');
    });

    it('should set sentAt when status is sent', () => {
      useVendorOrderStore.setState({
        orders: [{ ...mockOrderData, id: 'order-1', createdAt: new Date().toISOString() }],
        vendors: [],
      });

      const store = useVendorOrderStore.getState();
      store.updateOrderStatus('order-1', 'sent');

      const state = useVendorOrderStore.getState();
      expect(state.orders[0].sentAt).toBeDefined();
    });

    it('should set confirmedAt when status is confirmed', () => {
      useVendorOrderStore.setState({
        orders: [{ ...mockOrderData, id: 'order-1', createdAt: new Date().toISOString(), status: 'sent' }],
        vendors: [],
      });

      const store = useVendorOrderStore.getState();
      store.updateOrderStatus('order-1', 'confirmed');

      const state = useVendorOrderStore.getState();
      expect(state.orders[0].confirmedAt).toBeDefined();
    });

    it('should set deliveredAt when status is delivered', () => {
      useVendorOrderStore.setState({
        orders: [{ ...mockOrderData, id: 'order-1', createdAt: new Date().toISOString(), status: 'confirmed' }],
        vendors: [],
      });

      const store = useVendorOrderStore.getState();
      store.updateOrderStatus('order-1', 'delivered');

      const state = useVendorOrderStore.getState();
      expect(state.orders[0].deliveredAt).toBeDefined();
    });
  });

  describe('deleteOrder', () => {
    it('should delete an order', () => {
      useVendorOrderStore.setState({
        orders: [
          { ...mockOrderData, id: 'order-1', createdAt: new Date().toISOString() },
          { ...mockOrderData, id: 'order-2', createdAt: new Date().toISOString() },
        ],
        vendors: [],
      });

      const store = useVendorOrderStore.getState();
      store.deleteOrder('order-1');

      const state = useVendorOrderStore.getState();
      expect(state.orders).toHaveLength(1);
      expect(state.orders[0].id).toBe('order-2');
    });
  });

  describe('getOrdersByStatus', () => {
    it('should filter orders by status', () => {
      useVendorOrderStore.setState({
        orders: [
          { ...mockOrderData, id: 'order-1', createdAt: new Date().toISOString(), status: 'draft' },
          { ...mockOrderData, id: 'order-2', createdAt: new Date().toISOString(), status: 'sent' },
          { ...mockOrderData, id: 'order-3', createdAt: new Date().toISOString(), status: 'draft' },
        ],
        vendors: [],
      });

      const store = useVendorOrderStore.getState();
      const draftOrders = store.getOrdersByStatus('draft');

      expect(draftOrders).toHaveLength(2);
    });
  });

  describe('getOrdersByVendor', () => {
    it('should filter orders by vendor', () => {
      useVendorOrderStore.setState({
        orders: [
          { ...mockOrderData, id: 'order-1', createdAt: new Date().toISOString(), vendorId: 'v1' },
          { ...mockOrderData, id: 'order-2', createdAt: new Date().toISOString(), vendorId: 'v2' },
          { ...mockOrderData, id: 'order-3', createdAt: new Date().toISOString(), vendorId: 'v1' },
        ],
        vendors: [],
      });

      const store = useVendorOrderStore.getState();
      const v1Orders = store.getOrdersByVendor('v1');

      expect(v1Orders).toHaveLength(2);
    });
  });

  describe('addVendor', () => {
    it('should add a new vendor', () => {
      const store = useVendorOrderStore.getState();
      const id = store.addVendor({
        name: '新規業者',
        category: 'テスト',
        contact: '担当者',
        email: 'test@example.com',
        phone: '000-0000-0000',
        address: '東京都',
        isActive: true,
      });

      expect(id).toMatch(/^vendor-/);
      const state = useVendorOrderStore.getState();
      expect(state.vendors.some(v => v.name === '新規業者')).toBe(true);
    });
  });

  describe('updateVendor', () => {
    it('should update vendor information', () => {
      const store = useVendorOrderStore.getState();
      store.updateVendor('v1', { name: '更新後の業者名' });

      const state = useVendorOrderStore.getState();
      expect(state.vendors.find(v => v.id === 'v1')?.name).toBe('更新後の業者名');
    });

    it('should not affect other vendors', () => {
      const store = useVendorOrderStore.getState();
      store.updateVendor('v1', { name: '更新後' });

      const state = useVendorOrderStore.getState();
      expect(state.vendors.find(v => v.id === 'v2')?.name).toBe('ケイミュー株式会社');
    });
  });

  describe('deleteVendor', () => {
    it('should set vendor as inactive', () => {
      const store = useVendorOrderStore.getState();
      store.deleteVendor('v1');

      const state = useVendorOrderStore.getState();
      expect(state.vendors.find(v => v.id === 'v1')?.isActive).toBe(false);
    });
  });

  describe('getActiveVendors', () => {
    it('should return only active vendors', () => {
      useVendorOrderStore.setState({
        orders: [],
        vendors: [
          { id: 'v1', name: '業者1', category: 'カテゴリ', contact: '', email: '', phone: '', address: '', isActive: true },
          { id: 'v2', name: '業者2', category: 'カテゴリ', contact: '', email: '', phone: '', address: '', isActive: false },
          { id: 'v3', name: '業者3', category: 'カテゴリ', contact: '', email: '', phone: '', address: '', isActive: true },
        ],
      });

      const store = useVendorOrderStore.getState();
      const activeVendors = store.getActiveVendors();

      expect(activeVendors).toHaveLength(2);
    });
  });

  describe('getOrderStats', () => {
    it('should return order statistics', () => {
      useVendorOrderStore.setState({
        orders: [
          { ...mockOrderData, id: 'o1', createdAt: new Date().toISOString(), status: 'draft', totalAmount: 10000 },
          { ...mockOrderData, id: 'o2', createdAt: new Date().toISOString(), status: 'sent', totalAmount: 20000 },
          { ...mockOrderData, id: 'o3', createdAt: new Date().toISOString(), status: 'confirmed', totalAmount: 30000 },
          { ...mockOrderData, id: 'o4', createdAt: new Date().toISOString(), status: 'delivered', totalAmount: 40000 },
        ],
        vendors: [],
      });

      const store = useVendorOrderStore.getState();
      const stats = store.getOrderStats();

      expect(stats.total).toBe(4);
      expect(stats.draft).toBe(1);
      expect(stats.sent).toBe(1);
      expect(stats.confirmed).toBe(1);
      expect(stats.delivered).toBe(1);
      expect(stats.totalAmount).toBe(100000);
    });
  });
});

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface VendorOrderItem {
  productId: string;
  productName: string;
  manufacturer: string;
  modelNumber: string;
  color: string;
  quantity: number;
  unit: string;
  price: number;
}

export interface VendorOrder {
  id: string;
  vendorId: string;
  vendorName: string;
  items: VendorOrderItem[];
  totalAmount: number;
  status: 'draft' | 'sent' | 'confirmed' | 'delivered';
  createdAt: string;
  sentAt?: string;
  confirmedAt?: string;
  deliveredAt?: string;
  projectName: string;
  customerName: string;
  notes: string;
}

export interface Vendor {
  id: string;
  name: string;
  category: string;
  contact: string;
  email: string;
  phone: string;
  address: string;
  isActive: boolean;
}

interface VendorOrderStore {
  orders: VendorOrder[];
  vendors: Vendor[];

  // 発注管理
  addOrder: (order: Omit<VendorOrder, 'id' | 'createdAt'>) => string;
  updateOrderStatus: (orderId: string, status: VendorOrder['status']) => void;
  deleteOrder: (orderId: string) => void;
  getOrdersByStatus: (status: VendorOrder['status']) => VendorOrder[];
  getOrdersByVendor: (vendorId: string) => VendorOrder[];

  // 業者管理
  addVendor: (vendor: Omit<Vendor, 'id'>) => string;
  updateVendor: (vendorId: string, vendor: Partial<Vendor>) => void;
  deleteVendor: (vendorId: string) => void;
  getActiveVendors: () => Vendor[];

  // 統計
  getOrderStats: () => {
    total: number;
    draft: number;
    sent: number;
    confirmed: number;
    delivered: number;
    totalAmount: number;
  };
}

// デフォルト業者データ
const DEFAULT_VENDORS: Vendor[] = [
  { id: 'v1', name: 'ニチハ株式会社', category: '外壁材', contact: '営業部', email: 'sales@nichiha.co.jp', phone: '03-1234-5678', address: '東京都千代田区', isActive: true },
  { id: 'v2', name: 'ケイミュー株式会社', category: '屋根材', contact: '販売課', email: 'order@kmew.co.jp', phone: '06-9876-5432', address: '大阪府大阪市', isActive: true },
  { id: 'v3', name: 'LIXIL', category: '住設機器', contact: '受注センター', email: 'order@lixil.co.jp', phone: '0120-123-456', address: '東京都江東区', isActive: true },
  { id: 'v4', name: 'TOTO株式会社', category: '水廻り', contact: '営業本部', email: 'sales@toto.co.jp', phone: '093-951-2052', address: '福岡県北九州市', isActive: true },
  { id: 'v5', name: 'パナソニック', category: '電設・照明', contact: '住建営業', email: 'jutaku@panasonic.jp', phone: '06-6908-1121', address: '大阪府門真市', isActive: true },
  { id: 'v6', name: 'YKK AP', category: 'サッシ・玄関', contact: '営業部', email: 'info@ykkap.co.jp', phone: '03-3864-2200', address: '東京都千代田区', isActive: true },
  { id: 'v7', name: '大建工業', category: '内装材', contact: '販売部', email: 'sales@daiken.co.jp', phone: '06-6205-7112', address: '大阪府大阪市', isActive: true },
  { id: 'v8', name: 'サンゲツ', category: '壁紙・床材', contact: '営業本部', email: 'info@sangetsu.co.jp', phone: '052-564-3311', address: '愛知県名古屋市', isActive: true },
];

export const useVendorOrderStore = create<VendorOrderStore>()(
  persist(
    (set, get) => ({
      orders: [],
      vendors: DEFAULT_VENDORS,

      addOrder: (orderData) => {
        const id = `VO-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const newOrder: VendorOrder = {
          ...orderData,
          id,
          createdAt: new Date().toISOString(),
        };

        set((state) => ({
          orders: [...state.orders, newOrder],
        }));

        return id;
      },

      updateOrderStatus: (orderId, status) => {
        set((state) => ({
          orders: state.orders.map((order) => {
            if (order.id !== orderId) return order;

            const updates: Partial<VendorOrder> = { status };
            const now = new Date().toISOString();

            if (status === 'sent') updates.sentAt = now;
            if (status === 'confirmed') updates.confirmedAt = now;
            if (status === 'delivered') updates.deliveredAt = now;

            return { ...order, ...updates };
          }),
        }));
      },

      deleteOrder: (orderId) => {
        set((state) => ({
          orders: state.orders.filter((order) => order.id !== orderId),
        }));
      },

      getOrdersByStatus: (status) => {
        return get().orders.filter((order) => order.status === status);
      },

      getOrdersByVendor: (vendorId) => {
        return get().orders.filter((order) => order.vendorId === vendorId);
      },

      addVendor: (vendorData) => {
        const id = `vendor-${Date.now()}`;
        const newVendor: Vendor = { ...vendorData, id };

        set((state) => ({
          vendors: [...state.vendors, newVendor],
        }));

        return id;
      },

      updateVendor: (vendorId, updates) => {
        set((state) => ({
          vendors: state.vendors.map((vendor) =>
            vendor.id === vendorId ? { ...vendor, ...updates } : vendor
          ),
        }));
      },

      deleteVendor: (vendorId) => {
        set((state) => ({
          vendors: state.vendors.map((vendor) =>
            vendor.id === vendorId ? { ...vendor, isActive: false } : vendor
          ),
        }));
      },

      getActiveVendors: () => {
        return get().vendors.filter((vendor) => vendor.isActive);
      },

      getOrderStats: () => {
        const orders = get().orders;
        return {
          total: orders.length,
          draft: orders.filter((o) => o.status === 'draft').length,
          sent: orders.filter((o) => o.status === 'sent').length,
          confirmed: orders.filter((o) => o.status === 'confirmed').length,
          delivered: orders.filter((o) => o.status === 'delivered').length,
          totalAmount: orders.reduce((sum, o) => sum + o.totalAmount, 0),
        };
      },
    }),
    {
      name: 'lifex-vendor-orders',
      version: 1,
    }
  )
);

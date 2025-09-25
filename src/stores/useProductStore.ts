import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '../types/product';
import { exteriorProductsComplete } from '../data/exteriorProductsComplete';
import { interiorProductsComplete } from '../data/interiorProductsComplete';
import { waterEquipmentProductsComplete } from '../data/waterEquipmentProductsComplete';

interface ProductStore {
  exteriorProducts: Product[];
  interiorProducts: Product[];
  waterProducts: Product[];
  
  // エクステリア商品管理
  addExteriorProduct: (product: Product) => void;
  updateExteriorProduct: (id: string, product: Partial<Product>) => void;
  deleteExteriorProduct: (id: string) => void;
  
  // インテリア商品管理
  addInteriorProduct: (product: Product) => void;
  updateInteriorProduct: (id: string, product: Partial<Product>) => void;
  deleteInteriorProduct: (id: string) => void;
  
  // 水廻り商品管理
  addWaterProduct: (product: Product) => void;
  updateWaterProduct: (id: string, product: Partial<Product>) => void;
  deleteWaterProduct: (id: string) => void;
  
  // 全商品取得
  getAllProducts: () => Product[];
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      exteriorProducts: exteriorProductsComplete,
      interiorProducts: interiorProductsComplete,
      waterProducts: waterEquipmentProductsComplete,
      
      // エクステリア商品管理
      addExteriorProduct: (product) => set((state) => ({
        exteriorProducts: [...state.exteriorProducts, product]
      })),
      
      updateExteriorProduct: (id, updatedData) => set((state) => ({
        exteriorProducts: state.exteriorProducts.map(p => 
          p.id === id ? { ...p, ...updatedData } : p
        )
      })),
      
      deleteExteriorProduct: (id) => set((state) => ({
        exteriorProducts: state.exteriorProducts.filter(p => p.id !== id)
      })),
      
      // インテリア商品管理
      addInteriorProduct: (product) => set((state) => ({
        interiorProducts: [...state.interiorProducts, product]
      })),
      
      updateInteriorProduct: (id, updatedData) => set((state) => ({
        interiorProducts: state.interiorProducts.map(p => 
          p.id === id ? { ...p, ...updatedData } : p
        )
      })),
      
      deleteInteriorProduct: (id) => set((state) => ({
        interiorProducts: state.interiorProducts.filter(p => p.id !== id)
      })),
      
      // 水廻り商品管理
      addWaterProduct: (product) => set((state) => ({
        waterProducts: [...state.waterProducts, product]
      })),
      
      updateWaterProduct: (id, updatedData) => set((state) => ({
        waterProducts: state.waterProducts.map(p => 
          p.id === id ? { ...p, ...updatedData } : p
        )
      })),
      
      deleteWaterProduct: (id) => set((state) => ({
        waterProducts: state.waterProducts.filter(p => p.id !== id)
      })),
      
      // 全商品取得
      getAllProducts: () => {
        const state = get();
        return [
          ...state.exteriorProducts,
          ...state.interiorProducts,
          ...state.waterProducts
        ];
      }
    }),
    {
      name: 'lifex-products-storage',
      version: 1
    }
  )
);
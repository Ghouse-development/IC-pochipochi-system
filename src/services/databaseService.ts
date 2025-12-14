import { supabase } from '../lib/supabase';
import { createLogger } from '../lib/logger';

const logger = createLogger('DatabaseService');

// ========================================
// Types
// ========================================

export interface Category {
  id: string;
  parent_id: string | null;
  name: string;
  slug: string;
  description?: string;
  display_order: number;
  is_active: boolean;
  icon?: string;
  children?: Category[];
  created_at?: string;
  updated_at?: string;
}

export interface Product {
  id: string;
  category_id: string;
  product_code: string;
  name: string;
  manufacturer?: string;
  model_number?: string;
  description?: string;
  unit: string;
  is_active: boolean;
  is_featured: boolean;
  display_order: number;
  variants?: ProductVariant[];
  category?: Category;
  created_at?: string;
  updated_at?: string;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  variant_code: string;
  color_name: string;
  color_code?: string;
  color_hex?: string;
  material?: string;
  finish?: string;
  size_info?: Record<string, unknown>;
  is_standard: boolean;
  stock_status: string;
  display_order: number;
  pricing?: VariantPricing[];
  images?: VariantImage[];
  created_at?: string;
  updated_at?: string;
}

export interface VariantPricing {
  id: string;
  variant_id: string;
  plan_type: 'LIFE' | 'LIFE_PLUS' | 'HOURS' | 'LACIE' | 'LIFE_X';
  price: number;
  discount_price?: number;
  is_active: boolean;
  effective_date?: string;
}

export interface ProductPlanAvailability {
  id: string;
  product_id: string;
  plan_type: 'LIFE' | 'LIFE_PLUS' | 'HOURS' | 'LACIE' | 'LIFE_X';
  is_available: boolean;
}

export interface PlanMaster {
  id: string;
  plan_code: 'LIFE' | 'LIFE_PLUS' | 'HOURS' | 'LACIE' | 'LIFE_X';
  plan_name: string;
  display_name: string;
  description?: string;
  display_order: number;
  is_active: boolean;
  color_code?: string;
}

export interface VariantImage {
  id: string;
  variant_id: string;
  image_url: string;
  image_path?: string;
  thumbnail_url?: string;
  file_name?: string;
  file_size?: number;
  mime_type?: string;
  alt_text?: string;
  is_primary: boolean;
  display_order: number;
}

export interface ProductAnalytics {
  id: string;
  product_id: string;
  variant_id?: string;
  event_type: 'view' | 'click' | 'add_to_cart' | 'purchase';
  user_id?: string;
  session_id?: string;
  event_data?: Record<string, unknown>;
  page_url?: string;
  user_agent?: string;
  created_at: string;
}

// ========================================
// Category Management
// ========================================

export class CategoryService {
  /**
   * Get all categories with hierarchy
   */
  static async getCategoryTree(): Promise<Category[]> {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('is_active', true)
        .order('display_order');

      if (error) throw error;

      // Build tree structure
      const categoryMap = new Map<string, Category>();
      const roots: Category[] = [];

      // First pass: create all categories
      data?.forEach(cat => {
        categoryMap.set(cat.id, { ...cat, children: [] });
      });

      // Second pass: build tree
      data?.forEach(cat => {
        const category = categoryMap.get(cat.id)!;
        if (cat.parent_id) {
          const parent = categoryMap.get(cat.parent_id);
          if (parent) {
            parent.children = parent.children || [];
            parent.children.push(category);
          }
        } else {
          roots.push(category);
        }
      });

      return roots;
    } catch (error) {
      logger.error('Error fetching category tree:', error);
      return [];
    }
  }

  /**
   * Create a new category
   */
  static async createCategory(category: Partial<Category>): Promise<Category | null> {
    try {
      const { data, error } = await supabase
        .from('categories')
        .insert([category])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      logger.error('Error creating category:', error);
      return null;
    }
  }

  /**
   * Update a category
   */
  static async updateCategory(id: string, updates: Partial<Category>): Promise<Category | null> {
    try {
      const { data, error } = await supabase
        .from('categories')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      logger.error('Error updating category:', error);
      return null;
    }
  }

  /**
   * Delete a category
   */
  static async deleteCategory(id: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', id);

      if (error) throw error;
      return true;
    } catch (error) {
      logger.error('Error deleting category:', error);
      return false;
    }
  }
}

// ========================================
// Product Management
// ========================================

export class ProductService {
  /**
   * Get all products with variants
   */
  static async getProducts(categoryId?: string): Promise<Product[]> {
    try {
      let query = supabase
        .from('products')
        .select(`
          *,
          category:categories(*),
          variants:product_variants(
            *,
            pricing:variant_pricing(*),
            images:variant_images(*)
          )
        `)
        .eq('is_active', true)
        .order('display_order');

      if (categoryId) {
        query = query.eq('category_id', categoryId);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data || [];
    } catch (error) {
      logger.error('Error fetching products:', error);
      return [];
    }
  }

  /**
   * Get a single product with all details
   */
  static async getProduct(id: string): Promise<Product | null> {
    try {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          category:categories(*),
          variants:product_variants(
            *,
            pricing:variant_pricing(*),
            images:variant_images(*)
          )
        `)
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      logger.error('Error fetching product:', error);
      return null;
    }
  }

  /**
   * Create a new product
   */
  static async createProduct(product: Partial<Product>): Promise<Product | null> {
    try {
      const { data, error } = await supabase
        .from('products')
        .insert([product])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      logger.error('Error creating product:', error);
      return null;
    }
  }

  /**
   * Update a product
   */
  static async updateProduct(id: string, updates: Partial<Product>): Promise<Product | null> {
    try {
      const { data, error } = await supabase
        .from('products')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      logger.error('Error updating product:', error);
      return null;
    }
  }

  /**
   * Delete a product
   */
  static async deleteProduct(id: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw error;
      return true;
    } catch (error) {
      logger.error('Error deleting product:', error);
      return false;
    }
  }
}

// ========================================
// Product Variant Management
// ========================================

export class VariantService {
  /**
   * Create a new variant
   */
  static async createVariant(variant: Partial<ProductVariant>): Promise<ProductVariant | null> {
    try {
      const { data, error } = await supabase
        .from('product_variants')
        .insert([variant])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      logger.error('Error creating variant:', error);
      return null;
    }
  }

  /**
   * Update a variant
   */
  static async updateVariant(id: string, updates: Partial<ProductVariant>): Promise<ProductVariant | null> {
    try {
      const { data, error } = await supabase
        .from('product_variants')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      logger.error('Error updating variant:', error);
      return null;
    }
  }

  /**
   * Delete a variant
   */
  static async deleteVariant(id: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('product_variants')
        .delete()
        .eq('id', id);

      if (error) throw error;
      return true;
    } catch (error) {
      logger.error('Error deleting variant:', error);
      return false;
    }
  }

  /**
   * Add pricing to variant
   */
  static async upsertPricing(pricing: Partial<VariantPricing>): Promise<VariantPricing | null> {
    try {
      const { data, error } = await supabase
        .from('variant_pricing')
        .upsert([pricing])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      logger.error('Error upserting pricing:', error);
      return null;
    }
  }

  /**
   * Upload variant image
   */
  static async uploadVariantImage(
    variantId: string,
    file: File,
    isPrimary: boolean = false
  ): Promise<VariantImage | null> {
    try {
      // Upload to storage
      const fileExt = file.name.split('.').pop();
      const fileName = `variant_${variantId}_${Date.now()}.${fileExt}`;
      const filePath = `variants/${variantId}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('product-images')
        .getPublicUrl(filePath);

      // Save to database
      const imageData: Partial<VariantImage> = {
        variant_id: variantId,
        image_url: publicUrl,
        image_path: filePath,
        file_name: file.name,
        file_size: file.size,
        mime_type: file.type,
        is_primary: isPrimary
      };

      const { data, error } = await supabase
        .from('variant_images')
        .insert([imageData])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      logger.error('Error uploading variant image:', error);
      return null;
    }
  }
}

// ========================================
// Analytics Service
// ========================================

export class AnalyticsService {
  /**
   * Track product event
   */
  static async trackEvent(
    eventType: ProductAnalytics['event_type'],
    productId: string,
    variantId?: string,
    eventData?: Record<string, unknown>
  ): Promise<void> {
    try {
      // Get or create session ID
      let sessionId = sessionStorage.getItem('session_id');
      if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        sessionStorage.setItem('session_id', sessionId);
      }

      const analyticsData: Partial<ProductAnalytics> = {
        product_id: productId,
        variant_id: variantId,
        event_type: eventType,
        session_id: sessionId,
        event_data: eventData,
        page_url: window.location.href,
        user_agent: navigator.userAgent
      };

      const { error } = await supabase
        .from('product_analytics')
        .insert([analyticsData]);

      if (error) throw error;
    } catch (error) {
      logger.error('Error tracking event:', error);
    }
  }

  /**
   * Get popular products
   */
  static async getPopularProducts(limit: number = 10): Promise<Record<string, unknown>[]> {
    try {
      const { data, error } = await supabase
        .from('popular_products')
        .select('*')
        .limit(limit);

      if (error) throw error;
      return data || [];
    } catch (error) {
      logger.error('Error fetching popular products:', error);
      return [];
    }
  }

  /**
   * Get analytics summary
   */
  static async getAnalyticsSummary(productId: string, days: number = 30): Promise<Record<string, number> | null> {
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);

      const { data, error } = await supabase
        .from('product_analytics')
        .select('event_type')
        .eq('product_id', productId)
        .gte('created_at', startDate.toISOString());

      if (error) throw error;

      // Aggregate data
      const summary = {
        views: 0,
        clicks: 0,
        cart_adds: 0,
        purchases: 0
      };

      data?.forEach(event => {
        switch (event.event_type) {
          case 'view': summary.views++; break;
          case 'click': summary.clicks++; break;
          case 'add_to_cart': summary.cart_adds++; break;
          case 'purchase': summary.purchases++; break;
        }
      });

      return summary;
    } catch (error) {
      logger.error('Error fetching analytics summary:', error);
      return null;
    }
  }
}
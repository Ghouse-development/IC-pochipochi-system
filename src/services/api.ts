import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { createLogger } from '../lib/logger';
import type {
  Category,
  CategoryWithChildren,
  Item,
  ItemWithDetails,
  ItemVariant,
  ItemPricing,
  Product,
  Project,
  ProjectWithDetails,
  Selection,
  Room,
  PresetTemplate,
  SystemSetting,
  User,
  CreateProjectInput,
  CreateSelectionInput,
  CreateItemInput,
  CreateItemVariantInput,
  CreateItemPricingInput,
} from '../types/database';

const logger = createLogger('API');

// ========================================
// Products (Plans)
// ========================================

export const productsApi = {
  async getAll(): Promise<Product[]> {
    if (!isSupabaseConfigured) {
      logger.debug('Supabase not configured, returning empty products');
      return [];
    }
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('display_order');

    if (error) throw error;
    return data || [];
  },

  async getById(id: string): Promise<Product | null> {
    if (!isSupabaseConfigured) return null;
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },
};

// ========================================
// Categories
// ========================================

export const categoriesApi = {
  async getAll(): Promise<Category[]> {
    if (!isSupabaseConfigured) {
      logger.debug('Supabase not configured, returning empty categories');
      return [];
    }
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('is_active', true)
      .order('display_order');

    if (error) throw error;
    return data || [];
  },

  async getByType(type: string): Promise<Category[]> {
    if (!isSupabaseConfigured) return [];
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('category_type', type)
      .eq('is_active', true)
      .order('display_order');

    if (error) throw error;
    return data || [];
  },

  async getWithChildren(): Promise<CategoryWithChildren[]> {
    if (!isSupabaseConfigured) return [];
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('is_active', true)
      .order('display_order');

    if (error) throw error;

    // Build hierarchy
    const categories = data || [];
    const parentCategories = categories.filter((c) => !c.parent_id);

    return parentCategories.map((parent) => ({
      ...parent,
      children: categories.filter((c) => c.parent_id === parent.id),
    }));
  },

  async getBySlug(slug: string): Promise<Category | null> {
    if (!isSupabaseConfigured) return null;
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return data;
  },

  async create(category: Partial<Category>): Promise<Category> {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('categories')
      .insert(category)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<Category>): Promise<Category> {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('categories')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};

// ========================================
// Items
// ========================================

export const itemsApi = {
  async getAll(): Promise<Item[]> {
    if (!isSupabaseConfigured) {
      logger.debug('Supabase not configured, returning empty items');
      return [];
    }
    const { data, error } = await supabase
      .from('items')
      .select('*')
      .eq('is_active', true)
      .order('display_order');

    if (error) throw error;
    return data || [];
  },

  async getAllWithDetails(): Promise<ItemWithDetails[]> {
    if (!isSupabaseConfigured) {
      logger.debug('Supabase not configured, returning empty items');
      return [];
    }
    const { data, error } = await supabase
      .from('items')
      .select(`
        *,
        category:categories(*),
        unit:units(*),
        variants:item_variants(
          *,
          images:item_variant_images(*)
        ),
        pricing:item_pricing(
          *,
          product:products(*)
        )
      `)
      .eq('is_active', true)
      .order('display_order');

    if (error) throw error;
    return (data as ItemWithDetails[]) || [];
  },

  async getByCategory(categoryId: string): Promise<Item[]> {
    if (!isSupabaseConfigured) return [];
    const { data, error } = await supabase
      .from('items')
      .select('*')
      .eq('category_id', categoryId)
      .eq('is_active', true)
      .order('display_order');

    if (error) throw error;
    return data || [];
  },

  async getWithDetails(itemId: string): Promise<ItemWithDetails | null> {
    if (!isSupabaseConfigured) return null;
    const { data, error } = await supabase
      .from('items')
      .select(`
        *,
        category:categories(*),
        unit:units(*),
        variants:item_variants(
          *,
          images:item_variant_images(*)
        ),
        pricing:item_pricing(
          *,
          product:products(*)
        )
      `)
      .eq('id', itemId)
      .single();

    if (error) throw error;
    return data as ItemWithDetails;
  },

  async getByCategoryWithDetails(categoryId: string): Promise<ItemWithDetails[]> {
    if (!isSupabaseConfigured) return [];
    const { data, error } = await supabase
      .from('items')
      .select(`
        *,
        category:categories(*),
        unit:units(*),
        variants:item_variants(
          *,
          images:item_variant_images(*)
        ),
        pricing:item_pricing(
          *,
          product:products(*)
        )
      `)
      .eq('category_id', categoryId)
      .eq('is_active', true)
      .order('display_order');

    if (error) throw error;
    return (data as ItemWithDetails[]) || [];
  },

  async getByProductAndCategory(productId: string, categoryId: string): Promise<ItemWithDetails[]> {
    if (!isSupabaseConfigured) return [];
    const { data, error } = await supabase
      .from('items')
      .select(`
        *,
        category:categories(*),
        unit:units(*),
        variants:item_variants(
          *,
          images:item_variant_images(*)
        ),
        pricing:item_pricing!inner(
          *,
          product:products(*)
        )
      `)
      .eq('category_id', categoryId)
      .eq('is_active', true)
      .eq('pricing.product_id', productId)
      .eq('pricing.is_available', true)
      .order('display_order');

    if (error) throw error;
    return (data as ItemWithDetails[]) || [];
  },

  async create(item: CreateItemInput): Promise<Item> {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('items')
      .insert(item)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<Item>): Promise<Item> {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('items')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    if (!isSupabaseConfigured) return;
    const { error } = await supabase
      .from('items')
      .update({ is_active: false, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (error) throw error;
  },

  async search(query: string): Promise<Item[]> {
    const { data, error } = await supabase
      .from('items')
      .select('*')
      .eq('is_active', true)
      .or(`name.ilike.%${query}%,item_code.ilike.%${query}%,manufacturer.ilike.%${query}%`)
      .order('display_order')
      .limit(50);

    if (error) throw error;
    return data || [];
  },
};

// ========================================
// Item Variants
// ========================================

export const itemVariantsApi = {
  async getByItem(itemId: string): Promise<ItemVariant[]> {
    const { data, error } = await supabase
      .from('item_variants')
      .select(`
        *,
        images:item_variant_images(*)
      `)
      .eq('item_id', itemId)
      .eq('is_active', true)
      .order('display_order');

    if (error) throw error;
    return data || [];
  },

  async create(variant: CreateItemVariantInput): Promise<ItemVariant> {
    const { data, error } = await supabase
      .from('item_variants')
      .insert(variant)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<ItemVariant>): Promise<ItemVariant> {
    const { data, error } = await supabase
      .from('item_variants')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};

// ========================================
// Item Pricing
// ========================================

export const itemPricingApi = {
  async getByItem(itemId: string): Promise<ItemPricing[]> {
    const { data, error } = await supabase
      .from('item_pricing')
      .select(`
        *,
        product:products(*)
      `)
      .eq('item_id', itemId);

    if (error) throw error;
    return data || [];
  },

  async create(pricing: CreateItemPricingInput): Promise<ItemPricing> {
    const { data, error } = await supabase
      .from('item_pricing')
      .insert(pricing)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<ItemPricing>): Promise<ItemPricing> {
    const { data, error } = await supabase
      .from('item_pricing')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async upsert(pricing: CreateItemPricingInput): Promise<ItemPricing> {
    const { data, error } = await supabase
      .from('item_pricing')
      .upsert(pricing, {
        onConflict: 'item_id,variant_id,product_id',
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};

// ========================================
// Projects
// ========================================

export const projectsApi = {
  async getAll(): Promise<Project[]> {
    if (!isSupabaseConfigured) {
      logger.debug('Supabase not configured, returning empty projects');
      return [];
    }
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        product:products(*)
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getById(id: string): Promise<Project | null> {
    if (!isSupabaseConfigured) return null;
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        product:products(*)
      `)
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  async getWithDetails(id: string): Promise<ProjectWithDetails | null> {
    if (!isSupabaseConfigured) return null;
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        product:products(*),
        coordinator:users!projects_assigned_coordinator_id_fkey(*),
        customer:users!projects_customer_id_fkey(*),
        selections(
          *,
          item:items(*),
          variant:item_variants(*),
          category:categories(*)
        )
      `)
      .eq('id', id)
      .single();

    if (error) throw error;
    return data as ProjectWithDetails;
  },

  async create(project: CreateProjectInput): Promise<Project> {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase not configured');
    }
    // Generate project code
    const projectCode = `PRJ-${Date.now().toString(36).toUpperCase()}`;

    const { data, error } = await supabase
      .from('projects')
      .insert({
        ...project,
        project_code: projectCode,
        status: 'draft',
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<Project>): Promise<Project> {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('projects')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async acquireLock(projectId: string, userId: string): Promise<boolean> {
    if (!isSupabaseConfigured) return false;
    const { data, error } = await supabase.rpc('acquire_edit_lock', {
      p_project_id: projectId,
      p_user_id: userId,
    });

    if (error) {
      logger.error('Error acquiring lock:', error);
      return false;
    }

    return data;
  },

  async releaseLock(projectId: string, userId: string): Promise<boolean> {
    if (!isSupabaseConfigured) return false;
    const { data, error } = await supabase.rpc('release_edit_lock', {
      p_project_id: projectId,
      p_user_id: userId,
    });

    if (error) {
      logger.error('Error releasing lock:', error);
      return false;
    }

    return data;
  },

  async forceReleaseLock(projectId: string): Promise<boolean> {
    if (!isSupabaseConfigured) return false;
    const { data, error } = await supabase.rpc('force_release_edit_lock', {
      p_project_id: projectId,
    });

    if (error) {
      logger.error('Error force releasing lock:', error);
      return false;
    }

    return data;
  },
};

// ========================================
// Selections
// ========================================

export const selectionsApi = {
  async getByProject(projectId: string): Promise<Selection[]> {
    if (!isSupabaseConfigured) {
      logger.debug('Supabase not configured, returning empty selections');
      return [];
    }
    const { data, error } = await supabase
      .from('selections')
      .select(`
        *,
        item:items(*),
        variant:item_variants(*),
        category:categories(*)
      `)
      .eq('project_id', projectId)
      .order('created_at');

    if (error) throw error;
    return data || [];
  },

  async create(selection: CreateSelectionInput): Promise<Selection> {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase not configured');
    }
    // Get pricing info - try variant-specific first, then item-level
    let unitPrice = 0;

    // First, try to get variant-specific pricing
    if (selection.variant_id) {
      const { data: variantPricing } = await supabase
        .from('item_pricing')
        .select('price')
        .eq('item_id', selection.item_id)
        .eq('variant_id', selection.variant_id)
        .single();

      if (variantPricing?.price !== undefined) {
        unitPrice = variantPricing.price;
      }
    }

    // If no variant pricing, get item-level pricing
    if (unitPrice === 0) {
      const { data: itemPricing } = await supabase
        .from('item_pricing')
        .select('price')
        .eq('item_id', selection.item_id)
        .is('variant_id', null)
        .single();

      if (itemPricing?.price !== undefined) {
        unitPrice = itemPricing.price;
      }
    }

    // Log warning if no pricing found (but continue with 0)
    if (unitPrice === 0) {
      logger.warn(`No pricing found for item_id: ${selection.item_id}, variant_id: ${selection.variant_id || 'null'}`);
    }

    const totalPrice = unitPrice * selection.quantity;

    const { data, error } = await supabase
      .from('selections')
      .insert({
        ...selection,
        unit_price: unitPrice,
        total_price: totalPrice,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<Selection>): Promise<Selection> {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('selections')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    if (!isSupabaseConfigured) return;
    const { error } = await supabase.from('selections').delete().eq('id', id);

    if (error) throw error;
  },

  async undoLast(projectId: string): Promise<Selection | null> {
    if (!isSupabaseConfigured) return null;
    // Get last history entry
    const { data: history } = await supabase
      .from('selection_history')
      .select('*')
      .eq('project_id', projectId)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (!history || !history.previous_data) return null;

    // Restore previous state
    if (history.action === 'INSERT') {
      await supabase.from('selections').delete().eq('id', history.selection_id);
      return null;
    } else if (history.action === 'DELETE') {
      const { data } = await supabase
        .from('selections')
        .insert(history.previous_data)
        .select()
        .single();
      return data;
    } else {
      const { data } = await supabase
        .from('selections')
        .update(history.previous_data)
        .eq('id', history.selection_id)
        .select()
        .single();
      return data;
    }
  },
};

// ========================================
// Rooms
// ========================================

export const roomsApi = {
  async getAll(): Promise<Room[]> {
    if (!isSupabaseConfigured) {
      logger.debug('Supabase not configured, returning empty rooms');
      return [];
    }
    const { data, error } = await supabase
      .from('rooms')
      .select('*')
      .eq('is_active', true)
      .order('display_order');

    if (error) throw error;
    return data || [];
  },
};

// ========================================
// Preset Templates
// ========================================

export const presetsApi = {
  async getAll(): Promise<PresetTemplate[]> {
    if (!isSupabaseConfigured) {
      logger.debug('Supabase not configured, returning empty presets');
      return [];
    }
    const { data, error } = await supabase
      .from('preset_templates')
      .select(`
        *,
        product:products(*)
      `)
      .eq('is_active', true)
      .order('display_order');

    if (error) throw error;
    return data || [];
  },

  async getByProduct(productId: string): Promise<PresetTemplate[]> {
    if (!isSupabaseConfigured) return [];
    const { data, error } = await supabase
      .from('preset_templates')
      .select(`
        *,
        product:products(*)
      `)
      .eq('product_id', productId)
      .eq('is_active', true)
      .order('display_order');

    if (error) throw error;
    return data || [];
  },

  async create(preset: Partial<PresetTemplate>): Promise<PresetTemplate> {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('preset_templates')
      .insert(preset)
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};

// ========================================
// System Settings
// ========================================

export const settingsApi = {
  async getAll(): Promise<SystemSetting[]> {
    if (!isSupabaseConfigured) {
      logger.debug('Supabase not configured, returning empty settings');
      return [];
    }
    const { data, error } = await supabase
      .from('system_settings')
      .select('*')
      .order('setting_key');

    if (error) throw error;
    return data || [];
  },

  async getByKey(key: string): Promise<SystemSetting | null> {
    if (!isSupabaseConfigured) return null;
    const { data, error } = await supabase
      .from('system_settings')
      .select('*')
      .eq('setting_key', key)
      .single();

    if (error) throw error;
    return data;
  },

  async update(key: string, value: Record<string, unknown>): Promise<SystemSetting> {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('system_settings')
      .update({
        setting_value: value,
        updated_at: new Date().toISOString(),
      })
      .eq('setting_key', key)
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};

// ========================================
// Users
// ========================================

export const usersApi = {
  async getAll(): Promise<User[]> {
    if (!isSupabaseConfigured) {
      logger.debug('Supabase not configured, returning empty users');
      return [];
    }
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getById(id: string): Promise<User | null> {
    if (!isSupabaseConfigured) return null;
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  async getCoordinators(): Promise<User[]> {
    if (!isSupabaseConfigured) return [];
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .in('role', ['admin', 'coordinator'])
      .eq('is_active', true)
      .order('full_name');

    if (error) throw error;
    return data || [];
  },

  async update(id: string, updates: Partial<User>): Promise<User> {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('users')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};

// ========================================
// Units
// ========================================

export const unitsApi = {
  async getAll(): Promise<{ id: string; code: string; name: string; symbol: string }[]> {
    if (!isSupabaseConfigured) {
      logger.debug('Supabase not configured, returning empty units');
      return [];
    }
    const { data, error } = await supabase
      .from('units')
      .select('*')
      .order('display_order');

    if (error) throw error;
    return data || [];
  },
};

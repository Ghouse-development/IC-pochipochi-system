// ========================================
// Supabase Database Types
// ========================================

// ENUM Types
export type UserRole = 'super_admin' | 'admin' | 'coordinator' | 'user';
export type OrganizationType = 'headquarters' | 'franchise' | 'partner';
export type CategoryType = 'exterior' | 'interior' | 'equipment' | 'other';
export type UnitType = 'sqm' | 'piece' | 'location' | 'set' | 'package' | 'sheet' | 'meter' | 'unit' | 'pair';
export type ProjectStatus = 'draft' | 'active' | 'confirmed' | 'completed' | 'cancelled';
export type InteriorPartType = 'floor' | 'wall_cross' | 'ceiling_cross' | 'baseboard' | 'accent_cross' | 'other';
export type NotificationType = 'project_created' | 'selection_confirmed' | 'item_discontinued' | 'system';

// ========================================
// Table Types
// ========================================

// ========================================
// Organization Types (Multi-tenant)
// ========================================

export interface Organization {
  id: string;
  name: string;
  name_kana: string | null;
  code: string;
  type: OrganizationType;
  parent_id: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  postal_code: string | null;
  prefecture: string | null;
  city: string | null;
  logo_url: string | null;
  primary_color: string;
  is_active: boolean;
  can_customize_pricing: boolean;
  can_add_products: boolean;
  settings: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  // Joined data
  parent?: Organization;
  children?: Organization[];
}

export interface OrganizationMember {
  id: string;
  organization_id: string;
  user_id: string;
  role: string;
  is_primary: boolean;
  joined_at: string;
  // Joined data
  organization?: Organization;
  user?: User;
}

export interface OrganizationItemSetting {
  id: string;
  organization_id: string;
  item_id: string;
  is_visible: boolean;
  custom_price: number | null;
  custom_note: string | null;
  display_order: number | null;
  created_at: string;
  updated_at: string;
}

// ========================================
// User Types
// ========================================

export interface User {
  id: string;
  auth_id: string | null;
  email: string;
  full_name: string;
  full_name_kana: string | null;
  role: UserRole;
  phone: string | null;
  company_name: string | null;
  organization_id: string | null;
  is_super_admin: boolean;
  is_active: boolean;
  last_login_at: string | null;
  created_at: string;
  updated_at: string;
  // Joined data
  organization?: Organization;
}

export interface SystemSetting {
  id: string;
  setting_key: string;
  setting_value: Record<string, unknown>;
  description: string | null;
  is_editable: boolean;
  updated_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  description: string | null;
  color_code: string | null;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  parent_id: string | null;
  category_type: CategoryType;
  name: string;
  slug: string;
  description: string | null;
  display_order: number;
  is_required: boolean;
  is_active: boolean;
  icon: string | null;
  created_at: string;
  updated_at: string;
  // Joined data
  children?: Category[];
  parent?: Category;
}

export interface Unit {
  id: string;
  code: UnitType;
  name: string;
  symbol: string;
  display_order: number;
}

export interface Item {
  id: string;
  category_id: string | null;
  item_code: string;
  name: string;
  category_name: string | null;
  model_number: string | null;
  manufacturer: string | null;
  series: string | null; // シリーズ名（水回り設備用）
  note: string | null;
  catalog_url: string | null; // メーカーカタログ・商品ページのURL
  unit_id: string | null;
  formula: string | null;
  is_hit: boolean;
  is_active: boolean;
  is_discontinued: boolean;
  discontinue_date: string | null;
  discontinue_note: string | null;
  display_order: number;
  material_type: string | null; // 素材タイプ（外壁: 窯業系/金属/塗り壁、床材: 突板/シート等）
  tags: string[] | null; // タグ（複数カテゴリ所属用: porch-tile, porch-grout等）
  is_recommended: boolean | null; // おすすめフラグ
  created_at: string;
  updated_at: string;
  // Joined data
  category?: Category;
  unit?: Unit;
  variants?: ItemVariant[];
  pricing?: ItemPricing[];
}

export interface ItemVariant {
  id: string;
  item_id: string;
  variant_code: string;
  color_name: string;
  color_code: string | null;
  description: string | null;
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
  // Joined data
  images?: ItemVariantImage[];
}

export interface ItemVariantImage {
  id: string;
  variant_id: string;
  image_url: string;
  image_path: string | null;
  thumbnail_url: string | null;
  file_name: string | null;
  file_size: number | null;
  mime_type: string | null;
  alt_text: string | null;
  is_primary: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface ItemPricing {
  id: string;
  item_id: string;
  variant_id: string | null;
  product_id: string;
  is_available: boolean;
  is_standard: boolean;
  price: number;
  installation_cost: number;
  effective_date: string;
  created_at: string;
  updated_at: string;
  // Joined data
  product?: Product;
}

export interface Room {
  id: string;
  name: string;
  floor: number;
  room_type: string | null;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface PresetTemplate {
  id: string;
  name: string;
  description: string | null;
  thumbnail_url: string | null;
  product_id: string | null;
  selections: unknown[];
  is_active: boolean;
  display_order: number;
  created_by: string | null;
  created_at: string;
  updated_at: string;
  // Joined data
  product?: Product;
}

export interface Project {
  id: string;
  project_code: string;
  name: string;
  product_id: string | null;
  status: ProjectStatus;
  customer_name: string | null;
  construction_name: string | null;
  construction_address: string | null;
  region_category: string | null;
  fire_resistance: string | null;
  construction_method: string | null;
  floors: number;
  floor_area: number | null;
  ceiling_height: number | null;
  structure: string | null;
  building_standard: string | null;
  rooms: unknown;
  assigned_coordinator_id: string | null;
  customer_id: string | null;
  note: string | null;
  confirmed_at: string | null;
  total_price: number;
  edit_locked_by: string | null;
  edit_locked_at: string | null;
  created_by: string | null;
  created_at: string;
  updated_at: string;
  // Joined data
  product?: Product;
  coordinator?: User;
  customer?: User;
}

export interface Selection {
  id: string;
  project_id: string;
  category_id: string;
  item_id: string;
  variant_id: string | null;
  quantity: number;
  unit_price: number;
  total_price: number;
  note: string | null;
  selected_by: string | null;
  created_at: string;
  updated_at: string;
  // Joined data
  category?: Category;
  item?: Item;
  variant?: ItemVariant;
}

export interface SelectionHistory {
  id: string;
  project_id: string;
  selection_id: string;
  action: string;
  previous_data: unknown | null;
  new_data: unknown | null;
  changed_by: string | null;
  created_at: string;
}

export interface RoomSelection {
  id: string;
  project_id: string;
  room_id: string;
  interior_part: InteriorPartType;
  item_id: string;
  variant_id: string | null;
  quantity: number;
  unit_price: number;
  total_price: number;
  is_accent: boolean;
  note: string | null;
  created_at: string;
  updated_at: string;
  // Joined data
  room?: Room;
  item?: Item;
  variant?: ItemVariant;
}

export interface Notification {
  id: string;
  user_id: string;
  type: NotificationType;
  title: string;
  message: string | null;
  data: unknown | null;
  is_read: boolean;
  created_at: string;
}

export interface AuditLog {
  id: string;
  table_name: string;
  record_id: string;
  action: string;
  old_data: unknown | null;
  new_data: unknown | null;
  changed_by: string | null;
  ip_address: string | null;
  user_agent: string | null;
  created_at: string;
}

// ========================================
// API Response Types
// ========================================

export interface ItemWithDetails extends Omit<Item, 'unit'> {
  category: Category;
  unit: Unit | null;
  variants: (ItemVariant & { images: ItemVariantImage[] })[];
  pricing: (ItemPricing & { product: Product })[];
}

export interface CategoryWithChildren extends Category {
  children: Category[];
  items?: Item[];
}

export interface ProjectWithDetails extends Omit<Project, 'product' | 'coordinator' | 'customer'> {
  product: Product | null;
  coordinator: User | null;
  customer: User | null;
  selections: (Selection & {
    item: Item;
    variant: ItemVariant | null;
    category: Category;
  })[];
}

// ========================================
// Form Types
// ========================================

export interface CreateProjectInput {
  name: string;
  product_id: string;
  customer_name?: string;
  construction_name?: string;
  construction_address?: string;
  floors?: number;
  floor_area?: number;
}

export interface CreateSelectionInput {
  project_id: string;
  category_id: string;
  item_id: string;
  variant_id?: string;
  quantity: number;
}

export interface CreateItemInput {
  category_id: string;
  item_code: string;
  name: string;
  manufacturer?: string;
  model_number?: string;
  note?: string;
  catalog_url?: string;
  unit_id?: string;
  is_hit?: boolean;
}

export interface CreateItemVariantInput {
  item_id: string;
  variant_code: string;
  color_name: string;
  color_code?: string;
}

export interface CreateItemPricingInput {
  item_id: string;
  variant_id?: string;
  product_id: string;
  price: number;
  installation_cost?: number;
  is_standard?: boolean;
  is_available?: boolean;
}

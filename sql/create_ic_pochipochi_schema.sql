-- ========================================
-- IC-pochipochi-system 完全データベーススキーマ
-- ========================================
-- 作成日: 2025年12月9日
-- 目的: Gハウス規格住宅のアイテム選択・見積システム

-- 必要な拡張
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ========================================
-- 1. ユーザー管理テーブル
-- ========================================

-- ユーザーロール定義
CREATE TYPE user_role AS ENUM ('admin', 'coordinator', 'user');

-- ユーザーテーブル（社内ユーザー・お客様共通）
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  full_name VARCHAR(255) NOT NULL,
  full_name_kana VARCHAR(255),
  role user_role NOT NULL DEFAULT 'user',
  phone VARCHAR(50),
  company_name VARCHAR(255),
  is_active BOOLEAN DEFAULT true,
  last_login_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_users_is_active ON users(is_active);

-- ========================================
-- 2. 商品（プラン）マスターテーブル
-- ========================================
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 初期商品データ
INSERT INTO products (code, name, description, display_order) VALUES
  ('LIFE', 'LIFE', 'LIFEプラン', 1),
  ('LIFE_PLUS', 'LIFE+', 'LIFE+プラン', 2),
  ('HOURS', 'HOURS', 'HOURSプラン', 3),
  ('LACIE', 'LACIE', 'LACIEプラン', 4)
ON CONFLICT (code) DO NOTHING;

-- ========================================
-- 3. カテゴリテーブル（階層構造対応）
-- ========================================

-- カテゴリタイプ
CREATE TYPE category_type AS ENUM ('exterior', 'interior', 'equipment', 'other');

CREATE TABLE IF NOT EXISTS categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  category_type category_type NOT NULL,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_required BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  icon VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_categories_parent_id ON categories(parent_id);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_categories_category_type ON categories(category_type);
CREATE INDEX IF NOT EXISTS idx_categories_display_order ON categories(display_order);

-- ========================================
-- 4. 単位マスターテーブル
-- ========================================
CREATE TYPE unit_type AS ENUM ('sqm', 'piece', 'location', 'set', 'package', 'sheet', 'meter', 'unit', 'pair');

CREATE TABLE IF NOT EXISTS units (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code unit_type UNIQUE NOT NULL,
  name VARCHAR(50) NOT NULL,
  symbol VARCHAR(20) NOT NULL,
  display_order INTEGER DEFAULT 0
);

-- 初期単位データ
INSERT INTO units (code, name, symbol, display_order) VALUES
  ('sqm', '平米', '㎡', 1),
  ('piece', '個', '個', 2),
  ('location', '箇所', '箇所', 3),
  ('set', 'セット', 'セット', 4),
  ('package', '一式', '一式', 5),
  ('sheet', '枚', '枚', 6),
  ('meter', 'メートル', 'm', 7),
  ('unit', '本', '本', 8),
  ('pair', '組', '組', 9)
ON CONFLICT (code) DO NOTHING;

-- ========================================
-- 5. アイテムマスターテーブル
-- ========================================
CREATE TABLE IF NOT EXISTS items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  item_code VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(500) NOT NULL,
  category_name VARCHAR(255),
  model_number VARCHAR(255),
  manufacturer VARCHAR(255),
  note TEXT,
  unit_id UUID REFERENCES units(id),
  formula TEXT,
  is_hit BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_items_category_id ON items(category_id);
CREATE INDEX IF NOT EXISTS idx_items_item_code ON items(item_code);
CREATE INDEX IF NOT EXISTS idx_items_manufacturer ON items(manufacturer);
CREATE INDEX IF NOT EXISTS idx_items_is_hit ON items(is_hit);
CREATE INDEX IF NOT EXISTS idx_items_is_active ON items(is_active);

-- ========================================
-- 6. アイテムバリエーション（色違い）テーブル
-- ========================================
CREATE TABLE IF NOT EXISTS item_variants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  item_id UUID REFERENCES items(id) ON DELETE CASCADE,
  variant_code VARCHAR(100) NOT NULL,
  color_name VARCHAR(255) NOT NULL,
  color_code VARCHAR(100),
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(item_id, variant_code)
);

CREATE INDEX IF NOT EXISTS idx_item_variants_item_id ON item_variants(item_id);
CREATE INDEX IF NOT EXISTS idx_item_variants_variant_code ON item_variants(variant_code);

-- ========================================
-- 7. アイテムバリエーション画像テーブル
-- ========================================
CREATE TABLE IF NOT EXISTS item_variant_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  variant_id UUID REFERENCES item_variants(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  image_path TEXT,
  thumbnail_url TEXT,
  file_name VARCHAR(255),
  file_size INTEGER,
  mime_type VARCHAR(100),
  alt_text VARCHAR(500),
  is_primary BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_item_variant_images_variant_id ON item_variant_images(variant_id);

-- ========================================
-- 8. アイテム商品別価格テーブル
-- ========================================
CREATE TABLE IF NOT EXISTS item_pricing (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  item_id UUID REFERENCES items(id) ON DELETE CASCADE,
  variant_id UUID REFERENCES item_variants(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  is_available BOOLEAN DEFAULT true,
  is_standard BOOLEAN DEFAULT true,
  price DECIMAL(12, 2) DEFAULT 0,
  installation_cost DECIMAL(12, 2) DEFAULT 0,
  effective_date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(item_id, variant_id, product_id)
);

CREATE INDEX IF NOT EXISTS idx_item_pricing_item_id ON item_pricing(item_id);
CREATE INDEX IF NOT EXISTS idx_item_pricing_variant_id ON item_pricing(variant_id);
CREATE INDEX IF NOT EXISTS idx_item_pricing_product_id ON item_pricing(product_id);
CREATE INDEX IF NOT EXISTS idx_item_pricing_is_standard ON item_pricing(is_standard);

-- ========================================
-- 9. 部屋マスターテーブル
-- ========================================
CREATE TABLE IF NOT EXISTS rooms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  floor INTEGER DEFAULT 1,
  room_type VARCHAR(100),
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 初期部屋データ
INSERT INTO rooms (name, floor, room_type, display_order) VALUES
  ('玄関', 1, 'entrance', 1),
  ('リビング', 1, 'living', 2),
  ('ダイニング', 1, 'dining', 3),
  ('キッチン', 1, 'kitchen', 4),
  ('和室', 1, 'japanese', 5),
  ('トイレ（1F）', 1, 'toilet', 6),
  ('洗面所', 1, 'washroom', 7),
  ('浴室', 1, 'bathroom', 8),
  ('主寝室', 2, 'bedroom', 9),
  ('子供部屋1', 2, 'kids', 10),
  ('子供部屋2', 2, 'kids', 11),
  ('トイレ（2F）', 2, 'toilet', 12),
  ('廊下（1F）', 1, 'hallway', 13),
  ('廊下（2F）', 2, 'hallway', 14),
  ('階段', 1, 'stairs', 15),
  ('WIC', 2, 'closet', 16)
ON CONFLICT DO NOTHING;

-- ========================================
-- 10. プロジェクトテーブル
-- ========================================
CREATE TYPE project_status AS ENUM ('draft', 'active', 'confirmed', 'completed', 'cancelled');

CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_code VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(500) NOT NULL,
  product_id UUID REFERENCES products(id),
  status project_status DEFAULT 'draft',

  -- 一般情報
  customer_name VARCHAR(255),
  construction_name VARCHAR(255),
  construction_address TEXT,
  region_category VARCHAR(100),

  -- 仕様
  fire_resistance VARCHAR(100),
  construction_method VARCHAR(100),

  -- 建物詳細
  floors INTEGER DEFAULT 2,
  ceiling_height DECIMAL(5, 2),
  structure VARCHAR(100),
  building_standard VARCHAR(100),

  -- 各種申請
  applications JSONB,

  -- アクセントクロス設定
  accent_cross_settings JSONB,

  -- 担当者
  coordinator_id UUID REFERENCES users(id),

  -- 確定情報
  confirmed_at TIMESTAMP WITH TIME ZONE,
  confirmed_by UUID REFERENCES users(id),

  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_projects_project_code ON projects(project_code);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_product_id ON projects(product_id);
CREATE INDEX IF NOT EXISTS idx_projects_coordinator_id ON projects(coordinator_id);

-- ========================================
-- 11. プロジェクトメンバーテーブル（複数お客様対応）
-- ========================================
CREATE TABLE IF NOT EXISTS project_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(project_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_project_members_project_id ON project_members(project_id);
CREATE INDEX IF NOT EXISTS idx_project_members_user_id ON project_members(user_id);

-- ========================================
-- 12. アイテム選択テーブル
-- ========================================
CREATE TABLE IF NOT EXISTS selections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  item_id UUID REFERENCES items(id) ON DELETE CASCADE,
  variant_id UUID REFERENCES item_variants(id) ON DELETE SET NULL,
  quantity DECIMAL(10, 2) DEFAULT 1,
  unit_price DECIMAL(12, 2) DEFAULT 0,
  installation_cost DECIMAL(12, 2) DEFAULT 0,
  calculated_price DECIMAL(12, 2) DEFAULT 0,
  note TEXT,
  selected_by UUID REFERENCES users(id),
  selected_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(project_id, item_id, variant_id)
);

CREATE INDEX IF NOT EXISTS idx_selections_project_id ON selections(project_id);
CREATE INDEX IF NOT EXISTS idx_selections_item_id ON selections(item_id);
CREATE INDEX IF NOT EXISTS idx_selections_variant_id ON selections(variant_id);

-- ========================================
-- 13. 部屋別内装選択テーブル
-- ========================================
CREATE TYPE interior_part_type AS ENUM ('floor', 'wall_cross', 'ceiling_cross', 'baseboard', 'other');

CREATE TABLE IF NOT EXISTS room_selections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
  part_type interior_part_type NOT NULL,
  item_id UUID REFERENCES items(id) ON DELETE SET NULL,
  variant_id UUID REFERENCES item_variants(id) ON DELETE SET NULL,
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(project_id, room_id, part_type)
);

CREATE INDEX IF NOT EXISTS idx_room_selections_project_id ON room_selections(project_id);
CREATE INDEX IF NOT EXISTS idx_room_selections_room_id ON room_selections(room_id);

-- ========================================
-- 14. 見積テーブル
-- ========================================
CREATE TABLE IF NOT EXISTS estimates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  estimate_number VARCHAR(100) UNIQUE NOT NULL,
  subtotal DECIMAL(14, 2) DEFAULT 0,
  tax_rate DECIMAL(5, 2) DEFAULT 10.00,
  tax_amount DECIMAL(14, 2) DEFAULT 0,
  total DECIMAL(14, 2) DEFAULT 0,
  issued_at TIMESTAMP WITH TIME ZONE,
  valid_until DATE,
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_estimates_project_id ON estimates(project_id);
CREATE INDEX IF NOT EXISTS idx_estimates_estimate_number ON estimates(estimate_number);

-- ========================================
-- 15. 閲覧履歴テーブル
-- ========================================
CREATE TABLE IF NOT EXISTS view_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
  item_id UUID REFERENCES items(id) ON DELETE SET NULL,
  variant_id UUID REFERENCES item_variants(id) ON DELETE SET NULL,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  action_type VARCHAR(50) NOT NULL,
  page_url TEXT,
  session_id VARCHAR(255),
  ip_address INET,
  user_agent TEXT,
  event_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_view_logs_user_id ON view_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_view_logs_project_id ON view_logs(project_id);
CREATE INDEX IF NOT EXISTS idx_view_logs_item_id ON view_logs(item_id);
CREATE INDEX IF NOT EXISTS idx_view_logs_created_at ON view_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_view_logs_action_type ON view_logs(action_type);

-- ========================================
-- 16. 監査ログテーブル
-- ========================================
CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  table_name VARCHAR(100) NOT NULL,
  record_id UUID NOT NULL,
  action VARCHAR(20) NOT NULL,
  old_data JSONB,
  new_data JSONB,
  changed_fields JSONB,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  user_email VARCHAR(255),
  ip_address INET,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_audit_logs_table_name ON audit_logs(table_name);
CREATE INDEX IF NOT EXISTS idx_audit_logs_record_id ON audit_logs(record_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at);

-- ========================================
-- 17. 通知テーブル
-- ========================================
CREATE TYPE notification_type AS ENUM ('project_created', 'selection_confirmed', 'system');

CREATE TABLE IF NOT EXISTS notifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  notification_type notification_type NOT NULL,
  title VARCHAR(255) NOT NULL,
  message TEXT,
  is_read BOOLEAN DEFAULT false,
  related_project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_is_read ON notifications(is_read);

-- ========================================
-- トリガー: updated_at 自動更新
-- ========================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 各テーブルにトリガー作成
DO $$
DECLARE
  tbl_name TEXT;
  tables TEXT[] := ARRAY['users', 'products', 'categories', 'items', 'item_variants',
    'item_variant_images', 'item_pricing', 'rooms', 'projects', 'selections',
    'room_selections', 'estimates'];
BEGIN
  FOREACH tbl_name IN ARRAY tables LOOP
    EXECUTE format('
      DROP TRIGGER IF EXISTS update_%I_updated_at ON %I;
      CREATE TRIGGER update_%I_updated_at
        BEFORE UPDATE ON %I
        FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    ', tbl_name, tbl_name, tbl_name, tbl_name);
  END LOOP;
END
$$;

-- ========================================
-- RLS ポリシー
-- ========================================

-- Users
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can view own data" ON users;
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid()::uuid = id OR auth.jwt() ->> 'role' IN ('admin', 'coordinator'));
DROP POLICY IF EXISTS "Admin can manage users" ON users;
CREATE POLICY "Admin can manage users" ON users
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- Products
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view products" ON products;
CREATE POLICY "Public can view products" ON products
  FOR SELECT USING (is_active = true);
DROP POLICY IF EXISTS "Admin can manage products" ON products;
CREATE POLICY "Admin can manage products" ON products
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- Categories
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view categories" ON categories;
CREATE POLICY "Public can view categories" ON categories
  FOR SELECT USING (is_active = true);
DROP POLICY IF EXISTS "Admin can manage categories" ON categories;
CREATE POLICY "Admin can manage categories" ON categories
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- Items
ALTER TABLE items ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view items" ON items;
CREATE POLICY "Public can view items" ON items
  FOR SELECT USING (is_active = true);
DROP POLICY IF EXISTS "Admin can manage items" ON items;
CREATE POLICY "Admin can manage items" ON items
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- Item Variants
ALTER TABLE item_variants ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view variants" ON item_variants;
CREATE POLICY "Public can view variants" ON item_variants
  FOR SELECT USING (is_active = true);
DROP POLICY IF EXISTS "Admin can manage variants" ON item_variants;
CREATE POLICY "Admin can manage variants" ON item_variants
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- Item Variant Images
ALTER TABLE item_variant_images ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view images" ON item_variant_images;
CREATE POLICY "Public can view images" ON item_variant_images
  FOR SELECT USING (true);
DROP POLICY IF EXISTS "Admin can manage images" ON item_variant_images;
CREATE POLICY "Admin can manage images" ON item_variant_images
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- Item Pricing
ALTER TABLE item_pricing ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Authenticated can view pricing" ON item_pricing;
CREATE POLICY "Authenticated can view pricing" ON item_pricing
  FOR SELECT USING (auth.role() = 'authenticated');
DROP POLICY IF EXISTS "Admin can manage pricing" ON item_pricing;
CREATE POLICY "Admin can manage pricing" ON item_pricing
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- Rooms
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view rooms" ON rooms;
CREATE POLICY "Public can view rooms" ON rooms
  FOR SELECT USING (is_active = true);
DROP POLICY IF EXISTS "Admin can manage rooms" ON rooms;
CREATE POLICY "Admin can manage rooms" ON rooms
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- Projects
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Members can view projects" ON projects;
CREATE POLICY "Members can view projects" ON projects
  FOR SELECT USING (
    auth.jwt() ->> 'role' IN ('admin', 'coordinator')
    OR EXISTS (
      SELECT 1 FROM project_members
      WHERE project_id = id AND user_id = auth.uid()::uuid
    )
  );
DROP POLICY IF EXISTS "Admin and coordinator can manage projects" ON projects;
CREATE POLICY "Admin and coordinator can manage projects" ON projects
  FOR ALL USING (auth.jwt() ->> 'role' IN ('admin', 'coordinator'));

-- Selections
ALTER TABLE selections ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Project members can view selections" ON selections;
CREATE POLICY "Project members can view selections" ON selections
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM projects p
      LEFT JOIN project_members pm ON p.id = pm.project_id
      WHERE p.id = project_id
      AND (p.coordinator_id = auth.uid()::uuid OR pm.user_id = auth.uid()::uuid
           OR auth.jwt() ->> 'role' = 'admin')
    )
  );
DROP POLICY IF EXISTS "Members can insert selections" ON selections;
CREATE POLICY "Members can insert selections" ON selections
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM projects p
      LEFT JOIN project_members pm ON p.id = pm.project_id
      WHERE p.id = project_id
      AND p.status IN ('draft', 'active')
      AND (p.coordinator_id = auth.uid()::uuid OR pm.user_id = auth.uid()::uuid
           OR auth.jwt() ->> 'role' = 'admin')
    )
  );

-- Room Selections
ALTER TABLE room_selections ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Project members can view room_selections" ON room_selections;
CREATE POLICY "Project members can view room_selections" ON room_selections
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM projects p
      LEFT JOIN project_members pm ON p.id = pm.project_id
      WHERE p.id = project_id
      AND (p.coordinator_id = auth.uid()::uuid OR pm.user_id = auth.uid()::uuid
           OR auth.jwt() ->> 'role' = 'admin')
    )
  );

-- View Logs
ALTER TABLE view_logs ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can insert own logs" ON view_logs;
CREATE POLICY "Users can insert own logs" ON view_logs
  FOR INSERT WITH CHECK (user_id = auth.uid()::uuid);
DROP POLICY IF EXISTS "Admin can view all logs" ON view_logs;
CREATE POLICY "Admin can view all logs" ON view_logs
  FOR SELECT USING (auth.jwt() ->> 'role' IN ('admin', 'coordinator'));

-- Audit Logs
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Admin can view audit logs" ON audit_logs;
CREATE POLICY "Admin can view audit logs" ON audit_logs
  FOR SELECT USING (auth.jwt() ->> 'role' = 'admin');

-- Notifications
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can view own notifications" ON notifications;
CREATE POLICY "Users can view own notifications" ON notifications
  FOR SELECT USING (user_id = auth.uid()::uuid);
DROP POLICY IF EXISTS "System can insert notifications" ON notifications;
CREATE POLICY "System can insert notifications" ON notifications
  FOR INSERT WITH CHECK (true);

-- ========================================
-- 便利なビュー
-- ========================================

-- アイテム一覧ビュー（価格情報付き）
CREATE OR REPLACE VIEW item_list_view AS
SELECT
  i.id,
  i.item_code,
  i.name,
  i.category_name,
  i.model_number,
  i.manufacturer,
  i.note,
  i.is_hit,
  u.name AS unit_name,
  u.symbol AS unit_symbol,
  c.name AS category,
  c.category_type,
  c.slug AS category_slug
FROM items i
LEFT JOIN units u ON i.unit_id = u.id
LEFT JOIN categories c ON i.category_id = c.id
WHERE i.is_active = true;

-- プロジェクト一覧ビュー
CREATE OR REPLACE VIEW project_list_view AS
SELECT
  p.id,
  p.project_code,
  p.name,
  p.status,
  p.customer_name,
  p.construction_name,
  pr.name AS product_name,
  u.full_name AS coordinator_name,
  p.confirmed_at,
  p.created_at,
  p.updated_at
FROM projects p
LEFT JOIN products pr ON p.product_id = pr.id
LEFT JOIN users u ON p.coordinator_id = u.id;

-- 選択統計ビュー（人気アイテム）
CREATE OR REPLACE VIEW item_selection_stats AS
SELECT
  i.id,
  i.name,
  i.item_code,
  i.manufacturer,
  c.name AS category_name,
  COUNT(s.id) AS selection_count,
  COUNT(DISTINCT s.project_id) AS project_count,
  MAX(s.selected_at) AS last_selected_at
FROM items i
LEFT JOIN selections s ON i.id = s.item_id
LEFT JOIN categories c ON i.category_id = c.id
WHERE i.is_active = true
GROUP BY i.id, i.name, i.item_code, i.manufacturer, c.name
ORDER BY selection_count DESC;

-- ========================================
-- 関数: 見積計算
-- ========================================
CREATE OR REPLACE FUNCTION calculate_estimate(p_project_id UUID)
RETURNS TABLE (
  subtotal DECIMAL(14, 2),
  tax_amount DECIMAL(14, 2),
  total DECIMAL(14, 2)
) AS $$
DECLARE
  v_subtotal DECIMAL(14, 2);
  v_tax_rate DECIMAL(5, 2) := 10.00;
  v_tax_amount DECIMAL(14, 2);
  v_total DECIMAL(14, 2);
BEGIN
  -- 選択アイテムの合計を計算
  SELECT COALESCE(SUM(calculated_price), 0) INTO v_subtotal
  FROM selections
  WHERE project_id = p_project_id;

  -- 税額計算
  v_tax_amount := ROUND(v_subtotal * v_tax_rate / 100, 0);
  v_total := v_subtotal + v_tax_amount;

  RETURN QUERY SELECT v_subtotal, v_tax_amount, v_total;
END;
$$ LANGUAGE plpgsql;

-- ========================================
-- 完了メッセージ
-- ========================================
DO $$
BEGIN
  RAISE NOTICE 'IC-pochipochi-system データベーススキーマが正常に作成されました。';
END
$$;

-- ========================================
-- IC-pochipochi-system 完全セットアップSQL
-- ========================================
-- 作成日: 2025-12-13
-- バージョン: 2.11.0
--
-- このファイル1つで全てのセットアップが完了します。
-- Supabase SQLエディタで実行してください。
-- ========================================

-- ========================================
-- PART 1: ENUM型定義
-- ========================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

DO $$ BEGIN CREATE TYPE user_role AS ENUM ('admin', 'coordinator', 'user'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE TYPE category_type AS ENUM ('exterior', 'interior', 'equipment', 'other'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE TYPE unit_type AS ENUM ('sqm', 'piece', 'location', 'set', 'package', 'sheet', 'meter', 'unit', 'pair'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE TYPE project_status AS ENUM ('draft', 'active', 'confirmed', 'completed', 'cancelled'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE TYPE interior_part_type AS ENUM ('floor', 'wall_cross', 'ceiling_cross', 'baseboard', 'accent_cross', 'other'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE TYPE notification_type AS ENUM ('project_created', 'selection_confirmed', 'item_discontinued', 'system'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- ========================================
-- PART 2: コアテーブル
-- ========================================

-- ユーザー
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  auth_id UUID UNIQUE,
  email VARCHAR(255) UNIQUE NOT NULL,
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

-- システム設定
CREATE TABLE IF NOT EXISTS system_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  setting_key VARCHAR(255) UNIQUE NOT NULL,
  setting_value JSONB NOT NULL,
  description TEXT,
  is_editable BOOLEAN DEFAULT true,
  updated_by UUID REFERENCES users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- プラン（商品タイプ）
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  color_code VARCHAR(20),
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- カテゴリ
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

-- 単位
CREATE TABLE IF NOT EXISTS units (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code unit_type UNIQUE NOT NULL,
  name VARCHAR(50) NOT NULL,
  symbol VARCHAR(20) NOT NULL,
  display_order INTEGER DEFAULT 0
);

-- アイテム（商品）
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
  is_discontinued BOOLEAN DEFAULT false,
  discontinue_date DATE,
  discontinue_note TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- バリアント（色違い）
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

-- バリアント画像
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

-- 価格
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

-- 部屋
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

-- プロジェクト
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_code VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(500) NOT NULL,
  product_id UUID REFERENCES products(id),
  status project_status DEFAULT 'draft',
  customer_name VARCHAR(255),
  construction_name VARCHAR(255),
  construction_address TEXT,
  region_category VARCHAR(100),
  fire_resistance VARCHAR(100),
  construction_method VARCHAR(100),
  floors INTEGER DEFAULT 2,
  floor_area DECIMAL(10, 2),
  ceiling_height DECIMAL(5, 2),
  structure VARCHAR(100),
  building_standard VARCHAR(100),
  quantities JSONB DEFAULT '{}',
  applications JSONB,
  accent_cross_settings JSONB,
  coordinator_id UUID REFERENCES users(id),
  editing_user_id UUID REFERENCES users(id),
  editing_started_at TIMESTAMP WITH TIME ZONE,
  confirmed_at TIMESTAMP WITH TIME ZONE,
  confirmed_by UUID REFERENCES users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 選択履歴
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
  price_snapshot JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(project_id, item_id, variant_id)
);

-- 閲覧ログ
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

-- 監査ログ
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

-- 通知
CREATE TABLE IF NOT EXISTS notifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  notification_type notification_type NOT NULL,
  title VARCHAR(255) NOT NULL,
  message TEXT,
  is_read BOOLEAN DEFAULT false,
  related_project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
  related_item_id UUID REFERENCES items(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- ========================================
-- PART 3: インデックス
-- ========================================

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_categories_parent_id ON categories(parent_id);
CREATE INDEX IF NOT EXISTS idx_categories_category_type ON categories(category_type);
CREATE INDEX IF NOT EXISTS idx_items_category_id ON items(category_id);
CREATE INDEX IF NOT EXISTS idx_items_item_code ON items(item_code);
CREATE INDEX IF NOT EXISTS idx_items_manufacturer ON items(manufacturer);
CREATE INDEX IF NOT EXISTS idx_items_is_active ON items(is_active);
CREATE INDEX IF NOT EXISTS idx_item_variants_item_id ON item_variants(item_id);
CREATE INDEX IF NOT EXISTS idx_item_variant_images_variant_id ON item_variant_images(variant_id);
CREATE INDEX IF NOT EXISTS idx_item_pricing_item_id ON item_pricing(item_id);
CREATE INDEX IF NOT EXISTS idx_item_pricing_product_id ON item_pricing(product_id);
CREATE INDEX IF NOT EXISTS idx_projects_project_code ON projects(project_code);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_selections_project_id ON selections(project_id);
CREATE INDEX IF NOT EXISTS idx_view_logs_created_at ON view_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_audit_logs_table_name ON audit_logs(table_name);

-- ========================================
-- PART 4: 初期データ
-- ========================================

-- プラン
INSERT INTO products (code, name, description, color_code, display_order) VALUES
  ('LIFE', 'LIFE', 'LIFEプラン', '#0D9488', 1),
  ('LIFE_PLUS', 'LIFE+', 'LIFE+プラン', '#6B7280', 2),
  ('HOURS', 'HOURS', 'HOURSプラン', '#DC2626', 3),
  ('LACIE', 'LACIE', 'LACIEプラン', '#F97316', 4)
ON CONFLICT (code) DO NOTHING;

-- 単位
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

-- 部屋
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

-- カテゴリ（外装）
INSERT INTO categories (name, slug, category_type, is_required, display_order, description) VALUES
  ('外壁', 'exterior-wall', 'exterior', true, 1, '家の外側の壁。見た目と耐久性に影響'),
  ('ポーチ', 'porch', 'exterior', true, 2, '玄関前のタイル部分'),
  ('屋根', 'roof', 'exterior', true, 3, '家の一番上を覆う部分'),
  ('樋', 'gutter', 'exterior', true, 4, '雨水を流すパイプ（雨樋）'),
  ('軒天', 'soffit', 'exterior', true, 5, '屋根の裏側で外から見える部分'),
  ('窓', 'window', 'exterior', true, 6, 'サッシ・窓オプション'),
  ('玄関ドア', 'entrance-door', 'exterior', true, 7, '家の入口のドア'),
  ('外部設備', 'exterior-facility', 'exterior', false, 8, '外部コンセント・水栓など'),
  ('エコキュート', 'ecocute', 'exterior', true, 9, '電気給湯器')
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type,
  is_required = EXCLUDED.is_required,
  display_order = EXCLUDED.display_order,
  description = EXCLUDED.description;

-- カテゴリ（内装）
INSERT INTO categories (name, slug, category_type, is_required, display_order, description) VALUES
  ('床材', 'flooring', 'interior', true, 1, 'フローリング・床材'),
  ('建具', 'interior-door', 'interior', true, 2, '室内ドア・引き戸'),
  ('階段', 'stairs', 'interior', true, 3, '階段踏板・手摺'),
  ('壁材', 'wallpaper', 'interior', true, 4, 'クロス・タイル'),
  ('収納', 'storage', 'interior', false, 5, 'クローゼット・収納棚'),
  ('造作', 'niche', 'interior', false, 6, 'ニッチ・造作'),
  ('電気設備', 'electrical', 'interior', true, 7, 'スイッチ・コンセント'),
  ('照明', 'lighting', 'interior', true, 8, 'ダウンライト・ペンダント'),
  ('換気', 'ventilation', 'interior', true, 9, '換気システム・浴室乾燥機'),
  ('空調', 'aircon', 'interior', false, 10, 'エアコン'),
  ('カーテン', 'curtain', 'interior', false, 11, 'カーテン・レース'),
  ('ブラインド', 'blind', 'interior', false, 12, 'アルミ・ウッドブラインド'),
  ('造作家具', 'furniture', 'interior', false, 13, 'TVボード・カウンター'),
  ('家具', 'dining-table', 'interior', false, 14, 'ダイニングテーブルなど'),
  ('手摺', 'handrail', 'interior', false, 15, '室内手摺'),
  ('物干し', 'hanger', 'interior', false, 16, '室内物干し')
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type,
  is_required = EXCLUDED.is_required,
  display_order = EXCLUDED.display_order,
  description = EXCLUDED.description;

-- カテゴリ（設備）
INSERT INTO categories (name, slug, category_type, is_required, display_order, description) VALUES
  ('キッチン', 'kitchen', 'equipment', true, 1, 'システムキッチン'),
  ('バスルーム', 'bathroom', 'equipment', true, 2, 'システムバス'),
  ('トイレ', 'toilet', 'equipment', true, 3, 'トイレ本体'),
  ('洗面化粧台', 'washroom', 'equipment', true, 4, '洗面台'),
  ('給湯器', 'water-heater', 'equipment', true, 5, 'エコキュート・給湯器'),
  ('バスルーム設備', 'bathroom-equipment', 'equipment', false, 6, '浴室暖房乾燥機'),
  ('ランドリー', 'laundry', 'equipment', false, 7, '洗濯流し'),
  ('水処理設備', 'water-equipment', 'equipment', false, 8, '軟水器など')
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type,
  is_required = EXCLUDED.is_required,
  display_order = EXCLUDED.display_order,
  description = EXCLUDED.description;

-- システム設定
INSERT INTO system_settings (setting_key, setting_value, description) VALUES
  ('company_info', '{"name": "Gハウス", "logo_url": "", "address": "", "phone": "", "email": ""}', '会社情報'),
  ('tax_rate', '{"rate": 10}', '消費税率（%）')
ON CONFLICT (setting_key) DO NOTHING;

-- ========================================
-- PART 5: RLSポリシー
-- ========================================

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE items ENABLE ROW LEVEL SECURITY;
ALTER TABLE item_variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE item_variant_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE item_pricing ENABLE ROW LEVEL SECURITY;
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE selections ENABLE ROW LEVEL SECURITY;
ALTER TABLE view_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE system_settings ENABLE ROW LEVEL SECURITY;

-- 既存ポリシー削除
DROP POLICY IF EXISTS "Anyone can view products" ON products;
DROP POLICY IF EXISTS "Anyone can view categories" ON categories;
DROP POLICY IF EXISTS "Anyone can view items" ON items;
DROP POLICY IF EXISTS "Anyone can view item_variants" ON item_variants;
DROP POLICY IF EXISTS "Anyone can view item_variant_images" ON item_variant_images;
DROP POLICY IF EXISTS "Anyone can view item_pricing" ON item_pricing;
DROP POLICY IF EXISTS "Anyone can view rooms" ON rooms;
DROP POLICY IF EXISTS "Anyone can view units" ON units;

-- 読み取りポリシー（匿名アクセス許可）
CREATE POLICY "Anyone can view products" ON products FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view categories" ON categories FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view items" ON items FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view item_variants" ON item_variants FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view item_variant_images" ON item_variant_images FOR SELECT USING (true);
CREATE POLICY "Anyone can view item_pricing" ON item_pricing FOR SELECT USING (true);
CREATE POLICY "Anyone can view rooms" ON rooms FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view units" ON units FOR SELECT USING (true);

-- ========================================
-- PART 6: トリガー
-- ========================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DO $$
DECLARE
  tbl_name TEXT;
  tables TEXT[] := ARRAY['users', 'system_settings', 'products', 'categories', 'items', 'item_variants',
    'item_variant_images', 'item_pricing', 'rooms', 'projects', 'selections'];
BEGIN
  FOREACH tbl_name IN ARRAY tables LOOP
    EXECUTE format('DROP TRIGGER IF EXISTS update_%I_updated_at ON %I', tbl_name, tbl_name);
    EXECUTE format('CREATE TRIGGER update_%I_updated_at BEFORE UPDATE ON %I FOR EACH ROW EXECUTE FUNCTION update_updated_at_column()', tbl_name, tbl_name);
  END LOOP;
END $$;

-- ========================================
-- PART 7: 便利なビュー・関数
-- ========================================

-- データ統計
CREATE OR REPLACE VIEW data_statistics AS
SELECT 'items' as table_name, COUNT(*) as total_count, COUNT(*) FILTER (WHERE is_active = true) as active_count FROM items
UNION ALL SELECT 'item_variants', COUNT(*), COUNT(*) FILTER (WHERE is_active = true) FROM item_variants
UNION ALL SELECT 'item_pricing', COUNT(*), COUNT(*) FROM item_pricing
UNION ALL SELECT 'categories', COUNT(*), COUNT(*) FILTER (WHERE is_active = true) FROM categories
UNION ALL SELECT 'projects', COUNT(*), COUNT(*) FILTER (WHERE status != 'cancelled') FROM projects
UNION ALL SELECT 'selections', COUNT(*), COUNT(*) FROM selections;

-- 人気商品
CREATE OR REPLACE VIEW popular_items_ranking AS
SELECT i.id, i.name, i.manufacturer, c.name as category_name,
  COUNT(s.id) as selection_count, RANK() OVER (ORDER BY COUNT(s.id) DESC) as rank
FROM items i
LEFT JOIN selections s ON i.id = s.item_id
LEFT JOIN categories c ON i.category_id = c.id
WHERE i.is_active = true
GROUP BY i.id, i.name, i.manufacturer, c.name
ORDER BY selection_count DESC;

-- データ整合性チェック
CREATE OR REPLACE FUNCTION check_data_integrity()
RETURNS TABLE (check_name TEXT, status TEXT, details TEXT) AS $$
BEGIN
  RETURN QUERY SELECT 'orphan_variants'::TEXT, CASE WHEN COUNT(*) = 0 THEN 'OK' ELSE 'WARNING' END,
    COUNT(*)::TEXT || ' orphan variants' FROM item_variants v LEFT JOIN items i ON v.item_id = i.id WHERE i.id IS NULL;
  RETURN QUERY SELECT 'missing_pricing'::TEXT, CASE WHEN COUNT(*) = 0 THEN 'OK' ELSE 'WARNING' END,
    COUNT(*)::TEXT || ' variants without pricing' FROM item_variants v LEFT JOIN item_pricing p ON v.id = p.variant_id WHERE p.id IS NULL AND v.is_active = true;
END;
$$ LANGUAGE plpgsql;

-- 価格一括更新
CREATE OR REPLACE FUNCTION bulk_update_prices(manufacturer_name TEXT, percentage_change DECIMAL)
RETURNS INTEGER AS $$
DECLARE updated_count INTEGER;
BEGIN
  UPDATE item_pricing SET price = price * (1 + percentage_change / 100), updated_at = NOW()
  WHERE item_id IN (SELECT id FROM items WHERE manufacturer = manufacturer_name);
  GET DIAGNOSTICS updated_count = ROW_COUNT;
  RETURN updated_count;
END;
$$ LANGUAGE plpgsql;

-- ========================================
-- 完了
-- ========================================

DO $$ BEGIN RAISE NOTICE 'IC-pochipochi-system セットアップ完了！'; END $$;

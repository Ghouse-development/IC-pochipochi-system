-- ========================================
-- IC-pochipochi-system 完全データベーススキーマ
-- ========================================
-- 作成日: 2025年12月9日
-- Supabase SQLエディタで実行してください
-- ========================================

-- 必要な拡張
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ========================================
-- ENUM型定義
-- ========================================

-- ユーザーロール
DO $$ BEGIN
  CREATE TYPE user_role AS ENUM ('admin', 'coordinator', 'user');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- カテゴリタイプ
DO $$ BEGIN
  CREATE TYPE category_type AS ENUM ('exterior', 'interior', 'equipment', 'other');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- 単位タイプ
DO $$ BEGIN
  CREATE TYPE unit_type AS ENUM ('sqm', 'piece', 'location', 'set', 'package', 'sheet', 'meter', 'unit', 'pair');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- プロジェクトステータス
DO $$ BEGIN
  CREATE TYPE project_status AS ENUM ('draft', 'active', 'confirmed', 'completed', 'cancelled');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- 内装部位タイプ
DO $$ BEGIN
  CREATE TYPE interior_part_type AS ENUM ('floor', 'wall_cross', 'ceiling_cross', 'baseboard', 'accent_cross', 'other');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- 通知タイプ
DO $$ BEGIN
  CREATE TYPE notification_type AS ENUM ('project_created', 'selection_confirmed', 'item_discontinued', 'system');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- ========================================
-- 1. ユーザー管理テーブル
-- ========================================

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

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_users_auth_id ON users(auth_id);

-- ========================================
-- 2. システム設定テーブル（ノーコード設定用）
-- ========================================

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

-- 初期システム設定
INSERT INTO system_settings (setting_key, setting_value, description) VALUES
  ('company_info', '{"name": "Gハウス", "logo_url": "", "address": "", "phone": "", "email": ""}', '会社情報'),
  ('tax_rate', '{"rate": 10}', '消費税率（%）'),
  ('porch_standard_size', '{"width": 1.8, "height": 1.8}', '標準ポーチサイズ（m）'),
  ('window_standard_count', '{"under_35": 10, "35_40": 11, "40_45": 12, "45_50": 13, "over_50": 14}', '坪数別標準窓数'),
  ('tutorial_enabled', '{"enabled": true}', '初回チュートリアル表示'),
  ('watermark_text', '{"text": "仮"}', '仮資料ウォーターマーク文字'),
  ('email_notification', '{"enabled": false, "provider": "", "api_key": ""}', 'メール通知設定（後から設定）')
ON CONFLICT (setting_key) DO NOTHING;

-- ========================================
-- 3. 商品（プラン）マスターテーブル
-- ========================================

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

-- 初期商品データ
INSERT INTO products (code, name, description, color_code, display_order) VALUES
  ('LIFE', 'LIFE', 'LIFEプラン', '#0D9488', 1),
  ('LIFE_PLUS', 'LIFE+', 'LIFE+プラン', '#6B7280', 2),
  ('HOURS', 'HOURS', 'HOURSプラン', '#DC2626', 3),
  ('LACIE', 'LACIE', 'LACIEプラン', '#F97316', 4)
ON CONFLICT (code) DO NOTHING;

-- ========================================
-- 4. カテゴリテーブル（階層構造対応）
-- ========================================

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

-- ========================================
-- 5. 単位マスターテーブル
-- ========================================

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
-- 6. アイテムマスターテーブル
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
  is_discontinued BOOLEAN DEFAULT false,
  discontinue_date DATE,
  discontinue_note TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_items_category_id ON items(category_id);
CREATE INDEX IF NOT EXISTS idx_items_item_code ON items(item_code);
CREATE INDEX IF NOT EXISTS idx_items_manufacturer ON items(manufacturer);
CREATE INDEX IF NOT EXISTS idx_items_is_hit ON items(is_hit);
CREATE INDEX IF NOT EXISTS idx_items_is_active ON items(is_active);
CREATE INDEX IF NOT EXISTS idx_items_is_discontinued ON items(is_discontinued);

-- ========================================
-- 7. アイテムバリエーション（色違い）テーブル
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

-- ========================================
-- 8. アイテムバリエーション画像テーブル
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
-- 9. アイテム商品別価格テーブル
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
CREATE INDEX IF NOT EXISTS idx_item_pricing_product_id ON item_pricing(product_id);

-- ========================================
-- 10. 部屋マスターテーブル
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
-- 11. おすすめセット（テンプレート）テーブル
-- ========================================

CREATE TABLE IF NOT EXISTS preset_templates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  thumbnail_url TEXT,
  product_id UUID REFERENCES products(id),
  selections JSONB NOT NULL DEFAULT '[]',
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_preset_templates_product_id ON preset_templates(product_id);

-- ========================================
-- 12. プロジェクトテーブル
-- ========================================

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
  floor_area DECIMAL(10, 2),
  ceiling_height DECIMAL(5, 2),
  structure VARCHAR(100),
  building_standard VARCHAR(100),

  -- 数量情報（IC担当が設定）
  quantities JSONB DEFAULT '{}',

  -- 各種申請
  applications JSONB,

  -- アクセントクロス設定
  accent_cross_settings JSONB,

  -- 担当者
  coordinator_id UUID REFERENCES users(id),

  -- 編集ロック
  editing_user_id UUID REFERENCES users(id),
  editing_started_at TIMESTAMP WITH TIME ZONE,

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
-- 13. プロジェクトメンバーテーブル
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
-- 14. プロジェクト部屋テーブル（プロジェクトで使う部屋）
-- ========================================

CREATE TABLE IF NOT EXISTS project_rooms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
  custom_name VARCHAR(255),
  floor INTEGER,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(project_id, room_id)
);

CREATE INDEX IF NOT EXISTS idx_project_rooms_project_id ON project_rooms(project_id);

-- ========================================
-- 15. アイテム選択テーブル
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
  -- 価格スナップショット（確定時の価格を保持）
  price_snapshot JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(project_id, item_id, variant_id)
);

CREATE INDEX IF NOT EXISTS idx_selections_project_id ON selections(project_id);
CREATE INDEX IF NOT EXISTS idx_selections_item_id ON selections(item_id);

-- ========================================
-- 16. 選択履歴テーブル（元に戻す機能用）
-- ========================================

CREATE TABLE IF NOT EXISTS selection_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  selection_id UUID REFERENCES selections(id) ON DELETE CASCADE,
  item_id UUID REFERENCES items(id),
  variant_id UUID REFERENCES item_variants(id),
  action VARCHAR(20) NOT NULL,
  old_data JSONB,
  new_data JSONB,
  changed_by UUID REFERENCES users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_selection_history_project_id ON selection_history(project_id);
CREATE INDEX IF NOT EXISTS idx_selection_history_selection_id ON selection_history(selection_id);
CREATE INDEX IF NOT EXISTS idx_selection_history_created_at ON selection_history(created_at);

-- ========================================
-- 17. 基本内装設定テーブル（全部屋共通）
-- ========================================

CREATE TABLE IF NOT EXISTS project_base_interior (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE UNIQUE,
  floor_item_id UUID REFERENCES items(id),
  floor_variant_id UUID REFERENCES item_variants(id),
  wall_cross_item_id UUID REFERENCES items(id),
  wall_cross_variant_id UUID REFERENCES item_variants(id),
  ceiling_cross_item_id UUID REFERENCES items(id),
  ceiling_cross_variant_id UUID REFERENCES item_variants(id),
  baseboard_item_id UUID REFERENCES items(id),
  baseboard_variant_id UUID REFERENCES item_variants(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- ========================================
-- 18. 部屋別内装選択テーブル（カスタマイズ用）
-- ========================================

CREATE TABLE IF NOT EXISTS room_selections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  project_room_id UUID REFERENCES project_rooms(id) ON DELETE CASCADE,
  part_type interior_part_type NOT NULL,
  item_id UUID REFERENCES items(id) ON DELETE SET NULL,
  variant_id UUID REFERENCES item_variants(id) ON DELETE SET NULL,
  is_accent BOOLEAN DEFAULT false,
  accent_wall VARCHAR(50),
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(project_id, project_room_id, part_type, is_accent)
);

CREATE INDEX IF NOT EXISTS idx_room_selections_project_id ON room_selections(project_id);
CREATE INDEX IF NOT EXISTS idx_room_selections_project_room_id ON room_selections(project_room_id);

-- ========================================
-- 19. 見積テーブル
-- ========================================

CREATE TABLE IF NOT EXISTS estimates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  estimate_number VARCHAR(100) UNIQUE NOT NULL,
  subtotal DECIMAL(14, 2) DEFAULT 0,
  tax_rate DECIMAL(5, 2) DEFAULT 10.00,
  tax_amount DECIMAL(14, 2) DEFAULT 0,
  total DECIMAL(14, 2) DEFAULT 0,
  is_final BOOLEAN DEFAULT false,
  issued_at TIMESTAMP WITH TIME ZONE,
  valid_until DATE,
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_estimates_project_id ON estimates(project_id);

-- ========================================
-- 20. 閲覧履歴テーブル
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

-- ========================================
-- 21. 監査ログテーブル
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
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at);

-- ========================================
-- 22. 通知テーブル
-- ========================================

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
  tables TEXT[] := ARRAY['users', 'system_settings', 'products', 'categories', 'items', 'item_variants',
    'item_variant_images', 'item_pricing', 'rooms', 'preset_templates', 'projects', 'selections',
    'project_base_interior', 'room_selections', 'estimates'];
BEGIN
  FOREACH tbl_name IN ARRAY tables LOOP
    EXECUTE format('DROP TRIGGER IF EXISTS update_%I_updated_at ON %I', tbl_name, tbl_name);
    EXECUTE format('
      CREATE TRIGGER update_%I_updated_at
        BEFORE UPDATE ON %I
        FOR EACH ROW EXECUTE FUNCTION update_updated_at_column()
    ', tbl_name, tbl_name);
  END LOOP;
END
$$;

-- ========================================
-- 選択履歴自動記録トリガー
-- ========================================

CREATE OR REPLACE FUNCTION record_selection_history()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    INSERT INTO selection_history (project_id, selection_id, item_id, variant_id, action, new_data, changed_by)
    VALUES (NEW.project_id, NEW.id, NEW.item_id, NEW.variant_id, 'INSERT', row_to_json(NEW), NEW.selected_by);
  ELSIF TG_OP = 'UPDATE' THEN
    INSERT INTO selection_history (project_id, selection_id, item_id, variant_id, action, old_data, new_data, changed_by)
    VALUES (NEW.project_id, NEW.id, NEW.item_id, NEW.variant_id, 'UPDATE', row_to_json(OLD), row_to_json(NEW), NEW.selected_by);
  ELSIF TG_OP = 'DELETE' THEN
    INSERT INTO selection_history (project_id, selection_id, item_id, variant_id, action, old_data, changed_by)
    VALUES (OLD.project_id, OLD.id, OLD.item_id, OLD.variant_id, 'DELETE', row_to_json(OLD), OLD.selected_by);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_selection_history ON selections;
CREATE TRIGGER trigger_selection_history
  AFTER INSERT OR UPDATE OR DELETE ON selections
  FOR EACH ROW EXECUTE FUNCTION record_selection_history();

-- ========================================
-- 廃番アイテム通知トリガー
-- ========================================

CREATE OR REPLACE FUNCTION notify_discontinued_item()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.is_discontinued = true AND (OLD.is_discontinued = false OR OLD.is_discontinued IS NULL) THEN
    -- 該当アイテムを選択しているプロジェクトのcoordinatorに通知
    INSERT INTO notifications (user_id, notification_type, title, message, related_item_id)
    SELECT DISTINCT p.coordinator_id, 'item_discontinued',
      '廃番予定アイテムがあります',
      format('「%s」が廃番予定です。該当プロジェクトを確認してください。', NEW.name),
      NEW.id
    FROM selections s
    JOIN projects p ON s.project_id = p.id
    WHERE s.item_id = NEW.id AND p.status IN ('draft', 'active') AND p.coordinator_id IS NOT NULL;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_discontinued_item ON items;
CREATE TRIGGER trigger_discontinued_item
  AFTER UPDATE ON items
  FOR EACH ROW EXECUTE FUNCTION notify_discontinued_item();

-- ========================================
-- RLS ポリシー
-- ========================================

-- RLS有効化
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE items ENABLE ROW LEVEL SECURITY;
ALTER TABLE item_variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE item_variant_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE item_pricing ENABLE ROW LEVEL SECURITY;
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE preset_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE selections ENABLE ROW LEVEL SECURITY;
ALTER TABLE selection_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_base_interior ENABLE ROW LEVEL SECURITY;
ALTER TABLE room_selections ENABLE ROW LEVEL SECURITY;
ALTER TABLE estimates ENABLE ROW LEVEL SECURITY;
ALTER TABLE view_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE system_settings ENABLE ROW LEVEL SECURITY;

-- サービスロール用ポリシー（全テーブルにフルアクセス）
-- 注: これはservice_roleキーを使用するバックエンド用

-- 公開テーブル（認証ユーザーが読める）
CREATE POLICY "Authenticated users can view products" ON products FOR SELECT TO authenticated USING (is_active = true);
CREATE POLICY "Authenticated users can view categories" ON categories FOR SELECT TO authenticated USING (is_active = true);
CREATE POLICY "Authenticated users can view items" ON items FOR SELECT TO authenticated USING (is_active = true);
CREATE POLICY "Authenticated users can view item_variants" ON item_variants FOR SELECT TO authenticated USING (is_active = true);
CREATE POLICY "Authenticated users can view item_variant_images" ON item_variant_images FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can view item_pricing" ON item_pricing FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can view rooms" ON rooms FOR SELECT TO authenticated USING (is_active = true);
CREATE POLICY "Authenticated users can view preset_templates" ON preset_templates FOR SELECT TO authenticated USING (is_active = true);
CREATE POLICY "Authenticated users can view units" ON units FOR SELECT TO authenticated USING (true);

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
  i.is_discontinued,
  i.discontinue_date,
  u.name AS unit_name,
  u.symbol AS unit_symbol,
  c.id AS category_id,
  c.name AS category,
  c.category_type,
  c.slug AS category_slug,
  c.is_required AS category_is_required
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
  p.floor_area,
  pr.name AS product_name,
  pr.code AS product_code,
  u.full_name AS coordinator_name,
  p.confirmed_at,
  p.created_at,
  p.updated_at,
  p.editing_user_id,
  p.editing_started_at
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
  v_tax_rate DECIMAL(5, 2);
  v_tax_amount DECIMAL(14, 2);
  v_total DECIMAL(14, 2);
BEGIN
  -- 税率を取得
  SELECT (setting_value->>'rate')::DECIMAL INTO v_tax_rate
  FROM system_settings WHERE setting_key = 'tax_rate';

  IF v_tax_rate IS NULL THEN
    v_tax_rate := 10.00;
  END IF;

  -- 選択アイテムの合計を計算
  SELECT COALESCE(SUM(calculated_price), 0) INTO v_subtotal
  FROM selections
  WHERE project_id = p_project_id;

  -- 税額計算（端数切り捨て）
  v_tax_amount := FLOOR(v_subtotal * v_tax_rate / 100);
  v_total := v_subtotal + v_tax_amount;

  RETURN QUERY SELECT v_subtotal, v_tax_amount, v_total;
END;
$$ LANGUAGE plpgsql;

-- ========================================
-- 関数: 編集ロック
-- ========================================

CREATE OR REPLACE FUNCTION acquire_edit_lock(p_project_id UUID, p_user_id UUID)
RETURNS BOOLEAN AS $$
DECLARE
  v_current_editor UUID;
  v_editing_started TIMESTAMP WITH TIME ZONE;
BEGIN
  SELECT editing_user_id, editing_started_at INTO v_current_editor, v_editing_started
  FROM projects WHERE id = p_project_id;

  -- ロックがないか、30分以上経過している場合はロック取得可能
  IF v_current_editor IS NULL OR v_editing_started < NOW() - INTERVAL '30 minutes' THEN
    UPDATE projects SET editing_user_id = p_user_id, editing_started_at = NOW()
    WHERE id = p_project_id;
    RETURN true;
  END IF;

  -- 自分がロックを持っている場合は更新
  IF v_current_editor = p_user_id THEN
    UPDATE projects SET editing_started_at = NOW()
    WHERE id = p_project_id;
    RETURN true;
  END IF;

  RETURN false;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION release_edit_lock(p_project_id UUID, p_user_id UUID, p_force BOOLEAN DEFAULT false)
RETURNS BOOLEAN AS $$
BEGIN
  IF p_force THEN
    -- 強制解除（IC担当用）
    UPDATE projects SET editing_user_id = NULL, editing_started_at = NULL
    WHERE id = p_project_id;
    RETURN true;
  ELSE
    -- 自分のロックのみ解除
    UPDATE projects SET editing_user_id = NULL, editing_started_at = NULL
    WHERE id = p_project_id AND editing_user_id = p_user_id;
    RETURN FOUND;
  END IF;
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

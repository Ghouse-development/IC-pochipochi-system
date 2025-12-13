-- ========================================
-- IC-pochipochi-system マルチテナント拡張SQL
-- ========================================
-- 作成日: 2025-12-13
-- 目的: フランチャイズ工務店対応、Gハウス本部管理権限
--
-- 機能:
-- ① フランチャイズ先工務店が独自にカスタマイズ可能
-- ② Gハウス本部は全工務店のデータを閲覧可能
-- ③ 全国展開に対応したスケーラブル設計
-- ========================================

-- ========================================
-- PART 1: 組織（Organization）テーブル
-- ========================================

-- 組織タイプ
DO $$ BEGIN
  CREATE TYPE organization_type AS ENUM ('headquarters', 'franchise', 'partner');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- ユーザーロール拡張（super_admin追加）
DO $$ BEGIN
  ALTER TYPE user_role ADD VALUE IF NOT EXISTS 'super_admin';
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- 組織テーブル
CREATE TABLE IF NOT EXISTS organizations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  name_kana VARCHAR(255),
  code VARCHAR(50) UNIQUE NOT NULL,
  type organization_type NOT NULL DEFAULT 'franchise',
  parent_id UUID REFERENCES organizations(id),

  -- 連絡先
  email VARCHAR(255),
  phone VARCHAR(50),
  address TEXT,
  postal_code VARCHAR(20),
  prefecture VARCHAR(50),
  city VARCHAR(100),

  -- 設定
  logo_url TEXT,
  primary_color VARCHAR(7) DEFAULT '#2563eb',
  is_active BOOLEAN DEFAULT true,
  can_customize_pricing BOOLEAN DEFAULT false,
  can_add_products BOOLEAN DEFAULT false,

  -- メタデータ
  settings JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 組織メンバーテーブル（ユーザーと組織の関連）
CREATE TABLE IF NOT EXISTS organization_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR(50) NOT NULL DEFAULT 'member',
  is_primary BOOLEAN DEFAULT true,
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),

  UNIQUE(organization_id, user_id)
);

-- ========================================
-- PART 2: 組織別カスタマイズテーブル
-- ========================================

-- 組織別商品設定（価格上書き、非表示等）
CREATE TABLE IF NOT EXISTS organization_item_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  item_id UUID NOT NULL REFERENCES items(id) ON DELETE CASCADE,

  -- カスタマイズ
  is_visible BOOLEAN DEFAULT true,
  custom_price DECIMAL(12, 2),
  custom_note TEXT,
  display_order INTEGER,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),

  UNIQUE(organization_id, item_id)
);

-- 組織別カテゴリ設定
CREATE TABLE IF NOT EXISTS organization_category_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,

  is_visible BOOLEAN DEFAULT true,
  display_order INTEGER,
  custom_name VARCHAR(255),

  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),

  UNIQUE(organization_id, category_id)
);

-- ========================================
-- PART 3: usersテーブル拡張
-- ========================================

-- usersテーブルに組織関連カラム追加
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'organization_id') THEN
    ALTER TABLE users ADD COLUMN organization_id UUID REFERENCES organizations(id);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'is_super_admin') THEN
    ALTER TABLE users ADD COLUMN is_super_admin BOOLEAN DEFAULT false;
  END IF;
END $$;

-- ========================================
-- PART 4: プロジェクトテーブル拡張
-- ========================================

-- projectsテーブルに組織カラム追加
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'organization_id') THEN
    ALTER TABLE projects ADD COLUMN organization_id UUID REFERENCES organizations(id);
  END IF;
END $$;

-- ========================================
-- PART 5: インデックス
-- ========================================

CREATE INDEX IF NOT EXISTS idx_organizations_code ON organizations(code);
CREATE INDEX IF NOT EXISTS idx_organizations_type ON organizations(type);
CREATE INDEX IF NOT EXISTS idx_organizations_parent ON organizations(parent_id);
CREATE INDEX IF NOT EXISTS idx_organization_members_org ON organization_members(organization_id);
CREATE INDEX IF NOT EXISTS idx_organization_members_user ON organization_members(user_id);
CREATE INDEX IF NOT EXISTS idx_organization_item_settings_org ON organization_item_settings(organization_id);
CREATE INDEX IF NOT EXISTS idx_organization_category_settings_org ON organization_category_settings(organization_id);
CREATE INDEX IF NOT EXISTS idx_users_organization ON users(organization_id);
CREATE INDEX IF NOT EXISTS idx_projects_organization ON projects(organization_id);

-- ========================================
-- PART 6: RLSポリシー
-- ========================================

-- 組織テーブルのRLS
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;

-- super_adminは全組織閲覧可能
CREATE POLICY "Super admins can view all organizations" ON organizations
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.auth_id = auth.uid()
      AND users.is_super_admin = true
    )
  );

-- 一般ユーザーは自組織のみ
CREATE POLICY "Users can view their organization" ON organizations
  FOR SELECT
  TO authenticated
  USING (
    id IN (
      SELECT organization_id FROM organization_members
      WHERE user_id = (
        SELECT id FROM users WHERE auth_id = auth.uid()
      )
    )
  );

-- 組織メンバーのRLS
ALTER TABLE organization_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "View organization members" ON organization_members
  FOR SELECT
  TO authenticated
  USING (
    organization_id IN (
      SELECT organization_id FROM organization_members om
      JOIN users u ON om.user_id = u.id
      WHERE u.auth_id = auth.uid()
    )
    OR EXISTS (
      SELECT 1 FROM users WHERE auth_id = auth.uid() AND is_super_admin = true
    )
  );

-- プロジェクトのRLS更新
DROP POLICY IF EXISTS "projects_select_policy" ON projects;
CREATE POLICY "projects_select_policy" ON projects
  FOR SELECT
  TO authenticated
  USING (
    -- 自分のプロジェクト
    created_by = (SELECT id FROM users WHERE auth_id = auth.uid())
    -- または同じ組織のプロジェクト
    OR organization_id IN (
      SELECT organization_id FROM organization_members
      WHERE user_id = (SELECT id FROM users WHERE auth_id = auth.uid())
    )
    -- またはsuper_admin
    OR EXISTS (
      SELECT 1 FROM users WHERE auth_id = auth.uid() AND is_super_admin = true
    )
  );

-- ========================================
-- PART 7: 初期データ（Gハウス本部）
-- ========================================

-- Gハウス本部を組織として登録
INSERT INTO organizations (code, name, type, is_active, can_customize_pricing, can_add_products, settings)
VALUES (
  'GHOUSE_HQ',
  'Gハウス本部',
  'headquarters',
  true,
  true,
  true,
  '{"is_main_headquarters": true}'::jsonb
)
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  type = EXCLUDED.type,
  settings = EXCLUDED.settings;

-- ========================================
-- PART 8: ビュー（統計・ダッシュボード用）
-- ========================================

-- 組織別統計ビュー
CREATE OR REPLACE VIEW organization_statistics AS
SELECT
  o.id as organization_id,
  o.name as organization_name,
  o.code as organization_code,
  o.type as organization_type,
  COUNT(DISTINCT om.user_id) as member_count,
  COUNT(DISTINCT p.id) as project_count,
  COUNT(DISTINCT s.id) as selection_count,
  o.created_at
FROM organizations o
LEFT JOIN organization_members om ON o.id = om.organization_id
LEFT JOIN projects p ON o.id = p.organization_id
LEFT JOIN selections s ON p.id = s.project_id
GROUP BY o.id, o.name, o.code, o.type, o.created_at;

-- 全国展開ダッシュボード用ビュー
CREATE OR REPLACE VIEW nationwide_dashboard AS
SELECT
  o.prefecture,
  COUNT(DISTINCT o.id) as organization_count,
  COUNT(DISTINCT p.id) as total_projects,
  SUM(CASE WHEN p.status = 'completed' THEN 1 ELSE 0 END) as completed_projects,
  COUNT(DISTINCT om.user_id) as total_users
FROM organizations o
LEFT JOIN organization_members om ON o.id = om.organization_id
LEFT JOIN projects p ON o.id = p.organization_id
WHERE o.is_active = true
GROUP BY o.prefecture;

-- ========================================
-- PART 9: 便利関数
-- ========================================

-- ユーザーがsuper_adminか確認
CREATE OR REPLACE FUNCTION is_user_super_admin(user_auth_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM users
    WHERE auth_id = user_auth_id
    AND is_super_admin = true
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ユーザーの所属組織を取得
CREATE OR REPLACE FUNCTION get_user_organizations(user_auth_id UUID)
RETURNS TABLE (
  organization_id UUID,
  organization_name VARCHAR,
  organization_code VARCHAR,
  organization_type organization_type,
  member_role VARCHAR
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    o.id,
    o.name,
    o.code,
    o.type,
    om.role
  FROM organizations o
  JOIN organization_members om ON o.id = om.organization_id
  JOIN users u ON om.user_id = u.id
  WHERE u.auth_id = user_auth_id
  AND o.is_active = true;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 組織のカスタマイズ価格を取得
CREATE OR REPLACE FUNCTION get_item_price_for_organization(
  p_item_id UUID,
  p_organization_id UUID,
  p_product_id UUID
)
RETURNS DECIMAL AS $$
DECLARE
  custom_price DECIMAL;
  base_price DECIMAL;
BEGIN
  -- カスタム価格を確認
  SELECT ois.custom_price INTO custom_price
  FROM organization_item_settings ois
  WHERE ois.item_id = p_item_id
  AND ois.organization_id = p_organization_id
  AND ois.custom_price IS NOT NULL;

  IF custom_price IS NOT NULL THEN
    RETURN custom_price;
  END IF;

  -- ベース価格を返す
  SELECT ip.price INTO base_price
  FROM item_pricing ip
  WHERE ip.item_id = p_item_id
  AND ip.product_id = p_product_id;

  RETURN COALESCE(base_price, 0);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ========================================
-- 完了メッセージ
-- ========================================
DO $$
BEGIN
  RAISE NOTICE 'マルチテナント拡張SQLが正常に実行されました';
  RAISE NOTICE '- organizationsテーブル作成';
  RAISE NOTICE '- organization_membersテーブル作成';
  RAISE NOTICE '- organization_item_settingsテーブル作成';
  RAISE NOTICE '- RLSポリシー設定';
  RAISE NOTICE '- Gハウス本部を初期登録';
END $$;

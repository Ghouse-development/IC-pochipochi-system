-- ========================================
-- Complete Database Schema for LIFE X Catalog
-- ========================================

-- 必要な拡張
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ========================================
-- 1. カテゴリテーブル（階層構造対応）
-- ========================================
CREATE TABLE IF NOT EXISTS categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  icon VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_categories_parent_id ON categories(parent_id);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_categories_display_order ON categories(display_order);

-- ========================================
-- 2. 商品マスターテーブル
-- ========================================
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  product_code VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(500) NOT NULL,
  manufacturer VARCHAR(255),
  model_number VARCHAR(255),
  description TEXT,
  unit VARCHAR(50) DEFAULT 'set',
  is_active BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  meta_keywords TEXT,
  meta_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_product_code ON products(product_code);
CREATE INDEX IF NOT EXISTS idx_products_model_number ON products(model_number);
CREATE INDEX IF NOT EXISTS idx_products_is_active ON products(is_active);

-- ========================================
-- 3. 商品バリエーション
-- ========================================
CREATE TABLE IF NOT EXISTS product_variants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  variant_code VARCHAR(255) UNIQUE NOT NULL,
  color_name VARCHAR(255) NOT NULL,
  color_code VARCHAR(100),
  color_hex VARCHAR(7),
  material VARCHAR(255),
  finish VARCHAR(255),
  size_info JSONB,
  is_standard BOOLEAN DEFAULT true,
  stock_status VARCHAR(50) DEFAULT 'in_stock',
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_product_variants_product_id ON product_variants(product_id);
CREATE INDEX IF NOT EXISTS idx_product_variants_variant_code ON product_variants(variant_code);
CREATE INDEX IF NOT EXISTS idx_product_variants_is_standard ON product_variants(is_standard);

-- ========================================
-- 4. 商品バリエーション価格
-- ========================================
CREATE TABLE IF NOT EXISTS variant_pricing (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  variant_id UUID REFERENCES product_variants(id) ON DELETE CASCADE,
  plan_type VARCHAR(50) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  discount_price DECIMAL(10, 2),
  is_active BOOLEAN DEFAULT true,
  effective_date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(variant_id, plan_type)
);

CREATE INDEX IF NOT EXISTS idx_variant_pricing_variant_id ON variant_pricing(variant_id);
CREATE INDEX IF NOT EXISTS idx_variant_pricing_plan_type ON variant_pricing(plan_type);

-- ========================================
-- 5. 商品バリエーション画像
-- ========================================
CREATE TABLE IF NOT EXISTS variant_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  variant_id UUID REFERENCES product_variants(id) ON DELETE CASCADE,
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

CREATE INDEX IF NOT EXISTS idx_variant_images_variant_id ON variant_images(variant_id);
CREATE INDEX IF NOT EXISTS idx_variant_images_is_primary ON variant_images(is_primary);
CREATE INDEX IF NOT EXISTS idx_variant_images_display_order ON variant_images(display_order);

-- ========================================
-- 6. アクセス解析
-- ========================================
CREATE TABLE IF NOT EXISTS product_analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  variant_id UUID REFERENCES product_variants(id) ON DELETE CASCADE,
  event_type VARCHAR(50) NOT NULL,
  user_id VARCHAR(255),
  session_id VARCHAR(255),
  ip_address INET,
  user_agent TEXT,
  referrer TEXT,
  page_url TEXT,
  event_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_product_analytics_product_id ON product_analytics(product_id);
CREATE INDEX IF NOT EXISTS idx_product_analytics_variant_id ON product_analytics(variant_id);
CREATE INDEX IF NOT EXISTS idx_product_analytics_event_type ON product_analytics(event_type);
CREATE INDEX IF NOT EXISTS idx_product_analytics_created_at ON product_analytics(created_at);
CREATE INDEX IF NOT EXISTS idx_product_analytics_session_id ON product_analytics(session_id);

-- ========================================
-- 7. 人気商品ビュー
-- ========================================
CREATE OR REPLACE VIEW popular_products AS
SELECT
  p.id,
  p.name,
  p.product_code,
  COUNT(DISTINCT pa.session_id) AS view_count,
  COUNT(*) FILTER (WHERE pa.event_type = 'add_to_cart') AS cart_count,
  COUNT(*) FILTER (WHERE pa.event_type = 'click') AS click_count,
  MAX(pa.created_at) AS last_interaction
FROM products p
LEFT JOIN product_analytics pa
  ON p.id = pa.product_id AND pa.created_at > CURRENT_DATE - INTERVAL '30 days'
GROUP BY p.id, p.name, p.product_code
ORDER BY view_count DESC;

-- ========================================
-- 8. カテゴリ階層ビュー（型不一致を修正）
-- ========================================
CREATE OR REPLACE VIEW category_tree AS
WITH RECURSIVE category_hierarchy AS (
  SELECT
    c.id,
    c.parent_id,
    c.name,
    c.slug,
    0 AS level,
    (ARRAY[c.name::text])::text[] AS path,
    (ARRAY[c.id::text])::text[]  AS id_path
  FROM categories c
  WHERE c.parent_id IS NULL

  UNION ALL

  SELECT
    c2.id,
    c2.parent_id,
    c2.name,
    c2.slug,
    ch.level + 1,
    ch.path   || c2.name::text,
    ch.id_path || c2.id::text
  FROM categories c2
  JOIN category_hierarchy ch ON c2.parent_id = ch.id
)
SELECT * FROM category_hierarchy;

-- ========================================
-- RLS ポリシー（DROP → CREATE）
-- ========================================

-- Categories
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view categories" ON categories;
CREATE POLICY "Public can view categories" ON categories
  FOR SELECT USING (is_active = true);
DROP POLICY IF EXISTS "Authenticated can manage categories" ON categories;
CREATE POLICY "Authenticated can manage categories" ON categories
  FOR ALL USING (auth.role() = 'authenticated');

-- Products
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view products" ON products;
CREATE POLICY "Public can view products" ON products
  FOR SELECT USING (is_active = true);
DROP POLICY IF EXISTS "Authenticated can manage products" ON products;
CREATE POLICY "Authenticated can manage products" ON products
  FOR ALL USING (auth.role() = 'authenticated');

-- Product Variants
ALTER TABLE product_variants ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view variants" ON product_variants;
CREATE POLICY "Public can view variants" ON product_variants
  FOR SELECT USING (true);
DROP POLICY IF EXISTS "Authenticated can manage variants" ON product_variants;
CREATE POLICY "Authenticated can manage variants" ON product_variants
  FOR ALL USING (auth.role() = 'authenticated');

-- Variant Pricing
ALTER TABLE variant_pricing ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view pricing" ON variant_pricing;
CREATE POLICY "Public can view pricing" ON variant_pricing
  FOR SELECT USING (is_active = true);
DROP POLICY IF EXISTS "Authenticated can manage pricing" ON variant_pricing;
CREATE POLICY "Authenticated can manage pricing" ON variant_pricing
  FOR ALL USING (auth.role() = 'authenticated');

-- Variant Images
ALTER TABLE variant_images ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view variant images" ON variant_images;
CREATE POLICY "Public can view variant images" ON variant_images
  FOR SELECT USING (true);
DROP POLICY IF EXISTS "Authenticated can manage variant images" ON variant_images;
CREATE POLICY "Authenticated can manage variant images" ON variant_images
  FOR ALL USING (auth.role() = 'authenticated');

-- Analytics
ALTER TABLE product_analytics ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can insert analytics" ON product_analytics;
CREATE POLICY "Public can insert analytics" ON product_analytics
  FOR INSERT WITH CHECK (true);
DROP POLICY IF EXISTS "Authenticated can view analytics" ON product_analytics;
CREATE POLICY "Authenticated can view analytics" ON product_analytics
  FOR SELECT USING (auth.role() = 'authenticated');

-- ========================================
-- トリガー
-- ========================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_categories_updated_at') THEN
    CREATE TRIGGER update_categories_updated_at
      BEFORE UPDATE ON categories
      FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_products_updated_at') THEN
    CREATE TRIGGER update_products_updated_at
      BEFORE UPDATE ON products
      FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_product_variants_updated_at') THEN
    CREATE TRIGGER update_product_variants_updated_at
      BEFORE UPDATE ON product_variants
      FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_variant_pricing_updated_at') THEN
    CREATE TRIGGER update_variant_pricing_updated_at
      BEFORE UPDATE ON variant_pricing
      FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_variant_images_updated_at') THEN
    CREATE TRIGGER update_variant_images_updated_at
      BEFORE UPDATE ON variant_images
      FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
  END IF;
END
$$;

-- ========================================
-- サンプルデータ
-- ========================================
INSERT INTO categories (name, slug, description, display_order) VALUES
('エクステリア', 'exterior', '外装関連製品', 1),
('インテリア',  'interior',  '内装関連製品', 2),
('水回り設備',  'water-equipment', '水回り関連製品', 3)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO categories (parent_id, name, slug, description, display_order)
SELECT id, '門扉', 'exterior-gates', '門扉製品', 1
FROM categories WHERE slug = 'exterior'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO categories (parent_id, name, slug, description, display_order)
SELECT id, 'フェンス', 'exterior-fences', 'フェンス製品', 2
FROM categories WHERE slug = 'exterior'
ON CONFLICT (slug) DO NOTHING;

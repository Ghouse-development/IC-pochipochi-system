-- ========================================
-- RLSポリシー修正（公開読み取り許可）
-- ========================================
-- 実行前提: 001_complete_schema.sql が実行済みであること
-- 目的: 匿名ユーザー（anon）でもマスターデータを読み取り可能にする
-- ========================================

-- ========================================
-- 1. products テーブル - 公開読み取り
-- ========================================
DROP POLICY IF EXISTS "Authenticated users can view products" ON products;
DROP POLICY IF EXISTS "Public can view products" ON products;
CREATE POLICY "Public can view products" ON products
  FOR SELECT USING (is_active = true);

-- ========================================
-- 2. categories テーブル - 公開読み取り
-- ========================================
DROP POLICY IF EXISTS "Authenticated users can view categories" ON categories;
DROP POLICY IF EXISTS "Public can view categories" ON categories;
CREATE POLICY "Public can view categories" ON categories
  FOR SELECT USING (is_active = true);

-- ========================================
-- 3. items テーブル - 公開読み取り
-- ========================================
DROP POLICY IF EXISTS "Authenticated users can view items" ON items;
DROP POLICY IF EXISTS "Public can view items" ON items;
CREATE POLICY "Public can view items" ON items
  FOR SELECT USING (is_active = true);

-- ========================================
-- 4. item_variants テーブル - 公開読み取り
-- ========================================
DROP POLICY IF EXISTS "Authenticated users can view item_variants" ON item_variants;
DROP POLICY IF EXISTS "Public can view item_variants" ON item_variants;
CREATE POLICY "Public can view item_variants" ON item_variants
  FOR SELECT USING (true);

-- ========================================
-- 5. item_pricing テーブル - 公開読み取り
-- ========================================
DROP POLICY IF EXISTS "Authenticated users can view item_pricing" ON item_pricing;
DROP POLICY IF EXISTS "Public can view item_pricing" ON item_pricing;
CREATE POLICY "Public can view item_pricing" ON item_pricing
  FOR SELECT USING (is_available = true);

-- ========================================
-- 6. units テーブル - 公開読み取り
-- ========================================
DROP POLICY IF EXISTS "Authenticated users can view units" ON units;
DROP POLICY IF EXISTS "Public can view units" ON units;
CREATE POLICY "Public can view units" ON units
  FOR SELECT USING (true);

-- ========================================
-- 7. system_settings テーブル - 公開読み取り（編集可能なもののみ）
-- ========================================
DROP POLICY IF EXISTS "Authenticated users can view system_settings" ON system_settings;
DROP POLICY IF EXISTS "Public can view system_settings" ON system_settings;
CREATE POLICY "Public can view system_settings" ON system_settings
  FOR SELECT USING (true);

-- ========================================
-- 確認クエリ
-- ========================================
-- SELECT COUNT(*) FROM products;
-- SELECT COUNT(*) FROM categories;
-- SELECT COUNT(*) FROM items;
-- SELECT COUNT(*) FROM item_variants;
-- SELECT COUNT(*) FROM item_pricing;

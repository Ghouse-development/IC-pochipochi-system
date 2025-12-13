-- ========================================
-- RLSポリシー修正スクリプト
-- 既存ポリシーを削除して再作成
-- ========================================

-- 既存ポリシーを削除
DROP POLICY IF EXISTS "Authenticated users can view products" ON products;
DROP POLICY IF EXISTS "Authenticated users can view categories" ON categories;
DROP POLICY IF EXISTS "Authenticated users can view items" ON items;
DROP POLICY IF EXISTS "Authenticated users can view item_variants" ON item_variants;
DROP POLICY IF EXISTS "Authenticated users can view item_variant_images" ON item_variant_images;
DROP POLICY IF EXISTS "Authenticated users can view item_pricing" ON item_pricing;
DROP POLICY IF EXISTS "Authenticated users can view rooms" ON rooms;
DROP POLICY IF EXISTS "Authenticated users can view preset_templates" ON preset_templates;
DROP POLICY IF EXISTS "Authenticated users can view units" ON units;

-- 匿名ユーザー用ポリシーも削除（存在する場合）
DROP POLICY IF EXISTS "Anyone can view products" ON products;
DROP POLICY IF EXISTS "Anyone can view categories" ON categories;
DROP POLICY IF EXISTS "Anyone can view items" ON items;
DROP POLICY IF EXISTS "Anyone can view item_variants" ON item_variants;
DROP POLICY IF EXISTS "Anyone can view item_variant_images" ON item_variant_images;
DROP POLICY IF EXISTS "Anyone can view item_pricing" ON item_pricing;
DROP POLICY IF EXISTS "Anyone can view rooms" ON rooms;
DROP POLICY IF EXISTS "Anyone can view preset_templates" ON preset_templates;
DROP POLICY IF EXISTS "Anyone can view units" ON units;

-- 書き込み用ポリシーも削除（存在する場合）
DROP POLICY IF EXISTS "Service role can manage products" ON products;
DROP POLICY IF EXISTS "Service role can manage categories" ON categories;
DROP POLICY IF EXISTS "Service role can manage items" ON items;
DROP POLICY IF EXISTS "Service role can manage item_variants" ON item_variants;
DROP POLICY IF EXISTS "Service role can manage item_variant_images" ON item_variant_images;
DROP POLICY IF EXISTS "Service role can manage item_pricing" ON item_pricing;

-- ========================================
-- 新しいポリシーを作成（匿名アクセス許可）
-- ========================================

-- 誰でも読める（認証不要）
CREATE POLICY "Anyone can view products" ON products FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view categories" ON categories FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view items" ON items FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view item_variants" ON item_variants FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view item_variant_images" ON item_variant_images FOR SELECT USING (true);
CREATE POLICY "Anyone can view item_pricing" ON item_pricing FOR SELECT USING (true);
CREATE POLICY "Anyone can view rooms" ON rooms FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view preset_templates" ON preset_templates FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view units" ON units FOR SELECT USING (true);

-- サービスロール用（書き込み権限）
CREATE POLICY "Service role can manage products" ON products FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role can manage categories" ON categories FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role can manage items" ON items FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role can manage item_variants" ON item_variants FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role can manage item_variant_images" ON item_variant_images FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role can manage item_pricing" ON item_pricing FOR ALL USING (true) WITH CHECK (true);

-- ========================================
-- 完了メッセージ
-- ========================================
DO $$
BEGIN
  RAISE NOTICE 'RLSポリシーが正常に更新されました。';
END
$$;

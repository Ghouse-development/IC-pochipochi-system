-- ========================================
-- カテゴリマスターデータ（シードデータ）
-- ========================================

-- 外装カテゴリ
INSERT INTO categories (category_type, name, slug, description, display_order, is_required) VALUES
  ('exterior', '外壁', 'exterior-wall', '外壁材', 1, true),
  ('exterior', 'ポーチ', 'porch', 'ポーチタイル・玄関アプローチ', 2, false),
  ('exterior', '屋根', 'roof', '屋根材', 3, true),
  ('exterior', '樋', 'gutter', '雨樋', 4, false),
  ('exterior', '軒天', 'soffit', '軒天材', 5, false),
  ('exterior', '庇', 'awning', '庇（ひさし）', 6, false),
  ('exterior', 'シャッター', 'shutter', '電動ガレージシャッター', 7, false),
  ('exterior', '窓', 'window', '窓サッシ（APW330/APW430）', 8, true),
  ('exterior', '玄関ドア', 'entrance-door', '玄関ドア', 9, true),
  ('exterior', '外部設備', 'exterior-equipment', '外部設備（給湯器等）', 10, false)
ON CONFLICT (slug) DO NOTHING;

-- 外壁サブカテゴリ
INSERT INTO categories (parent_id, category_type, name, slug, description, display_order)
SELECT id, 'exterior', 'ニチハ', 'exterior-wall-nichiha', 'ニチハ社製外壁材', 1
FROM categories WHERE slug = 'exterior-wall'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO categories (parent_id, category_type, name, slug, description, display_order)
SELECT id, 'exterior', 'KMEW', 'exterior-wall-kmew', 'KMEW社製外壁材', 2
FROM categories WHERE slug = 'exterior-wall'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO categories (parent_id, category_type, name, slug, description, display_order)
SELECT id, 'exterior', 'IG工業', 'exterior-wall-ig', 'IG工業社製外壁材', 3
FROM categories WHERE slug = 'exterior-wall'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO categories (parent_id, category_type, name, slug, description, display_order)
SELECT id, 'exterior', 'AICA', 'exterior-wall-aica', 'AICA社製外壁材', 4
FROM categories WHERE slug = 'exterior-wall'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO categories (parent_id, category_type, name, slug, description, display_order)
SELECT id, 'exterior', 'KONOSHIMA', 'exterior-wall-konoshima', 'KONOSHIMA社製外壁材', 5
FROM categories WHERE slug = 'exterior-wall'
ON CONFLICT (slug) DO NOTHING;

-- ポーチサブカテゴリ
INSERT INTO categories (parent_id, category_type, name, slug, description, display_order)
SELECT id, 'exterior', '名古屋モザイク', 'porch-nagoya-mosaic', '名古屋モザイク工業社製タイル', 1
FROM categories WHERE slug = 'porch'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO categories (parent_id, category_type, name, slug, description, display_order)
SELECT id, 'exterior', 'LIXIL', 'porch-lixil', 'LIXIL社製タイル', 2
FROM categories WHERE slug = 'porch'
ON CONFLICT (slug) DO NOTHING;

-- 窓サブカテゴリ
INSERT INTO categories (parent_id, category_type, name, slug, description, display_order)
SELECT id, 'exterior', 'APW330', 'window-apw330', 'YKK AP APW330シリーズ', 1
FROM categories WHERE slug = 'window'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO categories (parent_id, category_type, name, slug, description, display_order)
SELECT id, 'exterior', 'APW430', 'window-apw430', 'YKK AP APW430シリーズ', 2
FROM categories WHERE slug = 'window'
ON CONFLICT (slug) DO NOTHING;

-- 内装カテゴリ
INSERT INTO categories (category_type, name, slug, description, display_order, is_required) VALUES
  ('interior', 'フローリング', 'flooring', '床材・フローリング', 1, true),
  ('interior', '壁クロス', 'wall-cross', '壁紙・クロス', 2, true),
  ('interior', '天井クロス', 'ceiling-cross', '天井クロス', 3, true),
  ('interior', '巾木', 'baseboard', '巾木', 4, false),
  ('interior', '建具', 'interior-door', '室内ドア・建具', 5, true),
  ('interior', 'アクセントクロス', 'accent-cross', 'アクセントクロス', 6, false),
  ('interior', '造作材', 'molding', '造作材・廻縁', 7, false)
ON CONFLICT (slug) DO NOTHING;

-- 設備カテゴリ
INSERT INTO categories (category_type, name, slug, description, display_order, is_required) VALUES
  ('equipment', 'キッチン', 'kitchen-equipment', 'システムキッチン', 1, true),
  ('equipment', 'バス', 'bathroom-equipment', 'ユニットバス', 2, true),
  ('equipment', '洗面化粧台', 'vanity', '洗面化粧台', 3, true),
  ('equipment', 'トイレ', 'toilet-equipment', 'トイレ', 4, true),
  ('equipment', '給湯器', 'water-heater', '給湯器', 5, true),
  ('equipment', 'エアコン', 'air-conditioner', 'エアコン', 6, false),
  ('equipment', '照明', 'lighting', '照明器具', 7, false),
  ('equipment', 'インターホン', 'intercom', 'インターホン', 8, false),
  ('equipment', '換気システム', 'ventilation', '換気システム', 9, false)
ON CONFLICT (slug) DO NOTHING;

-- その他カテゴリ
INSERT INTO categories (category_type, name, slug, description, display_order, is_required) VALUES
  ('other', '造園', 'landscaping', '造園・外構', 1, false),
  ('other', 'カーテン', 'curtain', 'カーテン・ブラインド', 2, false),
  ('other', '家具', 'furniture', '造作家具', 3, false),
  ('other', 'オプション工事', 'optional-work', 'オプション工事', 4, false)
ON CONFLICT (slug) DO NOTHING;

-- ========================================
-- 完了メッセージ
-- ========================================
DO $$
BEGIN
  RAISE NOTICE 'カテゴリマスターデータが正常に投入されました。';
END
$$;

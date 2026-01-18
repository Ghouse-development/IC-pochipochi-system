-- テストお客様A/B/Cを追加（西野秀樹のお客様として）
-- 2026-01-18
-- テストA: 全てのアイテムを選択している状態
-- テストB: 半分ほどのアイテムを選択している状態
-- テストC: 設定のみ完了して、アイテムを選択していない状態

-- 1. テストお客様ユーザーを作成
INSERT INTO users (email, full_name, role, is_active)
VALUES
  ('test-a@example.com', 'テストA', 'user', true),
  ('test-b@example.com', 'テストB', 'user', true),
  ('test-c@example.com', 'テストC', 'user', true)
ON CONFLICT (email) DO UPDATE SET
  full_name = EXCLUDED.full_name,
  is_active = true;

-- 2. 西野秀樹のuser IDを取得
-- 3. 各テストお客様のプロジェクトを作成

-- テストA様のプロジェクト（全選択）
INSERT INTO projects (
  project_code,
  name,
  product_id,
  status,
  customer_name,
  construction_name,
  construction_address,
  region_category,
  fire_resistance,
  construction_method,
  floors,
  floor_area,
  ceiling_height,
  structure,
  building_standard,
  coordinator_id
)
SELECT
  'TEST-A-001',
  'テストA様邸',
  (SELECT id FROM products WHERE code = 'PREMIUM' LIMIT 1),
  'customer_selecting',
  'テストA',
  'テストA様邸新築工事',
  '大阪府大阪市中央区1-1-1',
  '6地域',
  '省令準耐火',
  '在来工法',
  2,
  120.50,
  2.40,
  '木造',
  'LIXIL標準',
  (SELECT id FROM users WHERE email = 'hn@g-house.osaka.jp' LIMIT 1)
ON CONFLICT (project_code) DO UPDATE SET
  name = EXCLUDED.name,
  status = EXCLUDED.status,
  updated_at = NOW();

-- テストB様のプロジェクト（半分選択）
INSERT INTO projects (
  project_code,
  name,
  product_id,
  status,
  customer_name,
  construction_name,
  construction_address,
  region_category,
  fire_resistance,
  construction_method,
  floors,
  floor_area,
  ceiling_height,
  structure,
  building_standard,
  coordinator_id
)
SELECT
  'TEST-B-001',
  'テストB様邸',
  (SELECT id FROM products WHERE code = 'STANDARD' LIMIT 1),
  'customer_selecting',
  'テストB',
  'テストB様邸新築工事',
  '大阪府堺市北区2-2-2',
  '6地域',
  '一般',
  '在来工法',
  2,
  105.00,
  2.40,
  '木造',
  'LIXIL標準',
  (SELECT id FROM users WHERE email = 'hn@g-house.osaka.jp' LIMIT 1)
ON CONFLICT (project_code) DO UPDATE SET
  name = EXCLUDED.name,
  status = EXCLUDED.status,
  updated_at = NOW();

-- テストC様のプロジェクト（設定のみ）
INSERT INTO projects (
  project_code,
  name,
  product_id,
  status,
  customer_name,
  construction_name,
  construction_address,
  region_category,
  fire_resistance,
  construction_method,
  floors,
  floor_area,
  ceiling_height,
  structure,
  building_standard,
  coordinator_id
)
SELECT
  'TEST-C-001',
  'テストC様邸',
  (SELECT id FROM products WHERE code = 'STANDARD' LIMIT 1),
  'draft',
  'テストC',
  'テストC様邸新築工事',
  '大阪府吹田市3-3-3',
  '5地域',
  '一般',
  '在来工法',
  2,
  98.00,
  2.40,
  '木造',
  'LIXIL標準',
  (SELECT id FROM users WHERE email = 'hn@g-house.osaka.jp' LIMIT 1)
ON CONFLICT (project_code) DO UPDATE SET
  name = EXCLUDED.name,
  status = EXCLUDED.status,
  updated_at = NOW();

-- 4. テストA様のプロジェクトに選択を追加（全カテゴリから選択）
-- 外壁・屋根・玄関ドア・窓・床材・壁紙などから選択

-- テストA: 多くのカテゴリから選択（外装・内装・設備）
INSERT INTO selections (project_id, item_id, variant_id, quantity, unit_price)
SELECT
  (SELECT id FROM projects WHERE project_code = 'TEST-A-001'),
  i.id,
  (SELECT id FROM item_variants WHERE item_id = i.id LIMIT 1),
  1,
  COALESCE((SELECT price FROM item_pricing WHERE item_id = i.id LIMIT 1), 0)
FROM items i
WHERE i.category_id IN (
  SELECT id FROM categories WHERE slug IN (
    'exterior-wall', 'roof', 'entrance-door', 'window', 'porch', 'gutter', 'soffit',
    'flooring', 'interior-door', 'stairs', 'wallpaper',
    'kitchen', 'bathroom', 'toilet', 'washroom'
  )
)
  AND i.is_active = true
ON CONFLICT (project_id, item_id, variant_id) DO NOTHING;

-- テストB: 外壁・床材・キッチン・バスルームのみ（半分程度）
INSERT INTO selections (project_id, item_id, variant_id, quantity, unit_price)
SELECT
  (SELECT id FROM projects WHERE project_code = 'TEST-B-001'),
  i.id,
  (SELECT id FROM item_variants WHERE item_id = i.id LIMIT 1),
  1,
  COALESCE((SELECT price FROM item_pricing WHERE item_id = i.id LIMIT 1), 0)
FROM items i
WHERE i.category_id IN (
  SELECT id FROM categories WHERE slug IN ('exterior-wall', 'flooring', 'kitchen', 'bathroom')
)
  AND i.is_active = true
ON CONFLICT (project_id, item_id, variant_id) DO NOTHING;

-- テストC: 選択なし（プロジェクトのみ）

-- 5. 確認用クエリ
-- SELECT p.project_code, p.name, p.customer_name, p.status, COUNT(s.id) as selection_count
-- FROM projects p
-- LEFT JOIN selections s ON s.project_id = p.id
-- WHERE p.project_code LIKE 'TEST-%'
-- GROUP BY p.id;

-- 天井高UP工事・勾配天井 設計アイテム追加
-- 2026年1月 pochi005.txt ⑤対応

-- 設計カテゴリIDを取得
DO $$
DECLARE
  design_category_id uuid;
BEGIN
  -- 設計カテゴリが存在するか確認、なければ作成
  SELECT id INTO design_category_id FROM categories WHERE slug = 'design' LIMIT 1;
  IF design_category_id IS NULL THEN
    INSERT INTO categories (name, slug, category_type, display_order, is_active)
    VALUES ('設計', 'design', 'design', 0, true)
    RETURNING id INTO design_category_id;
  END IF;

  -- 天井高UP +100mm アイテム
  INSERT INTO items (id, name, slug, category_id, description, is_active, display_order, created_at, updated_at)
  VALUES (
    'design-ceiling-up-100',
    '天井高UP +100mm工事',
    'ceiling-up-100',
    design_category_id,
    '天井高を標準2400mmから+100mm（2500mm）にUPする工事。施工面積（㎡）に応じて金額が加算されます。',
    true,
    110,
    NOW(),
    NOW()
  )
  ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    updated_at = NOW();

  -- 天井高UP +200mm アイテム
  INSERT INTO items (id, name, slug, category_id, description, is_active, display_order, created_at, updated_at)
  VALUES (
    'design-ceiling-up-200',
    '天井高UP +200mm工事',
    'ceiling-up-200',
    design_category_id,
    '天井高を標準2400mmから+200mm（2600mm）にUPする工事。施工面積（㎡）に応じて金額が加算されます。',
    true,
    111,
    NOW(),
    NOW()
  )
  ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    updated_at = NOW();

  -- 勾配天井アイテム
  INSERT INTO items (id, name, slug, category_id, description, is_active, display_order, created_at, updated_at)
  VALUES (
    'design-slope-ceiling',
    '勾配天井工事',
    'slope-ceiling',
    design_category_id,
    '勾配天井工事。施工面積（㎡）に応じて金額が加算されます。',
    true,
    112,
    NOW(),
    NOW()
  )
  ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    updated_at = NOW();

  -- バリアント追加（デフォルト）
  INSERT INTO item_variants (id, item_id, name, sku, is_default, display_order, created_at, updated_at)
  VALUES
    ('design-ceiling-up-100-default', 'design-ceiling-up-100', '天井高UP +100mm', 'CEILING-UP-100', true, 1, NOW(), NOW()),
    ('design-ceiling-up-200-default', 'design-ceiling-up-200', '天井高UP +200mm', 'CEILING-UP-200', true, 1, NOW(), NOW()),
    ('design-slope-ceiling-default', 'design-slope-ceiling', '勾配天井', 'SLOPE-CEILING', true, 1, NOW(), NOW())
  ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    updated_at = NOW();

  -- 価格設定（単価/㎡）
  -- 天井高UP +100mm: ¥5,000/㎡（仮単価）
  INSERT INTO item_pricing (variant_id, plan_code, price_type, price, unit, created_at, updated_at)
  VALUES
    ('design-ceiling-up-100-default', 'LACIE', 'option', 5000, '㎡', NOW(), NOW()),
    ('design-ceiling-up-100-default', 'LATTICE', 'option', 5000, '㎡', NOW(), NOW()),
    ('design-ceiling-up-100-default', 'LIFE_PLUS', 'option', 5000, '㎡', NOW(), NOW())
  ON CONFLICT (variant_id, plan_code) DO UPDATE SET
    price = EXCLUDED.price,
    unit = EXCLUDED.unit,
    updated_at = NOW();

  -- 天井高UP +200mm: ¥8,000/㎡（仮単価）
  INSERT INTO item_pricing (variant_id, plan_code, price_type, price, unit, created_at, updated_at)
  VALUES
    ('design-ceiling-up-200-default', 'LACIE', 'option', 8000, '㎡', NOW(), NOW()),
    ('design-ceiling-up-200-default', 'LATTICE', 'option', 8000, '㎡', NOW(), NOW()),
    ('design-ceiling-up-200-default', 'LIFE_PLUS', 'option', 8000, '㎡', NOW(), NOW())
  ON CONFLICT (variant_id, plan_code) DO UPDATE SET
    price = EXCLUDED.price,
    unit = EXCLUDED.unit,
    updated_at = NOW();

  -- 勾配天井: ¥10,000/㎡（仮単価）
  INSERT INTO item_pricing (variant_id, plan_code, price_type, price, unit, created_at, updated_at)
  VALUES
    ('design-slope-ceiling-default', 'LACIE', 'option', 10000, '㎡', NOW(), NOW()),
    ('design-slope-ceiling-default', 'LATTICE', 'option', 10000, '㎡', NOW(), NOW()),
    ('design-slope-ceiling-default', 'LIFE_PLUS', 'option', 10000, '㎡', NOW(), NOW())
  ON CONFLICT (variant_id, plan_code) DO UPDATE SET
    price = EXCLUDED.price,
    unit = EXCLUDED.unit,
    updated_at = NOW();

END $$;

-- 確認クエリ
SELECT i.id, i.name, iv.name as variant_name, ip.price, ip.unit, ip.plan_code
FROM items i
JOIN item_variants iv ON iv.item_id = i.id
JOIN item_pricing ip ON ip.variant_id = iv.id
WHERE i.id IN ('design-ceiling-up-100', 'design-ceiling-up-200', 'design-slope-ceiling')
ORDER BY i.display_order, ip.plan_code;

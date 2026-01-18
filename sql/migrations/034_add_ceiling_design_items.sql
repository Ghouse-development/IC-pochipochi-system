-- 天井高UP工事・勾配天井 設計アイテム追加
-- 2026年1月 pochi005.txt ⑤対応

-- 設計カテゴリIDを取得してアイテム追加
DO $$
DECLARE
  design_category_id uuid;
  item_id_100 uuid;
  item_id_200 uuid;
  item_id_slope uuid;
  variant_id_100 uuid;
  variant_id_200 uuid;
  variant_id_slope uuid;
  lacie_product_id uuid;
  lattice_product_id uuid;
  life_plus_product_id uuid;
BEGIN
  -- 設計カテゴリが存在するか確認、なければ作成
  -- category_type enumは 'exterior', 'interior', 'equipment', 'other' のみ有効
  SELECT id INTO design_category_id FROM categories WHERE slug = 'design' LIMIT 1;
  IF design_category_id IS NULL THEN
    INSERT INTO categories (name, slug, category_type, display_order, is_active)
    VALUES ('設計', 'design', 'other', 0, true)
    RETURNING id INTO design_category_id;
  END IF;

  -- プロダクトIDを取得
  SELECT id INTO lacie_product_id FROM products WHERE code = 'LACIE' LIMIT 1;
  SELECT id INTO lattice_product_id FROM products WHERE code = 'LATTICE' LIMIT 1;
  SELECT id INTO life_plus_product_id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1;

  -- 天井高UP +100mm アイテム
  INSERT INTO items (item_code, name, category_id, category_name, note, is_active, display_order)
  VALUES (
    'design-ceiling-up-100',
    '天井高UP +100mm工事',
    design_category_id,
    '設計',
    '天井高を標準2400mmから+100mm（2500mm）にUPする工事。施工面積（㎡）に応じて金額が加算されます。',
    true,
    110
  )
  ON CONFLICT (item_code) DO UPDATE SET
    name = EXCLUDED.name,
    note = EXCLUDED.note,
    updated_at = NOW()
  RETURNING id INTO item_id_100;

  IF item_id_100 IS NULL THEN
    SELECT id INTO item_id_100 FROM items WHERE item_code = 'design-ceiling-up-100';
  END IF;

  -- 天井高UP +200mm アイテム
  INSERT INTO items (item_code, name, category_id, category_name, note, is_active, display_order)
  VALUES (
    'design-ceiling-up-200',
    '天井高UP +200mm工事',
    design_category_id,
    '設計',
    '天井高を標準2400mmから+200mm（2600mm）にUPする工事。施工面積（㎡）に応じて金額が加算されます。',
    true,
    111
  )
  ON CONFLICT (item_code) DO UPDATE SET
    name = EXCLUDED.name,
    note = EXCLUDED.note,
    updated_at = NOW()
  RETURNING id INTO item_id_200;

  IF item_id_200 IS NULL THEN
    SELECT id INTO item_id_200 FROM items WHERE item_code = 'design-ceiling-up-200';
  END IF;

  -- 勾配天井アイテム
  INSERT INTO items (item_code, name, category_id, category_name, note, is_active, display_order)
  VALUES (
    'design-slope-ceiling',
    '勾配天井工事',
    design_category_id,
    '設計',
    '勾配天井工事。施工面積（㎡）に応じて金額が加算されます。',
    true,
    112
  )
  ON CONFLICT (item_code) DO UPDATE SET
    name = EXCLUDED.name,
    note = EXCLUDED.note,
    updated_at = NOW()
  RETURNING id INTO item_id_slope;

  IF item_id_slope IS NULL THEN
    SELECT id INTO item_id_slope FROM items WHERE item_code = 'design-slope-ceiling';
  END IF;

  -- バリアント追加（デフォルト） - 天井高UP +100mm
  -- item_variants: item_id, variant_code, color_name, color_code, description, is_active, display_order
  INSERT INTO item_variants (item_id, variant_code, color_name, description, is_active, display_order)
  VALUES (item_id_100, 'CEILING-UP-100', '天井高UP +100mm', '施工面積単価', true, 1)
  ON CONFLICT (item_id, variant_code) DO UPDATE SET
    color_name = EXCLUDED.color_name,
    description = EXCLUDED.description,
    updated_at = NOW()
  RETURNING id INTO variant_id_100;

  IF variant_id_100 IS NULL THEN
    SELECT id INTO variant_id_100 FROM item_variants WHERE item_id = item_id_100 AND variant_code = 'CEILING-UP-100';
  END IF;

  -- バリアント追加（デフォルト） - 天井高UP +200mm
  INSERT INTO item_variants (item_id, variant_code, color_name, description, is_active, display_order)
  VALUES (item_id_200, 'CEILING-UP-200', '天井高UP +200mm', '施工面積単価', true, 1)
  ON CONFLICT (item_id, variant_code) DO UPDATE SET
    color_name = EXCLUDED.color_name,
    description = EXCLUDED.description,
    updated_at = NOW()
  RETURNING id INTO variant_id_200;

  IF variant_id_200 IS NULL THEN
    SELECT id INTO variant_id_200 FROM item_variants WHERE item_id = item_id_200 AND variant_code = 'CEILING-UP-200';
  END IF;

  -- バリアント追加（デフォルト） - 勾配天井
  INSERT INTO item_variants (item_id, variant_code, color_name, description, is_active, display_order)
  VALUES (item_id_slope, 'SLOPE-CEILING', '勾配天井', '施工面積単価', true, 1)
  ON CONFLICT (item_id, variant_code) DO UPDATE SET
    color_name = EXCLUDED.color_name,
    description = EXCLUDED.description,
    updated_at = NOW()
  RETURNING id INTO variant_id_slope;

  IF variant_id_slope IS NULL THEN
    SELECT id INTO variant_id_slope FROM item_variants WHERE item_id = item_id_slope AND variant_code = 'SLOPE-CEILING';
  END IF;

  -- 価格設定（単価/㎡）
  -- item_pricing: item_id, variant_id, product_id, is_available, is_standard, price, installation_cost
  -- 天井高UP +100mm: ¥5,000/㎡（仮単価）
  IF lacie_product_id IS NOT NULL THEN
    INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
    VALUES (item_id_100, variant_id_100, lacie_product_id, true, false, 5000)
    ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
      price = EXCLUDED.price,
      updated_at = NOW();
  END IF;

  IF lattice_product_id IS NOT NULL THEN
    INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
    VALUES (item_id_100, variant_id_100, lattice_product_id, true, false, 5000)
    ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
      price = EXCLUDED.price,
      updated_at = NOW();
  END IF;

  IF life_plus_product_id IS NOT NULL THEN
    INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
    VALUES (item_id_100, variant_id_100, life_plus_product_id, true, false, 5000)
    ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
      price = EXCLUDED.price,
      updated_at = NOW();
  END IF;

  -- 天井高UP +200mm: ¥8,000/㎡（仮単価）
  IF lacie_product_id IS NOT NULL THEN
    INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
    VALUES (item_id_200, variant_id_200, lacie_product_id, true, false, 8000)
    ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
      price = EXCLUDED.price,
      updated_at = NOW();
  END IF;

  IF lattice_product_id IS NOT NULL THEN
    INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
    VALUES (item_id_200, variant_id_200, lattice_product_id, true, false, 8000)
    ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
      price = EXCLUDED.price,
      updated_at = NOW();
  END IF;

  IF life_plus_product_id IS NOT NULL THEN
    INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
    VALUES (item_id_200, variant_id_200, life_plus_product_id, true, false, 8000)
    ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
      price = EXCLUDED.price,
      updated_at = NOW();
  END IF;

  -- 勾配天井: ¥10,000/㎡（仮単価）
  IF lacie_product_id IS NOT NULL THEN
    INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
    VALUES (item_id_slope, variant_id_slope, lacie_product_id, true, false, 10000)
    ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
      price = EXCLUDED.price,
      updated_at = NOW();
  END IF;

  IF lattice_product_id IS NOT NULL THEN
    INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
    VALUES (item_id_slope, variant_id_slope, lattice_product_id, true, false, 10000)
    ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
      price = EXCLUDED.price,
      updated_at = NOW();
  END IF;

  IF life_plus_product_id IS NOT NULL THEN
    INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
    VALUES (item_id_slope, variant_id_slope, life_plus_product_id, true, false, 10000)
    ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
      price = EXCLUDED.price,
      updated_at = NOW();
  END IF;

  RAISE NOTICE '設計アイテム追加完了: item_100=%, item_200=%, item_slope=%', item_id_100, item_id_200, item_id_slope;
END $$;

-- 確認クエリ
SELECT i.item_code, i.name, iv.color_name as variant_name, ip.price, p.name as plan_name
FROM items i
LEFT JOIN item_variants iv ON iv.item_id = i.id
LEFT JOIN item_pricing ip ON ip.variant_id = iv.id
LEFT JOIN products p ON p.id = ip.product_id
WHERE i.item_code IN ('design-ceiling-up-100', 'design-ceiling-up-200', 'design-slope-ceiling')
ORDER BY i.display_order, p.name;

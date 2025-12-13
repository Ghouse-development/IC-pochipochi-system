-- ========================================
-- 制約修正SQL
-- ON CONFLICTを使うために必要なユニーク制約を追加
-- ========================================

-- categories.slug にユニーク制約がない場合は追加
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'categories_slug_key'
  ) THEN
    -- 重複するslugがあれば削除
    DELETE FROM categories a USING categories b
    WHERE a.id < b.id AND a.slug = b.slug;

    -- ユニーク制約を追加
    ALTER TABLE categories ADD CONSTRAINT categories_slug_key UNIQUE (slug);
    RAISE NOTICE 'Added UNIQUE constraint on categories.slug';
  ELSE
    RAISE NOTICE 'UNIQUE constraint on categories.slug already exists';
  END IF;
END $$;

-- items.item_code にユニーク制約がない場合は追加
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'items_item_code_key'
  ) THEN
    -- 重複するitem_codeがあれば削除
    DELETE FROM items a USING items b
    WHERE a.id < b.id AND a.item_code = b.item_code;

    -- ユニーク制約を追加
    ALTER TABLE items ADD CONSTRAINT items_item_code_key UNIQUE (item_code);
    RAISE NOTICE 'Added UNIQUE constraint on items.item_code';
  ELSE
    RAISE NOTICE 'UNIQUE constraint on items.item_code already exists';
  END IF;
END $$;

-- units.name にユニーク制約がない場合は追加
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'units_name_key'
  ) THEN
    -- 重複するnameがあれば削除
    DELETE FROM units a USING units b
    WHERE a.id < b.id AND a.name = b.name;

    -- ユニーク制約を追加
    ALTER TABLE units ADD CONSTRAINT units_name_key UNIQUE (name);
    RAISE NOTICE 'Added UNIQUE constraint on units.name';
  ELSE
    RAISE NOTICE 'UNIQUE constraint on units.name already exists';
  END IF;
END $$;

-- item_pricing の複合ユニーク制約
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'item_pricing_item_variant_product_key'
  ) THEN
    -- 重複があれば古いものを削除
    DELETE FROM item_pricing a USING item_pricing b
    WHERE a.id < b.id
      AND a.item_id = b.item_id
      AND COALESCE(a.variant_id::text, '') = COALESCE(b.variant_id::text, '')
      AND a.product_id = b.product_id;

    -- ユニーク制約を追加
    ALTER TABLE item_pricing ADD CONSTRAINT item_pricing_item_variant_product_key
      UNIQUE (item_id, variant_id, product_id);
    RAISE NOTICE 'Added UNIQUE constraint on item_pricing(item_id, variant_id, product_id)';
  ELSE
    RAISE NOTICE 'UNIQUE constraint on item_pricing already exists';
  END IF;
END $$;

SELECT 'Constraints verified/added successfully' as status;

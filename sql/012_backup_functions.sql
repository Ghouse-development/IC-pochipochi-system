-- ========================================
-- バックアップ・メンテナンス用SQL関数
-- Supabase Proプラン向け
-- ========================================

-- ========================================
-- 1. データ統計ビュー
-- ========================================

CREATE OR REPLACE VIEW data_statistics AS
SELECT
  'items' as table_name,
  COUNT(*) as total_count,
  COUNT(*) FILTER (WHERE is_active = true) as active_count,
  MAX(updated_at) as last_updated
FROM items
UNION ALL
SELECT
  'item_variants',
  COUNT(*),
  COUNT(*) FILTER (WHERE is_active = true),
  MAX(updated_at)
FROM item_variants
UNION ALL
SELECT
  'item_pricing',
  COUNT(*),
  COUNT(*),
  MAX(updated_at)
FROM item_pricing
UNION ALL
SELECT
  'categories',
  COUNT(*),
  COUNT(*) FILTER (WHERE is_active = true),
  MAX(updated_at)
FROM categories
UNION ALL
SELECT
  'projects',
  COUNT(*),
  COUNT(*) FILTER (WHERE status != 'cancelled'),
  MAX(updated_at)
FROM projects
UNION ALL
SELECT
  'selections',
  COUNT(*),
  COUNT(*),
  MAX(updated_at)
FROM selections;

-- ========================================
-- 2. 月次レポートビュー
-- ========================================

CREATE OR REPLACE VIEW monthly_report AS
SELECT
  DATE_TRUNC('month', created_at) as month,
  COUNT(DISTINCT project_id) as projects_count,
  COUNT(*) as selections_count,
  SUM(calculated_price) as total_amount
FROM selections
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY month DESC;

-- ========================================
-- 3. 人気商品ランキングビュー
-- ========================================

CREATE OR REPLACE VIEW popular_items_ranking AS
SELECT
  i.id,
  i.name,
  i.manufacturer,
  c.name as category_name,
  COUNT(s.id) as selection_count,
  COUNT(DISTINCT s.project_id) as project_count,
  RANK() OVER (ORDER BY COUNT(s.id) DESC) as rank
FROM items i
LEFT JOIN selections s ON i.id = s.item_id
LEFT JOIN categories c ON i.category_id = c.id
WHERE i.is_active = true
GROUP BY i.id, i.name, i.manufacturer, c.name
ORDER BY selection_count DESC;

-- ========================================
-- 4. データ整合性チェック関数
-- ========================================

CREATE OR REPLACE FUNCTION check_data_integrity()
RETURNS TABLE (
  check_name TEXT,
  status TEXT,
  details TEXT
) AS $$
BEGIN
  -- 孤立バリアントチェック
  RETURN QUERY
  SELECT
    'orphan_variants'::TEXT,
    CASE WHEN COUNT(*) = 0 THEN 'OK' ELSE 'WARNING' END,
    COUNT(*)::TEXT || ' orphan variants found'
  FROM item_variants v
  LEFT JOIN items i ON v.item_id = i.id
  WHERE i.id IS NULL;

  -- 価格未設定チェック
  RETURN QUERY
  SELECT
    'missing_pricing'::TEXT,
    CASE WHEN COUNT(*) = 0 THEN 'OK' ELSE 'WARNING' END,
    COUNT(*)::TEXT || ' variants without pricing'
  FROM item_variants v
  LEFT JOIN item_pricing p ON v.id = p.variant_id
  WHERE p.id IS NULL AND v.is_active = true;

  -- 重複商品コードチェック
  RETURN QUERY
  SELECT
    'duplicate_item_codes'::TEXT,
    CASE WHEN COUNT(*) = 0 THEN 'OK' ELSE 'ERROR' END,
    COUNT(*)::TEXT || ' duplicate codes'
  FROM (
    SELECT item_code, COUNT(*) as cnt
    FROM items
    GROUP BY item_code
    HAVING COUNT(*) > 1
  ) dup;

  -- カテゴリなし商品チェック
  RETURN QUERY
  SELECT
    'items_without_category'::TEXT,
    CASE WHEN COUNT(*) = 0 THEN 'OK' ELSE 'WARNING' END,
    COUNT(*)::TEXT || ' items without category'
  FROM items
  WHERE category_id IS NULL AND is_active = true;
END;
$$ LANGUAGE plpgsql;

-- ========================================
-- 5. データクリーンアップ関数
-- ========================================

CREATE OR REPLACE FUNCTION cleanup_old_data(days_to_keep INTEGER DEFAULT 365)
RETURNS TABLE (
  table_name TEXT,
  deleted_count INTEGER
) AS $$
DECLARE
  cutoff_date TIMESTAMP := NOW() - (days_to_keep || ' days')::INTERVAL;
  count_deleted INTEGER;
BEGIN
  -- 古い閲覧ログを削除
  DELETE FROM view_logs WHERE created_at < cutoff_date;
  GET DIAGNOSTICS count_deleted = ROW_COUNT;
  table_name := 'view_logs';
  deleted_count := count_deleted;
  RETURN NEXT;

  -- 古い監査ログを削除（1年以上前）
  DELETE FROM audit_logs WHERE created_at < cutoff_date;
  GET DIAGNOSTICS count_deleted = ROW_COUNT;
  table_name := 'audit_logs';
  deleted_count := count_deleted;
  RETURN NEXT;
END;
$$ LANGUAGE plpgsql;

-- ========================================
-- 6. 商品一括価格更新関数
-- ========================================

CREATE OR REPLACE FUNCTION bulk_update_prices(
  manufacturer_name TEXT,
  percentage_change DECIMAL
)
RETURNS INTEGER AS $$
DECLARE
  updated_count INTEGER;
BEGIN
  UPDATE item_pricing
  SET price = price * (1 + percentage_change / 100),
      updated_at = NOW()
  WHERE item_id IN (
    SELECT id FROM items WHERE manufacturer = manufacturer_name
  );
  GET DIAGNOSTICS updated_count = ROW_COUNT;
  RETURN updated_count;
END;
$$ LANGUAGE plpgsql;

-- ========================================
-- 7. バックアップ用エクスポートビュー
-- ========================================

CREATE OR REPLACE VIEW export_items_full AS
SELECT
  i.item_code,
  i.name as item_name,
  i.manufacturer,
  i.model_number,
  i.note,
  c.name as category_name,
  c.category_type,
  u.symbol as unit,
  v.color_name,
  v.color_code,
  p.code as plan_code,
  ip.price,
  ip.is_standard
FROM items i
LEFT JOIN categories c ON i.category_id = c.id
LEFT JOIN units u ON i.unit_id = u.id
LEFT JOIN item_variants v ON i.id = v.item_id
LEFT JOIN item_pricing ip ON v.id = ip.variant_id
LEFT JOIN products p ON ip.product_id = p.id
WHERE i.is_active = true
ORDER BY c.category_type, c.display_order, i.display_order, v.display_order;

-- ========================================
-- 8. 使い方
-- ========================================

/*
-- データ統計を確認
SELECT * FROM data_statistics;

-- 月次レポートを確認
SELECT * FROM monthly_report;

-- 人気商品ランキング
SELECT * FROM popular_items_ranking LIMIT 20;

-- データ整合性チェック
SELECT * FROM check_data_integrity();

-- 1年以上前のログを削除
SELECT * FROM cleanup_old_data(365);

-- ニチハ製品の価格を5%アップ
SELECT bulk_update_prices('ニチハ', 5);

-- 全データエクスポート（CSV用）
SELECT * FROM export_items_full;
*/

-- ========================================
-- 完了メッセージ
-- ========================================
DO $$
BEGIN
  RAISE NOTICE 'バックアップ・メンテナンス用関数が作成されました。';
END
$$;

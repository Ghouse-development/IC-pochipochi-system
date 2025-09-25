-- ========================================
-- 変更履歴（監査ログ）システム
-- ========================================

-- 1. ユーザーテーブル（簡易版）
CREATE TABLE IF NOT EXISTS app_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'viewer', -- 'admin', 'editor', 'viewer'
  is_active BOOLEAN DEFAULT true,
  last_login_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 2. 監査ログテーブル
CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES app_users(id),
  user_email VARCHAR(255),
  user_name VARCHAR(255),
  table_name VARCHAR(100) NOT NULL,
  record_id VARCHAR(255) NOT NULL,
  action VARCHAR(20) NOT NULL, -- 'INSERT', 'UPDATE', 'DELETE'
  old_data JSONB,
  new_data JSONB,
  changes JSONB, -- 変更された項目のみ
  ip_address INET,
  user_agent TEXT,
  session_id VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- インデックス
CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_table_name ON audit_logs(table_name);
CREATE INDEX idx_audit_logs_record_id ON audit_logs(record_id);
CREATE INDEX idx_audit_logs_action ON audit_logs(action);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at DESC);

-- 3. 監査ログ記録用関数
CREATE OR REPLACE FUNCTION record_audit_log()
RETURNS TRIGGER AS $$
DECLARE
  v_old_data JSONB;
  v_new_data JSONB;
  v_changes JSONB;
  v_user_id UUID;
  v_user_email VARCHAR(255);
  v_user_name VARCHAR(255);
BEGIN
  -- 現在のユーザー情報を取得（Supabaseのauth.uid()を使用）
  BEGIN
    v_user_id := auth.uid();

    -- ユーザー情報を取得
    IF v_user_id IS NOT NULL THEN
      SELECT email, name INTO v_user_email, v_user_name
      FROM app_users
      WHERE id = v_user_id;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    v_user_id := NULL;
    v_user_email := 'system';
    v_user_name := 'System';
  END;

  -- アクションに応じてデータを設定
  IF TG_OP = 'INSERT' THEN
    v_new_data := to_jsonb(NEW);
    v_changes := v_new_data;

    INSERT INTO audit_logs (
      user_id,
      user_email,
      user_name,
      table_name,
      record_id,
      action,
      new_data,
      changes
    ) VALUES (
      v_user_id,
      COALESCE(v_user_email, 'unknown'),
      COALESCE(v_user_name, 'Unknown User'),
      TG_TABLE_NAME,
      NEW.id::TEXT,
      'INSERT',
      v_new_data,
      v_changes
    );

  ELSIF TG_OP = 'UPDATE' THEN
    v_old_data := to_jsonb(OLD);
    v_new_data := to_jsonb(NEW);

    -- 変更された項目のみを抽出
    SELECT jsonb_object_agg(key, value) INTO v_changes
    FROM (
      SELECT key, value
      FROM jsonb_each(v_new_data)
      WHERE NOT (v_old_data->key = value OR (v_old_data->key IS NULL AND value IS NULL))
    ) AS changed_fields;

    -- 変更がある場合のみ記録
    IF v_changes IS NOT NULL AND v_changes != '{}'::jsonb THEN
      INSERT INTO audit_logs (
        user_id,
        user_email,
        user_name,
        table_name,
        record_id,
        action,
        old_data,
        new_data,
        changes
      ) VALUES (
        v_user_id,
        COALESCE(v_user_email, 'unknown'),
        COALESCE(v_user_name, 'Unknown User'),
        TG_TABLE_NAME,
        NEW.id::TEXT,
        'UPDATE',
        v_old_data,
        v_new_data,
        v_changes
      );
    END IF;

  ELSIF TG_OP = 'DELETE' THEN
    v_old_data := to_jsonb(OLD);

    INSERT INTO audit_logs (
      user_id,
      user_email,
      user_name,
      table_name,
      record_id,
      action,
      old_data
    ) VALUES (
      v_user_id,
      COALESCE(v_user_email, 'unknown'),
      COALESCE(v_user_name, 'Unknown User'),
      TG_TABLE_NAME,
      OLD.id::TEXT,
      'DELETE',
      v_old_data
    );
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. 監査対象テーブルにトリガーを設定
-- カテゴリテーブル
CREATE TRIGGER audit_categories_trigger
AFTER INSERT OR UPDATE OR DELETE ON categories
FOR EACH ROW EXECUTE FUNCTION record_audit_log();

-- 商品テーブル
CREATE TRIGGER audit_products_trigger
AFTER INSERT OR UPDATE OR DELETE ON products
FOR EACH ROW EXECUTE FUNCTION record_audit_log();

-- 商品バリエーションテーブル
CREATE TRIGGER audit_product_variants_trigger
AFTER INSERT OR UPDATE OR DELETE ON product_variants
FOR EACH ROW EXECUTE FUNCTION record_audit_log();

-- 価格テーブル
CREATE TRIGGER audit_variant_pricing_trigger
AFTER INSERT OR UPDATE OR DELETE ON variant_pricing
FOR EACH ROW EXECUTE FUNCTION record_audit_log();

-- 画像テーブル
CREATE TRIGGER audit_variant_images_trigger
AFTER INSERT OR UPDATE OR DELETE ON variant_images
FOR EACH ROW EXECUTE FUNCTION record_audit_log();

-- プラン利用可能性テーブル
CREATE TRIGGER audit_product_plan_availability_trigger
AFTER INSERT OR UPDATE OR DELETE ON product_plan_availability
FOR EACH ROW EXECUTE FUNCTION record_audit_log();

-- 5. 変更履歴ビュー
CREATE OR REPLACE VIEW audit_log_summary AS
SELECT
  al.id,
  al.created_at,
  al.user_name,
  al.user_email,
  al.table_name,
  al.action,
  al.record_id,
  CASE
    WHEN al.table_name = 'products' THEN (al.new_data->>'name')::TEXT
    WHEN al.table_name = 'categories' THEN (al.new_data->>'name')::TEXT
    WHEN al.table_name = 'product_variants' THEN (al.new_data->>'color_name')::TEXT
    ELSE al.record_id
  END AS record_name,
  al.changes,
  jsonb_array_length(COALESCE(jsonb_agg(DISTINCT key) FILTER (WHERE key IS NOT NULL), '[]'::jsonb)) AS changed_fields_count
FROM audit_logs al
LEFT JOIN LATERAL jsonb_each(al.changes) ON true
GROUP BY al.id, al.created_at, al.user_name, al.user_email, al.table_name, al.action, al.record_id, al.new_data, al.changes
ORDER BY al.created_at DESC;

-- 6. 日次変更サマリービュー
CREATE OR REPLACE VIEW daily_change_summary AS
SELECT
  DATE(created_at) as change_date,
  user_name,
  user_email,
  COUNT(*) as total_changes,
  COUNT(CASE WHEN action = 'INSERT' THEN 1 END) as inserts,
  COUNT(CASE WHEN action = 'UPDATE' THEN 1 END) as updates,
  COUNT(CASE WHEN action = 'DELETE' THEN 1 END) as deletes,
  jsonb_object_agg(table_name, table_count) as changes_by_table
FROM (
  SELECT
    created_at,
    user_name,
    user_email,
    action,
    table_name,
    COUNT(*) OVER (PARTITION BY DATE(created_at), user_name, table_name) as table_count
  FROM audit_logs
) AS daily_logs
GROUP BY DATE(created_at), user_name, user_email
ORDER BY change_date DESC;

-- 7. RLSポリシー
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- 管理者は全ての監査ログを見れる
CREATE POLICY "Admins can view all audit logs" ON audit_logs
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM app_users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ユーザーは自分の変更履歴のみ見れる
CREATE POLICY "Users can view own audit logs" ON audit_logs
  FOR SELECT USING (user_id = auth.uid());

-- 監査ログは削除できない（データ整合性のため）
CREATE POLICY "No one can delete audit logs" ON audit_logs
  FOR DELETE USING (false);

-- 8. サンプルユーザーデータ
INSERT INTO app_users (email, name, role) VALUES
('admin@stylebook.com', '管理者', 'admin'),
('editor@stylebook.com', '編集者', 'editor'),
('viewer@stylebook.com', '閲覧者', 'viewer')
ON CONFLICT (email) DO NOTHING;

-- ========================================
-- 使用例
-- ========================================
-- 最近の変更履歴を取得
-- SELECT * FROM audit_log_summary LIMIT 50;

-- 特定のユーザーの変更履歴
-- SELECT * FROM audit_log_summary WHERE user_email = 'admin@stylebook.com';

-- 特定のテーブルの変更履歴
-- SELECT * FROM audit_log_summary WHERE table_name = 'products';

-- 日次変更サマリー
-- SELECT * FROM daily_change_summary WHERE change_date >= CURRENT_DATE - INTERVAL '7 days';
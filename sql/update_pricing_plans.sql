-- ========================================
-- 価格プラン更新用SQL
-- 5つのプランに対応: LIFE, LIFE+, HOURS, LACIE, LIFE X
-- ========================================

-- 1. 既存のvariant_pricingテーブルを更新
ALTER TABLE variant_pricing
DROP CONSTRAINT IF EXISTS variant_pricing_plan_type_check;

-- plan_typeの値を更新
UPDATE variant_pricing
SET plan_type = 'LIFE_PLUS'
WHERE plan_type = 'LIFE+';

UPDATE variant_pricing
SET plan_type = 'LIFE_X'
WHERE plan_type = 'LIFE X';

-- 2. プラン利用可能性テーブルを作成
CREATE TABLE IF NOT EXISTS product_plan_availability (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  plan_type VARCHAR(50) NOT NULL,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(product_id, plan_type)
);

-- インデックスを作成
CREATE INDEX idx_product_plan_availability_product_id ON product_plan_availability(product_id);
CREATE INDEX idx_product_plan_availability_plan_type ON product_plan_availability(plan_type);

-- 3. プランマスターテーブルを作成
CREATE TABLE IF NOT EXISTS plan_master (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  plan_code VARCHAR(50) UNIQUE NOT NULL,
  plan_name VARCHAR(100) NOT NULL,
  display_name VARCHAR(100) NOT NULL,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  color_code VARCHAR(7),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- プランマスターデータを挿入
INSERT INTO plan_master (plan_code, plan_name, display_name, description, display_order, color_code) VALUES
('LIFE', 'LIFE', 'LIFE', 'LIFEプラン', 1, '#4A90E2'),
('LIFE_PLUS', 'LIFE+', 'LIFE+', 'LIFE+プラン', 2, '#7B68EE'),
('HOURS', 'HOURS', 'HOURS', 'HOURSプラン', 3, '#50C878'),
('LACIE', 'LACIE', 'LACIE', 'LACIEプラン', 4, '#FFB347'),
('LIFE_X', 'LIFE X', 'LIFE X', 'LIFE Xプラン', 5, '#FF6B6B')
ON CONFLICT (plan_code) DO UPDATE
SET
  plan_name = EXCLUDED.plan_name,
  display_name = EXCLUDED.display_name,
  description = EXCLUDED.description;

-- 4. variant_pricingテーブルを更新してplan_typeの制約を追加
ALTER TABLE variant_pricing
ADD CONSTRAINT variant_pricing_plan_type_check
CHECK (plan_type IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE', 'LIFE_X'));

-- 5. 価格表示用のビューを作成
CREATE OR REPLACE VIEW product_pricing_view AS
SELECT
  p.id as product_id,
  p.name as product_name,
  p.product_code,
  pv.id as variant_id,
  pv.color_name,
  pv.variant_code,
  pm.plan_code,
  pm.display_name as plan_name,
  pm.color_code as plan_color,
  vp.price,
  vp.discount_price,
  ppa.is_available as plan_available
FROM products p
JOIN product_variants pv ON p.id = pv.product_id
LEFT JOIN variant_pricing vp ON pv.id = vp.variant_id
LEFT JOIN plan_master pm ON vp.plan_type = pm.plan_code
LEFT JOIN product_plan_availability ppa ON p.id = ppa.product_id AND pm.plan_code = ppa.plan_type
WHERE p.is_active = true
ORDER BY p.display_order, pv.display_order, pm.display_order;

-- 6. RLSポリシーを追加
ALTER TABLE product_plan_availability ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view plan availability" ON product_plan_availability
  FOR SELECT USING (true);

CREATE POLICY "Authenticated can manage plan availability" ON product_plan_availability
  FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE plan_master ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view plans" ON plan_master
  FOR SELECT USING (is_active = true);

CREATE POLICY "Authenticated can manage plans" ON plan_master
  FOR ALL USING (auth.role() = 'authenticated');

-- 7. トリガーを追加
CREATE TRIGGER update_product_plan_availability_updated_at
BEFORE UPDATE ON product_plan_availability
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_plan_master_updated_at
BEFORE UPDATE ON plan_master
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 8. 既存商品にデフォルトのプラン利用可能性を設定
INSERT INTO product_plan_availability (product_id, plan_type, is_available)
SELECT p.id, pm.plan_code, true
FROM products p
CROSS JOIN plan_master pm
ON CONFLICT (product_id, plan_type) DO NOTHING;
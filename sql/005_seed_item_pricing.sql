-- ========================================
-- アイテム価格マスターデータ（シードデータ）
-- ========================================
-- 実行前提: 004_seed_exterior_items.sql が実行済みであること
-- 価格は税抜き（税別）
-- item_pricing テーブル構造:
--   item_id, variant_id, product_id, is_available, is_standard, price, installation_cost
-- ========================================

-- ========================================
-- 1. 外壁 - ニチハ標準 (全プラン標準 = 差額0円)
-- ========================================

-- モナビストーンV - 全プラン標準
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'NICHIHA-MONABI-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- シャルムロックV - 全プラン標準
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'NICHIHA-CHARM-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- リーガストーン調V - 全プラン標準
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'NICHIHA-REGA-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ディスタシェイドV - 全プラン標準
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'NICHIHA-DISTA-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- グレインウッドV - 全プラン標準
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'NICHIHA-GRAIN-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ========================================
-- 2. 外壁 - ニチハ Fu-ge PREMIUM (OP ¥4,500/㎡)
-- ========================================

-- スティルランバー プレミアム
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'NICHIHA-STIL-PREM-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ミルシュタイン プレミアム
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'NICHIHA-MILS-PREM-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ========================================
-- 3. 外壁 - KMEW (OP ¥4,500/㎡)
-- ========================================

-- ハーモレイド
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'KMEW-HARMO-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- モダンスリット18
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'KMEW-MODERN-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ========================================
-- 4. 外壁 - IG工業 金属サイディング
-- ========================================

-- SPビレクト (OP ¥9,500/㎡)
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 9500, false, true
FROM items i, products p
WHERE i.item_code = 'IG-SPBILECT-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ガルスパン (OP ¥5,000/㎡)
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'IG-GARUSPAN-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ========================================
-- 5. 外壁 - AICA ジョリパット
-- ========================================

-- エンシェントブリック (OP ¥12,500/㎡ LIFE/LIFE+, ¥8,000/㎡ HOURS/LACIE)
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 12500, false, true
FROM items i, products p
WHERE i.item_code = 'AICA-ANCIENT-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 8000, false, true
FROM items i, products p
WHERE i.item_code = 'AICA-ANCIENT-001'
  AND p.code IN ('HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ========================================
-- 6. 外壁 - SOLIDO
-- ========================================

-- SOLIDO typeM_LAP (OP ¥21,500/㎡ LIFE/LIFE+, ¥17,000/㎡ HOURS/LACIE)
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 21500, false, true
FROM items i, products p
WHERE i.item_code = 'KMEW-SOLIDO-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 17000, false, true
FROM items i, products p
WHERE i.item_code = 'KMEW-SOLIDO-001'
  AND p.code IN ('HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ========================================
-- 7. ポーチ
-- ========================================

-- モルタル金鏝抑え (標準・差額0円)
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'PORCH-MORTAR-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ネイチャーII (OP ¥22,000/㎡)
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 22000, false, true
FROM items i, products p
WHERE i.item_code = 'PORCH-NATURE2-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ベスパ (OP ¥22,000/㎡)
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 22000, false, true
FROM items i, products p
WHERE i.item_code = 'PORCH-VESPA-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ========================================
-- 8. 屋根材
-- ========================================

-- ニスクカラーSGL (標準)
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'ROOF-NISQSGL-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ========================================
-- 9. 樋
-- ========================================

-- ファインスケアNF-I型 (標準)
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'GUTTER-FINE-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- S30 縦樋 (標準)
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'GUTTER-S30-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ========================================
-- 10. 軒天
-- ========================================

-- エンボス (標準)
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'SOFFIT-EMBOSS-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ========================================
-- 11. 窓
-- ========================================

-- APW330 - LIFE/LIFE+ 標準, HOURS/LACIE はAPW430が標準なのでコストダウン扱い
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'WINDOW-APW330-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- HOURS/LACIEでAPW330を選ぶとコストダウン（差額 -30,000円/窓）
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, -30000, false, true
FROM items i, products p
WHERE i.item_code = 'WINDOW-APW330-001'
  AND p.code IN ('HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- APW430 - HOURS/LACIE 標準, LIFE/LIFE+ はOP
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'WINDOW-APW430-001'
  AND p.code IN ('HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- LIFE/LIFE+でAPW430を選ぶと差額 +30,000円/窓
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'WINDOW-APW430-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ========================================
-- 12. 玄関ドア
-- ========================================

-- ヴェナートD30 (標準)
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'DOOR-VENATO-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ========================================
-- 13. 庇 (オプション)
-- ========================================

-- アルフィン庇 AD2S (OP ¥110,000/箇所)
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 110000, false, true
FROM items i, products p
WHERE i.item_code = 'AWNING-AD2S-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ========================================
-- 14. 電動シャッター (オプション)
-- ========================================

-- サンオートハイスピード (OP ¥380,000/台)
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 380000, false, true
FROM items i, products p
WHERE i.item_code = 'SHUTTER-SANWA-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ========================================
-- 15. エコキュート (標準設備)
-- ========================================

-- エコキュート 370L (標準)
INSERT INTO item_pricing (item_id, variant_id, product_id, price, is_standard, is_available)
SELECT i.id, NULL, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'ECOCUTE-PANA-001'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- ========================================
-- 完了メッセージ
-- ========================================
DO $$
BEGIN
  RAISE NOTICE 'アイテム価格マスターデータが正常に投入されました。';
END
$$;

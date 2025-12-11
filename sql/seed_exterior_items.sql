-- ========================================
-- 外装アイテムシードデータ（外部スタイルブックより）
-- ========================================

-- ========================================
-- 1. 外壁 - ニチハ (標準)
-- ========================================

-- モナビストーンV (モエンエクセラード16 Vシリーズ 16mm厚)
INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('NICHIHA-MONABI-001', 'モナビストーンV', '窯業系サイディング', 'ニチハ', 'モエンエクセラード16 Vシリーズ', '16mm厚・横張のみ・マイクロガード塗装', false, true)
ON CONFLICT (item_code) DO NOTHING;

-- モナビストーンV バリエーション
INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA5256FK', 'フローMGグレー', 'N7'
FROM items i WHERE i.item_code = 'NICHIHA-MONABI-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA5257FK', 'フローMGブラック', 'N2'
FROM items i WHERE i.item_code = 'NICHIHA-MONABI-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA5251GK', 'フローMGクリアホワイト', 'N9'
FROM items i WHERE i.item_code = 'NICHIHA-MONABI-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA5252GK', 'フローMGホワイト', '2.5Y9/1'
FROM items i WHERE i.item_code = 'NICHIHA-MONABI-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA5253GK', 'フローMGクリーム', '10YR8/2'
FROM items i WHERE i.item_code = 'NICHIHA-MONABI-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA5254TK', 'フローMGネイビー', 'N3'
FROM items i WHERE i.item_code = 'NICHIHA-MONABI-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- シャルムロックV
INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('NICHIHA-CHARM-001', 'シャルムロックV', '窯業系サイディング', 'ニチハ', 'モエンエクセラード16 Vシリーズ', '16mm厚・マイクロガード塗装', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA2851FK', 'コンティMGホワイト', '5Y8/1'
FROM items i WHERE i.item_code = 'NICHIHA-CHARM-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA2852FK', 'コンティMGアッシュ', '10YR7/2'
FROM items i WHERE i.item_code = 'NICHIHA-CHARM-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA2853FK', 'コンティMGアイボリー', '5Y7/2'
FROM items i WHERE i.item_code = 'NICHIHA-CHARM-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA2854FK', 'コンティMGブラウン', '10YR4/2'
FROM items i WHERE i.item_code = 'NICHIHA-CHARM-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA2855FK', 'コンティMGグレー', '2.5Y5/1'
FROM items i WHERE i.item_code = 'NICHIHA-CHARM-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA2856CK', 'コンティMGチャコール', '2.5Y3/1'
FROM items i WHERE i.item_code = 'NICHIHA-CHARM-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- リーガストーン調V
INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('NICHIHA-REGA-001', 'リーガストーン調V', '窯業系サイディング', 'ニチハ', 'モエンエクセラード16 Vシリーズ', '16mm厚・マイクロガード塗装', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFX3455CK', 'ランダMGプラチナ', '5Y7/1'
FROM items i WHERE i.item_code = 'NICHIHA-REGA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFX3457CK', 'ランダMGブラック', '2.5Y3/1'
FROM items i WHERE i.item_code = 'NICHIHA-REGA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFX3451NK', 'ランダMGラテ', '2.5Y6/4'
FROM items i WHERE i.item_code = 'NICHIHA-REGA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFX3452RK', 'ランダMGトリュフ', '5YR4/1'
FROM items i WHERE i.item_code = 'NICHIHA-REGA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFX3453CK', 'ランダMGパウダー', '10Y8/1'
FROM items i WHERE i.item_code = 'NICHIHA-REGA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ディスタシェイドV
INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('NICHIHA-DISTA-001', 'ディスタシェイドV', '窯業系サイディング', 'ニチハ', 'モエンエクセラード16 Vシリーズ', '16mm厚・マイクロガード塗装', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA5456YK', 'ストレムMGネイビー', '5B2/1'
FROM items i WHERE i.item_code = 'NICHIHA-DISTA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA5451YK', 'ストレムMGホワイト', '10YR9/1'
FROM items i WHERE i.item_code = 'NICHIHA-DISTA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA5452YK', 'ストレムMGクリーム', '10R8/1'
FROM items i WHERE i.item_code = 'NICHIHA-DISTA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA5453YK', 'ストレムMGブラウン', '2.5Y5/4'
FROM items i WHERE i.item_code = 'NICHIHA-DISTA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA5454LK', 'ストレムMGセピア', '10YR4/2'
FROM items i WHERE i.item_code = 'NICHIHA-DISTA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- グレインウッドV
INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('NICHIHA-GRAIN-001', 'グレインウッドV', '窯業系サイディング', 'ニチハ', 'モエンエクセラード16 Vシリーズ', '16mm厚・マイクロガード塗装', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA2258YK', 'スペリオMGネイビー', '5PB2/1'
FROM items i WHERE i.item_code = 'NICHIHA-GRAIN-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA2251FK', 'スペリオMGナチュラル', '10YR7/2'
FROM items i WHERE i.item_code = 'NICHIHA-GRAIN-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA2256FK', 'スペリオMGウォルナット', '10R3/3'
FROM items i WHERE i.item_code = 'NICHIHA-GRAIN-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'EFA2255LK', 'スペリオMGブラック', '10YR3/2'
FROM items i WHERE i.item_code = 'NICHIHA-GRAIN-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ========================================
-- 2. 外壁 - ニチハ Fu-ge PREMIUM (OP ¥4,500/㎡)
-- ========================================

-- スティルランバー プレミアム
INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('NICHIHA-STIL-PREM-001', 'スティルランバー プレミアム', '窯業系サイディング', 'ニチハ', 'モエンエクセラード16 プレミアムシリーズ Fu-ge', '16mm厚・プラチナコート・マイクロガード・四方合いじゃくり', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'ELS611Y', 'スティルMGアッシュホワイト30', '2.5Y6/1'
FROM items i WHERE i.item_code = 'NICHIHA-STIL-PREM-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'ELS612Y', 'スティルMGブラウン30', '10YR3/4'
FROM items i WHERE i.item_code = 'NICHIHA-STIL-PREM-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'ELS613Y', 'スティルMGアッシュブラウン30', '5Y3/1'
FROM items i WHERE i.item_code = 'NICHIHA-STIL-PREM-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'ELS614Y', 'スティルMGブラック30', '10Y2/1'
FROM items i WHERE i.item_code = 'NICHIHA-STIL-PREM-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ミルシュタイン プレミアム
INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('NICHIHA-MILS-PREM-001', 'ミルシュタイン プレミアム', '窯業系サイディング', 'ニチハ', 'モエンエクセラード16 プレミアムシリーズ Fu-ge', '16mm厚・プラチナコート・マイクロガード', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'ELS491P', 'ミルトMGホワイト30', '5R7/1'
FROM items i WHERE i.item_code = 'NICHIHA-MILS-PREM-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'ELS494P', 'ミルトMGブラック30', 'N3'
FROM items i WHERE i.item_code = 'NICHIHA-MILS-PREM-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'ELS495P', 'ミルトMGグレー30', 'N4'
FROM items i WHERE i.item_code = 'NICHIHA-MILS-PREM-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ========================================
-- 3. 外壁 - KMEW (OP ¥4,500/㎡)
-- ========================================

-- ハーモレイド
INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('KMEW-HARMO-001', 'ハーモレイド', '窯業系サイディング', 'KMEW', 'ネオロック・光セラ18 (18mm厚)', '光セラ・マイクロガード・横張のみ', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'NH5201', 'QFマーチ チタン ホワイト', '2Y7.7/1'
FROM items i WHERE i.item_code = 'KMEW-HARMO-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'NH5202', 'QFコンフォート チタン ベージュ', '0.4Y7.7/1'
FROM items i WHERE i.item_code = 'KMEW-HARMO-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'NH5203', 'QFコンフォート チタン ブラウン', '5YR4/1'
FROM items i WHERE i.item_code = 'KMEW-HARMO-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'NH5204', 'QFブリュレ チタン ブラック', '10YR3/0.5'
FROM items i WHERE i.item_code = 'KMEW-HARMO-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- モダンスリット18
INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('KMEW-MODERN-001', 'モダンスリット18', '窯業系サイディング', 'KMEW', 'ネオロック・光セラ18 (18mm厚)', '光セラ・横張のみ', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'NH5441', 'QFシルク チタン ホワイト', '2Y8.2/0.9'
FROM items i WHERE i.item_code = 'KMEW-MODERN-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'NH5445', 'QFアトランティック チタン ブルー', '5PB4/1'
FROM items i WHERE i.item_code = 'KMEW-MODERN-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'NH5447', 'QFシルク チタン グレー', '2.5Y6/1'
FROM items i WHERE i.item_code = 'KMEW-MODERN-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'NH5449', 'QFダーククロースト チタン ブラウン', '7.5YR4/2'
FROM items i WHERE i.item_code = 'KMEW-MODERN-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'NH54410', 'QFチャコール チタン ブラック', '10YR3/0.5'
FROM items i WHERE i.item_code = 'KMEW-MODERN-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ========================================
-- 4. 外壁 - IG工業 (OP ¥9,500/㎡ または ¥5,000/㎡)
-- ========================================

-- SPビレクト
INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('IG-SPBILECT-001', 'SPビレクト', '金属サイディング', 'IG工業', 'SPビレクト1', '変褪色・穴あき・赤さび10年保証・横張のみ', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SPI1-301', 'マットブラック', '1PB2.1/0.3'
FROM items i WHERE i.item_code = 'IG-SPBILECT-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SPI1-383', 'クールブラウン', '9.34YR2.65/0.52'
FROM items i WHERE i.item_code = 'IG-SPBILECT-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SPI1-384', 'クールネイビー', '3.3PB2.4/2.4'
FROM items i WHERE i.item_code = 'IG-SPBILECT-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SPI1-394', 'モスグリーン', '3.5G3.2/1'
FROM items i WHERE i.item_code = 'IG-SPBILECT-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SPI1-305', 'スマートガンメタ', '2.0RP3.4/0.3'
FROM items i WHERE i.item_code = 'IG-SPBILECT-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SPI1-370', 'ネオホワイト', '2.8Y8.5/0.2'
FROM items i WHERE i.item_code = 'IG-SPBILECT-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ガルスパン
INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('IG-GARUSPAN-001', 'ガルスパン', '金属サイディング', 'IG工業', 'ガルスパン2', '変褪色・穴あき・赤さび10年保証・横張のみ', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SPJ1-310', 'ネオブラック', '9.3B1.8/0.3'
FROM items i WHERE i.item_code = 'IG-GARUSPAN-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SPJ1-358', 'ビターブラウン', '7.6Y1.7/0.8'
FROM items i WHERE i.item_code = 'IG-GARUSPAN-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SPJ1-387', 'グランブルー', '1.8PB2.2/2.6'
FROM items i WHERE i.item_code = 'IG-GARUSPAN-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SPJ1-394', 'モスグリーン', '3.5G3.2/1.0'
FROM items i WHERE i.item_code = 'IG-GARUSPAN-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SPJ1-370', 'ネオホワイト', '2.8Y8.5/0.2'
FROM items i WHERE i.item_code = 'IG-GARUSPAN-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ========================================
-- 5. 外壁 - AICA ジョリパット (OP ¥12,500/㎡ または ¥8,000/㎡)
-- ========================================

-- エンシェントブリック
INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('AICA-ANCIENT-001', 'エンシェントブリック', '塗り壁', 'AICA', 'ジョリパットネオJQ-620', '筋が出やすく目立つことがあります', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'T1010', 'T1010', '3.81Y8.48/0.71'
FROM items i WHERE i.item_code = 'AICA-ANCIENT-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'T3001', 'T3001', '3.72GY7.03/0.35'
FROM items i WHERE i.item_code = 'AICA-ANCIENT-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'T3005', 'T3005', '4.22Y6.99/0.88'
FROM items i WHERE i.item_code = 'AICA-ANCIENT-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'T3009', 'T3009', '9.18YR6.96/1.29'
FROM items i WHERE i.item_code = 'AICA-ANCIENT-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'T3010', 'T3010', '4.41Y6.94/1.17'
FROM items i WHERE i.item_code = 'AICA-ANCIENT-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'T6013', 'T6013', '1.68PB3.49/0.23'
FROM items i WHERE i.item_code = 'AICA-ANCIENT-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ========================================
-- 6. 外壁 - SOLIDO (OP ¥17,000/㎡ または ¥21,500/㎡)
-- ========================================

INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('KMEW-SOLIDO-001', 'SOLIDO typeM_LAP', '窯業系サイディング', 'KMEW', 'SOLIDO', '不燃材料NM-4601(1)・窯業系平形スレート・5㎡以下は一式金額', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SMG72G', '鉄黒（てつぐろ）', 'N3.5'
FROM items i WHERE i.item_code = 'KMEW-SOLIDO-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SMG85G', 'セメント', 'N5.0'
FROM items i WHERE i.item_code = 'KMEW-SOLIDO-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SMG21G', '錆茶（さびちゃ）', '10R3.5/1.0'
FROM items i WHERE i.item_code = 'KMEW-SOLIDO-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SMG65G', '灰（はい）', 'N4.0'
FROM items i WHERE i.item_code = 'KMEW-SOLIDO-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ========================================
-- 7. ポーチ - モルタル金鏝抑え (標準)
-- ========================================

INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('PORCH-MORTAR-001', 'モルタル金鏝抑え', 'ポーチ', '-', '-', '将来的に乾燥収縮によりヘアークラック（ひび割れ）がおこる可能性あり・標準1.8m×1.8m', false, true)
ON CONFLICT (item_code) DO NOTHING;

-- ========================================
-- 8. ポーチ - 名古屋モザイク ネイチャーII (OP ¥22,000/㎡)
-- ========================================

INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('PORCH-NATURE2-001', 'ネイチャーII', 'ポーチタイル', '名古屋モザイク', '300×300', 'タイル目地色選択可能（白・灰・濃灰・黒）', true, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'MSY-R3010', 'MSY-R3010', NULL
FROM items i WHERE i.item_code = 'PORCH-NATURE2-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'MSY-R3020', 'MSY-R3020', NULL
FROM items i WHERE i.item_code = 'PORCH-NATURE2-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'MSY-R3030', 'MSY-R3030', NULL
FROM items i WHERE i.item_code = 'PORCH-NATURE2-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'MSY-R3050', 'MSY-R3050', NULL
FROM items i WHERE i.item_code = 'PORCH-NATURE2-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'MSY-R3070', 'MSY-R3070', NULL
FROM items i WHERE i.item_code = 'PORCH-NATURE2-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'MSY-R3080', 'MSY-R3080', NULL
FROM items i WHERE i.item_code = 'PORCH-NATURE2-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'MSY-R3090', 'MSY-R3090', NULL
FROM items i WHERE i.item_code = 'PORCH-NATURE2-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ========================================
-- 9. ポーチ - LIXIL ベスパ (OP ¥22,000/㎡)
-- ========================================

INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('PORCH-VESPA-001', 'ベスパ', 'ポーチタイル', 'LIXIL', '300×300', 'タイル目地色選択可能', true, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'IPF-300/VSP-SA1', 'IPF-300/VSP-SA1', NULL
FROM items i WHERE i.item_code = 'PORCH-VESPA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'IPF-300/VSP-SA2', 'IPF-300/VSP-SA2', NULL
FROM items i WHERE i.item_code = 'PORCH-VESPA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'IPF-300/VSP-SA3', 'IPF-300/VSP-SA3', NULL
FROM items i WHERE i.item_code = 'PORCH-VESPA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'IPF-300/VSP-SL1', 'IPF-300/VSP-SL1', NULL
FROM items i WHERE i.item_code = 'PORCH-VESPA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'IPF-300/VSP-SL2', 'IPF-300/VSP-SL2', NULL
FROM items i WHERE i.item_code = 'PORCH-VESPA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'IPF-300/VSP-SL4', 'IPF-300/VSP-SL4', NULL
FROM items i WHERE i.item_code = 'PORCH-VESPA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'IPF-300/VSP-SL5', 'IPF-300/VSP-SL5', NULL
FROM items i WHERE i.item_code = 'PORCH-VESPA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ========================================
-- 10. 屋根材 - ニスクカラーSGL (標準)
-- ========================================

INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('ROOF-NISQSGL-001', 'ニスクカラーSGL', '屋根材', '日鉄鋼板', 'RK001S', '材料標準保証10年・不燃材料NM-8697・海岸500m以遠原板穴あき25年保証', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'RK001S', 'Sブラック', '4.7PB2.3/0.5'
FROM items i WHERE i.item_code = 'ROOF-NISQSGL-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ========================================
-- 11. 樋 - Panasonic ファインスケア (標準)
-- ========================================

INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('GUTTER-FINE-001', 'ファインスケアNF-I型', '横樋', 'Panasonic', 'ファインスケア', '標準', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'MQF0180J', 'ミルクホワイト', NULL
FROM items i WHERE i.item_code = 'GUTTER-FINE-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'MQF1180J', 'パールグレー（しろ）', NULL
FROM items i WHERE i.item_code = 'GUTTER-FINE-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'MQF5180', 'しんちゃ', NULL
FROM items i WHERE i.item_code = 'GUTTER-FINE-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'MQF6180J', 'ブラック', NULL
FROM items i WHERE i.item_code = 'GUTTER-FINE-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'MQFX180J', 'モダンベージュ', NULL
FROM items i WHERE i.item_code = 'GUTTER-FINE-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'MQFZ180J', 'オークブラウン', NULL
FROM items i WHERE i.item_code = 'GUTTER-FINE-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ========================================
-- 12. 縦樋 - Panasonic S30 (標準)
-- ========================================

INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('GUTTER-S30-001', 'S30', '縦樋', 'Panasonic', 'S30', '標準', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'KBP0261K', 'ミルクホワイト', NULL
FROM items i WHERE i.item_code = 'GUTTER-S30-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'KBP1261K', 'パールグレー（しろ）', NULL
FROM items i WHERE i.item_code = 'GUTTER-S30-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'KBP5261K', 'しんちゃ', NULL
FROM items i WHERE i.item_code = 'GUTTER-S30-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'KBP6261K', 'ブラック', NULL
FROM items i WHERE i.item_code = 'GUTTER-S30-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'KBPX261K', 'モダンベージュ', NULL
FROM items i WHERE i.item_code = 'GUTTER-S30-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'KBPZ261K', 'オークブラウン', NULL
FROM items i WHERE i.item_code = 'GUTTER-S30-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ========================================
-- 13. 軒天 - 神島化学 エンボス (標準)
-- ========================================

INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('SOFFIT-EMBOSS-001', 'エンボス', '軒天', '神島化学', 'エンボス', '標準', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'WF-FREEWHITE', 'WFフリーホワイト', NULL
FROM items i WHERE i.item_code = 'SOFFIT-EMBOSS-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'WE-MILTIVORY', 'WEミルトアイボリー', NULL
FROM items i WHERE i.item_code = 'SOFFIT-EMBOSS-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'WF-FINESTAIN', 'WFファインステン', NULL
FROM items i WHERE i.item_code = 'SOFFIT-EMBOSS-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'WE-EBONYBROWN', 'WEエボニーブラウン', NULL
FROM items i WHERE i.item_code = 'SOFFIT-EMBOSS-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'WF-CHARCOALBLACK', 'WFチャコールブラック', NULL
FROM items i WHERE i.item_code = 'SOFFIT-EMBOSS-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ========================================
-- 14. 窓 - APW330 (標準)
-- ========================================

INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('WINDOW-APW330-001', 'APW330', '窓サッシ', 'YKKAP', 'APW330', '樹脂サッシ・アルゴンガス・ペアガラス・防火/非防火・熱貫流率1.31W/(㎡・K)', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'APW330-WHITE', 'ホワイト（外観）', NULL
FROM items i WHERE i.item_code = 'WINDOW-APW330-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'APW330-PLATINUM', 'プラチナステン（外観）', NULL
FROM items i WHERE i.item_code = 'WINDOW-APW330-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'APW330-BROWN', 'ブラウン（外観）', NULL
FROM items i WHERE i.item_code = 'WINDOW-APW330-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'APW330-BLACK', 'ブラック（外観）', NULL
FROM items i WHERE i.item_code = 'WINDOW-APW330-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ========================================
-- 15. 窓 - APW430 (LACIE/HOURSのみ標準、LIFE+/LIFEはOP)
-- ========================================

INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('WINDOW-APW430-001', 'APW430', '窓サッシ', 'YKKAP', 'APW430', '樹脂サッシ・アルゴンガス・トリプルガラス・防火/非防火・熱貫流率0.90W/(㎡・K)', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'APW430-WHITE', 'ホワイト（外観）', NULL
FROM items i WHERE i.item_code = 'WINDOW-APW430-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'APW430-BROWN', 'ブラウン（外観）', NULL
FROM items i WHERE i.item_code = 'WINDOW-APW430-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'APW430-PLATINUM', 'プラチナステン（外観）', NULL
FROM items i WHERE i.item_code = 'WINDOW-APW430-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'APW430-BLACK', 'ブラック（外観）', NULL
FROM items i WHERE i.item_code = 'WINDOW-APW430-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ========================================
-- 16. 玄関ドア - YKKAP ヴェナートD30 (標準)
-- ========================================

INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('DOOR-VENATO-001', 'ヴェナートD30', '玄関ドア', 'YKKAP', 'ヴェナートD30', '防火/非防火・100V電気錠・ポケットキー標準（LIFE+/LACIE/HOURS）', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'VENATO-N08', 'N08', NULL
FROM items i WHERE i.item_code = 'DOOR-VENATO-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'VENATO-N18', 'N18', NULL
FROM items i WHERE i.item_code = 'DOOR-VENATO-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'VENATO-N15', 'N15', NULL
FROM items i WHERE i.item_code = 'DOOR-VENATO-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'VENATO-C10', 'C10', NULL
FROM items i WHERE i.item_code = 'DOOR-VENATO-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ========================================
-- 17. 庇 - アルフィン (OP)
-- ========================================

INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('AWNING-AD2S-001', 'アルフィン庇 AD2S', '庇', 'アルフィン', 'AD2S', 'W1800×D900', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'AD2S-STENCOLOR', 'ステンカラー', NULL
FROM items i WHERE i.item_code = 'AWNING-AD2S-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'AD2S-SILVER', 'シルバー', NULL
FROM items i WHERE i.item_code = 'AWNING-AD2S-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'AD2S-BLACK', 'ブラック', NULL
FROM items i WHERE i.item_code = 'AWNING-AD2S-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ========================================
-- 18. 電動ガレージシャッター (OP)
-- ========================================

INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('SHUTTER-SANWA-001', 'サンオートハイスピード', '電動シャッター', '三和シャッター', 'サンオートハイスピード', 'W2550 H2200・非防火・シャッター開放約13秒・障害物検知装置付き', false, true)
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SANWA-SAND', 'サンド（カラー鋼板）', NULL
FROM items i WHERE i.item_code = 'SHUTTER-SANWA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SANWA-LIGHTGRAY', 'ライトグレー（カラー鋼板）', NULL
FROM items i WHERE i.item_code = 'SHUTTER-SANWA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SANWA-COOLSILVER', 'クールシルバー（高耐食カラー鋼板）', NULL
FROM items i WHERE i.item_code = 'SHUTTER-SANWA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SANWA-VINTAGEWALNUT', 'ビンテージウォールナット', NULL
FROM items i WHERE i.item_code = 'SHUTTER-SANWA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code)
SELECT i.id, 'SANWA-WHITE', 'ホワイト（カラー鋼板）', NULL
FROM items i WHERE i.item_code = 'SHUTTER-SANWA-001'
ON CONFLICT (item_id, variant_code) DO NOTHING;

-- ========================================
-- 19. エコキュート (標準)
-- ========================================

INSERT INTO items (item_code, name, category_name, manufacturer, model_number, note, is_hit, is_active) VALUES
  ('ECOCUTE-PANA-001', 'エコキュート 370L', '給湯設備', 'Panasonic', 'HE-S37LQS', 'Sシリーズ・標準370L・1810×600×680', false, true)
ON CONFLICT (item_code) DO NOTHING;

-- ========================================
-- 完了メッセージ
-- ========================================
DO $$
BEGIN
  RAISE NOTICE '外装アイテムシードデータが正常に投入されました。';
END
$$;

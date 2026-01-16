-- items テーブルに material_type カラムを追加
-- 素材タイプ（外壁: 窯業系サイディング/金属サイディング/塗り壁、床材: 突板/シート等）

ALTER TABLE items
ADD COLUMN IF NOT EXISTS material_type VARCHAR(100);

-- catalog_url カラムも追加（存在しない場合）
ALTER TABLE items
ADD COLUMN IF NOT EXISTS catalog_url TEXT;

-- コメント追加
COMMENT ON COLUMN items.material_type IS '素材タイプ（外壁: 窯業系/金属/塗り壁、床材: 突板/シート等）';
COMMENT ON COLUMN items.catalog_url IS 'メーカーカタログURL';

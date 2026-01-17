-- 無効な画像URL（www.ghouse.osaka.jp）を削除
-- このドメインは存在しないため、ERR_NAME_NOT_RESOLVEDエラーが発生している

-- 1. item_variant_images テーブルから無効なURLを持つレコードを削除
DELETE FROM item_variant_images
WHERE image_url LIKE '%www.ghouse.osaka.jp%';

-- 2. 削除した画像の確認用クエリ（実行前に確認）
-- SELECT * FROM item_variant_images WHERE image_url LIKE '%www.ghouse.osaka.jp%';

-- 3. 統計情報表示
SELECT 'Remaining images' as status, COUNT(*) as count FROM item_variant_images;

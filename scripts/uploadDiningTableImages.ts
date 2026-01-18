/**
 * ダイニングテーブル画像アップロードスクリプト
 * 既存アイテムに画像を紐づける
 */

import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
dotenv.config();

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('環境変数を設定してください');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const BUCKET_NAME = 'product-images';
const BASE_PATH = 'G:/共有ドライブ/０７｜設計・ⅠC/13.アプリ用の画像/内装/Gハウスオリジナル商品/01｜ダイニングテーブル';

// 画像マッピング
const IMAGE_MAPPINGS = [
  // テーブルトップ
  { localFile: 'TJY18332K_A4.jpg', storageName: 'tjy18332k-main', itemCode: 'int-dining-table-001', colorName: null },
  { localFile: 'TJ-10005K.jpg', storageName: 'tj-10005k', itemCode: 'int-dining-table-002', colorName: null },
  { localFile: 'TJ-10240K.jpg', storageName: 'tj-10240k', itemCode: 'int-dining-table-003', colorName: null },
  { localFile: 'TJY10274K.jpg', storageName: 'tjy10274k', itemCode: 'int-dining-table-004', colorName: null },
  { localFile: 'LJ-10068K.jpg', storageName: 'lj-10068k', itemCode: 'int-dining-table-005', colorName: null },
  { localFile: 'LJ-10186K.jpg', storageName: 'lj-10186k', itemCode: 'int-dining-table-006', colorName: null },
  { localFile: 'JI-800K.jpg', storageName: 'ji-800k', itemCode: 'int-dining-table-007', colorName: null },
  { localFile: 'JI-703K_50X50.jpg', storageName: 'ji-703k', itemCode: 'int-dining-table-008', colorName: null },

  // 脚
  { localFile: 'K-6000KN.jpg', storageName: 'leg-k-6000kn', itemCode: 'int-dining-leg-001', colorName: null },
  { localFile: 'K-6115KN.jpg', storageName: 'leg-k-6115kn', itemCode: 'int-dining-leg-002', colorName: null },
  { localFile: 'K-6116KN.jpg', storageName: 'leg-k-6116kn', itemCode: 'int-dining-leg-003', colorName: null },
  { localFile: 'K-6117KN.jpg', storageName: 'leg-k-6117kn', itemCode: 'int-dining-leg-004', colorName: null },
  { localFile: 'K-6303KN.jpg', storageName: 'leg-k-6303kn', itemCode: 'int-dining-leg-005', colorName: null },
  { localFile: 'TK-6306K.jpg', storageName: 'leg-tk-6306k', itemCode: 'int-dining-leg-006', colorName: null },
  { localFile: 'TK-6400K.jpg', storageName: 'leg-tk-6400k', itemCode: 'int-dining-leg-007', colorName: null },
];

async function uploadFile(localPath: string, storagePath: string): Promise<string | null> {
  try {
    const fileBuffer = fs.readFileSync(localPath);
    const ext = path.extname(localPath).toLowerCase();
    let mimeType = 'image/jpeg';
    if (ext === '.png') mimeType = 'image/png';
    if (ext === '.webp') mimeType = 'image/webp';

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(storagePath, fileBuffer, {
        contentType: mimeType,
        upsert: true
      });

    if (error) {
      console.error(`アップロードエラー (${storagePath}):`, error.message);
      return null;
    }

    const { data: { publicUrl } } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(storagePath);

    return publicUrl;
  } catch (error) {
    console.error(`ファイル処理エラー (${localPath}):`, error);
    return null;
  }
}

async function getVariantIdByItemAndColor(itemCode: string, colorName: string | null): Promise<string | null> {
  const { data: item } = await supabase
    .from('items')
    .select('id')
    .eq('item_code', itemCode)
    .single();

  if (!item) return null;

  if (colorName) {
    const { data: variant } = await supabase
      .from('item_variants')
      .select('id')
      .eq('item_id', item.id)
      .eq('color_name', colorName)
      .single();
    return variant?.id || null;
  } else {
    const { data: variants } = await supabase
      .from('item_variants')
      .select('id')
      .eq('item_id', item.id)
      .limit(1);
    return variants?.[0]?.id || null;
  }
}

async function updateVariantImage(variantId: string, imageUrl: string): Promise<boolean> {
  const { data: existingImages } = await supabase
    .from('item_variant_images')
    .select('id')
    .eq('variant_id', variantId);

  if (existingImages && existingImages.length > 0) {
    const { error } = await supabase
      .from('item_variant_images')
      .update({
        image_url: imageUrl,
        thumbnail_url: imageUrl,
        is_primary: true
      })
      .eq('variant_id', variantId);

    if (error) {
      console.error('画像更新エラー:', error);
      return false;
    }
  } else {
    const { error } = await supabase
      .from('item_variant_images')
      .insert({
        variant_id: variantId,
        image_url: imageUrl,
        thumbnail_url: imageUrl,
        is_primary: true,
        display_order: 0
      });

    if (error) {
      console.error('画像挿入エラー:', error);
      return false;
    }
  }

  return true;
}

async function main(): Promise<void> {
  console.log('=== ダイニングテーブル 画像アップロード開始 ===\n');

  let uploadedCount = 0;
  let linkedCount = 0;
  let skippedCount = 0;

  for (const mapping of IMAGE_MAPPINGS) {
    const localPath = path.join(BASE_PATH, mapping.localFile);

    if (!fs.existsSync(localPath)) {
      console.log(`  ✗ ファイルが見つかりません: ${mapping.localFile}`);
      skippedCount++;
      continue;
    }

    const ext = path.extname(mapping.localFile).toLowerCase();
    const storagePath = `dining-table/${mapping.storageName}${ext}`;
    const url = await uploadFile(localPath, storagePath);

    if (url) {
      uploadedCount++;
      console.log(`  ✓ ${mapping.storageName}: ${url}`);

      if (mapping.itemCode) {
        const variantId = await getVariantIdByItemAndColor(mapping.itemCode, mapping.colorName);
        if (variantId) {
          const linked = await updateVariantImage(variantId, url);
          if (linked) {
            linkedCount++;
            console.log(`    → ${mapping.itemCode} に紐づけ完了`);
          }
        } else {
          console.log(`    ⚠ バリアントが見つかりません: ${mapping.itemCode}`);
        }
      }
    }
  }

  console.log('\n=== アップロード完了 ===');
  console.log(`アップロード: ${uploadedCount}件`);
  console.log(`紐づけ: ${linkedCount}件`);
  console.log(`スキップ: ${skippedCount}件`);
}

main().catch(console.error);

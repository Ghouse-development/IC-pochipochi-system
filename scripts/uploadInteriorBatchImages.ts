/**
 * 内装画像一括アップロードスクリプト
 * 複数フォルダの画像を既存アイテムに紐づける
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
const BASE_PATH = 'G:/共有ドライブ/０７｜設計・ⅠC/13.アプリ用の画像/内装';

interface ImageMapping {
  localFile: string;
  storageName: string;
  category: string;
  itemCode?: string;
  colorName?: string | null;
}

// P.32｜収納棚
const STORAGE_SHELF_IMAGES: ImageMapping[] = [
  { localFile: 'P.32｜収納棚/S1.png', storageName: 's1', category: 'storage-shelf' },
  { localFile: 'P.32｜収納棚/S2.png', storageName: 's2', category: 'storage-shelf' },
  { localFile: 'P.32｜収納棚/S3.png', storageName: 's3', category: 'storage-shelf' },
  { localFile: 'P.32｜収納棚/PKO 参考画像①.webp', storageName: 'pko-ref-1', category: 'storage-shelf' },
  { localFile: 'P.32｜収納棚/PKO 参考画像②.webp', storageName: 'pko-ref-2', category: 'storage-shelf' },
  { localFile: 'P.32｜収納棚/シェルホワイト.webp', storageName: 'shell-white', category: 'storage-shelf', itemCode: 'int-storage-shelf-001', colorName: 'シェルホワイト' },
  { localFile: 'P.32｜収納棚/ダークグレー.webp', storageName: 'dark-gray', category: 'storage-shelf', itemCode: 'int-storage-shelf-001', colorName: 'ダークグレー' },
  { localFile: 'P.32｜収納棚/C/C300／C450-2.jpg', storageName: 'c-type-2', category: 'storage-shelf/c' },
  { localFile: 'P.32｜収納棚/C/C300／C450-4.jpg', storageName: 'c-type-4', category: 'storage-shelf/c' },
  { localFile: 'P.32｜収納棚/C/C300／C450-6.jpg', storageName: 'c-type-6', category: 'storage-shelf/c' },
  { localFile: 'P.32｜収納棚/C/Cメージ.webp', storageName: 'c-image', category: 'storage-shelf/c' },
  { localFile: 'P.32｜収納棚/D/D300／D450-2.jpg', storageName: 'd-type-2', category: 'storage-shelf/d' },
  { localFile: 'P.32｜収納棚/D/D300／D450-4.jpg', storageName: 'd-type-4', category: 'storage-shelf/d' },
  { localFile: 'P.32｜収納棚/E/Eイメージ.jpg', storageName: 'e-image', category: 'storage-shelf/e' },
];

// P.30｜インテリアカウンター
const INTERIOR_COUNTER_IMAGES: ImageMapping[] = [
  { localFile: 'P.30｜インテリアカウンター/イメージ画像/1.jpg', storageName: 'image-1', category: 'interior-counter' },
  { localFile: 'P.30｜インテリアカウンター/イメージ画像/2.jpg', storageName: 'image-2', category: 'interior-counter' },
  { localFile: 'P.30｜インテリアカウンター/イメージ画像/3.jpg', storageName: 'image-3', category: 'interior-counter' },
  { localFile: 'P.30｜インテリアカウンター/イメージ画像/4.jpg', storageName: 'image-4', category: 'interior-counter' },
  { localFile: 'P.30｜インテリアカウンター/カウンター/イデアオーク柄.jpg', storageName: 'counter-idea-oak', category: 'interior-counter/counter', itemCode: 'int-interior-counter-001', colorName: 'イデアオーク柄' },
  { localFile: 'P.30｜インテリアカウンター/カウンター/ウォールナット柄.jpg', storageName: 'counter-walnut', category: 'interior-counter/counter', itemCode: 'int-interior-counter-001', colorName: 'ウォールナット柄' },
  { localFile: 'P.30｜インテリアカウンター/カウンター/グレージュアッシュ柄.jpg', storageName: 'counter-greige-ash', category: 'interior-counter/counter', itemCode: 'int-interior-counter-001', colorName: 'グレージュアッシュ柄' },
  { localFile: 'P.30｜インテリアカウンター/カウンター/しっくいホワイト柄.jpg', storageName: 'counter-shikkui-white', category: 'interior-counter/counter', itemCode: 'int-interior-counter-001', colorName: 'しっくいホワイト柄' },
  { localFile: 'P.30｜インテリアカウンター/カウンター/ソフトウォールナット柄.jpg', storageName: 'counter-soft-walnut', category: 'interior-counter/counter', itemCode: 'int-interior-counter-001', colorName: 'ソフトウォールナット柄' },
  { localFile: 'P.30｜インテリアカウンター/カウンター/チェリー柄.jpg', storageName: 'counter-cherry', category: 'interior-counter/counter', itemCode: 'int-interior-counter-001', colorName: 'チェリー柄' },
  { localFile: 'P.30｜インテリアカウンター/カウンター/ホワイトアッシュ柄.jpg', storageName: 'counter-white-ash', category: 'interior-counter/counter', itemCode: 'int-interior-counter-001', colorName: 'ホワイトアッシュ柄' },
  { localFile: 'P.30｜インテリアカウンター/カウンター/ホワイトオーク柄.jpg', storageName: 'counter-white-oak', category: 'interior-counter/counter', itemCode: 'int-interior-counter-001', colorName: 'ホワイトオーク柄' },
  { localFile: 'P.30｜インテリアカウンター/カウンター/メープル柄.jpg', storageName: 'counter-maple', category: 'interior-counter/counter', itemCode: 'int-interior-counter-001', colorName: 'メープル柄' },
  { localFile: 'P.30｜インテリアカウンター/ブラケット/ブラケット：オフブラック.jpg', storageName: 'bracket-off-black', category: 'interior-counter/bracket', itemCode: 'int-interior-counter-bracket', colorName: 'オフブラック' },
  { localFile: 'P.30｜インテリアカウンター/ブラケット/ブラケット：オフブラック色.jpg', storageName: 'bracket-off-black-2', category: 'interior-counter/bracket' },
  { localFile: 'P.30｜インテリアカウンター/ブラケット/ブラケット：サテンシルバー.jpg', storageName: 'bracket-satin-silver', category: 'interior-counter/bracket', itemCode: 'int-interior-counter-bracket', colorName: 'サテンシルバー' },
  { localFile: 'P.30｜インテリアカウンター/ブラケット/ブラケット：サテンシルバー色.jpg', storageName: 'bracket-satin-silver-2', category: 'interior-counter/bracket' },
  { localFile: 'P.30｜インテリアカウンター/ブラケット/カウンターレール：オフブラック.jpg', storageName: 'rail-off-black', category: 'interior-counter/bracket' },
  { localFile: 'P.30｜インテリアカウンター/ブラケット/カウンターレール：サテンシルバー.jpg', storageName: 'rail-satin-silver', category: 'interior-counter/bracket' },
  { localFile: 'P.30｜インテリアカウンター/ブラケット/サテンシルバー.jpg', storageName: 'satin-silver', category: 'interior-counter/bracket' },
  { localFile: 'P.30｜インテリアカウンター/ブラケット/アーチアングルカラー：オフブラック（アーチタイプ）.jpg', storageName: 'arch-angle-off-black', category: 'interior-counter/bracket' },
  { localFile: 'P.30｜インテリアカウンター/配線キャップ/OP：配線用キャップイメージ.jpg', storageName: 'wire-cap', category: 'interior-counter/option' },
];

// 全画像マッピングを結合
const ALL_MAPPINGS = [
  ...STORAGE_SHELF_IMAGES,
  ...INTERIOR_COUNTER_IMAGES,
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
  console.log('=== 内装画像一括アップロード開始 ===\n');

  let uploadedCount = 0;
  let linkedCount = 0;
  let skippedCount = 0;

  for (const mapping of ALL_MAPPINGS) {
    const localPath = path.join(BASE_PATH, mapping.localFile);

    if (!fs.existsSync(localPath)) {
      console.log(`  ✗ ファイルが見つかりません: ${mapping.localFile}`);
      skippedCount++;
      continue;
    }

    const ext = path.extname(mapping.localFile).toLowerCase();
    const storagePath = `${mapping.category}/${mapping.storageName}${ext}`;
    const url = await uploadFile(localPath, storagePath);

    if (url) {
      uploadedCount++;
      console.log(`  ✓ ${mapping.storageName}: ${url}`);

      if (mapping.itemCode) {
        const variantId = await getVariantIdByItemAndColor(mapping.itemCode, mapping.colorName ?? null);
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

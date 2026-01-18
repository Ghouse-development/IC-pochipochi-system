/**
 * 玄関収納画像アップロードスクリプト
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
const BASE_PATH = 'G:/共有ドライブ/０７｜設計・ⅠC/13.アプリ用の画像/内装/P.34｜玄関収納';

// 画像マッピング
const IMAGE_MAPPINGS = [
  // イメージ画像
  { localFile: 'イメージa.jpg', storageName: 'image-a' },
  { localFile: 'イメージb.jpg', storageName: 'image-b' },
  { localFile: 'イメージc.jpg', storageName: 'image-c' },
  { localFile: 'image.jpg', storageName: 'image-main' },
  { localFile: 'CA251AHGS-PA0050023_03.jpg', storageName: 'main-product' },
  { localFile: 'Gemini_Generated_Image_7yznls7yznls7yzn.png', storageName: 'ai-image-1' },
  { localFile: 'Gemini_Generated_Image_j8jmaj8jmaj8jmaj.png', storageName: 'ai-image-2' },
  { localFile: 'Gemini_Generated_Image_si4pv0si4pv0si4p.png', storageName: 'ai-image-3' },

  // カウンタータイプ
  { localFile: 'A型カウンター.jpg', storageName: 'counter-type-a', itemCode: 'int-entrance-storage-counter', colorName: 'A型' },
  { localFile: 'B型カウンター.jpg', storageName: 'counter-type-b', itemCode: 'int-entrance-storage-counter', colorName: 'B型' },
  { localFile: 'counteronly.jpg', storageName: 'counter-only', itemCode: 'int-entrance-storage-counter', colorName: 'カウンターのみ' },
  { localFile: 'separate.jpg', storageName: 'separate-type', itemCode: 'int-entrance-storage-type', colorName: 'セパレート' },
  { localFile: 'tall.jpg', storageName: 'tall-type', itemCode: 'int-entrance-storage-type', colorName: 'トール' },
  { localFile: 'konoji.jpg', storageName: 'l-shape', itemCode: 'int-entrance-storage-type', colorName: 'コの字型' },

  // カウンター色
  { localFile: 'ashclearcounter.jpg', storageName: 'counter-ash-clear', itemCode: 'int-entrance-storage-001', colorName: 'アッシュクリア' },
  { localFile: 'cherry counter.jpg', storageName: 'counter-cherry', itemCode: 'int-entrance-storage-001', colorName: 'チェリー' },
  { localFile: 'ideaoakcounter.jpg', storageName: 'counter-idea-oak', itemCode: 'int-entrance-storage-001', colorName: 'イデアオーク' },
  { localFile: 'walnutcounter.jpg', storageName: 'counter-walnut', itemCode: 'int-entrance-storage-001', colorName: 'ウォールナット' },

  // 扉色バリエーション
  { localFile: 'blackoak.jpg', storageName: 'door-black-oak', itemCode: 'int-entrance-storage-door', colorName: 'ブラックオーク' },
  { localFile: 'bluegray.jpg', storageName: 'door-blue-gray', itemCode: 'int-entrance-storage-door', colorName: 'ブルーグレー' },
  { localFile: 'cherry.jpg', storageName: 'door-cherry', itemCode: 'int-entrance-storage-door', colorName: 'チェリー' },
  { localFile: 'greige.jpg', storageName: 'door-greige', itemCode: 'int-entrance-storage-door', colorName: 'グレージュ' },
  { localFile: 'ideaoak.jpg', storageName: 'door-idea-oak', itemCode: 'int-entrance-storage-door', colorName: 'イデアオーク' },
  { localFile: 'maple.jpg', storageName: 'door-maple', itemCode: 'int-entrance-storage-door', colorName: 'メープル' },
  { localFile: 'navyoak.jpg', storageName: 'door-navy-oak', itemCode: 'int-entrance-storage-door', colorName: 'ネイビーオーク' },
  { localFile: 'pearlgray.jpg', storageName: 'door-pearl-gray', itemCode: 'int-entrance-storage-door', colorName: 'パールグレー' },
  { localFile: 'purewirdoak.jpg', storageName: 'door-pure-wild-oak', itemCode: 'int-entrance-storage-door', colorName: 'ピュアワイルドオーク' },
  { localFile: 'sikkuiwhite.jpg', storageName: 'door-shikkui-white', itemCode: 'int-entrance-storage-door', colorName: '漆喰ホワイト' },
  { localFile: 'softwalnut.jpg', storageName: 'door-soft-walnut', itemCode: 'int-entrance-storage-door', colorName: 'ソフトウォールナット' },
  { localFile: 'soilblack.jpg', storageName: 'door-soil-black', itemCode: 'int-entrance-storage-door', colorName: 'ソイルブラック' },
  { localFile: 'walnut.jpg', storageName: 'door-walnut', itemCode: 'int-entrance-storage-door', colorName: 'ウォールナット' },
  { localFile: 'whiteash.jpg', storageName: 'door-white-ash', itemCode: 'int-entrance-storage-door', colorName: 'ホワイトアッシュ' },
  { localFile: 'whiteoak.jpg', storageName: 'door-white-oak', itemCode: 'int-entrance-storage-door', colorName: 'ホワイトオーク' },

  // デザインタイプ
  { localFile: 'flatdesign.jpg', storageName: 'design-flat', itemCode: 'int-entrance-storage-design', colorName: 'フラット' },
  { localFile: 'flattatouchdesign.jpg', storageName: 'design-flat-touch', itemCode: 'int-entrance-storage-design', colorName: 'フラットタッチ' },

  // オプション
  { localFile: 'kamachi.jpg', storageName: 'option-kamachi', itemCode: 'int-entrance-storage-option', colorName: '框' },
  { localFile: 'mirror.png', storageName: 'option-mirror', itemCode: 'int-entrance-storage-option', colorName: 'ミラー' },

  // 機能紹介
  { localFile: 'img_features_m05_p07.jpg', storageName: 'feature-07' },
  { localFile: 'img_features_m05_p08.jpg', storageName: 'feature-08' },
  { localFile: 'img_features_m05_p09.jpg', storageName: 'feature-09' },
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
  console.log('=== 玄関収納 画像アップロード開始 ===\n');

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
    const storagePath = `entrance-storage/${mapping.storageName}${ext}`;
    const url = await uploadFile(localPath, storagePath);

    if (url) {
      uploadedCount++;
      console.log(`  ✓ ${mapping.storageName}: ${url}`);

      if ('itemCode' in mapping && mapping.itemCode) {
        const variantId = await getVariantIdByItemAndColor(mapping.itemCode, 'colorName' in mapping ? mapping.colorName : null);
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

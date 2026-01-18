/**
 * 物干し金物／乾太くん画像アップロードスクリプト
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
const BASE_PATH = 'G:/共有ドライブ/０７｜設計・ⅠC/13.アプリ用の画像/内装/P.38｜物干し金物／乾太くん';

// 画像マッピング
const IMAGE_MAPPINGS = [
  // 物干し金物/A - ホスクリーン SPC（標準サイズ）
  { localFile: '物干し金物/A/ホワイト.jpg', variantCode: 'int-hanger-001-v1', storageName: 'hosclean-spc-white', itemName: 'ホスクリーン（1カ所標準）' },
  { localFile: '物干し金物/A/A：ホスクリーン　SPC（標準サイズ）.jpg', variantCode: null, storageName: 'hosclean-spc-main', itemName: 'ホスクリーンメイン' },
  { localFile: '物干し金物/A/BK（ブラック）.jpg', variantCode: null, storageName: 'hosclean-spc-black', itemName: 'ホスクリーンブラック参考' },
  { localFile: '物干し金物/A/M（木目天井用）.jpg', variantCode: null, storageName: 'hosclean-spc-wood', itemName: 'ホスクリーン木目参考' },

  // 物干し金物/B - Kacu
  { localFile: '物干し金物/B/kacu ホワイト.jpg', variantCode: 'int-laundry-pole-001-v1', storageName: 'kacu-white', itemName: 'Kacu ホワイト' },
  { localFile: '物干し金物/B/kacu ブラック.jpg', variantCode: 'int-laundry-pole-001-v2', storageName: 'kacu-black', itemName: 'Kacu ブラック' },
  { localFile: '物干し金物/B/kacuサイズ-L型F型.jpg', variantCode: null, storageName: 'kacu-sizes', itemName: 'Kacu サイズ参考' },

  // 物干し金物/C - Pid
  { localFile: '物干し金物/C/hoeito.jpg', variantCode: 'int-laundry-pole-002-v1', storageName: 'pid-white', itemName: 'Pid4M ホワイト' },
  { localFile: '物干し金物/C/pid-特徴-01.jpg', variantCode: null, storageName: 'pid-feature', itemName: 'Pid4M 特徴参考' },

  // 物干し金物/D - UTM
  { localFile: '物干し金物/D/UTM_S_W.jpg', variantCode: 'int-laundry-pole-003-v1', storageName: 'utm-white', itemName: 'ホスクリーン昇降タイプ UTM' },

  // 物干し金物/E - URM
  { localFile: '物干し金物/E/URM_S_W.jpg', variantCode: 'int-laundry-pole-004-v1', storageName: 'urm-white', itemName: 'ホスクリーン昇降タイプ URM' },

  // 乾太くん/A - スタンダードタイプ
  { localFile: '乾太くん/A/乾太くん　スタンダードタイプ.png', variantCode: 'int-dryer-001-v1', storageName: 'kanta-standard', itemName: '乾太くん スタンダード 5kg' },

  // 乾太くん/B - デラックスタイプ 6kg
  { localFile: '乾太くん/B/乾太くん　デラックスタイプ.png', variantCode: 'int-dryer-002-v1', storageName: 'kanta-deluxe-6kg', itemName: '乾太くん デラックス 6kg' },

  // 乾太くん/C - デラックスタイプ 9kg
  { localFile: '乾太くん/C/乾太くん　デラックスタイプ.png', variantCode: 'int-dryer-003-v1', storageName: 'kanta-deluxe-9kg', itemName: '乾太くん デラックス 9kg' },

  // 乾太くん 専用架台
  { localFile: '乾太くん/乾太くん　専用架台.png', variantCode: 'int-dryer-004-v1', storageName: 'kanta-stand', itemName: '乾太くん専用架台' },

  // 乾太くん 参考画像
  { localFile: '乾太くん/乾太くん　フード.png', variantCode: null, storageName: 'kanta-hood', itemName: '乾太くん フード参考' },
  { localFile: '乾太くん/img2.jpg', variantCode: null, storageName: 'kanta-lifestyle', itemName: '乾太くん ライフスタイル参考' },
];

async function uploadFile(localPath: string, storagePath: string): Promise<string | null> {
  try {
    const fileBuffer = fs.readFileSync(localPath);
    const ext = path.extname(localPath).toLowerCase();
    const mimeType = ext === '.png' ? 'image/png' : 'image/jpeg';

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

async function getVariantId(variantCode: string): Promise<string | null> {
  const { data, error } = await supabase
    .from('item_variants')
    .select('id')
    .eq('variant_code', variantCode)
    .single();

  if (error || !data) {
    return null;
  }

  return data.id;
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
  console.log('=== 物干し金物／乾太くん 画像アップロード開始 ===\n');

  let uploadedCount = 0;
  let linkedCount = 0;
  let skippedCount = 0;

  for (const mapping of IMAGE_MAPPINGS) {
    const localPath = path.join(BASE_PATH, mapping.localFile);
    const ext = path.extname(mapping.localFile).toLowerCase();

    if (!fs.existsSync(localPath)) {
      console.log(`  ✗ ファイルが見つかりません: ${mapping.localFile}`);
      skippedCount++;
      continue;
    }

    const storagePath = `laundry/${mapping.storageName}${ext}`;
    const url = await uploadFile(localPath, storagePath);

    if (url) {
      uploadedCount++;
      console.log(`  ✓ ${mapping.itemName}: ${url}`);

      if (mapping.variantCode) {
        const variantId = await getVariantId(mapping.variantCode);
        if (variantId) {
          const linked = await updateVariantImage(variantId, url);
          if (linked) {
            linkedCount++;
            console.log(`    → ${mapping.variantCode} に紐づけ完了`);
          }
        } else {
          console.log(`    ⚠ バリアントが見つかりません: ${mapping.variantCode}`);
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

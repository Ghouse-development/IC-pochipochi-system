/**
 * 玄関手洗い画像アップロードスクリプト
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
const BASE_PATH = 'G:/共有ドライブ/０７｜設計・ⅠC/13.アプリ用の画像/内装/P.37｜玄関手洗い';

// 画像マッピング
const IMAGE_MAPPINGS = [
  // メイン画像
  { localFile: 'イメージ画像.JPG', storageName: 'main-image', category: 'entrance-handwash' },
  { localFile: 'KAKUDAI ステンレスボウル一体型コーナーカウンター.jpg', storageName: 'kakudai-corner-counter', category: 'entrance-handwash' },

  // カウンター
  { localFile: 'カウンター/イデアオーク柄.jpg', storageName: 'counter-idea-oak', category: 'entrance-handwash/counter', itemCode: 'int-handwash-counter-001', colorName: 'イデアオーク柄' },
  { localFile: 'カウンター/ウォールナット柄.jpg', storageName: 'counter-walnut', category: 'entrance-handwash/counter', itemCode: 'int-handwash-counter-001', colorName: 'ウォールナット柄' },
  { localFile: 'カウンター/グレージュアッシュ柄.jpg', storageName: 'counter-greige-ash', category: 'entrance-handwash/counter', itemCode: 'int-handwash-counter-001', colorName: 'グレージュアッシュ柄' },
  { localFile: 'カウンター/ソフトウォールナット柄.jpg', storageName: 'counter-soft-walnut', category: 'entrance-handwash/counter', itemCode: 'int-handwash-counter-001', colorName: 'ソフトウォールナット柄' },
  { localFile: 'カウンター/チェリー柄.jpg', storageName: 'counter-cherry', category: 'entrance-handwash/counter', itemCode: 'int-handwash-counter-001', colorName: 'チェリー柄' },
  { localFile: 'カウンター/ホワイトアッシュ柄.jpg', storageName: 'counter-white-ash', category: 'entrance-handwash/counter', itemCode: 'int-handwash-counter-001', colorName: 'ホワイトアッシュ柄' },
  { localFile: 'カウンター/ホワイトオーク柄.jpg', storageName: 'counter-white-oak', category: 'entrance-handwash/counter', itemCode: 'int-handwash-counter-001', colorName: 'ホワイトオーク柄' },
  { localFile: 'カウンター/メープル柄.jpg', storageName: 'counter-maple', category: 'entrance-handwash/counter', itemCode: 'int-handwash-counter-001', colorName: 'メープル柄' },

  // ブラケット
  { localFile: 'ブラケット/ブラケット：オフブラック.jpg', storageName: 'bracket-off-black', category: 'entrance-handwash/bracket', itemCode: 'int-handwash-bracket-001', colorName: 'オフブラック' },
  { localFile: 'ブラケット/ブラケット：サテンシルバー.jpg', storageName: 'bracket-satin-silver', category: 'entrance-handwash/bracket', itemCode: 'int-handwash-bracket-001', colorName: 'サテンシルバー' },

  // ボウル（タイプ別）
  { localFile: 'ボウル/LY-493231-D.jpg', storageName: 'bowl-493231-d', category: 'entrance-handwash/bowl', itemCode: 'int-handwash-bowl-001', colorName: 'D（ダーク）' },
  { localFile: 'ボウル/LY-493231-GY.jpg', storageName: 'bowl-493231-gy', category: 'entrance-handwash/bowl', itemCode: 'int-handwash-bowl-001', colorName: 'GY（グレー）' },
  { localFile: 'ボウル/LY-493231-W.jpg', storageName: 'bowl-493231-w', category: 'entrance-handwash/bowl', itemCode: 'int-handwash-bowl-001', colorName: 'W（ホワイト）' },
  { localFile: 'ボウル/LY-493232-D.jpg', storageName: 'bowl-493232-d', category: 'entrance-handwash/bowl', itemCode: 'int-handwash-bowl-002', colorName: 'D（ダーク）' },
  { localFile: 'ボウル/LY-493232-GY.jpg', storageName: 'bowl-493232-gy', category: 'entrance-handwash/bowl', itemCode: 'int-handwash-bowl-002', colorName: 'GY（グレー）' },
  { localFile: 'ボウル/LY-493232-W.jpg', storageName: 'bowl-493232-w', category: 'entrance-handwash/bowl', itemCode: 'int-handwash-bowl-002', colorName: 'W（ホワイト）' },
  { localFile: 'ボウル/LY-493233-D.jpg', storageName: 'bowl-493233-d', category: 'entrance-handwash/bowl', itemCode: 'int-handwash-bowl-003', colorName: 'D（ダーク）' },
  { localFile: 'ボウル/LY-493233-GY.jpg', storageName: 'bowl-493233-gy', category: 'entrance-handwash/bowl', itemCode: 'int-handwash-bowl-003', colorName: 'GY（グレー）' },
  { localFile: 'ボウル/LY-493233-W.jpg', storageName: 'bowl-493233-w', category: 'entrance-handwash/bowl', itemCode: 'int-handwash-bowl-003', colorName: 'W（ホワイト）' },

  // 水栓
  { localFile: '水栓/183-309.jpg', storageName: 'faucet-183-309', category: 'entrance-handwash/faucet', itemCode: 'int-handwash-faucet-001', colorName: 'クロム' },
  { localFile: '水栓/183-309-D.jpg', storageName: 'faucet-183-309-d', category: 'entrance-handwash/faucet', itemCode: 'int-handwash-faucet-001', colorName: 'マットブラック' },
  { localFile: '水栓/193-001.jpg', storageName: 'faucet-193-001', category: 'entrance-handwash/faucet', itemCode: 'int-handwash-faucet-002', colorName: 'クロム' },
  { localFile: '水栓/193-001-D.jpg', storageName: 'faucet-193-001-d', category: 'entrance-handwash/faucet', itemCode: 'int-handwash-faucet-002', colorName: 'マットブラック' },

  // 排水トラップ
  { localFile: '排水トラップ/433-310-32.jpg', storageName: 'drain-trap-310-32', category: 'entrance-handwash/drain', itemCode: 'int-handwash-drain-001', colorName: null },
  { localFile: '排水トラップ/433-401-25.jpg', storageName: 'drain-trap-401-25', category: 'entrance-handwash/drain', itemCode: 'int-handwash-drain-002', colorName: null },
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
  console.log('=== 玄関手洗い 画像アップロード開始 ===\n');

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
    const storagePath = `${mapping.category}/${mapping.storageName}${ext}`;
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

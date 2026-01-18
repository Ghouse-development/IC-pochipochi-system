/**
 * 中継ポール（スッキリポール）画像アップロードスクリプト
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

// フォルダパス（ワイルドカードで取得したパスを使用）
const BASE_PATH = 'G:/共有ドライブ/０７｜設計・ⅠC/13.アプリ用の画像/外装';

// 画像マッピング
const IMAGE_MAPPINGS = [
  // スタンダードタイプ
  { file: 'ivory.jpg', variantCode: 'ext-sukkiri-pole-standard-v1', storageName: 'ivory', colorJa: 'アイボリー' },
  { file: 'coffee brown.jpg', variantCode: 'ext-sukkiri-pole-standard-v2', storageName: 'coffee-brown', colorJa: 'コーヒーブラウン' },
  // スマートタイプ
  { file: 'white silver.jpg', variantCode: 'ext-sukkiri-pole-smart-v1', storageName: 'white-silver', colorJa: 'ホワイトシルバー' },
  { file: 'champagne bronze.jpg', variantCode: 'ext-sukkiri-pole-smart-v2', storageName: 'champagne-bronze', colorJa: 'シャンパンブロンズ' },
];

// 追加画像（参考用）
const EXTRA_IMAGES = [
  { file: 'img_feature03.jpg', storageName: 'feature' },
  { file: 'smart.jpg', storageName: 'smart-type-main' },
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
      console.error(`アップロードエラー (${storagePath}):`, error);
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
    console.error(`バリアント取得エラー (${variantCode}):`, error);
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

async function findFolder(): Promise<string | null> {
  // フォルダ名にワイルドカードを使用してパスを取得
  const folders = fs.readdirSync(BASE_PATH);
  const targetFolder = folders.find(f => f.includes('中継ポール') && f.includes('スッキリポール'));

  if (targetFolder) {
    return path.join(BASE_PATH, targetFolder);
  }
  return null;
}

async function main(): Promise<void> {
  console.log('=== 中継ポール（スッキリポール）画像アップロード開始 ===\n');

  const folderPath = await findFolder();
  if (!folderPath) {
    console.error('フォルダが見つかりません');
    process.exit(1);
  }
  console.log(`フォルダ: ${folderPath}\n`);

  // バリアント画像のアップロード
  console.log('=== バリアント画像 ===');
  for (const mapping of IMAGE_MAPPINGS) {
    const localPath = path.join(folderPath, mapping.file);

    if (!fs.existsSync(localPath)) {
      console.log(`  ✗ ファイルが見つかりません: ${mapping.file}`);
      continue;
    }

    const storagePath = `sukkiri-pole/${mapping.storageName}.jpg`;
    const url = await uploadFile(localPath, storagePath);

    if (url) {
      console.log(`  ✓ ${mapping.colorJa}: ${url}`);

      const variantId = await getVariantId(mapping.variantCode);
      if (variantId) {
        await updateVariantImage(variantId, url);
        console.log(`    → ${mapping.variantCode} に紐づけ完了`);
      } else {
        console.log(`    ✗ バリアントが見つかりません: ${mapping.variantCode}`);
      }
    }
  }

  // 追加画像のアップロード（参考用）
  console.log('\n=== 追加画像（参考用） ===');
  for (const extra of EXTRA_IMAGES) {
    const localPath = path.join(folderPath, extra.file);

    if (!fs.existsSync(localPath)) {
      console.log(`  ✗ ファイルが見つかりません: ${extra.file}`);
      continue;
    }

    const storagePath = `sukkiri-pole/${extra.storageName}.jpg`;
    const url = await uploadFile(localPath, storagePath);

    if (url) {
      console.log(`  ✓ ${extra.file}: ${url}`);
    }
  }

  console.log('\n=== アップロード完了 ===');
}

main().catch(console.error);

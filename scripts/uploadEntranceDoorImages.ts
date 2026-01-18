/**
 * 玄関ドア画像アップロードスクリプト
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
const BASE_PATH = 'G:/共有ドライブ/０７｜設計・ⅠC/13.アプリ用の画像/外装/P.25｜玄関ドア';

// 色名を英語に変換
const COLOR_TO_EN: Record<string, string> = {
  'ナチュラルオーク': 'natural-oak',
  'ステインウォールナット': 'stein-walnut',
  'ガナッシュウォールナット': 'ganache-walnut',
  'キャラメルチーク': 'caramel-teak',
  'マキアートパイン': 'macchiato-pine',
  'アイスブルーノーチェ': 'ice-blue-noce',
  'ココナッツチェリー': 'coconut-cherry',
  'ディープグレイ': 'deep-gray',
  'オリーブグリーン': 'olive-green',
  'カームブラック': 'calm-black',
  'ガトーアカシア': 'gateau-acacia',
  'サファイアブルー': 'sapphire-blue',
  'スモークヒッコリー': 'smoke-hickory',
  'ダージリンウォールナット': 'darjeeling-walnut',
  'バニラウォールナット': 'vanilla-walnut',
  'ビターストーン': 'bitter-stone',
  'ピュアシルバー': 'pure-silver',
  'プラチナステン': 'platinum-sten',
  'ルビーレッド': 'ruby-red',
  '桑炭': 'kuwa-sumi',
};

// 画像マッピング（モデル別）
const DOOR_MODELS = [
  {
    folder: 'N08',
    modelName: 'N08',
    itemCode: 'ext-door-n08',
    colors: [
      { file: 'naturaloak.jpg', color: 'ナチュラルオーク' },
      { file: 'stainwalnut.jpg', color: 'ステインウォールナット' },
      { file: 'ガナッシュウォールナット.jpg', color: 'ガナッシュウォールナット' },
      { file: 'キャラメルチーク.jpg', color: 'キャラメルチーク' },
      { file: 'マキアートパイン.jpg', color: 'マキアートパイン' },
    ]
  },
  {
    folder: 'N15',
    modelName: 'N15',
    itemCode: 'ext-door-n15',
    colors: [
      { file: 'ナチュラルオーク.jpg', color: 'ナチュラルオーク' },
      { file: 'ステインウォールナット.jpg', color: 'ステインウォールナット' },
      { file: 'キャラメルチーク.jpg', color: 'キャラメルチーク' },
      { file: 'マキアートパイン.jpg', color: 'マキアートパイン' },
      { file: 'アイスブルーノーチェ.jpg', color: 'アイスブルーノーチェ' },
      { file: 'ココナッツチェリー.jpg', color: 'ココナッツチェリー' },
      { file: 'ディープグレイ.jpg', color: 'ディープグレイ' },
    ]
  },
  {
    folder: 'N18',
    modelName: 'N18',
    itemCode: 'ext-door-n18',
    colors: [
      { file: 'ナチュラルオーク.jpg', color: 'ナチュラルオーク' },
      { file: 'ステインウォールナット.jpg', color: 'ステインウォールナット' },
      { file: 'キャラメルチーク.jpg', color: 'キャラメルチーク' },
      { file: 'マキアートパイン.jpg', color: 'マキアートパイン' },
      { file: 'アイスブルーノーチェ.jpg', color: 'アイスブルーノーチェ' },
      { file: 'ココナッツチェリー.jpg', color: 'ココナッツチェリー' },
      { file: 'ディープグレイ.jpg', color: 'ディープグレイ' },
    ]
  },
  {
    folder: 'C10',
    modelName: 'C10',
    itemCode: 'ext-door-c10',
    colors: [
      { file: 'naturaloak.jpg', color: 'ナチュラルオーク' },
      { file: 'steinwalnut.jpg', color: 'ステインウォールナット' },
      { file: 'アイスブルーノーチェ.jpg', color: 'アイスブルーノーチェ' },
      { file: 'オリーブグリーン.jpg', color: 'オリーブグリーン' },
      { file: 'カームブラック.jpg', color: 'カームブラック' },
      { file: 'ガトーアカシア.jpg', color: 'ガトーアカシア' },
      { file: 'ガナッシュウォールナット.jpg', color: 'ガナッシュウォールナット' },
      { file: 'キャラメルチーク.jpg', color: 'キャラメルチーク' },
      { file: 'ココナッツチェリー.jpg', color: 'ココナッツチェリー' },
      { file: 'サファイアブルー.jpg', color: 'サファイアブルー' },
      { file: 'スモークヒッコリー.jpg', color: 'スモークヒッコリー' },
      { file: 'ダージリンウォールナット.jpg', color: 'ダージリンウォールナット' },
      { file: 'ディープグレイ.jpg', color: 'ディープグレイ' },
      { file: 'バニラウォールナット.jpg', color: 'バニラウォールナット' },
      { file: 'ビターストーン.jpg', color: 'ビターストーン' },
      { file: 'ピュアシルバー.jpg', color: 'ピュアシルバー' },
      { file: 'プラチナステン.jpg', color: 'プラチナステン' },
      { file: 'マキアートパイン.jpg', color: 'マキアートパイン' },
      { file: 'ルビーレッド.jpg', color: 'ルビーレッド' },
      { file: '桑炭.jpg', color: '桑炭' },
    ]
  },
];

// 追加画像（参考用）
const EXTRA_IMAGES = [
  { file: '玄関ドアイメージ画像.jpg', storageName: 'entrance-door-main' },
  { file: 'YKKAP logo.png', storageName: 'ykkap-logo' },
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

async function getVariantIdByItemAndColor(itemCode: string, colorName: string): Promise<string | null> {
  // まずアイテムIDを取得
  const { data: item } = await supabase
    .from('items')
    .select('id')
    .eq('item_code', itemCode)
    .single();

  if (!item) {
    return null;
  }

  // 次にバリアントを色名で検索
  const { data: variant } = await supabase
    .from('item_variants')
    .select('id')
    .eq('item_id', item.id)
    .eq('color_name', colorName)
    .single();

  return variant?.id || null;
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
  console.log('=== 玄関ドア 画像アップロード開始 ===\n');

  let uploadedCount = 0;
  let linkedCount = 0;
  let skippedCount = 0;

  // 各モデルの画像をアップロード
  for (const model of DOOR_MODELS) {
    console.log(`\n=== ${model.modelName} ===`);

    for (const colorInfo of model.colors) {
      const localPath = path.join(BASE_PATH, model.folder, colorInfo.file);

      if (!fs.existsSync(localPath)) {
        console.log(`  ✗ ファイルが見つかりません: ${colorInfo.file}`);
        skippedCount++;
        continue;
      }

      const colorEn = COLOR_TO_EN[colorInfo.color] || colorInfo.color.toLowerCase().replace(/\s+/g, '-');
      const storagePath = `entrance-door/${model.modelName.toLowerCase()}/${colorEn}.jpg`;
      const url = await uploadFile(localPath, storagePath);

      if (url) {
        uploadedCount++;
        console.log(`  ✓ ${colorInfo.color}: ${url}`);

        const variantId = await getVariantIdByItemAndColor(model.itemCode, colorInfo.color);
        if (variantId) {
          const linked = await updateVariantImage(variantId, url);
          if (linked) {
            linkedCount++;
            console.log(`    → ${model.itemCode} (${colorInfo.color}) に紐づけ完了`);
          }
        } else {
          console.log(`    ⚠ バリアントが見つかりません: ${model.itemCode} / ${colorInfo.color}`);
        }
      }
    }
  }

  // 追加画像（参考用）
  console.log('\n=== 追加画像（参考用） ===');
  for (const extra of EXTRA_IMAGES) {
    const localPath = path.join(BASE_PATH, extra.file);

    if (!fs.existsSync(localPath)) {
      console.log(`  ✗ ファイルが見つかりません: ${extra.file}`);
      continue;
    }

    const ext = path.extname(extra.file).toLowerCase();
    const storagePath = `entrance-door/${extra.storageName}${ext}`;
    const url = await uploadFile(localPath, storagePath);

    if (url) {
      uploadedCount++;
      console.log(`  ✓ ${extra.file}: ${url}`);
    }
  }

  console.log('\n=== アップロード完了 ===');
  console.log(`アップロード: ${uploadedCount}件`);
  console.log(`紐づけ: ${linkedCount}件`);
  console.log(`スキップ: ${skippedCount}件`);
}

main().catch(console.error);

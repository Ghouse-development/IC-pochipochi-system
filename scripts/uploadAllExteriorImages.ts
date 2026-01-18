/**
 * 外装画像一括アップロードスクリプト
 * すべての外装フォルダの画像をアップロードし、既存アイテムに紐づける
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
const BUCKET_URL = `${supabaseUrl}/storage/v1/object/public/${BUCKET_NAME}`;
const BASE_PATH = 'G:/共有ドライブ/０７｜設計・ⅠC/13.アプリ用の画像/外装';

// ========== 画像マッピング定義 ==========

// 庇 (P.21)
const EAVES_IMAGES = [
  { itemCode: 'awning-alfin-ad2s', localFile: 'P.21｜庇/AD2S/main.jpg', storagePath: 'eaves/ad2s-main.jpg', colorName: null },
  { itemCode: 'awning-alfin-ad2s', localFile: 'P.21｜庇/AD2S/color_silver.png', storagePath: 'eaves/ad2s-silver.png', colorName: 'シルバー' },
  { itemCode: 'awning-alfin-ad2s', localFile: 'P.21｜庇/AD2S/color_black.png', storagePath: 'eaves/ad2s-black.png', colorName: 'ブラック' },
  { itemCode: 'awning-alfin-ad2s', localFile: 'P.21｜庇/AD2S/color_stencollar.png', storagePath: 'eaves/ad2s-stencollar.png', colorName: 'ステンカラー' },
];

// ガレージシャッター (P.22)
const GARAGE_IMAGES = [
  { itemCode: null, localFile: 'P.22｜電動ガレージシャッター/サンオートハイスピード/ホワイト.png', storagePath: 'garage/sun-auto-white.png', colorName: 'ホワイト' },
  { itemCode: null, localFile: 'P.22｜電動ガレージシャッター/サンオートハイスピード/クールシルバー.png', storagePath: 'garage/sun-auto-cool-silver.png', colorName: 'クールシルバー' },
  { itemCode: null, localFile: 'P.22｜電動ガレージシャッター/サンオートハイスピード/サンド.png', storagePath: 'garage/sun-auto-sand.png', colorName: 'サンド' },
  { itemCode: null, localFile: 'P.22｜電動ガレージシャッター/サンオートハイスピード/ビンテージウォールナット.png', storagePath: 'garage/sun-auto-walnut.png', colorName: 'ビンテージウォールナット' },
  { itemCode: null, localFile: 'P.22｜電動ガレージシャッター/サンオートハイスピード/ライトグレー.png', storagePath: 'garage/sun-auto-light-gray.png', colorName: 'ライトグレー' },
  { itemCode: null, localFile: 'P.22｜電動ガレージシャッター/威風堂々/シルバー.jpg', storagePath: 'garage/ifudo-silver.jpg', colorName: 'シルバー' },
  { itemCode: null, localFile: 'P.22｜電動ガレージシャッター/威風堂々/ステンカラー.jpg', storagePath: 'garage/ifudo-sten.jpg', colorName: 'ステンカラー' },
  { itemCode: null, localFile: 'P.22｜電動ガレージシャッター/威風堂々/ウォールナット.jpg', storagePath: 'garage/ifudo-walnut.jpg', colorName: 'ウォールナット' },
];

// 屋根・軒天 (P.19)
const ROOF_SOFFIT_IMAGES = [
  // 屋根
  { itemCode: 'ext-roof-nisc', localFile: 'P.19｜屋根／樋／軒天/屋根材/roof.png', storagePath: 'roof/nisuku-sgl.png', colorName: null },
  // 軒天 エンボス
  { itemCode: 'ext-soffit-emboss', localFile: 'P.19｜屋根／樋／軒天/軒天(KONOSHIMA)/エンボス/ファミリーホワイト.jpg', storagePath: 'soffit/emboss-white.jpg', colorName: 'ファミリーホワイト' },
  { itemCode: 'ext-soffit-emboss', localFile: 'P.19｜屋根／樋／軒天/軒天(KONOSHIMA)/エンボス/ミルトアイボリー.jpg', storagePath: 'soffit/emboss-ivory.jpg', colorName: 'ミルトアイボリー' },
  { itemCode: 'ext-soffit-emboss', localFile: 'P.19｜屋根／樋／軒天/軒天(KONOSHIMA)/エンボス/ファインステン.jpg', storagePath: 'soffit/emboss-sten.jpg', colorName: 'ファインステン' },
  { itemCode: 'ext-soffit-emboss', localFile: 'P.19｜屋根／樋／軒天/軒天(KONOSHIMA)/エンボス/エボニーブラウン.jpg', storagePath: 'soffit/emboss-brown.jpg', colorName: 'エボニーブラウン' },
  { itemCode: 'ext-soffit-emboss', localFile: 'P.19｜屋根／樋／軒天/軒天(KONOSHIMA)/エンボス/チャコールブラック.jpg', storagePath: 'soffit/emboss-black.jpg', colorName: 'チャコールブラック' },
];

// ポーチタイル (P.18)
const PORCH_IMAGES = [
  // ベスパ
  { itemCode: 'porch-tile-vespa', localFile: 'P.18｜ポーチ/LIXIL/ベスパ/VSP-SA1.png', storagePath: 'porch/vespa-sa1.png', colorName: 'VSP-SA1' },
  { itemCode: 'porch-tile-vespa', localFile: 'P.18｜ポーチ/LIXIL/ベスパ/VSP-SA2.png', storagePath: 'porch/vespa-sa2.png', colorName: 'VSP-SA2' },
  { itemCode: 'porch-tile-vespa', localFile: 'P.18｜ポーチ/LIXIL/ベスパ/VSP-SA3.png', storagePath: 'porch/vespa-sa3.png', colorName: 'VSP-SA3' },
  { itemCode: 'porch-tile-vespa', localFile: 'P.18｜ポーチ/LIXIL/ベスパ/VSP-SL1.png', storagePath: 'porch/vespa-sl1.png', colorName: 'VSP-SL1' },
  // メンフィス
  { itemCode: 'porch-tile-memphis', localFile: 'P.18｜ポーチ/LIXIL/メンフィス/600角/MMP-11.png', storagePath: 'porch/memphis-11.png', colorName: 'MMP-11' },
  { itemCode: 'porch-tile-memphis', localFile: 'P.18｜ポーチ/LIXIL/メンフィス/600角/MMP-12.png', storagePath: 'porch/memphis-12.png', colorName: 'MMP-12' },
  { itemCode: 'porch-tile-memphis', localFile: 'P.18｜ポーチ/LIXIL/メンフィス/600角/MMP-13.png', storagePath: 'porch/memphis-13.png', colorName: 'MMP-13' },
  { itemCode: 'porch-tile-memphis', localFile: 'P.18｜ポーチ/LIXIL/メンフィス/600角/MMP-14.png', storagePath: 'porch/memphis-14.png', colorName: 'MMP-14' },
  // ネイチャーII
  { itemCode: 'porch-tile-nature2', localFile: 'P.18｜ポーチ/名古屋モザイク/ネイチャーⅡ/MSY-R3010.png', storagePath: 'porch/nature2-r3010.png', colorName: 'MSY-R3010' },
  { itemCode: 'porch-tile-nature2', localFile: 'P.18｜ポーチ/名古屋モザイク/ネイチャーⅡ/MSY-R3020.png', storagePath: 'porch/nature2-r3020.png', colorName: 'MSY-R3020' },
  { itemCode: 'porch-tile-nature2', localFile: 'P.18｜ポーチ/名古屋モザイク/ネイチャーⅡ/MSY-R3030.png', storagePath: 'porch/nature2-r3030.png', colorName: 'MSY-R3030' },
  // ピエトラソーニ
  { itemCode: 'porch-tile-pietra-soni', localFile: 'P.18｜ポーチ/名古屋モザイク/ピエトラソーニ/600角粗目/PAN-X8110G.png', storagePath: 'porch/pietra-x8110.png', colorName: 'PAN-X8110G' },
  { itemCode: 'porch-tile-pietra-soni', localFile: 'P.18｜ポーチ/名古屋モザイク/ピエトラソーニ/600角粗目/PAN-X8120G.png', storagePath: 'porch/pietra-x8120.png', colorName: 'PAN-X8120G' },
  // ランドストン
  { itemCode: 'porch-tile-landstone', localFile: 'P.18｜ポーチ/名古屋モザイク/ランドストン/600×600/CRD-X3910G.png', storagePath: 'porch/landstone-x3910.png', colorName: 'CRD-X3910G' },
  { itemCode: 'porch-tile-landstone', localFile: 'P.18｜ポーチ/名古屋モザイク/ランドストン/600×600/CRD-X3920G.png', storagePath: 'porch/landstone-x3920.png', colorName: 'CRD-X3920G' },
  // モルタル
  { itemCode: 'porch-mortar', localFile: 'P.18｜ポーチ/モルタル/Image_20240930_205504_608.jpeg', storagePath: 'porch/mortar.jpg', colorName: null },
];

// 外部設備 (P.26)
const FACILITY_IMAGES = [
  // アンテナ
  { itemCode: null, localFile: 'P.26｜外部設備/アンテナ/white.jpg', storagePath: 'facility/antenna-white.jpg', colorName: 'ホワイト' },
  { itemCode: null, localFile: 'P.26｜外部設備/アンテナ/black.jpg', storagePath: 'facility/antenna-black.jpg', colorName: 'ブラック' },
  { itemCode: null, localFile: 'P.26｜外部設備/アンテナ/beige.jpg', storagePath: 'facility/antenna-beige.jpg', colorName: 'ベージュ' },
  // エコキュート
  { itemCode: 'ext-ecocute-standard', localFile: 'P.26｜外部設備/エコキュート/lineup_s46lqs_main.jpg', storagePath: 'facility/ecocute-370l.jpg', colorName: null },
  { itemCode: 'ext-ecocute-460l', localFile: 'P.26｜外部設備/エコキュート/lineup_h46lqs_main.jpg', storagePath: 'facility/ecocute-460l.jpg', colorName: null },
  // ナノバブル
  { itemCode: null, localFile: 'P.26｜外部設備/ナノバブル/nanobubble.jpg', storagePath: 'facility/nanobubble.jpg', colorName: null },
];

// ========== ユーティリティ関数 ==========

async function uploadFile(localPath: string, storagePath: string): Promise<string | null> {
  try {
    if (!fs.existsSync(localPath)) {
      return null;
    }
    const fileBuffer = fs.readFileSync(localPath);
    const ext = path.extname(localPath).toLowerCase();
    const mimeType = ext === '.png' ? 'image/png' : ext === '.jpeg' ? 'image/jpeg' : 'image/jpeg';

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(storagePath, fileBuffer, {
        contentType: mimeType,
        upsert: true
      });

    if (error) {
      console.error(`  アップロードエラー: ${error.message}`);
      return null;
    }

    return `${BUCKET_URL}/${storagePath}`;
  } catch (error) {
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
    // colorNameがない場合は最初のバリアントを取得
    const { data: variants } = await supabase
      .from('item_variants')
      .select('id')
      .eq('item_id', item.id)
      .limit(1);
    return variants?.[0]?.id || null;
  }
}

async function linkImageToVariant(variantId: string, imageUrl: string): Promise<boolean> {
  const { data: existing } = await supabase
    .from('item_variant_images')
    .select('id')
    .eq('variant_id', variantId);

  if (existing && existing.length > 0) {
    const { error } = await supabase
      .from('item_variant_images')
      .update({ image_url: imageUrl, thumbnail_url: imageUrl, is_primary: true })
      .eq('variant_id', variantId);
    return !error;
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
    return !error;
  }
}

async function processImageMappings(mappings: typeof EAVES_IMAGES, categoryName: string): Promise<{ uploaded: number; linked: number }> {
  console.log(`\n=== ${categoryName} ===`);
  let uploaded = 0;
  let linked = 0;

  for (const mapping of mappings) {
    const localPath = path.join(BASE_PATH, mapping.localFile);
    const url = await uploadFile(localPath, mapping.storagePath);

    if (url) {
      uploaded++;
      const displayName = mapping.colorName || path.basename(mapping.localFile);
      console.log(`  ✓ ${displayName}`);

      if (mapping.itemCode) {
        const variantId = await getVariantIdByItemAndColor(mapping.itemCode, mapping.colorName);
        if (variantId) {
          const success = await linkImageToVariant(variantId, url);
          if (success) {
            linked++;
            console.log(`    → ${mapping.itemCode} に紐づけ`);
          }
        }
      }
    } else {
      console.log(`  ✗ ファイルなし: ${mapping.localFile}`);
    }
  }

  return { uploaded, linked };
}

// ========== メイン処理 ==========

async function main(): Promise<void> {
  console.log('=== 外装画像一括アップロード開始 ===');

  let totalUploaded = 0;
  let totalLinked = 0;

  // 各カテゴリを処理
  const categories = [
    { mappings: EAVES_IMAGES, name: '庇 (P.21)' },
    { mappings: GARAGE_IMAGES, name: 'ガレージシャッター (P.22)' },
    { mappings: ROOF_SOFFIT_IMAGES, name: '屋根・軒天 (P.19)' },
    { mappings: PORCH_IMAGES, name: 'ポーチタイル (P.18)' },
    { mappings: FACILITY_IMAGES, name: '外部設備 (P.26)' },
  ];

  for (const category of categories) {
    const result = await processImageMappings(category.mappings, category.name);
    totalUploaded += result.uploaded;
    totalLinked += result.linked;
  }

  console.log('\n=== 完了 ===');
  console.log(`総アップロード: ${totalUploaded}件`);
  console.log(`総紐づけ: ${totalLinked}件`);
}

main().catch(console.error);

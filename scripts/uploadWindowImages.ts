/**
 * 窓画像アップロードスクリプト
 *
 * 使い方:
 * npx tsx scripts/uploadWindowImages.ts
 *
 * 実行前に.envファイルにSupabase認証情報を設定してください
 */

import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
dotenv.config();

import { createClient } from '@supabase/supabase-js';

// Supabase設定（Service Roleキーを使用してRLSをバイパス）
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('環境変数 VITE_SUPABASE_URL と SUPABASE_SERVICE_ROLE_KEY を設定してください');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const BUCKET_NAME = 'product-images';
const BASE_PATH = 'G:/共有ドライブ/０７｜設計・ⅠC/13.アプリ用の画像/外装/P.23｜窓';

// 画像マッピング設定
interface ImageMapping {
  localPath: string;
  storagePath: string;
  variantCode?: string;
  itemCode?: string;
  colorName?: string;
  isPrimary?: boolean;
  isMainImage?: boolean;
}

// APW330の外観色マッピング（順序はファイル名順）
const APW330_EXTERIOR_COLORS = [
  { file: 'w002_index_image_variation_2-001.jpg', color: 'ホワイト', colorEn: 'white' },
  { file: 'w002_index_image_variation_2-002.jpg', color: 'プラチナステン', colorEn: 'platinum-sten' },
  { file: 'w002_index_image_variation_2-003.jpg', color: 'ブラウン', colorEn: 'brown' },
  { file: 'w002_index_image_variation_2-004.jpg', color: 'ブラック', colorEn: 'black' },
];

// APW330の内観色マッピング
const APW330_INTERIOR_COLORS = [
  { file: 'w002_index_image_variation_1-001.jpg', color: 'ホワイト', colorEn: 'white' },
  { file: 'w002_index_image_variation_1-002.jpg', color: 'クリア', colorEn: 'clear' },
  { file: 'w002_index_image_variation_1-003.jpg', color: 'ダークブラウン', colorEn: 'dark-brown' },
  { file: 'w002_index_image_variation_1-004.jpg', color: 'ナチュラル', colorEn: 'natural' },
  { file: 'w002_index_image_variation_1-005.jpg', color: 'キャラメル', colorEn: 'caramel' },
];

// APW430の外観色マッピング
const APW430_EXTERIOR_COLORS = [
  { file: 'w001_index_image_variation_2-001.jpg', color: 'ホワイト', colorEn: 'white' },
  { file: 'w001_index_image_variation_2-002.jpg', color: 'プラチナステン', colorEn: 'platinum-sten' },
  { file: 'w001_index_image_variation_2-003.jpg', color: 'ブラウン', colorEn: 'brown' },
  { file: 'w001_index_image_variation_2-004.jpg', color: 'ブラック', colorEn: 'black' },
];

// APW430の内観色マッピング
const APW430_INTERIOR_COLORS = [
  { file: 'w001_index_image_variation_1-001.jpg', color: 'ホワイト', colorEn: 'white' },
  { file: 'w001_index_image_variation_1-002.jpg', color: 'ダークブラウン', colorEn: 'dark-brown' },
];

// ガラス種類
const GLASS_TYPES = [
  { file: '透明ガラス比較.jpg', name: '透明ガラス', nameEn: 'clear-glass' },
  { file: '型板ガラス.jpg', name: '型板ガラス', nameEn: 'patterned-glass' },
  { file: '網入り透明ガラス.jpg', name: '網入り透明ガラス', nameEn: 'wired-clear-glass' },
  { file: '網入り型ガラス.jpg', name: '網入り型ガラス', nameEn: 'wired-patterned-glass' },
];

// ハンドル種類
const HANDLE_TYPES = [
  { file: 'sp-opehan_image1.png', name: 'オペレーターハンドル', nameEn: 'operator-handle' },
  { file: 'PS_546WMHH3K31344.jpg', name: 'グレモンハンドル', nameEn: 'cremon-handle' },
];

async function ensureBucketExists(): Promise<boolean> {
  try {
    const { data: buckets, error } = await supabase.storage.listBuckets();

    if (error) {
      console.error('バケット一覧取得エラー:', error);
      return false;
    }

    const bucketExists = buckets?.some(bucket => bucket.id === BUCKET_NAME);

    if (!bucketExists) {
      console.log(`バケット '${BUCKET_NAME}' を作成中...`);
      const { error: createError } = await supabase.storage.createBucket(BUCKET_NAME, {
        public: true,
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
        fileSizeLimit: 5 * 1024 * 1024 // 5MB
      });

      if (createError) {
        console.error('バケット作成エラー:', createError);
        return false;
      }
      console.log('バケット作成完了');
    }

    return true;
  } catch (error) {
    console.error('バケット確認エラー:', error);
    return false;
  }
}

async function uploadFile(localPath: string, storagePath: string): Promise<string | null> {
  try {
    // ファイル読み込み
    const fileBuffer = fs.readFileSync(localPath);
    const ext = path.extname(localPath).toLowerCase();
    const mimeType = ext === '.png' ? 'image/png' : 'image/jpeg';

    // アップロード
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(storagePath, fileBuffer, {
        contentType: mimeType,
        upsert: true // 上書き許可
      });

    if (error) {
      console.error(`アップロードエラー (${storagePath}):`, error);
      return null;
    }

    // パブリックURL取得
    const { data: { publicUrl } } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(storagePath);

    return publicUrl;
  } catch (error) {
    console.error(`ファイル処理エラー (${localPath}):`, error);
    return null;
  }
}

async function getVariantId(itemCode: string, variantCode: string): Promise<string | null> {
  const { data, error } = await supabase
    .from('item_variants')
    .select('id')
    .eq('variant_code', variantCode)
    .single();

  if (error || !data) {
    // variant_codeで見つからない場合、item_codeとcolor_nameで検索
    const { data: itemData } = await supabase
      .from('items')
      .select('id')
      .eq('item_code', itemCode)
      .single();

    if (itemData) {
      const { data: variantData } = await supabase
        .from('item_variants')
        .select('id')
        .eq('item_id', itemData.id)
        .limit(1)
        .single();

      return variantData?.id || null;
    }
    return null;
  }

  return data.id;
}

async function updateVariantImage(
  variantId: string,
  imageUrl: string,
  thumbnailUrl?: string,
  isPrimary: boolean = true
): Promise<boolean> {
  // 既存の画像を確認
  const { data: existingImages } = await supabase
    .from('item_variant_images')
    .select('id')
    .eq('variant_id', variantId);

  if (existingImages && existingImages.length > 0) {
    // 既存の画像を更新
    const { error } = await supabase
      .from('item_variant_images')
      .update({
        image_url: imageUrl,
        thumbnail_url: thumbnailUrl || imageUrl,
        is_primary: isPrimary
      })
      .eq('variant_id', variantId);

    if (error) {
      console.error('画像更新エラー:', error);
      return false;
    }
  } else {
    // 新規画像を挿入
    const { error } = await supabase
      .from('item_variant_images')
      .insert({
        variant_id: variantId,
        image_url: imageUrl,
        thumbnail_url: thumbnailUrl || imageUrl,
        is_primary: isPrimary,
        display_order: 0
      });

    if (error) {
      console.error('画像挿入エラー:', error);
      return false;
    }
  }

  return true;
}

async function uploadAPW330Images(): Promise<void> {
  console.log('\n=== APW330 画像アップロード ===');

  // メイン画像
  const mainImagePath = path.join(BASE_PATH, 'APW330', 'main_pc_MSSS0779.jpg');
  if (fs.existsSync(mainImagePath)) {
    const mainUrl = await uploadFile(mainImagePath, 'windows/apw330/main.jpg');
    if (mainUrl) {
      console.log('✓ APW330 メイン画像:', mainUrl);

      // ext-window-apw330のバリアントに画像を設定
      const variantId = await getVariantId('ext-window-apw330', 'ext-window-apw330-v1');
      if (variantId) {
        await updateVariantImage(variantId, mainUrl);
        console.log('  → バリアントに紐づけ完了');
      }
    }
  }

  // 外観色
  console.log('\nAPW330 外観色:');
  for (let i = 0; i < APW330_EXTERIOR_COLORS.length; i++) {
    const colorInfo = APW330_EXTERIOR_COLORS[i];
    const localPath = path.join(BASE_PATH, 'APW330', '外観色', colorInfo.file);

    if (fs.existsSync(localPath)) {
      const storagePath = `windows/apw330/exterior/${colorInfo.colorEn}.jpg`;
      const url = await uploadFile(localPath, storagePath);

      if (url) {
        console.log(`  ✓ ${colorInfo.color} (${colorInfo.colorEn}): ${url}`);

        // バリアントに紐づけ（v1=ホワイト, v2=プラチナステン, v3=ブラウン, v4=ブラック）
        const variantCode = `ext-window-apw330-v${i + 1}`;
        const variantId = await getVariantId('ext-window-apw330', variantCode);
        if (variantId) {
          await updateVariantImage(variantId, url);
          console.log(`    → ${variantCode} に紐づけ完了`);
        }
      }
    } else {
      console.log(`  ✗ ファイルが見つかりません: ${colorInfo.file}`);
    }
  }

  // 内観色（参考画像として保存）
  console.log('\nAPW330 内観色:');
  for (const colorInfo of APW330_INTERIOR_COLORS) {
    const localPath = path.join(BASE_PATH, 'APW330', '内観色', colorInfo.file);

    if (fs.existsSync(localPath)) {
      const storagePath = `windows/apw330/interior/${colorInfo.colorEn}.jpg`;
      const url = await uploadFile(localPath, storagePath);

      if (url) {
        console.log(`  ✓ ${colorInfo.color} (${colorInfo.colorEn}): ${url}`);
      }
    }
  }
}

async function uploadAPW430Images(): Promise<void> {
  console.log('\n=== APW430 画像アップロード ===');

  // メイン画像
  const mainImagePath = path.join(BASE_PATH, 'APW430', 'forte_MSZZ0266.jpg');
  if (fs.existsSync(mainImagePath)) {
    const mainUrl = await uploadFile(mainImagePath, 'windows/apw430/main.jpg');
    if (mainUrl) {
      console.log('✓ APW430 メイン画像:', mainUrl);

      // ext-window-apw430のバリアントに画像を設定
      const variantId = await getVariantId('ext-window-apw430', 'ext-window-apw430-v1');
      if (variantId) {
        await updateVariantImage(variantId, mainUrl);
        console.log('  → バリアントに紐づけ完了');
      }
    }
  }

  // 外観色
  console.log('\nAPW430 外観色:');
  for (let i = 0; i < APW430_EXTERIOR_COLORS.length; i++) {
    const colorInfo = APW430_EXTERIOR_COLORS[i];
    const localPath = path.join(BASE_PATH, 'APW430', '外観色', colorInfo.file);

    if (fs.existsSync(localPath)) {
      const storagePath = `windows/apw430/exterior/${colorInfo.colorEn}.jpg`;
      const url = await uploadFile(localPath, storagePath);

      if (url) {
        console.log(`  ✓ ${colorInfo.color} (${colorInfo.colorEn}): ${url}`);

        // バリアントに紐づけ
        const variantCode = `ext-window-apw430-v${i + 1}`;
        const variantId = await getVariantId('ext-window-apw430', variantCode);
        if (variantId) {
          await updateVariantImage(variantId, url);
          console.log(`    → ${variantCode} に紐づけ完了`);
        }
      }
    } else {
      console.log(`  ✗ ファイルが見つかりません: ${colorInfo.file}`);
    }
  }

  // 内観色（参考画像として保存）
  console.log('\nAPW430 内観色:');
  for (const colorInfo of APW430_INTERIOR_COLORS) {
    const localPath = path.join(BASE_PATH, 'APW430', '内観色', colorInfo.file);

    if (fs.existsSync(localPath)) {
      const storagePath = `windows/apw430/interior/${colorInfo.colorEn}.jpg`;
      const url = await uploadFile(localPath, storagePath);

      if (url) {
        console.log(`  ✓ ${colorInfo.color} (${colorInfo.colorEn}): ${url}`);
      }
    }
  }
}

async function uploadGlassTypeImages(): Promise<void> {
  console.log('\n=== ガラス種類 画像アップロード ===');

  for (const glassInfo of GLASS_TYPES) {
    const localPath = path.join(BASE_PATH, 'ガラス種類', glassInfo.file);

    if (fs.existsSync(localPath)) {
      const ext = path.extname(glassInfo.file);
      const storagePath = `windows/glass-types/${glassInfo.nameEn}${ext}`;
      const url = await uploadFile(localPath, storagePath);

      if (url) {
        console.log(`  ✓ ${glassInfo.name} (${glassInfo.nameEn}): ${url}`);
      }
    } else {
      console.log(`  ✗ ファイルが見つかりません: ${glassInfo.file}`);
    }
  }
}

async function uploadHandleTypeImages(): Promise<void> {
  console.log('\n=== ハンドル種類 画像アップロード ===');

  for (const handleInfo of HANDLE_TYPES) {
    const localPath = path.join(BASE_PATH, 'ハンドル種類', handleInfo.file);

    if (fs.existsSync(localPath)) {
      const ext = path.extname(handleInfo.file);
      const storagePath = `windows/handle-types/${handleInfo.nameEn}${ext}`;
      const url = await uploadFile(localPath, storagePath);

      if (url) {
        console.log(`  ✓ ${handleInfo.name} (${handleInfo.nameEn}): ${url}`);
      }
    } else {
      console.log(`  ✗ ファイルが見つかりません: ${handleInfo.file}`);
    }
  }
}

async function uploadYKKLogo(): Promise<void> {
  console.log('\n=== YKKAP ロゴ アップロード ===');

  const localPath = path.join(BASE_PATH, 'YKKAP logo.png');

  if (fs.existsSync(localPath)) {
    const url = await uploadFile(localPath, 'windows/ykkap-logo.png');
    if (url) {
      console.log(`  ✓ YKKAPロゴ: ${url}`);
    }
  }
}

async function main(): Promise<void> {
  console.log('=== 窓画像アップロードスクリプト開始 ===\n');

  // バケット確認/作成
  const bucketReady = await ensureBucketExists();
  if (!bucketReady) {
    console.error('ストレージバケットの準備に失敗しました');
    process.exit(1);
  }

  // 各種画像をアップロード
  await uploadAPW330Images();
  await uploadAPW430Images();
  await uploadGlassTypeImages();
  await uploadHandleTypeImages();
  await uploadYKKLogo();

  console.log('\n=== アップロード完了 ===');
  console.log('\nSupabaseダッシュボードで画像を確認してください。');
  console.log('Storage → product-images → windows');
}

main().catch(console.error);

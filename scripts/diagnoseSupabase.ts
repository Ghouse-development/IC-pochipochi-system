import * as dotenv from 'dotenv';
dotenv.config();

import { createClient } from '@supabase/supabase-js';

console.log('=== Supabase接続診断 ===\n');

// Step 1: 環境変数の確認
console.log('Step 1: 環境変数の確認');
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

console.log(`  VITE_SUPABASE_URL: ${supabaseUrl ? '設定済み (' + supabaseUrl.substring(0, 40) + '...)' : '未設定'}`);
console.log(`  VITE_SUPABASE_ANON_KEY: ${supabaseKey ? '設定済み (長さ: ' + supabaseKey.length + ')' : '未設定'}`);

if (!supabaseUrl || !supabaseKey) {
  console.log('\n❌ 環境変数が設定されていません。.envファイルを確認してください。');
  process.exit(1);
}

// Step 2: Supabaseクライアントの初期化
console.log('\nStep 2: Supabaseクライアントの初期化');
try {
  const supabase = createClient(supabaseUrl, supabaseKey);
  console.log('  ✅ クライアント初期化成功');

  // Step 3: 接続テスト - カテゴリ数を取得
  console.log('\nStep 3: カテゴリテーブルへの接続テスト');
  const { count: categoryCount, error: categoryError } = await supabase
    .from('categories')
    .select('*', { count: 'exact', head: true });

  if (categoryError) {
    console.log(`  ❌ カテゴリ取得エラー: ${categoryError.message}`);
  } else {
    console.log(`  ✅ カテゴリ数: ${categoryCount}件`);
  }

  // Step 4: アイテムテーブルへの接続テスト
  console.log('\nStep 4: アイテムテーブルへの接続テスト');
  const { count: itemCount, error: itemError } = await supabase
    .from('items')
    .select('*', { count: 'exact', head: true });

  if (itemError) {
    console.log(`  ❌ アイテム取得エラー: ${itemError.message}`);
  } else {
    console.log(`  ✅ アイテム数: ${itemCount}件`);
  }

  // Step 5: 外装カテゴリのアイテム取得テスト
  console.log('\nStep 5: 外装カテゴリのデータ取得テスト');
  const { data: exteriorCategories, error: extCatError } = await supabase
    .from('categories')
    .select('id, name')
    .eq('category_type', 'exterior')
    .limit(5);

  if (extCatError) {
    console.log(`  ❌ 外装カテゴリ取得エラー: ${extCatError.message}`);
  } else {
    console.log(`  ✅ 外装カテゴリ: ${exteriorCategories?.length}件`);
    exteriorCategories?.forEach(cat => {
      console.log(`     - ${cat.name} (${cat.id})`);
    });
  }

  // Step 6: 外壁カテゴリのアイテム取得
  console.log('\nStep 6: 外壁カテゴリのアイテム取得テスト');
  const wallCategory = exteriorCategories?.find(c => c.name === '外壁');
  if (wallCategory) {
    const { data: wallItems, error: wallError } = await supabase
      .from('items')
      .select('id, name, material_type')
      .eq('category_id', wallCategory.id)
      .limit(5);

    if (wallError) {
      console.log(`  ❌ 外壁アイテム取得エラー: ${wallError.message}`);
    } else {
      console.log(`  ✅ 外壁アイテム: ${wallItems?.length}件`);
      wallItems?.forEach(item => {
        console.log(`     - ${item.name} (material_type: ${item.material_type || 'なし'})`);
      });
    }
  }

  // Step 7: バリアント取得テスト
  console.log('\nStep 7: バリアント取得テスト');
  const { count: variantCount, error: variantError } = await supabase
    .from('item_variants')
    .select('*', { count: 'exact', head: true });

  if (variantError) {
    console.log(`  ❌ バリアント取得エラー: ${variantError.message}`);
  } else {
    console.log(`  ✅ バリアント数: ${variantCount}件`);
  }

  // Step 8: 価格情報取得テスト
  console.log('\nStep 8: 価格情報取得テスト');
  const { count: pricingCount, error: pricingError } = await supabase
    .from('item_pricing')
    .select('*', { count: 'exact', head: true });

  if (pricingError) {
    console.log(`  ❌ 価格情報取得エラー: ${pricingError.message}`);
  } else {
    console.log(`  ✅ 価格情報数: ${pricingCount}件`);
  }

  console.log('\n=== 診断完了 ===');

} catch (error) {
  console.log(`  ❌ クライアント初期化エラー: ${error}`);
  process.exit(1);
}

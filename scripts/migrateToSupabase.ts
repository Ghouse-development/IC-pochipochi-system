/**
 * ハードコードデータをSupabaseに移行するスクリプト
 *
 * 使用方法:
 * 1. 環境変数を設定: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 * 2. npx tsx scripts/migrateToSupabase.ts
 *
 * 注意: Service Role Keyが必要（RLSをバイパス）
 */

import { createClient } from '@supabase/supabase-js';
import { exteriorProducts } from '../src/data/exteriorProducts';
import { interiorProducts } from '../src/data/interiorProducts';
import { waterEquipmentProducts } from '../src/data/waterEquipmentProducts';
import { furnitureProducts } from '../src/data/furnitureProducts';

// 環境変数チェック
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://qqzqffkiyzeaampotgnn.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_SERVICE_KEY) {
  console.error('❌ SUPABASE_SERVICE_ROLE_KEY 環境変数が必要です');
  console.log('\n設定方法:');
  console.log('  Windows: set SUPABASE_SERVICE_ROLE_KEY=your-key');
  console.log('  Mac/Linux: export SUPABASE_SERVICE_ROLE_KEY=your-key');
  console.log('\nService Role Keyは Supabase Dashboard > Settings > API から取得できます');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: { persistSession: false }
});

interface Product {
  id: string;
  categoryId: string;
  categoryName: string;
  subcategory?: string;
  name: string;
  manufacturer: string;
  materialType?: string;
  modelNumber?: string;
  unit?: string;
  isOption: boolean;
  description?: string;
  catalogUrl?: string;
  variants: Array<{
    id: string;
    color: string;
    colorCode: string;
    images: string[];
  }>;
  pricing: Array<{
    plan: string;
    price: number;
  }>;
}

// カテゴリタイプマッピング
const _CATEGORY_TYPE_MAP: Record<string, string> = {
  'exterior': 'exterior',
  'interior': 'interior',
  'equipment': 'equipment',
  'furniture': 'other',
};

// プランコードマッピング
const PLAN_CODE_MAP: Record<string, string> = {
  'LACIE': 'lacie',
  'HOURS': 'hours',
  'LIFE+': 'life-plus',
  'LIFE': 'life',
  'LIFE_X': 'life-x',
};

async function ensurePlansExist(): Promise<Map<string, string>> {
  const planMap = new Map<string, string>();
  const plans = [
    { code: 'lacie', name: 'LACIE', display_order: 0 },
    { code: 'hours', name: 'HOURS', display_order: 1 },
    { code: 'life-plus', name: 'LIFE+', display_order: 2 },
    { code: 'life', name: 'LIFE', display_order: 3 },
    { code: 'life-x', name: 'LIFE X', display_order: 4 },
  ];

  for (const plan of plans) {
    const { data, error } = await supabase
      .from('products')
      .upsert(plan, { onConflict: 'code' })
      .select('id, code')
      .single();

    if (error) {
      console.error(`プラン ${plan.code} の作成に失敗:`, error.message);
    } else if (data) {
      planMap.set(plan.code, data.id);
    }
  }

  return planMap;
}

async function ensureCategoryExists(
  categoryId: string,
  categoryName: string,
  categoryType: string,
  displayOrder: number
): Promise<string | null> {
  // スラッグを生成
  const slug = categoryId.replace(/^(exterior-|interior-|equipment-|furniture-)/, '');

  const { data, error } = await supabase
    .from('categories')
    .upsert({
      slug,
      name: categoryName,
      category_type: categoryType,
      display_order: displayOrder,
      is_active: true,
      is_required: false,
    }, { onConflict: 'slug' })
    .select('id')
    .single();

  if (error) {
    console.error(`カテゴリ ${categoryName} の作成に失敗:`, error.message);
    return null;
  }

  return data?.id || null;
}

async function migrateProduct(
  product: Product,
  categoryId: string,
  planMap: Map<string, string>,
  displayOrder: number
): Promise<boolean> {
  // 1. アイテムを作成/更新
  const { data: item, error: itemError } = await supabase
    .from('items')
    .upsert({
      item_code: product.id,
      name: product.name,
      manufacturer: product.manufacturer,
      model_number: product.modelNumber || null,
      material_type: product.materialType || null,
      note: product.description || null,
      catalog_url: product.catalogUrl || null,
      category_id: categoryId,
      category_name: product.categoryName,
      display_order: displayOrder,
      is_active: true,
      is_discontinued: false,
      tags: [product.categoryId],
    }, { onConflict: 'item_code' })
    .select('id')
    .single();

  if (itemError || !item) {
    console.error(`アイテム ${product.name} の作成に失敗:`, itemError?.message);
    return false;
  }

  // 2. バリアントを作成
  for (let i = 0; i < product.variants.length; i++) {
    const variant = product.variants[i];
    const variantCode = `${product.id}-${variant.id}`;

    const { error: variantError } = await supabase
      .from('item_variants')
      .upsert({
        item_id: item.id,
        variant_code: variantCode,
        color_name: variant.color,
        color_code: variant.colorCode || null,
        display_order: i,
        is_active: true,
        is_hit: false,
      }, { onConflict: 'variant_code' });

    if (variantError) {
      console.error(`バリアント ${variant.color} の作成に失敗:`, variantError.message);
    }
  }

  // 3. 価格を作成
  for (const pricing of product.pricing) {
    const planCode = PLAN_CODE_MAP[pricing.plan] || pricing.plan.toLowerCase();
    const productId = planMap.get(planCode);

    if (!productId) {
      console.warn(`プラン ${pricing.plan} が見つかりません`);
      continue;
    }

    const { error: pricingError } = await supabase
      .from('item_pricing')
      .upsert({
        item_id: item.id,
        product_id: productId,
        price: pricing.price,
        is_standard: pricing.price === 0,
        is_available: true,
        installation_cost: 0,
        effective_date: new Date().toISOString().split('T')[0],
      }, {
        onConflict: 'item_id,product_id',
        ignoreDuplicates: false,
      });

    if (pricingError) {
      // 重複エラーは無視
      if (!pricingError.message.includes('duplicate')) {
        console.error(`価格の作成に失敗:`, pricingError.message);
      }
    }
  }

  return true;
}

async function migrateCategory(
  products: Product[],
  categoryType: string,
  typeName: string
): Promise<void> {
  console.log(`\n📦 ${typeName}データを移行中...`);

  // カテゴリを抽出
  const categories = new Map<string, string>();
  products.forEach(p => {
    if (!categories.has(p.categoryId)) {
      categories.set(p.categoryId, p.categoryName);
    }
  });

  // カテゴリを作成
  const categoryIdMap = new Map<string, string>();
  let catOrder = 0;
  for (const [catId, catName] of categories) {
    const dbCatId = await ensureCategoryExists(catId, catName, categoryType, catOrder++);
    if (dbCatId) {
      categoryIdMap.set(catId, dbCatId);
    }
  }

  console.log(`  カテゴリ: ${categoryIdMap.size}件`);

  // プランマップを取得
  const planMap = await ensurePlansExist();

  // アイテムを移行
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const dbCategoryId = categoryIdMap.get(product.categoryId);

    if (!dbCategoryId) {
      console.warn(`  ⚠️ カテゴリ ${product.categoryId} が見つかりません: ${product.name}`);
      errorCount++;
      continue;
    }

    const success = await migrateProduct(product, dbCategoryId, planMap, i);
    if (success) {
      successCount++;
    } else {
      errorCount++;
    }

    // 進捗表示
    if ((i + 1) % 20 === 0 || i === products.length - 1) {
      process.stdout.write(`\r  進捗: ${i + 1}/${products.length} (成功: ${successCount}, エラー: ${errorCount})`);
    }
  }

  console.log(`\n  ✅ 完了: ${successCount}件成功, ${errorCount}件エラー`);
}

async function main() {
  console.log('🚀 Supabaseへのデータ移行を開始します...');
  console.log(`   URL: ${SUPABASE_URL}`);

  try {
    // 接続テスト
    const { error: testError } = await supabase.from('items').select('count').limit(1);
    if (testError) {
      throw new Error(`Supabase接続エラー: ${testError.message}`);
    }
    console.log('✅ Supabase接続成功\n');

    // 各カテゴリを移行
    await migrateCategory(exteriorProducts as unknown as Product[], 'exterior', '外装');
    await migrateCategory(interiorProducts as unknown as Product[], 'interior', '内装');
    await migrateCategory(waterEquipmentProducts as unknown as Product[], 'equipment', '水廻り設備');
    await migrateCategory(furnitureProducts as unknown as Product[], 'other', '家具・家電');

    console.log('\n🎉 全データの移行が完了しました！');
    console.log('\n次のステップ:');
    console.log('1. Supabase Dashboardでデータを確認');
    console.log('2. useProductStoreをSupabase優先に切り替え');
    console.log('3. 本番環境をテスト');

  } catch (err) {
    console.error('\n❌ 移行中にエラーが発生しました:', err);
    process.exit(1);
  }
}

main();

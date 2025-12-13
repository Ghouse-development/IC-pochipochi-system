/**
 * 静的データをSupabaseにインポートするスクリプト
 *
 * 使い方:
 * 1. .envファイルにSupabase認証情報を設定
 * 2. npx tsx scripts/importToSupabase.ts
 *
 * 注意: 既存データを削除してから挿入します
 */

import { createClient } from '@supabase/supabase-js';
import { exteriorProducts } from '../src/data/exteriorProducts';
import { interiorProducts } from '../src/data/interiorProducts';
import { waterEquipmentProducts } from '../src/data/waterEquipmentProducts';
import type { Product } from '../src/types/product';

// Supabase設定
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('環境変数 VITE_SUPABASE_URL と VITE_SUPABASE_ANON_KEY を設定してください');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// 単位マッピング（静的データ -> DBのunit_type ENUM）
const UNIT_MAP: Record<string, string> = {
  'sqm': 'sqm',
  '㎡': 'sqm',
  'piece': 'piece',
  '個': 'piece',
  'location': 'location',
  '箇所': 'location',
  'set': 'set',
  '一式': 'set',
  '式': 'set',
  'package': 'package',
  '梱': 'package',
  'sheet': 'sheet',
  '枚': 'sheet',
  'meter': 'meter',
  'm': 'meter',
  'unit': 'unit',
  '台': 'unit',
  '本': 'unit',
  'pair': 'pair',
  '組': 'pair',
};

// カテゴリタイプ
type CategoryType = 'exterior' | 'interior' | 'equipment';

// DBから既存データを取得
async function getExistingProducts(): Promise<Record<string, string>> {
  const { data, error } = await supabase.from('products').select('id, code');
  if (error) {
    console.error('プラン取得エラー:', error);
    return {};
  }
  const result: Record<string, string> = {};
  data?.forEach(p => {
    result[p.code] = p.id;
  });
  return result;
}

async function getExistingUnits(): Promise<Record<string, string>> {
  const { data, error } = await supabase.from('units').select('id, code');
  if (error) {
    console.error('単位取得エラー:', error);
    return {};
  }
  const result: Record<string, string> = {};
  data?.forEach(u => {
    result[u.code] = u.id;
  });
  return result;
}

// カテゴリをインポート
async function importCategories(): Promise<Record<string, string>> {
  console.log('カテゴリをインポート中...');

  // 全商品からカテゴリを抽出
  const allProducts = [
    ...exteriorProducts.map(p => ({ ...p, type: 'exterior' as CategoryType })),
    ...interiorProducts.map(p => ({ ...p, type: 'interior' as CategoryType })),
    ...waterEquipmentProducts.map(p => ({ ...p, type: 'equipment' as CategoryType })),
  ];

  const categoryMap = new Map<string, { name: string; type: CategoryType; order: number }>();

  allProducts.forEach((p, idx) => {
    if (p.categoryName && !categoryMap.has(`${p.type}-${p.categoryName}`)) {
      categoryMap.set(`${p.type}-${p.categoryName}`, {
        name: p.categoryName,
        type: p.type,
        order: idx,
      });
    }
  });

  // 既存カテゴリを削除
  const { error: deleteError } = await supabase
    .from('categories')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000');

  if (deleteError) {
    console.error('カテゴリ削除エラー:', deleteError);
  }

  const categories = Array.from(categoryMap.entries()).map(([key, value], idx) => ({
    parent_id: null,
    category_type: value.type,
    name: value.name,
    slug: `${value.type}-${value.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${idx}`,
    description: null,
    display_order: idx,
    is_required: false,
    is_active: true,
    icon: null,
  }));

  // インポート
  const { data, error } = await supabase.from('categories').insert(categories).select();
  if (error) {
    console.error('カテゴリインポートエラー:', error);
    return {};
  }

  console.log(`${data?.length || 0}件のカテゴリをインポートしました`);

  // カテゴリマップを返す（type-name -> id）
  const result: Record<string, string> = {};
  data?.forEach(c => {
    result[`${c.category_type}-${c.name}`] = c.id;
  });
  return result;
}

// 商品をインポート
async function importItems(
  categoryMap: Record<string, string>,
  unitMap: Record<string, string>,
  productMap: Record<string, string>
) {
  console.log('商品をインポート中...');

  type ProductWithType = Product & { type: CategoryType };
  const allProducts: ProductWithType[] = [
    ...exteriorProducts.map(p => ({ ...p, type: 'exterior' as CategoryType })),
    ...interiorProducts.map(p => ({ ...p, type: 'interior' as CategoryType })),
    ...waterEquipmentProducts.map(p => ({ ...p, type: 'equipment' as CategoryType })),
  ];

  let itemCount = 0;
  let variantCount = 0;
  let pricingCount = 0;

  // 既存データを削除（順序重要：外部キー制約）
  console.log('既存データを削除中...');
  await supabase.from('item_pricing').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  await supabase.from('item_variant_images').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  await supabase.from('item_variants').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  await supabase.from('items').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  console.log('既存データ削除完了');

  for (const product of allProducts) {
    const categoryId = categoryMap[`${product.type}-${product.categoryName}`];
    const unitCode = UNIT_MAP[product.unit] || 'set';
    const unitId = unitMap[unitCode];

    if (!categoryId) {
      console.warn(`カテゴリが見つかりません: ${product.type}-${product.categoryName}`);
    }

    // アイテムを作成
    const item = {
      category_id: categoryId || null,
      item_code: product.id,
      name: product.name,
      category_name: product.subcategory || null,
      model_number: product.modelNumber || null,
      manufacturer: product.manufacturer || null,
      note: product.description || null,
      unit_id: unitId || null,
      formula: null,
      is_hit: false,
      is_active: true,
      is_discontinued: false,
      discontinue_date: null,
      discontinue_note: null,
      display_order: itemCount,
    };

    const { data: itemData, error: itemError } = await supabase
      .from('items')
      .insert(item)
      .select()
      .single();

    if (itemError) {
      console.error(`商品インポートエラー (${product.name}):`, itemError);
      continue;
    }

    const itemId = itemData.id;
    itemCount++;

    // バリアント（色）を作成
    if (product.variants && product.variants.length > 0) {
      for (let i = 0; i < product.variants.length; i++) {
        const variant = product.variants[i];
        const variantData = {
          item_id: itemId,
          variant_code: variant.id || `${product.id}-v${i + 1}`,
          color_name: variant.color,
          color_code: variant.colorCode || variant.color,
          description: null,
          is_active: true,
          display_order: i,
        };

        const { data: variantResult, error: variantError } = await supabase
          .from('item_variants')
          .insert(variantData)
          .select()
          .single();

        if (variantError) {
          console.error(`バリアントインポートエラー (${variant.color}):`, variantError);
          continue;
        }

        const variantId = variantResult.id;
        variantCount++;

        // 画像があれば登録
        if (variant.imageUrl) {
          await supabase.from('item_variant_images').insert({
            variant_id: variantId,
            image_url: variant.imageUrl,
            thumbnail_url: variant.thumbnailUrl || variant.imageUrl,
            is_primary: true,
            display_order: 0,
          });
        }

        // 価格情報を作成（各プランごと）
        if (product.pricing) {
          for (const pricing of product.pricing) {
            // プラン名の正規化（LIFE+ -> LIFE_PLUS）
            let planCode = pricing.plan || 'LACIE';
            if (planCode === 'LIFE+') planCode = 'LIFE_PLUS';
            const productId = productMap[planCode];

            if (!productId) {
              console.warn(`プランが見つかりません: ${planCode}`);
              continue;
            }

            const pricingData = {
              item_id: itemId,
              variant_id: variantId,
              product_id: productId,
              is_available: true,
              is_standard: pricing.price === 0,
              price: pricing.price || 0,
              installation_cost: 0,
              effective_date: new Date().toISOString().split('T')[0],
            };

            const { error: pricingError } = await supabase.from('item_pricing').insert(pricingData);
            if (pricingError) {
              console.error(`価格インポートエラー:`, pricingError);
              continue;
            }
            pricingCount++;
          }
        }
      }
    } else {
      // バリアントがない場合はデフォルトを作成
      const defaultVariant = {
        item_id: itemId,
        variant_code: `${product.id}-default`,
        color_name: '標準',
        color_code: 'standard',
        description: null,
        is_active: true,
        display_order: 0,
      };

      const { data: variantResult, error: variantError } = await supabase
        .from('item_variants')
        .insert(defaultVariant)
        .select()
        .single();

      if (!variantError && variantResult) {
        variantCount++;

        // 価格情報
        if (product.pricing) {
          for (const pricing of product.pricing) {
            // プラン名の正規化（LIFE+ -> LIFE_PLUS）
            let planCode = pricing.plan || 'LACIE';
            if (planCode === 'LIFE+') planCode = 'LIFE_PLUS';
            const productId = productMap[planCode];

            if (productId) {
              await supabase.from('item_pricing').insert({
                item_id: itemId,
                variant_id: variantResult.id,
                product_id: productId,
                is_available: true,
                is_standard: pricing.price === 0,
                price: pricing.price || 0,
                installation_cost: 0,
                effective_date: new Date().toISOString().split('T')[0],
              });
              pricingCount++;
            }
          }
        }
      }
    }

    // 進捗表示
    if (itemCount % 20 === 0) {
      console.log(`  ... ${itemCount}件処理中`);
    }
  }

  console.log(`\n${itemCount}件の商品をインポートしました`);
  console.log(`${variantCount}件のバリアント（色）をインポートしました`);
  console.log(`${pricingCount}件の価格情報をインポートしました`);
}

async function main() {
  console.log('=== Supabaseへのデータインポート開始 ===\n');

  try {
    // 1. 既存のプランと単位を取得
    console.log('既存マスターデータを取得中...');
    const productMap = await getExistingProducts();
    const unitMap = await getExistingUnits();

    console.log(`  プラン: ${Object.keys(productMap).join(', ')}`);
    console.log(`  単位: ${Object.keys(unitMap).join(', ')}`);

    if (Object.keys(productMap).length === 0) {
      console.error('プランが見つかりません。001_complete_schema.sqlを先に実行してください。');
      process.exit(1);
    }

    // 2. カテゴリをインポート
    const categoryMap = await importCategories();

    // 3. 商品・バリアント・価格をインポート
    await importItems(categoryMap, unitMap, productMap);

    console.log('\n=== インポート完了 ===');
    console.log('\nSupabaseダッシュボードでデータを確認してください。');
  } catch (error) {
    console.error('インポートエラー:', error);
    process.exit(1);
  }
}

main();

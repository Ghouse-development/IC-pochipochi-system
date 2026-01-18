/**
 * 既存アイテムのcategory_idを更新するスクリプト
 *
 * 実行方法:
 * npx tsx scripts/updateCategoryIds.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { createClient } from '@supabase/supabase-js';
import { exteriorProducts } from '../src/data/exteriorProducts';
import { interiorProducts } from '../src/data/interiorProducts';
import { waterEquipmentProducts } from '../src/data/waterEquipmentProducts';
import { furnitureProducts } from '../src/data/furnitureProducts';
import type { Product } from '../src/types/product';

// .env.local から環境変数を読み込む
function loadEnvFile(filePath: string) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    content.split('\n').forEach(line => {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim().replace(/^["']|["']$/g, '');
        process.env[key] = value;
      }
    });
  }
}

// .env.local を読み込む
loadEnvFile(path.join(process.cwd(), '.env.local'));
loadEnvFile(path.join(process.cwd(), '.env'));

// Supabase設定（サービスロールキーを使用してRLSをバイパス）
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('環境変数が設定されていません');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// カテゴリキャッシュ
const categoryCache: Map<string, string> = new Map();

// カテゴリスラッグマッピング
const CATEGORY_SLUG_MAP: Record<string, string> = {
  // 外装
  'exterior-wall': 'exterior-wall',
  'exterior-roof': 'roof',
  'exterior-entrance': 'entrance-door',
  'exterior-soffit': 'soffit',
  'exterior-balcony': 'balcony',
  'exterior-exterior-fitting': 'exterior-fitting',
  'exterior-porch': 'porch-tile',
  'exterior-water-heater': 'water-heater',
  'exterior-ventilation': 'ventilation',
  // 内装
  'interior-floor': 'flooring',
  'interior-wall': 'wallpaper',
  'interior-door': 'interior-door',
  'interior-stairs': 'stairs',
  'interior-baseboard': 'baseboard',
  // 水廻り
  'equipment-kitchen': 'kitchen',
  'equipment-bathroom': 'bathroom',
  'equipment-toilet': 'toilet',
  'equipment-washroom': 'washroom',
  // 家具・家電
  'furniture-curtain': 'curtain',
  'furniture-aircon': 'aircon',
  'furniture-dining': 'dining-table',
};

async function initializeCaches() {
  console.log('キャッシュを初期化中...');

  // カテゴリを取得
  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('id, slug, name');

  if (catError) {
    console.error('カテゴリ取得エラー:', catError);
    return false;
  }

  categories?.forEach(cat => {
    categoryCache.set(cat.slug, cat.id);
    categoryCache.set(cat.name, cat.id);
  });

  console.log(`  カテゴリ: ${categoryCache.size / 2}件`);
  return true;
}

function getCategoryId(product: Product): string | null {
  // まずslugマッピングを試す
  const mappedSlug = CATEGORY_SLUG_MAP[product.categoryId];
  if (mappedSlug && categoryCache.has(mappedSlug)) {
    return categoryCache.get(mappedSlug) || null;
  }

  // カテゴリIDで直接検索
  if (categoryCache.has(product.categoryId)) {
    return categoryCache.get(product.categoryId) || null;
  }

  // カテゴリ名で検索
  if (product.categoryName && categoryCache.has(product.categoryName)) {
    return categoryCache.get(product.categoryName) || null;
  }

  // subcategoryで検索
  if (product.subcategory && categoryCache.has(product.subcategory)) {
    return categoryCache.get(product.subcategory) || null;
  }

  return null;
}

async function updateProduct(product: Product): Promise<{ updated: boolean; created: boolean; error: boolean }> {
  try {
    // 既存アイテムを検索
    const { data: existing, error: searchError } = await supabase
      .from('items')
      .select('id, category_id')
      .eq('item_code', product.id)
      .single();

    if (searchError && searchError.code !== 'PGRST116') {
      console.error(`  検索エラー: ${product.name}`, searchError.message);
      return { updated: false, created: false, error: true };
    }

    const categoryId = getCategoryId(product);

    if (existing) {
      // 既存アイテムのcategory_idを更新（nullまたは異なる場合のみ）
      if (categoryId && existing.category_id !== categoryId) {
        const { error: updateError } = await supabase
          .from('items')
          .update({ category_id: categoryId })
          .eq('id', existing.id);

        if (updateError) {
          console.error(`  更新エラー: ${product.name}`, updateError.message);
          return { updated: false, created: false, error: true };
        }
        console.log(`  更新: ${product.name} → カテゴリ設定`);
        return { updated: true, created: false, error: false };
      }
      return { updated: false, created: false, error: false };
    } else {
      // 新規作成
      const { error: insertError } = await supabase
        .from('items')
        .insert({
          item_code: product.id,
          name: product.name,
          category_id: categoryId,
          category_name: product.categoryName || null,
          manufacturer: product.manufacturer || null,
          model_number: product.modelNumber || null,
          is_active: true,
        });

      if (insertError) {
        console.error(`  作成エラー: ${product.name}`, insertError.message);
        return { updated: false, created: false, error: true };
      }
      console.log(`  新規作成: ${product.name}`);
      return { updated: false, created: true, error: false };
    }
  } catch (err) {
    console.error(`  例外: ${product.name}`, err);
    return { updated: false, created: false, error: true };
  }
}

async function processProducts(products: Product[], label: string) {
  console.log(`\n=== ${label} (${products.length}件) ===`);

  let updated = 0;
  let created = 0;
  let errors = 0;

  for (const product of products) {
    const result = await updateProduct(product);
    if (result.updated) updated++;
    if (result.created) created++;
    if (result.error) errors++;
  }

  console.log(`完了: ${updated}件更新, ${created}件新規作成, ${errors}件エラー`);
}

async function main() {
  console.log('========================================');
  console.log('カテゴリID更新スクリプト');
  console.log('========================================\n');

  const initialized = await initializeCaches();
  if (!initialized) {
    console.error('初期化に失敗しました');
    process.exit(1);
  }

  await processProducts(exteriorProducts, '外装製品');
  await processProducts(interiorProducts, '内装製品');
  await processProducts(waterEquipmentProducts, '水廻り設備');
  await processProducts(furnitureProducts, '家具・家電');

  console.log('\n========================================');
  console.log('完了');
  console.log('========================================');
}

main().catch(console.error);

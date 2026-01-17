/**
 * 静的データをSupabaseに移行するスクリプト
 *
 * 実行方法:
 * npx tsx scripts/migrateStaticDataToSupabase.ts
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

// Supabase設定（環境変数から取得）
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('環境変数 VITE_SUPABASE_URL と VITE_SUPABASE_ANON_KEY を設定してください');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// キャッシュ用
const categoryCache: Map<string, string> = new Map();
const unitCache: Map<string, string> = new Map();
const productCache: Map<string, string> = new Map();

// 単位コードマッピング
const UNIT_CODE_MAP: Record<string, string> = {
  '㎡': 'sqm',
  '個': 'piece',
  '箇所': 'location',
  '一式': 'set',
  '梱': 'package',
  '枚': 'sheet',
  'm': 'meter',
  '台': 'unit',
  '組': 'pair',
  '式': 'set',
  'piece': 'piece',
  'sqm': 'sqm',
  'set': 'set',
};

// プランコードマッピング
const PLAN_CODE_MAP: Record<string, string> = {
  'LACIE': 'LACIE',
  'HOURS': 'HOURS',
  'LIFE+': 'LIFE_PLUS',
  'LIFE': 'LIFE',
};

// カテゴリIDマッピング（静的カテゴリID → DB slug）
const CATEGORY_SLUG_MAP: Record<string, string> = {
  // 外装
  'exterior-wall': 'exterior-wall',
  'exterior-roof': 'roof',
  'exterior-entrance': 'entrance-door',
  'exterior-soffit': 'soffit',
  'exterior-balcony': 'balcony',
  'exterior-exterior-fitting': 'exterior-fitting',
  'exterior-porch': 'porch-tile',
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
};

async function initializeCaches() {
  console.log('キャッシュを初期化中...');

  // カテゴリ取得
  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('id, slug, name');

  if (catError) {
    console.error('カテゴリ取得エラー:', catError);
    return false;
  }

  categories?.forEach(c => {
    categoryCache.set(c.slug, c.id);
    categoryCache.set(c.name, c.id);
  });
  console.log(`  カテゴリ: ${categoryCache.size}件`);

  // 単位取得
  const { data: units, error: unitError } = await supabase
    .from('units')
    .select('id, code');

  if (unitError) {
    console.error('単位取得エラー:', unitError);
    return false;
  }

  units?.forEach(u => unitCache.set(u.code, u.id));
  console.log(`  単位: ${unitCache.size}件`);

  // プラン取得
  const { data: products, error: prodError } = await supabase
    .from('products')
    .select('id, code');

  if (prodError) {
    console.error('プラン取得エラー:', prodError);
    return false;
  }

  products?.forEach(p => productCache.set(p.code, p.id));
  console.log(`  プラン: ${productCache.size}件`);

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

  return null;
}

function getUnitId(unit: string): string | null {
  const unitCode = UNIT_CODE_MAP[unit] || unit;
  return unitCache.get(unitCode) || null;
}

function getProductId(plan: string): string | null {
  const planCode = PLAN_CODE_MAP[plan] || plan;
  return productCache.get(planCode) || null;
}

async function migrateProduct(product: Product, _categoryType: string): Promise<boolean> {
  try {
    // 既存チェック
    const { data: existing } = await supabase
      .from('items')
      .select('id')
      .eq('item_code', product.id)
      .single();

    if (existing) {
      console.log(`  スキップ（既存）: ${product.name}`);
      return true;
    }

    const categoryId = getCategoryId(product);
    const unitId = getUnitId(product.unit);

    // noteフィールドの構成
    const noteParts: string[] = [];
    if (product.description) noteParts.push(product.description);
    if (product.subcategory) noteParts.push(`[${product.subcategory}]`);
    const note = noteParts.join(' ') || null;

    // アイテム挿入
    const { data: insertedItem, error: itemError } = await supabase
      .from('items')
      .insert({
        item_code: product.id,
        name: product.name,
        category_id: categoryId,
        category_name: product.categoryName || null,
        manufacturer: product.manufacturer || null,
        model_number: product.modelNumber || null,
        note: note,
        unit_id: unitId,
        is_active: true,
        is_hit: false,
        display_order: 0,
      })
      .select('id')
      .single();

    if (itemError) {
      console.error(`  エラー（アイテム）: ${product.name}`, itemError.message);
      return false;
    }

    const itemId = insertedItem.id;

    // バリアント挿入
    if (product.variants && product.variants.length > 0) {
      const variants = product.variants.map((v, index) => ({
        item_id: itemId,
        variant_code: `${product.id}_${v.id}`,
        color_name: v.color,
        color_code: v.colorCode || null,
        is_active: true,
        display_order: index,
      }));

      const { data: insertedVariants, error: variantError } = await supabase
        .from('item_variants')
        .insert(variants)
        .select('id, variant_code');

      if (variantError) {
        console.error(`  エラー（バリアント）: ${product.name}`, variantError.message);
      } else if (insertedVariants) {
        // バリアント画像挿入
        const variantImages: Array<{
          variant_id: string;
          image_url: string;
          thumbnail_url: string | null;
          is_primary: boolean;
          display_order: number;
        }> = [];

        for (const v of product.variants) {
          const dbVariant = insertedVariants.find(dv => dv.variant_code === `${product.id}_${v.id}`);
          if (dbVariant && v.imageUrl) {
            variantImages.push({
              variant_id: dbVariant.id,
              image_url: v.imageUrl,
              thumbnail_url: v.thumbnailUrl || null,
              is_primary: true,
              display_order: 0,
            });
          }
        }

        if (variantImages.length > 0) {
          await supabase.from('item_variant_images').insert(variantImages);
        }
      }
    }

    // 価格情報挿入
    if (product.pricing && product.pricing.length > 0) {
      const pricingData = product.pricing
        .map(p => {
          const planId = getProductId(p.plan || p.planId || 'LACIE');
          if (!planId) return null;
          return {
            item_id: itemId,
            product_id: planId,
            price: p.price,
            is_standard: p.price === 0,
            is_available: true,
            installation_cost: 0,
            effective_date: new Date().toISOString().split('T')[0],
          };
        })
        .filter(p => p !== null);

      if (pricingData.length > 0) {
        const { error: pricingError } = await supabase
          .from('item_pricing')
          .insert(pricingData);

        if (pricingError) {
          console.error(`  エラー（価格）: ${product.name}`, pricingError.message);
        }
      }
    }

    console.log(`  ✓ ${product.name} (${product.variants?.length || 0}色)`);
    return true;
  } catch (err) {
    console.error(`  例外: ${product.name}`, err);
    return false;
  }
}

async function migrateProducts(products: Product[], categoryType: string, label: string) {
  console.log(`\n=== ${label} (${products.length}件) ===`);

  let success = 0;
  let failed = 0;

  for (const product of products) {
    const result = await migrateProduct(product, categoryType);
    if (result) {
      success++;
    } else {
      failed++;
    }
  }

  console.log(`完了: ${success}件成功, ${failed}件失敗`);
}

async function main() {
  console.log('========================================');
  console.log('静的データ → Supabase 移行スクリプト');
  console.log('========================================\n');

  // キャッシュ初期化
  const cacheOk = await initializeCaches();
  if (!cacheOk) {
    console.error('キャッシュ初期化に失敗しました');
    process.exit(1);
  }

  // 外装製品
  await migrateProducts(exteriorProducts, 'exterior', '外装製品');

  // 内装製品
  await migrateProducts(interiorProducts, 'interior', '内装製品');

  // 水廻り設備
  await migrateProducts(waterEquipmentProducts, 'equipment', '水廻り設備');

  // 家具・家電
  await migrateProducts(furnitureProducts, 'other', '家具・家電');

  console.log('\n========================================');
  console.log('移行完了');
  console.log('========================================');
}

main().catch(console.error);

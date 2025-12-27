/**
 * 静的データ（TypeScript）からSupabase DB用のSQLを生成するスクリプト
 *
 * 使用方法:
 *   npx ts-node scripts/generateProductImportSQL.ts > sql/PRODUCT_DATA_IMPORT.sql
 */

import { exteriorProducts } from '../src/data/exteriorProducts';
import { interiorProducts } from '../src/data/interiorProducts';
import { waterEquipmentProductsLifePlus } from '../src/data/waterEquipmentProducts';
import type { Product, PlanType } from '../src/types/product';

// カテゴリID（slug）からUUID取得用のSQLヘルパー
const getCategoryIdSQL = (slug: string) =>
  `(SELECT id FROM categories WHERE slug = '${slug}' LIMIT 1)`;

// 単位コードからUUID取得用のSQLヘルパー
const getUnitIdSQL = (unitCode: string) =>
  `(SELECT id FROM units WHERE code = '${unitCode}' LIMIT 1)`;

// プランIDからUUID取得用のSQLヘルパー
const getProductIdSQL = (planType: PlanType) => {
  const productCodes: Record<PlanType, string> = {
    'LACIE': 'LACIE',
    'HOURS': 'HOURS',
    'LIFE+': 'LIFE_PLUS',
    'LIFE': 'LIFE',
    'LIFE_X': 'LIFE_X'
  };
  return `(SELECT id FROM products WHERE code = '${productCodes[planType]}' LIMIT 1)`;
};

// SQL用のエスケープ
const escapeSQL = (str: string | undefined): string => {
  if (!str) return '';
  return str.replace(/'/g, "''");
};

// カテゴリIDのマッピング（静的データのcategoryIdをDBのslugに変換）
const categoryMapping: Record<string, string> = {
  // 外装
  'exterior-wall': 'exterior-wall',
  'porch': 'porch',
  'roof': 'roof',
  'gutter': 'gutter',
  'soffit': 'soffit',
  'window': 'window',
  'entrance-door': 'entrance-door',
  'exterior-equipment': 'exterior-equipment',
  'eco-cute': 'eco-cute',
  // 内装
  'flooring': 'flooring',
  'interior-door': 'interior-door',
  'stairs': 'stairs',
  'wallpaper': 'wallpaper',
  'storage': 'storage',
  'built-in': 'built-in',
  'electrical': 'electrical',
  'lighting': 'lighting',
  'ventilation': 'ventilation',
  'aircon': 'aircon',
  'curtain': 'curtain',
  'blind': 'blind',
  'custom-furniture': 'custom-furniture',
  'furniture': 'furniture',
  'dining-table': 'furniture',  // ダイニングテーブル → 家具
  'handrail': 'handrail',
  'laundry-pole': 'laundry-pole',
  // 水廻り設備
  'kitchen': 'kitchen',
  'bathroom': 'bathroom',
  'toilet': 'toilet',
  'vanity': 'vanity',
  'water-heater': 'water-heater',
  'bathroom-equipment': 'bathroom-equipment',
  'laundry': 'laundry',
  'water-treatment': 'water-treatment',
};

function generateProductSQL(products: Product[], sourceFile: string): string {
  let sql = `\n-- ==============================\n-- ${sourceFile} からのインポート\n-- ==============================\n\n`;

  for (const product of products) {
    const dbCategorySlug = categoryMapping[product.categoryId] || product.categoryId;
    const itemCode = escapeSQL(product.id);
    const name = escapeSQL(product.name);
    const manufacturer = escapeSQL(product.manufacturer);
    const modelNumber = escapeSQL(product.modelNumber);
    const note = escapeSQL(product.description || '');
    const subcategory = escapeSQL(product.subcategory);
    const unitCode = product.unit || 'piece';

    // INSERT item
    sql += `-- ${product.categoryName}: ${product.name}\n`;
    sql += `INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)\n`;
    sql += `VALUES (\n`;
    sql += `  ${getCategoryIdSQL(dbCategorySlug)},\n`;
    sql += `  '${itemCode}',\n`;
    sql += `  '${name}',\n`;
    sql += `  '${escapeSQL(product.categoryName)}',\n`;
    sql += `  '${manufacturer}',\n`;
    sql += `  '${modelNumber}',\n`;
    sql += `  '${note}${subcategory ? ` [${subcategory}]` : ''}',\n`;
    sql += `  ${getUnitIdSQL(unitCode)},\n`;
    sql += `  true,\n`;
    sql += `  0\n`;
    sql += `) ON CONFLICT (item_code) DO UPDATE SET\n`;
    sql += `  name = EXCLUDED.name,\n`;
    sql += `  category_name = EXCLUDED.category_name,\n`;
    sql += `  manufacturer = EXCLUDED.manufacturer,\n`;
    sql += `  model_number = EXCLUDED.model_number,\n`;
    sql += `  note = EXCLUDED.note;\n\n`;

    // INSERT variants
    for (const variant of product.variants) {
      const variantCode = `${itemCode}-${escapeSQL(variant.id)}`;
      const colorName = escapeSQL(variant.color);
      const colorCode = escapeSQL(variant.colorCode || variant.color);

      sql += `INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)\n`;
      sql += `VALUES (\n`;
      sql += `  (SELECT id FROM items WHERE item_code = '${itemCode}'),\n`;
      sql += `  '${variantCode}',\n`;
      sql += `  '${colorName}',\n`;
      sql += `  '${colorCode}',\n`;
      sql += `  true\n`;
      sql += `) ON CONFLICT (item_id, variant_code) DO UPDATE SET\n`;
      sql += `  color_name = EXCLUDED.color_name,\n`;
      sql += `  color_code = EXCLUDED.color_code;\n`;
    }
    sql += '\n';

    // INSERT pricing (per plan)
    // is_standard: 標準仕様かどうか（price=0なら標準、price>0ならオプション扱い）
    for (const pricing of product.pricing) {
      const planType = pricing.planId || pricing.plan;
      if (!planType) continue;

      const isStandard = !product.isOption && pricing.price === 0;
      sql += `INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)\n`;
      sql += `VALUES (\n`;
      sql += `  (SELECT id FROM items WHERE item_code = '${itemCode}'),\n`;
      sql += `  NULL,\n`;
      sql += `  ${getProductIdSQL(planType)},\n`;
      sql += `  true,\n`;
      sql += `  ${isStandard},\n`;
      sql += `  ${pricing.price}\n`;
      sql += `) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET\n`;
      sql += `  is_standard = EXCLUDED.is_standard,\n`;
      sql += `  price = EXCLUDED.price;\n`;
    }
    sql += '\n';
  }

  return sql;
}

// メイン処理
function main() {
  console.log(`-- =====================================================`);
  console.log(`-- IC-pochipochi-system 商品データインポートSQL`);
  console.log(`-- 生成日時: ${new Date().toISOString()}`);
  console.log(`-- =====================================================`);
  console.log();
  console.log(`-- このSQLは静的TypeScriptファイルから自動生成されました`);
  console.log(`-- 実行前に COMPLETE_SETUP.sql でカテゴリと単位を登録してください`);
  console.log();

  // 外装製品
  console.log(generateProductSQL(exteriorProducts, 'exteriorProducts.ts'));

  // 内装製品
  console.log(generateProductSQL(interiorProducts, 'interiorProducts.ts'));

  // 水廻り設備製品
  console.log(generateProductSQL(waterEquipmentProductsLifePlus, 'waterEquipmentProducts.ts'));

  console.log(`-- =====================================================`);
  console.log(`-- インポート完了`);
  console.log(`-- =====================================================`);
}

main();

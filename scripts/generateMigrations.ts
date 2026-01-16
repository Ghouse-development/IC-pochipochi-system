/**
 * ハードコードされた商品データをSupabase用SQLマイグレーションに変換するスクリプト
 *
 * 使用方法: npx tsx scripts/generateMigrations.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 外装製品データをインポート
import { exteriorProducts } from '../src/data/exteriorProducts';
import { interiorProducts } from '../src/data/interiorProducts';
import { waterEquipmentProducts } from '../src/data/waterEquipmentProducts';
import { furnitureProducts } from '../src/data/furnitureProducts';

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

// カテゴリIDマッピング（スラッグ形式に統一）
const categoryMapping: Record<string, string> = {
  // 外装
  'exterior-wall': 'exterior-wall',
  'exterior-roof': 'exterior-roof',
  'exterior-porch-tile': 'exterior-porch-tile',
  'exterior-porch-grout': 'exterior-porch-grout',
  'exterior-entrance-door': 'exterior-entrance-door',
  'exterior-entrance-handle': 'exterior-entrance-handle',
  'exterior-entrance-key': 'exterior-entrance-key',
  'exterior-balcony': 'exterior-balcony',
  'exterior-carport': 'exterior-carport',
  'exterior-gate': 'exterior-gate',
  'exterior-fence': 'exterior-fence',
  'exterior-post': 'exterior-post',
  'exterior-intercom': 'exterior-intercom',
  'exterior-soffit': 'exterior-soffit',
  'exterior-gutter': 'exterior-gutter',
  'exterior-shutters': 'exterior-shutters',
  'exterior-louvers': 'exterior-louvers',
  // 内装
  'interior-floor': 'interior-floor',
  'interior-wall': 'interior-wall',
  'interior-ceiling': 'interior-ceiling',
  'interior-door': 'interior-door',
  'interior-door-handle': 'interior-door-handle',
  'interior-closet-door': 'interior-closet-door',
  'interior-baseboard': 'interior-baseboard',
  'interior-stairs': 'interior-stairs',
  'interior-handrail': 'interior-handrail',
  'interior-window-frame': 'interior-window-frame',
  'interior-window-sill': 'interior-window-sill',
  // 水廻り
  'equipment-kitchen': 'equipment-kitchen',
  'equipment-bath': 'equipment-bath',
  'equipment-toilet': 'equipment-toilet',
  'equipment-washbasin': 'equipment-washbasin',
  // 家具
  'furniture-curtain': 'furniture-curtain',
  'furniture-aircon': 'furniture-aircon',
};

// プランIDマッピング
const planMapping: Record<string, string> = {
  'LACIE': 'lacie',
  'HOURS': 'hours',
  'LIFE+': 'life-plus',
  'LIFE': 'life',
  'LIFE_X': 'life-x',
};

function escapeSQL(str: string | undefined | null): string {
  if (!str) return 'NULL';
  return `'${str.replace(/'/g, "''")}'`;
}

function generateItemSQL(product: Product, index: number, categoryType: string): string {
  const itemCode = product.id;
  const categorySlug = categoryMapping[product.categoryId] || product.categoryId;

  const sql = `
-- ${product.name} (${product.manufacturer})
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  ${escapeSQL(itemCode)},
  ${escapeSQL(product.name)},
  ${escapeSQL(product.manufacturer)},
  ${escapeSQL(product.modelNumber)},
  ${escapeSQL(product.materialType)},
  ${escapeSQL(product.description)},
  true,
  ${index},
  ARRAY[${escapeSQL(categorySlug)}]
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;
`;

  // バリアント
  const variantSQL = product.variants.map((v, vIndex) => `
INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, ${escapeSQL(`${itemCode}-${v.id}`)}, ${escapeSQL(v.color)}, ${escapeSQL(v.colorCode)}, true, ${vIndex}
FROM items WHERE item_code = ${escapeSQL(itemCode)}
ON CONFLICT DO NOTHING;`).join('\n');

  // プライシング
  const pricingSQL = product.pricing.map(p => {
    const planId = planMapping[p.plan] || p.plan.toLowerCase();
    const isStandard = p.price === 0;
    return `
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, ${isStandard}, ${p.price}, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = ${escapeSQL(itemCode)} AND p.code = ${escapeSQL(planId)}
ON CONFLICT DO NOTHING;`;
  }).join('\n');

  return sql + variantSQL + pricingSQL;
}

function generateCategorySQL(categoryId: string, categoryName: string, categoryType: string, index: number): string {
  const slug = categoryMapping[categoryId] || categoryId;
  return `
INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  ${escapeSQL(categoryName)},
  ${escapeSQL(slug)},
  ${escapeSQL(categoryType)},
  true,
  false,
  ${index}
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;
`;
}

function generateMigration(products: Product[], categoryType: string, fileName: string): void {
  // カテゴリを抽出
  const categories = new Map<string, string>();
  products.forEach(p => {
    if (!categories.has(p.categoryId)) {
      categories.set(p.categoryId, p.categoryName);
    }
  });

  // SQL生成
  let sql = `-- ${categoryType}データ移行\n-- 自動生成: ${new Date().toISOString()}\n\n`;

  // カテゴリ追加
  sql += '-- カテゴリ\n';
  let catIndex = 0;
  categories.forEach((name, id) => {
    sql += generateCategorySQL(id, name, categoryType, catIndex++);
  });

  // アイテム追加
  sql += '\n-- アイテム\n';
  products.forEach((product, index) => {
    sql += generateItemSQL(product, index, categoryType);
  });

  // ファイル出力
  const outputPath = path.join(__dirname, '..', 'sql', 'migrations', fileName);
  fs.writeFileSync(outputPath, sql, 'utf-8');
  console.log(`Generated: ${outputPath} (${products.length} items)`);
}

// メイン処理
console.log('Generating migrations from hardcoded data...\n');

generateMigration(exteriorProducts as unknown as Product[], 'exterior', '010_migrate_exterior_products.sql');
generateMigration(interiorProducts as unknown as Product[], 'interior', '011_migrate_interior_products.sql');
generateMigration(waterEquipmentProducts as unknown as Product[], 'equipment', '012_migrate_water_equipment.sql');
generateMigration(furnitureProducts as unknown as Product[], 'other', '013_migrate_furniture.sql');

console.log('\nDone! Run the generated SQL files in Supabase SQL Editor.');

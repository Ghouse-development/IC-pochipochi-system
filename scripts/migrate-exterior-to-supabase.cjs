/**
 * 外装データ移行スクリプト
 * 複数の外装ファイル → Supabase SQL
 */

const fs = require('fs');
const path = require('path');

// カテゴリ名→slug変換マップ (exterior-プレフィックスは後で付与)
const categorySlugMap = {
  '外壁': 'wall',
  'ポーチ': 'porch',
  '屋根': 'roof',
  '樋': 'gutter',
  '軒天': 'soffit',
  '庇': 'awning',
  'ガレージシャッター': 'garage-shutter',
  '電動ガレージシャッター': 'electric-shutter',
  'シャッター': 'shutter',
  '窓': 'window',
  '玄関ドア': 'entrance-door',
  '外部設備': 'equipment',
  'エコキュート': 'eco-cute',
  '換気システム': 'ventilation',
  '太陽光・蓄電池': 'solar-battery'
};

// 読み込むファイルリスト
const exteriorFiles = [
  '../src/data/exteriorProducts.ts',
  '../src/data/exteriorProductsComplete.ts',
  '../src/data/exteriorProductsAdditional.ts',
  '../src/data/exteriorProductsPage3to5.ts',
  '../src/data/exteriorProductsPage16to20.ts',
  '../src/data/exteriorProductsPage21to25.ts',
  '../src/data/exteriorProductsPage26to29.ts'
];

function extractProducts(content) {
  const products = [];
  const productRegex = /\{\s*id:\s*'([^']+)'[\s\S]*?pricing:\s*\[[\s\S]*?\]\s*\}/g;
  let match;

  while ((match = productRegex.exec(content)) !== null) {
    const productStr = match[0];
    const id = extractField(productStr, 'id');
    const categoryId = extractField(productStr, 'categoryId');
    const categoryName = extractField(productStr, 'categoryName');
    const subcategory = extractField(productStr, 'subcategory');
    const name = extractField(productStr, 'name');
    const manufacturer = extractField(productStr, 'manufacturer');
    const modelNumber = extractField(productStr, 'modelNumber');
    const unit = extractField(productStr, 'unit');
    const isOption = productStr.includes('isOption: true');
    const description = extractField(productStr, 'description');
    const variants = extractVariants(productStr);
    const pricing = extractPricing(productStr);

    products.push({
      id, categoryId, categoryName, subcategory, name, manufacturer,
      modelNumber, unit, isOption, description, variants, pricing
    });
  }

  return products;
}

function extractField(str, fieldName) {
  const regex = new RegExp(`${fieldName}:\\s*'([^']*)'`);
  const match = str.match(regex);
  return match ? match[1] : '';
}

function extractVariants(str) {
  const variants = [];
  const variantsMatch = str.match(/variants:\s*\[([\s\S]*?)\]/);
  if (!variantsMatch) return variants;

  const variantsStr = variantsMatch[1];
  const variantRegex = /\{\s*id:\s*'([^']+)',\s*color:\s*'([^']+)',\s*colorCode:\s*'([^']+)'(?:,\s*(?:modelNumber|imageUrl):\s*'([^']*)')?\s*\}/g;

  let match;
  while ((match = variantRegex.exec(variantsStr)) !== null) {
    variants.push({
      id: match[1],
      color: match[2],
      colorCode: match[3],
      modelNumber: match[4] || ''
    });
  }

  return variants;
}

function extractPricing(str) {
  const pricing = [];
  const pricingMatch = str.match(/pricing:\s*\[([\s\S]*?)\]/);
  if (!pricingMatch) return pricing;

  const pricingStr = pricingMatch[1];
  const priceRegex = /\{\s*plan:\s*'([^']+)',\s*planId:\s*'([^']+)',\s*price:\s*(\d+)\s*\}/g;

  let match;
  while ((match = priceRegex.exec(pricingStr)) !== null) {
    pricing.push({
      plan: match[1],
      planId: match[2],
      price: parseInt(match[3], 10)
    });
  }

  return pricing;
}

function escapeSQL(str) {
  if (!str) return '';
  return str.replace(/'/g, "''");
}

function generateSQL(products) {
  let sql = `-- ========================================
-- 外装アイテム完全移行SQL
-- 生成日時: ${new Date().toISOString()}
-- アイテム数: ${products.length}
-- ========================================

-- トランザクション開始
BEGIN;

-- 既存の外装アイテムを削除（クリーンアップ）
DELETE FROM item_pricing WHERE item_id IN (
  SELECT id FROM items WHERE category_id IN (
    SELECT id FROM categories WHERE category_type = 'exterior'
  )
);
DELETE FROM item_variants WHERE item_id IN (
  SELECT id FROM items WHERE category_id IN (
    SELECT id FROM categories WHERE category_type = 'exterior'
  )
);
DELETE FROM items WHERE category_id IN (
  SELECT id FROM categories WHERE category_type = 'exterior'
);
DELETE FROM categories WHERE category_type = 'exterior';

`;

  // ユニークなカテゴリを抽出
  const categories = new Map();
  products.forEach((p) => {
    const key = p.categoryName;
    if (!categories.has(key)) {
      const slug = categorySlugMap[key] || `exterior-${categories.size + 1}`;
      categories.set(key, {
        name: p.categoryName,
        slug: `exterior-${slug}`,
        order: categories.size + 1
      });
    }
  });

  sql += `-- ========================================
-- カテゴリ登録 (${categories.size}件)
-- ========================================
`;

  categories.forEach((cat, name) => {
    sql += `INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('${escapeSQL(name)}', '${cat.slug}', 'exterior', '${escapeSQL(name)}', ${cat.order}, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
`;
  });

  sql += `\n`;

  // 単位はスキーマで既に定義済み（units テーブル）
  // INSERT不要

  // アイテムINSERT
  sql += `-- ========================================
-- アイテム登録 (${products.length}件)
-- ========================================
`;

  products.forEach((p, idx) => {
    const itemCode = p.id.replace(/[^a-zA-Z0-9-]/g, '').toUpperCase().substring(0, 50);
    sql += `
-- ${idx + 1}. ${p.name}
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  '${escapeSQL(itemCode)}',
  '${escapeSQL(p.name)}',
  '${escapeSQL(p.manufacturer)}',
  '${escapeSQL(p.categoryName)}',
  '${escapeSQL(p.modelNumber)}',
  '${escapeSQL(p.description)}',
  ${p.isOption ? 'false' : 'true'},
  true,
  ${idx + 1}
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;
`;
  });

  // category_id更新
  sql += `
-- ========================================
-- カテゴリID紐付け
-- ========================================
`;
  categories.forEach((cat, name) => {
    sql += `UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = '${cat.slug}')
WHERE category_name = '${escapeSQL(name)}' AND category_id IS NULL;
`;
  });

  // バリエーション
  sql += `
-- ========================================
-- バリエーション登録
-- ========================================
`;

  products.forEach((p) => {
    if (p.variants.length === 0) return;
    const itemCode = p.id.replace(/[^a-zA-Z0-9-]/g, '').toUpperCase().substring(0, 50);

    p.variants.forEach((v, vIdx) => {
      const variantCode = `${itemCode}-V${vIdx + 1}`;
      sql += `INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, '${escapeSQL(variantCode)}', '${escapeSQL(v.color)}', '${escapeSQL(v.colorCode)}', ${vIdx + 1}
FROM items i WHERE i.item_code = '${escapeSQL(itemCode)}'
ON CONFLICT DO NOTHING;
`;
    });
  });

  // 価格設定
  sql += `
-- ========================================
-- 価格設定登録
-- ========================================
`;

  products.forEach((p) => {
    if (p.pricing.length === 0) return;
    const itemCode = p.id.replace(/[^a-zA-Z0-9-]/g, '').toUpperCase().substring(0, 50);

    p.pricing.forEach(price => {
      const isStandard = price.price === 0;
      sql += `INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, ${price.price}, ${isStandard}, true
FROM items i, products p
WHERE i.item_code = '${escapeSQL(itemCode)}' AND p.code = '${price.planId}'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
`;
    });
  });

  sql += `
-- ========================================
-- コミット
-- ========================================
COMMIT;

-- 確認クエリ
SELECT
  c.name as category,
  COUNT(i.id) as item_count
FROM categories c
LEFT JOIN items i ON i.category_id = c.id
WHERE c.category_type = 'exterior'
GROUP BY c.name, c.display_order
ORDER BY c.display_order;
`;

  return sql;
}

// メイン処理
console.log('外装データ移行スクリプト開始...');

let allProducts = [];
const seenIds = new Set();

exteriorFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.log(`ファイルが見つかりません: ${file}`);
    return;
  }

  console.log(`読み込み中: ${file}`);
  const content = fs.readFileSync(filePath, 'utf-8');
  const products = extractProducts(content);

  // 重複を除外
  products.forEach(p => {
    if (!seenIds.has(p.id)) {
      seenIds.add(p.id);
      allProducts.push(p);
    }
  });

  console.log(`  ${products.length}件抽出 (新規: ${products.filter(p => !seenIds.has(p.id) || seenIds.size === allProducts.length).length}件)`);
});

console.log(`\n合計: ${allProducts.length}件の商品`);

// カテゴリ集計
const categoryCount = {};
allProducts.forEach(p => {
  categoryCount[p.categoryName] = (categoryCount[p.categoryName] || 0) + 1;
});
console.log('\nカテゴリ別アイテム数:');
Object.entries(categoryCount)
  .sort((a, b) => b[1] - a[1])
  .forEach(([cat, count]) => {
    console.log(`  ${cat}: ${count}件`);
  });

// SQL生成
const sql = generateSQL(allProducts);

// ファイル出力
const outputPath = path.join(__dirname, '../sql/010_seed_exterior_complete.sql');
fs.writeFileSync(outputPath, sql, 'utf-8');
console.log(`\nSQL出力完了: ${outputPath}`);
console.log(`SQLサイズ: ${(sql.length / 1024).toFixed(1)} KB`);

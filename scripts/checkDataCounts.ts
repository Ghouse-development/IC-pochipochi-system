/**
 * Supabase内のデータ件数を確認するスクリプト
 */

import * as fs from 'fs';
import * as path from 'path';
import { createClient } from '@supabase/supabase-js';

// .env読み込み
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
loadEnvFile(path.join(process.cwd(), '.env.local'));
loadEnvFile(path.join(process.cwd(), '.env'));

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

async function checkCounts() {
  // DB内のアイテム数
  const { count: itemCount } = await supabase
    .from('items')
    .select('*', { count: 'exact', head: true })
    .eq('is_active', true);

  // カテゴリタイプ別
  const { data: items } = await supabase
    .from('items')
    .select('id, category:categories(category_type)')
    .eq('is_active', true);

  const byType: Record<string, number> = {};
  items?.forEach((item: { id: string; category: { category_type: string } | null }) => {
    const type = item.category?.category_type || 'unknown';
    byType[type] = (byType[type] || 0) + 1;
  });

  // バリアント数
  const { count: variantCount } = await supabase
    .from('item_variants')
    .select('*', { count: 'exact', head: true });

  // 価格設定数
  const { count: pricingCount } = await supabase
    .from('item_pricing')
    .select('*', { count: 'exact', head: true });

  console.log('=== Supabase データ件数 ===');
  console.log('アイテム総数:', itemCount);
  console.log('カテゴリ別:');
  Object.entries(byType).forEach(([type, count]) => {
    console.log('  ' + type + ': ' + count + '件');
  });
  console.log('バリアント総数:', variantCount);
  console.log('価格設定総数:', pricingCount);

  // 静的データとの比較
  const { exteriorProducts } = await import('../src/data/exteriorProducts');
  const { interiorProducts } = await import('../src/data/interiorProducts');
  const { waterEquipmentProducts } = await import('../src/data/waterEquipmentProducts');
  const { furnitureProducts } = await import('../src/data/furnitureProducts');

  const staticTotal = exteriorProducts.length + interiorProducts.length +
                      waterEquipmentProducts.length + furnitureProducts.length;
  const staticVariants = [...exteriorProducts, ...interiorProducts,
                          ...waterEquipmentProducts, ...furnitureProducts]
                          .reduce((sum, p) => sum + (p.variants?.length || 0), 0);

  console.log('\n=== 静的データ件数 ===');
  console.log('アイテム総数:', staticTotal);
  console.log('  外装:', exteriorProducts.length);
  console.log('  内装:', interiorProducts.length);
  console.log('  水廻り:', waterEquipmentProducts.length);
  console.log('  家具:', furnitureProducts.length);
  console.log('バリアント総数:', staticVariants);

  console.log('\n=== 差分 ===');
  console.log('アイテム差: DB(' + itemCount + ') - 静的(' + staticTotal + ') = ' + ((itemCount || 0) - staticTotal));
}

checkCounts().catch(console.error);

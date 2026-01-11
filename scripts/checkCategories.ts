import * as dotenv from 'dotenv';
dotenv.config();

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

async function check() {
  // カテゴリを確認
  const { data: categories } = await supabase
    .from('categories')
    .select('id, name, category_type')
    .eq('category_type', 'exterior')
    .limit(10);
  
  console.log('=== 外装カテゴリ ===');
  console.log(categories);

  // 外壁カテゴリのアイテムを確認
  const wallCategory = categories?.find(c => c.name === '外壁');
  if (wallCategory) {
    console.log('\n=== 外壁カテゴリID ===');
    console.log(wallCategory.id);

    const { data: items, error } = await supabase
      .from('items')
      .select('id, name, category_id')
      .eq('category_id', wallCategory.id)
      .limit(5);
    
    console.log('\n=== 外壁アイテム ===');
    console.log(items);
    if (error) console.log('Error:', error);
  }

  // 全アイテム数を確認
  const { count } = await supabase
    .from('items')
    .select('*', { count: 'exact', head: true });
  
  console.log('\n=== 全アイテム数 ===');
  console.log(count);

  // アイテムのカテゴリ分布を確認
  const { data: itemCategories } = await supabase
    .from('items')
    .select('category_id')
    .limit(500);
  
  const categoryCount: Record<string, number> = {};
  itemCategories?.forEach(item => {
    categoryCount[item.category_id] = (categoryCount[item.category_id] || 0) + 1;
  });
  
  console.log('\n=== カテゴリ別アイテム数 ===');
  console.log(Object.entries(categoryCount).slice(0, 10));
}

check();

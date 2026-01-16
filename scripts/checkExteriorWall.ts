import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
  // まず外壁カテゴリIDを取得
  const { data: cats } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', 'exterior-wall');

  const categoryId = cats?.[0]?.id;

  // 外壁カテゴリのアイテムを取得
  const { data: items, error } = await supabase
    .from('items')
    .select(`
      id, name, item_code, manufacturer,
      category:categories(name, slug),
      variants:item_variants(color_name)
    `)
    .eq('category_id', categoryId)
    .order('name');

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('=== 外壁アイテム一覧 ===');
  console.log(`総数: ${items?.length || 0}件\n`);

  items?.forEach(item => {
    const cat = item.category as { name: string } | null;
    const variants = item.variants as { color_name: string }[] | null;
    console.log(`- ${item.name} (${item.item_code})`);
    console.log(`  メーカー: ${item.manufacturer || '-'}`);
    console.log(`  カテゴリ: ${cat?.name || '-'}`);
    console.log(`  色数: ${variants?.length || 0}`);
  });
}

check();

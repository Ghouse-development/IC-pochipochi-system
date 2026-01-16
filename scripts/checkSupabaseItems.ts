/**
 * Supabaseアイテム確認スクリプト
 * 「ネイチャーⅡ」「ベスパ」などのアイテムが存在するか、表示条件を満たしているか確認
 */
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Supabase環境変数が設定されていません');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkItems() {
  console.log('=== Supabaseアイテム確認 ===\n');

  // 1. カテゴリ一覧を確認
  console.log('【1. カテゴリ一覧】');
  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('id, name, slug, category_type, is_active, parent_id')
    .order('display_order');

  if (catError) {
    console.error('カテゴリ取得エラー:', catError);
  } else {
    console.log(`カテゴリ数: ${categories?.length || 0}`);
    categories?.forEach(cat => {
      console.log(`  - ${cat.name} (slug: ${cat.slug}, type: ${cat.category_type}, active: ${cat.is_active})`);
    });
  }

  // 2. ポーチ関連カテゴリを確認
  console.log('\n【2. ポーチ関連カテゴリ】');
  const { data: porchCats } = await supabase
    .from('categories')
    .select('*')
    .or('name.ilike.%ポーチ%,slug.ilike.%porch%');

  if (porchCats && porchCats.length > 0) {
    porchCats.forEach(cat => {
      console.log(`  ✓ ${cat.name} (id: ${cat.id}, type: ${cat.category_type})`);
    });
  } else {
    console.log('  ⚠ ポーチ関連カテゴリが見つかりません');
  }

  // 3. 「ネイチャー」「ベスパ」を含むアイテムを検索
  console.log('\n【3. タイル関連アイテム検索】');
  const searchTerms = ['ネイチャー', 'ベスパ', 'タイル'];

  for (const term of searchTerms) {
    const { data: items, error } = await supabase
      .from('items')
      .select(`
        id, item_code, name, manufacturer, is_active, tags, category_id,
        category:categories(id, name, slug, category_type)
      `)
      .ilike('name', `%${term}%`);

    if (error) {
      console.error(`「${term}」検索エラー:`, error);
    } else if (items && items.length > 0) {
      console.log(`\n「${term}」を含むアイテム: ${items.length}件`);
      items.forEach(item => {
        const cat = item.category as { name: string; category_type: string } | null;
        console.log(`  ✓ ${item.name}`);
        console.log(`    - item_code: ${item.item_code}`);
        console.log(`    - is_active: ${item.is_active}`);
        console.log(`    - category: ${cat?.name || 'なし'} (type: ${cat?.category_type || 'なし'})`);
        console.log(`    - tags: ${JSON.stringify(item.tags)}`);
      });
    } else {
      console.log(`\n「${term}」を含むアイテム: 0件`);
    }
  }

  // 4. 全アイテム数とcategory_typeの分布
  console.log('\n【4. アイテム統計】');
  const { data: allItems } = await supabase
    .from('items')
    .select(`
      id, is_active,
      category:categories(category_type)
    `);

  if (allItems) {
    console.log(`総アイテム数: ${allItems.length}`);
    console.log(`有効アイテム: ${allItems.filter(i => i.is_active).length}`);

    // category_typeごとの集計
    const typeCount: Record<string, number> = {};
    allItems.forEach(item => {
      const cat = item.category as { category_type: string } | null;
      const type = cat?.category_type || 'null';
      typeCount[type] = (typeCount[type] || 0) + 1;
    });
    console.log('category_type別:');
    Object.entries(typeCount).forEach(([type, count]) => {
      console.log(`  - ${type}: ${count}件`);
    });
  }

  // 5. is_active=falseのアイテムを確認
  console.log('\n【5. 非表示アイテム確認】');
  const { data: inactiveItems } = await supabase
    .from('items')
    .select('id, name, is_active')
    .eq('is_active', false)
    .limit(20);

  if (inactiveItems && inactiveItems.length > 0) {
    console.log(`非表示アイテム: ${inactiveItems.length}件（最大20件表示）`);
    inactiveItems.forEach(item => {
      console.log(`  - ${item.name}`);
    });
  } else {
    console.log('非表示アイテムはありません');
  }

  console.log('\n=== 確認完了 ===');
}

checkItems().catch(console.error);

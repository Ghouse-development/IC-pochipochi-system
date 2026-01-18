/**
 * 重複アイテムを削除するスクリプト
 * 同名アイテムのうち、古い方を削除（created_at が古い方）
 */
import * as fs from 'fs';
import * as path from 'path';
import { createClient } from '@supabase/supabase-js';

function loadEnvFile(filePath: string) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    content.split('\n').forEach(line => {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) {
        process.env[match[1].trim()] = match[2].trim().replace(/^["']|["']$/g, '');
      }
    });
  }
}

loadEnvFile(path.join(process.cwd(), '.env'));

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || ''
);

async function main() {
  console.log('=== 重複アイテム削除 ===\n');

  // 全アイテムを取得
  const { data: items, error } = await supabase
    .from('items')
    .select('id, name, item_code, created_at, category_id')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('取得エラー:', error);
    return;
  }

  console.log(`総アイテム数: ${items?.length}件\n`);

  // 名前でグループ化
  const nameGroups: Map<string, typeof items> = new Map();
  for (const item of items || []) {
    const existing = nameGroups.get(item.name) || [];
    existing.push(item);
    nameGroups.set(item.name, existing);
  }

  // 重複を特定
  const duplicateGroups: { name: string; items: typeof items }[] = [];
  for (const [name, groupItems] of nameGroups.entries()) {
    if ((groupItems?.length || 0) > 1) {
      duplicateGroups.push({ name, items: groupItems });
    }
  }

  console.log(`重複グループ数: ${duplicateGroups.length}件\n`);

  let deleted = 0;
  for (const group of duplicateGroups) {
    // category_id があるものを優先、なければ新しいものを残す
    const sortedItems = (group.items || []).sort((a, b) => {
      // category_id があるものを優先
      if (a.category_id && !b.category_id) return -1;
      if (!a.category_id && b.category_id) return 1;
      // 同じ場合は新しい方を残す
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });

    // 最初のもの以外を削除
    const toKeep = sortedItems[0];
    const toDelete = sortedItems.slice(1);

    for (const item of toDelete) {
      const { error: deleteError } = await supabase
        .from('items')
        .delete()
        .eq('id', item.id);

      if (!deleteError) {
        deleted++;
        console.log(`削除: ${item.name} (${item.item_code}) - 残す: ${toKeep.item_code}`);
      } else {
        console.error(`削除エラー: ${item.name}`, deleteError.message);
      }
    }
  }

  console.log(`\n${deleted}件を削除しました`);
}

main().catch(console.error);

/**
 * 残りのcategory_idなしアイテムを修正するスクリプト
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

// カテゴリIDマッピング（item_codeプレフィックス → カテゴリID）
const CATEGORY_MAPPINGS: { prefix: string; categoryId: string; categoryName: string }[] = [
  // 外壁
  { prefix: 'ext-wall-', categoryId: '891f237e-49c0-4375-b981-f5270bb2e17c', categoryName: '外壁' },
  // ポーチタイル
  { prefix: 'porch-tile-', categoryId: '642eb6ab-9dc0-44a1-9039-e400a9530581', categoryName: 'ポーチタイル' },
  // ポーチ（モルタル等）
  { prefix: 'porch-mortar', categoryId: '83beb78a-582e-4162-a10e-e5b5cad2c007', categoryName: 'ポーチ' },
  // 屋根
  { prefix: 'roof-', categoryId: '918c2a82-45a8-49de-9fb8-341f7f6b2a2a', categoryName: '屋根' },
  // 軒天
  { prefix: 'soffit-', categoryId: 'e3415eea-ba4b-4910-ad7d-56abb14cc85d', categoryName: '軒天' },
  // 雨樋（竪・横）
  { prefix: 'gutter-', categoryId: '3c4155b0-9f0d-4a32-b594-e5df8e06f5f0', categoryName: '雨樋' },
  // 破風
  { prefix: 'fascia-', categoryId: '1dee09b1-12ce-47ad-abbe-e248d69667e9', categoryName: '外部建材' },
  // 外部配管
  { prefix: 'external-piping', categoryId: '6ab2ec3e-81c0-4d50-a38c-fa247dd56e23', categoryName: '外部設備' },
  // 壁紙（内装）- ベースクロス
  { prefix: 'wallpaper-', categoryId: '0128b95b-fe58-44cc-8b55-f80e50beb51f', categoryName: 'ベースクロス（壁）' },
  // 庇
  { prefix: 'awning-', categoryId: 'd0ba069c-0d82-4726-8eca-b4b1c8dca45f', categoryName: '庇' },
  // ガレージシャッター
  { prefix: 'garage-shutter-', categoryId: '4415aaf1-3432-46ac-ba26-4c911c16dc6b', categoryName: 'ガレージシャッター' },
  // 窓
  { prefix: 'window-', categoryId: 'db57f398-40be-443d-9241-6daf83f7a2f3', categoryName: '窓' },
  // 玄関ドア
  { prefix: 'entrance-door-', categoryId: '12081305-1149-466c-9b01-388d1f9e865a', categoryName: '玄関ドア' },
  // 外部設備（コンセント・カメラ・フック等）
  { prefix: 'exterior-', categoryId: '6ab2ec3e-81c0-4d50-a38c-fa247dd56e23', categoryName: '外部設備' },
  // 換気
  { prefix: 'ventilation-', categoryId: 'f05c89e7-3b2c-40a7-8c66-6516477ff462', categoryName: '換気システム' },
  // 太陽光
  { prefix: 'solar-', categoryId: 'fd55d1e5-8843-4de8-ab5e-5898fa2c1eb6', categoryName: '太陽光' },
  // エコキュート
  { prefix: 'eco-cute-', categoryId: '2779a17b-e6f5-44b0-9388-b601b75fa3fb', categoryName: '給湯器' },
];

async function main() {
  console.log('=== 残りカテゴリ修正 ===\n');

  // カテゴリIDがnullのアイテムを取得
  const { data: items, error } = await supabase
    .from('items')
    .select('id, name, item_code')
    .is('category_id', null);

  if (error) {
    console.error('取得エラー:', error);
    return;
  }

  console.log(`カテゴリなしアイテム: ${items?.length}件\n`);

  let updated = 0;
  let notMatched: { name: string; item_code: string }[] = [];

  for (const item of items || []) {
    let matched = false;

    for (const mapping of CATEGORY_MAPPINGS) {
      if (item.item_code?.startsWith(mapping.prefix)) {
        const { error: updateError } = await supabase
          .from('items')
          .update({ category_id: mapping.categoryId })
          .eq('id', item.id);

        if (!updateError) {
          updated++;
          console.log(`更新: ${item.name} → ${mapping.categoryName}`);
          matched = true;
          break;
        } else {
          console.error(`エラー: ${item.name}`, updateError.message);
        }
      }
    }

    if (!matched) {
      notMatched.push({ name: item.name, item_code: item.item_code });
    }
  }

  console.log(`\n${updated}件を更新しました`);

  if (notMatched.length > 0) {
    console.log(`\n未マッチ: ${notMatched.length}件`);
    notMatched.forEach(item => {
      console.log(`  - ${item.name} (${item.item_code})`);
    });
  }
}

main().catch(console.error);

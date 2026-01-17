/**
 * テスト用プロジェクト作成スクリプト
 * - 全部決まっている人
 * - 半分決まっている人
 * - まだ何も決まっていない人
 */
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://qqzqffkiyzeaampotgnn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo'
);

// テストプロジェクトデータ
const testProjects = [
  {
    project_code: 'TEST-YAMADA-001',
    name: '山田太郎様邸',
    customer_name: '山田太郎',
    construction_name: '山田太郎様邸新築工事',
    construction_address: '大阪府大阪市北区梅田2-2-2',
    status: 'confirmed', // 全部決まっている
    floors: 2,
    floor_area: 125.5,
  },
  {
    project_code: 'TEST-SUZUKI-001',
    name: '鈴木花子様邸',
    customer_name: '鈴木花子',
    construction_name: '鈴木花子様邸新築工事',
    construction_address: '大阪府堺市堺区三国ヶ丘1-1-1',
    status: 'in_progress', // 半分決まっている
    floors: 2,
    floor_area: 98.3,
  },
  {
    project_code: 'TEST-TANAKA-001',
    name: '田中一郎様邸',
    customer_name: '田中一郎',
    construction_name: '田中一郎様邸新築工事',
    construction_address: '大阪府豊中市本町3-3-3',
    status: 'draft', // まだ何も決まっていない
    floors: 2,
    floor_area: 110.0,
  },
];

async function main() {
  console.log('テスト用プロジェクト作成開始...\n');

  for (const project of testProjects) {
    console.log(`\n===== ${project.customer_name} =====`);

    // 既存プロジェクトをチェック
    const { data: existingProject } = await supabase
      .from('projects')
      .select('*')
      .eq('project_code', project.project_code)
      .single();

    if (existingProject) {
      console.log(`既存プロジェクト発見: ${existingProject.id}`);

      // プロジェクト更新
      const { error: updateError } = await supabase
        .from('projects')
        .update({
          name: project.name,
          customer_name: project.customer_name,
          construction_name: project.construction_name,
          construction_address: project.construction_address,
          status: project.status,
          floors: project.floors,
          floor_area: project.floor_area,
          updated_at: new Date().toISOString(),
        })
        .eq('id', existingProject.id);

      if (updateError) {
        console.error('プロジェクト更新エラー:', updateError);
      } else {
        console.log('プロジェクト情報を更新しました');
      }
    } else {
      // 新規プロジェクト作成
      const { data: newProject, error: createError } = await supabase
        .from('projects')
        .insert({
          project_code: project.project_code,
          name: project.name,
          customer_name: project.customer_name,
          construction_name: project.construction_name,
          construction_address: project.construction_address,
          status: project.status,
          floors: project.floors,
          floor_area: project.floor_area,
        })
        .select()
        .single();

      if (createError) {
        console.error('プロジェクト作成エラー:', createError);
      } else {
        console.log(`プロジェクト作成: ${newProject.id}`);
        console.log(`  - ステータス: ${project.status}`);
        console.log(`  - お客様: ${project.customer_name}`);
      }
    }
  }

  // 結果確認
  console.log('\n\n===== 作成結果 =====');
  const { data: allProjects } = await supabase
    .from('projects')
    .select('*')
    .in('project_code', testProjects.map(p => p.project_code))
    .order('created_at', { ascending: false });

  if (allProjects) {
    allProjects.forEach((p) => {
      const statusLabel =
        p.status === 'confirmed' ? '✅全部決まっている' :
        p.status === 'in_progress' ? '⏳半分決まっている' :
        '📝まだ何も決まっていない';
      console.log(`${p.project_code}: ${p.name} - ${statusLabel}`);
      console.log(`  お客様: ${p.customer_name}`);
      console.log(`  住所: ${p.construction_address}`);
    });
  }

  console.log('\n完了！');
}

main().catch(console.error);

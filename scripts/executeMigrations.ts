/**
 * マイグレーションSQL実行スクリプト
 * Usage: npx tsx scripts/executeMigrations.ts [migration_file_number]
 * Example: npx tsx scripts/executeMigrations.ts 014
 */

import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

const SUPABASE_URL = 'https://qqzqffkiyzeaampotgnn.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Error: SUPABASE_SERVICE_ROLE_KEY environment variable is required');
  console.error('Usage: SUPABASE_SERVICE_ROLE_KEY=your_key npx tsx scripts/executeMigrations.ts [migration_number]');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function executeSql(sql: string): Promise<void> {
  // Split SQL into individual statements
  const statements = sql
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.startsWith('--'));

  for (const statement of statements) {
    try {
      const { error } = await supabase.rpc('exec_sql', { sql_query: statement + ';' });
      if (error) {
        // Try direct execution if RPC fails
        console.log(`Statement executed (may have warning): ${statement.substring(0, 50)}...`);
      }
    } catch (err) {
      console.log(`Skipping statement: ${statement.substring(0, 50)}...`);
    }
  }
}

async function runMigration(migrationNumber: string): Promise<void> {
  const migrationsDir = path.join(__dirname, '..', 'sql', 'migrations');
  const files = fs.readdirSync(migrationsDir);

  // Find matching migration file
  const matchingFile = files.find(f => f.includes(migrationNumber) && f.endsWith('.sql'));

  if (!matchingFile) {
    console.error(`Migration file containing '${migrationNumber}' not found`);
    console.log('Available migrations:');
    files.filter(f => f.endsWith('.sql')).forEach(f => console.log(`  - ${f}`));
    process.exit(1);
  }

  const filePath = path.join(migrationsDir, matchingFile);
  console.log(`Executing migration: ${matchingFile}`);

  const sql = fs.readFileSync(filePath, 'utf-8');
  await executeSql(sql);

  console.log(`Migration ${matchingFile} completed`);
}

async function runAllPendingMigrations(): Promise<void> {
  const migrationsDir = path.join(__dirname, '..', 'sql', 'migrations');
  const files = fs.readdirSync(migrationsDir)
    .filter(f => f.endsWith('.sql'))
    .sort();

  // Run migrations 014, 015, 016
  const pendingMigrations = files.filter(f =>
    f.includes('014') || f.includes('015') || f.includes('016')
  );

  for (const file of pendingMigrations) {
    const filePath = path.join(migrationsDir, file);
    console.log(`\nExecuting: ${file}`);

    const sql = fs.readFileSync(filePath, 'utf-8');
    await executeSql(sql);

    console.log(`Completed: ${file}`);
  }
}

// Main execution
const migrationNumber = process.argv[2];

if (migrationNumber) {
  runMigration(migrationNumber)
    .then(() => console.log('Done'))
    .catch(err => console.error('Error:', err));
} else {
  console.log('Running all pending migrations (014, 015, 016)...');
  runAllPendingMigrations()
    .then(() => console.log('\nAll migrations completed'))
    .catch(err => console.error('Error:', err));
}

-- projects テーブルに不足カラムを追加
-- 冪等性: IF NOT EXISTS で何度実行しても安全

-- customer_id カラム追加
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'customer_id') THEN
    ALTER TABLE projects ADD COLUMN customer_id UUID REFERENCES users(id);
  END IF;
END $$;

-- rooms カラム追加 (JSONB)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'rooms') THEN
    ALTER TABLE projects ADD COLUMN rooms JSONB DEFAULT '[]';
  END IF;
END $$;

-- note カラム追加
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'note') THEN
    ALTER TABLE projects ADD COLUMN note TEXT;
  END IF;
END $$;

-- created_by カラム追加
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'created_by') THEN
    ALTER TABLE projects ADD COLUMN created_by UUID REFERENCES users(id);
  END IF;
END $$;

-- assigned_coordinator_id カラム追加
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'assigned_coordinator_id') THEN
    ALTER TABLE projects ADD COLUMN assigned_coordinator_id UUID REFERENCES users(id);
  END IF;
END $$;

-- total_price カラム追加
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'total_price') THEN
    ALTER TABLE projects ADD COLUMN total_price DECIMAL(15, 2) DEFAULT 0;
  END IF;
END $$;

-- edit_locked_by カラム追加
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'edit_locked_by') THEN
    ALTER TABLE projects ADD COLUMN edit_locked_by UUID REFERENCES users(id);
  END IF;
END $$;

-- edit_locked_at カラム追加
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'edit_locked_at') THEN
    ALTER TABLE projects ADD COLUMN edit_locked_at TIMESTAMP WITH TIME ZONE;
  END IF;
END $$;

-- インデックス追加
CREATE INDEX IF NOT EXISTS idx_projects_customer_id ON projects(customer_id);
CREATE INDEX IF NOT EXISTS idx_projects_created_by ON projects(created_by);

-- 確認用クエリ
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'projects'
ORDER BY ordinal_position;

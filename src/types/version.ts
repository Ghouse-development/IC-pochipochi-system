export interface Version {
  id: string;
  version: string;
  createdAt: Date;
  createdBy: string;
  description: string;
  changes: string[];
  isActive: boolean;
}

export interface VersionChange {
  id: string;
  type: 'add' | 'update' | 'delete';
  entityType: 'product' | 'category' | 'price';
  entityId: string;
  previousValue?: unknown;
  newValue?: unknown;
  changedBy: string;
  changedAt: Date;
}
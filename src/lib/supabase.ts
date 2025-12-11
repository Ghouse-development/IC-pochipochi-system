import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Please check your .env file.');
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || '',
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  }
);

// Storage bucket names
export const STORAGE_BUCKETS = {
  ITEM_IMAGES: 'item-images',
  PROJECT_DOCUMENTS: 'project-documents',
  SYSTEM_ASSETS: 'system-assets',
} as const;

// Helper function to get public URL for storage items
export const getStorageUrl = (bucket: string, path: string): string => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
};

// Helper function to upload file to storage
export const uploadFile = async (
  bucket: string,
  path: string,
  file: File
): Promise<{ url: string; path: string } | null> => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, {
      cacheControl: '3600',
      upsert: true,
    });

  if (error) {
    console.error('Upload error:', error);
    return null;
  }

  const publicUrl = getStorageUrl(bucket, data.path);
  return { url: publicUrl, path: data.path };
};

// Helper function to delete file from storage
export const deleteFile = async (
  bucket: string,
  path: string
): Promise<boolean> => {
  const { error } = await supabase.storage.from(bucket).remove([path]);
  if (error) {
    console.error('Delete error:', error);
    return false;
  }
  return true;
};

// Legacy interface for backward compatibility
export interface ProductImage {
  id?: string;
  product_code: string;
  product_name?: string;
  category?: string;
  subcategory?: string;
  image_url: string;
  image_path?: string;
  thumbnail_url?: string;
  file_name?: string;
  file_size?: number;
  mime_type?: string;
  width?: number;
  height?: number;
  is_primary?: boolean;
  display_order?: number;
  created_at?: string;
  updated_at?: string;
}

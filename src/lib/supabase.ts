import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://pnurwehyjmiyevwtekip.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBudXJ3ZWh5am1peWV2d3Rla2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3NTEwODQsImV4cCI6MjA3NDMyNzA4NH0.K7JybxT95cElbF-FXLBDHvHQ4S-FrphP1E9cScSKJoo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
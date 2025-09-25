-- Product images table
CREATE TABLE IF NOT EXISTS product_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_code VARCHAR(255) NOT NULL,
  product_name VARCHAR(500),
  category VARCHAR(100),
  subcategory VARCHAR(100),
  image_url TEXT NOT NULL,
  image_path TEXT,
  thumbnail_url TEXT,
  file_name VARCHAR(255),
  file_size INTEGER,
  mime_type VARCHAR(100),
  width INTEGER,
  height INTEGER,
  is_primary BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Indexes for better performance
CREATE INDEX idx_product_images_product_code ON product_images(product_code);
CREATE INDEX idx_product_images_category ON product_images(category);
CREATE INDEX idx_product_images_subcategory ON product_images(subcategory);
CREATE INDEX idx_product_images_is_primary ON product_images(is_primary);
CREATE INDEX idx_product_images_display_order ON product_images(display_order);

-- Storage bucket for product images
-- Run this in Supabase dashboard:
-- INSERT INTO storage.buckets (id, name, public) VALUES ('product-images', 'product-images', true);

-- RLS (Row Level Security) policies
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public can view product images" ON product_images
  FOR SELECT USING (true);

-- Allow authenticated users to insert
CREATE POLICY "Authenticated users can insert product images" ON product_images
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Allow authenticated users to update their own uploads
CREATE POLICY "Authenticated users can update product images" ON product_images
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Allow authenticated users to delete
CREATE POLICY "Authenticated users can delete product images" ON product_images
  FOR DELETE USING (auth.role() = 'authenticated');

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc', NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_product_images_updated_at BEFORE UPDATE ON product_images
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
import { supabase, type ProductImage } from '../lib/supabase';
import { createLogger } from '../lib/logger';

const logger = createLogger('ImageService');

export class ImageService {
  private static BUCKET_NAME = 'product-images';

  /**
   * Check if bucket exists and create if necessary
   */
  static async ensureBucketExists(): Promise<boolean> {
    try {
      const { data: buckets, error } = await supabase.storage.listBuckets();

      if (error) {
        logger.error('Error listing buckets:', error);
        return false;
      }

      const bucketExists = buckets?.some(bucket => bucket.id === this.BUCKET_NAME);

      if (!bucketExists) {
        logger.warn(`Bucket '${this.BUCKET_NAME}' does not exist. Please run the SQL script in sql/create_storage_bucket.sql`);
        return false;
      }

      return true;
    } catch (error) {
      logger.error('Error checking bucket:', error);
      return false;
    }
  }

  /**
   * Upload an image file to Supabase Storage
   */
  static async uploadImage(file: File, productCode: string): Promise<string | null> {
    try {
      // Ensure bucket exists
      const bucketExists = await this.ensureBucketExists();
      if (!bucketExists) {
        logger.error('Storage bucket not found. Please create it first.');
        return null;
      }

      // Validate file
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
      if (!validTypes.includes(file.type)) {
        logger.error('Invalid file type:', file.type);
        return null;
      }

      // Check file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        logger.error('File size exceeds 5MB limit');
        return null;
      }

      const fileExt = file.name.split('.').pop()?.toLowerCase();
      const fileName = `${productCode}_${Date.now()}.${fileExt}`;
      const filePath = `products/${productCode}/${fileName}`;

      const { error } = await supabase.storage
        .from(this.BUCKET_NAME)
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
          contentType: file.type
        });

      if (error) {
        logger.error('Error uploading image:', error);

        // Handle specific error cases
        if (error.message?.includes('bucket') || error.message?.includes('not found')) {
          logger.error('Bucket not found. Please create the storage bucket first.');
        } else if (error.message?.includes('duplicate')) {
          logger.error('File already exists. Try with a different name.');
        } else if (error.message?.includes('size')) {
          logger.error('File size exceeds limit.');
        }

        return null;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from(this.BUCKET_NAME)
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      logger.error('Error in uploadImage:', error);
      return null;
    }
  }

  /**
   * Save product image metadata to database
   */
  static async saveImageMetadata(imageData: ProductImage): Promise<ProductImage | null> {
    try {
      const { data, error } = await supabase
        .from('product_images')
        .insert([imageData])
        .select()
        .single();

      if (error) {
        logger.error('Error saving image metadata:', error);
        return null;
      }

      return data;
    } catch (error) {
      logger.error('Error in saveImageMetadata:', error);
      return null;
    }
  }

  /**
   * Upload image and save metadata
   */
  static async uploadProductImage(
    file: File,
    productCode: string,
    productName?: string,
    category?: string,
    subcategory?: string,
    isPrimary: boolean = false
  ): Promise<ProductImage | null> {
    try {
      // Upload image to storage
      const imageUrl = await this.uploadImage(file, productCode);
      if (!imageUrl) {
        return null;
      }

      // Get file metadata
      const fileSize = file.size;
      const mimeType = file.type;

      // Create image metadata
      const imageData: ProductImage = {
        product_code: productCode,
        product_name: productName,
        category: category,
        subcategory: subcategory,
        image_url: imageUrl,
        file_name: file.name,
        file_size: fileSize,
        mime_type: mimeType,
        is_primary: isPrimary
      };

      // Save to database
      return await this.saveImageMetadata(imageData);
    } catch (error) {
      logger.error('Error in uploadProductImage:', error);
      return null;
    }
  }

  /**
   * Get all images for a product
   */
  static async getProductImages(productCode: string): Promise<ProductImage[]> {
    try {
      const { data, error } = await supabase
        .from('product_images')
        .select('*')
        .eq('product_code', productCode)
        .order('display_order', { ascending: true });

      if (error) {
        logger.error('Error fetching product images:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      logger.error('Error in getProductImages:', error);
      return [];
    }
  }

  /**
   * Get primary image for a product
   */
  static async getPrimaryImage(productCode: string): Promise<ProductImage | null> {
    try {
      const { data, error } = await supabase
        .from('product_images')
        .select('*')
        .eq('product_code', productCode)
        .eq('is_primary', true)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned"
        logger.error('Error fetching primary image:', error);
        return null;
      }

      return data || null;
    } catch (error) {
      logger.error('Error in getPrimaryImage:', error);
      return null;
    }
  }

  /**
   * Update image metadata
   */
  static async updateImageMetadata(
    imageId: string,
    updates: Partial<ProductImage>
  ): Promise<ProductImage | null> {
    try {
      const { data, error } = await supabase
        .from('product_images')
        .update(updates)
        .eq('id', imageId)
        .select()
        .single();

      if (error) {
        logger.error('Error updating image metadata:', error);
        return null;
      }

      return data;
    } catch (error) {
      logger.error('Error in updateImageMetadata:', error);
      return null;
    }
  }

  /**
   * Delete an image
   */
  static async deleteImage(imageId: string, imagePath?: string): Promise<boolean> {
    try {
      // Delete from storage if path is provided
      if (imagePath) {
        const { error: storageError } = await supabase.storage
          .from(this.BUCKET_NAME)
          .remove([imagePath]);

        if (storageError) {
          logger.error('Error deleting from storage:', storageError);
        }
      }

      // Delete from database
      const { error: dbError } = await supabase
        .from('product_images')
        .delete()
        .eq('id', imageId);

      if (dbError) {
        logger.error('Error deleting from database:', dbError);
        return false;
      }

      return true;
    } catch (error) {
      logger.error('Error in deleteImage:', error);
      return false;
    }
  }

  /**
   * Set primary image for a product
   */
  static async setPrimaryImage(productCode: string, imageId: string): Promise<boolean> {
    try {
      // First, unset all primary images for this product
      const { error: unsetError } = await supabase
        .from('product_images')
        .update({ is_primary: false })
        .eq('product_code', productCode);

      if (unsetError) {
        logger.error('Error unsetting primary images:', unsetError);
        return false;
      }

      // Then set the new primary image
      const { error: setError } = await supabase
        .from('product_images')
        .update({ is_primary: true })
        .eq('id', imageId);

      if (setError) {
        logger.error('Error setting primary image:', setError);
        return false;
      }

      return true;
    } catch (error) {
      logger.error('Error in setPrimaryImage:', error);
      return false;
    }
  }

  /**
   * Get images by category
   */
  static async getImagesByCategory(category: string): Promise<ProductImage[]> {
    try {
      const { data, error } = await supabase
        .from('product_images')
        .select('*')
        .eq('category', category)
        .order('product_code', { ascending: true })
        .order('display_order', { ascending: true });

      if (error) {
        logger.error('Error fetching images by category:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      logger.error('Error in getImagesByCategory:', error);
      return [];
    }
  }

  /**
   * Batch upload images
   */
  static async batchUploadImages(
    files: File[],
    productCode: string,
    productName?: string,
    category?: string,
    subcategory?: string
  ): Promise<ProductImage[]> {
    const uploadedImages: ProductImage[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const isPrimary = i === 0; // First image is primary

      const result = await this.uploadProductImage(
        file,
        productCode,
        productName,
        category,
        subcategory,
        isPrimary
      );

      if (result) {
        uploadedImages.push(result);
      }
    }

    return uploadedImages;
  }
}
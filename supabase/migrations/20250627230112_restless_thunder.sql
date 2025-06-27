/*
  # Create products table for Korean beauty website

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name_ko` (text) - Korean product name
      - `name_en` (text) - English product name (optional)
      - `category` (text) - Product category
      - `description_ko` (text) - Korean description
      - `price` (integer) - Price in KRW
      - `original_price` (integer) - Original price for discount calculation
      - `image_url` (text) - Product image URL
      - `benefits` (text array) - Array of benefit tags
      - `rating` (decimal) - Average rating
      - `review_count` (integer) - Number of reviews
      - `is_featured` (boolean) - Whether product is featured
      - `is_active` (boolean) - Whether product is active
      - `stock_quantity` (integer) - Available stock
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access
    - Add policy for authenticated admin users to manage products
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_ko text NOT NULL,
  name_en text,
  category text NOT NULL,
  description_ko text NOT NULL,
  price integer NOT NULL,
  original_price integer,
  image_url text NOT NULL,
  benefits text[] DEFAULT '{}',
  rating decimal(2,1) DEFAULT 0.0,
  review_count integer DEFAULT 0,
  is_featured boolean DEFAULT false,
  is_active boolean DEFAULT true,
  stock_quantity integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow public read access to active products
CREATE POLICY "Public can read active products"
  ON products
  FOR SELECT
  TO public
  USING (is_active = true);

-- Allow authenticated users to manage products (for admin)
CREATE POLICY "Authenticated users can manage products"
  ON products
  FOR ALL
  TO authenticated
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
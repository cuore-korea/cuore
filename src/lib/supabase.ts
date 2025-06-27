import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export interface Product {
  id: string;
  name_ko: string;
  name_en?: string;
  category: string;
  description_ko: string;
  price: number;
  original_price?: number;
  image_url: string;
  benefits: string[];
  rating: number;
  review_count: number;
  is_featured: boolean;
  is_active: boolean;
  stock_quantity: number;
  created_at: string;
  updated_at: string;
}

export interface Consultation {
  id: string;
  name: string;
  phone: string;
  email: string;
  service_type: string;
  preferred_date: string;
  preferred_time: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  phone?: string;
  email: string;
  service_interest?: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  created_at: string;
  updated_at: string;
}
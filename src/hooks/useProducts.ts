import { useState, useEffect } from 'react';
import { supabase, Product } from '../lib/supabase';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getFeaturedProducts = () => {
    return products.filter(product => product.is_featured);
  };

  const getProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category);
  };

  return {
    products,
    loading,
    error,
    getFeaturedProducts,
    getProductsByCategory,
    refetch: fetchProducts
  };
};
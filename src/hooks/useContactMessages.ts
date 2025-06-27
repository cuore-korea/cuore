import { useState } from 'react';
import { supabase, ContactMessage } from '../lib/supabase';

export interface ContactFormData {
  name: string;
  phone?: string;
  email: string;
  service_interest?: string;
  message: string;
}

export const useContactMessages = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createContactMessage = async (data: ContactFormData) => {
    try {
      setLoading(true);
      setError(null);

      const { error } = await supabase
        .from('contact_messages')
        .insert([data]);

      if (error) throw error;
      
      return { success: true };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    createContactMessage,
    loading,
    error
  };
};
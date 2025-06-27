import { useState } from 'react';
import { supabase, Consultation } from '../lib/supabase';

export interface ConsultationFormData {
  name: string;
  phone: string;
  email: string;
  service_type: string;
  preferred_date: string;
  preferred_time: string;
  message?: string;
}

export const useConsultations = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createConsultation = async (data: ConsultationFormData) => {
    try {
      setLoading(true);
      setError(null);

      const { error } = await supabase
        .from('consultations')
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
    createConsultation,
    loading,
    error
  };
};
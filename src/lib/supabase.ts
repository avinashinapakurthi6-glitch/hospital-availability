import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface Hospital {
  id: string;
  name: string;
  city_id: string;
  city_name: string;
  address: string;
  area?: string;
  pincode?: string;
  landmark?: string;
  phone?: string;
  type: 'government' | 'private';
  specialties: string[];
  total_beds: number;
  available_beds: number;
  emergency_services: boolean;
  rating: number;
  arogya_sri_empanelled: boolean;
  latitude?: number;
  longitude?: number;
}

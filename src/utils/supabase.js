import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with environment variables
const supabaseUrl = import.meta.env.VITE_VISITOR_COUNT_SUPABASE_URL;
// For client-side use, we'll try to use anon key first, fallback to service key for server-side
const supabaseKey = import.meta.env.VITE_VISITOR_COUNT_SUPABASE_ANON_KEY || 
                   import.meta.env.VISITOR_COUNT_SUPABASE_SERVICE_KEY;

if (!supabaseUrl) {
  console.error('Missing VITE_VISITOR_COUNT_SUPABASE_URL environment variable');
}

if (!supabaseKey) {
  console.error('Missing Supabase key environment variable');
}

export const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export default supabase;

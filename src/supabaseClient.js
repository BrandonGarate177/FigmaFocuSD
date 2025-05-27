import { createClient } from '@supabase/supabase-js';

// For client-side, use environment variables from Create React App
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Debug log
console.log('Supabase URL:', supabaseUrl ? 'Found' : 'Missing');
console.log('Supabase Key:', supabaseKey ? 'Found' : 'Missing');

// Check if environment variables are properly loaded
if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase environment variables are missing. Check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
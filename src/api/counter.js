import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client using the secure environment variables
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(request, response) {
  const { searchParams } = new URL(request.url, `https://${request.headers.host}`);
  const action = searchParams.get('action');
  const counterSlug = 'visitors';

  try {
    let count;
    if (action === 'increment') {
      // New visitor: call the database function to increment the count
      const { data, error } = await supabase.rpc('increment_counter', { slug_text: counterSlug });
      if (error) throw error;
      count = data;
    } else {
      // Returning visitor: just get the current count
      const { data, error } = await supabase
        .from('counters')
        .select('count')
        .eq('slug', counterSlug)
        .single();

      if (error) throw error;
      count = data ? data.count : 0;
    }

    return response.status(200).json({ count });

  } catch (error) {
    console.error('Supabase error:', error.message);
    return response.status(500).json({ error: 'Could not process counter.' });
  }
}
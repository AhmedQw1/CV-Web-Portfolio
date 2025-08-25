import { createClient } from '@supabase/supabase-js';

// Connects to the VISITOR COUNT Supabase project
const supabase = createClient(
  process.env.VITE_VISITOR_COUNT_SUPABASE_URL,
  process.env.VISITOR_COUNT_SUPABASE_SERVICE_KEY
);

export default async function handler(request, response) {
  const { searchParams } = new URL(request.url, `https://${request.headers.host}`);
  const action = searchParams.get('action');
  const counterSlug = 'visitors';

  try {
    let count;
    if (action === 'increment') {
      const { data, error } = await supabase.rpc('increment_counter', { slug_text: counterSlug });
      if (error) throw error;
      count = data;
    } else {
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
    return response.status(500).json({ error: 'Could not process counter.' });
  }
}
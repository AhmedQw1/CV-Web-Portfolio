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

  // Get client IP for potential future rate limiting
  const clientIP = request.headers['x-forwarded-for'] || 
                   request.headers['x-real-ip'] || 
                   request.connection?.remoteAddress || 
                   'unknown';

  try {
    let count;
    if (action === 'increment') {
      // Optional: Add IP-based rate limiting here in the future
      console.log(`Visitor count increment from IP: ${clientIP}`);
      
      const { data, error } = await supabase.rpc('increment_counter', { 
        slug_text: counterSlug 
      });
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
    
    // Add CORS headers for better browser compatibility
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    return response.status(200).json({ count });
  } catch (error) {
    console.error('Counter API error:', error);
    return response.status(500).json({ 
      error: error.message || 'Could not process counter.',
      timestamp: new Date().toISOString()
    });
  }
}
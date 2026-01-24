import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; 

const supabase = createClient(supabaseUrl, supabaseKey);

async function reset() {
  console.log('--- Resetting Database ---');
  
  const { error: delError } = await supabase.from('property_reports').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  if (delError) console.error('Delete error:', delError);

  const { error: insError } = await supabase.from('property_reports').insert([
    { property: 'Metrotown Centre', unit: 'A102', type: 'Plumbing', severity: 'High', status: 'Open' },
    { property: 'Crystal Mall', unit: 'B205', type: 'Electrical', severity: 'Medium', status: 'In Progress' }
  ]);
  
  if (insError) console.error('Insert error:', insError);
  else console.log('Successfully reset!');
}

reset();
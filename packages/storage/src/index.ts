import { supabaseClient } from '@fintrail/supabase-client';

const files = await supabaseClient.storage.from(process.env.SUPABASE_BUCKET_NAME as string).list();
console.log(files);

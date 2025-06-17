import { supabaseClient } from '@fintrail/supabase-client';
import { z } from 'zod';

const envSchema = z.object({
  SUPABASE_BUCKET_NAME: z.string().min(1),
});

const parsedEnv = envSchema.parse(process.env);

const files = await supabaseClient.storage
  .from(parsedEnv.SUPABASE_BUCKET_NAME)
  .list();
console.log(files);

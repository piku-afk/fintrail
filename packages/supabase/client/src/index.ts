import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

const envSchema = z.object({
  SUPABASE_URL: z.string().url(),
  SUPABASE_ANON_KEY: z.string().min(1),
});

const parsedEnv = envSchema.parse(process.env);

export const supabaseClient = createClient(
  parsedEnv.SUPABASE_URL,
  parsedEnv.SUPABASE_ANON_KEY,
);

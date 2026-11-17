import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://ephjsfvvcwmnmlyrhpoi.supabase.co'
const supabaseKey = 'Sb_publishable_JwCnBuo9O-pjfzqtac3x1g_e_spzx88'

export const supabase = createClient(supabaseUrl, supabaseKey)

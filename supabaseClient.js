import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://hfogujlzvixixtdrgf.supabase.co'
const supabaseKey = 'Sb_publishable_sx05pmCutQ_iDMRmo7pJUA_j1Ejw53i'

export const supabase = createClient(supabaseUrl, supabaseKey)

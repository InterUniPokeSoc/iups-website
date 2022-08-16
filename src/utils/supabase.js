import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://jytgbqxbelkvpgsdtlrw.supabase.co', `${process.env.GATSBY_PUBLIC_SUPABASE_ANON_KEY}`)

export { supabase }
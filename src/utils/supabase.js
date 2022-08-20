import { createClient } from '@supabase/supabase-js'
import { SupabaseStorageClient } from '@supabase/storage-js'

const supabase = createClient('https://jytgbqxbelkvpgsdtlrw.supabase.co', `${process.env.GATSBY_PUBLIC_SUPABASE_ANON_KEY}`)

const STORAGE_URL = 'https://jytgbqxbelkvpgsdtlrw.supabase.co/storage/v1'
const SERVICE_KEY = `${process.env.GATSBY_SUPABASE_SERVICE_ROLE}` //! service key, not anon key

const storageClient = new SupabaseStorageClient(STORAGE_URL, {
  apikey: SERVICE_KEY,
  Authorization: `Bearer ${SERVICE_KEY}`,
})

export { supabase, storageClient }
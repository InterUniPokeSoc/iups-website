import { supabase } from '../utils/supabase'

const noSocietiesError = new Error("no societies were found")

async function getSocieties() {
  const { data: societies, error: error } = await supabase
    .from('societies')
    .select('*')

  if (societies == null || societies.length < 1) {
    throw noSocietiesError
  }

  return societies
}

export { getSocieties };
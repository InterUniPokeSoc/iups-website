import { supabase } from '../utils/supabase'

const noSocietiesError = new Error("no societies were found")

async function getSocieties() {
  const { data: societies, error: error } = await supabase
    .from('societies')
    .select('*')
    .eq('display', true)
    .order('name', { ascending: true })

  if (societies == null || societies.length < 1) {
    throw noSocietiesError
  }

  return societies
}

async function getNumberOfSocieties() {
  const { data: societies, error: error } = await supabase
    .from('societies')
    .select('id')
    .eq('display', true)

  if (societies == null && societies.length < 1) {
    throw noSocietiesError
  }

  return societies.length
}

export { getSocieties, getNumberOfSocieties };
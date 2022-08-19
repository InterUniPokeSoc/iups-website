import { supabase } from '../utils/supabase'

const noSocietiesError = new Error("no societies were found")

async function getSocieties() {
  const { data: societies, error: error } = await supabase
    .from('societies')
    .select('*')
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

  if (societies == null && societies.length < 1) {
    return null
  }

  return societies.length
}

export { getSocieties, getNumberOfSocieties };
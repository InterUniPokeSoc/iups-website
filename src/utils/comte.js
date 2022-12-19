import { supabase, storageClient } from './supabase'

const noComteError = new Error("no comté were found")

async function getAllComte() {
  const { data: comte, error: error } = await supabase
    .from('comteMembers')
    .select('*')
    .order('order', { ascending: true })

  if (comte == null || comte.length < 1) {
    throw noComteError
  }

  return comte
}

export { getAllComte };
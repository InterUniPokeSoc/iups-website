import { supabase } from '../utils/supabase'

/**
 * Get all Hints for the latest Scavenger Hunt.
 * @returns Object of Hints from the Hints table.
 */
async function getHints() {

  const noHuntError = new Error("no hunt available")
  const noHintsError = new Error("no hints were found")

  // Get ID for the newest Hunt available
  const { data: newestHuntID, error: errorInfoRequest1 } = await supabase
    .from('hunts')
    .select('id', { count: 'exact' })

  if (newestHuntID == null || newestHuntID[0] == null) {
    throw noHuntError
  }

  // Ensure the latest Hunt is available
  const { data: checkAvailability, error: errorInfoRequest2 } = await supabase
    .from('hunts')
    .select('*')
    .eq('is_available', true)

  if (checkAvailability.length < 1) {
    throw noHuntError
  }

  const huntID = newestHuntID[0].id // Single item returned as array

  // Get all hint data from the Hint table for latest Hunt
  const { data: hintsData, error: errorInfoRequest3 } = await supabase
    .from('hints')
    .select('*')
    .eq('hunt_id', huntID)

  if (hintsData.length < 1) {
    throw noHintsError
  }

  return hintsData
}

async function getWinners() {
}

export { getHints, getWinners };
import { supabase } from '../utils/supabase'

const noHuntError = new Error("no hunt available")
const noHintsError = new Error("no hints were found")
const winnerError = new Error("no winners were found")

/**
 * Get latest Hunt ID.
 * @returns ID of the latest available Scavenger Hunt.
 */
async function getHuntID() {

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

  return newestHuntID
}

/**
 * Get Hint Data
 * @returns All Hint data from Database for an ID
 */
 async function getHintDataFor(id) {

  const { data: hintsData, error: error } = await supabase
    .from('hints')
    .select('*')
    .eq('hunt_id', id)

  return hintsData
}

/**
 * Get Winner Data
 * @returns All Winner data from Database for an ID
 */
 async function doesHuntHaveWinnerWith(id) {

  const { data: winnersData, error: error } = await supabase
    .from('winners')
    .select('*')
    .eq('hunt_id', id)

  return winnersData == null || winnersData.length > 0
}

/**
 * Get all Hints for the latest Scavenger Hunt.
 * @returns Object of Hints from the Hints table.
 */
async function getHints() {

  return getHuntID()
  .then((newestHuntID) => {
    const id = newestHuntID[0].id
    return getHintDataFor(id)
  })
  .then((hintsData) => {
    if (hintsData != null && hintsData.length < 0) {
      throw noHintsError
    }

    return hintsData
  })
  .catch((e) => {
    console.log(e)
    throw noHuntError
  })
}

/**
 * Get all Winners for the latest Scavenger Hunt.
 * @returns Object of Winners from the Winners table.
 */
async function getWinners() {
  return getHuntID()
  .then((newestHuntID) => {
    const id = newestHuntID[0].id
    return doesHuntHaveWinnerWith(id)
  })
  .then((doesHaveWinner) => {
    return doesHaveWinner
  })
  .catch((e) => {
    console.log(e)
    throw noHuntError
  })
}

export { getHints, getWinners };
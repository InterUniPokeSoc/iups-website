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
  const { data: newestHunt, error: error } = await supabase
    .from('hunts')
    .select('*')
    .eq('is_available', true)

  if (newestHunt == null || newestHunt.length < 1 || newestHunt[0].id == null) {
    throw noHuntError
  }

  return newestHunt[0].id
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
 * Input new winner into the Database
 */
 async function addWinnerToDatabase(huntID, discordID) {

  const { data, error } = await supabase
    .from('winners')
    .insert([{ hunt_id: huntID, discord_id: discordID }])
}

/**
 * Get all Hints for the latest Scavenger Hunt.
 * @returns Object of Hints from the Hints table.
 */
async function getHints() {

  return getHuntID()
  .then((newestHuntID) => {
    return getHintDataFor(newestHuntID)
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
    return doesHuntHaveWinnerWith(newestHuntID)
  })
  .then((doesHaveWinner) => {
    return doesHaveWinner
  })
  .catch((e) => {
    console.log(e)
    throw noHuntError
  })
}

/**
 * Input new winner into the Winners table.
 */
 async function inputNewWinner(discordID) {
  return getHuntID()
  .then((newestHuntID) => {
    addWinnerToDatabase(newestHuntID, discordID)
  })
  .catch((e) => {
    console.log(e)
    throw winnerError
  })
}

export { getHints, getWinners, inputNewWinner };
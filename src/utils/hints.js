import { supabase } from '../utils/supabase'

async function getHints() {
  const date = new Date()
  const currentDate = date.toISOString().slice(0, 10)
  const sixDaysAgo = new Date(date.getDate() - 6).toISOString().slice(0, 10)

  console.log(`START DATE BETWEEN: [${sixDaysAgo},${currentDate}]`)

  const { data: huntsIDs, error: errorInfoRequest1 } = await supabase
    .from('hunts')
    .select('id')
    // .lt('start_date', currentDate)
    // .gt('start_date', sixDaysAgo)
    
    // TODO: REPLACE DATE CHECK WITH MAX ID INSTEAD BUT KEEP CURRENT DATE

  console.log(huntsIDs)

  const huntID = huntsIDs[0].id

  const { data: hintsData, error: errorInfoRequest2 } = await supabase
    .from('hints')
    .select('order_number, hint')
    .eq('hunt_id', huntID)

  const hints = hintsData
  
  console.log("HINTS")
  console.log(hints)

  return hints
}

async function getWinners() {
  // const hintsCol = collection(db, 'scavenger-hunt');
  // const hintSnapshot = await getDocs(hintsCol);
  // var winnersList = hintSnapshot.docs.map(function(doc) {
  //   return doc.data();
  // });
  // return winnersList[1];
}

export { getHints, getWinners };
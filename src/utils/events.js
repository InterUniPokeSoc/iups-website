import { supabase, storageClient } from '../utils/supabase'

const noEventsError = new Error("no events were found")

async function getAllEvents() {
  const { data: events, error: error } = await supabase
    .from('events')
    .select('*')
    .eq('display', true)
    .order('start_date', { ascending: true })

  console.log(events)

  if (events == null || events.length < 1) {
    throw noEventsError
  }

  return events
}

async function getRecurringEvents() {
    const { data: events, error: error } = await supabase
      .from('events')
      .select('*')
      .eq('recurring', true)
      .eq('display', true)
      .order('name', { ascending: true })
  
    if (events == null || events.length < 1) {
      throw noEventsError
    }
  
    return events
}

export { getAllEvents, getRecurringEvents };
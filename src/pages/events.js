import React, { useState, useEffect } from 'react'
import {Link} from 'gatsby';
import {Helmet} from "react-helmet";

import { getAllEvents, getRecurringEvents } from "../utils/events"

import Layout from '../components/layout';
import Event from '../components/event';
import Loader from '../components/loader'

import '../styles/general.scss';
import * as styles from '../styles/events.module.scss'

import CloseIcon from '../images/icons/times-solid.svg'


function EventsPage() {

  const [events, setEvents] = useState([])

  const [selectedRecurringEvent, setSelectedRecurringEvent] = useState(null)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  /*
    On page load make an API call to Supabase to get the list of societies
  */
  useEffect(() => {
    setIsLoading(true)

    var tempEventsList = []

    getAllEvents().then((dbList) => {
      Object.values(dbList).map((event) => {
        tempEventsList.push(event);
      });

      setEvents(tempEventsList)

    }).catch((e) => {
      setErrorMessage("An error occurred while fetching the events data. Please try again later.")
    }).finally(() => {
      setIsLoading(false)
    })
  }, [])

  return (
    <>
    <Helmet>
      <title>Inter-Uni PokéSoc - Events</title>
    </Helmet>

    <Layout>

      { isLoading &&
        <Loader center={ true } />
      }

      { !isLoading && errorMessage == null &&
        <main className={ [styles.mainPage, "page-content"].join(' ') }>
          <section className={ styles.eventsSection }>
            <h1 className={ [styles.mainTitle, 'huge-title', 'shiny-title'].join(' ') }>Events</h1>


            {/* Recurring Events Section */}
            <h2 className={ [styles.eventsContainerSubtitle, 'shiny-title'].join(' ') }>Recurring</h2>
            <section className={ [styles.eventsContainer, styles.recurringEventsContainer].join(' ') }>

              { events.map((event, index) => {
                { return event.recurring &&
                  <a className={ selectedRecurringEvent == event ? styles.selectedEvent : '' }
                  onClick={ () => { setSelectedRecurringEvent(selectedRecurringEvent != event ? event : null) } }>
                    <Event event={ event } />
                  </a>
                }
              })}
            </section>

            <section className={ selectedRecurringEvent == null ? styles.hidden : styles.eventInfoSection }>
              { selectedRecurringEvent != null &&
                <a className={ styles.closeButtonWrapper } onClick={ () => { setSelectedRecurringEvent(null) } }>
                  <img className={ styles.closeButton } src={ CloseIcon } />
                </a>
              }

              <h2 className={ styles.eventTitle }>{ selectedRecurringEvent != null ? selectedRecurringEvent.name : "" }</h2>
              
              { selectedRecurringEvent != null && selectedRecurringEvent.description != null &&
                selectedRecurringEvent.description.map((paragraph, index) => {
                  return <p className={ styles.eventDescription }>{ paragraph }</p>
                })
              }

              { selectedRecurringEvent != null && selectedRecurringEvent.how_to_join != null &&
                <h3 className={ styles.eventSubtitle }>How to Join</h3>
              }

              { selectedRecurringEvent != null && selectedRecurringEvent.how_to_join != null &&
                selectedRecurringEvent.how_to_join.map((howToJoinParagraph, index) => {
                return <p className={ styles.eventDescription }>{ howToJoinParagraph }</p>
              })}
            </section>


            {/* Upcoming Events Section */}
            <h2 className={ [styles.eventsContainerSubtitle, 'shiny-title'].join(' ') }>Upcoming</h2>
            <section className={ [styles.eventsContainer, styles.generalEventsContainer].join(' ') }>
              { events.map((event, index) => {
                { return !event.recurring &&
                  <a className={ selectedEvent == event ? styles.selectedEvent : '' }
                  onClick={ () => { setSelectedEvent(selectedEvent != event ? event : null) } }>
                    <Event event={ event } />
                  </a>
                }
              })}
            </section>

            <section className={ selectedEvent == null ? styles.hidden : styles.eventInfoSection }>
              { selectedEvent != null &&
                <a className={ styles.closeButtonWrapper } onClick={ () => { setSelectedEvent(null) } }>
                  <img className={ styles.closeButton } src={ CloseIcon } />
                </a>
              }

              <h2 className={ styles.eventTitle }>{ selectedEvent != null ? selectedEvent.name : "" }</h2>

              { selectedEvent != null && selectedEvent.description != null &&
                selectedEvent.description.map((paragraph, index) => {
                  return <p className={ styles.eventDescription }>{ paragraph }</p>
                })
              }

              { selectedEvent != null && selectedEvent.how_to_join != null &&
                <h3 className={ styles.eventSubtitle }>How to Join</h3>
              }

              { selectedEvent != null && selectedEvent.how_to_join != null &&
                selectedEvent.how_to_join.map((howToJoinParagraph, index) => {
                return <p className={ styles.eventDescription }>{ howToJoinParagraph }</p>
              })}
            </section>
          </section>


          {/* Info Section */}
          <section className={ styles.info }>
            <h2 className={ [styles.subtitle, 'shiny-title'].join(' ') }>How to Get Involved</h2>
            <p className={ styles.infoParagraph }>You can find how to join specific events by clicking/tapping
            on the events listed above, there also may be further information in the Discord server.
            </p>
            <p className={ styles.infoParagraph }>Individual society events listed here are available for 
            I-UPS members to attend, you may need to let the particular society know that you are attending.
            </p>
            <p className={ styles.infoParagraph }>You will usually need to be a member of the I-UPS in order
            to attend any events, on the rare occasion that events are open to the public this will be explicitly 
            stated.
            </p>
          </section>

        </main>
      }

    </Layout>
    </>
  );
}

export default EventsPage;

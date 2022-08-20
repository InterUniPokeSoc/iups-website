import React, { useState, useEffect } from 'react'
import {Link} from 'gatsby';
import {Helmet} from "react-helmet";

import { getAllEvents, getRecurringEvents } from "../utils/events"

import Layout from '../components/layout';
import Event from '../components/event';
import Loader from '../components/loader'

import '../styles/general.scss';
import * as styles from '../styles/events.module.scss'


function EventsPage() {

  const [events, setEvents] = useState([])

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
        <main className="page-content">
          <section>
            <h1 className={ [styles.mainTitle, 'huge-title', 'shiny-title'].join(' ') }>Events</h1>

            <h2 className={ [styles.subtitle, 'shiny-title'].join(' ') }>Recurring</h2>
            <section className={ [styles.eventsContainer, styles.recurringEventsContainer].join(' ') }>

              { events.map((event, index) => {
                { return event.recurring == true &&
                  <Event event={ event } />
                }
              })}
            </section>

            <h2 className={ [styles.subtitle, 'shiny-title'].join(' ') }>Upcoming</h2>
            <section className={ [styles.eventsContainer, styles.generalEventsContainer].join(' ') }>
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
            </section>
          </section>

        </main>
      }

    </Layout>
    </>
  );
}

export default EventsPage;

import React, { useState, useEffect } from 'react'
import {Link} from 'gatsby';
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import Event from '../components/event';
import '../styles/general.scss';
import * as styles from '../styles/events.module.scss'


function EventsPage() {



  return (
    <>
    <Helmet>
      <title>Inter-Uni PokéSoc - Events</title>
    </Helmet>

    <Layout>

      <main className="page-content">
        <section>
          <h1 className={[styles.mainTitle, 'huge-title', 'shiny-title'].join(' ') }>Events</h1>

          <h2 className={[styles.subtitle, 'shiny-title'].join(' ') }>Recurring</h2>
          <section className={ [styles.eventsContainer, styles.recurringEventsContainer].join(' ') }>
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
          </section>

          <h2 className={[styles.subtitle, 'shiny-title'].join(' ') }>Upcoming</h2>
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

    </Layout>
    </>
  );
}

export default EventsPage;

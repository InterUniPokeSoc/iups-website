import React from 'react';
import {Link} from 'gatsby';
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import TitleBanner from '../components/titleBanner';
import '../styles/general.scss';
import '../styles/howtojoin.scss';


function EventsPage() {

  return (
    <>
    <Helmet>
      <title>Inter-Uni PokéSoc - Events</title>
    </Helmet>

    <Layout>

      <main className="page-content">
        <section className="page-section">
          <h1 className="huge-title">Events</h1>
        </section>

      </main>

    </Layout>
    </>
  );
}

export default EventsPage;

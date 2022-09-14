import React from 'react';
import {Link} from 'gatsby';
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import TitleBanner from '../components/titleBanner';
import '../styles/general.scss';


function ContactPage() {

  return (
    <>
    <Helmet>
      <title>Inter-Uni PokéSoc - Contact</title>
    </Helmet>

    <Layout>

      <main className="page-content">
        <section className="page-section">
          <h1 className="huge-title shiny-title">Contact</h1>
        </section>

      </main>

    </Layout>
    </>
  );
}

export default ContactPage;
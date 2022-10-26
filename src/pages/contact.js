import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/layout';
import TitleBanner from '../components/titleBanner';
import '../styles/general.scss';
import * as styles from '../styles/contact.module.scss' 


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

          <div>
            <FontAwesomeIcon icon={ faEnvelope } />
            <a>iups-uk@gmail.com</a>
          </div>
        </section>

      </main>

    </Layout>
    </>
  );
}

export default ContactPage;
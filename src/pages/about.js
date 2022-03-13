import React from 'react';
import {Link, useState, useRef, useEffect} from 'gatsby';
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import TitleBanner from '../components/titleBanner';
import '../styles/general.scss';
import '../styles/about.scss';

function AboutPage() {

  return (
    <>
    <Helmet>
      <title>Inter-Uni PokéSoc - About</title>
    </Helmet>

    <Layout>
      <main className="page-content">
        <section className="page-section">
          <h1 className="huge-title">About Us</h1>
          <img src="images/harold-wide.jpg" id="about-image"/>
          <h1 className="htj-title">What is the I-UPS?</h1>
          <p>The Inter-University Pokémon Society is a group of over 20 university countries around the UK, from Durham to Portsmouth.
            The I-UPS is designed to give university societies a central space to communicate and organise with each other, we also provide
            assistance to people looking to set up new university Pokémon societies.
          </p>

          <h2 className="htj-title">Further Information</h2>
          <ul>
            <li>Pokémon and All Respective Names are Trademark & &copy; of Nintendo 1996-2022.</li>
          </ul>
        </section>

      </main>

    </Layout>
    </>
  );
}

export default AboutPage;
import React from 'react';
import {Link, useState, useRef, useEffect} from 'gatsby';
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import '../styles/general.scss';
import * as aboutStyles from '../styles/about.module.scss';
import CircleImageTitle from '../components/circleImageTitle';

function AboutPage() {

  return (
    <>
    <Helmet>
      <title>Inter-Uni PokéSoc - About</title>
    </Helmet>

    <Layout>
      <main className="page-content">
        <section>
          <CircleImageTitle src="images/harold-wide.jpg">About Us</CircleImageTitle>

          <h1 className="shiny-title center-margins medium-title">What is the I-UPS?</h1>
          <p className={aboutStyles.paragraph}>The Inter-University Pokémon Society is a group of over 20 university countries around the UK, from Durham to Portsmouth.
            The I-UPS is designed to give university societies a central space to communicate and organise with each other, we also provide
            assistance to people looking to set up new university Pokémon societies.
          </p>

          <section className={aboutStyles.iconsContainer}>
            <div className={aboutStyles.icon}>
              <div className={aboutStyles.iconImageContainer}>
                <div className={aboutStyles.iconImageBackground}>
                  <img className={aboutStyles.iconImage} />
                </div>
              </div>
              <a className={aboutStyles.iconText}>Community of 20+ Societies</a>
            </div>

            <div className={aboutStyles.icon}>
              <div className={aboutStyles.iconImageContainer}>
                <div className={aboutStyles.iconImageBackground}>
                  <img className={aboutStyles.iconImage} />
                </div>
              </div>
              <a className={aboutStyles.iconText}>Multi-Uni Events</a>
            </div>

            <div className={aboutStyles.icon}>
              <div className={aboutStyles.iconImageContainer}>
                <div className={aboutStyles.iconImageBackground}>
                  <img className={aboutStyles.iconImage} />
                </div>
              </div>
              <a className={aboutStyles.iconText}>Discord Server</a>
            </div>
          </section>

          <div className={aboutStyles.wideOverlayImageContainer}>
            <a className={aboutStyles.hoverBox}>A Pokémon Community</a>
            <img className={aboutStyles.wideOverlayImage} src="images/londongang.png"/>
          </div>

          <h2 className="shiny-title center-margins medium-title">Further Information</h2>
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
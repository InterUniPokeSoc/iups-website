import React from 'react'
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBrands, faInstagram } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/layout'
import '../styles/general.scss'

import InstaIcon from '../images/social-media-icons/instagram/instagram-logo-black.png'
import DiscordIcon from '../images/social-media-icons/discord/icon_clyde_black_RGB.png'

import * as styles from '../styles/contact.module.scss'
import '../styles/general.scss'


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

          <a className={styles.contactContainer} href="mailto:iups-uk@gmail.com">
            <FontAwesomeIcon icon={ faEnvelope } className={styles.contactIcon} />
            <p className={styles.contactText}>iups-uk@gmail.com</p>
          </a>

          <a className={styles.contactContainer} href="https://www.instagram.com/inter.uni.pokemon/">
            <img src={InstaIcon} className={ [styles.contactImageIcon].join(' ') } />
            <p className={styles.contactText}>@Inter.Uni.Pokemon</p>
          </a>

          <a className={styles.contactContainer} href="https://discord.gg/52YutzNUGg">
            <img src={DiscordIcon} className={ [styles.contactImageIcon].join(' ') } />
            <p className={styles.contactText}>Join our Discord!</p>
          </a>

          <p className={styles.description}>
            Any queries regarding universities wanting to join I-UPS should be directed to the University Liason - Loren, 
            who will be more than happy to help. Please ensure you have read the <Link to="/howtojoin">How to Join</Link> page first.
          </p>

          <p className={styles.description}>
            We do not respond to advertisement/sponsorship requests, or any messages that breach the rules of I-UPS.
          </p>
        </section>

      </main>

    </Layout>
    </>
  );
}

export default ContactPage;
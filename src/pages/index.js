import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Layout from '../components/layout';

import { getNumberOfSocieties } from "../utils/societies"

// Component Imports
import Loader from '../components/loader';
import RoundButton from '../components/roundButton';
import VideoBanner from '../components/videoBanner';

// Styles Imports
import '../styles/general.scss';
import * as styles from '../styles/index.module.scss';

// Image Imports
import Background from '../images/backgrounds/sheffieldbg.jpg'
import Doggo from '../images/branding/doggo.png'
import InstaIcon from '../images/social-media-icons/instagram/instagram-logo-black.png'
import DiscordIcon from '../images/social-media-icons/discord/full_logo_blurple_RGB.svg'

// Video Imports
import LogoVideo from '../videos/iups-society-logos.mp4'


function IndexPage() {

  const [noOfSocieties, setNoOfSocieties] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  /*
    On page load make an API call to Supabase to get the number of societies
  */
  useEffect(() => {
    setIsLoading(true)

    getNumberOfSocieties().then((number) => {
      setNoOfSocieties(number)
    }).catch(() => {
      setNoOfSocieties(null)
    }).finally(() => {
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      <Helmet>
        <meta name="google-site-verification" content="u62RpLCYYWFyMUuRshI4C2ur543jvWoO2hUdbRzVkTY" />
        <title>Inter-Uni PokéSoc</title>
      </Helmet>

      <Layout>
        { isLoading &&
          <Loader center={ true } />
        }

        { !isLoading &&
          <main className={ styles.mainContent }>
            <img className={ styles.mainBackground } src={ Background } alt="Night time image of Sheffield used as background." />
            <div className={ styles.mainArea }>
              <div className={ styles.info }>
                <h1 className={ [styles.mainAreaTitle, "medium-title", "shiny-title"].join(' ') }>A Nationwide Group of Pokémon Societies</h1>
                <p>
                The Inter-University Pokémon Society is a conglomerate of { noOfSocieties ?? "over 30" } University Societies joined together to collaborate on all things Pokémon.
                </p>
                <p>
                Our primary goal is to unite and help form Pokémon societies across the UK and Ireland. If you're looking to set a PokéSoc up, we can help you out!
                </p>
              </div>
              <div id={ styles.homeLogoWrapper }>
                <img id={ styles.homeLogo } src={ Doggo } link="" />
              </div>
            </div>

            <VideoBanner videoSource={ LogoVideo } type="mp4" alt="Images of society logos moving as a collage."/>
            
            <section className={ styles.indexDoubleSection }>
              <div id={ styles.discordSection }>
                <img id={ styles.discordLogo } src={ DiscordIcon } alt="Discord logo."/>
                <p id={ styles.discordDesc }>If you’re a member of a Pokésoc, jump into our home server!</p>
                <RoundButton text="Join Our Discord" link="https://discord.gg/52YutzNUGg" dark={true} className={ styles.discordButton }/>
              </div>
              
              <div id={ styles.instaSection }>
                <img id={ styles.instaLogo } src={ InstaIcon } alt="Instagram logo."/>
                <p id={ styles.instaDesc }>See what’s going on in the world of Pokésocs!</p>
                <RoundButton text="View our Instagram" link="https://www.instagram.com/inter.uni.pokemon/" dark={true} className={ styles.instaButton }/>
              </div>
            </section>

          </main>
        }
      </Layout>
    </>
  );
}

export default IndexPage;

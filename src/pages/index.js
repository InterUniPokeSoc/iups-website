import React from 'react';
import { Helmet } from "react-helmet";
import Layout from '../components/layout';

// Component Imports
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
  return (
    <>
    <Helmet>
      <title>Inter-Uni PokéSoc</title>
    </Helmet>

    <Layout>
    <Helmet>
      <title>Inter-Uni PokéSoc</title>
    </Helmet>
      <main className={ styles.mainContent }>
        <img className={ styles.mainBackground } src={ Background } alt="Night time image of Sheffield used as background." />
        <div className={ styles.mainArea }>
          <div className={ styles.info }>
            <h1 className={ [styles.mainAreaTitle, "medium-title", "shiny-title"].join(' ') }>A Nationwide Group of Pokémon Societies</h1>
            <p>
            The Inter-University Pokémon Society is a union of more than 30 societies joined together to collaborate on all things Pokémon.
            </p>
            <p>
            Our primary goal to unite and help form Pokémon societies across the UK and Ireland, if you're looking to set a PokéSoc up, we can help you out!
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
            <p id={ styles.discordDesc }>Feel free to join if you are a member of a Pokémon Society.</p>
            <RoundButton text="Join Our Discord" link="https://discord.gg/52YutzNUGg" dark={true} className={ styles.discordButton }/>
          </div>
          
          <div id={ styles.instaSection }>
            <img id={ styles.instaLogo } src={ InstaIcon } alt="Instagram logo."/>
            <p id={ styles.instaDesc }>Our many photos of Pokémon related things.</p>
            <RoundButton text="View our Instagram" link="https://www.instagram.com/inter.uni.pokemon/" dark={true} className={ styles.instaButton }/>
          </div>
        </section>

      </main>

    </Layout>
    </>
  );
}

export default IndexPage;

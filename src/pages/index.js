import React from 'react';
import {Link} from 'gatsby';
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import roundButton from '../components/roundButton';
import '../styles/general.scss';
import '../styles/index.scss';
import RoundButton from '../components/roundButton';
import TitleBanner from '../components/titleBanner';
import VideoBanner from '../components/videoBanner';

// Image Imports
import Background from '../images/backgrounds/sheffieldbg.jpeg'
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
      <main className="main-content">
        <img className="main-bg" src={ Background } alt="Night time image of Sheffield used as background." />
        <div className="main-area-flex">
          <div className="info">
            <h1 className="medium-title shiny-title">A Nationwide Group of Pokémon Societies</h1>
            <p>
            The Inter-University Pokémon Society is a union of more than 30 societies joined together to collaborate on all things Pokémon.
            </p>
            <p>
            Our primary goal to unite and help form Pokémon societies across the country, if you're looking to set a PokéSoc up, we can help you out!
            </p>
          </div>
          <div id="home-logo-wrapper">
            <img id="home-logo" src={ Doggo } link="" />
          </div>
        </div>

        <VideoBanner videoSource={ LogoVideo } type="mp4" alt="Images of society logos moving as a collage."/>
        
        <section className="index-double-section">
          <div id="discord-section">
            <img id="discord-logo" src={ DiscordIcon } alt="Discord logo."/>
            <p id="discord-desc">Feel free to join if you are a member of a Pokémon Society.</p>
            <RoundButton text="Join Our Discord" link="https://discord.gg/52YutzNUGg" dark={true} className="discord-button"/>
          </div>
          
          <div id="insta-section">
            <img id="insta-logo" src={ InstaIcon } alt="Instagram logo."/>
            <p id="insta-desc">Our many photos of Pokémon related things.</p>
            <RoundButton text="View our Instagram" link="https://www.instagram.com/inter.uni.pokemon/" dark={true} className="insta-button"/>
          </div>
        </section>

      </main>

    </Layout>
    </>
  );
}

export default IndexPage;

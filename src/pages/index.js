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
        <img className="main-bg" src="/images/sheffieldbg.jpeg" />
        <div className="main-area-flex">
          <div className="info">
            <h1 className="index-title title">A Nationwide Group of Pokémon Societies</h1>
            <p>
            The Inter-University Pokémon Society is a union of more than 30 societies joined together to collaborate on all things Pokémon.
            </p>
            <p>
            Our primary goal to unite and help form Pokémon societies across the country, if you're looking to set a PokéSoc up, we can help you out!
            </p>
          </div>
          <div id="home-logo-wrapper">
            <img id="home-logo" src="/images/doggo.png" link="" />
          </div>
        </div>

        {/* <TitleBanner imageSource="/images/soclogoscollage.jpg" title="" /> */}
        <VideoBanner videoSource="/videos/animatedsoccollage.mov" type="mov" alt="Images of society logos moving as a collage."/>
        
        <section className="index-double-section">
          <div id="discord-section">
            <img id="discord-logo" src="./images/full_logo_blurple_RGB.svg" alt="Discord logo."/>
            <p id="discord-desc">Feel free to join if you are a member of a Pokémon Society.</p>
            <RoundButton text="Join Our Discord" link="https://discord.gg/52YutzNUGg" dark={true} className="discord-button"/>
          </div>
          
          <div id="insta-section">
            <img id="insta-logo" src="./images/instagram-logo-black.png" alt="Instagram logo."/>
            <p id="insta-desc">Our many photos of Pokémon related things.</p>
            <RoundButton text="View our Instagram" link="https://www.instagram.com/inter.uni.pokemon/" dark={true} className="insta-button"/>
          </div>
        </section>

        {/* <section className="index-section">
          <h1 className="huge-title">What is the I-UPS?</h1>
        </section> */}

      </main>

    </Layout>
    </>
  );
}

export default IndexPage;

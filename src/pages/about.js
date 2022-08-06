import React from 'react';
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import '../styles/general.scss';
import * as aboutStyles from '../styles/about.module.scss';
import CircleImageTitle from '../components/circleImageTitle';

// Image Imports
import TitleImg from '../images/pokemon/harold-wide.jpg'
import CommunityIcon from '../images/icons/group-icon.svg'
import EventsIcon from '../images/icons/schedule-calendar-icon.svg'
import DiscordIcon from '../images/social-media-icons/discord/icon_clyde_white_RGB.svg'
import LondonGangBg from '../images/backgrounds/londongang.png'

function AboutPage() {

  return (
    <>
    <Helmet>
      <title>Inter-Uni PokéSoc - About</title>
    </Helmet>

    <Layout>
      <main className="page-content">
        <section>
          <CircleImageTitle src={ TitleImg }>About Us</CircleImageTitle>

          <h1 className="shiny-title center-margins medium-title">What is the I-UPS?</h1>
          <p className={aboutStyles.paragraph}>The Inter-University Pokémon Society is a conglomerate of over 30 UK university societies, 
          joined together to collaborate on all things Pokémon. We look to support and help form Pokémon Societies across England, Scotland, 
          Wales, and N. Ireland. If you're wanting to set a PokéSoc up, give us a shout!
          </p>

          <section className={aboutStyles.iconsContainer}>
            <div className={aboutStyles.icon}>
              <div className={aboutStyles.iconImageContainer}>
                <img className={[aboutStyles.iconImage, aboutStyles.invertIcon].join(' ')} src={ CommunityIcon } />
              </div>
              <a className={aboutStyles.iconText}>Community of 20+ Societies</a>
            </div>

            <div className={aboutStyles.icon}>
              <div className={aboutStyles.iconImageContainer}>
                <img className={[aboutStyles.iconImage, aboutStyles.invertIcon].join(' ')} src={ EventsIcon } />
              </div>
              <a className={aboutStyles.iconText}>Multi-Uni Events</a>
            </div>

            <div className={aboutStyles.icon}>
              <div className={aboutStyles.iconImageContainer}>
                <img className={aboutStyles.iconImage} src={ DiscordIcon } />
              </div>
              <a className={aboutStyles.iconText}>Discord Server</a>
            </div>
          </section>

          <div className={aboutStyles.wideOverlayImageContainer}>
            <a className={aboutStyles.hoverBox}>A Pokémon Community</a>
            <img className={aboutStyles.wideOverlayImage} src={ LondonGangBg } />
          </div>

          <h1 className="shiny-title center-margins medium-title">The Comté</h1>
          <p className={aboutStyles.paragraph}>The Inter-University Pokémon Society is a conglomerate of over 30 UK university societies, 
          joined together to collaborate on all things Pokémon. We look to support and help form Pokémon Societies across England, Scotland, 
          Wales, and N. Ireland. If you're wanting to set a PokéSoc up, give us a shout!
          </p>

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
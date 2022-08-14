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
              <a className={aboutStyles.iconText}>Community of 30+ Societies</a>
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

          {/* <div className={aboutStyles.wideOverlayImageContainer}>
            <a className={aboutStyles.hoverBox}>A Pokémon Community</a>
            <img className={aboutStyles.wideOverlayImage} src={ LondonGangBg } />
          </div> */}

          <h1 className="shiny-title center-margins medium-title">The Comté</h1>
          <p className={aboutStyles.paragraph}>The Inter-University Pokémon Society is a conglomerate of over 30 UK university societies, 
          joined together to collaborate on all things Pokémon. We look to support and help form Pokémon Societies across England, Scotland, 
          Wales, and N. Ireland. If you're wanting to set a PokéSoc up, give us a shout!
          </p>

          <h1 className="shiny-title center-margins medium-title">History</h1>
          <h1 className="shiny-title center-margins small-title">PokéSoc Beginnings</h1>
          <p className={aboutStyles.paragraph}>The UK's oldest known Pokémon Society began in Hull in 2010, followed shortly by York and 
          Sheffield in 2012. These early societies were dedicated to growing their membership along with running socials and tournaments. Early 
          signs of alliances were formed with Sheffield running a 24-hour event involving Leeds, but this was a mere prelude compared to 
          what followed.
          </p>
          <h1 className="shiny-title center-margins small-title">Sussex's Grand Idea</h1>
          <p className={aboutStyles.paragraph}>Rob, a Sussex committee member started the chain of events by joining the York PokéSoc server, it 
          was from there that the I-UPS Discord server was first created. Durham was next to join which laid the foundations for the initial leadership
          Triad consisting of Hanny, Georgina and Dom.
          </p>
          <h1 className="shiny-title center-margins small-title">The Discord Server</h1>
          <p className={aboutStyles.paragraph}>As more and more societies were in correspondance, it was apparent that a server merely for committees was
          limiting the potential of I-UPS' outreach; so, the server opened to all I-UPS society members in 2021.
          </p>
          <h1 className="shiny-title center-margins small-title">Comté is Formed</h1>
          <p className={aboutStyles.paragraph}>The initial leadership of I-UPS consisted of the triad of Hanny, Dom and Georgina, with I-UPS already 
          having dozens of societies involved, it was clear that a governing body was needed to manage I-UPS. A group of members applied, were chosen 
          and quickly got to work at making I-UPS the amazing place it is now.
          </p>
          <h1 className="shiny-title center-margins small-title">The First Draft League</h1>
          <p className={aboutStyles.paragraph}>I-UPS now needed to run its first event, as Hanny had run draft leagues for Durham before this became the
          obvious choice. Many societies signed up, battled hard and eventually a winner was crowned. That winner was MewCL (UCL).
          </p>

          <h2 className="shiny-title center-margins medium-title">Further Information</h2>
          <p className={aboutStyles.paragraph}>Pokémon and All Respective Names and Designs are Trademark & &copy; of Nintendo 1996-2022.</p>
        </section>

      </main>

    </Layout>
    </>
  );
}

export default AboutPage;
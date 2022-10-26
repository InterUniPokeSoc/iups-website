import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import Layout from '../components/layout';

import { getNumberOfSocieties } from "../utils/societies"

// Components Imports
import Loader from '../components/loader';
import CircleImageTitle from '../components/circleImageTitle';
import Revealer from '../components/revealer';

// Styles Imports
// import '../styles/general.scss';
import * as aboutStyles from '../styles/about.module.scss';

// Image Imports
import TitleImg from '../images/pokemon/harold.jpg'
import CommunityIcon from '../images/icons/group-icon.svg'
import EventsIcon from '../images/icons/schedule-calendar-icon.svg'
import DiscordIcon from '../images/social-media-icons/discord/icon_clyde_white_RGB.svg'

function AboutPage() {

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
      <title>Inter-Uni PokéSoc - About</title>
    </Helmet>

    <Layout>
      { isLoading &&
          <Loader center={ true } />
      }

      { !isLoading &&
        <main className="page-content">
          <section>
            <CircleImageTitle src={ TitleImg }>About Us</CircleImageTitle>

            <h1 className="shiny-title center-margins medium-title">What is the I-UPS?</h1>
            <p className={aboutStyles.paragraph}>The Inter-University Pokémon Society is a conglomerate of { noOfSocieties ?? "over 30" } UK university societies, 
            joined together to collaborate on all things Pokémon. We look to support and help form Pokémon Societies across England, Scotland, 
            Wales, and N. Ireland. If you're wanting to set a PokéSoc up, give us a shout!
            </p>

            <section className={aboutStyles.iconsContainer}>
              <div className={aboutStyles.icon}>
                <div className={aboutStyles.iconImageContainer}>
                  { noOfSocieties != null &&
                    <p className={ aboutStyles.societiesCount } >{ noOfSocieties }</p>
                  }

                  { noOfSocieties == null &&
                    <img className={[aboutStyles.iconImage, aboutStyles.invertIcon].join(' ')} src={ CommunityIcon } />
                  }
                </div>
                <a className={aboutStyles.iconText}>Community of { noOfSocieties ?? "30+" } Societies</a>
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

            <h1 className="shiny-title center-margins medium-title">The Comté</h1>
            <p className={aboutStyles.paragraph}>The Inter-University Pokémon Society is a conglomerate of over 30 UK university societies, 
            joined together to collaborate on all things Pokémon. We look to support and help form Pokémon Societies across England, Scotland, 
            Wales, and N. Ireland. If you're wanting to set a PokéSoc up, give us a shout!
            </p>

            <Revealer title="History">
              <h1 className="shiny-title center-margins small-title">PokéSoc Beginnings</h1>
              <p className={aboutStyles.paragraph}>The UK's oldest known Pokémon Society began in Hull in 2010, followed shortly by York and Sheffield 
              in 2012. These early societies were dedicated to growing their membership along with running socials and tournaments. Early signs of 
              alliances were formed with Sheffield running a 24-hour event involving Leeds, and the historic Roses bout between York and Lancaster, 
              but this was a mere prelude compared to what followed.
              </p>
              <h1 className="shiny-title center-margins small-title">Sussex's Grand Idea</h1>
              <p className={aboutStyles.paragraph}>In 2021, IUPS all started with Sussex Pokésoc. We all know how hard Covid was, and university societies 
              were hit hard too. From the struggles it brought, Sussex gained a mission. They wanted to find other Pokésocs around the UK, all in an effort 
              to build an online community which supports fellow committees. Then-Treasurer Rob joined York’s Discord server, and the first connection was 
              made. A brand new server was created, and in came Durham, rounding out the three unis which laid the foundations for our initial leadership 
              structure. UCL, Bristol, UEA, and a whole host of Pokésocs from around the UK stormed in as time went on, before everything started to 
              become… a bit real.
              </p>
              <h1 className="shiny-title center-margins small-title">The Discord Server</h1>
              <p className={aboutStyles.paragraph}>As more and more societies were in correspondance, it was apparent that a server merely for committees was
              limiting the potential of I-UPS' outreach; so, the server opened to all I-UPS society members in 2021.
              </p>

              <h1 className="shiny-title center-margins small-title">Comté is Formed</h1>
              <p className={aboutStyles.paragraph}>With over a dozen fellow Pokésoc committees roaming the tall grass together in this new environment, we 
              needed to have a Champion to lead us. Don’t worry, we weren’t so crude as to actually name ourselves after the Elite 4… An initial group of fourteen 
              committee members from nine different societies was formed, and quickly got to work, moulding I-UPS further towards what can be found today. Why 
              “Comté” though? Well, “Committee Committee” was a bit too long, so we shortened it to “Comtee”, but that was too close to our dear friend Combee! We 
              didn’t want Combee to feel sad, so we added some flair with an accent - Comté!
              </p>

              <h1 className="shiny-title center-margins small-title">The Official I-UPS Discord Server</h1>
              <p className={aboutStyles.paragraph}>With our Comté in place, and with over a dozen societies now involved and invested in our new community, it was 
              time to take things public. Our doors opened to our societies’ members in late March 2021 with a (now defunct) Pixelmon server leading the festivities. 
              Keeping everything public has enabled us to connect with so many more people than we thought possible. We now have over 30 Pokésoc families under our 
              umbrella, and we cherish each and every one.
              </p>

              <h1 className="shiny-title center-margins small-title">The I-UPS Summer Draft League</h1>
              <p className={aboutStyles.paragraph}>Our flagship event, consisting of a Team Tour format, open to all members of IUPS, had its first rendition in the 
              summer of 2021. 15 teams from 12 societies participated. Everyone battled hard, and a winner was eventually crowned: MewCL (UCL). We now host this 
              annually, with more societies and teams joining every year!
              </p>

              <h2 className="shiny-title center-margins medium-title">Further Information</h2>
              <p className={aboutStyles.paragraph}>Pokémon and All Respective Names and Designs are Trademark & &copy; of Nintendo 1996-2022.</p>
            </Revealer>
          </section>

        </main>
      }

    </Layout>
    </>
  );
}

export default AboutPage;
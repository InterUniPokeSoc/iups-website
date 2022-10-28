import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import Layout from '../components/layout';

import { getNumberOfSocieties } from "../utils/societies"

// Components Imports
import Loader from '../components/loader';
import CircleImageTitle from '../components/circleImageTitle';
import Revealer from '../components/revealer';
import Comte from '../components/comte';

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
            
            <Revealer title="Comté">
              <Comte name="Dom" title="Speaker" 
              description="Hiya, I'm Dom, and I'm somewhat in charge of this here endeavour. 
              My track record of being a past UoY committee member of 3 years, and my love 
              of Happiny and Chimecho push me forth towards the promised land of plentiful 
              thriving Pokésocs around the UK and beyond! If I'm not busy working, you'll 
              find me on Showdown Randbats or polishing my Pokémon TTRPG rules." />

              <Comte name="Hanny" title="Document Manager" 
                description="I'm currently an ALT in Japan, which will almost certainly 
                explain why I'm around at odd hours of the day at any given time. I mostly 
                manage the documentation behind the scenes for IUPS where needed, since the 
                timezone does make it difficult to do other things. But I'm always doing my 
                best! My favourite Pokemon are Mimikyu and Yamper, of which I have proven my 
                love for by getting 7 plushies of the former and currently 5 of the latter. 
                This will not be stopping anytime soon." />

              <Comte name="James" title="Treasurer" 
                description="Hi I'm RedRouge1,
                I am the treasurer for Comté so it is my responsibility to provide advice 
                in regards to any financial matters that arise. My favourite Pokémon is 
                Snom, so it can usually be found as discord icon. At York I am currently 
                the president of the University of York's Pokésoc and can be found around 
                I-UPS helping to put on events such as the Summer Team Tour." />

              <Comte name="Dimitri" title="Events Officer" 
                description="My favourite Pokémon are Piplup, Furret and Lurantis and my 
                favourite game is SoulSilver." />

              <Comte name="Rob" title="Disciplinary Officer" 
                description="Hi all, I’m Rob I went to Sussex and studied biochemistry. 
                My favourite Pokémon are Ninetales and Lapras. I am the bonk sec, feel 
                free to Message me about any concerns you might have." />

              <Comte name="Philip - The Sinnohman" title="Social Secretary" 
                description="I'm the Social Secretary of I-UPS, responsible for organising 
                the more casual events you'll see happening, such as movie nights, Pokémon Go 
                events, and gameshows. I also run the recurring I-UPS All Stars Polls event, 
                which you can find out more about on our Events page.

                I was a committee member and Treasurer of York's PokéSoc during 2019-20. Our 
                committee was responsible for revising the society's event schedule to include 
                more events for less competitive-oriented players, such as PokéSoc: The Chase 
                (starring yours truly as the Chaser) and Skribbl.io Pokémon Edition.
                
                My favourite Pokémon are Ninjask and Feraligatr, and my favourite main series 
                game is HeartGold (Gen 4 best gen). I'm also a huge fan of Mystery Dungeon 
                and Pokémon Go." />

              <Comte name="Flora (they/she)" title="Accessibility and Inclusivity Officer" 
                description="Hello! I'm IUPS's Accessibility and Inclusivity Officer, and 
                the President of St Andrews Pokémon Society. I'm around to make sure 
                everyone in the server feels safe, happy, and accomodated for and I'm 
                happy to say that the server is such a wonderful and friendly space that 
                my work is pretty light, but of course please do feel free to get in touch 
                if you're having a difficulty or there's something you'd like to see 
                improved to make your experience at IUPS better. When it comes to PokéSoc 
                events in St Andrews, I'm a big fan of running and participating in draft 
                leagues but like to see a bit of everything, albeit with personal 
                preference for the main series games and a casual interest in the TCG. 
                My favourite Pokémon include Torterra, Dracovish, the whole Porygon family, 
                and various others and I can often be found rambling about why these 
                Pokemon in particular are amazing." />

              <Comte name="Loren - Lolo" title="Univserity Liason" 
                description="Hello! I am the Founder and current Vice President of KCL 
                Pokémon Society (2022/2023). After founding the society in 2020, I've 
                come to appreciate every part of the Pokémon franchise. My dedication 
                for Pokémon GO is strong and you will always catch me on the hunt for 
                the newest shiny in game! As University Liaison for I-UPS, I hope to 
                help universities establish their Pokémon Societies to a high standard 
                with events for everyone to enjoy Pokémon to the fullest whilst making 
                friends along the way. Looking forward to meeting you! " />

              <Comte name="Ruohan - Ro" title="Social Media Secretary (Scary Terry)" 
                description="I am the social media secretary, which means I run I-UPS's 
                Instagram account! My other experience includes being the co-founder and 
                president of UCL Pokémon Society, and as of 2022 I'm UCL PokéSoc's Arts 
                Officer! My favourite Pokémon are Shaymin, Eevee and Lucario and on 
                Wednesdays I dedicate my life to the west beast (i.e. Quagsire)." />

              <Comte name="Matt - Quag Stan" title="Social Media Secretary (Scary Terry) - Web" 
                description="Hey I’m Matt, Social Media Secretary on Comté and former President 
                of Sheffield PokéSoc. I’m mostly responsible for I-UPS’ website, along with 
                graphic design and occasional video editing/animation. Outside of I-UPS, 
                I work as a mobile engineer building iOS and Android applications in the 
                rail industry. In terms of Pokémon, I’m a fan of the games 
                (particularly Legends Arceus and PMD), the anime and soundtracks; it’s not 
                exactly a secret that my favourite Pokémon are Zygarde Core and Quag. Other 
                than Pokémon I’m a strong fan of Zelda and Mario as well as a keen 
                Piano/Violin player." />
            </Revealer>

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
            </Revealer>

            <h2 className="shiny-title center-margins medium-title">Further Information</h2>
              <p className={aboutStyles.paragraph}>Pokémon and All Respective Names and Designs are Trademark & &copy; of Nintendo 1996-2022.</p>
          </section>

        </main>
      }

    </Layout>
    </>
  );
}

export default AboutPage;
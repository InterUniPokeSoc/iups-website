import React from 'react';
import {Link} from 'gatsby';
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import CircleImageTitle from '../components/circleImageTitle';
import '../styles/general.scss';
import * as styles from '../styles/howtojoin.module.scss';

// Image Imports
import TitleImg from '../images/pokemon/harold.jpg'

function HowToJoinPage() {

  return (
    <>
    <Helmet>
      <title>Inter-Uni PokéSoc - How to Join</title>
    </Helmet>

    <Layout>

      <main className="page-content">
        <section>
          <CircleImageTitle src={ TitleImg }>How to Join</CircleImageTitle>

          <h2 className="shiny-title center-margins medium-title">How to Join</h2>
          <p className={ [styles.paragraph].join(' ') }>You can join I-UPS completely free by being a member of an affiliated Pokémon Society and joining our 
            Discord server.
          </p>

          <h2 className="shiny-title center-margins medium-title">Why Join?</h2>
          <p className={ [styles.paragraph].join(' ') }>You'll gain access to our Discord server, our events and an amazing community. Members from 
            around the country are involved from a range of different Pokémon societies.
          </p>

          <h2 className="shiny-title center-margins medium-title">Society Requirements</h2>
          <ul className={ [styles.paragraph].join(' ') }>
            <li>You ideally be a dedicated Pokémon society, not a general gaming society. 'Pokémon and Nintendo' hybrid societies are accepted.</li>
            <li>You should ideally be associated with a Students' Union where possible.</li>
            <li>Your members should primarily be students and/or alumni.</li>
          </ul>

          <h2 className="shiny-title center-margins medium-title">Individual Requirements</h2>
          <ul className={ [styles.paragraph].join(' ') }>
            <li>You must be a member or past member of a Pokémon Society that is currently associated with the I-UPS.</li>
            <li>Some Student Unions accept public members, if you are a member of the society, you are welcome.</li>
          </ul>

          <h2 className="shiny-title center-margins medium-title">FAQ</h2>
          <h3 className={ [styles.faqTitle].join(' ') }>Can I join I-UPS if I am a member of a general gaming or E-Sports society?</h3>
          <p className={ [styles.paragraph].join(' ') }>In exceptional circumstances, you ideally need to be a member of a dedicated Pokémon Society. Our aim is to bring 
            together Pokémon Societies and to help run collaborative events. We are not focused on e-sports or general gaming.</p>

          <h3 className={ [styles.faqTitle].join(' ') }>Can I join I-UPS if I am not a current student?</h3>
          <p className={ [styles.paragraph].join(' ') }>You can join I-UPS as an alumni, so long as you were or are a member of an affiliated Pokémon Society.</p>

          <h3 className={ [styles.faqTitle].join(' ') }>I’m a Masters/PhD student, my previous university had a Pokémon Society but my current one does not. Can I join?</h3>
          <p className={ [styles.paragraph].join(' ') }>Yes, of course. We would, however, strongly encourage you to set up a Pokémon Society at your current university.</p>

          <h3 className={ [styles.faqTitle].join(' ') }>I’m a sixth-form/college student, Can I join?</h3>
          <p className={ [styles.paragraph].join(' ') }>Your local Pokémon Society may accept non-student members, in these circumstances you can join I-UPS. Please bare in mind that 
            most server members are over 18.
          </p>
        </section>

      </main>

    </Layout>
    </>
  );
}

export default HowToJoinPage;

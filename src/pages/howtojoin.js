import React from 'react';
import {Link} from 'gatsby';
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import CircleImageTitle from '../components/circleImageTitle';
import '../styles/general.scss';
import * as styles from '../styles/howtojoin.module.scss';

// Image Imports
import TitleImg from '../images/pokemon/harold2.jpg'

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
          <p className={ [styles.paragraph].join(' ') }>You can join I-UPS completely free by being a member or alumnus of an 
          affiliated Pokémon Society and joining our Discord server. If you attend a UK-based university and would like to 
          create a Pokémon Society, join the server and get in touch with us!
          </p>

          <h2 className="shiny-title center-margins medium-title">Why Join I-UPS?</h2>
          <p className={ [styles.paragraph].join(' ') }>You'll gain access to our Discord server, our events and our amazing 
          community. Members from all over the UK are involved from a range of different Pokésocs. Come along and make some 
          new friends!
          </p>

          <h2 className="shiny-title center-margins medium-title">Society Requirements (Member)</h2>
          <ul className={ [styles.paragraph].join(' ') }>
            <li>You must be a dedicated Pokémon society, not a general gaming society. 'Pokémon and Nintendo' hybrid societies are accepted.</li>
            <li>You should ideally be associated with a Students' Union where possible.</li>
            <li>Your members should primarily be students and/or alumni.</li>
          </ul>

          <h2 className="shiny-title center-margins medium-title">Society Requirements (Associate)</h2>
          <ul className={ [styles.paragraph].join(' ') }>
            <li>General gaming societies must have an official, elected representative for the Pokémon franchise, or Nintendo. This results in us having a proper point of contact with you.</li>
            <li>We recommend having a dedicated channel or system in place for your members to discuss Pokémon and participate in Pokémon-based activities.</li>
          </ul>

          <h2 className="shiny-title center-margins medium-title">Individual Requirements</h2>
          <ul className={ [styles.paragraph].join(' ') }>
            <li>Membership is open to anyone who is a president, committee member, general member or alumni of a Pokémon Society at a UK-based university; or anyone who attends a UK-based university and wishes to create a Pokémon Society at the university.</li>
            <li>Some Student Unions accept public members. If you are a member of the society, you are welcomed into the IUPS family.</li>
          </ul>

          <h2 className="shiny-title center-margins medium-title">FAQ</h2>
          <h3 className={ [styles.faqTitle].join(' ') }>Can I join I-UPS if I am a member of a general gaming or E-Sports society?</h3>
          <p className={ [styles.paragraph].join(' ') }>In exceptional circumstances. You ideally need to be a member of a dedicated Pokémon Society. Our aim is to bring together Pokémon Societies and to help run collaborative events. We do not focus on 
          E-Sports or general gaming.</p>

          <h3 className={ [styles.faqTitle].join(' ') }>Can I join I-UPS if I am not a current student?</h3>
          <p className={ [styles.paragraph].join(' ') }>You can join I-UPS as an alumni, so long as you were or are a member of an affiliated Pokémon Society.</p>

          <h3 className={ [styles.faqTitle].join(' ') }>I’m a Masters/PhD student, my previous university had a Pokémon Society but my current one does not. Can I join?</h3>
          <p className={ [styles.paragraph].join(' ') }>Yes, of course! We would also, however, strongly encourage you to set up a Pokémon Society at your current university.</p>

          <h3 className={ [styles.faqTitle].join(' ') }>I’m a sixth-form/college student, Can I join?</h3>
          <p className={ [styles.paragraph].join(' ') }>Your local Pokémon Society may accept non-student members, in these circumstances you can join I-UPS. Please bear in mind that most IUPS members are over the standard UK university-going age of 17/18.
          </p>
        </section>

      </main>

    </Layout>
    </>
  );
}

export default HowToJoinPage;

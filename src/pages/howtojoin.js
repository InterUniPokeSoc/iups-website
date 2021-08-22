import React from 'react';
import {Link} from 'gatsby';
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import TitleBanner from '../components/titleBanner';
import '../styles/general.scss';
import '../styles/howtojoin.scss';


function HowToJoinPage() {

  return (
    <>
    <Helmet>
      <title>Inter-Uni PokéSoc - How to Join</title>
    </Helmet>

    <Layout>

      <main className="page-content">
        <TitleBanner imageSource="/images/londongang.png" title="How to Join" />

        <section className="page-section">
          <h2 className="title">Society Requirements</h2>
          <ul>
            <li>You must be a dedicated Pokémon society, not a general gaming society. 'Pokémon and Nintendo' hybrid societies are accepted.</li>
            <li>You should ideally be associated with a Students' Union where possible.</li>
            <li>Your members should primarily be students and/or alumni.</li>
          </ul>

          <h2 className="title">Individual Member Requirements</h2>
          <ul>
            <li>You must be a member of a Pokémon Society that is associated with the I-UPS.</li>
            <li>You must be over 18 - to ensure everyone stays safe.</li>
          </ul>

          <h2 className="title">FAQ</h2>
          <h3>Can I join I-UPS if I am a member of a general gaming or E-Sports society?</h3>
          <a>No, you must be a member of a dedicated Pokémon Society. Our aim is to bring together Pokémon Societies and to help run collaborative events. We are not focused on e-sports or general gaming.</a>

          <h3>Can I join I-UPS if I am not a current student?</h3>
          <a>This depends on whether your local university Pokémon Society accepts non-student members. This will often depend on their 
            Students’ Union’s rules. Recent Alumni are welcome to join, so long as they were a member of their respective Universities 
            Pokémon Society.</a>

          <h3>I’m a Masters/PhD student, my previous university had a Pokémon Society but my current one does not. Can I join?</h3>
          <a>Yes, so long as your previous universities Pokémon Society accepts you as an alumni/affiliate member. We would, 
            however, strongly encourage you to set up a Pokémon Society at your current university.</a>

          <h3>I’m a sixth-form/college student, Can I join?</h3>
          <a>If you are over 18, your nearest University Pokémon Society may accept you as a member.</a>
        </section>

      </main>

    </Layout>
    </>
  );
}

export default HowToJoinPage;

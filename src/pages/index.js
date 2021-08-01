import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import roundButton from '../components/roundButton';
import '../styles/general.scss';
import '../styles/index.scss';
import RoundButton from '../components/roundButton';


function IndexPage() {
  return (
    <Layout>
      <main className="main-area-flex">
        <div className="info">
          <h1 className="index-title title primary-color">A Nationwide Group of Pokémon Societies</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus ut quam non lacinia.
          </p>
          <p>
          Nam ante urna, iaculis ac finibus egestas, cursus vel dolor. Duis tempor purus et aliquam aliquam. Nam eros felis, tristique nec dignissim non, suscipit ac turpis. Phasellus finibus venenatis leo.
          </p>
        </div>
        <div id="home-logo-wrapper">
          <img id="home-logo" src="/images/doggo.png" />
        </div>
      </main>

      <section className="map-link-section">
        <img className="map-link-background" src="/images/sheffield.jpg" alt="City scape of Sheffield during sunset with central focus on the Arts Tower." />
        <div className="map-link-info">
          <p className="title map-link-title">Our Societies</p>
          <RoundButton className="map-link-button" link="./our-societies" text="Show Me" />
        </div>
      </section>

    </Layout>
  );
}

export default IndexPage;

import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import '../styles/general.scss';
import '../styles/index.scss';


function IndexPage() {
  return (
    <Layout>

      {/* <div className="welcome-area">
        <img src={'/images/background.jpg'} className="background" alt="Background."></img>
        <div className="welcome-info">
          <img src={'/images/full-logo-white.svg'} className="background-logo" alt="Main Logo (Non-link)" />
          <p className="welcome-desc">Hello There.</p>
          <div className="social-icons">
            <a href="https://twitter.com/"><img src={'/images/twitter-round-icon.svg'} alt="Twitter social link." className="social-icon" /></a>
            <a href="https://github.com/"><img src={'/images/github-round-icon.png'} alt="Github social link." className="social-icon" /></a>
            <a href="https://linkedin.com/in/"><img src={'/images/linkedin-icon.png'} alt="LinkedIn social link." className="social-icon" /></a>
          </div>
        </div>
      </div> */}

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
        <p className="title map-link-title">Our Societies</p>
      </section>

    </Layout>
  );
}

export default IndexPage;

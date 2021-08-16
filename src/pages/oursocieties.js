import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import '../styles/general.scss';
import '../styles/oursocieties.scss';
import {Helmet} from "react-helmet";
import mapboxgl from "!mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import Microsoft from 'https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=${process.env.BING_API_KEY}';
// import RoundButton from '../components/roundButton';

function OurSocietiesPage() {
  function GetMap() {
    var map = new Microsoft.Maps.Map('#myMap');
  }


  return (
    <Layout>
      <Helmet>
        <script type='text/javascript' src={'https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=Ap8FHdkAkMCVvmGLFcFaw1Bk00ZZ06GkOszIxPVTR63SpmBnm4oh_5eO-BrcvOHP'} async defer></script>
      </Helmet>

      <main className="page-content">
        <div id="myMap"></div>
        <section className="page-section">
          <h1 className="title">What is the I-UPS?</h1>
          <p>Test</p>
        </section>

      </main>

    </Layout>
  );
}

export default OurSocietiesPage;

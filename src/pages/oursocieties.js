import React from 'react';
import {Link, useState, useRef, useEffect} from 'gatsby';
import Layout from '../components/layout';
import '../styles/general.scss';
import '../styles/oursocieties.scss';
import {Helmet} from "react-helmet";
// import mapboxgl from "mapbox-gl";
// import 'mapbox-gl/dist/mapbox-gl.css';
//import Microsoft from 'https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key={process.env.BING_API_KEY}';
// import RoundButton from '../components/roundButton';
import Map from '../components/map';

function OurSocietiesPage() {

  return (
    <Layout>
      <Helmet>
      </Helmet>

      <main className="page-content">
        <Map />
        <section className="page-section">
          <h1 className="title">What is the I-UPS?</h1>
          <p>Test</p>
        </section>

      </main>

    </Layout>
  );
}

export default OurSocietiesPage;

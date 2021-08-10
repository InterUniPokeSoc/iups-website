import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import '../styles/general.scss';
import '../styles/oursocieties.scss';
import {Helmet} from "react-helmet";
import mapboxgl from "!mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
// import RoundButton from '../components/roundButton';


function OurSocietiesPage() {

  // const mapContainer = mapboxgl.useRef(null);
  // const map = mapboxgl.useRef(null);
  // const [lng, setLng] = mapboxgl.useState(-70.9);
  // const [lat, setLat] = mapboxgl.useState(42.35);
  // const [zoom, setZoom] = mapboxgl.useState(9);

  // mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dDY0IiwiYSI6ImNrczB0b3ljZzFudGwydXBzODZvOGJ1ZjcifQ.JbXjo7R4qDkBf-7tASmgDA';

  // setTimeout(() => {
  //   mapboxgl.useEffect(() => {
  //     if (map.current) return; // initialize map only once
  //     map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: [lng, lat],
  //     zoom: zoom
  //     });
  //   });
  // })

  // var map = new mapboxgl.Map({
  //   container: 'map',
  //   style: 'mapbox://styles/mapbox/light-v10',
  //   center: [-96, 37.8],
  //   zoom: 3
  // });

  return (
    <Layout>
      {/* <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.4.0/mapbox-gl.css' rel='stylesheet' />
      </Helmet> */}

      <main className="page-content">

      {/* <div id='map'></div> */}
      {/* <div ref={mapContainer} className="map-container" /> */}

        <section className="page-section">
          <h1 className="title">What is the I-UPS?</h1>
          <p>Test</p>
        </section>

      </main>

    </Layout>
  );
}

export default OurSocietiesPage;

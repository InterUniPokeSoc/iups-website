import React from 'react';
import {Link, useState, useRef, useEffect} from 'gatsby';
import Layout from '../components/layout';
import '../styles/general.scss';
import '../styles/oursocieties.scss';
import {Helmet} from "react-helmet";
import Map from '../components/map';

function OurSocietiesPage() {

  return (
    <>
    <Helmet>
      <title>Inter-Uni PokéSoc - Our Societies</title>
    </Helmet>

    <Layout>
      <main className="page-content">
        <div className="map-sidebar-wrapper">
          <div className="page-map">
            <Map />
          </div>

          <section className="sidebar">
            <div className="society-wrapper">
              <h2 className="society-name">Test</h2>
            </div>
          </section>
        </div>
      </main>

    </Layout>
    </>
  );
}

export default OurSocietiesPage;

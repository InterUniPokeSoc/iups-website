import React from 'react';
import {Link, useState, useRef, useEffect} from 'gatsby';
import Layout from '../components/layout';
import '../styles/general.scss';
import '../styles/oursocieties.scss';
import {Helmet} from "react-helmet";
import Map from '../components/map';

import { getSocieties } from "../utils/societies";

function OurSocietiesPage() {

  var societies = [];

  getSocieties().then((dbList) => {
    // console.log(dbList[0].hint1.hint);
    console.log(dbList);
    Object.values(dbList).map((society) => {

      societies.push([
        society.name,
        society.longitude,
        society.latitude
      ]);
    });

  }).catch((e) => {

  });

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

            <input className="search-bar" placeholder="Search for a society..."></input>

            <div className="society-wrapper">
              {/* {societies.map(society => (
                <div>
                  <h2 className="society-name">{society.name}</h2>
                  <p className="society-name">{society.longitude}</p>
                  <p className="society-name">{society.latitude}</p>
                </div>
              ))} */}
              <h2 className="society-name">Sheffield PokéSoc</h2>
            </div>
          </section>
        </div>
      </main>

    </Layout>
    </>
  );
}

export default OurSocietiesPage;

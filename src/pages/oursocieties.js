import React from 'react';
import {Link, useState, useRef, useEffect} from 'gatsby';
import Layout from '../components/layout';
import '../styles/general.scss';
import '../styles/oursocieties.scss';
import {Helmet} from "react-helmet";
import Map from '../components/map';

import { getSocieties } from "../utils/societies";

var societies = [];

function createSocietySidebarItem(id) {
  console.log("createSocietySidebarItem() called for "+id);
  console.log("Data: "+societies[id]);
  var sideBar = document.getElementById('society-list');

  var sideBarItem = document.createElement('div');
  sideBarItem.classList.add('society-wrapper');

  var societyName = document.createElement('h2');
  societyName.classList.add('society-name');
  societyName.innerHTML = societies[id].name;
  sideBarItem.appendChild(societyName);

  var color1 = societies[id].color1;
  var color2 = societies[id].color2;

  if (color1 != null) {
    sideBarItem.style.backgroundColor = "#"+color1;
  }

  if (color1 != null && color2 != null) {
    sideBarItem.style.background = `linear-gradient(45deg,#${color1},#${color2})`;
  }


  // Social Media Icons
  var fbIconWrapper = document.createElement('a');
  var instIconWrapper = document.createElement('a');
  var discIconWrapper = document.createElement('a');

  fbIconWrapper.classList.add('social-icon-society-wrapper');
  instIconWrapper.classList.add('social-icon-society-wrapper');
  discIconWrapper.classList.add('social-icon-society-wrapper');

  var fbIcon = document.createElement('img');
  var instIcon = document.createElement('img');
  var discIcon = document.createElement('img');

  fbIcon.classList.add('social-icon-society');
  instIcon.classList.add('social-icon-society');
  instIcon.classList.add('invert-icon');
  discIcon.classList.add('social-icon-society');

  fbIcon.src = "/images/f_logo_RGB-White_250.png";
  instIcon.src = "/images/instagram-logo-black.png";
  discIcon.src = "/images/icon_clyde_white_RGB.svg";

  var fbLink = societies[id].facebook;
  var instLink = societies[id].instagram;
  var discLink = societies[id].discord;

  if (fbLink != null) {
    fbIconWrapper.href = fbLink;
    fbIconWrapper.appendChild(fbIcon);
    sideBarItem.appendChild(fbIconWrapper);
  }

  if (instLink != null) {
    instIconWrapper.href = instLink;
    instIconWrapper.appendChild(instIcon);
    sideBarItem.appendChild(instIconWrapper);
  }

  if (discLink != null) {
    discIconWrapper.href = discLink;
    discIconWrapper.appendChild(discIcon);
    sideBarItem.appendChild(discIconWrapper);
  }

  // Add to Sidebar
  sideBar.appendChild(sideBarItem);
}

function addSocietiesToSidebar() {
  var sideBar = document.getElementById('society-list');

  // Remove all society elements from sidebar in case page reload duplicates items.
  while (sideBar.lastChild) {
      sideBar.lastChild.remove()
  }

  // Add each society as sidebar item
  societies.forEach(function (_, index) {
    createSocietySidebarItem(index)
  });
}


function OurSocietiesPage() {

  getSocieties().then((dbList) => {
    Object.values(dbList).map((society) => {
      societies.push(society);
    });

    addSocietiesToSidebar()

  }).catch((e) => {
    console.log(e);
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

          <section className="sidebar" id="sidebar">
            <input className="search-bar" placeholder="Search for a society..."></input>
            <div id="society-list"></div>
          </section>
        </div>
      </main>

    </Layout>
    </>
  );
}

export default OurSocietiesPage;

import React from 'react';
import {Link, useState, useRef, useEffect} from 'gatsby';
import Layout from '../components/layout';
import '../styles/general.scss';
import '../styles/oursocieties.scss';
import {Helmet} from "react-helmet";
import Map from '../components/map';

import { getSocieties } from "../utils/societies";

var societies = [];
var selectedSociety = null;

function selectSociety(id) {
  console.log("Before Pass In: "+id)
  selectedSociety = (id)

  console.log("selectedSociety New Value: "+selectedSociety)
}

function createSocialMediaIcon(link, item, imgLocation, inverted) {
  var wrapper = document.createElement('a');
  wrapper.classList.add('social-icon-society-wrapper');

  var icon = document.createElement('img');
  icon.classList.add('social-icon-society');
  icon.src = imgLocation;

  if (inverted)
    icon.classList.add('invert-icon');

  if (link != null) {
    wrapper.href = link;
    console.log(link)
    wrapper.appendChild(icon);
    item.appendChild(wrapper);
  }

  return wrapper
}

function createSocietySidebarItem(id) {
  var sideBar = document.getElementById('society-list');

  var sideBarItem = document.createElement('a');
  sideBarItem.classList.add('society-wrapper');

  sideBarItem.addEventListener("click", function() {
    console.log("Event Called")
    selectSociety(id)
  })

  var societyName = document.createElement('h2');
  societyName.classList.add('society-name');
  societyName.innerHTML = societies[id].name;
  sideBarItem.appendChild(societyName);

  var color1 = societies[id].color1;
  var color2 = societies[id].color2;

  if (color1 != null) {
    if (color2 != null) {
      sideBarItem.style.background = `linear-gradient(45deg,#${color1},#${color2})`;
    } else {
      sideBarItem.style.backgroundColor = "#"+color1;
    }
  }

  // Social Media Icons
  createSocialMediaIcon(societies[id].facebook, sideBarItem, "/images/f_logo_RGB-White_250.png", false);
  createSocialMediaIcon(societies[id].instagram, sideBarItem, "/images/instagram-logo-black.png", true);
  createSocialMediaIcon(societies[id].discord, sideBarItem, "/images/icon_clyde_white_RGB.svg", false);

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
            <Map selected={selectedSociety} />
            {selectSociety(4)}
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

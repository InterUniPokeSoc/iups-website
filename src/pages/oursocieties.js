import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import '../styles/general.scss';
import '../styles/oursocieties.scss';
import {Helmet} from "react-helmet";
import Map from '../components/map';

import { getSocieties } from "../utils/societies";

var societyList = [];
var filteredSocietyList = [];
var updateSocietyList;
var updateSelectedSociety;


function selectSociety(id) {
  updateSelectedSociety(id)
}

function filterSocietyList(event) {
  var filter = event.target.value

  filteredSocietyList = []

  if (filter == undefined || filter == "") {
    filteredSocietyList = societyList
  } else {
    for (society in societyList) {
      if (society.name != undefined && society.name.contains(filter)) {
        filteredSocietyList.push(society)
      }
    }
  }

  updateSocietyList(filteredSocietyList)
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
  societyName.innerHTML = societyList[id].name;
  sideBarItem.appendChild(societyName);

  var color1 = societyList[id].color1;
  var color2 = societyList[id].color2;

  if (color1 != null) {
    if (color2 != null) {
      sideBarItem.style.background = `linear-gradient(45deg,#${color1},#${color2})`;
    } else {
      sideBarItem.style.backgroundColor = "#"+color1;
    }
  }

  // Social Media Icons
  createSocialMediaIcon(societyList[id].facebook, sideBarItem, "/images/f_logo_RGB-White_250.png", false);
  createSocialMediaIcon(societyList[id].instagram, sideBarItem, "/images/instagram-logo-black.png", true);
  createSocialMediaIcon(societyList[id].discord, sideBarItem, "/images/icon_clyde_white_RGB.svg", false);

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
  societyList.forEach(function (_, index) {
    createSocietySidebarItem(index)
  });
}

 
export default function OurSocietiesPage() {

  const [societies, setSocieties] = useState([]);

  const [selectedSociety, setSelectedSociety] = useState(null);

  getSocieties().then((dbList) => {
    Object.values(dbList).map((society) => {
      societyList.push(society);
    });

    setSocieties(societyList)

    addSocietiesToSidebar()

  }).catch((e) => {
    console.log(e);
  });

  useEffect(() => {
    updateSocietyList = setSocieties
    updateSelectedSociety = setSelectedSociety
  }, [])

  return (
    <>
    <Helmet>
      <title>Inter-Uni PokéSoc - Our Societies</title>
    </Helmet>

    <Layout>
      <main className="page-content">
        <div className="map-sidebar-wrapper">
          <div className="page-map">
            <Map societyList={societies} selected={selectedSociety} />
          </div>

          <section className="sidebar" id="sidebar">
            <input className="search-bar" placeholder="Search for a society..." onChange={filterSocietyList}></input>
            <div id="society-list"></div>
          </section>
        </div>
      </main>

    </Layout>
    </>
  );
}

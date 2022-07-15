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


function selectSociety(name) {
  // using name as id causes map to change position on search change
  updateSelectedSociety(name)
}

const filterSocietyList = (filter) => {
  filter = filter.toLowerCase()

  filteredSocietyList = []
  if (filter == undefined || filter === "") {
    filteredSocietyList = societyList
  } else {
    societyList.forEach((society) => {
      var societyName = society.name.toLowerCase()

      if (societyName != undefined && societyName.includes(filter)) {
        filteredSocietyList.push(society)
      }
    }) 
    
  }

  updateSocietyList(filteredSocietyList)
  addSocietiesToSidebar()
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
  var society = filteredSocietyList[id]

  var sideBar = document.getElementById('society-list');

  var sideBarItem = document.createElement('a');
  sideBarItem.classList.add('society-wrapper');

  sideBarItem.addEventListener("click", function() {
    selectSociety(society.name)
  })

  var societyName = document.createElement('h2');
  societyName.classList.add('society-name');
  societyName.innerHTML = filteredSocietyList[id].name;
  sideBarItem.appendChild(societyName);

  var color1 = society.color1;
  var color2 = society.color2;

  if (color1 != null) {
    if (color2 != null) {
      sideBarItem.style.background = `linear-gradient(45deg,#${color1},#${color2})`;
    } else {
      sideBarItem.style.backgroundColor = "#"+color1;
    }
  }

  // Social Media Icons
  createSocialMediaIcon(society.facebook, sideBarItem, "/images/f_logo_RGB-White_250.png", false);
  createSocialMediaIcon(society.instagram, sideBarItem, "/images/instagram-logo-black.png", true);
  createSocialMediaIcon(society.discord, sideBarItem, "/images/icon_clyde_white_RGB.svg", false);

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
  filteredSocietyList.forEach(function (_, index) {
    createSocietySidebarItem(index)
  });
}

 
export default function OurSocietiesPage() {

  const [societies, setSocieties] = useState([]);

  const [selectedSociety, setSelectedSociety] = useState(null);

  useEffect(() => {
    setSocieties([])
    societyList = []

    // Make API call to Firebase to get society list.
    getSocieties().then((dbList) => {
      Object.values(dbList).map((society) => {
        societyList.push(society);
      });

      filteredSocietyList = societyList

      setSocieties(societyList)

      addSocietiesToSidebar()

    }).catch((e) => {
      console.log(e);
    });

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
            <input className="search-bar" placeholder="Search for a society..." onChange={e => filterSocietyList(e.target.value)}></input>
            <div id="society-list"></div>
          </section>
        </div>
      </main>

    </Layout>
    </>
  );
}

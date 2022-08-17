import React, {useState, useRef, useEffect} from 'react';
import Layout from '../components/layout';
import '../styles/general.scss';
import '../styles/oursocieties.scss';
import {Helmet} from "react-helmet";
import Map from '../components/map';

import { getSocieties } from "../utils/societies";

// Image Imports
import InstaIcon from '../images/social-media-icons/instagram/instagram-logo-black.png'
import DiscordIcon from '../images/social-media-icons/discord/icon_clyde_white_RGB.svg'
import FacebookIcon from '../images/social-media-icons/facebook/f_logo_RGB-White_250.png'
import UpIcon from '../images/icons/up-arrow.svg'
import DownIcon from '../images/icons/down-arrow.svg'


export default function OurSocietiesPage() {

  const [fullSocietiesList, setFullSocietiesList] = useState([])

  const [societies, setSocieties] = useState([])

  const [selectedSociety, setSelectedSociety] = useState(null)

  const [sidebarSearchQuery, setSidebarSearchQuery] = useState("")

  // Sidebar view mode on mobile
  const [sidebarOpen, setSidebarOpen] = useState(false)

  /*
    On page load make an API call to Supabase to get the list of societies
  */
  useEffect(() => {
    var tempSocietiesList = []

    getSocieties().then((dbList) => {
      Object.values(dbList).map((society) => {
        tempSocietiesList.push(society);
      });

      setFullSocietiesList(tempSocietiesList)
      setSocieties(tempSocietiesList)

    }).catch((e) => {
      console.log(e);
    });
  }, [])

  /*
    Manage search query changes
  */
  useEffect(() => {
    console.log("QUERY CHANGED TO: "+sidebarSearchQuery)

    if (fullSocietiesList == null || fullSocietiesList.length == 0) {
      console.log("fullSocietiesList is NULL!")
      return
    }

    if (sidebarSearchQuery == null || sidebarSearchQuery.length == 0) {
      setSocieties(fullSocietiesList)
      return
    }

    console.log("GUARD STATEMENT PASSED!")

    var filteredSocietyList = []

    societies.forEach((society) => {
      var societyName = society.name.toLowerCase()

      if (societyName != undefined && societyName.includes(sidebarSearchQuery.toLowerCase())) {
        filteredSocietyList.push(society)
        console.log(`SOCIETY ${society.name} is INCLUDED!`)
      }
    })

    setSocieties(filteredSocietyList)

  }, [sidebarSearchQuery])

  if (typeof window !== 'undefined') {
    return (
      <>
      <Helmet>
        <title>Inter-Uni PokéSoc - Our Societies</title>
      </Helmet>

      <Layout>
        <main className="page-content">
          <div className="map-sidebar-wrapper">
            <div className="page-map">
              { typeof window !== 'undefined' &&
                <Map societyList={societies} selected={selectedSociety} />
              }
            </div>
            
            {/* Sidebar UI */}
            <section className={ sidebarOpen ? ['sidebar', 'sidebar-open'].join(' ') : ['sidebar', 'sidebar-closed'].join(' ') } id="sidebar">
              <img id="sidebar-toggle-button" className="sidebar-closed" onClick={e => setSidebarOpen(!sidebarOpen)} src={sidebarOpen ?  DownIcon : UpIcon }></img>
              <input className="search-bar" placeholder="Search for a society..." value={ sidebarSearchQuery } onChange={e => { setSidebarSearchQuery(e.target.value) }}></input>

              <div id="society-list">

                {/* For each society in the list create a 'bubble' containing the societies information */}
                { societies.map((society, index) => {
                  return <a className={"society-wrapper"} 
                  onClick={() => { setSelectedSociety(society.name) }}
                  // Determine the colour of the societies bubble
                  style = {
                    society.colours == null ? {} : (
                      society.colours[1] == null ? { 'backgroundColor': `#${society.colours[0]}` }
                      : { 'background': `linear-gradient(45deg,#${society.colours[0]},#${society.colours[1]})` }
                    )
                  }
                  >
                    {/* Society Name Title */}
                    <h2 className={ 'society-name' }> {society.name} </h2>

                    {/* Social Media Links */}
                    { society.discord != null &&
                      <a className={ 'social-icon-society-wrapper' } href={ society.discord }>
                        <img className={ 'social-icon-society' } src={ DiscordIcon } alt={ "Discord Icon" }/>
                      </a>
                    }

                    { society.instagram != null &&
                      <a className={ 'social-icon-society-wrapper' } href={ society.instagram }>
                        <img className={ ['social-icon-society', 'invert-icon'].join(' ') } src={ InstaIcon } alt={ "Instagram Icon" }/>
                      </a>
                    }

                    { society.facebook != null &&
                      <a className={ 'social-icon-society-wrapper' } href={ society.facebook }>
                        <img className={ 'social-icon-society' } src={ FacebookIcon } alt={ "Facebook Icon" }/>
                      </a>
                    }
                  </a>
                })}

              </div>

            </section>
          </div>
        </main>

      </Layout>
      </>
    );
  }
}

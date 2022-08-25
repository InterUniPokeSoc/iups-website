import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import '../styles/general.scss'
import '../styles/oursocieties.scss'
import { Helmet } from "react-helmet"

import Map from '../components/map'
import Loader from '../components/loader'

import { getSocieties } from "../utils/societies"

// Image Imports
import InstaIcon from '../images/social-media-icons/instagram/instagram-logo-white.png'
import DiscordIcon from '../images/social-media-icons/discord/icon_clyde_white_RGB.svg'
import FacebookIcon from '../images/social-media-icons/facebook/f_logo_RGB-White_250.png'
import TwitterIcon from '../images/social-media-icons/twitter/twitter-logo-white.svg'
import UpIcon from '../images/icons/up-arrow.svg'
import DownIcon from '../images/icons/down-arrow.svg'


export default function OurSocietiesPage() {

  // List containing all societies retrieved from the database, should only be set once
  const [fullSocietiesList, setFullSocietiesList] = useState([])

  // List containing societies filtered based on search query
  const [societies, setSocieties] = useState([])

  const [selectedSociety, setSelectedSociety] = useState(null)

  const [sidebarSearchQuery, setSidebarSearchQuery] = useState("")

  // Sidebar view mode on mobile
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  /*
    On page load make an API call to Supabase to get the list of societies
  */
  useEffect(() => {
    setIsLoading(true)

    var tempSocietiesList = []

    getSocieties().then((dbList) => {
      Object.values(dbList).map((society) => {
        tempSocietiesList.push(society);
      });

      setFullSocietiesList(tempSocietiesList)
      setSocieties(tempSocietiesList)

    }).catch((e) => {
      setErrorMessage("An error occurred while fetching the societies data. Please try again later.")
    }).finally(() => {
      setIsLoading(false)
    })
  }, [])

  /*
    Manage search query changes
  */
  useEffect(() => {

    if (fullSocietiesList == null || fullSocietiesList.length == 0) {
      return
    }

    if (sidebarSearchQuery == null || sidebarSearchQuery.length == 0) {
      setSocieties(fullSocietiesList)
      return
    }

    var filteredSocietyList = []

    societies.forEach((society) => {
      var societyName = society.name.toLowerCase()

      if (societyName != undefined && societyName.includes(sidebarSearchQuery.toLowerCase())) {
        filteredSocietyList.push(society)
      }
    })

    setSocieties(filteredSocietyList)

  }, [sidebarSearchQuery])

  if (typeof window !== 'undefined') {
    return (
      <>
      <Helmet>
        <title>Inter-Uni PokéSoc - Our Societies</title>
        <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>

      <Layout>
        <main className="page-content">
          { isLoading &&
            <Loader center={ true } />
          }

          { errorMessage != null &&
            <p className={ 'error-message' } >{ errorMessage }</p>
          }

          { !isLoading && errorMessage == null &&
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
                      society.colour1 == null && society.colour2 == null ? {} : (
                        society.colour2 == null ? { 'backgroundColor': `#${society.colour1}` }
                        : { 'background': `linear-gradient(45deg,#${society.colour1},#${society.colour2})` }
                      )
                    }
                    >
                      {/* Society Name Title */}
                      <h2 className={ 'society-name' }> { society.name ?? "" } </h2>

                      {/* Social Media Links */}
                      { society.discord != null &&
                        <a className={ 'social-icon-society-wrapper' } href={ society.discord } target={ '_blank' } rel={ 'noopener noreferrer' }>
                          <img className={ 'social-icon-society' } src={ DiscordIcon } alt={ "Discord Icon" }/>
                        </a>
                      }

                      { society.instagram != null &&
                        <a className={ 'social-icon-society-wrapper' } href={ society.instagram } target={ '_blank' } rel={ 'noopener noreferrer' }>
                          <img className={ 'social-icon-society' } src={ InstaIcon } alt={ "Instagram Icon" }/>
                        </a>
                      }

                      { society.facebook != null &&
                        <a className={ 'social-icon-society-wrapper' } href={ society.facebook } target={ '_blank' } rel={ 'noopener noreferrer' }>
                          <img className={ 'social-icon-society' } src={ FacebookIcon } alt={ "Facebook Icon" }/>
                        </a>
                      }

                      { society.twitter != null &&
                        <a className={ 'social-icon-society-wrapper' } href={ society.twitter } target={ '_blank' } rel={ 'noopener noreferrer' }>
                          <img className={ 'social-icon-society' } src={ TwitterIcon } alt={ "Twitter Icon" }/>
                        </a>
                      }
                    </a>
                  })}

                </div>

              </section>
            </div>
          }
        </main>

      </Layout>
      </>
    );
  }
}

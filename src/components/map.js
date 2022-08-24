import React, { useEffect, useState, useRef } from 'react'
import Helmet from 'react-helmet'
import { MapContainer, TileLayer, Marker, Popup, useMap, useLeafletContext } from 'react-leaflet'
import * as mapStyles from './map.module.scss'
import '../styles/leaflet.css'
import * as L from 'leaflet'
import MapAdjustments from './mapAdjustments'

// Image Imports
import MarkerIcon from '../images/branding/iups-icon.png'

export default function Map(props) {
  const initialState = {
    lat: 54.927,
    lng: -3.638,
    zoom: 6.2
  }

  const icon = L.icon({
    iconUrl: MarkerIcon,
    iconSize: [46, 46],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
  });

  // State to keep track of changing map parameters
  const [mapParams, setMapParams] = useState(initialState)

  // Keeps track of list of societies
  const [societyList, setSocietyList] = useState(props.societyList)

  // Keeps track of the selected society from the sidebar
  const [selectedSociety, setSelectedSociety] = useState(props.selected)
  
  /*
   Handle Society Selection from Sidebar
  */
  useEffect(() => {
    societyList.forEach( society => {
      if (society.name == props.selected) {
        setSelectedSociety(society)
      }
    })
  }, [props.selected])


  /*
   Add Markers to Map on update of the Society List
  */
  useEffect(() => {
    setSocietyList(props.societyList)
  }, [props.societyList])

  if (typeof window !== 'undefined') {
    return (
      <div>
        <MapContainer
        id="main-map" 
        center={[mapParams.lat, mapParams.lng]} zoom={mapParams.zoom} 
        zoomControl={false}
        scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          { societyList.map( society => 
            <Marker position={[society.latitude, society.longitude]}
                    icon={icon}>
              <Popup>
                <p className={ mapStyles.popupSocietyName }>{society.name}</p>
              </Popup>
            </Marker>
          )}

          <MapAdjustments selectedSociety={selectedSociety} defaultMapConfig={initialState}/>
        </MapContainer>
      </div>
    )
  }
}
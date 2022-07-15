import React, { useEffect, useState, useRef } from 'react'
import Helmet from 'react-helmet'
import { MapContainer, TileLayer, Marker, Popup, useMap, useLeafletContext } from 'react-leaflet'
import * as mapStyles from './map.module.scss'
import '../styles/leaflet.css'
import * as L from 'leaflet'
import MapAdjustments from './mapAdjustments'

export default function Map(props) {
  const initialState = {
    lat: 54.927,
    lng: -3.638,
    zoom: 6.2
  }

  const icon = L.icon({
    iconUrl: '/images/iups-icon.png',
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
    console.log("selected: "+props.selected)

    console.log("Society List Count: "+societyList.length)

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
              {society.name}
            </Popup>
          </Marker>
        )}

        <MapAdjustments selectedSociety={selectedSociety}/>
      </MapContainer>
    </div>
  )
}
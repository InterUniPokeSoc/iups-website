import React, { useEffect, useState, useRef } from 'react'
import Helmet from 'react-helmet'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import * as mapStyles from './map.module.scss'
import '../styles/leaflet.css'

export default function Map(props) {
  const initialState = {
    lat: 54.927,
    lng: -3.638,
    zoom: 6.2
  }

  const [mapParams, setMapParams] = useState(initialState)

  const [mapView, setMapView] = useState(
    document.getElementById('main-map')
  )

  const [societyList, setSocietyList] = useState(props.societyList)

  const [mapObject, setMap] = useState()

  var mapContainer = useRef(null)

  /*
   Generate Map
  */
  useEffect(() => {

    var mapObject = document.getElementById('main-map')

    setMap(mapObject)
  }, [])
  
  /*
   Handle Society Selection from Sidebar
  */
  useEffect(() => {
    var society = props.societyList[props.selected]

    // guard
    if (society == null || society.longitude == null || society.latitude == null) { return }

    
  }, [props.selected])


  /*
   Add Markers to Map on update of the Society List
  */
  useEffect(() => {
    setSocietyList(props.societyList)

    if (mapObject != null && mapObject != undefined) {
      
      // markerList.forEach((marker) => {
      //   marker.remove()
      //   mapObject.removeLayer(marker)
      // })

      // for (var i = 0; i < markerFeatures.length; i++) {
      //   // markerFeatures[i].remove()
      // }

      Object.values(props.societyList).map((society) => {

      })

      // markerList.push(marker)
    }
  }, [props.societyList, mapObject])

  return (
    <div>
      <MapContainer id="main-map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  )
}
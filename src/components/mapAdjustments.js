import React, { useEffect, useState, useRef } from 'react'
import Helmet from 'react-helmet'
import { MapContainer, TileLayer, Marker, Popup, useMap, useLeafletContext } from 'react-leaflet'
import * as mapStyles from './map.module.scss'
import * as L from 'leaflet'

export default function MapAdjustments(props) {
  const map = useMap()

  const [resetMap, setResetMap] = useState(false)

  function showResetButton(show) {
    var resetButton = document.getElementById(mapStyles.mapResetButton)
    resetButton.style.visibility = show ? "visible" : "hidden"
    resetButton.style.opacity = show ? 1 : 0
  }

  /*
   Handle Society Selection from Sidebar
  */
  useEffect(() => {
    var society = props.selectedSociety

    if (society == null || society.longitude == null || society.latitude == null) { return }

    map.flyTo([society.latitude, society.longitude], 12)

    showResetButton(true)
  }, [props.selectedSociety])

  useEffect(() => {
    setResetMap(false)
    var mapConfig = props.defaultMapConfig
    if (mapConfig == null) { return }

    showResetButton(false)

    map.flyTo([mapConfig.lat, mapConfig.lng], mapConfig.zoom)
  }, [resetMap])

  return (
      <a id={mapStyles.mapResetButton} onClick={e => setResetMap(true)}>Reset Map</a>
  )
}
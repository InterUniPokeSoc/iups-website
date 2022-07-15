import React, { useEffect, useState, useRef } from 'react'
import Helmet from 'react-helmet'
import { MapContainer, TileLayer, Marker, Popup, useMap, useLeafletContext } from 'react-leaflet'
import * as mapStyles from './map.module.scss'
import * as L from 'leaflet'

export default function MapAdjustments(props) {
  const map = useMap()

  const [societyList, setSocietyList] = useState(props.societyList)

  /*
   Handle Society Selection from Sidebar
  */
  useEffect(() => {
    console.log("Intended Function Hit: "+props.selectedSociety)

    var society = props.selectedSociety

    if (society == null || society.longitude == null || society.latitude == null) { return }

    map.flyTo([society.latitude, society.longitude], 12)
  }, [props.selectedSociety])

  useEffect(() => {
    var society = props.selectedSociety

    if (society == null || society.longitude == null || society.latitude == null) { return }

    map.flyTo([society.latitude, society.longitude], 12)
  }, [props.societyList])
}
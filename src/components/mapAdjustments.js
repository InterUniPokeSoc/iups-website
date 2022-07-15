import React, { useEffect, useState, useRef } from 'react'
import Helmet from 'react-helmet'
import { MapContainer, TileLayer, Marker, Popup, useMap, useLeafletContext } from 'react-leaflet'
import * as mapStyles from './map.module.scss'
import * as L from 'leaflet'

export default function MapAdjustments(props) {
  const map = useMap()

  /*
   Handle Society Selection from Sidebar
  */
  useEffect(() => {
    var society = props.selectedSociety

    if (society == null || society.longitude == null || society.latitude == null) { return }

    map.flyTo([society.latitude, society.longitude], 12)
  }, [props.selectedSociety])
}
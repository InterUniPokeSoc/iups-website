import React, { useEffect, useState, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as mapStyles from './map.module.scss'
import { getSocieties } from "../utils/societies"

mapboxgl.accessToken = process.env.GATSBY_MAPBOX_KEY

export default function Map(props) {
  const initialState = {
    lng: -3.638,
    lat: 53.927,
    zoom: 5.2
  }

  const [mapParams, setMapParams] = useState(initialState)

  const [societyList, setSocietyList] = useState(props.societyList)

  const [mapObject, setMap] = useState()

  var mapContainer = useRef(null)

  useEffect(() => {
    var map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [mapParams.lng, mapParams.lat],
      zoom: mapParams.zoom,
    });

    setMap(map)
  }, [])

  useEffect(() => {
    var society = props.societyList[props.selected]

    if (society != null && society.longitude != null && society.latitude != null) {
      mapObject.flyTo({
        center: [society.longitude, society.latitude],
        zoom: 8
      })
    }
  }, [props.selected])

  useEffect(() => {
    setSocietyList(props.societyList)

    if (mapObject != null && mapObject != undefined) {
      Object.values(props.societyList).map((society) => {
        const marker1 = new mapboxgl.Marker()
          .setLngLat([society.longitude, society.latitude])
          .setPopup(new mapboxgl.Popup().setHTML("<h1>"+society.name+"</h1>"))
          .addTo(mapObject);
      });
    }
  }, [props.societyList, mapObject])

  return (
    <div>
      <div ref={el => mapContainer = el} className={mapStyles.mapContainer} />
    </div>
  )
}
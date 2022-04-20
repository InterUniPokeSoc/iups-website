import React, { useEffect, useState, useRef } from 'react'
import OLMap from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import SourceVector from 'ol/source/Vector'
import LayerVector from 'ol/layer/Vector'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import {transform} from 'ol/proj'
import Style from 'ol/style/Style'
import Icon from 'ol/style/Icon'
import * as mapStyles from './map.module.scss'
import { getSocieties } from "../utils/societies"
import { map } from '@firebase/util'

export default function Map(props) {
  const initialState = {
    lat: 54.927,
    lng: -3.638,
    zoom: 6.2
  }

  const [mapParams, setMapParams] = useState(initialState)

  const [societyList, setSocietyList] = useState(props.societyList)

  const [mapObject, setMap] = useState()

  var mapContainer = useRef(null)

  var markerList = []

  useEffect(() => {
    var map = new OLMap({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: transform([mapParams.lng, mapParams.lat], 'EPSG:4326', 'EPSG:3857'),
        zoom: mapParams.zoom
      })
    });

    setMap(map)
  }, [])

  useEffect(() => {
    var society = props.societyList[props.selected]

    if (society != null && society.longitude != null && society.latitude != null) {
      // mapObject.flyTo({
      //   center: [society.longitude, society.latitude],
      //   zoom: 8
      // })
    }
  }, [props.selected])

  useEffect(() => {
    setSocietyList(props.societyList)

    if (mapObject != null && mapObject != undefined) {
      
      // markerList.forEach((marker) => {
      //   marker.remove()
      //   mapObject.removeLayer(marker)
      // })

      for (var i = 0; i < markerList.length; i++) {
        markerList[i].remove()
      }

      markerList = [] // reset list

      const markerIcon = new Icon({
        src: 'https://github.com/openlayers/openlayers/blob/v3.20.1/examples/resources/logo-70x70.png'
      })

      Object.values(props.societyList).map((society) => {
        const markerGeometry = new Point(transform([society.lng, society.lat], 'EPSG:4326', 'EPSG:3857'))

        var markerFeature = new Feature({
          geometry: markerGeometry,
          style: new Style({ image: markerIcon })
        })

        var vectorSource = new SourceVector({
          features: [markerFeature]
        })

        var markerLayer = new LayerVector({
          title: society.name,
          visible: true,
          source: vectorSource
        })

        mapObject.addLayer(markerLayer)

        // markerList.push(marker)
      })
    }
  }, [props.societyList, mapObject])

  return (
    <div>
      <div id="map" className={mapStyles.mapContainer} />
    </div>
  )
}
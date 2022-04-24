import React, { useEffect, useState, useRef } from 'react'
import OLMap from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import SourceVector from 'ol/source/Vector'
import LayerVector from 'ol/layer/Vector'
import Overlay from 'ol/Overlay'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import {transform, toLonLat, fromLonLat} from 'ol/proj'
import Style from 'ol/style/Style'
import Icon from 'ol/style/Icon'
import {toStringHDMS} from 'ol/coordinate'
import '../styles/olmaps.scss'
import * as mapStyles from './map.module.scss'

export default function Map(props) {
  const initialState = {
    lat: 54.927,
    lng: -3.638,
    zoom: 6.2
  }

  const [mapParams, setMapParams] = useState(initialState)

  const [mapView, setMapView] = useState(
    new View({
      center: transform([mapParams.lng, mapParams.lat], 'EPSG:4326', 'EPSG:3857'),
      zoom: mapParams.zoom
    })
  )

  const [societyList, setSocietyList] = useState(props.societyList)

  const [mapObject, setMap] = useState()

  var mapContainer = useRef(null)

  // var markerFeatures = useRef([])

  var overlay
  var container
  var content
  var closer

  /*
   Generate Map
  */
  useEffect(() => {
    container = document.getElementById('popup')
    content = document.getElementById('popup-content')
    closer = document.getElementById('popup-closer')

    overlay = new Overlay({
      element: container,
      width: 100,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    })

    var map = new OLMap({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        }),
      ],
      overlays: [overlay],
      view: mapView,
    });

    console.log(content)

    map.on('singleclick', function (evt) {
      console.log("CLICKED!!!")
      const coordinate = evt.coordinate;
      const hdms = toStringHDMS(toLonLat(coordinate));
    
      content.innerHTML = '<p>You clicked here:</p><code>' + hdms + '</code>';
      overlay.setPosition(coordinate);
    })

    closer.onclick = function () {
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    }

    setMap(map)
  }, [mapView])
  
  /*
   Handle Society Selection from Sidebar
  */
  useEffect(() => {
    var society = props.societyList[props.selected]

    if (society != null && society.longitude != null && society.latitude != null) {
      const societyGeometry = fromLonLat([society.longitude, society.latitude])

      mapView.animate({
        center: societyGeometry,
        zoom: mapParams.zoom + 3,
        duration: 2000,
      })
    }
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

      var markerFeatures = [] // reset list

      Object.values(props.societyList).map((society) => {
        const markerGeometry = new Point(transform([society.longitude, society.latitude], 'EPSG:4326', 'EPSG:3857'))

        markerFeatures.push(
          new Feature({
            geometry: markerGeometry,
            name: society.name,
          })
        )
      })

      var layer = new LayerVector({
        source: new SourceVector({
            features: markerFeatures,
        }),
        style: new Style ({
          image: new Icon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'images/iups-marker.png',
            scale: 0.9,
          })
        })
      })
      mapObject.addLayer(layer)

      // markerList.push(marker)
    }
  }, [props.societyList, mapObject])

  return (
    <div>
      <div id="map" className={mapStyles.mapContainer} />
      <div id="popup" className="ol-popup">
      <a href="#" id="popup-closer" className="ol-popup-closer"></a>
      <div id="popup-content"></div>
    </div>
    </div>
  )
}
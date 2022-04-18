import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as mapStyles from './map.module.scss';
import { getSocieties } from "../utils/societies";

mapboxgl.accessToken = process.env.GATSBY_MAPBOX_KEY;

export default function Map(props) {
  const initialState = {
    lng: -3.638,
    lat: 53.927,
    zoom: 5.2
  }

  const [mapParams, setMapParams] = useState(initialState);

  var mapContainer = useRef(null)

  // handleChange = e => {
  //   setMapParams({
  //     lng: e.target.values
  //   })
  // }

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [mapParams.lng, mapParams.lat],
      zoom: mapParams.zoom,
    });

    var societies = [];

    getSocieties().then((dbList) => {
      console.log(dbList);
      Object.values(dbList).map((society) => {
  
        societies.push([
          society.name,
          society.longitude,
          society.latitude
        ]);

        const marker1 = new mapboxgl.Marker()
          .setLngLat([society.longitude, society.latitude])
          .setPopup(new mapboxgl.Popup().setHTML("<h1>"+society.name+"</h1>"))
          .addTo(map);
      });
  
    }).catch((e) => {});
  }, [])

  return (
    <div>
      <div ref={el => mapContainer = el} className={mapStyles.mapContainer} />
    </div>
  )
}
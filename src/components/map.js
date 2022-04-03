import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as mapStyles from './map.module.scss';
import { getSocieties } from "../utils/societies";

mapboxgl.accessToken = process.env.GATSBY_MAPBOX_KEY;

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lng: -3.638,
      lat: 53.927,
      zoom: 5.2
    };

    this.selectedSociety = props.selectedSociety
  }

  componentDidUpdate() {
    console.log("Selected Society: " + this.props.selectedSociety)
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
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

  }

  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el} className={mapStyles.mapContainer} />
      </div>
    )
  }
}

export default Map;
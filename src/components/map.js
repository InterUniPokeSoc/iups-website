import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as mapStyles from './map.module.scss';

mapboxgl.accessToken = process.env.GATSBY_MAPBOX_KEY;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -73.824200,
      lat: 45.429166,
      zoom: 17
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    const marker1 = new mapboxgl.Marker()
      .setLngLat([-1.4875136, 53.3811227])
      .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
      .addTo(map);

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
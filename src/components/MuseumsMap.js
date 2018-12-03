import React from 'react';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import { getMuseumImage } from '../getters';
import { YANDEX_MAP_API } from '../env';

export class MuseumsMap extends React.Component {
  getMarkers = () => {
    return this.props.museums.map((museum) => {
      let markerStyle = {
        borderRadius: 12,
        boxSizing: 'border-box',
        border: '5px solid #333',
        overflow: 'hidden',
        width: 84,
        height: 84
      }

      return (
        <Marker key={museum.id} lat={55.75} lon={37.57} onClick={() => this.props.onMuseumClick(museum.id)}>
          <MarkerLayout>
            <img src={getMuseumImage(museum.id)} style={markerStyle} alt="marker_icon"/>
          </MarkerLayout>
        </Marker>
      )
    })
  }

  render() {
    return (
      <Map loadOptions={{lang: 'en_RU', apikey: YANDEX_MAP_API}}
           width={window.innerWidth}
           height={window.innerHeight/2}
           center={[55.75, 37.57]}
           zoom={10}>
        {this.getMarkers()}
      </Map>
    )
  }
}


export default MuseumsMap;

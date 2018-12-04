import React from 'react';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import { YANDEX_MAP_API } from '../env';
import MuseumIcon from './MuseumIcon';

export class MuseumsMap extends React.Component {
  getMarkers = () => {
    return this.props.museums.map((museum) => {
      return (
        <Marker key={museum.id} lat={museum.lat} lon={museum.lng} onClick={() => !museum.locked && this.props.onMuseumClick(museum.id)}>
          <MarkerLayout>
            <MuseumIcon disable={museum.locked}/>
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
           center={[59.943569, 30.277656]}
           zoom={12}>
        {this.getMarkers()}
      </Map>
    )
  }
}


export default MuseumsMap;

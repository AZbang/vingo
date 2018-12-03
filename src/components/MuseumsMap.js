import React from 'react';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import { YANDEX_MAP_API } from '../env';
import AchievementItem from './AchievementItem';
import icon from '../assets/classical-building-ios.png';

export class MuseumsMap extends React.Component {
  getMarkers = () => {
    return this.props.museums.map((museum) => {
      return (
        <Marker key={museum.id} lat={55.75} lon={37.57} onClick={() => this.props.onMuseumClick(museum.id)}>
          <MarkerLayout>
            <AchievementItem data={{icon: (<img alt='icon' width='40px' style={{marginTop: 15}} src={icon}/>)}}></AchievementItem>
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

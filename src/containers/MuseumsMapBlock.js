import React from 'react';
import {connect} from 'react-redux';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import {GOOGLE_MAP_API} from '../env';

export class MuseumsMapBlock extends React.Component {
  render() {
    return (
      <div className="museums-map-block">
        <h1 className="label" style={{width: 240}}>Музеи поблизости</h1>
        <Map google={this.props.google} zoom={14}/>
      </div>
    )
  }
}

let component = GoogleApiWrapper({
  apiKey: GOOGLE_MAP_API
})(MuseumsMapBlock);

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(component);

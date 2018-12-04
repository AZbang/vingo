import React from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import MuseumsMap from '../components/MuseumsMap';

export class MuseumsMapBlock extends React.Component {
  openPlayground = (id) =>
    this.props.dispatch(push('/playground', {museumId: id}));

  render() {
    return (
      <div className="museums-map-block" style={{position: 'relative', paddingTop: 30}}>
        <h1 className="label" style={{position: 'absolute', top: -15, zIndex: 1000, width: 240}}>Музеи поблизости</h1>
        <MuseumsMap museums={this.props.museums} onMuseumClick={this.openPlayground}></MuseumsMap>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    museums: state.data.museums
  }
}

export default connect(mapStateToProps)(MuseumsMapBlock);

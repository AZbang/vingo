import React from 'react';
import {connect} from 'react-redux';
import {View, Panel} from '@vkontakte/vkui';
import {fetchMuseum, toogleTabbar} from '../actions';
import {getMuseum} from '../getters';
import Camera from '../components/Camera';
import ChipPanel from '../components/ChipPanel';

class PlaygroundView extends React.Component {
  componentDidMount() {
    this.props.dispatch(toogleTabbar(false));
    this.props.dispatch(fetchMuseum(this.props.museumId));
  }

  componentWillUnmount() {
    this.props.dispatch(toogleTabbar(true));
  }

  // WIP
  onStream = (img) => {
    // this.props.dispatch(predictItem(img));
  }

  render = () => (
    <View id={this.props.id} activePanel={this.props.id}>
      <Panel id={this.props.id}>
        <Camera onStream={this.onStream}/>
        <ChipPanel position="top" size={12}>
          <span style={{fontSize: 13, fontWeight: 600}}>Отсканируйте картину, чтобы начать игру</span>
        </ChipPanel>
        <ChipPanel position="bottom" size={12} style={{textAlign: 'left', padding: '24px 15px 15px'}}>
          <span style={{fontSize: '2em', fontWeight: 800}}>{this.props.museum.name}</span>
        </ChipPanel>
      </Panel>
    </View>
  )
}

function mapStateToProps(state) {
  let id = state.router.location.state.museumId;
  return {
    museumId: id,
    museum: getMuseum(state, id) || {},
    predictItem: state.data.predictItem
  }
}

export default connect(mapStateToProps)(PlaygroundView);

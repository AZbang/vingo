import React from 'react';
import {connect} from 'react-redux';
import {View, Panel} from '@vkontakte/vkui';
import {fetchMuseum} from '../actions';
import Camera from '../components/Camera';
import ChipPanel from '../components/ChipPanel';

class PlaygroundView extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMuseum(this.props.museumId));
  }

  render = () => (
    <View id={this.props.id} activePanel={this.props.id}>
      <Panel id={this.props.id}>
        <ChipPanel position="top">Отсканируйте картину, чтобы начать игру</ChipPanel>
        <Camera/>
      </Panel>
    </View>
  )
}

function mapStateToProps(state) {
  return {
    museumId: state.router.location.state.museumId
  }
}

export default connect(mapStateToProps)(PlaygroundView);

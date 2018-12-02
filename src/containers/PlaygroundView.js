import React from 'react';
import {connect} from 'react-redux';
import {View, Panel} from '@vkontakte/vkui';

import {fetchMuseum} from '../actions';

class PlaygroundView extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMuseum(0));
  }

  render = () => (
    <View id={this.props.id} activePanel={this.props.id}>
      <Panel id={this.props.id}>
      </Panel>
    </View>
  )
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(PlaygroundView);

import React from 'react';
import {connect} from 'react-redux';
import {View, Panel} from '@vkontakte/vkui';

import {getItem} from '../getters';
import {toogleTabbar} from '../actions';
import StoryCard from '../components/StoryCard';

class StoryView extends React.Component {
  componentDidMount() {
    this.props.dispatch(toogleTabbar(false));
  }

  componentWillUnmount() {
    this.props.dispatch(toogleTabbar(true));
  }

  render = () => (
    <View id={this.props.id} activePanel={this.props.id}>
      <Panel id={this.props.id}>
        <div style={{position: 'fixed', top: 0, width: '100vw', height: '100vh'}}>
          <StoryCard data={this.props.item}></StoryCard>
        </div>
      </Panel>
    </View>
  )
}

function mapStateToProps(state) {
  return {
    item: getItem(state, state.router.location.state ? state.router.location.state.itemId : null) || {}
  }
}
export default connect(mapStateToProps)(StoryView);

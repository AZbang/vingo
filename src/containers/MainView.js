import React from 'react';
import {connect} from 'react-redux';
import {View, Panel} from '@vkontakte/vkui';
import VingoHeader from '../components/VingoHeader';
import StoriesBlock from './StoriesBlock';

class MainView extends React.Component {
  render = () => (
    <View id={this.props.id} activePanel={this.props.id}>
      <Panel id={this.props.id}>
        <VingoHeader/>
        <StoriesBlock/>
      </Panel>
    </View>
  )
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(MainView);

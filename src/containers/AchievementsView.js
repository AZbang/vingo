import React from 'react';
import {connect} from 'react-redux';
import {View, Panel} from '@vkontakte/vkui';
import VingoHeader from '../components/VingoHeader';

class AchievementsView extends React.Component {
  render = () => (
    <View id={this.props.id} activePanel={this.props.id}>
      <Panel id={this.props.id}>
        <VingoHeader></VingoHeader>
        <h1 className="label" style={{marginTop: 20}}>Ваши достижения</h1>
      </Panel>
    </View>
  )
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(AchievementsView);

import React from 'react';
import {View, Panel} from '@vkontakte/vkui';
import {inject, observer} from 'mobx-react';
import {EmptySection} from '../shared';
import icon from '../assets/sports-medal.png';

@inject('routing', 'app') @observer
class AchievementsView extends React.Component {
  render() {
    return (
      <View id={this.props.id} activePanel={this.props.id}>
        <Panel id={this.props.id}>
          <EmptySection icon={icon} text="Исследуйте музеи, чтобы получать достижения!"/>
        </Panel>
      </View>
    )
  }
}

export default AchievementsView;

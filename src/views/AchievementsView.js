import React from 'react';
import {View, Panel} from '@vkontakte/vkui';
import {inject, observer} from 'mobx-react';
import {EmptySection, CardContainer} from '../shared';
import icon from '../assets/emoji/sports-medal.png';

@inject('routing', 'app') @observer
class AchievementsView extends React.Component {
  render() {
    return (
      <View id={this.props.id} activePanel={this.props.id} header={true}>
        <Panel id={this.props.id}>
          <CardContainer title="Ваши достижения">
            <EmptySection icon={icon} text="Исследуйте музеи, чтобы получать достижения!"/>
          </CardContainer>
        </Panel>
      </View>
    )
  }
}

export default AchievementsView;

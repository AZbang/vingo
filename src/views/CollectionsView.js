import React from 'react';
import {View, Panel} from '@vkontakte/vkui';
import {inject, observer} from 'mobx-react';
import {EmptySection, CardContainer} from '../shared';
import icon from '../assets/emoji/card-file-box.png';

@inject('routing', 'app') @observer
class CollectionsView extends React.Component {
  render() {
    return (
      <View id={this.props.id} activePanel={this.props.id} header={true}>
      <Panel id={this.props.id}>
        <CardContainer title="Ваши достижения">
          <EmptySection icon={icon} text="Посетите музей, чтобы собрать Вашу первую коллекцию!"/>
        </CardContainer>
      </Panel>
      </View>
    )
  }
}

export default CollectionsView;

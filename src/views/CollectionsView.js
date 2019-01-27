import React from 'react';
import {View, Panel} from '@vkontakte/vkui';
import {inject, observer} from 'mobx-react';
import {EmptySection} from '../shared';
import icon from '../assets/card-file-box.png';

@inject('routing', 'app') @observer
class CollectionsView extends React.Component {
  render() {
    return (
      <View id={this.props.id} activePanel={this.props.id}>
        <Panel id={this.props.id}>
          <EmptySection icon={icon} text="Посетите музей, чтобы собрать Вашу первую коллекцию!"/>
        </Panel>
      </View>
    )
  }
}

export default CollectionsView;

import React from 'react';
import {View, Panel} from '@vkontakte/vkui';
import {Camera, ChipPanel} from '../shared';

@inject('app', 'routing', 'museum') @observer
class PlaygroundView extends React.Component {
  componentDidMount() {
    this.props.app.toogleTabbar(false);
    this.props.app.toggleStream(true);
    this.props.app.loadMuseum(this.props.museumId);
  }

  componentWillUnmount() {
    this.props.app.toogleTabbar(true);
    this.props.app.toogleTabbar(false);
  }

  onSnapshot = (img) => {
    this.props.model
  }

  render = () => (
    <View id={this.props.id} activePanel={this.props.id}>
      <Panel id={this.props.id}>
        <Camera/>
        <ChipCard
          top mini
          fitText="Наведите камеру на картину, чтобы начать игру"
        />
        <ChipCard
          bottom block downed
          header="ГЛАВНЫЙ ШТАБ ЭРМИТАЖА"
        />
      </Panel>
    </View>
  )
}

export default PlaygroundView;

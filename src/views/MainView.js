import React from 'react';
import {inject, observer} from 'mobx-react';
import {View, Panel} from '@vkontakte/vkui';
import {MuseumsList, StoriesList} from '../components';
import {AppHeader} from '../shared';

@inject('app', 'stories') @observer
class MainView extends React.Component {
  componentDidMount() {
    this.props.stories.load();
    this.props.app.loadMuseums();
  }

  render() {
    return (
      <View id={this.props.id} activePanel={this.props.id}>
        <Panel id={this.props.id}>
          <AppHeader title="Vingo"/>
          <StoriesList stories={this.props.stories.stories}/>
          <h1 className="label">Посетить музей</h1>
          <MuseumsList museums={this.props.app.museums}/>
        </Panel>
      </View>
    )
  }
}

export default MainView;

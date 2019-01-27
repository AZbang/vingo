import React, {Fragment} from 'react';
import {inject, observer} from 'mobx-react';
import {View, Panel} from '@vkontakte/vkui';
import { Camera, ChipCard } from '../shared';
import {Emoji} from 'emoji-mart'

import {MuseumsList, StoriesList} from '../components';
import {AppHeader} from '../shared';

@inject('museums', 'stories') @observer
class MainView extends React.Component {
  componentDidMount() {
    this.props.stories.count || this.props.stories.load();
    this.props.museums.count || this.props.museums.load();
  }

  pushController = () => {
    return (
      <Fragment>
        <ChipCard bottom show type="block"
          avatar={<Emoji emoji=":girl:" size={42} />}
          title="Привет, друг!"
          subtitle="Это приложение порвет тебе ебальник!"
        />
        <ChipCard bottom show type="block"
          avatar={<Emoji emoji=":man:" size={42} />}
          title="Санек пидор"
          subtitle="ЫЫыыыыыыыыыы ыыыыыыыыыыыыы"
        />
      </Fragment>
    )
  }

  render() {
    return (
      <Fragment>
        {this.pushController()}
        <View id={this.props.id} activePanel={this.props.id}>
          <Panel id={this.props.id}>
            <AppHeader title="Vingo"/>
            <StoriesList stories={this.props.stories.data}/>
            <h1 className="label">Посетить музей</h1>
            <MuseumsList museums={this.props.museums.data}/>
          </Panel>
        </View>
      </Fragment>
    )
  }
}

export default MainView;

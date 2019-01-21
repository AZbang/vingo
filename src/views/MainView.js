import React from 'react';
import {inject, observer} from 'mobx-react';
import {View, Panel} from '@vkontakte/vkui';
import {AppHeader, MuseumsList, StoriesList} from '../components';

@observer @inject('app')
class MainView extends React.Component {
  render = () => (
    <View id={this.props.id} activePanel={this.props.id}>
      <Panel id={this.props.id}>
        <AppHeader/>
        <h1 className="label">Посетить музей</h1>
        <MuseumsList museums={[{id: 0}, {id: 1}]}/>
      </Panel>
    </View>
  )
}

export default MainView;

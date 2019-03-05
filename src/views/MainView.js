import React from 'react';
import {inject, observer} from 'mobx-react';
import {View, Panel} from '@vkontakte/vkui';
import {MuseumsList, StoriesList} from '../components';
import {CardContainer} from '../shared';

@inject('museums', 'stories') @observer
class MainView extends React.Component {
  componentDidMount() {
    this.props.stories.count || this.props.stories.load();
    this.props.museums.count || this.props.museums.load();
  }

  render() {
    return (
      <View id={this.props.id} activePanel={this.props.id} header={false}>
        <Panel id={this.props.id}>
          <StoriesList stories={this.props.stories.data}/>
          <CardContainer title="Посетить музей">
            <MuseumsList/>
          </CardContainer>
        </Panel>
      </View>
    )
  }
}

export default MainView;

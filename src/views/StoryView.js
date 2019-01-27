import React from 'react';
import {View, Panel} from '@vkontakte/vkui';
import {inject, observer} from 'mobx-react';
import {StoryDesk} from '../components';

@inject('routing', 'app') @observer
class StoryView extends React.Component {
  item = this.props.routing.history.location.state.item

  componentDidMount() {
    this.props.app.toggleTabbar(false);
  }

  componentWillUnmount() {
    this.props.app.toggleTabbar(true);
  }

  goToBack = () => {
    this.props.routing.push('/main');
  }

  render() {
    return (
      <View id={this.props.id} activePanel={this.props.id}>
        <Panel id={this.props.id}>
          <StoryDesk
            onComplete={this.goToBack}
            data={this.item}/>
        </Panel>
      </View>
    )
  }
}

export default StoryView;

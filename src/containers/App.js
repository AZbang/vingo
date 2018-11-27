import React from 'react';
import {connect} from 'react-redux';

import {Root} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import MainView from './MainView';
import AchievementsView from './AchievementsView';
import PlaygroundView from './PlaygroundView';

class App extends React.Component {
  render() {
    let activeRoute = this.props.pageId || 'main';

    return (
      <Root activeView={activeRoute}>
        <MainView id="main"/>
        <AchievementsView id="achievements"/>
        <PlaygroundView id="playground"/>
      </Root>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App);

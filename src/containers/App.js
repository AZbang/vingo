import React from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router'

import {ConfigProvider, Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';
import Icon28Story from '@vkontakte/icons/dist/28/story';
import Icon28Settings from '@vkontakte/icons/dist/28/settings';
import {isWebView} from '@vkontakte/vkui/src/lib/webview';
import '@vkontakte/vkui/dist/vkui.css';

import MainView from './MainView';
import AchievementsView from './AchievementsView';
import StoriesView from './StoriesView';
import SettingsView from './SettingsView';
import PlaygroundView from './PlaygroundView';

class App extends React.Component {
  onStoryChange = (e) =>
    this.props.dispatch(push('/' + e.currentTarget.dataset.story));

  render() {
    let activeRoute = this.props.pageId || 'main';

    return (
      <ConfigProvider isWebView={isWebView}>
        <Epic activeStory={activeRoute} tabbar={
          <Tabbar>
            <TabbarItem
               onClick={this.onStoryChange}
               selected={activeRoute === 'main'}
               data-story="main"
            ><Icon28Newsfeed/></TabbarItem>
            <TabbarItem
               onClick={this.onStoryChange}
               selected={activeRoute === 'achievements'}
               data-story="achievements"
               label="2"
            ><Icon24FavoriteOutline/></TabbarItem>
            <TabbarItem
               onClick={this.onStoryChange}
               selected={activeRoute === 'stories'}
               data-story="stories"
               label="31"
            ><Icon28Story/></TabbarItem>
            <TabbarItem
               onClick={this.onStoryChange}
               selected={activeRoute === 'settings'}
               data-story="settings"
            ><Icon28Settings/></TabbarItem>
          </Tabbar>
        }>
          <MainView id="main"/>
          <AchievementsView id="achievements"/>
          <StoriesView id="stories"/>
          <SettingsView id="settings"/>
          <PlaygroundView id="playground"/>
        </Epic>
      </ConfigProvider>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App);

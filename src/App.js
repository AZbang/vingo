import React from 'react';
import {inject, observer} from 'mobx-react';

import {Root, Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';
import Icon28Story from '@vkontakte/icons/dist/28/story';
import Icon28Settings from '@vkontakte/icons/dist/28/settings';
import '@vkontakte/vkui/dist/vkui.css';

import MainView from './views/MainView';
import AchievementsView from './views/AchievementsView';
import CollectionsView from './views/CollectionsView';
import SettingsView from './views/SettingsView';
import PlaygroundView from './views/PlaygroundView';
import StoryView from './views/StoryView';

@inject('app', 'routing', 'media', 'stories') @observer
class App extends React.Component {
  componentDidMount() {
    this.props.media.getMediaStream();
  }

  onStoryChange = (e) =>
    this.props.routing.push('/' + e.currentTarget.dataset.story);

  render() {
    let activeRoute = this.props.pageId || 'main';

    return (
      <Epic activeStory="views" tabbar={
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
             label={this.props.stories.count}
          ><Icon24FavoriteOutline/></TabbarItem>
          <TabbarItem
             onClick={this.onStoryChange}
             selected={activeRoute === 'stories'}
             data-story="collections"
             label={this.props.stories.count}
          ><Icon28Story/></TabbarItem>
          <TabbarItem
             onClick={this.onStoryChange}
             selected={activeRoute === 'settings'}
             data-story="settings"
          ><Icon28Settings/></TabbarItem>
        </Tabbar>
      }>
        <Root id="views" activeView={activeRoute}>
          <MainView id="main"/>
          <AchievementsView id="achievements"/>
          <CollectionsView id="collections"/>
          <SettingsView id="settings"/>
          <PlaygroundView id="playground"/>
          <StoryView id="story"/>
        </Root>
      </Epic>
    )
  }
}

export default App;

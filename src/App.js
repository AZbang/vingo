import React from 'react';
import {inject, observer} from 'mobx-react';

import {Root, Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';
import Icon28Story from '@vkontakte/icons/dist/28/story';
import Icon28Settings from '@vkontakte/icons/dist/28/settings';
import '@vkontakte/vkui/dist/vkui.css';

import MainView from './views/MainView';
import AchievementsView from './views/MainView';
import StoriesView from './views/MainView';
import SettingsView from './views/SettingsView';
import PlaygroundView from './views/MainView';
import StoryView from './views/MainView';

@inject('app', 'routing', 'stories') @observer
class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if(this.props.app.isTabbar !== nextProps.app.isTabbar) {
      document.querySelector('.Tabbar').style.display = nextProps.app.isTabbar ? 'flex' : 'none';
    }
  }

  componentDidMount() {
    this.props.stories.load();
    this.props.app.loadMuseums();
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
             data-story="stories"
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
          <StoriesView id="stories"/>
          <SettingsView id="settings"/>
          <PlaygroundView id="playground"/>
          <StoryView id="story"/>
        </Root>
      </Epic>
    )
  }
}

export default App;

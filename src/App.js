import React, {Fragment} from 'react';
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

import {ChipCard} from './shared';
import {Emoji} from 'emoji-mart';

@inject('stories', 'routing', 'media', 'model') @observer
class App extends React.Component {
  async componentDidMount() {
    this.props.media.getMediaStream();
    await this.props.model.loadModel();
    await this.props.model.predict('./cat.jpg');
  }

  onStoryChange = (e) =>
    this.props.routing.push('/' + e.currentTarget.dataset.story);

  pushController = () => (
    <Fragment>
      <ChipCard top show type="block" swipeable
        avatar={<Emoji emoji=":fire:" size={42} />}
        title="Привет, друг!"
        subtitle="Это приложение порвет тебе ебальник!"
      />
      <ChipCard top show={this.props.model.error} type="block" swipeable
        avatar={<Emoji emoji=":cry:" size={42} />}
        title="Произошла ошибка"
        subtitle="Похоже, что Ваше устройство не поддерживает ONNX.js"
      />
      <ChipCard top show={this.props.model.loading} type="block" swipeable
        avatar={<Emoji emoji=":sleeping:" size={42} />}
        title="Загрузка..."
        subtitle="Придержите коней, сударь, моделька грузится..."
      />
      <ChipCard top show={this.props.model.ready} type="block" swipeable
        avatar={<img src="cat.jpg" />}
        title="Модель загружена"
        subtitle="Йоу, круто, давай попробуем распознать вот ето существо!"
      />
      <ChipCard top show={this.props.model.predicted} type="block" swipeable
        avatar={<Emoji emoji=":cat:" size={42} />}
        title="Ето кица"
        subtitle="Наши нейронные сети говорят, что ето кица"
      />
    </Fragment>
  )

  render() {
    let activeRoute = this.props.pageId || 'main';

    return (
      <Fragment>
        {this.pushController()}

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
      </Fragment>
    )
  }
}

export default App;

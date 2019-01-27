import React from 'react';
import {inject, observer} from 'mobx-react';
import {HorizontalScroll} from '@vkontakte/vkui';
import StoryItem from './StoryItem';
import styles from './StoriesList.module.sass';

class StoriesList extends React.Component {
  getStoriesList = (amt) => {
    const stories = this.props.stories;

    return stories.map((item, i) => (
      <div key={item.id} className={styles.storyItem}>
        <StoryItem
          data={item}
          onClick={() => this.props.openStory && this.props.openStory(item.id)}
        />
      </div>
    ));
  }

  render() {
    if(this.props.stories.length) {
      return (
        <HorizontalScroll>
          <div className={styles.storiesList}>
            {this.getStoriesList()}
          </div>
        </HorizontalScroll>
      )
    } else return null;
  }
}

export default StoriesList;

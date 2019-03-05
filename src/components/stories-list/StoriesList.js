import React from 'react';
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
    return (
      <div className={styles.wrap}>
        <HorizontalScroll>
          <div className={styles.storiesList}>
            {this.getStoriesList()}
          </div>
        </HorizontalScroll>
      </div>
    )
  }
}

export default StoriesList;

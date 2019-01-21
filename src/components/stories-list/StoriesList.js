import React from 'react';
import {HorizontalScroll} from '@vkontakte/vkui';
import StoryCard from './StoryCard';
import styles from './Stories.sass';

class StoriesList extends React.Component {
  static defaultProps = {
    stories: [],
    openStory: () => {},
  }
  static propTypes = {
    stories: propTypes.array,
    openStory: propTypes.func,
  }

  getStoriesList = (amt) => {
    const stories = this.props.stories;

    return stories.map((item, i) => (
      <div key={item.id} className={styles.story} style={{paddingRight: i < stories.length-1 ? 10 : 20}}>
        <StoryCard
          data={item}
          onClick={() => this.props.openStory(item.id)}
        />
      </div>
    ));
  }

  render() {
    return (
      <HorizontalScroll>
        <div className={styles.stories}>
          {this.getStoriesList()}
        </div>
      </HorizontalScroll>
    )
  }
}

export default StoriesList;

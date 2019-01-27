import React from 'react';
import {Motion, spring, presets} from 'react-motion';
import styles from './StoryItem.module.sass';

class StoryCard extends React.Component {
  render() {
    return (
      <Motion
        defaultStyle={{opacity: -10}}
        style={{
          opacity: spring(1)
        }}>
        {({opacity}) =>
          <div className={styles.storyCard}
               onClick={this.props.onClick}
               style={{
                 backgroundImage: 'url(' + this.props.data.image  + ')',
                 opacity,
               }}
          ></div>
        }
      </Motion>
    )
  }
}

export default StoryCard;

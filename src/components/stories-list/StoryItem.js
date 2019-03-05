import React from 'react';
import {Motion, spring} from 'react-motion';
import {Link} from 'react-router-dom'
import {Emoji} from 'emoji-mart';
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
          <Link to={{
            pathname: '/story',
            state: { item: {...this.props.data} }
          }}>
            <div className={styles.storyCard}
              onClick={this.props.onClick}
              style={{
                backgroundImage: 'url(' + this.props.data.image  + ')',
                opacity,
              }}
            >
              <Emoji className={styles.emoji} emoji=":girl:" size={42} />
            </div>
          </Link>
        }
      </Motion>
    )
  }
}

export default StoryCard;

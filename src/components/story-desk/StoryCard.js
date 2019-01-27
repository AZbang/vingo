import React from 'react';
import styles from './StoryCard.module.sass';

class StoryCard extends React.Component {
  static defaultProps = {
    cover: null,
    story: null
  }

  render() {
    return (
      <div
        onClick={this.props.onClick}
        className={styles.card}
        style={{backgroundImage: 'url(' + this.props.cover + ')'}}>
        <p className={styles.story}>{this.props.story}</p>
      </div>
    )
  }
}

export default StoryCard;

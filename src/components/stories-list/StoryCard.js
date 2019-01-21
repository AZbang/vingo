import React from 'react';
import styles from './Stories.sass';

class StoryCard extends React.Component {
  static defaultProps = {
    data: {},
  }
  static propTypes = {
    data: propTypes.object.isRequired,
  }

  render() {
    return (
      <div className={styles.story}
           onClick={this.props.onClick}
           style={{backgroundImage: 'url(' + this.props.data.image  + ')'}}
      ></div>
    )
  }
}

export default StoryCard;

import React from 'react';
import {DB_PATH} from '../env';
import './StoryCard.css';

class StoryPreview extends React.Component {
  render() {
    return (
      <div className="story-preview"
           onClick={this.props.onClick}
           style={{backgroundImage: 'url(' + DB_PATH + 'hermetage_general_building/items/' + this.props.data.image + ')'}}
      ></div>
    )
  }
}

export default StoryPreview;

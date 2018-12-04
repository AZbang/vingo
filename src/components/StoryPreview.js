import React from 'react';
import {DB_PATH} from '../env';
import './StoryPreview.css';

class StoryPreview extends React.Component {
  render() {
    return (
      <div className="story-preview"
           style={{backgroundImage: 'url(' + DB_PATH + 'hermetage_general_building/' + this.props.data.image + ')'}}
      ></div>
    )
  }
}

export default StoryPreview;

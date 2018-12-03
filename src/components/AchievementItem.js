import React from 'react';
import './AchievementItem.css';

class AchievementItem extends React.Component {
  render() {
    return (
      <div className='achievement-item'>
        {this.props.data.icon}
      </div>
    )
  }
}

export default AchievementItem;

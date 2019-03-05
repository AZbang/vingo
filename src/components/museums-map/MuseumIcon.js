import React from 'react';
import './MuseumIcon.css';
import icon1 from '../assets/emoji/classical-building-ios.png';
import icon2 from '../assets/emoji/classical-building-android.png';

class MuseumIcon extends React.Component {
  render() {
    return (
      <div className='museum-icon'>
        <img className='museum-icon__image' alt='icon'
            style={{filter: this.props.disable ? 'grayscale()' : 'none'}}
            src={Math.random() < .5 ? icon1 : icon2}/>
      </div>
    )
  }
}

export default MuseumIcon;

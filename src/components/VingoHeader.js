import React from 'react';
import logo from '../assets/icon.png'
import './VingoHeader.css';

class VingoHeader extends React.Component {
  render() {
    return (
      <div className="vingo-header">
        <img alt="logo" src={logo} className="vingo-header__icon"/>
        <span className="vingo-header__name">VINGO</span>
      </div>
    )
  }
}

export default VingoHeader;

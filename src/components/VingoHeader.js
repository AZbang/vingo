import React from 'react';
import {PanelHeader} from '@vkontakte/vkui';
import logo from '../assets/icon.png'
import './VingoHeader.css';

class VingoHeader extends React.Component {
  render() {
    return (
      <PanelHeader noShadow left={<img alt="logo" src={logo} className="vingo-header__icon"/>}>
        <span className="vingo-header__name">VINGO</span>
      </PanelHeader>
    )
  }
}

export default VingoHeader;

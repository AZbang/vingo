import React from 'react';
import logo from '../../assets/icon.png'
import styles from './AppHeader.module.sass';

class AppHeader extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <img alt="logo" src={logo} className={styles.icon}/>
        <span className={styles.title}>VINGO</span>
      </div>
    )
  }
}

export default AppHeader;

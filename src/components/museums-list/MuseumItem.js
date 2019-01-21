import React from 'react';
import {Div, Button} from '@vkontakte/vkui';
import styles from './MuseumItem.module.sass';
import icon from '../../assets/classical-building-ios.png';

class MuseumItem extends React.Component {
  render() {
    return (
      <Div className={styles.item}>
        <Div style={{display: 'flex'}}>
          <img className={styles.icon} alt='icon' src={icon}/>
          <Div className={styles.info}>
            <h1 className={styles.title}></h1>
            <p className={styles.description}></p>
          </Div>
        </Div>
        <div style={{display: 'flex'}}>
          <Button size="xl" level="secondary" style={{ marginRight: 8 }}>ПОСЕТИТЬ</Button>
          <Button size="xl" level="secondary">АЧИВКИ</Button>
        </div>
      </Div>
    )
  }
}

export default MuseumItem;

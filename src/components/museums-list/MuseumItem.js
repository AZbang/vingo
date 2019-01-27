import React from 'react';
import {Div, Button} from '@vkontakte/vkui';
import {Link} from 'react-router-dom'
import {Emoji} from 'emoji-mart'
import {withShow} from '../../shared'
import styles from './MuseumItem.module.sass';
import icon from '../../assets/classical-building-ios.png';

class MuseumItem extends React.Component {
  render() {
    return withShow(
      <Div className={styles.item}>
        <Div style={{display: 'flex'}}>
          <img className={styles.icon} alt='icon' src={icon}/>
          <div className={styles.info}>
            <h1 className={styles.title}>{this.props.data.name}</h1>
            <p className={styles.about}>
              <Emoji emoji=":dog:" size={24} />
              <Emoji emoji=":dog:" size={24} />
              <Emoji emoji=":dog:" size={24} />
              <Emoji emoji=":dog:" size={24} />
              <span className={styles.badge}>+20</span>
            </p>
          </div>
        </Div>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <Link to={'/playground?museum=' + this.props.data.id}>Посетить</Link>
          </div>
          <div className={styles.button}>
            <Link to={'/museum?id=' + this.props.data.id}>Достижения</Link>
          </div>
        </div>
      </Div>
    )
  }
}

export default MuseumItem;

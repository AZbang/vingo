import React from 'react';
import {Div} from '@vkontakte/vkui';
import {Link} from 'react-router-dom'
import {withShow} from '../../shared'
import styles from './MuseumItem.module.sass';

class MuseumItem extends React.Component {
  render() {
    return withShow(
      <Link to={'/playground?museum=' + this.props.data.id}>
        <Div className={styles.item}>
          <h1 className={styles.title}>{this.props.data.name}</h1>
        </Div>
      </Link>,
    this.props.animation)
  }
}

export default MuseumItem;

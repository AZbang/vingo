import React from 'react';
import {Div, Button} from '@vkontakte/vkui';
import {withShow} from '../index'
import styles from './EmptySection.module.sass';

class EmptySection extends React.Component {
  render() {
    return (
      <div className={styles.section}>
        {withShow(
          <img className={styles.icon} src={this.props.icon} alt="icon"/>
        )}
        <p className={styles.text}>{this.props.text}</p>
      </div>
    )
  }
}

export default EmptySection;

import React from 'react';
import {Div, Button} from '@vkontakte/vkui';
import {Motion, spring, presets} from 'react-motion';
import styles from './EmptySection.module.sass';

class EmptySection extends React.Component {
  render() {
    return (
      <div className={styles.section}>
        <Motion
          defaultStyle={{y: 300, opacity: -20}}
          style={{y: spring(0), opacity: spring(1)}}>
            {({opacity, y}) =>
              <img
                className={styles.icon}
                style={{opacity, transform: `translateY(${y}px)`}}
                src={this.props.icon} alt="icon"/>
            }
        </Motion>
        <p className={styles.text}>{this.props.text}</p>
      </div>
    )
  }
}

export default EmptySection;

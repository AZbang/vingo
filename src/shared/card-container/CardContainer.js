import React from 'react';
import styles from './CardContainer.module.sass';

class CardContainer extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{this.props.title}</h1>
        {this.props.children}
      </div>
    )
  }
}

export default CardContainer;

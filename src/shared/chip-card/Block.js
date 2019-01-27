import React from 'react';
import styles from './Block.module.sass';

class Block extends React.PureComponent {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        className={styles.block}
        style={this.props.style}>
        <div className={styles.preview}>
          {this.props.avatar &&
            <div className={styles.avatar}>
              {this.props.avatar}
            </div>
          }
          <div className={styles.content}>
            {this.props.title &&
              <div className={styles.title}>
                {this.props.title}
              </div>
            }
            {this.props.subtitle &&
              <div className={styles.subtitle}>
                {this.props.subtitle}
              </div>
            }
          </div>
        </div>
        <div className={styles.body}>
          {this.props.header &&
            <div className={styles.header}>
              {this.props.header}
            </div>
          }
          {this.props.children}
        </div>
        <div className={styles.buttons}>
          {this.props.buttons}
        </div>
      </div>
    )
  }
}

export default Block;

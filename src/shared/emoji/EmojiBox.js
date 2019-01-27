import React from 'react';

class AppHeader extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <img alt="logo" src={logo} className={styles.icon}/>
        <span className={styles.title}>{this.props.title}</span>
      </div>
    )
  }
}

export default AppHeader;

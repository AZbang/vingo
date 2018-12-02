import React from 'react';
import './ChipPanel.css';

class ChipPanel extends React.Component {
  render() {
    let style = {};
    if(this.props.position === 'top') style.top = 10;
    else if(this.props.position === 'bottom') style.bottom = 10;

    return (
      <div className="chip-panel" style={style}>
        {this.props.children}
      </div>
    )
  }
}

export default ChipPanel;

import React from 'react';
import ReactDOM from 'react-dom';
import {Motion, spring, presets} from 'react-motion';
import {withSwipeable} from '../index';

import Block from './Block';
import Mini from './Mini';
import './ChipCard.css';

class ChipCard extends React.PureComponent {
  static defaultProps = {
    top: false,
    bottom: false,
    type: 'block',
    show: true,
    swipeable: false
  }

  state = {
    closed: false
  }

  createRoot = (id) => {
    const root = document.createElement('div');
    root.id = id;
    document.body.appendChild(root);
    return root;
  }
  rootTop = document.getElementById('chip-cards-top') || this.createRoot('chip-cards-top');
  rootBottom = document.getElementById('chip-cards-bottom') || this.createRoot('chip-cards-bottom');


  componentWillUnmount() {

  }

  close = () => {
    this.props.onClose && this.props.onClose();
    this.setState({
      closed: true,
    });
  }

  render() {
    if(!this.props.show || this.state.closed) return null;

    const wrap = this.props.top ? this.rootTop : this.rootBottom;
    wrap.style.marginTop = (this.props.margin || 0) + 'px';

    const hidden = window.innerHeight/2 * (this.props.top ? -1 : 1);
    const HocBlock = this.props.swipeable ? withSwipeable(Block) : Block;

    return ReactDOM.createPortal(
      <Motion
        defaultStyle={{y: hidden, opacity: 0}}
        style={{
          y: spring(this.props.show ? 0 : hidden),
          opacity: spring(1),
        }}>
        {({y}) =>
          <div className="chip-card">
            {this.props.type === 'block' ?
              <HocBlock {...this.props}
                onClick={this.props.onClick}
                onSwiped={this.close}
                style={{...this.props.style, transform: `translateY(${y}px)`}}
              ></HocBlock> :
              <Mini {...this.props}
                style={{...this.props.style, transform: `translateY(${y}px)`}}>
              </Mini>
            }
          </div>
        }
      </Motion>,
      wrap
    );
  }
}

export default ChipCard;

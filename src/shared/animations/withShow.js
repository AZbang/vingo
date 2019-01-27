import React from 'react';
import {Motion, spring, presets} from 'react-motion';

function withShow(comp) {
  return (
    <Motion defaultStyle={{y: 300, opacity: -20}} style={{y: spring(0), opacity: spring(1)}}>
      {({opacity, y}) => (
        <div style={{opacity, transform: `translateY(${y}px)`}}>
          {comp}
        </div>
      )}
    </Motion>
  )
}

export default withShow;

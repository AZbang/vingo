import React from 'react';
import {Motion, spring} from 'react-motion';

function withShow(comp, anim) {
  const animation = anim ? {y: -300, opacity: -20} : {y: 0, opacity: 1};

  return (
    <Motion defaultStyle={animation} style={{y: spring(0), opacity: spring(1)}}>
      {({opacity, y}) => (
        <div style={{opacity, transform: `translateY(${y}px)`}}>
          {comp}
        </div>
      )}
    </Motion>
  )
}

export default withShow;

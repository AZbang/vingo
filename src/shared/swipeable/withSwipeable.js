import React from 'react'
import Swipeable from 'react-swipeable'

function withSwipeable(Component) {
  return class extends React.Component {
    el = null;

    toInitialState() {
      this.el.style.transition = 'transform .5s';
      this.el.style.transform = 'none';
      this.el.style.opacity = 1;
    }

    swiping = (e, dtX, dtY) => {
      let parent = this.el.parentNode.parentNode.getBoundingClientRect();
      let card = this.el.getBoundingClientRect();

      let hide;
      if(dtX > 0) hide = (card.x+card.width/2-parent.x+parent.width/2)/parent.width;
      else hide = parent.width/(card.x+card.width/2-parent.x+parent.width/2);

      this.el.style.opacity = hide+.3;
      this.el.style.transform = 'translateX(' + (-dtX) + 'px)';
      this.el.style.transition = 'none';
    }
    swiped = (e) => {
      this.el.style.transition = 'all .5s';

      let parent = document.body.getBoundingClientRect();
      let elRect = this.el.getBoundingClientRect();
      if(elRect.x+elRect.width/4 < parent.x) {
        this.el.style.transform = 'translateX(-500px)';
        setTimeout(() => {
          this.props.onSwiped && this.props.onSwiped('left');
        }, 500);
      } else if(elRect.x+elRect.width-elRect.width/4 > parent.x+parent.width) {
        this.el.style.transform = 'translateX(500px)';
        setTimeout(() => {
          this.props.onSwiped && this.props.onSwiped('right');
        }, 500);
      } else this.toInitialState();
    }


    render = () => (
      <Swipeable
        onSwiping={this.swiping}
        onSwiped={this.swiped}
        onSwipedLeft={this.swipedRight}
        onSwipedRight={this.swipedLeft}>
        <div ref={node => this.el = node} className="swipeable">
          <Component {...this.props}/>
        </div>
      </Swipeable>
    )
  }
}

export default withSwipeable;

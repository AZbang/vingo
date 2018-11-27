import React from 'react';
import {connect} from 'react-redux';
import {HorizontalScroll} from '@vkontakte/vkui';
import StoryPreview from '../components/StoryPreview';

class StoriesBlock extends React.Component {
  getStoriesList = (amt) => {
    let style = {
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column'
    }
    return new Array(amt).fill(0).map((v, i) => (
      <div key={i} style={{...style, paddingRight: i < amt-1 ? 10 : 20}}>
        <StoryPreview/>
      </div>
    ));
  }

  render() {
    return (
      <HorizontalScroll>
        <div style={{ display: 'flex', paddingBottom: '10px', margin: '40px 20px'}}>
          {this.getStoriesList(5)}
        </div>
      </HorizontalScroll>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(StoriesBlock);

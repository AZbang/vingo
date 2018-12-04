import React from 'react';
import {connect} from 'react-redux';
import {HorizontalScroll} from '@vkontakte/vkui';
import StoryPreview from '../components/StoryPreview';

class StoriesBlock extends React.Component {
  getStoriesList = (amt) => {
    let style = {
      flexShrink: 0,
      display: 'flex',
      width: 80,
      height: 120,
      flexDirection: 'column'
    }
    return this.props.stories.map((item, i) => (
      <div key={i} style={{...style, paddingRight: i < this.props.stories.length-1 ? 10 : 20}}>
        <StoryPreview data={item}/>
      </div>
    ));
  }

  render() {
    return (
      <HorizontalScroll>
        <div style={{display: 'flex', paddingBottom: '10px', margin: '20px'}}>
          {this.getStoriesList()}
        </div>
      </HorizontalScroll>
    )
  }
}

function mapStateToProps(state) {
  return {
    stories: state.data.stories
  }
}

export default connect(mapStateToProps)(StoriesBlock);

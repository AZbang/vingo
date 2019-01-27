import React from 'react';
import StoryCard from './StoryCard';
import styles from './StoryDesk.module.sass';

class StoryDesk extends React.Component {
  static defaultProps = {
    data: {
      image: '',
      description: ''
    },
  }

  state = {
    story: 0,
    stories: []
  }

  componentDidMount() {
    this.setState({
      stories: [this.props.data.title].concat(this.props.data.description.split('. '))
    });
  }

  nextStory = () => {
    if(this.state.story === this.state.stories.length-1) {
      return this.props.  onComplete && this.props.onComplete();
    }

    this.setState({
      story: this.state.story+1
    });
  }

  render() {
    console.log(this.state.stories);
    return (
      <div className={styles.desk}>
        <StoryCard
          onClick={this.nextStory}
          cover={this.props.data.image}
          story={this.state.stories[this.state.story]}/>
      </div>
    )
  }
}

export default StoryDesk;

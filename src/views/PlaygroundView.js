import React from 'react';
import { inject, observer } from 'mobx-react';

import { Camera, ChipCard } from '../shared';
import {Emoji} from 'emoji-mart'

@inject('media', 'app')
@observer
class Playground extends React.Component {
  state = {
    snapshot: null,
  }

  componentDidMount() {
    this.props.app.toggleTabbar(false);
  }

  componentWillUnmount() {
    this.props.app.toggleTabbar(true);
  }
  onSnapshot = (img) => {
    this.setState({
      snapshot: img.src
    })
    // this.props.model.predict(img);
  }

  cameraController = () => {
    const { media } = this.props;

    if(media.stream) {
      return <Camera
        onSnapshot={this.onSnapshot}
        stream={media.stream}
        snapshotInterval={500}
        snapshotSize={224}
      />
    }
  }

  render() {
    const { media } = this.props;

    return (
      <div className='Playground'>
        {this.cameraController()}

        <ChipCard top show textFit type="mini">
          Zoom the camera onto the flower to scan it
        </ChipCard>

        <ChipCard top show={media.error} type="block"
          avatar={<Emoji emoji=":cry:" size={42} />}
          title="Oh no..."
          subtitle="Your device not support webrtc camera :("
        />

        <ChipCard top show={this.state.snapshot} type="block"
          avatar={<img src={this.state.snapshot} />}
          title="Searching..."
          subtitle="Trying to find a match with the picture."
        />


        <ChipCard bottom={true} show type="block"
          header="Главный штаб эрмитажа"
        />
        <ChipCard bottom show type="block" style={{textAlign: 'center'}}>
          <Emoji emoji=":girl::skin-tone-2:" size={24} />
          <Emoji emoji=":girl::skin-tone-2:" size={24} />
          <Emoji emoji=":girl::skin-tone-2:" size={24} />
          <Emoji emoji=":girl::skin-tone-2:" size={24} />
          <Emoji emoji=":girl::skin-tone-2:" size={24} />
        </ChipCard>
      </div>
    )
  }
}

export default Playground;

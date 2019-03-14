import React from 'react';
import { inject, observer } from 'mobx-react';

import { Camera, ChipCard } from '../shared';
import {Emoji} from 'emoji-mart'

@inject('media', 'model', 'app')
@observer
class Playground extends React.Component {
  state = {
    snapshot: null,
    isGame: false
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
    });
    this.props.model.predict(img.src);
  }

  cameraController = () => {
    const { media } = this.props;

    if(media.stream) {
      return <Camera
        onSnapshot={this.onSnapshot}
        stream={media.stream}
        snapshotInterval={2000}
        snapshotSize={224}
      />
    }
  }

  render() {
    const { media, app } = this.props;
    const { isGame, snapshot } = this.state;
    return (
      <div className='Playground'>
        {this.cameraController()}

        <ChipCard top show textFit type="mini">
          Наведите камеру на картину, чтобы начать игру
        </ChipCard>

        <ChipCard top show={media.error} type="block"
          avatar={<Emoji emoji=":cry:" size={42} />}
          title="Oh no..."
          subtitle="Your device not support webrtc camera :("
        />

        <ChipCard top show={snapshot && app.debug} type="block"
          avatar={<img src={snapshot} alt="snapshot"/>}
          title="Searching..."
          subtitle="Trying to find a match with the picture."
        />


        <ChipCard bottom={true} show={!isGame} type="block"
          header="Главный штаб эрмитажа"
        />
        <ChipCard bottom show={isGame} type="block" style={{textAlign: 'center'}}>
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

import React from 'react';
import * as tf from '@tensorflow/tfjs';

class Camera extends React.Component {
  snapShotCanvas = document.createElement('canvas');
  videoStream = null;
  cameraStream = null;
  tickerId = null;


  capture() {
    return tf.tidy(() => {
      const webcamImage = tf.fromPixels(this.videoStream);
      const croppedImage = this.cropImage(webcamImage);

      // Expand the outer most dimension so we have a batch size of 1.
      const batchedImage = croppedImage.expandDims(0);

      // Normalize the image between -1 and 1. The image comes in between 0-255,
      // so we divide by 127 and subtract 1.
      let res =  batchedImage.toFloat().div(tf.scalar(127)).sub(tf.scalar(1));
      this.props.onStream && this.props.onStream(res);
    });
  }

  cropImage(img) {
    const size = Math.min(img.shape[0], img.shape[1]);
    const centerHeight = img.shape[0] / 2;
    const beginHeight = centerHeight - (size / 2);
    const centerWidth = img.shape[1] / 2;
    const beginWidth = centerWidth - (size / 2);
    return img.slice([beginHeight, beginWidth, 0], [size, size, 3]);
  }

  componentDidMount() {
    const navigatorAny = navigator;
    navigator.getUserMedia = navigator.getUserMedia ||
        navigatorAny.webkitGetUserMedia || navigatorAny.mozGetUserMedia ||
        navigatorAny.msGetUserMedia;

    if(navigator.getUserMedia) {
      navigator.getUserMedia({video: { facingMode:  "environment" }}, stream => {
        this.cameraStream = stream.getTracks()[0];

        this.videoStream.srcObject = stream;
        this.videoStream.width = 224;
        this.videoStream.height = 224;

        this.videoStream.onloadedmetadata = () => {
          this.videoStream.style.width = this.videoStream.videoWidth+this.videoStream.videoHeight + 'px';
          this.videoStream.style.marginLeft = -(this.videoStream.videoWidth+this.videoStream.videoHeight)/2+window.innerWidth/2 + 'px';
          this.videoStream.style.height = '100vh';

          this.tickerId = setInterval(() => this.capture(), 500);
        }
      }, error => {
        throw error;
      });
    }
  }
  componentWillUnmount() {
    this.tickerId && clearInterval(this.tickerId);
    this.cameraStream && this.cameraStream.stop();
  }

  render = () => (
    <div style={{position: 'fixed', top: 0}}>
      <video autoPlay ref={node => this.videoStream = node}></video>
    </div>
  )
}

export default Camera;

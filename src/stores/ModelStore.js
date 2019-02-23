import { observable, action, runInAction } from 'mobx';
import { Tensor, InferenceSession } from 'onnxjs';
import ndarray from 'ndarray';
import ops from 'ndarray-ops';
import ImageLoader from '../services/ImageLoader';

class ModelStore {
  SIZE = 224;
  MODEL_PATH = './mobilenet.onnx';
  model = new InferenceSession({ backendHint: 'webgl' });
  imageLoader  = new ImageLoader(this.SIZE, this.SIZE);

  @observable loading = false;
  @observable ready = false;
  @observable predicting = false;
  @observable error = null;
  @observable predicted = null;

  @action
  async loadModel() {
    try {
      this.loading = true;
      await this.model.loadModel(this.MODEL_PATH);
      await this.warmupModel();
      runInAction(() => this.ready = true);
    } catch(e) {
      runInAction(() => this.error = false);
    } finally {
      runInAction(() => this.loading = false);
    }
  }

  @action
  async predict(src) {
    try {
      this.predicting = true;
      this.predicted = null;
      const imageData = await this.imageLoader.getImageData(src);
      const preprocessedData = this.preprocess(imageData.data, this.SIZE, this.SIZE);
      const inputTensor = new Tensor(preprocessedData, 'float32', [1, 3, this.SIZE, this.SIZE]);
      const outputMap = await this.model.run([inputTensor]);
      const outputData = outputMap.values().next().value.data;
      console.log(outputData);
      runInAction(() => this.predicted = 1);
    } catch(e) {
      runInAction(() => this.error = 'Prediction error');
    } finally {
      runInAction(() => this.predicting = false);
    }
  }

  // Utility methods
  async warmupModel() {
    // OK. we generate a random input and call Session.run() as a warmup query
    const dims = [1, 3, this.SIZE, this.SIZE];
    const size = dims.reduce((a, b) => a * b);
    const warmupTensor = new Tensor(new Float32Array(size), 'float32', dims);

    for (let i = 0; i < size; i++) {
      warmupTensor.data[i] = Math.random() * 2.0 - 1.0; // random value [-1.0, 1.0)
    }
    await this.model.run([warmupTensor]);
  }

  preprocess(data, width, height) {
    const dataFromImage = ndarray(new Float32Array(data), [width, height, 4]);
    const dataProcessed = ndarray(new Float32Array(width * height * 3), [1, 3, height, width]);

    // Normalize 0-255 to (-1)-1
    ops.divseq(dataFromImage, 128.0);
    ops.subseq(dataFromImage, 1.0);

    // Realign imageData from [224*224*4] to the correct dimension [1*3*224*224].
    ops.assign(dataProcessed.pick(0, 0, null, null), dataFromImage.pick(null, null, 2));
    ops.assign(dataProcessed.pick(0, 1, null, null), dataFromImage.pick(null, null, 1));
    ops.assign(dataProcessed.pick(0, 2, null, null), dataFromImage.pick(null, null, 0));

    return dataProcessed.data;
  }
}

export default new ModelStore();

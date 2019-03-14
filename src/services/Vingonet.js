import { Tensor, InferenceSession } from 'onnxjs';
import ndarray from 'ndarray';
import ops from 'ndarray-ops';
import KNN from 'ml-knn';
import similarity from 'compute-cosine-similarity';
import ImageLoader from '../services/ImageLoader';
import vectors from '../assets/vectors/vectors';

class Vingonet {
  constructor(src, size) {
    this.MODEL_PATH = src;
    this.SIZE = size;

    this.model = new InferenceSession({ backendHint: 'webgl' });
    this.knn = new KNN(Object.values(vectors), Object.keys(vectors));
    this.imageLoader  = new ImageLoader(this.SIZE, this.SIZE);
  } 

  async loadModel() {
    await this.model.loadModel(this.MODEL_PATH);
  
    const dims = [1, 3, this.SIZE, this.SIZE];
    const size = dims.reduce((a, b) => a * b);
    const warmupTensor = new Tensor(new Array(size), 'float32', dims);
    for (let i = 0; i < size; i++) {
      warmupTensor.data[i] = Math.random();
    }
  
    await this.model.run([warmupTensor]);
  }
  
  async predict(src) {
    const imageData = await this.imageLoader.getImageData(src);
    const preprocessedData = this.preprocess(imageData.data);
    const inputTensor = new Tensor(preprocessedData, 'float32', [1, 3, this.SIZE, this.SIZE]);
    const outputMap = await this.model.run([inputTensor]);
    const outputData = outputMap.values().next().value.data;
    const id = this.knn.predict(Array.from(outputData));
    const distance = similarity(Array.from(vectors[id]), Array.from(outputData));
    
    return { id, distance, data: outputData };
  }

  async test(vec) {
    const inputTensor = new Tensor(vec.input.flat(10), 'float32', [1, 3, this.SIZE, this.SIZE]);
    const outputMap = await this.model.run([inputTensor]);
    const outputData = outputMap.values().next().value.data;
    const isEqual = outputData.every((v, i) => v === vec.output[i]);
    return isEqual || outputData;
  }
  
  preprocess(data) {
    const dataFromImage = ndarray(new Float32Array(data), [this.SIZE, this.SIZE, 4]);
    const dataProcessed = ndarray(new Float32Array(this.SIZE * this.SIZE * 3), [1, 3, this.SIZE, this.SIZE]);
  
    ops.divseq(dataFromImage, 128.0);
    ops.subseq(dataFromImage, 1.0);

    ops.assign(dataProcessed.pick(0, 0, null, null), dataFromImage.pick(null, null, 2));
    ops.assign(dataProcessed.pick(0, 1, null, null), dataFromImage.pick(null, null, 1));
    ops.assign(dataProcessed.pick(0, 2, null, null), dataFromImage.pick(null, null, 0));
  
    return dataProcessed.data;
  }
}

export default Vingonet;
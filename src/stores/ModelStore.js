import { observable, action } from 'mobx';
import { Tensor, InferenceSession } from 'onnxjs';

class ModelStore {
  SIZE = 224;
  MODEL_PATH = 'assets/mobilenet.onnx';

  session = new InferenceSession({backendHint: 'webgl'});
  model = null;

  @observable loading = false;
  @observable predictData = null;
  @observable error = null;

  @action
  loadModel() {
    this.loading = true;
    this.session.loadModel(this.MODEL_PATH)
      .catch(action((err) => this.error = err))
      .finally(action(() => this.loading = false));
  }

  @action
  predict(input) {
    this.loading = true;
    const inputs = new Tensor(new Array(150528).fill(0), 'float32', [1, 3, 224, 224]);
    this.session.run([inputs])
      .then(action((out) => this.predictData = out))
      .catch(action((err) => this.error = err))
      .finally(action(() => this.loading = false));
  }
}

export default new ModelStore();

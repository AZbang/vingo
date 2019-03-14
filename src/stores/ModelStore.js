import { observable, action, runInAction } from 'mobx';
import Vingonet from '../services/Vingonet';
import vec from '../assets/vectors/test.json';

class ModelStore {
  @observable loading = false;
  @observable ready = false;
  @observable predicting = false;
  @observable error = null;
  @observable predicted = null;

  mobilenet = new Vingonet('./mobilenet.onnx', 224);

  @action
  async loadModel() {
    this.loading = true;
    await this.mobilenet.loadModel();
    const t1 = await this.mobilenet.test(vec);
    console.log(t1);
  }

  @action
  async predict(image) {
    this.loading = true;
    this.predicted = null;
    const data = await this.mobilenet.predict(image);
    console.log(data);
  }
}

export default new ModelStore();

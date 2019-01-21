import { observable, action } from 'mobx';
import * as api from '../services/api';

class MuseumStore {
  @observable rooms = [];
  @observable playgrounds = [];
  @observable items = [];
  @observable items = [];
  @observable name = 'Museum';


  @action
  async load() {
    this.loading = true;
    api.getItems()
      .then(action(({data}) => this.stories = data))
      .catch(action((err) => this.error = err))
      .finally(action(() => this.loading = false));
  }
}

export default new MuseumStore();

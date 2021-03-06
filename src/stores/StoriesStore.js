import { observable, action } from 'mobx';
import * as api from '../services/api';

class StoriesStore {
  @observable data = [];
  @observable error = null;
  @observable loading = false;

  @action
  load() {
    this.loading = true;
    this.data = [];

    api.getStories()
      .then(action(({data}) => this.data = data))
      .catch(action((err) => this.error = err))
      .finally(action(() => this.loading = false));
  }

  get count() {
    return this.data.length || null;
  }
}

export default new StoriesStore();

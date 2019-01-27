import { observable, action, computed } from 'mobx';
import * as api from '../services/api';

class MuseumsStore {
  @observable data = [];
  @observable error = null;
  @observable loading = false;

  @action
  load() {
    this.loading = true;
    this.data = [];

    api.getMuseums()
      .then(action(({data}) => this.data = data))
      .catch(action((err) => this.error = err))
      .finally(action(() => this.loading = false));
  }

  @computed
  get count() {
    return this.data.length || null;
  }

  getMuseum(id) {
    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i].id === id) return this.data[i];
    }
  }
}

export default new MuseumsStore();

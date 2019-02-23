import { observable, action, computed, runInAction} from 'mobx';
import * as api from '../services/api';

class MuseumsStore {
  @observable data = [];
  @observable error = null;
  @observable loading = false;

  @action
  async load() {
    this.loading = true;
    const museums = api.getMuseums();

    for(const museum of museums) {
      const data = await api.getMuseum(museum.id);
      runInAction(() => this.data.push({...museum, ...data}));
    }

    runInAction(() => this.loading = false);
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

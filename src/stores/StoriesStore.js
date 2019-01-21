import { observable, action } from 'mobx';
import * as api from '../services/api';

class StoriesStore {
  @observable stories = [];
  @observable error = null;
  @observable loading = false;

  @action
  load() {
    this.loading = true;
    api.getStories()
      .then(action(({data}) => this.stories = data))
      .catch(action((err) => this.error = err))
      .finally(action(() => this.loading = false));
  }

  get count() {
    return this.stories.length || null;
  }
}

export default new StoriesStore();

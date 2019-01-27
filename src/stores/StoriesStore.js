import { observable, action } from 'mobx';
import * as api from '../services/api';

class StoriesStore {
  @observable stories = [];
  @observable error = null;
  @observable loading = false;

  @action
  load() {
    this.loading = true;
    this.stories = [];

    api.getStories()
      .then(action('fetchSuccess', ({data}) => this.stories = data))
      .catch(action('fetchError', (err) => this.error = err))
      .finally(action('fetchComplete', () => this.loading = false));
  }
  
  get count() {
    return this.stories.length || null;
  }
}

export default new StoriesStore();

import { observable, action } from 'mobx';
import * as api from '../services/api';
import storage from '../services/storage';

class UserStore {
  @observable collections = storage.get('collections') || [];
  @observable achievements = storage.get('achievements') || [];

  @action
  addCollectionItem(item) {
    this.collections.push(item);
    storage.set('collections', this.collections);
  }

  @action
  completeAchievement(item) {
    this.achievements.push(item);
    storage.set('achievements', this.achievements);
  }
}


export default new UserStore();

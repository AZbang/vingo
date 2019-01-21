import { observable, action } from 'mobx';
import * as api from '../services/api';

class AppStore {
  @observable isTabbar = true;
  @observable museums = [];
  @observable errorMuseums = null;
  @observable loadingMuseums = false;

  @action toggleTabbar(v = !this.isTabbar) {
    this.isTabbar = v;
  }

  @action
  async loadMuseums() {
    this.loadingMuseums = true;
    api.getMuseums()
      .then(action(({data}) => this.museums = data))
      .catch(action((err) => this.errorMuseums = err))
      .finally(action(() => this.loadingMuseums = false));
  }
}

export default new AppStore();

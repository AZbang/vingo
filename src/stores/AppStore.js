import { observable, action } from 'mobx';
import * as api from '../services/api';

class AppStore {
  @observable isTabbar = true;
  @observable museums = [];
  @observable errorMuseums = null;
  @observable loadingMuseums = false;

  @action toggleTabbar(v = !this.isTabbar) {
    this.isTabbar = v;
    document.querySelector('.Tabbar').style.display = this.isTabbar ? 'flex' : 'none';
  }

  @action setMuseums(data = []) {
    this.museums = data;
  }

  @action
  async loadMuseums() {
    this.loadingMuseums = true;
    api.getMuseums()
      .then(({data}) => this.setMuseums(data))
      .catch(action((err) => this.errorMuseums = err))
      .finally(action(() => this.loadingMuseums = false));
  }
}

export default new AppStore();

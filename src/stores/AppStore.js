import { observable, action } from 'mobx';
import * as api from '../services/api';

class AppStore {
  @observable isTabbar = true;
  @observable meeting = true;

  @action toggleTabbar(v = !this.isTabbar) {
    this.isTabbar = v;
    document.querySelector('.Tabbar').style.display = this.isTabbar ? 'flex' : 'none';
  }
}

export default new AppStore();

import { observable, action } from 'mobx';
import * as api from '../services/api';

class AppStore {
  @observable isTabbar = true;
  @observable meeting = true;
  @observable debug = false;


  @action toggleDebug(v = !this.debug) {
    this.debug = v;
  }

  @action toggleTabbar(v = !this.isTabbar) {
    this.isTabbar = v;
    document.querySelector('.Tabbar').style.display = this.isTabbar ? 'flex' : 'none';
  }
}

export default new AppStore();

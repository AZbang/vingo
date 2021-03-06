import { observable, action } from 'mobx';

class AppStore {
  @observable isTabbar = true;
  @observable meeting = true;
  @observable debug = true;


  @action toggleDebug(v = !this.debug) {
    this.debug = v;
  }

  @action toggleTabbar(v = !this.isTabbar) {
    this.isTabbar = v;
    document.querySelector('.Tabbar').style.display = this.isTabbar ? 'flex' : 'none';
  }
}

export default new AppStore();

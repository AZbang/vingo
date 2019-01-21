import { RouterStore } from 'mobx-react-router';
import appStore from './AppStore';
import userStore from './UserStore';
import modelStore from './ModelStore';
import museumStore from './MuseumStore';
import storiesStore from './StoriesStore';
const routingStore = new RouterStore();

export default {
  app: appStore,
  user: userStore,
  model: modelStore,
  museum: museumStore,
  stories: storiesStore,
  routing: routingStore,
}

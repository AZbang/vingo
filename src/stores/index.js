import { RouterStore } from 'mobx-react-router';
import appStore from './AppStore';
import userStore from './UserStore';
import modelStore from './ModelStore';
import museumStore from './MuseumStore';
import storiesStore from './StoriesStore';
import museumsStore from './MuseumsStore';
import mediaStore from './MediaStore';

const routingStore = new RouterStore();

export default {
  app: appStore,
  user: userStore,
  model: modelStore,
  museum: museumStore,
  stories: storiesStore,
  media: mediaStore,
  museums: museumsStore,
  routing: routingStore,
}

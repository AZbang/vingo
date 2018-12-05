import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router'

import registerServiceWorker from './sw';
import {store, history} from './store';
import {saveState} from './storage';
import App from './containers/App';
import './assets/theme.css';
import './assets/fonts.css';

store.subscribe(() => {
  let state = store.getState().data;
  saveState('completeItems', state.completeItems);
  saveState('completeAchievements', state.completeAchievements);
});

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route path='/:pageId?' component={(props) => <App pageId={props.match.params.pageId}/>}/>
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  )
}

registerServiceWorker();
document.addEventListener("deviceready", render, false);
!window.cordova && render();

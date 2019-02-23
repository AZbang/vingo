import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'mobx-react-router';
import createHashHistory from 'history/createHashHistory';

import registerServiceWorker from './sw';
import stores from './stores';

import App from './App';
import './assets/theme.css';
import './assets/fonts.css';

const history = syncHistoryWithStore(createHashHistory(), stores.routing);
registerServiceWorker();

window.STORE = stores;

const render = () => {
  ReactDOM.render(
    <Provider {...stores}>
      <Router history={history}>
        <div>
          <Route
            path='/:pageId?'
            component={(props) =>
              <App pageId={props.match.params.pageId}/>
            }
          />
        </div>
      </Router>
    </Provider>,
    document.getElementById('root')
  )
}

document.addEventListener('deviceready', render, false);
!window.cordova && render();

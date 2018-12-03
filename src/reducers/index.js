import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import fetch from './fetch'
import data from './data'
import ui from './ui'

export default (history) => combineReducers({
  router: connectRouter(history),
  fetch, data, ui
});

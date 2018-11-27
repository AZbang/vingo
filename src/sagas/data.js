import { call, put } from 'redux-saga/effects'

export function* loadData(action) {
  yield put({type: 'LOADING_START'});
  yield put({type: 'LOADING_END'});
}

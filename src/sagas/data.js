import { call, all, put } from 'redux-saga/effects'
import {DB_PATH, ROOMS_PATH, ITEMS_PATH, LOGREG_PATH} from '../env';

export function* fetchMuseums() {
  yield put({type: 'FETCH_START'});
  try {
    const museums = yield call(fetch(DB_PATH + 'museums.json'));
    yield put({type: 'SET_MUSEUMS', payload: museums});
    yield put({type: 'FETCH_SUCCEED'});
  } catch(e) {
    yield put({type: 'FETCH_ERROR', error: e});
  }
}

export function* fetchAchievements() {
  yield put({type: 'FETCH_START'});
  try {
    const achievements = yield call(fetch(DB_PATH + 'achievements.json'));
    yield put({type: 'SET_ACHIEVEMENTS', payload: achievements});
    yield put({type: 'FETCH_SUCCEED'});
  } catch(e) {
    yield put({type: 'FETCH_ERROR', error: e});
  }
}


export function* fetchMuseum(action) {
  yield put({type: 'FETCH_START'});
  try {
    const data = yield all({
      rooms: call(fetch(ROOMS_PATH + action.id + '.json')),
      items: call(fetch(ITEMS_PATH + action.id + '.json')),
      logreg: call(fetch(LOGREG_PATH + action.id + '.json'))
    });
    yield put({type: 'SET_MUSEUM', payload: data, id: action.id});
    yield put({type: 'FETCH_SUCCEED'});
  } catch(e) {
    yield put({type: 'FETCH_ERROR', error: e});
  }
}

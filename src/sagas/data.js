import {call, all, put} from 'redux-saga/effects'
import {MUSEUMS_PATH, STORIES_PATH, ACHIEVEMENTS_PATH, PLAYGROUNDS_PATH, ITEMS_PATH, LOGREG_PATH} from '../env';

function getData(url) {
  return fetch(url).then(res => res.json());
}

export function* fetchMuseums() {
  yield put({type: 'FETCH_START'});
  try {
    const museums = yield call(getData, MUSEUMS_PATH);
    yield put({type: 'SET_MUSEUMS', payload: museums});
    yield put({type: 'FETCH_SUCCEED'});
  } catch(e) {
    yield put({type: 'FETCH_ERROR', error: e});
  }
}

export function* fetchStories() {
  yield put({type: 'FETCH_START'});
  try {
    // mocking stories
    const stories = yield call(getData, ITEMS_PATH.replace(':id', 'hermetage_general_building'));
    stories.sort(() => Math.random() - .5).length = Math.floor(Math.random()*5)+3;

    yield put({type: 'SET_STORIES', payload: stories});
    yield put({type: 'FETCH_SUCCEED'});
  } catch(e) {
    yield put({type: 'FETCH_ERROR', error: e});
  }
}

export function* fetchAchievements() {
  yield put({type: 'FETCH_START'});
  try {
    const achievements = yield call(getData, ACHIEVEMENTS_PATH);
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
      playgrounds: call(getData, PLAYGROUNDS_PATH.replace(':id', action.id)),
      items: call(getData, ITEMS_PATH.replace(':id', action.id)),
      logreg: call(getData, LOGREG_PATH.replace(':id', action.id))
    });
    yield put({type: 'SET_MUSEUM', payload: data, id: action.id});
    yield put({type: 'FETCH_SUCCEED'});
  } catch(e) {
    yield put({type: 'FETCH_ERROR', error: e});
  }
}

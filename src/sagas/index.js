import { takeEvery } from 'redux-saga/effects'
import { fetchMuseums, fetchMuseum, fetchAchievements } from './data'

export default function* rootSaga() {
  yield takeEvery('FETCH_MUSEUMS', fetchMuseums);
  yield takeEvery('FETCH_ACHIEVEMENTS', fetchAchievements);
  yield takeEvery('FETCH_MUSEUM', fetchMuseum);
}

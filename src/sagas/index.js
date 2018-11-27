import { takeEvery } from 'redux-saga/effects'
import { loadData } from './data'

export default function* rootSaga() {
  yield takeEvery('FETCH_DATA', loadData)
}

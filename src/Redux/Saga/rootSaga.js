import {all} from 'redux-saga/effects';
import {watchDecrement, watchIncrement} from './CounterSaga';
export default function* rootSaga() {
  console.log('DebugRootSaga');
  yield all([watchDecrement(), watchIncrement()]);
}

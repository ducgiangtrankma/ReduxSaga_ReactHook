import {Increment, Decrement} from '../Actions/types';
import {
  increment,
  decrement,
  decrement_Done,
  increment_Done,
} from '../Actions/CounterAction';
import {call, put, takeLatest} from 'redux-saga/effects';
export function* watchDecrement() {
  console.log('Debug 1');
  yield takeLatest(Decrement, handleDecrement);
}
export function* watchIncrement() {
  yield takeLatest(Increment, handleIncrement);
}
function* handleDecrement(action) {
  console.log('Debug2', action);
  yield put(decrement_Done(action.payload.count));
}
function* handleIncrement(action) {
  yield put(increment_Done(action.payload.count));
}

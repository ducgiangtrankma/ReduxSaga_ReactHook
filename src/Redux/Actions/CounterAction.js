import {Increment, Decrement, Increment_Done, Decrement_Done} from './types';
export const increment = (count) => {
  return {
    type: Increment,
    payload: {count},
  };
};
export const increment_Done = (data) => {
  return {
    type: Increment_Done,
    payload: {data},
  };
};
export const decrement = (count) => {
  return {
    type: Decrement,
    payload: {count},
  };
};
export const decrement_Done = (data) => {
  console.log('DebugAction done', data);
  return {
    type: Decrement_Done,
    payload: {data},
  };
};

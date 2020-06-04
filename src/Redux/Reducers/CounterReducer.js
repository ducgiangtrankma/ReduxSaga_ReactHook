import {
  Increment,
  Decrement,
  Increment_Done,
  Decrement_Done,
} from '../Actions/types';
const defaultState = {
  count: 2,
};
const counter = (state = defaultState, action) => {
  switch (action.type) {
    case Increment:
      return {
        ...state,
      };
    case Increment_Done:
      return {
        count: state.count + action.payload.data,
      };
    case Decrement:
      return {
        ...state,
      };
    case Decrement_Done:
      return {
        ...state,
        count: state.count - action.payload.data,
      };
    default:
      return state;
  }
};
export default counter;

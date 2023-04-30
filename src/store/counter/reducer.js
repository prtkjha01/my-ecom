import { counterActionTypes } from "./action";

const counterInitialState = {
  count: 0,
};

export default function reducer(state = counterInitialState, action) {
  switch (action.type) {
    case counterActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case counterActionTypes.DECREMENT:
      return { ...state, count: state.count * 10 };
    default:
      return state;
  }
}

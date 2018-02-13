import { RESERVE_TIME } from '../constants/actionTypes';

const initialState = {
  time: '',
  error: undefined
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE_TIME: {
      return {
        ...state,
        time: action.payload
      };
    }
    default:
      return state;
  }
};

export default data;

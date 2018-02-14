import { RESERVE_TIME , RESERVE_ERROR } from '../constants/actionTypes';
const initialState = {
  time: '',
  error: undefined
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE_TIME: {
      return {
        ...state,
        error: '',
        time: action.payload
      };
    }
    case RESERVE_ERROR: {
      console.log('bbbbbbbbbbbbbbbb');

      return {
        ...state,
        error: 'Error In Reserve An Appointment'
      };
    }
    default:
      return state;
  }
};

export default data;

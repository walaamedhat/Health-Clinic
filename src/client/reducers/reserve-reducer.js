import { RESERVE_TIME, RESERVE_ERROR } from '../constants/actionTypes';
const initialState = {
  time: '',
  message: undefined
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE_TIME: {
      return {
        ...state,
        message: 'Booking Successfully',
        time: action.payload
      };
    }
    case RESERVE_ERROR: {
      return {
        ...state,
        message: 'You Have To Choose An Appointment'
      };
    }
    default:
      return state;
  }
};

export default data;

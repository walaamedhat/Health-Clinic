import {
  APPOINTMENTS_FETCH_START,
  APPOINTMENTS_FETCH_FAILURE,
  APPOINTMENTS_FETCH_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  appointments: [],
  error: undefined,
  isFetching: false
};

const appointments = (state = initialState , action) => {
  switch (action.type) {
    case APPOINTMENTS_FETCH_START: {
      return {
        ...state,
        isFetching: true
      };
    }

    case APPOINTMENTS_FETCH_SUCCESS: {
      return {
        ...state,
        appointments: action.payload,
        isFetching: false
      };
    }

    case APPOINTMENTS_FETCH_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    }
    default:
      return state;

  }
};

export default appointments;

import {
  CALENDER_FETCH_START,
  CALENDER_FETCH_SUCCESS,
  CALENDER_FETCH_FAILURE
} from '../constants/actionTypes';

const initialState = {
  events: [{ title: '',start: {},end: {} }],
  error: undefined,
  isFetching: false
};

const data = (state = initialState , action) => {
  switch (action.type) {
    case CALENDER_FETCH_START: {
      return {
        ...state,
        isFetching: true
      };
    }

    case CALENDER_FETCH_SUCCESS: {
      return {
        ...state,
        events: action.payload,
        isFetching: false
      };
    }

    case CALENDER_FETCH_FAILURE: {
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

export default data;

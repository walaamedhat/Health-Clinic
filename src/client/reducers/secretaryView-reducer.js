import {
  SECRETARYAPPOINTMENTS_FETCH_START,
  SECRETARYAPPOINTMENTS_FETCH_FAILURE,
  SECRETARYAPPOINTMENTS_FETCH_SUCCESS,
  CHANGE_STATUS
} from '../constants/actionTypes';

const initialState = {
  secretaryAppointments: [],
  error: undefined,
  isFetching: false
};

const secretaryAppointments = (state = initialState , action) => {
  switch (action.type) {
    case SECRETARYAPPOINTMENTS_FETCH_START: {
      return {
        ...state,
        isFetching: true
      };
    }

    case SECRETARYAPPOINTMENTS_FETCH_SUCCESS: {
      return {
        ...state,
        secretaryAppointments: action.payload,
        isFetching: false
      };
    }

    case SECRETARYAPPOINTMENTS_FETCH_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    }

    case CHANGE_STATUS: {
      const { id, status } = action.payload;
      const newList = state.secretaryAppointments.map(el => el.id === id? { ...el, status }: el);

      return {
        ...state,
        isFetching: false,
        secretaryAppointments: newList
      };
    }
    default:
      return state;

  }
};

export default secretaryAppointments;

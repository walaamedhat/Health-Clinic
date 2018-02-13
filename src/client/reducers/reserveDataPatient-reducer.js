import { RESERVE_DATA_PATIENT } from '../constants/actionTypes';

const initialState = {
  dataPatient: '',
  error: undefined
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE_DATA_PATIENT: {
      return {
        ...state,
        dataPatient: action.payload
      };
    }
    default:
      return state;
  }
};

export default data;

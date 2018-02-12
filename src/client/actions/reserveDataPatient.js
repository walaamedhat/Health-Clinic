import { RESERVE_DATA_PATIENT } from '../constants/actionTypes';

const reserve = payload => ({ type: RESERVE_DATA_PATIENT, payload });

export const reserveData = data => dispatch => {
  dispatch(reserve(data));
};

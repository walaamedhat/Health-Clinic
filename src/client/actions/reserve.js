import { RESERVE_TIME } from '../constants/actionTypes';

const reserve = payload => ({ type: RESERVE_TIME, payload });

export const reserveTime = time => dispatch => {
  dispatch(reserve(time));
};

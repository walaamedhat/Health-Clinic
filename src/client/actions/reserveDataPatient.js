import {
  RESERVE_DATA_PATIENT,
  DATA_FETCH_FAILURE,
  RESERVE_ERROR
} from '../constants/actionTypes';

const reserve = payload => ({ type: RESERVE_DATA_PATIENT, payload });
const reserveError = () => ({ type: RESERVE_ERROR });
export const reserveData = data => dispatch => dispatch(reserve(data));
export const dataFetchFailure = massage => {
  return {
    type: DATA_FETCH_FAILURE,
    payload: massage
  };
};
export const reserveAppointment = () => (dispatch, getState) => {
  const data = {
    reserve: getState().reserve,
    reserveData: getState().reserveData
  };
  if (getState().reserve.time === '') {
    dispatch(reserveError());
  } else {
    fetch('/api/v1/reserve', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response From Sarver In Reserve');
        }

        return response;
      })
      .catch(err => dispatch(dataFetchFailure(err.massage)));
  }
};

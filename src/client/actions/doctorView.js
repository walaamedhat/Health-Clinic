import {
  APPOINTMENTS_FETCH_START,
  APPOINTMENTS_FETCH_SUCCESS,
  APPOINTMENTS_FETCH_FAILURE
} from '../constants/actionTypes.js';

export const appointmentsFetchStart = () => {
  console.log('start');

  return {
    type: APPOINTMENTS_FETCH_START
  };
};

export const appointmentsFetchSuccess = payload => {
  console.log('success');

  return {
    type: APPOINTMENTS_FETCH_SUCCESS,
    payload
  };
};

export const appointmentsFetchFailure = massage => {
  console.log('fail');

  return {
    type: APPOINTMENTS_FETCH_FAILURE,
    payload: massage
  };
};

export const fetchDoctorView = id_doctor => dispatch => {
  console.log('jkadbvs');
  dispatch(appointmentsFetchStart());
  fetch(`/api/v1/doctors/${id_doctor}`)
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Bad response from sarver');
      }

      return res.json();
    })
    .then(appointments => dispatch(appointmentsFetchSuccess(appointments)))
    .catch(err => dispatch(appointmentsFetchFailure(err.massage)));
};

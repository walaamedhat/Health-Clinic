import {
  APPOINTMENTS_FETCH_START,
  APPOINTMENTS_FETCH_SUCCESS,
  APPOINTMENTS_FETCH_FAILURE
} from '../constants/actionTypes.js';

export const appointmentsFetchStart = () => {

  return {
    type: APPOINTMENTS_FETCH_START
  };
};

export const appointmentsFetchSuccess = appointments => {

  return {
    type: APPOINTMENTS_FETCH_SUCCESS,
    payload: appointments
  };
};

export const appointmentsFetchFailure = massage => {

  return {
    type: APPOINTMENTS_FETCH_FAILURE,
    error: massage
  };
};

export const fetchDoctorView = id_doctor => dispatch => {
  dispatch(appointmentsFetchStart());
  fetch(`/api/v1/doctor/${id_doctor}`)
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Bad response from sarver');
      }

      return res.json();
    })
    .then(appointments => dispatch(appointmentsFetchSuccess(appointments)))
    .catch(err => dispatch(appointmentsFetchFailure(err.massage)));
};

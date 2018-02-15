import {
  SECRETARYAPPOINTMENTS_FETCH_START,
  SECRETARYAPPOINTMENTS_FETCH_SUCCESS,
  SECRETARYAPPOINTMENTS_FETCH_FAILURE,
  CHANGE_STATUS
} from '../constants/actionTypes.js';

export const secretaryAppointmentsFetchStart = () => {

  return {
    type: SECRETARYAPPOINTMENTS_FETCH_START
  };
};

export const secretaryAppointmentsFetchSuccess = secretaryAppointments => {

  return {
    type: SECRETARYAPPOINTMENTS_FETCH_SUCCESS,
    payload: secretaryAppointments
  };
};

export const secretaryAppointmentsFetchFailure = massage => {

  return {
    type: SECRETARYAPPOINTMENTS_FETCH_FAILURE,
    payload: massage
  };
};

export const changeStatus = (id, status) => {

  return {
    type: CHANGE_STATUS,
    payload: { id, status }
  };
};

export const fetchSecretaryView = location => dispatch => {
  dispatch(secretaryAppointmentsFetchStart());
  fetch(`/api/v1/secretary/${location}`)
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }

      return res.json();
    })
    .then(secretaryAppointments => {

      return dispatch(secretaryAppointmentsFetchSuccess(secretaryAppointments));
    })
    .catch(err => {

      return dispatch(secretaryAppointmentsFetchFailure(err.massage));
    });
};

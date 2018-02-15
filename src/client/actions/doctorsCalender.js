import {
  CALENDER_FETCH_START,
  CALENDER_FETCH_SUCCESS,
  CALENDER_FETCH_FAILURE
} from '../constants/actionTypes.js';

export const calenderFetchStart = () => {
  return {
    type: CALENDER_FETCH_START
  };
};

export const calenderFetchSuccess = payload => {
  console.log(payload, 'payload is here');

  return {
    type: CALENDER_FETCH_SUCCESS,
    payload
  };
};

export const calenderFetchFailure = massage => {
  return {
    type: CALENDER_FETCH_FAILURE,
    payload: massage
  };
};

export const fetchDoctorsCalender = (cityName, idDoctor) => dispatch => {
  dispatch(calenderFetchStart());
  fetch(`/api/v1/calender/${cityName}/${idDoctor}`)
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Bad response from sarver');
      }

      return res.json();
    })
    .then(doctorCalender => dispatch(calenderFetchSuccess(doctorCalender)))
    .catch(err => dispatch(calenderFetchFailure(err.massage)));
};

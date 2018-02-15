import { combineReducers } from 'redux';

import doctors from './doctors-reducer';
import doctorView from './doctorView-reducer';
import secretaryAppointments from './secretaryView-reducer';
import reserve from './reserve-reducer';
import reserveData from './reserveDataPatient-reducer';

export default combineReducers({
  doctors,
  reserve,
  reserveData,
  doctorView,
  secretaryAppointments
});

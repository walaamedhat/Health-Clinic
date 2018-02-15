import { combineReducers } from 'redux';

import doctors from './doctors-reducer';
import reserve from './reserve-reducer';
import reserveData from './reserveDataPatient-reducer';
import doctorView from './doctorView-reducer';

export default combineReducers({
  doctors,
  doctorView,
  reserve,
  reserveData
});

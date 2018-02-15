import { combineReducers } from 'redux';

import doctors from './doctors-reducer';
import reserve from './reserve-reducer';
import reserveData from './reserveDataPatient-reducer';
import events from './calenderEvent-reducer';
export default combineReducers({
  doctors,
  reserve,
  reserveData,
  events
});

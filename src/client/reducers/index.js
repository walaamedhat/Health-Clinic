import { combineReducers } from 'redux';

import doctors from './doctors-reducer';
<<<<<<< HEAD
import doctorView from './doctorView-reducer';
export default combineReducers({
  doctors,
  doctorView
=======
import reserve from './reserve-reducer';
import reserveData from './reserveDataPatient-reducer';

export default combineReducers({
  doctors,
  reserve,
  reserveData
>>>>>>> aa51193ccf520b5a2516187c077651e4a246b9ed
});

import { combineReducers } from 'redux';

import doctors from './doctors-reducer';
import reserve from './reserve-reducer';
import reserveData from './reserveDataPatient-reducer';

export default combineReducers({
  doctors,
  reserve,
  reserveData
});

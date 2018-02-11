import { combineReducers } from 'redux';
import doctors from './doctors-reducer';
import doctorView from './doctorView-reducer';
export default combineReducers({
  doctors,
  doctorView
});

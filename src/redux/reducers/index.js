import {combineReducers} from 'redux';

import auth from './auth';
import profile from './profile';
import friend from './friend';
import message from './message';

export default combineReducers({
  auth,
  profile,
  friend,
  message,
});

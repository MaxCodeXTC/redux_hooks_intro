import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import resultReducer from './resultReducer';

export default combineReducers({
  counter: counterReducer,
  result: resultReducer,
});

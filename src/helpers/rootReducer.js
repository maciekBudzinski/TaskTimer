import { combineReducers } from 'redux';
import navigationReducer from '../modules/navigation/reducer';

const rootReducer = combineReducers({
  navigation: navigationReducer,
});

export default rootReducer;

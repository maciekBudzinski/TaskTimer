import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import navigationReducer from './navigationReducer';

const rootReducer = combineReducers({
  exampleReducer,
  navigation: navigationReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import navigationReducer from '../modules/navigation/reducer';
import categoryReducer from '../modules/categories/reducer';
import taskReducer from '../modules/task/reducer';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  category: categoryReducer,
  task: taskReducer,
});

export default rootReducer;

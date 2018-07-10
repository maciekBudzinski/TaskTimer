import { combineReducers } from 'redux';
import navigationReducer from '../modules/navigation/reducer';
import categoryReducer from '../modules/categories/reducer';
import taskReducer from '../modules/task/reducer';
import customer from '../modules/customer/reducer';
import reduxNavigationReducer from '../modules/reduxNavigation/reducer';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  reduxNavigation: reduxNavigationReducer,
  category: categoryReducer,
  task: taskReducer,
  customer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import navigationReducer from '../modules/navigation/reducer';
import categoryReducer from '../modules/categories/reducer';
import customer from '../modules/customer/reducer';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  category: categoryReducer,
  customer,
});

export default rootReducer;

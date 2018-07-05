import { combineReducers } from 'redux';
import navigationReducer from '../modules/navigation/reducer';
import categoryReducer from '../modules/categories/reducer';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  category: categoryReducer,
});

export default rootReducer;

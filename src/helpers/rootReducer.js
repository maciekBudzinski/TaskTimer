import { combineReducers } from 'redux';
import navigationReducer from '../modules/navigation/reducer';
import categoryReducer from '../modules/categories/reducer';
<<<<<<< HEAD
import taskReducer from '../modules/task/reducer';
=======
import customer from '../modules/customer/reducer';
>>>>>>> 57a168c7193162f3cfa9467621088ff24b1301dc

const rootReducer = combineReducers({
  navigation: navigationReducer,
  category: categoryReducer,
<<<<<<< HEAD
  task: taskReducer,
=======
  customer,
>>>>>>> 57a168c7193162f3cfa9467621088ff24b1301dc
});

export default rootReducer;

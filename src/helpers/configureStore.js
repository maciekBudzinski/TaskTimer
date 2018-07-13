import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import axios from 'axios';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import rootReducer from './rootReducer';
// const DEVELOPMENT = process.env.NODE_ENV === 'development' ? true : undefined;

export default function configureStore(initialState) {
  // const store = createStore(
  //   rootReducer,
  //   initialState,
  //   compose(
  //     applyMiddleware(thunk),
  //     window.devToolsExtension ? window.devToolsExtension() : f => f
  //   )
  // );
  AsyncStorage.getItem('token')
    .then(value => {
      axios.defaults.headers.common.Authorization = `Bearer ${value}`;
    })
    .catch(error => console.log(error));

  axios.defaults.baseURL = 'http://trynich.nazwa.pl:8000/';
  // axios.defaults.headers.common.Authorization =
  //   'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InVzZXJAdXNlci5wbCIsInVzZXJfaWQiOjEsImVtYWlsIjoidXNlckB1c2VyLnBsIiwiZXhwIjoxNTMxNDk3Mzk4fQ.lO36QtrVDcI94HkvouWdb49ZYUSIbAnxrJBF8E_ylc0';

  const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav);

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, reactNavigationReduxMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    module.hot.accept(() => {
      // eslint-disable-next-line
      const nextRootReducer = require('../helpers/rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

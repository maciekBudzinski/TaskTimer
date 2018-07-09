import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
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

  axios.defaults.baseURL = 'http://trynich.nazwa.pl:8000/';
  axios.defaults.headers.common.Authorization =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InVzZXJAdXNlci5wbCIsImVtYWlsIjoidXNlckB1c2VyLnBsIiwidXNlcl9pZCI6MSwiZXhwIjoxNTMxMTUxODk3fQ.lLodMmCiFxCJDOwuSzpNxsda0UE1x5TsEzVmNXNrUkc';

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
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

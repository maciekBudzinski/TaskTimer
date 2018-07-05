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
  axios.defaults.headers.common.Authorization =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJAdXNlci5wbCIsImVtYWlsIjoidXNlckB1c2VyLnBsIiwidXNlcl9pZCI6MSwiZXhwIjoxNTMwODIxODYyfQ.yJ97n7bdjTmrVtYbKqCPKV8dBeq1FX6Qc1AqEYTDKC8';

  const client = axios.create({
    baseURL: 'http://trynich.nazwa.pl:8000/',
    // responseType: 'json',
  });

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, axiosMiddleware(client)),
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

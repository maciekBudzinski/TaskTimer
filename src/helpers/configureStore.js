import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

// const DEVELOPMENT = process.env.NODE_ENV === 'development' ? true : undefined;

export default function configureStore(initialState) {
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

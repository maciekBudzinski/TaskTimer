import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

import App from './src/containers/App';

const store = configureStore();

class index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />>
      </Provider>
    );
  }
}

export default index;

AppRegistry.registerComponent('MyApp', () => App);

import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import configureStore from './src/helpers/configureStore';
import App from './src/containers/App';

console.ignoredYellowBox = ['Remote debugger', 'Warning: isMounted'];

const store = configureStore();
class index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default index;

AppRegistry.registerComponent('MyApp', () => index);

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/containers/App';

// console.ignoredYellowBox = ['Remote debugger', 'Warning: isMounted'];

class index extends React.Component {
  render() {
    return <App />;
  }
}

export default index;

AppRegistry.registerComponent('MyApp', () => App);

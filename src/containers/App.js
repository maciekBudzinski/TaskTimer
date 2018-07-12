import React from 'react';
import { Container } from 'native-base';
import RootNavigator from '../helpers/navigation';
import AppWithNavigationState from '../../index';

class App extends React.Component {
  componentDidMount() {
    console.log('App');
  }

  render() {
    return <AppWithNavigationState />;
  }
}

export default App;

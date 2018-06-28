import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: LoginScreen,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  }
);

class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

export default App;

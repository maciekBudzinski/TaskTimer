import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import HomeScreen from './HomeScreen';
import StartScreen from './StartScreen';
import configureStore from '../store/configureStore';

const store = configureStore();

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Start: {
      screen: StartScreen,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Start',
  }
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

export default App;

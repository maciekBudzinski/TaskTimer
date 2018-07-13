import React from 'react';
import { Provider, connect } from 'react-redux';
import { AppRegistry } from 'react-native';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { Root } from 'native-base';
import configureStore from './src/helpers/configureStore';
import RootNavigator from './src/helpers/navigation';

console.ignoredYellowBox = ['Remote debugger', 'Warning: isMounted', 'Unable to symbolicate', 'Warning'];

const store = configureStore();

const App = reduxifyNavigator(RootNavigator, 'root');
const mapStateToProps = state => ({
  state: state.reduxNavigation,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

class index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppWithNavigationState />
        </Root>
      </Provider>
    );
  }
}

export default index;

AppRegistry.registerComponent('MyApp', () => index);

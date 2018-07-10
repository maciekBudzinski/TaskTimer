import React from 'react';
import { Provider, connect } from 'react-redux';
import { AppRegistry } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import configureStore from './src/helpers/configureStore';
import App from './src/containers/App';
import RootNavigator from './src/helpers/navigation';

console.ignoredYellowBox = ['Remote debugger', 'Warning: isMounted', 'Unable to symbolicate', 'Warning'];

const store = configureStore();

// const AppWithReduxNavigation = ({ dispatch, nav }) => (
//   <RootNavigator
//     navigation={{
//       dispatch,
//       state: nav,
//     }}
//   />
// );

// const mapStateToProps = state => ({
//   nav: state.nav,
// });

// const ConnectedApp = connect(mapStateToProps)(AppWithReduxNavigation);

const Ap = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(Ap);

class index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
        {/* <ConnectedApp /> */}
        {/* <App /> */}
      </Provider>
    );
  }
}

export default index;

AppRegistry.registerComponent('MyApp', () => index);

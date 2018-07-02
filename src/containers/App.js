import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'native-base';
import configureStore from '../helpers/configureStore';
import RootNavigator from '../helpers/navigation';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

export default App;

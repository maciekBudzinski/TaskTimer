import React from 'react';
import { Container } from 'native-base';
import RootNavigator from '../helpers/navigation';

class App extends React.Component {
  render() {
    return (
      <Container>
        <RootNavigator />
      </Container>
    );
  }
}

export default App;

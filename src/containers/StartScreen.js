import React, { Component } from 'react';
import { Container } from 'native-base';
import Start from '../components/Start/Start';

class StartScreen extends Component {
  render() {
    return (
      <Container>
        <Start {...this.props} style={{ height: `100%` }} />
      </Container>
    );
  }
}

export default StartScreen;

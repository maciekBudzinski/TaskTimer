import React, { Component } from 'react';
import Login from '../components/Login';

class LoginScreen extends Component {
  render() {
    return <Login {...this.props} />;
  }
}

export default LoginScreen;

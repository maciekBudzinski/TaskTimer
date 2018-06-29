import React, { Component } from 'react';
import Home from '../components/Home/Home';

class HomeScreen extends Component {
  render() {
    return <Home {...this.props} />;
  }
}

export default HomeScreen;

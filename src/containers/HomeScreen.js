import React, { Component } from 'react';
import Home from '../components/home/Home';

class HomeScreen extends Component {
  render() {
    return <Home {...this.props} />;
  }
}

export default HomeScreen;

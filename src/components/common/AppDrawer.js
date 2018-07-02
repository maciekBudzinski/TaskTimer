import React, { Component } from 'react';
import { Text } from 'react-native';

import { Content, Container } from 'native-base';
import AppHeader from './AppHeader';

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        <AppHeader />
        <Content style={{ backgroundColor: '#FFFFFF' }}>
          <Text>Drawer</Text>
        </Content>
      </Container>
    );
  }
}

module.exports = Sidebar;

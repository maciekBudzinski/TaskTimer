import React, { Component } from 'react';
import { Text } from 'react-native';

import { Content, Container } from 'native-base';
import AppHeader from './AppHeader';
import AppHeaderScreen from '../../containers/AppHeaderScreen';

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        <AppHeaderScreen />
        <Content style={{ backgroundColor: '#FFFFFF' }}>
          <Text>Drawer</Text>
        </Content>
      </Container>
    );
  }
}

module.exports = Sidebar;

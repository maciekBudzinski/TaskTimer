import React from 'react';
import { View, Text } from 'native-base';
import { DrawerItems } from 'react-navigation';

const AppDrawer = props => (
  <View>
    <DrawerItems {...props} />
    <Text>Nowy tekst</Text>
  </View>
);

export default AppDrawer;

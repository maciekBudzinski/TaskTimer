import React from 'react';
import { Button, Text, View, Icon } from 'native-base';

const LogoutButton = () => (
  <Button transparent style={{ width: `100%` }}>
    <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 17 }}>
      <Icon name="log-out" style={{ fontSize: 28 }} />
      <Text
        style={{
          marginLeft: 32,
          marginTop: 3,
          color: `rgba(0,0,0,0.87)`,
          fontWeight: '500',
          fontSize: 14,
        }}
      >
        Wyloguj
      </Text>
    </View>
  </Button>
);

export default LogoutButton;
